const QUESTIONS = [
    {
        title: "PREGUNTA 1 DE 3:",
        description: "¿Te gustaría conocer el método de oración que puede conceder el milagro que tanto deseas?",
        confirm: "Si",
        deny: "No",
    },
    {
        title: "PREGUNTA 2 DE 3:",
        description: "¿Quieres aprender a orar y romper toda cadena que te ata al pasado?",
        confirm: "Si",
        deny: "No",
    },
    {
        title: "PREGUNTA 3 DE 3:",
        description: "¿Eres Cristiano Católico o Cristiano?",
        confirm: "Cristiano - Católico",
        deny: "Cristiano",
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
            if (button.dataset.response == "true")
                window.location.href = "https://insitutoseamosantos.com/omm/landingpage/l-ca/index.html";
            else 
                window.location.href = "https://insitutoseamosantos.com/omm/landingpage/l-cr/index.html";
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
