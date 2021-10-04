function printNumbers(startNumber, endNumber){
    endNumber++; endNumber--;
    const timerID = setInterval(function (){
        console.log(startNumber);
        if (startNumber === endNumber){
            clearInterval(timerID);
        }
        startNumber++;
    }, 1000);
}

let start = prompt('Введите начальное число: ')
let end = prompt('Введите конечное число: ')

printNumbers(start, end)
