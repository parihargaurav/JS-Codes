// form sends value in form of post and get to values done
// events pe methods milega

const form = document.querySelector("form")

//   const height = parseInt(document.querySelector('#height').value)
// this usecase will give you empty values

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stopping default action
  const height = parseInt(document.querySelector("#height").value) // string value converte to int as parseInt
  const weight = parseInt(document.querySelector("#weight").value)
  const result = document.querySelector('#results');

  if(height === '' || height< 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;


    }else if(weight === '' || weight< 0 || isNaN(weight)){

        results.innerHTML = `Please give a valid weight ${weight}`;

    } else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // show results
        results.innerHTML = `<span>${bmi}</span>`
        }
})


// isNAN() is method