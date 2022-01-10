var num = 1;

function changePick(idx) {
    if (idx == 1) {
        if (num == 1) {
            num++;
        }
    }
    else {
        if (num == 2) {
            num--;
        }
    }
    var imgTag = document.getElementById("photo");
    if (num == 2  || num == 1) {
        imgTag.setAttribute("src", "/Users/sonminseog/Desktop/IMagineProject/src/img/IMagineICO_" + num + ".jpg");
    }
}