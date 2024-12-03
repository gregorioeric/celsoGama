const inputCEP = document.querySelector('input[name="user_cep"]');
const inputCPF = document.querySelector('input[name="user_cpf"]');
const inputPhone = document.querySelector('input[name="user_telefone"]');
const btnCEP = document.querySelector("#btncep");

if (inputCEP !== null) {
  inputCEP.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D+/g, "");
    let cepValue = e.target.value.replace(/\D+/g, "");

    cepValue = cepValue.replace(/^(\d{5})(\d{1,3})$/, "$1-$2");

    e.target.value = cepValue;
  });
}

if (inputCPF !== null) {
  inputCPF.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D+/g, "");
    let value = e.target.value.replace(/\D+/g, "");
    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    e.target.value = value;
  });
}

if (inputPhone !== null) {
  inputPhone.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D+/g, "");
    let value = e.target.value.replace(/\D+/g, "");
    const phoneArray = value.split("");

    if (phoneArray[2] == 9) {
      inputPhone.maxLength = 15;
    }

    if (phoneArray[2] != 9) {
      inputPhone.maxLength = 14;
    }

    value = value.replace(/^(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");

    return (e.target.value = value);
  });
}

const editar = document.querySelector("#edit");
const cancel = document.querySelector("#cancel");
const update = document.querySelector("#btns_profile button");
const file = document.querySelector('input[name="user_img_profile"]');
const userName = document.querySelector('input[name="user_name"]');
const userEmail = document.querySelector('input[name="user_email"]');
const userCpf = document.querySelector('input[name="user_cpf"]');
const userCep = document.querySelector('input[name="user_cep"]');
const userTelefone = document.querySelector('input[name="user_telefone"]');
const activePlus = document.querySelector("#change_img");
const imgProfile = document.querySelector("#profile");
const modalForm = document.querySelector("#modal form");
const text_h3 = document.querySelector("#content-delete h3");
const modal = document.querySelector("#modal");
const cancelar = document.querySelector("#cancelar");

if (update !== null) {
  update.disabled = true;
}

if (editar !== null) {
  editar.addEventListener("click", () => {
    update.disabled = false;
    update.classList.add("enabled");
    file.disabled = false;
    userName.disabled = false;
    userEmail.disabled = false;
    userCpf.disabled = false;
    userCep.disabled = false;
    userTelefone.disabled = false;
    userName.classList.add("enable_input");
    userEmail.classList.add("enable_input");
    userCpf.classList.add("enable_input");
    userCep.classList.add("enable_input");
    userTelefone.classList.add("enable_input");
    activePlus.style.display = "block";
    cancel.style.display = "flex";
    editar.style.display = "none";
  });
}

if (cancel !== null) {
  cancel.style.display = "none";
  cancel.addEventListener("click", () => {
    update.disabled = true;
    update.classList.remove("enabled");
    file.disabled = true;
    userName.disabled = true;
    userEmail.disabled = true;
    userCpf.disabled = true;
    userCep.disabled = true;
    userTelefone.disabled = true;
    userName.classList.remove("enable_input");
    userEmail.classList.remove("enable_input");
    userCpf.classList.remove("enable_input");
    userCep.classList.remove("enable_input");
    userTelefone.classList.remove("enable_input");
    activePlus.style.display = "none";
    cancel.style.display = "none";
    editar.style.display = "flex";
  });
}

if (file !== null) {
  file.addEventListener("input", (e) => {
    const input = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", (e) => {
      imgProfile.src = e.target.result;
    });

    reader.readAsDataURL(input);
  });
}

if (cancelar !== null) {
  cancelar.addEventListener("click", () => {
    modal.classList.add("hide-modal");
    modal.classList.remove("show-modal");
  });
}

const openDeleteModal = (id, position_name) => {
  modalForm.action = `/relcamacoes/deletePost/${id}`;
  text_h3.innerHTML = position_name;
  modal.classList.add("show-modal");
  modal.classList.remove("hide-modal");
};
