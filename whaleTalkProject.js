function whaleTaranslator(humanText) {
  const vowels = ["a", "e", "i", "o", "u"];
  let resultArray = [];
  for (let i = 0; i < humanText.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (humanText[i] === vowels[j]) {
        if (humanText[i] === "e" || vowels[j] === "u") {
          resultArray.push(humanText[i], vowels[j]);
        } else {
          resultArray.push(humanText[i]);
        }
      }
    }
  }
  return resultArray.join("").toUpperCase();
}
console.log(whaleTaranslator('a whale of a deal!'));