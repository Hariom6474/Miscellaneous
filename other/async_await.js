console.log("person1: shows ticket");
console.log("person2: shows ticket");

// const getPopcorn = promiseticket.then((t) => {
//   console.log(`person3: shows ${t}`);
//   console.log("buy popcorn");
//   return new Promise((resolve, reject) => {
//     resolve(`${t} popcorn`);
//   });
// });

// const getButter = getPopcorn.then((t) => {
//   console.log("buy butter");
//   return new Promise((resolve, reject) => {
//     resolve(`${t} butter`);
//   });
// });

// getButter.then((t) => console.log(t));

const preMovie = async () => {
  const promiseticket = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 2000);
  });

  const getPopcorn = new Promise((resolve, reject) => {
    resolve("Popcorn");
  });

  const getButter = new Promise((resolve, reject) => {
    resolve("Butter");
  });

  const getColdDrink = new Promise((resolve, reject) => {
    resolve("Cold Drink");
  });

  let ticket = await promiseticket;

  console.log("buy popcorn");

  let popcorn = await getPopcorn;

  console.log("buy butter");

  let butter = await getButter;

  console.log("Got Butter");

  let coldDrink = await getColdDrink;

  console.log("Got Cold Drink");

  return ticket;
};

preMovie().then((message) => console.log(`person3: shows ${message}`));

console.log("person4: shows ticket");
console.log("person5: shows ticket");
