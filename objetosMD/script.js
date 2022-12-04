/* const user = {
  name: 'Felipe',
  idade: 55
};

user.idade = 88;
user.name = 'Fred';
admin = user;
// user = null;


user.novoObjeto = (name, idade) => {
  if ((admin.name === name) && (admin.idade === idade)) {
    return "Ambos são iguais";
  } else {
    return "Não é igual";
  }
};
console.log(user.novoObjeto("Fred", 88)); */

/* let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt('Digite um número', 0);
    this.b = +prompt('Digite o próximo número que você deseja somar e depois multiplicar *', 0);
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul()); */


/* 
function User(name) {
  this.name = name;

  this.sayHi = function () {
    console.log("My name is: " + this.name);
  };
}

let john = new User("John");
john.sayHi() */

/* const mustarda = {
  name: "Jhon",
  sayHi: function (name) {
  }
};
mustarda.idade = 55;
mustarda.name = "Felipe";
console.log("My name is:" + " " + mustarda.name, "E minha idade é:" + mustarda.idade); */

/* function Calculator() {
  this.read = function () {
    this.a = +prompt("Digite um número:", 0);
    this.b = +prompt("Some esse número com:", 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read; */



/* function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("Qual número deseja adicionar?");
  };
};

let accumulator = new Accumulator(0);
accumulator.read();
accumulator.read();
alert(accumulator.value); */



