const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 7;
  } else
    switch (day) {
      case "monday":
        return 8;
        break;
      case "tuesday":
        return 7;
        break;
      case "wednesday":
        return 8;
        break;
      case "thursday":
        return 5;
        break;
      case "friday":
        return 8;
        break;
      case "saturday":
        return 7;
        break;
      case "sunday":
        return 8;
        break;
      default:
        return "Error!";
    }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday") +
  console.log(getActualSleepHours("monday"));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleephours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("Youve got the perfect amount of sleep!");
  }
};
calculateSleepDebt();
