// Получаем ссылки на элементы навигации
const navLinks = document.querySelectorAll('nav a');

// Добавляем обработчик события для каждой ссылки
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки
        const targetId = event.target.getAttribute('href'); // Получаем ID целевого элемента
        const targetElement = document.querySelector(targetId); // Находим целевой элемент

        // Плавная прокрутка к целевому элементу
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Получаем ссылку на секцию со специальностями
const specialtiesSection = document.querySelector('.specialties');

// Создаем новые элементы специальностей
const newSpecialties = [
    'Разработка игр',
    'Искусственный интеллект',
    'Виртуальная реальность'
];

// Добавляем новые специальности в список
newSpecialties.forEach(specialty => {
    const newSpecialtyItem = document.createElement('li');
    newSpecialtyItem.textContent = specialty;
    specialtiesSection.querySelector('ul').appendChild(newSpecialtyItem);
});

const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Добавьте здесь код для обработки отправки формы, например, отправку данных на сервер
});