/*
//.reduce

const numbers = [1, 2, 3, 4, 5];
const factorial = numbers.reduce((acc, item) => acc * item, 1);
console.log(factorial); */

const number = [1, 2, 3, 4, 5];
const factor = number.reduce(function (n, u,) {
  return (n * u) * 1;
});

console.log(factor);

const factor = number.reduce((n, u) => n * u, 5);
console.log(factor);


//some()
const pessoas = [{
  name: 'Cludio',
  idade: 25
},

{
  name: 'Maria',
  idade: 35
},
];

if (pessoas.some(function (pessoas) {
  return pessoas.idade < 20;
})) {
  console.log('Sim, há pessoas maiores que 30 anos aqui');
} else {
  console.log('Não há pessoas maiores que 30 anos aqui');
}

//every()

const testeEntry = [
  {
    id: 4
  },
  {
    id: -2
  },
  {
    id: 6,

  },
];

if (testeEntry.every(function (testeEntry) {
  return Number.isInteger(testeEntry.id) && testeEntry.id > 0;
})) {
  console.log("All the entries have a valid id");
} else {
  console.log('Existe inteiros negativos');
}



const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};

console.log(robot.provideInfo()); * /;;


//evitar usar funcão de seta em objetos com this.
//EX: 

const robot = {
  energyLevel: 100,
  checkEnergy: () => {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  }
};

robot.checkEnergy(); //undefiend

//formato com função
const robot = {
  energyLevel: 100,
  checkEnergy: function () {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robot.checkEnergy();

//formato sem função
const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robot.checkEnergy(); * /;;

const robotFactory = function (model, mobile) {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};


const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

const tinCan = robotFactory("P-500", true);

tinCan.beep();




const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  };
};

const newRobot = robotFactory('P-501', false);
console.log(newRobot.model);
console.log(newRobot.mobile) * /;;

function robotFactory(model, mobile) {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  };
}


// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false);
console.log(newRobot.model);
console.log(newRobot.mobile) * /;;

const menu = {
  _meal: "",
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return (this._meal = mealToCheck);
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return (this._price = priceToCheck);
    }
  },

  get todaysSpecial() {
    if (this._meal && this._price) {
      return `O especial de hoje é espaguete por ${this._price}`;
    } else {
      return `Meal or price was not set correctly!`;
    }
  }
};

menu.meal = 'Pizza';
menu.price = 8;
console.log(menu.todaysSpecial);