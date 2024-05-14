function calculateArea(rectangle){
document.getElementById("result-area").innerHTML = rectangle.width * rectangle.height;
}
function calculatePerimeter(rectangle){
    document.getElementById("result-perimeter").innerHTML = (2*(rectangle.width + rectangle.height));
}

let width = document.getElementById("width");
let height = document.getElementById("height");

document.getElementById("show-area").addEventListener("click",function(){
    let rectangle={
        width:parseFloat(width.value),
        height:parseFloat(height.value)
    };
    calculateArea(rectangle);
})
document.getElementById("show-perimeter").addEventListener("click",function(){
    let rectangle={
        width:parseFloat(width.value),
        height:parseFloat(height.value)
    };
    calculatePerimeter(rectangle);
})

