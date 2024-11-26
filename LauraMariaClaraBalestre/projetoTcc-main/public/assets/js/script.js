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

function verificarQuestao2H() {
  const radios = document.getElementsByName("questao2");
  let respostaCerta = "B-utilizar os vestígios restaurados para justificar o regime político.";
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

function verificarQuestao1G() {
  const radios = document.getElementsByName("questao1");
  let respostaCerta = "E-desterritorialização forçada de populações afetadas por conflitos armados.";
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

function verificarQuestao2G() {
  const radios = document.getElementsByName("questao2");
  let respostaCerta = "B-conclusão da transição demográfica.";
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

function verificarQuestao1F() {
  const radios = document.getElementsByName("questao1");
  let respostaCerta = "B-Sustentação do método dialético.";
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

function verificarQuestao2F() {
  const radios = document.getElementsByName("questao2");
  let respostaCerta = "A-idealidade e efetividade da moral.";
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

function verificarQuestao1S() {
  const radios = document.getElementsByName("questao1");
  let respostaCerta = "B-debate livre e racional entre cidadãos e Estado.";
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

function verificarQuestao2S() {
  const radios = document.getElementsByName("questao2");
  let respostaCerta = "B-cotas de gênero nas candidaturas partidárias.";
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

function verificarQuestao1B() {
  const radios = document.getElementsByName("questao1");
  let respostaCerta = "A-propicia o fluxo gênico.";
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

function verificarQuestao2B() {
  const radios = document.getElementsByName("questao2");
  let respostaCerta = "C-exploração de diferentes nichos, evitando a competição entre as fases da vida.";
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

function verificarQuestao1Q() {
  const radios = document.getElementsByName("questao1");
  let respostaCerta = "A-fórmula estrutural.";
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

function verificarQuestao2Q() {
  const radios = document.getElementsByName("questao2");
  let respostaCerta = "A-reduzir a quantidade de resíduos tóxicos nos efluentes da lavagem.";
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

function verificarQuestao1FISICA() {
  const radios = document.getElementsByName("questao1");
  let respostaCerta = "B-2";
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

function verificarQuestao2FISICA() {
  const radios = document.getElementsByName("questao2");
  let respostaCerta = "A-amplitude e velocidade.";
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

function verificarQuestao1PORT() {
  const radios = document.getElementsByName("questao1");
  let respostaCerta = "B-apontar a hipocrisia do discurso conservador na defesa da escravidão.";
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

function verificarQuestao2PORT() {
  const radios = document.getElementsByName("questao2");
  let respostaCerta = "C-brevidade no tratamento da temática.";
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

function verificarQuestao3PORT() {
  const radios = document.getElementsByName("questao3");
  let respostaCerta = "D-comercialização de pontos de vista.";
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

function verificarQuestao4PORT() {
  const radios = document.getElementsByName("questao4");
  let respostaCerta = "A-reaproveitamento de material.";
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

function verificarQuestao5PORT() {
  const radios = document.getElementsByName("questao5");
  let respostaCerta = "A-amalgamada pelo processo comum de desertificação e de solidão.";
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

function verificarQuestao1ES() {
  const radios = document.getElementsByName("questao1");
  let respostaCerta = "B-dar voz ao movimento popular";
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

function verificarQuestao2ES() {
  const radios = document.getElementsByName("questao2");
  let respostaCerta = "B-destino trágico de Santiago, que Plácida foi incapaz de prever nos sonhos";
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

function verificarQuestao3ES() {
  const radios = document.getElementsByName("questao3");
  let respostaCerta = "E-permanência da inconstância em uma sociedade marcada por contínuas mudanças";
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

function verificarQuestao4ES() {
  const radios = document.getElementsByName("questao4");
  let respostaCerta = "A-constatação de sua existência no entrelugar";
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

function verificarQuestao5ES() {
  const radios = document.getElementsByName("questao5");
  let respostaCerta = "D-explorar as relações entre as línguas estudadas para promover a diversidade";
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

function verificarQuestao1ING() {
  const radios = document.getElementsByName("questao1");
  let respostaCerta = "B-os ratos e os humanos possuem a mesma via metabólica para produção de morfina.";
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

function verificarQuestao2ING() {
  const radios = document.getElementsByName("questao2");
  let respostaCerta = "D-reforçar a ideia de que os jovens precisam de amor, mas também de firmeza ";
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

function verificarQuestao3ING() {
  const radios = document.getElementsByName("questao3");
  let respostaCerta = "D-demonstra consciência de sua identidade linguística.";
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

function verificarQuestao4ING() {
  const radios = document.getElementsByName("questao4");
  let respostaCerta = "A-festeja o fato de ter sido ousado na escolha que fez em sua vida.";
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

function verificarQuestao5ING() {
  const radios = document.getElementsByName("questao5");
  let respostaCerta = "A-coragem, pela superação.";
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

function verificarQuestao1MAT() {
  const radios = document.getElementsByName("questao1");
  let respostaCerta = "B-6√3 ";
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

function verificarQuestao2MAT() {
  const radios = document.getElementsByName("questao2");
  let respostaCerta = "A-2640.";
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

function verificarQuestao3MAT() {
  const radios = document.getElementsByName("questao3");
  let respostaCerta = "D-um pátio com 100 m².";
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

function verificarQuestao4MAT() {
  const radios = document.getElementsByName("questao4");
  let respostaCerta = "B-20º dia.";
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

function verificarQuestao5MAT() {
  const radios = document.getElementsByName("questao5");
  let respostaCerta = "D-1: 700.000";
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

