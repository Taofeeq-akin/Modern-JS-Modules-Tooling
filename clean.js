const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

const addEpenses = function (value, description, user) {
  if (!user) user = 'jonas';
  user = user.toLowerCase();

  // let limit;
  // if (spendingLimits[user]) {
  //   limit = spendingLimits[user];
  // } else {
  //   limit = 0;
  // }

  // Ternary insted of if statement
  const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  if (value <= limit) {
    budget.push({ value: -value, description: description, user: user });
  }
};
addEpenses(10, 'Pizza 🍕');
addEpenses(100, 'Going to movies 🍿', 'Matilda');
addEpenses(200, 'Stuff', 'Jay');
console.log(budget);

const check = function () {
  for (const el of budget) {
    let limit;
    if (spendingLimits[el.user]) {
      limit = spendingLimits[el.user];
    } else {
      limit = 0;
    }

    if (el.value < -limit) {
      el.flag = 'limit';
    }
  }
};
check();

console.log(budget);

const bigExpenses = function (limit) {
  const output = '';
  for (const el of budget) {
    if (el.value <= -limit) {
      output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
