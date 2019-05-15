window.onload = function() {
    function runInputFirst() {
        document.querySelector('#input1').classList.toggle('active');
    }
    function runInputThird() {
        document.querySelector('#input3').classList.toggle('active');
    }
    function runInputFourth() {
        document.querySelector('#input4').classList.toggle('active');
    }
        document.querySelector("#btn1").addEventListener("click", runInputFirst);
        document.querySelector("#btn3").addEventListener("click", runInputThird);
        document.querySelector("#btn4").addEventListener("click", runInputFourth);
};