// singleton pattern
// if the class has no instance, create an instance;
// if the class already has an instance, return the instance.
let instance = null;
class Car {
  constructor(doors, engine, color) {
    if( !instance ) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
      instance = this;
    } else {
      return instance;
    }
  }
}

const civic = new Car(4, "V4", "grey");

const accord = new Car(4, "V6", "black");

console.log(civic, accord);