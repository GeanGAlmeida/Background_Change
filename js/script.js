var index = 0;

function changeColors() {
    var color = ["red","blue","orange","yellow","green","purple"];

    document.getElementsByTagName("body")[0].
    style.background = color[index++];
    
    if (index >= color.length ) {
        index = 0;
    }
}