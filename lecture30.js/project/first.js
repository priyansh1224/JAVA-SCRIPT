document.querySelector('button').addEventListener('click',()=>{

    const place = document.getElementById('location').value;
    
    function updateTemp(data){
       const element = document.getElementById('weatherInfo');
       element.innerHTML = `Today's Temperature: ${data.current.temp_c}`;
    }

    const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=0710d1c1b05647f6961133847251004&q=${place}&aqi=yes`)    


    prom
    .then(response=>response.json())
    .then(data=> updateTemp(data));



})