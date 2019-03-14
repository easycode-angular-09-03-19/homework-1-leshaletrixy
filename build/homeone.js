function factorial(num) {
    if (num === 1)
        return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
function multiply(...args) {
    if (args.length === 0)
        return 0;
    return args.reduce((mult, i) => mult *= i);
}
function reverseStr(str) {
    return str.split('').reverse().join('');
}
function main() {
    // факториалы
    console.log('факториал = ' + factorial(5)); // 120
    //multiply
    console.log('multiply = ' + multiply(1, 2, 3));
    //перевёртыш
    console.log('перевёртыш = ' + reverseStr('easy code'));
}
main();
