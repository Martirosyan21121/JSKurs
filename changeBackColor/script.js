$(document).ready(function() {
    // Function to generate random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Event listener for button click
    $('#changeColorBtn').click(function() {
        var randomColor = getRandomColor();
        $('body').css('background-color', randomColor);
    });
});
