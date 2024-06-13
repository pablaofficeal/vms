document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const urlInput = document.getElementById('urlInput');
    const resultsSection = document.getElementById('resultsSection');
    const resultText = document.getElementById('resultText');

    // Генерация случайного процента для демонстрации (https://vms.drweb.ru/online)
    let virusProbability = Math.floor(Math.random() * 101);

    // Вывод текста в зависимости от процента вероятности вируса
    if (fileInput.files.length > 0) {
        resultText.textContent = `Файл проверен, вероятность вируса: ${virusProbability}%`;
    } else if (urlInput.value) {
        resultText.textContent = `Ссылка проверена, вероятность вируса: ${virusProbability}%`;
    } else {
        resultText.textContent = 'Пожалуйста, загрузите файл или вставьте ссылку для проверки.';
    }

    resultsSection.style.display = 'block';
});
