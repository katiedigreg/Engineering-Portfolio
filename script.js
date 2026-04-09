window.addEventListener('scroll', () => {
    const character = document.getElementById('character');
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    
    // Create a "wiggle" or "dip" effect as you climb
    // This moves the character left and right based on how far you've scrolled
    const horizontalMove = Math.sin(scrollPercent * 10) * 100; 
    
    character.style.left = `calc(50% + ${horizontalMove}px)`;
});

function showInfo(title, text) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-text').innerText = text;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}