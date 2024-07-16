function printPyramid(height) {
    for (let i = 1; i <= height; i++) {
      let str = '';
  
      // Print spaces
      for (let j = 1; j <= height - i; j++) {
        str += ' ';
      }
  
      // Print stars
      for (let k = 1; k <= (2 * i - 1); k++) {
        str += '*';
      }
  
      console.log(str);
    }
  }
  
  printPyramid(3);
  