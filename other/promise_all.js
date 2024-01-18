console.log("person1: shows ticket");
console.log("person2: shows ticket");

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

  let [popcorn, butter, coldDrink] = await Promise.all([
    getPopcorn,
    getButter,
    getColdDrink,
  ]);

  console.log(`${popcorn}, ${butter}, ${coldDrink}`);

  return ticket;
};

preMovie().then((message) => console.log(`person3: shows ${message}`));

console.log("person4: shows ticket");
console.log("person5: shows ticket");
