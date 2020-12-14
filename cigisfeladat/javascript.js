function szamol()
{
    var cigidb=document.getElementById("cigidb").value;
    var cigidoboz=document.getElementById("cigidoboz").value;
    var cigiar=document.getElementById("cigiar").value;
    var osszeg = (cigidb*7)/cigidoboz*cigiar
    if (isNaN(osszeg)){
        document.getElementById('koltseg').innerHTML = "Formátum Hiba!";   
    }
    else
    {
        document.getElementById('koltseg').innerHTML = osszeg+" ft";
    }

}