const QUESTIONS = [
    {
        title: "PREGUNTA 1 DE 3:",
        description: "¿Estás en una relación actualmente?",
        confirm: "Si",
        deny: "No",
    },
    {
        title: "PREGUNTA 2 DE 3:",
        description: "¿Quién terminó su última relación?",
        confirm: "Yo",
        deny: "El",
    },
    {
        title: "PREGUNTA 3 DE 3:",
        description: "Si por medio de un video conocieras la solución definitiva de enamorar a un hombre, ¿Estarías dispuesta a verlo completo?",
        confirm: "Si, quiero verlo",
        deny: "No, no deseo",
    },
];

let index = 0;

const btn = document.querySelectorAll(".btn");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const announce = document.querySelector("#announce");

btn.forEach(button => {
    button.addEventListener("click", () => {
        button.disabled = true;
        index++;

        if (index === QUESTIONS.length) {
            announce.parentElement.classList.add("hidden");
            window.location.href = "https://camilasuarez.com/experta2";
            return;
        }

        announce.classList.add("hidden");
        setTimeout(() => {
            title.innerHTML = QUESTIONS[index].title;
            description.innerHTML = QUESTIONS[index].description;
            btn[0].innerHTML = QUESTIONS[index].confirm;
            btn[1].innerHTML = QUESTIONS[index].deny;
            announce.classList.remove("hidden");
            button.disabled = false;
        }, 700);
    });
});
