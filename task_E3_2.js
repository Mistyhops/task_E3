function isPrimeNumber(number) {
    number++
    number--
    let isPrime = true;

    if (number === 0 || number === 1) {
        isPrime = false
        return isPrime
    } else {
        for (let i = 2; i < number; i++) {
            if (!(number % i)) {
                isPrime = false
                return isPrime
            }
        }
    }

    return isPrime
}


let inputNumber = prompt('Введите число: ');


if (inputNumber > 1000) {
    console.log('Введите число не больше 1000')
} else {
    if (isPrimeNumber(inputNumber)) {
        console.log(`${inputNumber} простое число`)
    } else {
        console.log(`${inputNumber} не является простым числом`)
    }
}
