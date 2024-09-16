let setSum = 0;
let setMin = 0;
let setMul = 0;
let setDiv = 0;
let setFlt = 0;

let array = [];
let res = 0;
let isOperationComplete = false;

const element = document.querySelector("#container-elements-numbers-form");

function clearDisplay() {
    element.textContent = "";
    array = [];
    res = 0;
    setSum = 0;
    setMin = 0;
    setMul = 0;
    setDiv = 0;
    setFlt = 0;
    isOperationComplete = false;
}

function displayResult(result) {
    if (Number.isInteger(result)) {
        element.textContent = result;
    } else {
        element.textContent = result.toFixed(8).replace(/\.?0+$/, "");
    }
}

document.querySelector("#buttons").addEventListener("click", function (event) {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target;

        if(button.id.startsWith("container-elements-numbers-")) {
            if (isOperationComplete) {
                element.textContent = "";
                isOperationComplete = false;
            }

            if(button.id === "container-elements-numbers-123-1") element.textContent += "1";
            if(button.id === "container-elements-numbers-123-2") element.textContent += "2";
            if(button.id === "container-elements-numbers-123-3") element.textContent += "3";
            if(button.id === "container-elements-numbers-456-4") element.textContent += "4";
            if(button.id === "container-elements-numbers-456-5") element.textContent += "5";
            if(button.id === "container-elements-numbers-456-6") element.textContent += "6";
            if(button.id === "container-elements-numbers-789-7") element.textContent += "7";
            if(button.id === "container-elements-numbers-789-8") element.textContent += "8";
            if(button.id === "container-elements-numbers-789-9") element.textContent += "9";
            if(button.id === "container-elements-numbers-0-0") element.textContent += "0";

            if(button.id === "container-elements-numbers-0-flt") {
                if (!element.textContent.includes(".")) {
                    element.textContent += ".";
                }
            }
        }

        if(button.id === "container-elements-numbers-123-sum") {
            setSum = 1;
            if (array.length === 0) array.push(Number(element.textContent.trim()));
            element.textContent = "";
            isOperationComplete = false;
        }

        if(button.id === "container-elements-numbers-456-min") {
            setMin = 1;
            if (array.length === 0) array.push(Number(element.textContent.trim()));
            element.textContent = "";
            isOperationComplete = false;
        }

        if(button.id === "container-elements-numbers-789-mul") {
            setMul = 1;
            if (array.length === 0) array.push(Number(element.textContent.trim()));
            element.textContent = "";
            isOperationComplete = false;
        }

        if(button.id === "container-elements-numbers-0-div") {
            setDiv = 1;
            if (array.length === 0) array.push(Number(element.textContent.trim()));
            element.textContent = "";
            isOperationComplete = false;
        }

        if(button.id === "container-elements-numbers-eq-s") {
            array.push(Number(element.textContent.trim()));

            if (setSum === 1) {
                res = array[array.length-2] + array[array.length-1];
                array = [res];
                displayResult(res);
                setSum = 0;
            }
            if (setMin === 1) {
                res = array[array.length-2] - array[array.length-1];
                array = [res];
                displayResult(res);
                setMin = 0;
            }
            if (setMul === 1) {
                res = array[array.length-2] * array[array.length-1];
                array = [res];
                displayResult(res);
                setMul = 0;
            }
            if (setDiv === 1) {
                res = array[array.length-2] / array[array.length-1];
                array = [res];
                displayResult(res);
                setDiv = 0;
            }

            setFlt = 0;
            isOperationComplete = true;
        }

        if(button.id === "container-clear") {
            clearDisplay();
        }
    }
});
