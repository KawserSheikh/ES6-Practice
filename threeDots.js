const ages = [12, 16, 15, 18, 19];
const ages2 = [20, 22, 27, 24, 29];
const ages3 = [30, 32, 37, 34, 39];

const allAges =ages.concat(ages2).concat(ages3).concat([50]);

const allAges2 = [...ages, ...ages2, ...ages3, 49]

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250];
// const maximum = Math.max(business, minister, sochib)
const maximum = Math.max(...takaPoisa);

console.log(allAges);
console.log(allAges2);
console.log(maximum);