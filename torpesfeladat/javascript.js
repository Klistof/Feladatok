function randomTorpe()
{
    var torpek = ["Tudor","Vidor","Morgó","Szundi","Szende","Hapci","Kuka"];
    var random = Math.floor(Math.random() * 7);  

        document.getElementById('szoveghelye').innerHTML = torpek[random];
        document.getElementById('kephelye').innerHTML = "<img src ='hettorpe/"+random+".jpg' style='width:200px;'>";        
        //document.getElementById('koltseg').innerHTML = osszeg+" ft";

}