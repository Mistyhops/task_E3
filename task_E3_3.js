function someFunc(arg1) {
    return function (arg2) {
        return arg1 + arg2
    }
}

console.log(someFunc(4)(5))
