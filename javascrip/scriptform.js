document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar la recarga de la página

    const NAME = document.getElementById('name');
    const SURNAME = document.getElementById('surname');
    const MAIL = document.getElementById('mail');
    const YEARS = document.getElementById('years');
    const EPISODE = document.getElementById('episode');
    const OBSERVATION = document.getElementById('observation');
    const COUNSTRY = document.getElementById('counstry');

    // Validación de los campos
    let isValid = true;

    function showError(field, show, message) {
        // Mostrar errores si el campo está vacío o inválido
    }

    // Validación de los campos (esta parte ya la tienes implementada)
    showError("name", NAME.value.trim() === "", "¿Como te llamas?");
    showError("surname", SURNAME.value.trim() === "", "El apellido es obligatorio.");
    showError("mail", MAIL.value.trim() === "" || !/\S+@\S+\.\S+/.test(MAIL.value), "Introduce un correo electrónico válido.");
    showError("years", YEARS.value.trim() === "" || isNaN(YEARS.value), "La edad debe ser un número.");
    showError("episode", EPISODE.value.trim() === "", "Selecciona un episodio.");
    showError("observation", OBSERVATION.value.trim() === "", "¡Me encantaría saber tus ideas!");
    showError("counstry", COUNSTRY.value.trim() === "", "¿Cómo se llama tu país?");

    if (isValid) {
        // Si los datos son válidos, guardar en localStorage
        const formData = {
            name: NAME.value.trim(),
            surname: SURNAME.value.trim(),
            mail: MAIL.value.trim(),
            years: YEARS.value.trim(),
            episode: EPISODE.value,
            observation: OBSERVATION.value.trim(),
            counstry: COUNSTRY.value.trim()
        };

        // Guardar en localStorage
        localStorage.setItem("formData", JSON.stringify(formData));

        // Redirigir al archivo donde se muestran los datos
        window.location.href = "form1.html"; // Cambia la ruta según el archivo destino
    }
});
