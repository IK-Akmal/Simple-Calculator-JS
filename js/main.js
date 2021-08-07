const buttonsNumber = document.querySelectorAll(".number");
const input = document.querySelector(".input");
const AC = document.querySelector(".btn-danger");
const point = document.querySelector(".point");
const operations = document.querySelectorAll(".operation");
const inputOperator = document.querySelector(".inputOperator");
const equally = document.querySelector(".equally");

let arr = new Array();

equally.addEventListener("click", function () {
    arr.push(Number(input.innerHTML));
    if (arr.length == 2) {
        switch (inputOperator.textContent) {
            case "+":
                input.textContent = arr[0] + arr[1];
                break;
            case "-":
                input.textContent = arr[0] - arr[1];
                break;
            case "x":
                input.textContent = arr[0] * arr[1];
                break;
            case "/":
                input.textContent = arr[0] / arr[1];
                break;
            default:
                break;

        }
        arr = new Array();
        inputOperator.textContent = "";
    }
})

point.addEventListener("click", function () {
    if (!input.textContent.includes(".")) {
        input.innerHTML += this.innerHTML
    }
})

AC.addEventListener("click", () => {
    input.innerHTML = "0";
    inputOperator.innerHTML = "";
    arr = new Array();
})

console.log(Float32Array.length)
function setEvent() {
    for (const button of buttonsNumber) {
        button.addEventListener("click", function () {
            if (Number(input.textContent) <= Number.MAX_SAFE_INTEGER
                && input.textContent.length <= 20 
                && input.textContent != "0"
                && Number(input.textContent) != Infinity) 
            {
             
                input.innerHTML += this.innerHTML
            } else if (input.textContent == "" ||input.textContent == "0" || Number(input.textContent) == Infinity) {
                input.innerHTML = this.innerHTML
            }
        })
    }

    for (const operation of operations) {
        operation.addEventListener("click", function () {
            if (arr.length == 0) {

                inputOperator.innerHTML = this.innerHTML;
                arr.push(Number(input.innerHTML));
                input.innerHTML = "";

            } 
            else {
                if(input.innerHTML == "")
                {   
                    inputOperator.innerHTML = this.innerHTML;
                    return 0;
                }
                equally.dispatchEvent(new Event("click"));
                inputOperator.innerHTML = this.innerHTML;
                console.log(input.innerHTML);
                if (input.innerHTML != "Infinity") {
                    arr.push(Number(input.innerHTML));
                    input.innerHTML = "";
             
                }else{
                    inputOperator.innerHTML = "";
                    arr = new Array();
                }
            }
        })
    }
}


setEvent();