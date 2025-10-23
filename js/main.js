const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");


// Valeurs d'origine (annuelles) et mensuelles
const PRIX = {
annuel: { basic: "$199.99", professional: "$249.99", master: "$399.99" },
mensuel: { basic: "$19.99", professional: "$24.99", master: "$39.99" }
};


function majPrix(estMensuel) {
basic.textContent = estMensuel ? PRIX.mensuel.basic : PRIX.annuel.basic;
professional.textContent = estMensuel ? PRIX.mensuel.professional : PRIX.annuel.professional;
master.textContent = estMensuel ? PRIX.mensuel.master : PRIX.annuel.master;
}


checkbox.addEventListener("change", (e) => {
majPrix(e.target.checked);
});