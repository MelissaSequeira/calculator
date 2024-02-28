// Get the text field and buttons
const textfield1 = document.querySelector('.textfield1');
const buttons = document.querySelectorAll('.buttons');
const buttons1 = document.querySelectorAll('.buttons1');
const clearButton = document.querySelector('.clear');
const dotButton = document.querySelector('.dot');
const equalButton = document.querySelector('.equal');
const modulo = document.querySelector('.modulo');
const output = document.querySelector('.output');
// Function to append text to the text field
function append(input) {
    textfield1.value += input;
}

// Function to clear the text field
function clearText() {
    textfield1.value = "";
}

equalButton.addEventListener('click', function() {
   
        try{
            const result = eval(textfield1.value);
        textfield1.value = result;
        }
        catch(e){
            textfield1.value = "Invalid";
        }
        
});

buttons.forEach(buttons =>{
    buttons.addEventListener('click',function(){
        append(buttons.textContent);
    })
})
buttons1.forEach(buttons1 =>{
    buttons1.addEventListener('click',function(){
        append(buttons1.textContent);
    })
})

clearButton.addEventListener('click',clearText)