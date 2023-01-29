document.getElementById("search").addEventListener("click", apicall);


function apicall() {
	const apikey = config.apikeyc;
	const cityname = document.getElementById("cityname").value;
  	const url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityname}&days=3&aqi=yes&alerts=no`;
  	fetch(url)
	.then((response) => response.json())
	.then((data) => {
	  	let output = `
	  	<div> 
			<p>${data.current.temp_c}<sup>℃</p>
	  	</div>`
	;
	  	document.getElementById("output").innerHTML = output;
		}).catch((err) => console.log(err));
}
