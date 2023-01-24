function getRandomColor() {
    var letters = '0123456789ABCDEFGHIJ';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() *16)];
    }
    return color;
  }

  function setRandomColor() {
    $("#colorpad").css("background-color", getRandomColor());
    $(".header").css("background-color", getRandomColor());
    $(".h1").css("background-color", getRandomColor());
    $(".h1").css("color", getRandomColor());
  }