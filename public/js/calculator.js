/**
 * calculator.js
 * Form initialization, age calculation, WHO lookup, and result rendering.
 */

// ===================== POPULATE DROPDOWNS =====================
(function initDOBSelects() {
  const dayEl = document.getElementById('dobDay');
  const monthEl = document.getElementById('dobMonth');
  const yearEl = document.getElementById('dobYear');

  for (let d = 1; d <= 31; d++) {
    const opt = document.createElement('option');
    opt.value = d;
    opt.textContent = d < 10 ? '0' + d : d;
    dayEl.appendChild(opt);
  }
  for (let m = 1; m <= 12; m++) {
    const opt = document.createElement('option');
    opt.value = m;
    opt.textContent = m < 10 ? '0' + m : m;
    monthEl.appendChild(opt);
  }
  const currentYear = new Date().getFullYear();
  for (let y = currentYear; y >= currentYear - 12; y--) {
    const opt = document.createElement('option');
    opt.value = y;
    opt.textContent = y;
    yearEl.appendChild(opt);
  }
})();

// ===================== POPULATE WHO TABLE =====================
let currentTab = 'boy';

function switchTab(gender) {
  currentTab = gender;
  document.getElementById('tabBoy').classList.toggle('tab-btn--active', gender === 'boy');
  document.getElementById('tabGirl').classList.toggle('tab-btn--active', gender === 'girl');
  renderWhoTable(gender);
}

