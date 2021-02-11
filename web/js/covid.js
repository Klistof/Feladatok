var igazolt = 0;
var felepult = 0;
var sulyos = 0;
var halalok = 0;

function calculateCurrent(jsonValue) {
	var count = -1;
	for(i=0;i < jsonValue.length;i++) {
		count++;
	}
    updateValues(jsonValue[count].Confirmed,jsonValue[count].Recovered,jsonValue[count].Active,jsonValue[count].Deaths,jsonValue[count].Date);
}



function showCurrentCountry(newValue){
    var element = document.getElementById("countries");
	if (newValue) {
	var	code = newValue;
	} else {
	var code = element.value;
	}

	fetch("https://api.covid19api.com/total/dayone/country/"+code, {
	"method": "GET",
	"headers": {
		"X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"
	}
})
.then((response) => response.json())
    .then((responseJSON) => {
		calculateCurrent(responseJSON);
        console.log(responseJSON);
    })
	.catch(err => {
		console.error(err);
	});
};

function updateValues(newConfirmed,newRecovered,newCritical,newDeaths,newDate){
    const date = newDate.split('T')
    document.getElementById('update').innerHTML = "Fríssitve : " +date[0];

    Circlle('#death','#d63031',newDeaths);
    Circlle('#infected','#fdcb6e',newConfirmed);
    Circlle('#recovered','#0984e3',newRecovered);
    Circlle('#active','#00b894',newCritical);

};

$( document ).ready(function() {
    var x = document.getElementById("countries");

    var code = code;
    var countries = 0;

	fetch("https://api.covid19api.com/countries", {
		"method": "GET",
		"headers": {
		"X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}})
    .then((response) => response.json())
    .then((responseJSON) => {
        countries = responseJSON;

            for (i=0;countries.length;i++)
            {
                var option = document.createElement("option");
                option.text = countries[i].Country;
                option.value = countries[i].ISO2;
                //option.value = countries[i].Slug;
                    if (countries[i].Country == "Hungary"){
                        option.selected = "selected";
						showCurrentCountry("hungary")
					}
                x.add(option);
            }
    })
	.catch(err => {
		console.error(err);
	});
});



function Circlle(el,hex,val) {
    $(el).circleProgress({fill : {color: hex},
        value: val})
    .on('circle-animation-progress', function(event,progress,stepValue)
    {
        $(this).find("#placeholder").text(String(Math.round(stepValue.toFixed(0)))+ '\nFő'
        );
    });
};
