const db = require("./utils/db");

//Sử dụng Promise
// const promise = db.load("SELECT * FROM categories");
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("done");
//   });



//Sử dụng async await
const main = async () => {
  const rows = await db.load("SELECT * FROM categories");
  console.log(rows);
}
main();
