function staircase(n: number): void {
    const space = " ";
    const symbolValue = "#";
    let currentLine = 1;
    let line = '';

    while(currentLine <= n) {
        if(currentLine === n) {
            line = symbolValue.repeat(currentLine);
        }
        if(currentLine < n) {
            const symbols = symbolValue.repeat(currentLine);
            const symbolsLength = symbols.length;
            line = space.repeat(n - symbolsLength) + symbols;
        }

        console.log(line);
        currentLine++;
    }
}