document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#character-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const character = {
                name: form.querySelector('#name').value,
                category: form.querySelector('#category').value,
                appearance: form.querySelector('#appearance').value,
                biography: form.querySelector('#biography').value,
                facts: form.querySelector('#facts').value,
                image: form.querySelector('#image').files[0] ? URL.createObjectURL(form.querySelector('#image').files[0]) : ''
            };
            let characters = JSON.parse(localStorage.getItem('characters')) || [];
            characters.push(character);
            localStorage.setItem('characters', JSON.stringify(characters));
            alert('???????? ????????! ??????? ??????? ??? ?????? ????????? ?????.');
            form.reset();
        });
    }
});
