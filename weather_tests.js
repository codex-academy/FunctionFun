test( "find the hottest", function( assert ) {

    var hottestPlace = findHottestPlace("Hi Joe, look at this tomorrow it will be really cold all over the country; in Cape Town 9, in George 7, in Port Elizabeth 5 and in Johannesburg -1")

    assert.equal( "Cape Town", hottestPlace);
});

test( "find the coldest", function( assert ) {

    var coldestPlace = findColdestPlace("Hi Joe, look at this tomorrow it will be really cold all over the country; in Cape Town 9, in George 7, in Port Elizabeth 5 and in Johannesburg 1")

    assert.equal( "Johannesburg", coldestPlace);
});

test( "find places", function( assert ) {

    var places = findPlaces("Hi Joe, look at this tomorrow it will be really cold all over the country; in Cape Town 9, in George 7, in Port Elizabeth 5 and in Johannesburg 1")

    //????
    //places["Cape Town"] // returns tempurature

    var expectedPlaces = [
      {
        "place": "Cape Town",
        "temperature": 9
      },
      {
        "place": "George",
        "temperature": 7
      },
      {
        "place": "Port Elizabeth",
        "temperature": 5
      },
      {
        "place": "Johannesburg",
        "temperature": -1
      }
    ];

    assert.deepEqual(expectedPlaces, places);
});
