'use strict';

const days = ['Воскресение', ' Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

const divFullDate = document.getElementById('fullDate')
const divShortDate = document.createElement('div')

const timeOutput = setInterval(function() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth()
    let day = now.getDate()
    let dayOfWeek = now.getDay()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    
    const hoursEndings = () => {
        let ending = ''
        if (hours === 1 || hours === 21) {
            ending = 'час'
        } else if ((hours >=2 && hours <=4) || hours ===22 || hours === 23) {
                ending = 'часа'
        } else {
            ending = 'часов'
        }
        return ending
    }
    
    const minutesEndings = () => {
        let ending = ''
        if (minutes === 1 || minutes === 21 || minutes === 31 || minutes ===  41 || minutes === 51) {
            ending = 'минута'
        } else if ((minutes >=2 && minutes <=4) || (minutes >=22 && minutes <=24) || (minutes >=32 && minutes <=34) 
            || (minutes >=42 && minutes <=44) || (minutes >=52 && minutes <=54)) { 
                ending = 'минуты'
        } else {
            ending = 'минут'
        }
        return ending
    }
    
    const secondsEndings = () => {
        let ending = ''
        if (seconds === 1 || seconds === 21 || seconds === 31 || seconds ===  41 || seconds === 51) {
            ending = 'секунда'
        } else if ((seconds >=2 && seconds <=4) || (seconds >=22 && seconds <=24) || (seconds >=32 && seconds <=34) 
            || (seconds >=42 && seconds <=44) || (seconds >=52 && seconds <=54)) { 
                ending = 'секунды'
        } else {
            ending = 'секунд'
        }
        return ending
    }
    
    const pad = (n) => {
        if (n <= 9) { return '0' + n }
        return n
    }

    divFullDate.innerHTML = `Сегодня ${days[dayOfWeek]}, ${day} ${months[month]} ${year} года, 
    ${hours} ${hoursEndings()} ${minutes} ${minutesEndings()} ${seconds} ${secondsEndings()}`

    shortDate.innerHTML = `${pad(day)}.${pad(month+1)}.${pad(year)} - ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`

}, 1000)
    