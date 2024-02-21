// Для плавной прокрутки слайдера добавим следующий скрипт
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        const container = card.closest('.service-slider');
        const scrollWidth = card.offsetWidth + parseFloat(getComputedStyle(card).marginRight);
        container.scrollBy({
            left: card.offsetLeft - container.scrollLeft,
            behavior: 'smooth'
        });
    });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top-btn").style.display = "block";
    } else {
        document.getElementById("back-to-top-btn").style.display = "none";
    }
}

document.getElementById("back-to-top-btn").addEventListener("click", function() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollStep = -currentPosition / 20;
    
    var scrollInterval = setInterval(function() {
        window.scrollBy(0, scrollStep);
        currentPosition = document.documentElement.scrollTop || document.body.scrollTop; // Обновляем текущую позицию прокрутки

        // Если достигли верха страницы или текущая позиция меньше или равна 0, останавливаем интервал
        if (currentPosition <= 0) {
            clearInterval(scrollInterval);
        }
    }, 15);
});

// Форма

document.getElementById("open-appointment-form").addEventListener("click", function() {
    document.getElementById("appointment-popup").style.display = "block";
});

document.querySelector("#appointment-popup .close-btn").addEventListener("click", function() {
    document.getElementById("appointment-popup").style.display = "none";
});

document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Валидация формы
    validateAppointmentForm();
});

function validateAppointmentForm() {
    // Получение значений полей
    var lastname = document.getElementById("appointment-lastname").value;
    var firstname = document.getElementById("appointment-firstname").value;
    var email = document.getElementById("appointment-email").value;
    var phone = document.getElementById("appointment-phone").value;
    var date = document.getElementById("appointment-date").value;
    var time = document.getElementById("appointment-time").value;
    
    // Пример валидации на заполнение полей
    if (lastname === "") {
        document.getElementById("appointment-lastname-error").innerText = "Это поле не должно быть пустым";
    } else {
        document.getElementById("appointment-lastname-error").innerText = "";
    }
    
    // Продолжайте проверять и другие поля аналогичным образом
    
    // Если форма прошла валидацию, можно отправить данные на сервер
}


