document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('character-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Персонаж добавлен! (Функционал в разработке)');
        });
    }

    const footerText = document.querySelector('footer p');
    let clickCount = 0;

    footerText.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 7) {
            window.location.href = 'secret.html';
            clickCount = 0; // Сбрасываем счётчик
        }
    });
});
