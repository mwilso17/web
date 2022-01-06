function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var car1 = new Car('Honda', 'Civic', 2006);
var car2 = new Car('Toyota', 'Camry', 2011);
var car3 = new Car('Ford', 'Mustang', 2009);
car3.fourWheelDrive = true;
car3.bumperStickers = false;

console.log(car3)
console.log(car2)