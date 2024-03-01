// Making a calculator function//

const calculator = (num1, num2, operator) => {
    let result;
    switch(operator){
      case "+":
        return num1 + num2;

        case "-":
        return num1 - num2;

        case "*":
        return num1 * num2;

        case "/":
          if(num2 === 0){
            return "0 is not allowed"
          }else{
            return num1 / num2;
          }

          default:
            return "No operator found"
    }
}

console.log(calculator(5, 7, "+"));
console.log(calculator(5, 7, "-"));
console.log(calculator(5, 7, "*"));
console.log(calculator(5, 7, "/"));
   