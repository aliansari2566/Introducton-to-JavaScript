let P =fetch("https://goweather.herokuapp.com/weather/ny") 
P.then((response)=>{
    return response.json()
}).then((response1) =>{
    console.log(response1);
})