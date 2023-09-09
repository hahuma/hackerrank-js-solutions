function birthdayCakeCandles(candles: number[]): number {
    const sortedCandles = candles.sort((a,b) => a - b);
    const taller = candles[candles.length - 1];

    const tallersCount = sortedCandles.filter(value => value === taller).length;

    return tallersCount;
}