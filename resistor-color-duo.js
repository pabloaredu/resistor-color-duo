//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const value = (inputColors) => {
  let result = "";
  for (let i = 0; i <= 1 ; i++) {
    const color = inputColors[i];
    result += colors.indexOf(color);
  }
  return parseInt(result);
}; 
