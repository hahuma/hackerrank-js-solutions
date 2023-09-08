function miniMaxSum(arr: number[]): void {
    const sortedArr = arr.sort((a,b) => a - b)

    const minValue = sortedArr.reduce((prevValue, currValue, index) => {
        if(index < sortedArr.length - 1) {
            return prevValue + currValue
        }
        else {
            return prevValue;
        }
    }, 0)

    const maxValue = sortedArr.reduce((prevValue, currValue, index) => {
        if(index > 0) {
            return prevValue + currValue
        }
        else {
            return prevValue;
        }
    }, 0)

    console.log(minValue, maxValue)
}