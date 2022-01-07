// ### Task 4.2 ###

const cardDiv = document.querySelector('.card') // поиск целевого блока страницы, содержимое которого надо передать в ротатор


const rotator = async (collection) => { // асинхронная функция "РОТАТОР"

    const rotatorCase = collection.querySelectorAll('.rotator__case');
    
    let caseActiveNumber = [...rotatorCase]
        .findIndex(item => item.classList.contains('rotator__case_active'));
    
    
    const sleep = (milliseconds) => { // функция остановки
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    
    function switcher(m) { // функция смены контента ротатора
        
        let color = rotatorCase[m].getAttribute('data-color');
        
        rotatorCase[caseActiveNumber].classList.remove('rotator__case_active');
        rotatorCase[m].style.color = color; // установка цвета контента, в зависимости от соответсвующего атрибута элемента
        rotatorCase[m].classList.add('rotator__case_active');
        caseActiveNumber = m;
    };

    for (let i = 0; i < rotatorCase.length; i++) { // циклический перебор всего контента целевого блока
        
        let delay = rotatorCase[i].getAttribute('data-speed'); // установка задержки воспроизведения контента, в зависимости от соответсвующего атрибута элемента
        await sleep(delay); // задержка итерации
        switcher(i);
        
    }
    
    rotator(collection);  // зацикливание (перевод в бесконечный повтор) ротатора
};

rotator(cardDiv) // вызов ротаторв в основном процессе с передачей в него целевого блока


document.onclick = () => {alert('Всё, блин, работает! ;Р')};