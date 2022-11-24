//HIGHER-ORDER FUNCTIONS
//Functions as Parameter

const addTwo = (num) => {
  return num + 2;
};

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  //return checkA === checkB ? func(val) : 'Erros Inconsistente';
  if (checkA === checkB) {
    return func(val);
  } else 'Erros Inconsistente';
};
console.log(checkConsistentOutput(addTwo, 6));


