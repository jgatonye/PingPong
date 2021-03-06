var Calculator = require('./../js/script.js').calculatorModule;
$(document).ready(function() {
    $('#ping-pong-form').submit(function(event) {
        event.preventDefault();
        var goal = $('#goal').val();
        var simpleCalculator = new Calculator("hot pink");
        var output = simpleCalculator.pingPong(goal);
        output.forEach(function(element) {
            $('#solution').append("<li>" + element + "</li>");
        });
    });
});

$(document).ready(function() {
    $('#signup').submit(function(event) {
        event.preventDefault();
        var email = $('#email').val();
        $('#signup').hide();
        $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
    });
});

$(document).ready(function() {
    $('#time').text(moment());
});

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
    $('#weatherLocation').click(function() {
        var city = $('#location').val();
        $('#location').val("");
        $('.showWeather').text("The city you have chosen is " + city + ".");
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
            $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
        });
        .fail(function(error) {
            $('.showWeather').text(error.responseJSON.message);
        });
    });
});
