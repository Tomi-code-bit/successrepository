function calculate(num1, num2, operator) {
    let result;
  
    switch (operator) {
      // Arithmetic
      case "+": result = num1 + num2; break;
      case "-": result = num1 - num2; break;
      case "*": result = num1 * num2; break;
      case "/": result = num2 !== 0 ? num1 / num2 : "Error (divide by zero)"; break;
      case "%": result = num1 % num2; break;
      case "*": result = num1 * num2; break;
  
      // Comparison
      case "==": result = (num1 == num2); break;
      case "===": result = (num1 === num2); break;
      case "!=": result = (num1 != num2); break;
      case ">": result = (num1 > num2); break;
      case "<": result = (num1 < num2); break;
      case ">=": result = (num1 >= num2); break;
      case "<=": result = (num1 <= num2); break;
  
      // Logical
      case "&&": result = Boolean(num1) && Boolean(num2); break;
      case "||": result = Boolean(num1) || Boolean(num2); break;
      case "!": result = !Boolean(num1); break;
  
      default: result = "Invalid operator";
    }
  
    return result;
  }
  
  // Example usage:
  console.log("5 + 3 =", calculate(5, 3, "+"));   // Arithmetic
  console.log("10 > 7 =", calculate(10, 7, ">")); // Comparison
  console.log("1 && 0 =", calculate(1, 0, "&&")); // Logical
  console.log("!5 =", calculate(5, null, "!"));   // NOT only needs first number

//   table 6
  for (let i = 1; i <= 12; i++) {
    console.log('6 x ${i} = ${6 * i}');
  }