const NAME = document.getElementById('name');
const SURNAME = document.getElementById('surname');
const MAIL = document.getElementById('mail');
const YEARS = document.getElementById('years');
const EPISODE = document.getElementById('episode');
const OBSERVATION = document.getElementById('observation');
const COUNSTRY = document.getElementById('counstry');
const BUTTON = document.getElementById('button');

BUTTON.addEventListener('click', (e)=>{
    e.preventDefault()
    const data = {
        NAME: NAME.value,
        SURNAME: SURNAME.value,
        MAIL: MAIL.value,
        YEARS: YEARS.value,
        EPISODE: EPISODE.value,
        OBSERVATION: OBSERVATION.value,
        COUNSTRY: COUNSTRY.value
    }

    console.log(data)
})
