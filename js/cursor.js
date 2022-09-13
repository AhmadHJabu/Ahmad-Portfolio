const cursor = 
  document.querySelector(".cursor");

var posX = 0, posY = 0,
   mouseX = 0, mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

    TweenMax.set(cursor, {
        css: {
            left: posX - 12,
            top: posY - 12,
        },
    });
    },
});