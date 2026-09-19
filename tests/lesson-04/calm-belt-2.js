// Khai báo biến
let devilFruit = "gomu-gomu";
let awakenState = "";

// Kiểm tra trạng thái thức tỉnh tương ứng và in ra màn hình
if (devilFruit === "gomu-gomu") {
    awakenState = "Gear 5 Unlocked!";
} else if (devilFruit === "mera-mera") {
    awakenState = "Flame Emperor!";
} else if (devilFruit === "ope-ope") {
    awakenState = "Room & Ope!";
} else if (devilFruit === "none") {
    awakenState = "Normal human";
} else {
    awakenState = "Unknow devil fruit";
}
console.log(awakenState);