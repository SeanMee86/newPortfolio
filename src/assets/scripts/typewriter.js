const TypeWriter = function() {
    this.newLine = '';
    this.counter = 0;
    this.arrayCounter = 1;

    this.intervalRef = () => {
        return this.lineInterval
    };

    this.typeLines = (array, setState) => {
        this.lineInterval = setInterval(() => {
            this.newLine = this.newLine + array[this.arrayCounter - 1][this.counter];

            setState((prevState) => {
                return {
                    ...prevState,
                    ['line' + this.arrayCounter]: this.newLine
                }
            });

            this.counter++;

            if (this.counter >= array[this.arrayCounter - 1].length) {
                clearInterval(this.lineInterval);
                if(this.arrayCounter < array.length) {
                    this.newLine = '';
                    this.counter = 0;
                    this.arrayCounter++;
                    this.typeLines(array, setState);
                }
            }
        }, 50);
    };
};

export default TypeWriter;