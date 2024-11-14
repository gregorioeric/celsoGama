function verificarQuestao1EF() {
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

function verificarQuestao2EF() {
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

function verificarQuestao3EF() {
  const radios = document.getElementsByName("questao3");
  let respostaCerta =
    "A-as tecnologias, o mercado dos produtos e serviços e a higiene criaram uma ditadura do corpo.";
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

function verificarQuestao4EF() {
  const radios = document.getElementsByName("questao4");
  let respostaCerta =
    "E-influência da sociedade na construção dos sentidos e significados sociais relacionados ao corpo.";
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

function verificarQuestao5EF() {
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

function verificarQuestao1TI() {
  const radios = document.getElementsByName("questao1");
  let respostaCerta = "B-assimilam os comportamentos dos usuários.";
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

function verificarQuestao2TI() {
  const radios = document.getElementsByName("questao2");
  let respostaCerta =
    "D-postura consumista à crença na promessa ilusória de anúncios publicitários.";
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

function verificarQuestao3TI() {
  const radios = document.getElementsByName("questao3");
  let respostaCerta = "B-identificação de pluralidade de estilos e mídias.";
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

function verificarQuestao4TI() {
  const radios = document.getElementsByName("questao4");
  let respostaCerta =
    "D-possibilidades de fazer música decorrentes dos avanços tecnológicos.";
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

function verificarQuestao5TI() {
  const radios = document.getElementsByName("questao5");
  let respostaCerta =
    "B-o estágio mais recente da evolução tecnológica para o armazenamento de dados digitais.";
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

function verificarQuestao1A() {
  const radios = document.getElementsByName("questao1");
  let respostaCerta = "B-materializar a técnica sem função utilitária.";
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

function verificarQuestao2A() {
  const radios = document.getElementsByName("questao2");
  let respostaCerta =
    "D-criticar os princípios que determinam o que é uma obra de arte.";
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

function verificarQuestao3A() {
  const radios = document.getElementsByName("questao3");
  let respostaCerta = "A-reflexão sobre a responsabilidade ambiental do homem.";
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

function verificarQuestao4A() {
  const radios = document.getElementsByName("questao4");
  let respostaCerta = "E-do corpo, da provocação e da moda.";
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

function verificarQuestao5A() {
  const radios = document.getElementsByName("questao5");
  let respostaCerta = "A-métodos utilizados pelo mercado de arte.";
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

function verificarQuestao1H() {
  const radios = document.getElementsByName("questao1");
  let respostaCerta = "D-fiscalização estatal diante das particularidades econômicas.";
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
