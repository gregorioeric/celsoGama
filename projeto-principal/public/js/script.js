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
    const cepValue = e.target.value.replace(/\D+/g, "");
    const cepArray = cepValue.split("");
    let cepFormatted = "";

    if (cepArray.length > 0) {
      cepFormatted += `${cepArray.slice(0, 5).join("")}`;
    }

    if (cepArray.length > 5) {
      cepFormatted += `-${cepArray.slice(5, 8).join("")}`;
    }

    console.log(cepFormatted);
    e.target.value = cepFormatted;
  });
}

if (inputCPF !== null) {
  inputCPF.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D+/g, "");
    let value = e.target.value;
    let cpfArray = value.split("");
    let cpfFormatado = "";

    if (cpfArray.length > 0) {
      cpfFormatado += `${cpfArray.slice(0, 3).join("")}`;
    }

    if (cpfArray.length > 3) {
      cpfFormatado += `.${cpfArray.slice(3, 6).join("")}`;
    }

    if (cpfArray.length > 6) {
      cpfFormatado += `.${cpfArray.slice(6, 9).join("")}`;
    }

    if (cpfArray.length > 9) {
      cpfFormatado += `-${cpfArray.slice(9, 11).join("")}`;
    }

    e.target.value = cpfFormatado;
  });
}

// if (inputCPF !== null) {
//   inputCPF.addEventListener("input", (e) => {
//     e.target.value = e.target.value.replace(/\D+/g, "");
//     let value = e.target.value.replace(/\D+/g, "");
//     if (value.length <= 11) {
//       // value = value.replace(/^(\d{3})(\d{0,3})/, "$1.$2");
//       // value = value.replace(/^(\d{3}\.\d{3})(\d{0,3})/, "$1.$2");
//       // value = value.replace(/^(\d{3}\.\d{3}\.\d{3})(\d{0,2})/, "$1-$2");
//       value += `${value.slice(0, 3)}`;
//       value += `.${value.slice(3, 6)}`;
//       value += `.${value.slice(6, 9)}`;
//       value += `-${value.slice(9, 11)}`;
//     }
//     e.target.value = value;
//   });
// }
