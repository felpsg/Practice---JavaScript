const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  }
  if (day === 'tuesday') {
    return 8;
  }
  if (day === 'wednesday') {
    return 8;
  }
  if (day == 'thursday') {
    return 8;
  }
  if (day === 'friday') {
    return 8;
  }
  if (day === 'saturday') {
    return 8;
  }
  if (day === 'sunday') {
    return 8;
  } else {
    return 'Error';
  }
};

const getActualSleepHours = () =>
  getActualSleepHours('monday') + getActualSleepHours('tuesday') + getActualSleepHours('wednesday') + getActualSleepHours('thursday') + getActualSleepHours('thursday') + getActualSleepHours('friday') + getActualSleepHours('saturday') + getActualSleepHours('sunday');


const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const IdealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealHours) {
    console.log('Você obteve o sono perfeito');
  }
  else if (actualSleepHours > idealHours) {
    console.log('Você dormiu mais que o desejado');
  }
  else if (actualSleepHours < idealHours) {
    console.log('Você dormiu pouco, descanse mais.');
  } else {
    console.log('Reveja os hórarios do seu sono.');
  }
};

calculateSleepDebt();