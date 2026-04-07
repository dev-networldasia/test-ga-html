/**
 * WHO Growth Standards Data (0–10 years)
 * Source: WHO Child Growth Standards
 * Columns: label, w_m2sd, w_tb, w_p2sd, h_m2sd, h_tb, h_p2sd
 */

const WHO_DATA = {
  boy: [
    { label: "Sơ sinh", months: 0, w_m2sd: 2.5, w_tb: 3.3, w_p2sd: 4.4, h_m2sd: 46.1, h_tb: 49.9, h_p2sd: 53.7 },
    { label: "1 tháng",  months: 1, w_m2sd: 2.4, w_tb: 4.5, w_p2sd: 5.8, h_m2sd: 50.8, h_tb: 54.7, h_p2sd: 58.6 },
    { label: "2 tháng",  months: 2, w_m2sd: 4.3, w_tb: 5.6, w_p2sd: 7.1, h_m2sd: 54.4, h_tb: 58.4, h_p2sd: 62.4 },
    { label: "3 tháng",  months: 3, w_m2sd: 5.0, w_tb: 6.4, w_p2sd: 8.0, h_m2sd: 57.3, h_tb: 61.4, h_p2sd: 65.5 },
    { label: "4 tháng",  months: 4, w_m2sd: 5.6, w_tb: 7.0, w_p2sd: 8.7, h_m2sd: 59.7, h_tb: 63.9, h_p2sd: 68.0 },
    { label: "5 tháng",  months: 5, w_m2sd: 6.0, w_tb: 7.5, w_p2sd: 9.3, h_m2sd: 61.7, h_tb: 65.9, h_p2sd: 70.1 },
    { label: "6 tháng",  months: 6, w_m2sd: 6.4, w_tb: 7.9, w_p2sd: 9.8, h_m2sd: 63.3, h_tb: 67.6, h_p2sd: 71.9 },
    { label: "7 tháng",  months: 7, w_m2sd: 6.7, w_tb: 8.3, w_p2sd: 10.3, h_m2sd: 64.8, h_tb: 69.2, h_p2sd: 73.5 },
    { label: "8 tháng",  months: 8, w_m2sd: 6.9, w_tb: 8.6, w_p2sd: 10.7, h_m2sd: 66.2, h_tb: 70.6, h_p2sd: 75.0 },
    { label: "9 tháng",  months: 9, w_m2sd: 7.1, w_tb: 8.9, w_p2sd: 11.0, h_m2sd: 67.5, h_tb: 72.0, h_p2sd: 76.5 },
    { label: "10 tháng", months: 10, w_m2sd: 7.4, w_tb: 9.2, w_p2sd: 11.4, h_m2sd: 68.7, h_tb: 73.3, h_p2sd: 77.9 },
    { label: "11 tháng", months: 11, w_m2sd: 7.6, w_tb: 9.4, w_p2sd: 11.7, h_m2sd: 69.9, h_tb: 74.5, h_p2sd: 79.2 },
    { label: "12 tháng", months: 12, w_m2sd: 7.7, w_tb: 9.6, w_p2sd: 12.0, h_m2sd: 71.0, h_tb: 75.7, h_p2sd: 80.5 },
    { label: "15 tháng", months: 15, w_m2sd: 8.3, w_tb: 10.3, w_p2sd: 12.8, h_m2sd: 74.1, h_tb: 79.1, h_p2sd: 84.2 },
    { label: "18 tháng", months: 18, w_m2sd: 8.8, w_tb: 10.9, w_p2sd: 13.7, h_m2sd: 76.9, h_tb: 82.3, h_p2sd: 87.7 },
    { label: "21 tháng", months: 21, w_m2sd: 9.2, w_tb: 11.5, w_p2sd: 14.5, h_m2sd: 79.4, h_tb: 85.1, h_p2sd: 90.0 },
    { label: "24 tháng", months: 24, w_m2sd: 9.7, w_tb: 12.2, w_p2sd: 15.3, h_m2sd: 81.0, h_tb: 87.1, h_p2sd: 93.2 },
    { label: "2.5 tuổi", months: 30, w_m2sd: 10.5, w_tb: 13.3, w_p2sd: 16.9, h_m2sd: 85.1, h_tb: 91.9, h_p2sd: 98.7 },
    { label: "3 tuổi",   months: 36, w_m2sd: 11.3, w_tb: 14.3, w_p2sd: 18.3, h_m2sd: 88.7, h_tb: 96.1, h_p2sd: 103.5 },
    { label: "3.5 tuổi", months: 42, w_m2sd: 12.0, w_tb: 15.3, w_p2sd: 19.7, h_m2sd: 91.9, h_tb: 99.9, h_p2sd: 107.8 },
    { label: "4 tuổi",   months: 48, w_m2sd: 12.7, w_tb: 16.3, w_p2sd: 21.2, h_m2sd: 94.9, h_tb: 103.3, h_p2sd: 111.7 },
    { label: "4.5 tuổi", months: 54, w_m2sd: 13.4, w_tb: 17.3, w_p2sd: 22.7, h_m2sd: 97.8, h_tb: 106.7, h_p2sd: 115.5 },
    { label: "5 tuổi",   months: 60, w_m2sd: 14.1, w_tb: 18.3, w_p2sd: 24.2, h_m2sd: 100.7, h_tb: 110.0, h_p2sd: 119.2 },
    { label: "5.5 tuổi", months: 66, w_m2sd: 15.0, w_tb: 19.4, w_p2sd: 25.5, h_m2sd: 103.4, h_tb: 112.9, h_p2sd: 122.4 },
    { label: "6 tuổi",   months: 72, w_m2sd: 15.9, w_tb: 20.5, w_p2sd: 27.1, h_m2sd: 106.1, h_tb: 116.0, h_p2sd: 125.8 },
    { label: "6.5 tuổi", months: 78, w_m2sd: 16.8, w_tb: 21.7, w_p2sd: 28.9, h_m2sd: 108.7, h_tb: 118.9, h_p2sd: 129.1 },
    { label: "7 tuổi",   months: 84, w_m2sd: 17.7, w_tb: 22.9, w_p2sd: 30.7, h_m2sd: 111.2, h_tb: 121.7, h_p2sd: 132.3 },
    { label: "7.5 tuổi", months: 90, w_m2sd: 18.6, w_tb: 24.1, w_p2sd: 32.6, h_m2sd: 113.6, h_tb: 124.5, h_p2sd: 135.5 },
    { label: "8 tuổi",   months: 96, w_m2sd: 19.5, w_tb: 25.4, w_p2sd: 34.7, h_m2sd: 116.0, h_tb: 127.3, h_p2sd: 138.6 },
    { label: "8.5 tuổi", months: 102, w_m2sd: 20.4, w_tb: 26.7, w_p2sd: 37.0, h_m2sd: 118.3, h_tb: 129.9, h_p2sd: 141.6 },
    { label: "9 tuổi",   months: 108, w_m2sd: 21.3, w_tb: 28.1, w_p2sd: 39.4, h_m2sd: 120.5, h_tb: 132.6, h_p2sd: 144.6 },
    { label: "9.5 tuổi", months: 114, w_m2sd: 22.2, w_tb: 29.6, w_p2sd: 42.1, h_m2sd: 122.8, h_tb: 135.2, h_p2sd: 147.6 },
    { label: "10 tuổi",  months: 120, w_m2sd: 23.2, w_tb: 31.2, w_p2sd: 45.0, h_m2sd: 125.0, h_tb: 137.8, h_p2sd: 150.5 },
  ],
  girl: [
    { label: "Sơ sinh", months: 0, w_m2sd: 2.4, w_tb: 3.2, w_p2sd: 4.2, h_m2sd: 45.4, h_tb: 49.1, h_p2sd: 52.9 },
    { label: "1 tháng",  months: 1, w_m2sd: 3.2, w_tb: 4.2, w_p2sd: 5.5, h_m2sd: 49.8, h_tb: 53.7, h_p2sd: 57.6 },
    { label: "2 tháng",  months: 2, w_m2sd: 3.9, w_tb: 5.1, w_p2sd: 6.6, h_m2sd: 53.0, h_tb: 57.1, h_p2sd: 61.1 },
    { label: "3 tháng",  months: 3, w_m2sd: 4.5, w_tb: 5.8, w_p2sd: 7.5, h_m2sd: 55.6, h_tb: 59.8, h_p2sd: 64.0 },
    { label: "4 tháng",  months: 4, w_m2sd: 5.0, w_tb: 6.4, w_p2sd: 8.2, h_m2sd: 57.8, h_tb: 62.1, h_p2sd: 66.4 },
    { label: "5 tháng",  months: 5, w_m2sd: 5.4, w_tb: 6.9, w_p2sd: 8.8, h_m2sd: 59.6, h_tb: 64.0, h_p2sd: 68.5 },
    { label: "6 tháng",  months: 6, w_m2sd: 5.7, w_tb: 7.3, w_p2sd: 9.3, h_m2sd: 61.2, h_tb: 65.7, h_p2sd: 70.3 },
    { label: "7 tháng",  months: 7, w_m2sd: 6.0, w_tb: 7.6, w_p2sd: 9.8, h_m2sd: 62.7, h_tb: 67.3, h_p2sd: 71.9 },
    { label: "8 tháng",  months: 8, w_m2sd: 6.3, w_tb: 7.9, w_p2sd: 10.2, h_m2sd: 64.0, h_tb: 68.7, h_p2sd: 73.5 },
    { label: "9 tháng",  months: 9, w_m2sd: 6.5, w_tb: 8.2, w_p2sd: 10.5, h_m2sd: 65.3, h_tb: 70.1, h_p2sd: 75.0 },
    { label: "10 tháng", months: 10, w_m2sd: 6.7, w_tb: 8.5, w_p2sd: 10.9, h_m2sd: 66.5, h_tb: 71.5, h_p2sd: 76.4 },
    { label: "11 tháng", months: 11, w_m2sd: 6.9, w_tb: 8.7, w_p2sd: 11.2, h_m2sd: 67.7, h_tb: 72.8, h_p2sd: 77.8 },
    { label: "12 tháng", months: 12, w_m2sd: 7.0, w_tb: 8.9, w_p2sd: 11.5, h_m2sd: 68.9, h_tb: 74.0, h_p2sd: 79.2 },
    { label: "15 tháng", months: 15, w_m2sd: 7.6, w_tb: 9.6, w_p2sd: 12.4, h_m2sd: 72.0, h_tb: 77.5, h_p2sd: 83.0 },
    { label: "18 tháng", months: 18, w_m2sd: 8.1, w_tb: 10.2, w_p2sd: 13.2, h_m2sd: 74.9, h_tb: 80.7, h_p2sd: 86.5 },
    { label: "21 tháng", months: 21, w_m2sd: 8.6, w_tb: 10.9, w_p2sd: 14.0, h_m2sd: 77.5, h_tb: 83.7, h_p2sd: 89.8 },
    { label: "24 tháng", months: 24, w_m2sd: 9.0, w_tb: 11.5, w_p2sd: 14.8, h_m2sd: 80.0, h_tb: 86.4, h_p2sd: 92.9 },
    { label: "2.5 tuổi", months: 30, w_m2sd: 10.0, w_tb: 12.7, w_p2sd: 16.5, h_m2sd: 83.6, h_tb: 90.7, h_p2sd: 97.7 },
    { label: "3 tuổi",   months: 36, w_m2sd: 10.8, w_tb: 13.9, w_p2sd: 18.1, h_m2sd: 87.4, h_tb: 95.1, h_p2sd: 102.7 },
    { label: "3.5 tuổi", months: 42, w_m2sd: 11.6, w_tb: 15.0, w_p2sd: 19.8, h_m2sd: 90.9, h_tb: 99.0, h_p2sd: 107.2 },
    { label: "4 tuổi",   months: 48, w_m2sd: 12.3, w_tb: 16.1, w_p2sd: 21.5, h_m2sd: 94.1, h_tb: 102.7, h_p2sd: 111.3 },
    { label: "4.5 tuổi", months: 54, w_m2sd: 13.0, w_tb: 17.2, w_p2sd: 23.2, h_m2sd: 97.1, h_tb: 106.2, h_p2sd: 115.2 },
    { label: "5 tuổi",   months: 60, w_m2sd: 13.7, w_tb: 18.2, w_p2sd: 24.9, h_m2sd: 99.9, h_tb: 109.4, h_p2sd: 118.9 },
    { label: "5.5 tuổi", months: 66, w_m2sd: 14.6, w_tb: 19.1, w_p2sd: 26.2, h_m2sd: 102.3, h_tb: 112.2, h_p2sd: 122.0 },
    { label: "6 tuổi",   months: 72, w_m2sd: 15.3, w_tb: 20.2, w_p2sd: 27.8, h_m2sd: 104.9, h_tb: 115.1, h_p2sd: 125.4 },
    { label: "6.5 tuổi", months: 78, w_m2sd: 16.0, w_tb: 21.2, w_p2sd: 29.6, h_m2sd: 107.4, h_tb: 118.0, h_p2sd: 128.6 },
    { label: "7 tuổi",   months: 84, w_m2sd: 16.8, w_tb: 22.4, w_p2sd: 31.4, h_m2sd: 109.9, h_tb: 120.8, h_p2sd: 131.7 },
    { label: "7.5 tuổi", months: 90, w_m2sd: 17.6, w_tb: 23.6, w_p2sd: 33.5, h_m2sd: 112.4, h_tb: 123.7, h_p2sd: 134.9 },
    { label: "8 tuổi",   months: 96, w_m2sd: 18.6, w_tb: 25.0, w_p2sd: 35.8, h_m2sd: 115.0, h_tb: 126.6, h_p2sd: 138.2 },
    { label: "8.5 tuổi", months: 102, w_m2sd: 19.6, w_tb: 26.6, w_p2sd: 38.3, h_m2sd: 117.6, h_tb: 129.5, h_p2sd: 141.1 },
    { label: "9 tuổi",   months: 108, w_m2sd: 20.8, w_tb: 28.2, w_p2sd: 41.0, h_m2sd: 120.3, h_tb: 132.5, h_p2sd: 144.7 },
    { label: "9.5 tuổi", months: 114, w_m2sd: 20.0, w_tb: 30.0, w_p2sd: 43.8, h_m2sd: 123.0, h_tb: 135.5, h_p2sd: 148.1 },
    { label: "10 tuổi",  months: 120, w_m2sd: 23.3, w_tb: 31.9, w_p2sd: 46.9, h_m2sd: 125.8, h_tb: 138.6, h_p2sd: 151.4 },
  ]
};

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
