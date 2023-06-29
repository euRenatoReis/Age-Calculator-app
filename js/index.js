const inputYear = document.querySelector('.input-year');
const inputMonth = document.querySelector('.input-month');
const inputDay = document.querySelector('.input-day');

const yearNumber = document.querySelector('.year-number');
const monthNumber = document.querySelector('.month-number');
const dayNumber = document.querySelector('.day-number');

const avisoDay = document.querySelector('.aviso-day');
const avisoMonth = document.querySelector('.aviso-month');
const avisoYear = document.querySelector('.aviso-year');

const title = document.querySelectorAll('.title');

const buttonTree = document.querySelector('.button-tree');




buttonTree.addEventListener('click', () => {

    if (inputYear.value === '' || inputMonth.value === '' || inputDay.value === '') {

        Negativa()

    } else if (inputYear.value >= 2023 || inputMonth.value > 12 || inputDay.value > 31) {

        Negativa()

    } else if (inputMonth.value === 2 && inputDay.value > 28) {

        Negativa()

    } else if ((inputMonth.value === 4 || inputMonth.value === 6 || inputMonth.value === 9 || inputMonth.value === 11) && inputDay.value > 30) {

        Negativa()

    } else {

        var d = parseInt(inputDay.value);

        var m = parseInt(inputMonth.value);

        var y = parseInt(inputYear.value);


        const years = 2022 - y;

        const quantMeses = 12 - m

        const quantDias = 31 - d


        while (y <= 2022) {

            y++

            yearNumber.innerHTML = years

        }


        while (m <= 12) {

            m++

            monthNumber.innerHTML = quantMeses

        }

        while (d <= 31) {

            d++

            dayNumber.innerHTML = quantDias
        }

    }

});

function Negativa() {

    inputYear.classList.add('negative');
    inputMonth.classList.add('negative');
    inputDay.classList.add('negative');

    if (inputYear.value === '') {

        avisoYear.classList.add('ativo')
        title[2].classList.add('negative');
        avisoYear.innerHTML = `'this field is required'`
    }

    if (inputMonth.value === '') {

        avisoMonth.classList.add('ativo');
        title[1].classList.add('negative');
        avisoMonth.innerHTML = 'this field is required'
    }

    if (inputDay.value === '') {

        avisoDay.classList.add('ativo')
        title[0].classList.add('negative');
        avisoDay.innerHTML = 'this field is required'
    }

    if (inputYear.value >= 2023) {

        avisoYear.classList.add('ativo')
        title[2].classList.add('negative');
        avisoYear.innerHTML = 'Must be in the past'
    }

    if (inputMonth.value > 12) {

        avisoMonth.classList.add('ativo')
        title[1].classList.add('negative');
        avisoMonth.innerHTML = 'must be a valid Month'
    }

    if (inputDay.value > 31) {

        avisoDay.classList.add('ativo')
        title[0].classList.add('negative');
        avisoDay.innerHTML = 'must be a valid Day'
    }

    if (inputMonth.value === 2 && inputDay.value > 28) {

        avisoMonth.classList.add('ativo')
        avisoDay.classList.add('ativo')
        title[1].classList.add('negative');
        title[0].classList.add('negative');

        avisoMonth.innerHTML = 'February doesnt have that many days'
        avisoDay.innerHTML = 'February doesnt have that many days'
    }

    if ((inputMonth.value === 4 || inputMonth.value === 6 || inputMonth.value === 9 || inputMonth.value === 11) && inputDay.value > 30) {

        avisoMonth.classList.add('ativo')
        avisoDay.classList.add('ativo')
        title[1].classList.add('negative');
        title[0].classList.add('negative');

        avisoMonth.innerHTML = 'this month has only 30 days'
        avisoDay.innerHTML = 'this month has only 30 days'
    }


}
