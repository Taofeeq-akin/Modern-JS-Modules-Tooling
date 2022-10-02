'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// Using Object.freeze to make the function immutable
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// spendingLimits.jay = 400;
// console.log(spendingLimits)

const getLimit = (limits, user) => spendingLimits?.[user] ?? 0;

// Pure function
const addEpenses = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  // let limit;
  // if (spendingLimits[user]) {
  //   limit = spendingLimits[user];
  // } else {
  //   limit = 0;
  // }

  // Ternary insted of if statement
  // const limit = getLimit(cleanUser);

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;

  // budget.push({ value: -value, description, user: cleanUser }); // This wont work again cus we cant budget array is noe immutable
};
const budget1 = addEpenses(budget, spendingLimits, 10, 'Pizza 🍕');
const budget2 = addEpenses(
  budget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const budget3 = addEpenses(budget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(budget1);
console.log(budget2);
console.log(budget3);

const checkExpenses = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
};
const finalBudget = checkExpenses(budget3);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2)).join(' / ');
  // let output = '';
  // for (const entry of budget) {
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)}  / ` : '';

  // }
  // output = output.slice(0, -2); // Remove last '/ '
  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 200);
