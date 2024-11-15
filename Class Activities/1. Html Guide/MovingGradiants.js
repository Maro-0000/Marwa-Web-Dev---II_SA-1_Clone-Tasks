// Wait until the DOM content is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the element with the class "interactive" (this will be the bubble that follows the mouse)
    const interBubble = document.querySelector('.interactive');
    
    // Initialize current (curX, curY) and target (tgX, tgY) positions for the interactive bubble
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    // Define a function to smoothly move the bubble toward the target position
    const move = () => {
        // Incrementally adjust the current position towards the target position by 1/20th of the distance
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;

        // Update the position of the bubble using the calculated coordinates, rounding for smoothness
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;

        // Continue the animation by calling the move function recursively
        requestAnimationFrame(move);
    };

    // Update the target position (tgX, tgY) whenever the mouse moves
    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;  // Set target X to the mouse's X coordinate
        tgY = event.clientY;  // Set target Y to the mouse's Y coordinate
    });

    // Start the animation loop
    move();
});
