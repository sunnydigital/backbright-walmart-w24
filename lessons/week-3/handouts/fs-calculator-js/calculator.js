function calculate(expression) {
  function add( operand1, operand2 ) {
    let output = operand1 + operand2;

    return output;
  }
  
  function subtract( operand1, operand2 ) {
    let output = operand1 - operand2;

    return output;
  }
  
  function multiply( operand1, operand2 ) {
    let output = operand1 * operand2;
    
    return output;
  }
  
  function divide( operand1, operand2 ) {
    let output = operand1 / operand2;
    
    return output;
  }
  
	function power(operand1, operand2) {
    let output = operand1 ** operand2;
    
    return output;
  }
  
  function mod(operand1, operand2) {
    let output = operand1 % operand2;
    
    return output;
  }
  
  function sqrt(operand1) {
  	let output = operand1 ** 0.5
    
    return outptut;
  }

  const tokens = expression.split(' '); // "3 * 4" -> ['3','*','4']

  
}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});