function renderWhoTable(gender) {
  const tbody = document.getElementById('whoTableBody');
  const data = WHO_DATA[gender];
  tbody.innerHTML = '';
  data.forEach((row, idx) => {
    const tr = document.createElement('tr');
    tr.className = idx % 2 === 0 ? 'tr-even' : 'tr-odd';
    tr.innerHTML = `
      <td class="td-age">${row.label}</td>
      <td>${row.w_m2sd}</td>
      <td class="td-mid"><strong>${row.w_tb}</strong></td>
      <td>${row.w_p2sd}</td>
      <td>${row.h_m2sd}</td>
      <td class="td-mid"><strong>${row.h_tb}</strong></td>
      <td>${row.h_p2sd}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Initial render
renderWhoTable('boy');

/**
 * Find the closest WHO data row for a given age in months
 */
function findWhoRow(gender, ageMonths) {
  const data = WHO_DATA[gender];
  if (!data) return null;
  // Find closest months
  let closest = data[0];
  let minDiff = Math.abs(data[0].months - ageMonths);
  for (let i = 1; i < data.length; i++) {
    const diff = Math.abs(data[i].months - ageMonths);
    if (diff < minDiff) {
      minDiff = diff;
      closest = data[i];
    }
  }
  return closest;
}

// ===================== CALCULATOR LOGIC =====================
function calcAgeMonths(day, month, year) {
  const today = new Date();
  const bday = new Date(year, month - 1, day);
  
  // If bday is in the future relative to today
  if (bday > today) return -1;

  let months = (today.getFullYear() - bday.getFullYear()) * 12;
  months += today.getMonth() - bday.getMonth();
  if (today.getDate() < bday.getDate()) months--;
  return months;
}

function formatAge(months) {
  if (months < 24) return `${months} tháng`;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  return rem > 0 ? `${years} tuổi ${rem} tháng` : `${years} tuổi`;
}

function evaluateStatus(val, low, mid, high) {
  if (val < low) return 'low';
  if (val > high) return 'high';
  if (val >= low && val <= mid * 1.15) return 'normal';
  return 'above_normal';
}

function buildResultComment(weightStatus, heightStatus) {
  const msgs = [];
  if (weightStatus === 'low') msgs.push('⚠️ Bé đang thiếu ký (nhẹ cân hơn chuẩn WHO).');
  else if (weightStatus === 'high') msgs.push('⚠️ Bé đang thừa ký (nặng cân hơn chuẩn WHO).');
  else msgs.push('✅ Cân nặng của bé đạt chuẩn.');

  if (heightStatus === 'low') msgs.push('⚠️ Bé đang thấp hơn chuẩn WHO (cần theo dõi thêm).');
  else if (heightStatus === 'high') msgs.push('🌟 Chiều cao tốt, vượt chuẩn WHO.');
  else msgs.push('✅ Chiều cao của bé đạt chuẩn.');

  return msgs.join(' ');
}

function getOverallStatus(weightStatus, heightStatus) {
  if (weightStatus === 'low' || heightStatus === 'low') return { emoji: '⚠️', title: 'Thiếu cân / Thấp bé', cls: 'result--warning' };
  if (weightStatus === 'high' || heightStatus === 'high') return { emoji: '🍽️', title: 'Thừa cân / Vượt chuẩn', cls: 'result--high' };
  return { emoji: '✅', title: 'Chuẩn', cls: 'result--ok' };
}

// Highlight matching row in WHO table
function highlightTableRow(gender, ageMonths) {
  // Switch tab if needed
  if (currentTab !== gender) switchTab(gender);
  const tbody = document.getElementById('whoTableBody');
  Array.from(tbody.rows).forEach((tr, i) => {
    tr.classList.remove('tr-highlight');
    const row = WHO_DATA[gender][i];
    if (row && Math.abs(row.months - ageMonths) <= 1) {
      tr.classList.add('tr-highlight');
      setTimeout(() => tr.scrollIntoView({ behavior: 'smooth', block: 'center' }), 400);
    }
  });
}

// Form submit
document.getElementById('calcForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const day   = parseInt(document.getElementById('dobDay').value);
  const month = parseInt(document.getElementById('dobMonth').value);
  const year  = parseInt(document.getElementById('dobYear').value);
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const genderEl = document.querySelector('input[name="gender"]:checked');

  // Validations
  if (!day || !month || !year) return showToast('Vui lòng chọn ngày sinh!');
  if (!genderEl) return showToast('Vui lòng chọn giới tính!');
  if (!height || height < 30 || height > 220) return showToast('Chiều cao không hợp lệ! (30–220 cm)');
  if (!weight || weight < 1 || weight > 200) return showToast('Cân nặng không hợp lệ! (1–200 kg)');

  // Map radio value ("male"/"female") → WHO_DATA key ("boy"/"girl")
  const genderMap = { male: 'boy', female: 'girl' };
  const gender = genderMap[genderEl.value] || genderEl.value;
  const ageMonths = calcAgeMonths(day, month, year);
  console.log('Calculated Age (Months):', ageMonths);

  if (ageMonths < 0) return showToast('Ngày sinh không thể ở tương lai!');
  if (ageMonths > 120) return showToast('Công cụ này chỉ hỗ trợ trẻ từ 0 - 10 tuổi!');
  
  const whoRow = findWhoRow(gender, ageMonths);
  console.log('WHO Data Row found:', whoRow);
  
  if (!whoRow) return showToast('Không tìm thấy dữ liệu WHO cho độ tuổi này.');

  const weightStatus = evaluateStatus(weight, whoRow.w_m2sd, whoRow.w_tb, whoRow.w_p2sd);
  const heightStatus = evaluateStatus(height, whoRow.h_m2sd, whoRow.h_tb, whoRow.h_p2sd);
  const overall = getOverallStatus(weightStatus, heightStatus);

  // Update modal content
  document.getElementById('resultAge').textContent    = formatAge(ageMonths);
  document.getElementById('resultHeight').textContent = height + ' cm';
  document.getElementById('resultWeight').textContent = weight + ' kg';
  document.getElementById('resultWhoHeight').textContent = whoRow.h_tb + ' cm';
  document.getElementById('resultWhoWeight').textContent = whoRow.w_tb + ' kg';
  document.getElementById('resultComment').textContent   = buildResultComment(weightStatus, heightStatus);
  document.getElementById('resultEmoji').textContent  = overall.emoji;
  document.getElementById('resultTitle').textContent  = overall.title;
  document.getElementById('modalBadgeText').textContent = overall.title;

  // Apply color theme to modal header & badge
  const header = document.getElementById('modalHeader');
  const badge  = document.getElementById('modalBadge');
  const themeMap = {
    'result--ok':      ['modal-header--ok',      'modal-badge--ok'],
    'result--warning': ['modal-header--warning',  'modal-badge--warning'],
    'result--high':    ['modal-header--high',     'modal-badge--high'],
  };
  header.className = 'modal-header';
  badge.className  = 'modal-badge';
  const [hCls, bCls] = themeMap[overall.cls] || ['modal-header--ok', 'modal-badge--ok'];
  header.classList.add(hCls);
  badge.classList.add(bCls);

  // Open modal
  document.getElementById('resultModal').classList.add('modal--open');
  document.body.style.overflow = 'hidden';
});

// Close modal helpers
function closeModal() {
  document.getElementById('resultModal').classList.remove('modal--open');
  document.body.style.overflow = '';
}
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOk').addEventListener('click', closeModal);
document.getElementById('resultModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// Reset
document.getElementById('btnReset').addEventListener('click', function () {
  document.getElementById('calcForm').reset();
  closeModal();
  document.querySelectorAll('.tr-highlight').forEach(tr => tr.classList.remove('tr-highlight'));
});

// ===================== TOAST =====================
function showToast(msg) {
  let toast = document.getElementById('toastMsg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastMsg';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('toast--show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('toast--show'), 3000);
}
