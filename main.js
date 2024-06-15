// Create a reference for the canvas
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d"); // corrected getContext method

var img_width = 300;
var img_height = 100;

var img_image; // Assuming this will be set elsewhere with image URL

var img_x = 100;
var img_y = 100;

function add() {
    var img_imgTag = new Image(); // Define a variable with a new image
    img_imgTag.onload = uploadimg; // Set a function to load this variable
    img_imgTag.src = img_image; // Load image
}

function uploadimg() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing
    ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

// Handle keydown event
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keyPressed = e.keyCode;
    console.log("Key Pressed: " + keyPressed);

    if ((keyPressed >= 65 && keyPressed <= 90) || (keyPressed >= 97 && keyPressed <= 122)) {
        // Alphabet keys (A-Z or a-z)
        alphabetkey();
        document.getElementById("d1").innerHTML = "You pressed an alphabet key.";
        console.log("Alphabet key");
    } else if (keyPressed >= 48 && keyPressed <= 57) {
        // Number keys (0-9)
        numberkey();
        document.getElementById("d1").innerHTML = "You pressed a number key.";
        console.log("Number key");
    } else if (keyPressed >= 37 && keyPressed <= 40) {
        // Arrow keys
        arrowkey();
        document.getElementById("d1").innerHTML = "You pressed an arrow key.";
        console.log("Arrow key");
    } else {
        // Special keys or others
        specialkey();
        document.getElementById("d1").innerHTML = "You pressed a special key or symbol.";
        console.log("Special key");
    }
}

function alphabetkey() {
    img_image = "alphabetkey.png"; // Set image URL for alphabet key
    add(); // Load and display the image
}

function numberkey() {
    img_image = "numberkey.png"; // Set image URL for number key
    add(); // Load and display the image
}

function arrowkey() {
    img_image = "arrowkey.png"; // Set image URL for arrow key
    add(); // Load and display the image
}

function specialkey() {
    img_image = "specialkey.png"; // Set image URL for special key
    add(); // Load and display the image
}
