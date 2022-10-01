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

const getLimit = user => spendingLimits?.[user] ?? 0;

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
  const limit = getLimit(user)

  if (value <= limit) {
    budget.push({ value: -value, description, user });
  }
};
addEpenses(10, 'Pizza 🍕');
addEpenses(100, 'Going to movies 🍿', 'Matilda');
addEpenses(200, 'Stuff', 'Jay');
console.log(budget);

const checkExpenses = function () {
  for (const entry of budget) {
    // let limit;
    // if (spendingLimits[entry.user]) {
    //   limit = spendingLimits[el.user];
    // } else {
    //   limit = 0;
    // }
    // const limit = spendingLimits[entry.user] ? spendingLimits[entry.user] : 0;


    if (entry.value < -getLimit(entry.user)) {
      entry.flag = 'limit';
    }
  }
};
checkExpenses();

console.log(budget);

const bigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) {
    output += entry.value <= -bigLimit ? `${entry.description.slice(-2)}  / ` : '';
    // if (entry.value <= -bigLimit) {
    //   output += entry.description.slice(-2) + ' / '; // Emojis are 2 chars
    // }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

bigExpenses(20)