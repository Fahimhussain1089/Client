
const colors = {

  pink: (text) => `\x1b[95m${text}\x1b[0m`,
  lightGreen: (text) => `\x1b[92m${text}\x1b[0m`,   // Bright Green
    yellow: (text) => `\x1b[33m${text}\x1b[0m`,       // Dark Yellow
    lightYellow: (text) => `\x1b[93m${text}\x1b[0m`,  // Bright Yellow

  cyan: (text) => `\x1b[96m${text}\x1b[0m`,

  blue: (text) => `\x1b[94m${text}\x1b[0m`,

  red: (text) => `\x1b[91m${text}\x1b[0m`,

  orange: (text) => `\x1b[38;5;214m${text}\x1b[0m`,
  //___________
   darkGreen: (text) => `\x1b[32m${text}\x1b[0m`,     // Dark Green
    green: (text) => `\x1b[92m${text}\x1b[0m`,        // Bright Green
    lime: (text) => `\x1b[38;5;46m${text}\x1b[0m`,    // Lime Green
    forest: (text) => `\x1b[38;5;22m${text}\x1b[0m`,  // Forest Green
    seaGreen: (text) => `\x1b[38;5;29m${text}\x1b[0m` // Sea Green

};

export default colors;
