let result = document.querySelector('#result')

//function to show input clicked by user in input box.
function insertValue(value){
  result.value += value;
}

//function to clear the input value while user click on  AC button
function clearResult(){
  result.value = '';
}

//function to delete the input value while user click on DEL button 
function deleteResult(){
  result.value = result.value.slice(0,-1);
}

// function to calculate the result when user click "=" button
function calculate(){
  try {
    result.value = eval(result.value);
  } catch(error){
     result.value = "error";
  }
}
