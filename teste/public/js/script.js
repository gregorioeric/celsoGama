// const btnCadastro = document.querySelector("#btn-cad button");

// btnCadastro.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("cliquei no botao");
// });

// setTimeout(function() {
//     window.location = "/login";
//   }, 3000);

// const home = document.querySelector("#home");

// console.log(home);

const inputCEP = document.querySelector('input[name="user_cep"]');
const inputCPF = document.querySelector('input[name="user_cpf"]');
const btnCEP = document.querySelector("#btn-cep");

if (inputCEP !== null) {
  inputCEP.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D+/g, "");
    let value = e.target.value.replace(/\D+/g, "");
    if (value.length > 5) {
      value = value.slice(0, 5) + "-" + value.slice(5, 8);
    }
    e.target.value = value;
  });
}

if (inputCPF !== null) {
  inputCPF.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D+/g, "");
    let value = e.target.value.replace(/\D+/g, "");
    if (value.length <= 11) {
      value = value.replace(/^(\d{3})(\d{0,3})/, "$1.$2");
      value = value.replace(/^(\d{3}\.\d{3})(\d{0,3})/, "$1.$2");
      value = value.replace(/^(\d{3}\.\d{3}\.\d{3})(\d{0,2})/, "$1-$2");
    }
    e.target.value = value;
  });
}
