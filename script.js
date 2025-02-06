document.getElementById('yesButton').addEventListener('click', function() {
    document.querySelector('.question').innerText = "I Love You!!";
    document.querySelector('.buttons').style.display = 'none'; // Hide buttons
});

document.getElementById('noButton').addEventListener('click', function() {
    const noButton = document.getElementById('noButton');
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Random X position
    const randomY = Math.floor(Math.random() * (window.innerHeight - 100)); // Random Y position
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});
