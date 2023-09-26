
document.addEventListener("DOMContentLoaded", function () {
    const session = {
        Nome: "___",
        CEP: "___",
        Cor: "___",
        Animal: "___",
        FLV: "___",
        FSND: "___",
        PDH: "___",
        Carro: "___",
        Marca: "___",
        Celebridade: "___",
        MeuNamoradoÉ: "___",
        MinhaSograÉ: "___",
       
        // Adicione mais regras aqui
    };

    const gameContainer = document.getElementById("game-container");

    for (const key in session) {
        if (session.hasOwnProperty(key)) {
            const rule = session[key];
            const column = document.createElement("div");
            column.classList.add("column");
            column.innerHTML = `
                <h2>${key}</h2>
                <input type="text" id="${key}" value="${rule}" disabled>
            `;
            gameContainer.appendChild(column);
        }
    }
});
