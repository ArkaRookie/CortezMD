let rewards = {
  exp: 1000,
  sampah: 101,
  string: 25,
  batu: Math.min(30, 3 - (user.batu || 0)), // Ensure batu reward does not exceed 3
  iron: Math.min(1, 3 - (user.iron || 0)), // Ensure iron reward does not exceed 3
  diamond: Math.min(1, 3 - (user.diamond || 0)), // Ensure diamond reward does not exceed 3
  emerald: Math.min(4, 3 - (user.emerald || 0)), // Ensure emerald reward does not exceed 3
  common: 2 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
  uncommon: 1,
  mythic: 1,
  legendary: 1,
  emas: Math.min(1, 3 - (user.emas || 0)), // Ensure emas reward does not exceed 3
};

// Filter rewards where the value is 0 (when the user's ore count has already reached 3)
rewards = Object.fromEntries(Object.entries(rewards).filter(([key, value]) => value > 0));

let totalChance = Object.values(rewards).reduce((acc, val) => acc + val, 0);
let randomNumber = Math.random() * totalChance;
let rewardResult = '';
let currentChance = 0;

for (let reward of Object.keys(rewards)) {
  currentChance += rewards[reward];
  if (randomNumber < currentChance) {
    rewardResult = reward;
    user[reward] = (user[reward] || 0) + 1; // Increment the user's reward count
    break;
  }
}