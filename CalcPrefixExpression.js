function calc(expressed) {
    var tokens = expressed.split(" ");
    tokens.reverse();
    var stack = [];
    var staples = 0;
    var flag = 0;
    for (var token in tokens) {
        if (!isNaN(Number(tokens[token]))) {
            stack.push(parseInt(tokens[token]));
            flag = flag + 1;
        }
        else if (tokens[token] == "(") {
            staples = staples - 1;
        }
        else if (tokens[token] == ")") {
            staples = staples + 1;
        }
        else {
            var Operators = tokens[token];
            var operand1 = stack.pop();
            var operand2 = stack.pop();
            if (operand1 === undefined || operand2 === undefined) {
                throw new Error("Неверное выражение");
            }
            switch (Operators) {
                case "+":
                    stack.push(operand1 + operand2);
                    flag = flag - 1;
                    break;
                case "-":
                    stack.push(operand1 - operand2);
                    flag = flag - 1;
                    break;
                case "*":
                    stack.push(operand1 * operand2);
                    flag = flag - 1;
                    break;
                case "/": {
                    if (operand2 === 0) {
                        throw new Error("Деление на ноль");
                    }
                    stack.push(operand1 / operand2);
                    flag = flag - 1;
                    break;
                }
                default:
                    throw new Error("Неверный оператор");
            }
        }
    }
    if (staples != 0) {
        throw new Error("Неверный количество скобок");
    }
    if (flag != 1 || stack.length > 1) {
        throw new Error("Неверное выраженеие");
    }
    console.log(stack[0]);
}
calc('- * / 24 4 + 7 1 * 3 2');
calc('- / * 15 + 7 1 3 * 2 4 ');
