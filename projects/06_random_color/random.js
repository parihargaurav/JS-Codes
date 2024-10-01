// generate a random color
// hex code values

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16 + 1)];
  }
  return color;
};


let intervalId;
const startChangingColor = function() {
  if(!intervalId){
    intervalId =   setInterval(changeByColor, 1000);

  }

  function  changeByColor(){
    document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function(){

  // to stop use clearInterval
  clearInterval(intervalId);
  intervalId = null;
  
};

document.querySelector('#start').addEventListener
('click', startChangingColor);

document.querySelector('#stop').addEventListener
('click', stopChangingColor);


/*here to convert string to json format we have this syntax
eg; const data  = JSON.parse(this.responseText) .. converting string to json format data
here .parse is method that converts string to json format*/



// here console.log is a debugger tool in browser for debugging the code

