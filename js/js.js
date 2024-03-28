$(document).ready(function () {
    function addToDisplay(value) {
        let display = $('#display');
        let lastCharIsOperator = display.val().length > 0 && ['/', '*', '-', '+'].includes(display.val().slice(-1));
        let isOperator = ['/', '*', '-', '+'].includes(value);
        if (lastCharIsOperator && isOperator) {
            return;
        }
        display.val(display.val() + value);
    }

    $('.calculator').on('click', function (event) {
        if ($(event.target).hasClass("number") || $(event.target).hasClass("operator")) {
            addToDisplay($(event.target).val());
        } else if ($(event.target).hasClass("equals")) {
            calculate();
        }
    });

    function simulateBackspace() {
        let inputElement = $('#display');
        let currentValue = inputElement.val();
        if (currentValue.length > 0) {
            inputElement.val(currentValue.substring(0, currentValue.length - 1));
        }
    }

    $('#display').on("keydown", function (event) {
        if (event.key === "Backspace") {
            event.preventDefault();
            simulateBackspace();
        }
    });

    function validateInput(input) {
        input.val(input.val().replace(/[^0-9+\-*C/]/g, ''));
    }

    function handleKeyPress(event) {
        let display = $('#display');
        let currentValue = display.val();
        let lastChar = currentValue.slice(-1);
        let keyPressed = String.fromCharCode(event.keyCode);

        if (["+", "-", "*", "/"].includes(lastChar) && ["+", "-", "*", "/"].includes(keyPressed)) {
            display.val(currentValue.slice(0, -1));
        }
    }

    function clearDisplay() {
        $('#display').val('');
    }

    function calculate() {
        let expression = $('#display').val();
        if (expression) {
            try {
                $('#display').val(eval(expression));
            } catch (error) {
                alert("Please input valid data !!!");
                $('#display').val('');
            }
        } else {
            $('#display').val('');
        }

        if (eval(expression) === Infinity) {
            alert("Infinity value !!!");
            $('#display').val('');
        } else if (isNaN(eval(expression))) {
            alert("Not a valid number value !!!");
            $('#display').val('');
        }
    }

    $('#display').on("keydown", function (event) {
        if (event.key === "=" || event.key === "Enter") {
            event.preventDefault();
            calculate();
        } else if (event.key === "c") {
            event.preventDefault();
            clearDisplay();
        }
    });
});
