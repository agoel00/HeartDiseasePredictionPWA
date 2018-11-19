var btn = document.querySelector('#btn')

btn.addEventListener('click', handleSubmit)

function handleSubmit() {
    var age = parseInt(document.querySelector('#age').value) 
    var sex = parseInt(document.querySelector('#sex').value) 
    var cigs = parseInt(document.querySelector('#cigs').value) 
    var diabetes = parseInt(document.querySelector('#diabetes').value) 
    var cholestrol = parseInt(document.querySelector('#cholestrol').value) 
    var sBP = parseInt(document.querySelector('#sBP').value) 
    var dBP = parseInt(document.querySelector('#dBP').value) 
    var heartRate = parseInt(document.querySelector('#heartRate').value) 
    var glucose = parseInt(document.querySelector('#glucose').value) 

    console.log(typeof(age), typeof(sex), typeof(cigs), typeof(diabetes), typeof(cholestrol), typeof(sBP), typeof(dBP), typeof(heartRate), typeof(glucose))
    document.querySelector('.nl-form').style.display = 'none';
    document.querySelector('.clearfix').innerHTML = `
    <p class="nl-form">Fetching data... </p>
  `;
    document.querySelector('.loader').style.display = 'block';


    fetch(`http://127.0.0.1:5000/predict?age=${age}&sex=${sex}&cigs=${cigs}&chol=${cholestrol}&sBP=${sBP}&dia=${diabetes}&dBP=${dBP}&gluc=${glucose}&hRate=${heartRate}`)
      .then(res => res.json())
      .then(data => {
        prediction = parseFloat(data['probability'][0][1]).toFixed(5);
        console.log(prediction)
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.clearfix').innerHTML = `
          <p class="nl-form"> Predicted probability of having a coronary heart disease is ${prediction}</p>
        `
      })
      .catch(err => {
        console.log(err)
        document.querySelector('.clearfix').innerHTML = `
        <p class="nl-form"> Sorry, some error occurred while processing your request. </p>
      `
      })
      // setTimeout(() => {
      //   fetch(`http://127.0.0.1:5000/predict?age=${age}&sex=${sex}&cigs=${cigs}&chol=${cholestrol}&sBP=${sBP}&dia=${diabetes}&dBP=${dBP}&gluc=${glucose}&hRate=${heartRate}`)
      //   .then(res => res.json())
      //   .then(data => {
      //     prediction = parseFloat(data['probability'][0][1]).toFixed(5);
      //     console.log(prediction)
      //     document.querySelector('.loader').style.display = 'none';
      //     document.querySelector('.clearfix').innerHTML = `
      //       <p class="nl-form"> Predicted probability of having a coronary heart disease is ${prediction}</p>
      //     `
      //   })
      //   .catch(err => {
      //     console.log(err)
      //     document.querySelector('.clearfix').innerHTML = `
      //     <p class="nl-form"> Sorry, some error occurred while processing your request. </p>
      //   `
      //   })
      // }, 3000);
    console.log(`https://heartapi.herokuapp.com/predict?age=${age}&sex=${sex}&cigs=${cigs}&chol=${cholestrol}&sBP=${sBP}&dia=${diabetes}&dBP=${dBP}&gluc=${glucose}&hRate=${heartRate}`)
}

// http://heartapi.herokuapp.com/predict?age=31&sex=1&cigs=5&chol=230&sBP=280&dia=0&dBP=90&gluc=87&hRate=84