function rolarDado(icon, pericia) {
  const li = icon.parentElement.parentElement;
  let qtdDados = parseInt(li.querySelector(".dado-input").value) || 1;
  let bonus = parseInt(li.querySelector(".bonus-input").value) || 0;

  let resultados = [];
  for (let i = 0; i < qtdDados; i++) {
    resultados.push(Math.floor(Math.random() * 20) + 1);
  }

  let maiorResultado = Math.max(...resultados);

  let resultadoFinal = maiorResultado + bonus;

  const notificationArea = document.getElementById("notification-area");
  const notification = document.createElement("div");
  notification.classList.add("notification");

  const title = document.createElement("h4");
  title.innerText = pericia;

  const resultText = document.createElement("p");
  resultText.innerText = "Rolagens: " + resultados.join(", ");

  const highlight = document.createElement("span");
  highlight.classList.add("highlight");
  highlight.innerText = maiorResultado + " + " + bonus + " = " + resultadoFinal;

  notification.appendChild(title);
  notification.appendChild(resultText);
  notification.appendChild(highlight);

  notificationArea.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 10000);
}
const maxValues = {
  pv: 30,
  pe: 50,
  pd: 20,
};

function updateAttribute(attribute, input) {
  const value = Math.max(0, parseInt(input.value));
  input.value = value;
  console.log(`Atributo: ${attribute}, Valor: ${value}`);
}

function alterarVida(tipo, delta) {
  const label = document.getElementById(`${tipo}-label`);
  const fill = document.getElementById(`${tipo}-fill`);
  const currentValue = parseInt(label.innerText.split("/")[0]);
  const maxValue = maxValues[tipo];

  let newValue = currentValue + delta;
  newValue = Math.max(0, Math.min(newValue, maxValue)); // Limitar entre 0 e o máximo

  // Atualiza o preenchimento da barra de vida
  const percentage = (newValue / maxValue) * 100;
  fill.style.width = percentage + "%"; // Altera a largura da barra

  // Atualiza o rótulo
  label.innerText = `${newValue}/${maxValue}`;
}

function toggleTCVOptions() {
  const options = document.getElementById("tcv-options");
  options.style.display = options.style.display === "none" ? "block" : "none";
}

function selectTCV(value) {
  const selectedTCV = document.getElementById("selected-tcv");
  selectedTCV.innerText = `TCV: [ ${value} ]`;
  toggleTCVOptions(); // Fecha as opções após a seleção
}
