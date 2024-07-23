

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
const specialTags = document.querySelectorAll(".special-tag");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    // Move cursor dot
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Move cursor outline with animation
    cursorOutline.animate([
        { left: `${cursorOutline.style.left}`, top: `${cursorOutline.style.top}` },
        { left: `${posX}px`, top: `${posY}px` }
    ], {
        duration: 500,
        fill: "forwards"
    });

    let isOverSpecialTag = false;

    // Check if the cursor is over any of the special tags
    specialTags.forEach(tag => {
        if (isCursorOverElement(e, tag)) {
            isOverSpecialTag = true;
        }
    });

    // Adjust outline size based on cursor position
    if (isOverSpecialTag) {
        cursorOutline.style.width = "50px"; // New width when over any special tag
        cursorOutline.style.height = "50px"; // New height when over any special tag
        cursorDot.style.display = "none";
        cursorOutline.style.border = "1px solid #6B7280";
    } else {
        cursorOutline.style.width = "30px"; // Default width
        cursorOutline.style.height = "30px"; // Default height
        cursorDot.style.display = "block";
        cursorOutline.style.border = "2px solid #000";
    }
});

// Helper function to check if the cursor is over an element
function isCursorOverElement(event, element) {
    const rect = element.getBoundingClientRect();
    return (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
    );
}


// navbar

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the navbar element
    var navbar = document.querySelector('.navbar');

    // Variable to store the last scroll position
    var lastScrollTop = 20;

    // Function to handle scroll event
    window.addEventListener("scroll", function() {
        // Current scroll position
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;


        if (scrollTop > lastScrollTop) {
            navbar.style.top = "-150px";
            } else {
            navbar.style.top = "0";
            }
            

        // Update last scroll position
        lastScrollTop = scrollTop;
    });


});

document.addEventListener("DOMContentLoaded", function() {
    // Select the navbar element
    var navbar = document.querySelector('.navbar');

    // Variable to store the last scroll position
    var lastScrollTop = 20;

    // Function to handle scroll event
    window.addEventListener("scroll", function() {
        // Current scroll position
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;


        if (scrollTop > 200) {
            navbar.style.background = "#dde6ed";
            } else {
            navbar.style.background = "transparent";
            }
            

        // Update last scroll position
        lastScrollTop = scrollTop;
    });


});
