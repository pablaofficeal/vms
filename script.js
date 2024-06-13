document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Получение информации из формы (примеры)
    const file = document.getElementById('fileInput').files[0];
    const url = document.getElementById('urlInput').value;
    const captchaValue = document.querySelector('input[name="captcha"]:checked');

    // Проверка выбранной капчи
    if (!captchaValue || captchaValue.value !== "green") {
        alert('Пожалуйста, выберите правильную картинку по капче.');
        return;
    }

    // Дополнительная обработка загруженного файла или ссылки (пример)
    if (file) {
        console.log(`Выбран файл: ${file.name}`);
        // Действия с файлом, например, загрузка на сервер
    } else if (url) {
        console.log(`Введена ссылка: ${url}`);
        // Действия с ссылкой, например, отправка запроса на проверку
    }

    // Симуляция результатов проверки
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.style.display = 'block';
    const resultText = document.getElementById('resultText');
    resultText.textContent = 'Результаты проверки';

    // Очистка формы после проверки
    document.getElementById('uploadForm').reset();
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Получение информации из формы (примеры)
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const photo = document.getElementById('photoInput').files[0];
    const captchaValue = document.querySelector('input[name="captcha"]:checked');

    // Проверка выбранной капчи
    if (!captchaValue || captchaValue.value !== "green") {
        alert('Пожалуйста, выберите правильную картинку по капче.');
        return;
    }

    // Дополнительная обработка фотографии (например, отображение или отправка на сервер)
    if (photo) {
        console.log(`Выбран файл: ${photo.name}`);
        // Действия с файлом,
