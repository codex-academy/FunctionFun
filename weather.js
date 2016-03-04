
function findPlaces(weatherString){

    var places = weatherString
        .split("in")
        .slice(1);

    var placeList = [];
    for(var i=0;i<places.length;i++){
        var place = places[i];

        var placeString = place
            .replace(",", "")
            .replace("and", "")
            .trim();

        var placeParts = placeString.split(" ");

        var placeName = placeParts[0];
        if (isNaN(placeParts[1])){
            placeName = placeParts[0] + " " + placeParts[1];
        }
        var temperature = Number(placeParts[placeParts.length-1]);

        placeList.push({
            place : placeName,
            temperature : temperature
        })
    }

    return placeList;

}

function findColdestPlace(weatherString){
    var places = findPlaces(weatherString);

    var coldestTemp = places[0].temperature;
    var coldestPlace = "";

    for(var i=0; i<places.length;i++){
        var place = places[i];
        if (place.temperature < coldestTemp ){
            coldestTemp = place.temperature;
            coldestPlace = place.place;
        }
    }
    return coldestPlace;
}

function findHottestPlace(weatherString){

    var places = findPlaces(weatherString);

    var highestTemp = 0;
    var hottestPlace = "";
    //find the hottest place
    for(var i=0; i<places.length;i++){
        var place = places[i];
        if (place.temperature > highestTemp ){
            highestTemp = place.temperature;
            hottestPlace = place.place;
        }
    }
    return hottestPlace;
}
