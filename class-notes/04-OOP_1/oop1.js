'use strict';

/* ------------------------------------------ * // alt + shift + a
                OBJECTS
/* ------------------------------------------ *

// Direkt obje isimlendirirken PascalCase veya camelCase kullanabiliriz.
const exampleObject = {

    propertyName: 'value', // attribute, field

    methodName: function () {
        return 'methodName() is a method';
    },

    methodAltarnative() {
        return 'methodAltarnative() is a method'
    }
}

console.log(exampleObject.propertyName);
console.log(exampleObject.methodName())

/* ------------------------------------------ *
const Car = {
    brand: 'Mercedes',
    model: 'maybach',
    year: 2025,
    isAutoGear: true,
    colors: ['black', 'red'],
    details: {
        color1: 'black',
        color2: 'red',
        engineSize: 5000
    },
    startEngine: function () {
        return 'Engine started'
    }
};

console.log(Car);
console.log(Car.brand);
console.log(Car.model);
console.log(Car.year);
console.log(Car.isAutoGear);
console.log(Car.colors);
console.log(Car.details);
console.log(Car.startEngine());

// Altarnative:
console.log(Car['brand']);
console.log(Car['colors']);
console.log(Car['colors'][0]);
console.log(Car['details'].engineSize);
console.log(Car['details']['engineSize']);

/* ------------------------------------------ *
//? THIS KEYWORD

const Car = {
    brand: 'Mercedes',
    model: 'maybach',
    year: 2025,
    isAutoGear: true,
    colors: ['black', 'red'],
    details: {
        color1: 'black',
        color2: 'red',
        engineSize: 5000
    },
    startEngine: function () {
        return 'Engine started'
    },
    getDetails: function () {
        return this.details
    },
    getDetailWithArrowFn: () => {
        return this.details
    }
};
 
// console.log(Car.getDetails());
console.log(Car.getDetailWithArrowFn()); // This keywordu arrow fonkskiyonlarda ulasilamaz.

/* ------------------------------------------ *
//? ARRAY DESTRUCTURING

const testArr = ['value0', 'value1', 'value2', 'value3']

// console.log(testArr[0]);
// console.log(testArr[1]);
// console.log(testArr[2]);
// const val3 = testArr.slice(3, 4)
// console.log(val3);

// siralama onemli 
// rest operatoru her zaman en son kullanilir.
const [item1, item2, ...otherItems ] = testArr

console.log(item1);
console.log(otherItems);

/* ------------------------------------------ *
//? OBJECT DESTRUCTURING

const Car = {
    brand: 'Mercedes',
    model: 'maybach',
    year: 2025,
    isAutoGear: true,
    colors: ['black', 'red'],
    details: {
        color1: 'black',
        color2: 'red',
        engineSize: 5000
    },
    startEngine: function () {
        return 'Engine started'
    },
    getDetails: function () {
        return this.details
    },
    getDetailWithArrowFn: () => {
        return this.details
    }
};

//*Rest Operotor (key isimleri onemli)

const { details, brand, ...otherItems } = Car


// console.log(brand);
// console.log(otherItems);


//*Spread Operotor
const newObj = { newKey: 'newValye', ...Car}

// console.log(newObj);


//* Object to JSON
console.log(typeof Car);

const jsonCar = JSON.stringify(Car)
console.log(typeof jsonCar);
console.log(jsonCar);
console.log(jsonCar.brand);

//* JSON to Object

const obj = JSON.parse(jsonCar)
console.log(typeof obj);




/* ------------------------------------------ */

// //? Constructors

// const constructorsFn = function () {
//     this.property = 'value'
// }



/* ------------------------------------------ */

const carConstructor = function (brand, model, year, methodParam){
    this.brand = brand
    this.model = model
    this.year = year

    this.startEngine = function (){
        return `${this.brand}'s engine has started`
    }
}

const newCar = new carConstructor('Ford', 'Mustang', 1990)
console.log(newCar);
console.log(typeof newCar);
console.log(newCar.startEngine());


const mercedes = new carConstructor('Mercedes', 'maybach', 2025)
console.log(mercedes);
console.log(mercedes.startEngine());

/* ------------------------------------------ */
/* ------------------------------------------ */
/* ------------------------------------------ */
/* ------------------------------------------ */
/* ------------------------------------------ */