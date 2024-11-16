document.addEventListener('DOMContentLoaded', function () {
    const formData = JSON.parse(localStorage.getItem("formData"));

    if (formData) {
        document.getElementById('nameDisplay').textContent = formData.name;
        document.getElementById('surnameDisplay').textContent = formData.surname;
        document.getElementById('mailDisplay').textContent = formData.mail;
        document.getElementById('yearsDisplay').textContent = formData.years;
        document.getElementById('episodeDisplay').textContent = formData.episode;
        document.getElementById('observationDisplay').textContent = formData.observation;
        document.getElementById('counstryDisplay').textContent = formData.counstry;
    }
});