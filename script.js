window.addEventListener('scroll', () => {
    const character = document.getElementById('character');
    
    // Calculate how far down the page we have scrolled (0 to 1)
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = window.scrollY / maxScroll;

    // Move from Left (10%) to Right (90%)
    const posX = 10 + (scrollFraction * 80);
    
    // Move from Bottom (90%) to Top (5%)
    const posY = 90 - (scrollFraction * 85);

    // Add a little "dip" or "bounce" to the movement (The engineering dips!)
    const dipEffect = Math.sin(scrollFraction * 15) * 5;

    character.style.left = `${posX}%`;
    character.style.top = `${posY + dipEffect}%`;
    
    // Make the character "lean" into the climb
    const tilt = Math.cos(scrollFraction * 15) * 10;
    character.style.transform = `translate(-50%, -50%) rotate(${tilt}deg)`;
});

function showInfo(title, text) {
    alert(title + ": " + text); 
    // You can replace this alert with a pretty modal later!
}