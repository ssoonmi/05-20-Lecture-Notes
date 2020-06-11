window.addEventListener('DOMContentLoaded', () => {
  debugger
  const data = {
    Angela: "\"instructor\"",
    Tadeo: "student",
    ages: [40, 35]
  }
  
  const jsonString = JSON.stringify(data);
  
  console.log(jsonString)

  const stringifiedAgain = JSON.stringify(jsonString);
  console.log(stringifiedAgain);
  
  const convertedData = JSON.parse(jsonString);
  
  debugger;
})