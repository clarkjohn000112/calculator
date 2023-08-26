// Get references to the buttons using their IDs
const modButton = document.getElementById('mod');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const divideButton = document.getElementById('divide');
const num7Button = document.getElementById('num7');
const num8Button = document.getElementById('num8');
const num9Button = document.getElementById('num9');
const multiplyButton = document.getElementById('multiply');
const num4Button = document.getElementById('num4');
const num5Button = document.getElementById('num5');
const num6Button = document.getElementById('num6');
const subtractButton = document.getElementById('subtract');
const num1Button = document.getElementById('num1');
const num2Button = document.getElementById('num2');
const num3Button = document.getElementById('num3');
const addButton = document.getElementById('add');
const num0Button = document.getElementById('num0');
const decimalButton = document.getElementById('decimal');
const plusMinusButton = document.getElementById('plus-minus');
const equalsButton = document.getElementById('equals');

// Get the screen element
const screen = document.querySelector('.screen');

// Add event listeners and functions for the buttons
modButton.addEventListener('click', function() {
    screen.textContent += '%';
});

clearButton.addEventListener('click', function() {
    clearScreen();
});

backspaceButton.addEventListener('click', function() {
    removeLastCharacter();
});

divideButton.addEventListener('click', function() {
    appendToScreen('/');
});

num7Button.addEventListener('click', function() {
    appendToScreen('7');
});

num8Button.addEventListener('click', function() {
    appendToScreen('8');
});

num9Button.addEventListener('click', function() {
    appendToScreen('9');
});

multiplyButton.addEventListener('click', function() {
    appendToScreen('x');
});

num4Button.addEventListener('click', function() {
    appendToScreen('4');
});

num5Button.addEventListener('click', function() {
    appendToScreen('5');
});

num6Button.addEventListener('click', function() {
    appendToScreen('6');
});

subtractButton.addEventListener('click', function() {
    appendToScreen('-');
});

num1Button.addEventListener('click', function() {
    appendToScreen('1');
});

num2Button.addEventListener('click', function() {
    appendToScreen('2');
});

num3Button.addEventListener('click', function() {
    appendToScreen('3');
});

addButton.addEventListener('click', function() {
    appendToScreen('+');
});

num0Button.addEventListener('click', function() {
    appendToScreen('0');
});

decimalButton.addEventListener('click', function() {
    appendToScreen('.');
});

plusMinusButton.addEventListener('click', function() {
    togglePlusMinus();
});

equalsButton.addEventListener('click', function() {
    evaluateExpression();
});

let calculationCompleted = false;


// Function to clear the screen
function clearScreen() {
    screen.textContent = '0';
}

// Function to remove the last character from the screen
function removeLastCharacter() {
    screen.textContent = screen.textContent.slice(0, -1);
    if (screen.textContent === '') {
        screen.textContent = '0';
    }
}

// Function to append a character to the screen
function appendToScreen(character) {
    if (screen.textContent === '0' || screen.textContent === 'Infinity') {
        screen.textContent = character;
    } else {
        // Replace 'x' with '*' before evaluating the expression
        const expression = screen.textContent.replace('x', '*');
        screen.textContent = expression + character;
    }
}

// Function to toggle the plus-minus sign
function togglePlusMinus() {
    if (screen.textContent !== '0') {
        if (screen.textContent[0] === '-') {
            screen.textContent = screen.textContent.slice(1);
        } else {
            screen.textContent = '-' + screen.textContent;
        }
    }
}

// Function to evaluate the expression on the screen
function evaluateExpression() {
    try {
        const result = eval(screen.textContent);
        clearScreen(); // Clear the screen first
        screen.textContent = result; // Set the result as the new content
        calculationCompleted = true; // Calculation has been completed
    } catch (error) {
        screen.textContent = 'Error';
        setTimeout(() => {
            clearScreen(); // Clear the screen after a brief delay
            calculationCompleted = false; // Reset the flag
        }, 1000); // Delay in milliseconds (1 second)
    }
}



function appendToScreen(character) {
    if (calculationCompleted) {
        clearScreen();
        calculationCompleted = false; // Reset the flag
    }
    
    if (screen.textContent === '0' || screen.textContent === 'Infinity') {
        screen.textContent = character;
    } else {
        const expression = screen.textContent.replace('x', '*');
        screen.textContent = expression + character;
    }
}
