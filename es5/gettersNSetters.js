const person = {
  fName: "Ruchi",
  lName: "Sinha",
  set age(ageVal) {
    if (ageVal > 0) {
      this._age = ageVal;
    } else {
      console.error("Age cannot be less than 0");
    }
  },
  get age() {
    return this._age;
  },
  //   get fullName() {
  //     return `${this.fName} ${this.lName}`;
  //   },
};

person.age = -23;
// person.qualification = "Graduate";
console.log(person.age);

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  get area() {
    return this.length * this.width;
  }
}

const rect = new Rectangle(10, 20);
console.log("line 35: ", rect.area);
