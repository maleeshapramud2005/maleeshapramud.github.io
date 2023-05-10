// Initialize the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "rgb(23, 22, 23)";


// Create an array to store the circles
var circles = [];

// Define a Circle class to create new circles
function Circle() {
    // Set the initial position of the circle
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    // Set the size of the circle
    this.minSize = Math.random() * 20 + 10;
    this.maxSize = Math.random() * 50 + 50;
    this.size = this.minSize;

    // Set the speed of the circle
    this.speed = Math.random() * 2 + 1;

    // Set the angle of the circle
    this.angle = Math.random() * Math.PI * 2;

    // Set the initial color of the circle
    this.color = "#808080";

    // Set the rate of change of the size and color
    this.sizeDelta = Math.random() * 0.1 + 1;
    this.colorDelta = Math.random() * 10 - 5;
}

// Add a draw method to the Circle class
Circle.prototype.draw = function() {
    // Change the size and color of the circle
    if (this.size < this.minSize || this.size > this.maxSize) {
        this.sizeDelta *= -1;
    }
    this.size += this.sizeDelta;
    this.color = "hsl(" + ((parseInt(this.color.substring(4, 7)) + this.colorDelta + 360) % 360) + ", 100%, 50%)";

    // Move the circle based on its angle and speed
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    // Wrap the circle around the edges of the canvas
    if (this.x < -this.maxSize) this.x = canvas.width + this.maxSize;
    if (this.y < -this.maxSize) this.y = canvas.height + this.maxSize;
    if (this.x > canvas.width + this.maxSize) this.x = -this.maxSize;
    if (this.y > canvas.height + this.maxSize) this.y = -this.maxSize;

    // Draw the circle
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
};

// Add an update method to the Circle class to make the circles follow the mouse
Circle.prototype.update = function() {
    // Calculate the distance from the circle to the mouse
    var dx = this.x - mouseX;
    var dy = this.y - mouseY;
    var distance = Math.sqrt(dx * dx + dy * dy);

    // If the circle is close to the mouse, move it towards the mouse
    if (distance < 100) {
        this.x -= dx * 0.05;
        this.y -= dy * 0.05;
    }
};

// Add some circles to the array
for (var i = 0; i < 50; i++) {
    circles.push(new Circle());
}

// Track the mouse position on the canvas
var mouseX = canvas.width / 2;
var mouseY = canvas.height / 2;
canvas.addEventListener("mousemove", function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// Draw the circles on the canvas
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw each circle in the array
  for (var i = 0; i < circles.length; i++) {
    circles[i].draw();
  }

  // Schedule the next frame
  requestAnimationFrame(draw);
}

// Handle the mousemove event on the canvas
canvas.addEventListener("mousemove", function(event) {
  // Get the position of the mouse relative to the canvas
  var mouseX = event.clientX - canvas.offsetLeft;
  var mouseY = event.clientY - canvas.offsetTop;

  // Update the circles to follow the mouse
  for (var i = 0; i < circles.length; i++) {
    circles[i].update(mouseX, mouseY);
  }
});

// Start the animation
draw();

// Make a new Circle when we click on canvas
canvas.addEventListener("click", function(event) {
    // Create a new circle
    var newCircle = new Circle();

    // Set the position of the new circle to the mouse position
    newCircle.x = event.clientX;
    newCircle.y = event.clientY;

    // Add the new circle to the circles array
    circles.push(newCircle);
});
