// factory pattern


class Car {
  constructor(doors, engine, color) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
  }
}

class carFactory {
  createCar(type) {
    switch(type){
      case 'civic':
        return new Car(4, "V4", "grey");
      case 'accord':
        return new Car(4, "V6", "black");
    }
  }
}

const factory = new carFactory();

const myHonda = factory.createCar("civic")

console.log(myHonda);