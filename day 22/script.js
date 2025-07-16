
let buttons = document.getElementsByClassName("btn");
let display = document.getElementById("display");


let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    
    const value = button.textContent;

    
    if (value === "C") {
      currentInput = "";
      display.textContent = ""; 

    } else if (value === "x") {
      currentInput = currentInput.slice(0, -1); 
      display.textContent = currentInput;

    
    } else if (value === "=") {
      try {
      
        const result = eval(currentInput);
        currentInput = result.toString();
        display.textContent = currentInput;
      } catch (error) {
       
        display.textContent = "Error";
        currentInput = "";
      }

    } else {
      currentInput += value; 
      display.textContent = currentInput; 
    }
  });
});
