const players = [
  { name: "Messi", goals: 30 },
  undefined,
  { name: "Ronaldo", goals: 28 },
  { name: "Neymar", goals: 22 },
  { goals: 2 },
  { name: "Mbappé", goals: 25 },
  { name: "Pele", goals: null },
];

const filteredPlayers = players.filter((player) => {
  return player && player.name && player.goals;
});

console.log("Sau khi lọc:");
for (let i = 0; i < filteredPlayers.length; i++) {
  console.log("Name:", filteredPlayers[i].name);
  console.log("Goals:", filteredPlayers[i].goals);
  console.log("-----------------");
}

let MaxGoals = filteredPlayers.reduce((max, player) => {
  return player.goals > max.goals ? player : max;
}, filteredPlayers[0]); // Khởi tạo biến max với phần tử đầu tiên của mảng

console.log("Cầu thủ có số bàn thắng cao nhất:", MaxGoals.name);
console.log("Số bàn thắng:", MaxGoals.goals); // Sửa lỗi chính tả: golas -> goals
