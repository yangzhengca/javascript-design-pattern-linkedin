// abstract factory pattern


class Car {
  constructor(doors, engine, color) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
  }
}

class CarFactory {
  createCar(type) {
    switch(type){
      case 'civic':
        return new Car(4, "V4", "grey");
      case 'accord':
        return new Car(4, "V6", "black");
    }
  }
}


class Suv {
  constructor(doors, engine, color) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
  }
}

class SuvFactory {
  createSuv(type) {
    switch(type){
      case 'cx5':
        return new Car(4, "V4", "grey");
      case 'rav4':
        return new Car(4, "V6", "silver");
    }
  }
}


const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufactory = (type, model) => {
  switch(type) {
    case 'car':
      return carFactory.createCar(model); 
    case 'suv':
      return suvFactory.createSuv(model);
  }
};


console.log(autoManufactory('suv', 'rav4'));