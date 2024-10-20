function calc(expressed: string): void{
    const tokens: string[] = expressed.split(" ")
        tokens.reverse()
    const stack: number[] = []
    const staples: number = 0
    const flag: number = 0
    for ( const token in tokens){
        if (!isNaN(Number(tokens[token]))){
            stack.push(parseInt(tokens[token]))
            flag = flag + 1
        }
        else if (tokens[token] == "("){
            staples = staples - 1 
        }
        else if (tokens[token] == ")"){
            staples = staples + 1
        }
        else {
            const Operators = tokens[token]
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            if (operand1 === undefined || operand2 === undefined) {
                throw new Error("Неверное выражение");
            }
            switch (Operators) {
                case "+":
                  stack.push(operand1 + operand2);
                  flag = flag - 1
                  break;
                case "-":
                  stack.push(operand1 - operand2);
                  flag = flag - 1
                  break;
                case "*":
                  stack.push(operand1 * operand2);
                  flag = flag - 1
                  break;
                case "/": {
                    if (operand2 === 0) {
                        throw new Error("Деление на ноль");
                    }
                  stack.push(operand1 / operand2);
                  flag = flag - 1
                  break;
                }
                default:
                  throw new Error("Неверный оператор");
              }
         }
         
    }
    
    if (staples != 0){
        throw new Error("Неверный количество скобок");  
    }
    if (flag != 1 || stack.length > 1){
        throw new Error("Неверное выраженеие");  
    }    
    console.log(stack[0])
}
            
        


calc('- * / 24 4 + 7 1 * 3 2')
calc('- / * 15 + 7 1 3 * 2 4')