// ### Task 4.1 ###

const revealItems = document.querySelectorAll('.reveal'); // поиск элементов с классом "reveal"

for (let i =0; i < revealItems.length; i++) { //цикл для обработки скрытых элементов 

    let windowHalfHeight = document.documentElement.clientHeight / 2; // вычисляем половину высоты окна браузера

    window.addEventListener('scroll', function() { // обработка события скроллинга
   
        let coords = revealItems[i].getBoundingClientRect(); // координаты элемента относительно лувого верхнего угла экрана (видимой части)
        
        if ((Math.round(this.scrollY) > (Math.round(coords.top + this.scrollY - windowHalfHeight)))) { // если скролл-бар приблизился к элементу вблизи половины высоты экрана (видимой части)

            revealItems[i].classList.add('reveal_active'); // активируем (отображаем) элемент
            
        };
    });
}

/* заметки:
this.scrollY - текущая  вертикальная координата скролл-бара (относительно начала страницы)
coords.top + this.scrollY - вычисленная вертикальная координата элемента (относительно начала страницы)
*/
