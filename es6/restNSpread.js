const hobbies = ["Reading", "Coding", "Sleeping", "Music", "Movies"];

// const [hobby1, hobby2, ...remainingHobbies] = hobbies;
const [hobby1, ...remainingHobbies] = hobbies;

// console.log(hobby1);
// console.log(hobby2);
// console.log(remainingHobbies);

const copyArr = [...hobbies];
// console.log(copyArr);

const person = {
  name: "Ramesh",
  age: 28,
};

function myBio(firstName, lastName, ...otherInfo) {
  return otherInfo;
}

const retrnVal = myBio(
  "Bijay",
  "Singh",
  "Coder",
  "teacher",
  "husband",
  "father"
);
// console.log(retrnVal);

function getFN(user) {
  return user.name;
}

function captalizeName(str) {
  return str.toUpperCase();
}

function addSalutation(str) {
  return `Mr. ${str}`;
}

const funcArr = [getFN, captalizeName, addSalutation];

// funcArr.reduce((val, func) => {
//   func(val);
// }, person);

const phone = {
  brand: "apple",
  model: "iphone 15",
  price: "too high!!",
};

// const brand = phone.brand;
// console.log(brand);

const { brand, model } = phone;
// console.log(brand);
// console.log(model);

// const { brand: phone_brand } = phone;
// console.log(phone_brand);

let processor = "intel 5";
let motherboard = "Gigabyte";
let ram = "vengance";

let computer = {
  processor,
  motherboard,
  ram,
};

const obj = {
  firstName: "Bijay",
  lastName: "Singh",
  flat: 123,
};
const flatNo = obj.flat;
const fn = obj.firstName;

const { firstName, lastName } = obj;

const laptop = { ...computer };
laptop.ram = "16GB";
console.log("Laptop: ", laptop);
console.log("Computer: ", computer);
