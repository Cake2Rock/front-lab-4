// Завдання 1

// Отримуємо перший елемент за допомогою getElementById()
const element1 = document.getElementById('element1');

// Отримуємо другий елемент за допомогою querySelector()
const element2 = document.querySelector('#element2');

// Додаємо обробник події для першого елемента
element1.addEventListener('click', function() {
    element1.classList.toggle('highlight1');
});

// Додаємо обробник події для другого елемента
element2.addEventListener('click', function() {
    element2.classList.toggle('highlight2');
});

// Завдання 2

// Отримуємо посилання на кнопки
const addImageButton = document.getElementById('addImage');
const increaseImageButton = document.getElementById('increaseImage');
const decreaseImageButton = document.getElementById('decreaseImage');
const deleteImageButton = document.getElementById('deleteImage');

// Отримуємо посилання на зображення
let image = document.getElementById('image');

// Функція додавання зображення
addImageButton.addEventListener('click', function() {
    if (!document.getElementById('image')) {
        const newImage = document.createElement('img');
        newImage.id = 'image';
        newImage.src = 'lviv.jpg';
        newImage.alt = 'Фото Львова';
        newImage.width = 500;
        newImage.style.display = 'block';
        newImage.style.marginTop = '20px';
        newImage.style.maxWidth = '100%';
        newImage.style.height = 'auto';

        const buttonContainer = document.querySelector('.button-container');
        buttonContainer.parentNode.insertBefore(newImage, buttonContainer);

        image = newImage;
    }
});

// Функція збільшення зображення
increaseImageButton.addEventListener('click', function() {
    if (image) {
        let currentWidth = image.width;
        image.width = currentWidth + 20;
    }
});

// Функція зменшення зображення
decreaseImageButton.addEventListener('click', function() {
    if (image) {
        let currentWidth = image.width;
        if (currentWidth > 20) {
            image.width = currentWidth - 20;
        }
    }
});

// Функція видалення зображення
deleteImageButton.addEventListener('click', function() {
    if (image) {
        image.parentNode.removeChild(image);
        image = null;
    }
});
