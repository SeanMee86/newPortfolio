const typeWriter = (array, setState) => {
    let newLine = '';
    let counter = 0;
    let arrayCounter = 1;
    let lineInterval;

    const intervalRef = () => {
        return lineInterval
    };

    const intervalTrigger = () => {
        lineInterval = setInterval(() => {
            newLine = newLine + array[arrayCounter - 1][counter];
            setState((prevState) => {
                return {
                    ...prevState,
                    ['line' + arrayCounter]: newLine
                }
            });
            counter++;

            if (counter >= array[arrayCounter - 1].length) {
                clearInterval(lineInterval);
                if(arrayCounter < array.length) {
                    newLine = '';
                    counter = 0;
                    arrayCounter++;
                    intervalTrigger();
                }
            }
        }, 50);
    };
    intervalTrigger()
};

export default typeWriter;