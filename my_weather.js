$(function () {

    var data;


    $("#submitWeather").click(showWeather);


    function showWeather(data) {

        var city = $("#city").val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=00c33670fe069f40929358591c7b43b9";
        console.log(city);

        if (city != undefined) {

            $.getJSON(url, function (data) {

                var widget = show(data);

                $("#displayData").html(widget);

                $("#city").val("");
                console.log(data);

            });

        } else {
            alert("Sorry, you have to type a city name first!");
        }

    }

    function show(data) {
        return "<h3 id=\"cityDataTitle\"><strong>" + data.name + ", " + data.sys.country+ "</strong><img src=\"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png\" alt=\"" + data.weather[0].main + "\" ></h3><hr>" +
            "<h3><strong>Weather</strong>: " + data.weather[0].main + "</h3>" +
            "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" + "<h3><strong>Temperature</strong>: " + data.main.temp + " <sup>o</sup>C</h3>" + "<h3><strong>Pressure</strong>: " + data.main.pressure + " hpa" + "</h3>" + "<h3><strong>Humidity</strong>: " + data.main.humidity + " %</h3>" +
            "<h3><strong>Min. Temperature</strong>: " + data.main.temp_min + " <sup>o</sup>C</h3>" + "<h3><strong>Max. Temperature</strong>: " + data.main.temp_max + " <sup>o</sup>C</h3>" + "<h3><strong>Wind speed</strong>: " + data.wind.speed + "</h3>" + "<h3><strong>Wind direction</strong>: " + data.wind.deg + "</h3>";
    };
});
