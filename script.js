document.addEventListener('DOMContentLoaded', () => {
    const toggleDarkMode = document.getElementById('toggle-dark-mode');
    
    toggleDarkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
    });
});
