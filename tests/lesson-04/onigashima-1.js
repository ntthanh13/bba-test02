// Bài 1: Tạo hàm upgradeCrew:
// Khai báo mảng pirates
const pirates = [
    { name: "Luffy", bounty: 300, strength: 500 },
    { name: "Zoro", bounty: 120, strength: 400 },
    { name: "Nami", bounty: 16, strength: 100 },
    { name: "Usopp", bounty: 30, strength: 140 },
    { name: "Sanji", bounty: 77, strength: 350 }
];

// Tạo list awakenPirates mới
const awakenPirates = pirates.map(value => ({
    name: value.name.toUpperCase(),
    bounty: value.bounty * 2,
    strength: value.strength * 1.5
}));
// Kiểm tra kết quả
// console.log(awakenPirates);

// Lọc ra các thành viên có mức strength > 500, tên mảng mới là monsterTrioCandidates
const monsterTrioCandidates = awakenPirates.filter(keyMember => keyMember.strength > 500);
// Kiểm tra kết quả
// console.log(monsterTrioCandidates);
