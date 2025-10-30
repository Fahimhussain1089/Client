
const consolecolors = {

  pink: (text) => `\x1b[95m${text}\x1b[0m`,
  green: (text) => `\x1b[32m${text}\x1b[0m`,        // Dark Green
  lightGreen: (text) => `\x1b[92m${text}\x1b[0m`,   // Bright Green
  green: (text) => `\x1b[92m${text}\x1b[0m`,
  yellow: (text) => `\x1b[33m${text}\x1b[0m`,       // Dark Yellow
  lightYellow: (text) => `\x1b[93m${text}\x1b[0m`,  // Bright Yellow


  //___________
  darkGreen: (text) => `\x1b[32m${text}\x1b[0m`,     // Dark Green
  green: (text) => `\x1b[92m${text}\x1b[0m`,        // Bright Green
  lime: (text) => `\x1b[38;5;46m${text}\x1b[0m`,    // Lime Green
  forest: (text) => `\x1b[38;5;22m${text}\x1b[0m`,  // Forest Green
  seaGreen: (text) => `\x1b[38;5;29m${text}\x1b[0m`, // Sea Green

  //********************************* */
   // Bright & Clear Colors
    orange: (text) => `\x1b[38;5;208m${text}\x1b[0m`,    // Bright Orange
    cyan: (text) => `\x1b[38;5;51m${text}\x1b[0m`,       // Bright Cyan
    pink: (text) => `\x1b[38;5;201m${text}\x1b[0m`,      // Bright Pink/Magenta
    gold: (text) => `\x1b[38;5;220m${text}\x1b[0m`,      // Bright Gold/Yellow
    
    // Alternative - Even Brighter Versions
    neonGreen: (text) => `\x1b[38;5;82m${text}\x1b[0m`,  // Neon Green
    electricBlue: (text) => `\x1b[38;5;45m${text}\x1b[0m`, // Electric Blue
    hotPink: (text) => `\x1b[38;5;199m${text}\x1b[0m`,   // Hot Pink
    brightOrange: (text) => `\x1b[38;5;214m${text}\x1b[0m`, // Bright Orange
    lemon: (text) => `\x1b[38;5;226m${text}\x1b[0m` ,     // Lemon Yellow
    //********************************* */
    success: (text) => `\x1b[38;5;46m${text}\x1b[0m`,    // Lime Green (Best for success)
    warning: (text) => `\x1b[38;5;208m${text}\x1b[0m`,   // Orange (Best for warnings)
    info: (text) => `\x1b[38;5;51m${text}\x1b[0m`,       // Cyan (Best for info)
    error: (text) => `\x1b[38;5;196m${text}\x1b[0m`,     // Bright Red (Best for errors)
    highlight: (text) => `\x1b[38;5;226m${text}\x1b[0m`  // Yellow (Best for highlights)



};

// export default consolecolors;
module.exports = consolecolors;

