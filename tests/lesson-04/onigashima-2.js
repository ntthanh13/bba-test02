// Bài 2: Tạo hàm printBountyLeaderboard:
// Khai báo crewList
const crewList = [
    { name: "Luffy", bounty: 300 },
    { name: "Zoro", bounty: 120 },
    { name: "Nami", bounty: 16 },
    { name: "Usopp", bounty: 30 },
    { name: "Sanji", bounty: 77 }
];
// Kiểm tra trước khi sắp xếp
// console.log(crewList);

// Sắp xếp mảng thành viên theo thứ tự tiền thưởng (bounty) từ cao đến thấp.
crewList.sort((a, b) => b.bounty - a.bounty);
// Kiểm tra sau khi sắp xếp
// console.log(crewList);

// In ra bảng xếp hạng danh sách truy nã
const medal = ["Gold", "Silver", "Bronze"];
for (i = 0; i < crewList.length; i++) {
    if (i < 3) {
        console.log(`${medal[i]} ${i + 1}/ ${crewList[i].name} - ${crewList[i].bounty}.000.000 Berry`);
    } else {
        console.log(`   ${i + 1}/ ${crewList[i].name} - ${crewList[i].bounty}.000.000 Berry`);
    }
};
