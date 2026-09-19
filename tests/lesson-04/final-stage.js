// Hãy đếm và in ra có bao nhiêu cặp số nguyên dương (a, b) từ 1 tới 100 sao cho tích của chúng chia hết cho 19
// Lưu ý:
// - Mỗi cặp số chỉ được tính 1 lần — (1, 19) và (19, 1) tính là 1 cặp.
// - 2 số trong cặp được phép bằng nhau nếu thỏa mãn điều kiện.

// Khai báo biến đếm
let count = 0;
// Chạy số a từ 1 đến 100
for (a = 1; a <= 100; a++) {
    // Chạy số b từ a đến 100 => tránh hiện tượng bị lặp trùng
    // Ví dụ: nếu a = 19 => b = 19 => không bị trùng lại cặp (1, 19), (2, 19),...
    for (b = a; b <= 100; b++) {
        if ((a * b) % 19 === 0) {   // Kiểm tra tích a*b chia hết 19 hay không
            count++;                // Thỏa điều kiện thì tăng biến đếm
        };
    };
};
// In ra số cặp nguyên dương chia hết cho 19 (không trùng)
console.log(count);