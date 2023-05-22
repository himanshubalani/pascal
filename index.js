document.getElementById("search").addEventListener("click", apicall);


function apicall() {
	const apikey = config.apikey;
	const cityname = document.getElementById("cityname").value;
  	const url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityname}&days=3&aqi=yes&alerts=no`;
  	fetch(url)
	.then((response) => response.json())
	.then((data) => {
	  	let currtemp = `
	  	<div> 
			<p>${data.current.temp_c}<sup>℃</p>
	  	</div>`
	;
	  	document.getElementById("currtemp").innerHTML = currtemp;
		let condition = `
		<div>
			<p>${data.current.condition.text}</p>
		</div>`
	;
	document.getElementById("condition").innerHTML = condition;
	let windspeed = `
		<div>
			<p>${data.current.wind_kph}<sup>kmph</p>
		</div>`
	;
	document.getElementById("windspeed").innerHTML = windspeed;
		}).catch((err) => console.log(err));
}
