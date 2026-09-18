// Khai báo
let navigatorName = "Luffy";
let currentHakiLevel = 3;
// Lượng thịt tiêu thụ ở 3 đảo
const islandA = 15;
const islandB = 25;
const islandC = 40;

// Tính tổng lượng thịt tiêu thụ ở 3 đảo
const tongLuongThit = islandA + islandB + islandC;

// Tính trung bình tổng lượng thịt tiêu thụ
const trungBinhCongLuongThit = tongLuongThit / 3;

// Lượng thịt dư sau khi chia cho 3 thành viên
const luongThitDu = tongLuongThit % 3;
console.log(luongThitDu); // In kết quả
