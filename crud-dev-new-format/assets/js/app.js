import { teste } from "../../components/test.js";

teste();

const form = document.querySelector('#form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnSalvar = document.getElementById('btn-salvar');
const showPw = document.getElementById('show-pw');
const hidePw = document.getElementById('hide-pw');

const nomeError = document.getElementById('nomeError');
const emailError = document.getElementById('emailError');
const senhaError = document.getElementById('senhaError');

const msg_error = document.querySelector('#msg-error');

const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regex_pw = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#%!])/;

// const regex_pw_uppercase = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[\w $*&@#]{8,}/;
const regex_pw_uppercase = /^(?=.*[A-Z])/;
const regex_pw_lowercase = /^(?=.*[a-z])/;
const regex_pw_number = /^(?=.*[0-9])/;
const regex_pw_specail_character = /^(?=.*[$*&@#%!]).+$/;

btnSalvar.addEventListener('click', function (e) {
    e.preventDefault();
    const nomeValue = nome.value;
    const emailValue = email.value;
    const senhaValue = senha.value;

    if (!nomeValue || !emailValue || !senhaValue) {
        msg_error.innerHTML = `Campos Obrigatorio precisam ser preenchidos!!`;

        if (regex_pw.test(senha.value) && senha.value.length >= 8) {
            senha.style.border = '0.15rem solid rgb(18, 138, 36)';
        }
        else {
            senha.style.border = '0.15rem solid rgb(255, 0, 0)';
        }

        if (nomeValue.length >= 3) {
            nome.style.border = '0.15rem solid rgb(18, 138, 36)';
        }
        else {
            nome.style.border = '0.15rem solid rgb(255, 0, 0)';
        }

        if (!regex_email.test(emailValue)) {
            email.style.border = '0.15rem solid rgb(255, 0, 0)';
        }
        else {
            email.style.border = '0.15rem solid rgb(18, 138, 36)';
        }


    } else {
        console.log(nomeValue);
        console.log(emailValue);
        console.log(senhaValue);
        msg_error.innerHTML = '';
        senha.style.border = '0.15rem solid rgb(78, 78, 78)';
        nome.style.border = '0.15rem solid rgb(78, 78, 78)';
        email.style.border = '0.15rem solid rgb(78, 78, 78)';
        form.reset();

    }

    // if (nomeValue.length <= 3) {
    //     return nome.style.border = '0.15rem solid rgb(255, 0, 0)';
    // }

    // if (!regex_email.test(emailValue)) {
    //     return email.style.border = '0.15rem solid rgb(255, 0, 0)';
    // }

    // regexPwd()

    // email.style.border = '0.15rem solid rgb(18, 138, 36)';
    // console.log(nomeValue);
    // console.log(emailValue);
    // console.log(senhaValue);
});

nome.addEventListener('keyup', () => {
    const nomeValue = nome.value;
    if (nomeValue.length < 3) {
        nome.style.border = '0.15rem solid rgb(255, 0, 0)';
        nomeError.classList.add('visible');
        nomeError.innerHTML = `O Nome precisa ter no minimo 3 caracteres!!`;
    }
    else {
        nome.style.border = '0.15rem solid rgb(18, 138, 36)';
        nomeError.classList.add('hidden');
        nomeError.innerHTML = '';
    }
});

email.addEventListener('keyup', () => {
    if (!regex_email.test(email.value)) {
        email.style.border = '0.15rem solid rgb(255, 0, 0)';
        emailError.classList.add('visible');
        emailError.style.top = '-0.4rem';
        emailError.innerHTML = `<p>Forneça um email valido!!</p>`;
    }
    else {
        email.style.border = '0.15rem solid rgb(18, 138, 36)';
        emailError.style.opacity = 0;
        emailError.style.top = '-1.5rem';
        emailError.innerHTML = '';
    }
});

senha.addEventListener('focus', () => {
    if (senha.value === '') {
        senhaError.classList.add('visible');
        return senhaError.innerHTML = `
            <p id="valida-uc">
                <i class='bx bx-check-shield' id="shield-v"></i>
                <i class='bx bx-shield-x' id="shield-x"></i>
                Senha precisa ter Letra(s) Maiuscula(s)
            </p>
            <p id="valida-lc">
                <i class='bx bx-check-shield' id="shield-v"></i>
                <i class='bx bx-shield-x' id="shield-x"></i>
                Senha precisa ter Letra(s) Minuscula(s)
            </p>
            <p id="valida-num">
                <i class='bx bx-check-shield' id="shield-v"></i>
                <i class='bx bx-shield-x' id="shield-x"></i>
                Senha precisa ter Numero(s)
            </p>
            <p id="valida-sc">
                <i class='bx bx-check-shield' id="shield-v"></i>
                <i class='bx bx-shield-x' id="shield-x"></i>
                Senha precisa ter Caractere(s) espacial(is) Exemplo($ * & @ # % !)
            </p>
            <p id="valida-length">
                <i class='bx bx-check-shield' id="shield-v"></i>
                <i class='bx bx-shield-x' id="shield-x"></i>
                Senha precisa ter no minimo 8 caracteres
            </p>
    `;
    }

    regexPwd();

});

senha.addEventListener('keyup', () => {
    validaSenha();
});

function regexPwd() {
    const regex_pw = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#%!])/;
    if (regex_pw.test(senha.value) && senha.value.length >= 8) {
        return (
            senhaError.classList.add('none')
        )
    }
}

function validaSenha() {
    const valida_uc = document.getElementById('valida-uc');
    const valida_lc = document.getElementById('valida-lc');
    const valida_num = document.getElementById('valida-num');
    const valida_sc = document.getElementById('valida-sc');
    const valida_length = document.getElementById('valida-length');
    const shieldV = document.querySelectorAll('#shield-v');
    const shieldX = document.querySelectorAll('#shield-x');

    if (regex_pw_uppercase.test(senha.value)) {
        valida_uc.style.color = 'rgb(18, 138, 36)';
        shieldX[0].style.display = 'none';
        shieldV[0].style.display = 'block';
    }
    else {
        valida_uc.style.color = 'rgb(255, 0, 0)';
        shieldX[0].style.display = 'block';
        shieldV[0].style.display = 'none';
        senhaError.classList.add('visible');
    }

    if (regex_pw_lowercase.test(senha.value)) {
        valida_lc.style.color = 'rgb(18, 138, 36)';
        shieldX[1].style.display = 'none';
        shieldV[1].style.display = 'block';
    }
    else {
        valida_lc.style.color = 'rgb(255, 0, 0)';
        shieldX[1].style.display = 'block';
        shieldV[1].style.display = 'none';
        senhaError.classList.add('visible');
    }

    if (regex_pw_number.test(senha.value)) {
        valida_num.style.color = 'rgb(18, 138, 36)';
        shieldX[2].style.display = 'none';
        shieldV[2].style.display = 'block';
    }
    else {
        valida_num.style.color = 'rgb(255, 0, 0)';
        shieldX[2].style.display = 'block';
        shieldV[2].style.display = 'none';
        senhaError.classList.add('visible');
    }

    if (regex_pw_specail_character.test(senha.value)) {
        valida_sc.style.color = 'rgb(18, 138, 36)';
        shieldX[3].style.display = 'none';
        shieldV[3].style.display = 'block';
    }
    else {
        valida_sc.style.color = 'rgb(255, 0, 0)';
        shieldX[3].style.display = 'block';
        shieldV[3].style.display = 'none';
        senhaError.classList.add('visible');
    }

    if (senha.value.length >= 8) {
        valida_length.style.color = 'rgb(18, 138, 36)';
        shieldX[4].style.display = 'none';
        shieldV[4].style.display = 'block';
    }
    else {
        valida_length.style.color = 'rgb(255, 0, 0)';
        shieldX[4].style.display = 'block';
        shieldV[4].style.display = 'none';
        senhaError.classList.add('visible');
    }

    if (regex_pw.test(senha.value) && senha.value.length >= 8) {
        senha.style.border = '0.15rem solid rgb(18, 138, 36)';
        senhaError.classList.add('hide');
        senhaError.classList.remove('visible');
    }
    else {
        senha.style.border = '0.15rem solid rgb(255, 0, 0)';
        senhaError.classList.add('visible');
        senhaError.classList.remove('hide');
    }
    return;
}





showPw.addEventListener('click', () => {
    if (senha.getAttribute('type') === 'password') {
        senha.setAttribute('type', 'text')
        showPw.style.display = 'none';
        hidePw.setAttribute('style', 'display: block !important;')
    }
});

hidePw.addEventListener('click', () => {
    if (senha.getAttribute('type') === 'text') {
        senha.setAttribute('type', 'password');
        showPw.style.display = 'block';
        hidePw.setAttribute('style', 'display: none !important;');
    }
});





// function errorCampos() {
//     nomeError.style.opacity = 1;
//     nomeError.style.left = '25%';
//     nome.style.border = '0.15rem solid rgb(255, 0, 0)';
// }

// function validaCampos() {
//     nomeError.style.opacity = 0;
//     nomeError.style.left = '35%';
//     nome.style.border = '';
// }

// senha.addEventListener('keyup', () => {
//     // if (regex_pw.test(senha.value) && senha.value.length > 8) {
//     if (regex_pw.test(senha.value)) {
//         senha.style.border = '0.15rem solid rgb(18, 138, 36)';
//     }
//     else {
//         senha.style.border = '0.15rem solid rgb(255, 0, 0)';
//     }
// });