document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Получение информации из формы (примеры)
    const file = document.getElementById('fileInput').files[0];
    const url = document.getElementById('urlInput').value;

    // Дополнительная обработка загруженного файла или ссылки (пример)
    if (file) {
        console.log(`Выбран файл: ${file.name}`);
        // Действия с файлом, например, загрузка на сервер
    } else if (url) {
        console.log(`Введена ссылка: ${url}`);
        // Действия с ссылкой, например, отправка запроса на
