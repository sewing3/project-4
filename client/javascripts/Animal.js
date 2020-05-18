// jshint esversion: 6


//Class Types: Basic syntax
//https://javascript.info/class

//Class Types: Inheritance
//https://javascript.info/class-inheritance

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  //setter
  run(speed) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  //setter
  stop() {
    this.speed = 0;
    console.log(`${this.name} stopped.`);
  }
}

// Inherit from Animal
class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  hide() {
    console.log(`${this.name} hides!`);
  }

  //override the inherited method
  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}


// Inherit from Animal
class Dog extends Animal {
  //your code goes here..

}

let test_driver = () => {

  let test_rabbit = () => {
    let rabbit = new Rabbit("White Rabbit", 10);
    rabbit.run(5);
    rabbit.hide();
    rabbit.stop();
    console.log(rabbit.name);
    console.log(rabbit.earLength);
  }

  let test_dog = () => {
    let fang = new Dog("Fang", "Airedale", 50, "Woof");
    fang.run(20);
    console.log(`${fang.name} is a ${fang.breed} dog weighing ${fang.weight} lbs. that can run ${fang.speed} mph.`);
    console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);
    fang.stop();
    const  zero = new Dog("Zero", "Beagle", 22, "Yip" );
    zero.run(10);
    console.log(`${zero.name} is a ${zero.breed} dog weighing ${zero.weight} lbs. that can run ${zero.speed} mph.`);
    console.log(`Look, a cat! ${zero.name} barks: ${zero.bark()}`);
    zero.stop();

  }

  //run tests
  test_rabbit();
  test_dog();
}
