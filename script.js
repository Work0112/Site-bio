document.addEventListener('DOMContentLoaded', () => {
    // Показати анімацію завантаження на 2.5 секунди
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 2500);

    // Функція для завантаження текстових файлів
    async function loadTextFile(path, elementId, isLink = false) {
        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error(`Не вдалося завантажити ${path}: ${response.statusText}`);
            const text = await response.text();
            const element = document.getElementById(elementId);
            if (isLink) {
                element.href = text.trim();
                element.textContent = text.trim();
            } else {
                element.textContent = text.trim();
            }
        } catch (error) {
            console.error(`Помилка при завантаженні ${path}:`, error);
            document.getElementById(elementId).textContent = 'Н/Д';
        }
    }

    // Завантаження даних користувача
    loadTextFile('com/data/nick.txt', 'nick');
    loadTextFile('com/data/name.txt', 'name');
    loadTextFile('com/data/age.txt', 'age');
    loadTextFile('com/data/link.txt', 'link', true);
    loadTextFile('com/data/link2.txt', 'link2', true);
    loadTextFile('com/data/github.txt', 'github', true);
    loadTextFile('com/data/site.txt', 'site', true);

    // Завантаження даних розробника
    loadTextFile('com/dev/nick.txt', 'dev-nick');
    loadTextFile('com/dev/github.txt', 'dev-github', true);

    // Додавання затримки анімації для текстових елементів
    document.querySelectorAll('.animate-text').forEach((el, index) => {
        el.style.setProperty('--i', index + 1);
    });
});