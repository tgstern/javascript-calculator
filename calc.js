// reset variables on page load
localStorage.clear();

// add clicked number to display unless clearInput (after entering an operator or completing calculation)
function numberClicked() {
    if (localStorage.clearInput === 'true') {
        localStorage.clearInput = 'false';
        localStorage.removeItem('memory2');
        $('#display').val($(this).val());
    } else {
        $('#display').val($('#display').val() + $(this).val());
    }
    localStorage.calculate = 'true';
    localStorage.equalsLoop = 'false';
}

// store values or calculate total by calling equals function
function calculate() {
    localStorage.equalsLoop = 'false';
    if (localStorage.calculate === 'true') {
        equals();
        localStorage.calculate = 'false';
        localStorage.equalsLoop = 'false';
    } else {
        localStorage.memory1 = $('#display').val();
        localStorage.clearInput = 'true';
    }
}

// functions to set operators in local storage
function add() {
    calculate();
    localStorage.operator = 'add';
}

function subtract() {
    calculate();
    localStorage.operator = 'subtract';
}

function multiply() {
    calculate();
    localStorage.operator = 'multiply';
}

function divide() {
    calculate();
    localStorage.operator = 'divide';
}

// equals function to calculate based on operator and stored values
function equals() {
    if (localStorage.calculate === 'true' || localStorage.equalsLoop === 'true') {
        if (!localStorage.memory2) {
            localStorage.memory2 = $('#display').val()
        }
        if (localStorage.operator === 'add') {
            $('#display').val(Number(localStorage.memory1) + Number(localStorage.memory2));
        }
        if (localStorage.operator === 'subtract') {
            $('#display').val(Number(localStorage.memory1) - Number(localStorage.memory2));
        }
        if (localStorage.operator === 'multiply') {
            $('#display').val(Number(localStorage.memory1) * Number(localStorage.memory2));
        }
        if (localStorage.operator === 'divide') {
            $('#display').val(Number(localStorage.memory1) / Number(localStorage.memory2));
        }
        localStorage.memory1 = $('#display').val();
        localStorage.clearInput = 'true';
        localStorage.equalsLoop = 'true';
        localStorage.calculate = 'false';
    }
}

// clear storage and display on clear button
function clear() {
    $('#display').val('');
    localStorage.clear();
}

// event listener functions
$('#button1').click(numberClicked);
$('#button2').click(numberClicked);
$('#button3').click(numberClicked);
$('#button4').click(numberClicked);
$('#button5').click(numberClicked);
$('#button6').click(numberClicked);
$('#button7').click(numberClicked);
$('#button8').click(numberClicked);
$('#button9').click(numberClicked);
$('#button0').click(numberClicked);

$('#addButton').click(add);
$('#subtractButton').click(subtract);
$('#multiplyButton').click(multiply);
$('#divideButton').click(divide);
$('#equalsButton').click(equals);
$('#clearButton').click(clear);