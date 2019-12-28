document.onclick = function() {dienTich()};

function dienTich() {
    let width = parseInt(inputWidth);
    let height = parseInt(inputHeight);
    let area = width * height;
    document.write("The area is: " + area);
}