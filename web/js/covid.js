function calculateCurrent(jsonValue,current) {
	if(current == "false"){
        var count = -1;
        for(i=0;i < jsonValue.length;i++) {
            count++;
        }
        updateValues(jsonValue[count].Confirmed,jsonValue[count].Recovered,jsonValue[count].Active,jsonValue[count].Deaths,jsonValue[count].Date);
    } else
    {
        var count = -1;
        for(i=0;i < jsonValue.length;i++) {
            count++;
        }
        var Confirmed = jsonValue[count].Confirmed-jsonValue[count-1].Confirmed;
        var Recovered = jsonValue[count].Recovered-jsonValue[count-1].Recovered;
        var Active = jsonValue[count].Active-jsonValue[count-1].Active;
        var Deaths = jsonValue[count].Deaths-jsonValue[count-1].Deaths;
        var Date = jsonValue[count].Date;  

        updateValues(Confirmed,Recovered,Active,Deaths,Date);
    }
};

function showCurrentCountry(newValue){
    var element = document.getElementById("countries");
    var element2 = document.getElementById("change");
    var mai = element2.value;
    if(mai == "true")
    {
    document.getElementById('current').innerHTML = "Mai nap <br>";
    } else {
    document.getElementById('current').innerHTML = "Összesen <br>";    
    }

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
		calculateCurrent(responseJSON,mai);
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
