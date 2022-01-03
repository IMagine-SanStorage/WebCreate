var num = 1;

function changePick(idx) {
    if (idx == 1) {
        if (num == 8) return;
        num++;
    }
    else {
        if (num == 0) return;
        num--; 
    }
    var imgTag = document.getElementById("photo");
    imgTag.setAttribute("src", "/Users/sonminseog/Desktop/IMagineProject/IMagineICO_" + num + ".jpg");
}