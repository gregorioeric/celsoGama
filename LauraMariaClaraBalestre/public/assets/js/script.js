
function verificarQuestao1() {
    const radios = document.getElementsByName("questao1");
    let respostaCerta = "E-Atitude contestadora de um jogador-problema.";
    let resultado = document.getElementById("resultado1");
    let resolucao = document.getElementById("resolucao1");

    for (const radio of radios) {
      if (radio.checked) {
        if (radio.value === respostaCerta) {
          resultado.textContent = "Você acertou!";
        } else {
          resultado.textContent = "Você errou.";
        }
        resolucao.style.display = "block";
        return;
      }
    }
    resultado.textContent = "Por favor, selecione uma resposta.";
  }

  function verificarQuestao2() {
    const radios = document.getElementsByName("questao2");
    let respostaCerta = "A-contribuíram para a democratização do skate.";
    let resultado = document.getElementById("resultado2");
    let resolucao = document.getElementById("resolucao2");

    for (const radio of radios) {
      if (radio.checked) {
        if (radio.value === respostaCerta) {
          resultado.textContent = "Você acertou!";
        } else {
          resultado.textContent = "Você errou.";
        }
        resolucao.style.display = "block";
        return;
      }
    }
    resultado.textContent = "Por favor, selecione uma resposta.";
  }

  function verificarQuestao3() {
    const radios = document.getElementsByName("questao3");
    let respostaCerta = "A-as tecnologias, o mercado dos produtos e serviços e a higiene criaram uma ditadura do corpo.";
    let resultado = document.getElementById("resultado3");
    let resolucao = document.getElementById("resolucao3");

    for (const radio of radios) {
      if (radio.checked) {
        if (radio.value === respostaCerta) {
          resultado.textContent = "Você acertou!";
        } else {
          resultado.textContent = "Você errou.";
        }
        resolucao.style.display = "block";
        return;
      }
    }
    resultado.textContent = "Por favor, selecione uma resposta.";
  }


  function verificarQuestao4() {
    const radios = document.getElementsByName("questao4");
    let respostaCerta = "E-influência da sociedade na construção dos sentidos e significados sociais relacionados ao corpo.";
    let resultado = document.getElementById("resultado4");
    let resolucao = document.getElementById("resolucao4");

    for (const radio of radios) {
      if (radio.checked) {
        if (radio.value === respostaCerta) {
          resultado.textContent = "Você acertou!";
        } else {
          resultado.textContent = "Você errou.";
        }
        resolucao.style.display = "block";
        return;
      }
    }
    resultado.textContent = "Por favor, selecione uma resposta.";
  }


  function verificarQuestao5() {
    const radios = document.getElementsByName("questao5");
    let respostaCerta = "A-adoção de hábitos inadequados à saúde no cotidiano.";
    let resultado = document.getElementById("resultado5");
    let resolucao = document.getElementById("resolucao5");

    for (const radio of radios) {
      if (radio.checked) {
        if (radio.value === respostaCerta) {
          resultado.textContent = "Você acertou!";
        } else {
          resultado.textContent = "Você errou.";
        }
        resolucao.style.display = "block";
        return;
      }
    }
    resultado.textContent = "Por favor, selecione uma resposta.";
  }

 