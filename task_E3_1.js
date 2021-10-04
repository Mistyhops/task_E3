function countElements(someArray) {

    let evenCount = 0;
    let oddCount = 0;
    let nullCount = 0;
    let notNumberCount = 0;

    someArray.forEach(function (item) {
        if (typeof item === 'number' && !isNaN(item)) {
            if (item === 0) {
                nullCount++
            } else if (item % 2 === 1 || item % 2 === -1) {
                oddCount++
            } else if (item % 2 === 0 || item % 2 === -0) {
                evenCount++
            }
        } else {
            notNumberCount++
        }
    });

    console.log(`Количество четных чисел: ${evenCount}\nКоличество нечетных чисел: ${oddCount}
Количество нулей: ${nullCount}\nКоличество других объектов: ${notNumberCount}`)

}

countElements([1, 2, null, true, 1, 0])
