function factorial(num:number):number {
    if (num === 1) return 1;

    let result:number = 1;

    for (let i:number = 2; i <= num; i++) {
        result *= i;
    }

    return result;
}

function multiply (...args):number {
    if (args.length === 0) return 0;

    let result:number = 1;

    for (let i:number = 0; i < args.length; i++) {
        result *= args[i];
    }

    return result;
}

function reverseStr(str:string):string {
    return str.split('').reverse().join('');
}

interface Admin {
    name: string;
    email: string;
    password: string;
    type: string;
}

function main():void {

    // факториалы
    console.log('факториал = ' + factorial( 5)); // 120
    
    //multiply
    console.log('multiply = ' + multiply(1,2,3));

    //перевёртыш
    console.log('перевёртыш = ' + reverseStr('easy code'));

}


main();
