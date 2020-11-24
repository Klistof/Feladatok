function kerulet()
{
    var szam1 = document.getElementById("szam1").value;
    var szam2 = document.getElementById("szam2").value;
    var osszeg =2*(parseInt(szam1) +parseInt(szam2));
    if (isNaN(parseInt(osszeg))) {
        document.getElementById("kimenet").innerHTML = "Kerület: Hibás érték!!!";
    }
    else
    {
    document.getElementById("kimenet").innerHTML = "Kerület: "+osszeg+" cm";
    }
}

function terulet()
{
    var szam1 = document.getElementById("szam1").value;
    var szam2 = document.getElementById("szam2").value;
    var osszeg =(parseInt(szam1) * parseInt(szam2));
    if (isNaN(parseInt(osszeg))) {
        document.getElementById("kimenet2").innerHTML = "Terület: Hibás érték!!!";
    }
    else
    {
    document.getElementById("kimenet2").innerHTML = "Terület: "+osszeg+" cm<sup>2</sup>";
    }
}