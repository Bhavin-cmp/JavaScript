/* //! promise with variable
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("promissed Created");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise cosnsumed");
});

//! promise without variable

new Promise((resolve, rejected) => {
  setTimeout(() => {
    console.log("Prmise two created");
    resolve();
  }, 2500);
}).then(() => {
  console.log("Promise two consumed");
});

//! Promise Three With pass Data in Resolve Function
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({
      userName: "Bhavin",
      email: "Test@gmail.com",
    });
  }, 2500);
});

promiseThree.then(function (data) {
  console.log(data);
});

//! Promise Four with error handling with Catch and Finally

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ userName: "Bhavin", password: 12345 });
    } else {
      reject("Error:Something is Wrong");
    }
  }, 3500);
});

promiseFour
  .then((user) => {
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally The promise is resolved or Rejected");
  });

//! Promise Five using async await with error Handling using try catch

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ userName: "Javascript", password: 12345 });
    } else {
      reject("Error:Javascript is Wrong");
    }
  }, 3500);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log("first", error);
  }
}

consumePromiseFive();

//! using async await with API and try catch
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
}

getAllUsers(); */

//! other way using then catch we no need to add try catch here

 fetch("https://jsonplaceholder.typicode.com/user")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
 