// ### Task 4.3 ###

const bookContent = document.getElementById('book'); // поиск целевого элемента с контентом, в к-м производим изменения
const hrefItems = document.
    querySelector('.book__controls').
    querySelectorAll('a'); // получение коллекции всех ссылок в блоке управления контентом

function changeFontSize () { // функция СМЕНЫ ШРИФТА
    
    let activeHref = this.closest('.book__control').querySelector('.font-size_active'); // поиск элемента управления c активной меткой в блоке font-size
    
    activeHref.classList.remove('font-size_active');             // удаляем метку из активного элемента
    let currentFont = this.getAttribute('data-size');
    this.classList.add('font-size_active');                      // устанавливаем активную метку на выбранный(кликнутый) элемент управления
    activeHref = this;
    
    if ((bookContent.className.indexOf('small') !== -1)) { // проверка наличия класса .font-size_small у элемента bookContent
        bookContent.classList.remove('font-size_small');   // удаление класса .font-size_small у элемента bookContent
    };

    if ((bookContent.className.indexOf('big') !== -1)) {  // проверка наличия класса .font-size_big у элемента bookContent
        bookContent.classList.remove('font-size_big');    // удаление класса .font-size_big у элемента bookContent
    };
    
    switch(currentFont) { // добавление класса элементу bookContent в соответвии с кликом по элементу управления
        case 'small':
            bookContent.classList.add('font-size_small');
            break;
        case 'big':
            bookContent.classList.add('font-size_big');
            break;
    };

    return false; // Запрещаем переход по кликнутой ссылке
};


function changeColorText () { // функция СМЕНЫ ЦВЕТА ТЕКСТА
    
    let activeHref = this.closest('.book__control').querySelector('.color_active'); // поиск элемента управления c активной меткой в блоке text_color
    
    activeHref.classList.remove('color_active');             // удаляем метку из активного элемента
    let currentColor = this.getAttribute('data-text-color');
    this.classList.add('color_active');                      // устанавливаем активную метку на выбранный(кликнутый) элемент управления
    activeHref = this;
    
    if ((bookContent.className.indexOf('book_color-black') !== -1)) { // проверка наличия класса .'book_color-black у элемента bookContent
        bookContent.classList.remove('book_color-black');   // удаление класса .'book_color-black у элемента bookContent
    };

    if ((bookContent.className.indexOf('book_color-gray') !== -1)) {  // проверка наличия класса .'book_color-gray у элемента bookContent
        bookContent.classList.remove('book_color-gray');    // удаление класса .'book_color-gray у элемента bookContent
    };

    if ((bookContent.className.indexOf('book_color-whitesmoke') !== -1)) {  // проверка наличия класса .'book_color-whitesmoke у элемента bookContent
        bookContent.classList.remove('book_color-whitesmoke');    // удаление класса .'book_color-whitesmoke у элемента bookContent
    };
    
    switch(currentColor) { // добавление класса элементу bookContent в соответвии с кликом по элементу управления
        case 'black':
            bookContent.classList.add('book_color-black');
            break;
        case 'gray':
            bookContent.classList.add('book_color-gray');
            break;
        case 'whitesmoke':
                bookContent.classList.add('book_color-whitesmoke');
            break;
    };

    return false; // Запрещаем переход по кликнутой ссылке
};

function changeBackgroundColor () { // функция СМЕНЫ ЦВЕТА ФОНА
    
    let activeHref = this.closest('.book__control').querySelector('.color_active'); // поиск элемента управления c активной меткой в блоке text_color
    
    activeHref.classList.remove('color_active');             // удаляем метку из активного элемента
    let currentBgColor = this.getAttribute('data-bg-color');
    this.classList.add('color_active');                      // устанавливаем активную метку на выбранный(кликнутый) элемент управления
    activeHref = this;
    
    if ((bookContent.className.indexOf('book_bg-black') !== -1)) { // проверка наличия класса .'book_color-black у элемента bookContent
        bookContent.classList.remove('book_bg-black');   // удаление класса .'book_color-black у элемента bookContent
    };

    if ((bookContent.className.indexOf('book_bg-gray') !== -1)) {  // проверка наличия класса .'book_color-gray у элемента bookContent
        bookContent.classList.remove('book_bg-gray');    // удаление класса .'book_color-gray у элемента bookContent
    };

    switch(currentBgColor) { // добавление класса элементу bookContent в соответвии с кликом по элементу управления
        case 'black':
            bookContent.classList.add('book_bg-black');
            break;
        case 'gray':
            bookContent.classList.add('book_bg-gray');
            break;
    };

    return false; // Запрещаем переход по кликнутой ссылке
};

for (let i = 0; i < hrefItems.length; i++) {  // перебор всей коллекции ссылок в блоке управления        
    
    if (hrefItems[i].classList.contains('font-size')) {
        hrefItems[i].onclick = changeFontSize;  // обработка через цикл onclick-события для элементов блока управления (имеющих класс .font-size) 
    };

    if (hrefItems[i].outerHTML.indexOf('text_color') !== -1) {
        hrefItems[i].onclick = changeColorText;  // обработка через цикл onclick-события для элементов блока управления (имеющих класс .text_color) 
    };

    if (hrefItems[i].outerHTML.indexOf('bg_color') !== -1) {
        hrefItems[i].onclick = changeBackgroundColor;  // обработка через цикл onclick-события для элементов блока управления (имеющих класс .bg_color) 
    };
    
};