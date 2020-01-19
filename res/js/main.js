function bold() {
    var txt = document.getElementById("mytext");
    if (txt.style.fontWeight == 'normal') {
        txt.style.fontWeight = '600';
    } else {
        txt.style.fontWeight = 'normal';
    }


}

function test() {

}

function Italic() {
    var txt = document.getElementById("mytext");
    if (txt.style.fontStyle == 'normal') {
        txt.style.fontStyle = 'italic';
    } else {
        txt.style.fontStyle = 'normal';
    }

}

function changefontSize() {
    var txt = document.getElementById("mytext");
    var font = document.getElementById("size").value;
    txt.style.fontSize = font;

}

function changeUnderline() {
    var txt = document.getElementById("mytext");
    if (txt.style.textDecoration == 'underline') {
        txt.style.textDecoration = 'none';
    } else {
        txt.style.textDecoration = 'underline';
    }
}

function changePolice() {
    var txt = document.getElementById("mytext");
    var p = document.getElementById("police").value;
    txt.style.fontFamily = p;
}

$(document).ready(() => {
    $(".container button").css("opacity", "0");

    $(".container div").mouseenter(function () {
        var str = "#" + this.id + " button"
        $(this).css("opacity", "0.5");
        $(str).css("opacity", "1");

    });

    $(".container div").mouseleave(function () {
        var str = "#" + this.id + " button"
        $(this).css("opacity", "1");
        $(str).css("opacity", "0");

    });
});



console.log("test");