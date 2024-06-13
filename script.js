document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Симуляция успешной регистрации
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Сброс формы после успешной регистрации
    document.getElementById('registrationForm').reset();
});

// Обработчики событий для кнопок входа через социальные сети
document.querySelector('.google-btn').addEventListener('click', function() {
    alert('Вход через Google временно недоступен.');
});

document.querySelector('.apple-btn').addEventListener('click', function() {
    alert('Вход через Apple временно недоступен.');
});

document.querySelector('.vk-btn').addEventListener('click', function() {
    alert('Вход через ВКонтакте временно недоступен.');
});
