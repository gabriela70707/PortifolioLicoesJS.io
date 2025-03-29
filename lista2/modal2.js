// Seleciona todos os botões de abrir modal
const botoesAbrirModal = document.querySelectorAll(".openModal");
const modais = document.querySelectorAll(".modal");

// Adiciona evento aos botões de abrir modal
botoesAbrirModal.forEach(botao => {
    botao.addEventListener("click", () => {
        const idModal = botao.getAttribute("data-modal"); // Identifica o modal
        const modal = document.getElementById(idModal);
        modal.style.display = "block";

        const nomeFuncaoAtividade = `executarAtividade${idModal.replace("modal", "")}`;
        if (typeof window[nomeFuncaoAtividade] === "function") {
            window[nomeFuncaoAtividade](modal); // Passa o modal como parâmetro
        }

        // Reaplica o evento ao botão de fechar após o conteúdo ser recriado
        const botaoFechar = modal.querySelector(".close");
        botaoFechar.addEventListener("click", () => {
            modal.style.display = "none"; // Fecha o modal
        });
    });
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener("click", (evento) => {
    modais.forEach(modal => {
        if (evento.target === modal) {
            modal.style.display = "none";
        }
    });
});


// Atividade 1: Soma, Subtração, Multiplicação e Divisão
function executarAtividade1(modal) {
  modal.querySelector(".modal-content").innerHTML = `
      <span class="close">&times;</span>
      <p>Digite dois números para realizar as operações:</p>
      <input type="number" id="numeroA" placeholder="Número A">
      <input type="number" id="numeroB" placeholder="Número B">
      <button id="calcular1" class="calcular">Calcular</button>
      <div id="resultado1"></div>
  `;

  document.getElementById("calcular1").addEventListener("click", () => {
      const a = Number(document.getElementById("numeroA").value);
      const b = Number(document.getElementById("numeroB").value);

      if (isNaN(a) || isNaN(b)) {
          document.getElementById("resultado1").innerHTML = `<p>Por favor, insira valores válidos.</p>`;
          return;
      }

      const soma = a + b;
      const subtracao = a - b;
      const multiplicar = a * b;
      const divisao = b !== 0 ? (a / b).toFixed(2) : "Indefinido (divisão por zero)";

      document.getElementById("resultado1").innerHTML = `
          <p>Soma: ${soma}</p>
          <p>Subtração: ${subtracao}</p>
          <p>Multiplicação: ${multiplicar}</p>
          <p>Divisão: ${divisao}</p>
      `;
  });

  const botaoFechar = modal.querySelector(".close");
  botaoFechar.addEventListener("click", () => {
      modal.style.display = "none";
  });
}

// Atividade 2: Inverter palavra
function executarAtividade2(modal) {
  modal.querySelector(".modal-content").innerHTML = `
      <span class="close">&times;</span>
      <p>Digite uma palavra para inverter:</p>
      <input type="text" id="palavra" placeholder="Palavra">
      <button id="calcular2" class="calcular">Inverter</button>
      <div id="resultado2"></div>
  `;

  document.getElementById("calcular2").addEventListener("click", () => {
      const palavra = document.getElementById("palavra").value.trim();

      if (!palavra) {
          document.getElementById("resultado2").innerHTML = `<p>Por favor, insira uma palavra válida!</p>`;
          return;
      }

      const invertida = palavra.split("").reverse().join("");
      document.getElementById("resultado2").innerHTML = `<p>Palavra invertida: ${invertida}</p>`;
  });

  const botaoFechar = modal.querySelector(".close");
  botaoFechar.addEventListener("click", () => {
      modal.style.display = "none";
  });
}

// Atividade 3: Exibir letras de um nome
function executarAtividade3(modal) {
  modal.querySelector(".modal-content").innerHTML = `
      <span class="close">&times;</span>
      <p>Digite um nome para exibir letra por letra:</p>
      <input type="text" id="nome" placeholder="Nome">
      <button id="calcular3" class="calcular">Exibir</button>
      <div id="resultado3"></div>
  `;

  document.getElementById("calcular3").addEventListener("click", () => {
      const nome = document.getElementById("nome").value.trim();

      if (!nome) {
          document.getElementById("resultado3").innerHTML = `<p>Por favor, insira um nome válido!</p>`;
          return;
      }

      let resultado = "<p>Letras do nome:</p>";
      for (let i = 0; i < nome.length; i++) {
          resultado += `<p>${nome[i]}</p>`;
      }

      document.getElementById("resultado3").innerHTML = resultado;
  });

  const botaoFechar = modal.querySelector(".close");
  botaoFechar.addEventListener("click", () => {
      modal.style.display = "none";
  });
}

// Atividade 4: Verificar idade para carteira de motorista
function executarAtividade4(modal) {
  modal.querySelector(".modal-content").innerHTML = `
      <span class="close">&times;</span>
      <p>Digite sua idade para verificar:</p>
      <input type="number" id="idade" placeholder="Idade">
      <button id="calcular4" class="calcular">Verificar</button>
      <div id="resultado4"></div>
  `;

  document.getElementById("calcular4").addEventListener("click", () => {
      const idade = Number(document.getElementById("idade").value);

      if (isNaN(idade) || idade <= 0) {
          document.getElementById("resultado4").innerHTML = `<p>Por favor, insira uma idade válida!</p>`;
          return;
      }

      const resultado = idade >= 18
          ? `<p>Você está liberado para tirar a carteira de motorista!</p>`
          : `<p>Infelizmente ainda não é possível tirar a carteira de motorista.</p>`;
      document.getElementById("resultado4").innerHTML = resultado;
  });

  const botaoFechar = modal.querySelector(".close");
  botaoFechar.addEventListener("click", () => {
      modal.style.display = "none";
  });
}


// Atividade 5: Ordenar números em ordem crescente
function executarAtividade5(modal) {
  modal.querySelector(".modal-content").innerHTML = `
      <span class="close">&times;</span>
      <p>Digite três números para ordená-los:</p>
      <input type="number" id="numero1" placeholder="Número 1">
      <input type="number" id="numero2" placeholder="Número 2">
      <input type="number" id="numero3" placeholder="Número 3">
      <button id="calcular5" class="calcular">Ordenar</button>
      <div id="resultado5"></div>
  `;

  document.getElementById("calcular5").addEventListener("click", () => {
      const numeros = [
          Number(document.getElementById("numero1").value),
          Number(document.getElementById("numero2").value),
          Number(document.getElementById("numero3").value)
      ];

      if (numeros.some(isNaN)) {
          document.getElementById("resultado5").innerHTML = `<p>Por favor, insira números válidos.</p>`;
          return;
      }

      numeros.sort((a, b) => a - b); // Ordena os números
      document.getElementById("resultado5").innerHTML = `<p>Números em ordem crescente: ${numeros.join(", ")}</p>`;
  });

  modal.querySelector(".close").addEventListener("click", () => {
      modal.style.display = "none";
  });
}

// Atividade 6: Converter horas para minutos
function executarAtividade6(modal) {
  modal.querySelector(".modal-content").innerHTML = `
      <span class="close">&times;</span>
      <p>Digite o número de horas para converter em minutos:</p>
      <input type="number" id="horas" placeholder="Horas">
      <button id="calcular6" class="calcular">Converter</button>
      <div id="resultado6"></div>
  `;

  document.getElementById("calcular6").addEventListener("click", () => {
      const horas = Number(document.getElementById("horas").value);

      if (isNaN(horas) || horas < 0) {
          document.getElementById("resultado6").innerHTML = `<p>Por favor, insira um valor válido para horas.</p>`;
          return;
      }

      const minutos = horas * 60;
      document.getElementById("resultado6").innerHTML = `<p>${horas} hora(s) equivalem a ${minutos} minutos.</p>`;
  });

  modal.querySelector(".close").addEventListener("click", () => {
      modal.style.display = "none";
  });
}

// Atividade 7: Calcular cédulas
function executarAtividade7(modal) {
  modal.querySelector(".modal-content").innerHTML = `
      <span class="close">&times;</span>
      <p>Digite o valor para calcular as cédulas necessárias:</p>
      <input type="number" id="valor" placeholder="Valor em reais">
      <button id="calcular7" class="calcular">Calcular</button>
      <div id="resultado7"></div>
  `;

  document.getElementById("calcular7").addEventListener("click", () => {
      const valorOriginal = Number(document.getElementById("valor").value);

      if (isNaN(valorOriginal) || valorOriginal <= 0) {
          document.getElementById("resultado7").innerHTML = `<p>Por favor, insira um valor válido.</p>`;
          return;
      }

      const cedulas = [200, 100, 50, 20, 10, 5, 1];
      let resultado = "";
      let valor = valorOriginal;

      for (const cedula of cedulas) {
          const quantidade = Math.floor(valor / cedula);
          valor %= cedula;
          if (quantidade > 0) {
              resultado += `<p>R$ ${cedula},00: ${quantidade} cédula(s)</p>`;
          }
      }

      document.getElementById("resultado7").innerHTML = `<p><strong>Valor total:</strong> R$ ${valorOriginal},00</p>${resultado}`;
  });

  modal.querySelector(".close").addEventListener("click", () => {
      modal.style.display = "none";
  });
}

// Atividade 8: Calcular raiz quadrada
function executarAtividade8(modal) {
  modal.querySelector(".modal-content").innerHTML = `
      <span class="close">&times;</span>
      <p>Digite um número para calcular a raiz quadrada:</p>
      <input type="number" id="numeroRaiz" placeholder="Número">
      <button id="calcular8" class="calcular">Calcular Raiz</button>
      <div id="resultado8"></div>
  `;

  document.getElementById("calcular8").addEventListener("click", () => {
      const numero = Number(document.getElementById("numeroRaiz").value);

      if (isNaN(numero) || numero < 0) {
          document.getElementById("resultado8").innerHTML = `<p>Por favor, insira um número válido (maior ou igual a zero).</p>`;
          return;
      }

      const raiz = Math.sqrt(numero).toFixed(2);
      document.getElementById("resultado8").innerHTML = `<p>A raiz quadrada de ${numero} é ${raiz}.</p>`;
  });

  modal.querySelector(".close").addEventListener("click", () => {
      modal.style.display = "none";
  });
}

// Atividade 9: Formulário simples com validação
function executarAtividade9(modal) {
  modal.querySelector(".modal-content").innerHTML = `
      <span class="close">&times;</span>
      <p>Preencha os campos abaixo:</p>
      <input type="text" id="nome" placeholder="Nome">
      <input type="text" id="endereco" placeholder="Endereço">
      <div>
          <label>Sexo:</label>
          <input type="radio" name="sexo" value="Feminino"> Feminino
          <input type="radio" name="sexo" value="Masculino"> Masculino
          <input type="radio" name="sexo" value="Prefiro não informar"> Prefiro não informar
      </div>
      <input type="number" id="telefone" placeholder="Telefone">
      <input type="number" id="celular" placeholder="Celular">
      <input type="email" id="email" placeholder="Email">
      <button id="enviar9" class="calcular">Enviar</button>
  `;

  document.getElementById("enviar9").addEventListener("click", () => {
      const nome = document.getElementById("nome").value.trim();
      const endereco = document.getElementById("endereco").value.trim();
      const sexo = document.querySelector('input[name="sexo"]:checked');
      const telefone = document.getElementById("telefone").value.trim();
      const celular = document.getElementById("celular").value.trim();
      const email = document.getElementById("email").value.trim();

      let alertMessage = "";

      if (!nome) alertMessage += "Nome é obrigatório.\n";
      if (!endereco) alertMessage += "Endereço é obrigatório.\n";
      if (!sexo) alertMessage += "Sexo é obrigatório.\n";
      if (!telefone) alertMessage += "Telefone é obrigatório.\n";
      if (!celular) alertMessage += "Celular é obrigatório.\n";
      if (!email) alertMessage += "Email é obrigatório.\n";

      if (alertMessage) {
          alert(`Por favor, preencha os campos corretamente:\n${alertMessage}`);
      } else {
          alert("Formulário enviado com sucesso!");
          document.getElementById("nome").value = '';
          document.getElementById("endereco").value = '';
          document.getElementById("telefone").value = '';
          document.getElementById("celular").value = '';
          document.getElementById("email").value = '';

      }
  });

  modal.querySelector(".close").addEventListener("click", () => {
      modal.style.display = "none";
  });
}

// Atividade 10: Calcular Imposto de Renda
function executarAtividade10(modal) {
  modal.querySelector(".modal-content").innerHTML = `
      <span class="close">&times;</span>
      <p>Digite seu salário para calcular o imposto de renda:</p>
      <input type="number" id="salario" placeholder="Salário">
      <button id="calcular10" class="calcular">Calcular</button>
      <div id="resultado10"></div>
  `;

  document.getElementById("calcular10").addEventListener("click", () => {
      const salario = Number(document.getElementById("salario").value);

      if (isNaN(salario) || salario <= 0) {
          document.getElementById("resultado10").innerHTML = `<p>Por favor, insira um valor válido.</p>`;
          return;
      }

      const calcularImposto = (salario) => {
          if (salario <= 1903.98) return 0; // Isento
          if (salario <= 2826.65) return salario * 0.075 - 142.8;
          if (salario <= 3751.05) return salario * 0.15 - 354.8;
          if (salario <= 4664.68) return salario * 0.225 - 636.13;
          return salario * 0.275 - 869.36; // Acima da última faixa
      };

      const imposto = calcularImposto(salario).toFixed(2);
      document.getElementById("resultado10").innerHTML = `<p>Imposto devido: R$ ${imposto}</p>`;
  });

  modal.querySelector(".close").addEventListener("click", () => {
      modal.style.display = "none";
  });
}

// Atividade 11: Calcular INSS
function executarAtividade11(modal) {
  modal.querySelector(".modal-content").innerHTML = `
      <span class="close">&times;</span>
      <p>Digite seu salário para calcular a contribuição do INSS:</p>
      <input type="number" id="salarioINSS" placeholder="Salário">
      <button id="calcular11" class="calcular">Calcular</button>
      <div id="resultado11"></div>
  `;

  document.getElementById("calcular11").addEventListener("click", () => {
      const salario = Number(document.getElementById("salarioINSS").value);

      if (isNaN(salario) || salario <= 0) {
          document.getElementById("resultado11").innerHTML = `<p>Por favor, insira um valor válido.</p>`;
          return;
      }

      const calcularINSS = (salario) => {
          if (salario <= 1212) return salario * 0.075;
          if (salario <= 2427.35) return salario * 0.09;
          if (salario <= 3641.03) return salario * 0.12;
          if (salario <= 7087.22) return salario * 0.14;
          return 0;
      };

      const contribuicao = calcularINSS(salario).toFixed(2);
      document.getElementById("resultado11").innerHTML = `<p>Contribuição INSS: R$ ${contribuicao}</p>`;
  });

  modal.querySelector(".close").addEventListener("click", () => {
      modal.style.display = "none";
  });
}

// Atividade 12: Calcular Juros Compostos
function executarAtividade12(modal) {
  modal.querySelector(".modal-content").innerHTML = `
      <span class="close">&times;</span>
      <p>Digite os valores para calcular os juros compostos:</p>
      <input type="number" id="capital" placeholder="Capital inicial">
      <input type="number" id="taxa" placeholder="Taxa de juros (%)">
      <input type="number" id="tempo" placeholder="Tempo (meses)">
      <button id="calcular12" class="calcular">Calcular</button>
      <div id="resultado12"></div>
  `;

  document.getElementById("calcular12").addEventListener("click", () => {
      const capital = Number(document.getElementById("capital").value);
      const taxa = Number(document.getElementById("taxa").value) / 100;
      const tempo = Number(document.getElementById("tempo").value);

      if (isNaN(capital) || isNaN(taxa) || isNaN(tempo) || capital <= 0 || taxa <= 0 || tempo <= 0) {
          document.getElementById("resultado12").innerHTML = `<p>Por favor, insira valores válidos.</p>`;
          return;
      }

      const calcularJurosCompostos = (capital, taxa, tempo) => capital * Math.pow(1 + taxa, tempo);
      const montante = calcularJurosCompostos(capital, taxa, tempo).toFixed(2);

      document.getElementById("resultado12").innerHTML = `<p>Montante final: R$ ${montante}</p>`;
  });

  modal.querySelector(".close").addEventListener("click", () => {
      modal.style.display = "none";
  });
}

// Atividade 13: Simular Financiamento
function executarAtividade13(modal) {
  modal.querySelector(".modal-content").innerHTML = `
      <span class="close">&times;</span>
      <p>Digite os valores para simular o financiamento:</p>
      <input type="number" id="valorFinanciado" placeholder="Valor financiado">
      <input type="number" id="taxaJurosFinanciamento" placeholder="Taxa de juros (%)">
      <input type="number" id="quantidadeParcelas" placeholder="Número de parcelas">
      <button id="calcular13" class="calcular">Calcular</button>
      <div id="resultado13"></div>
  `;

  document.getElementById("calcular13").addEventListener("click", () => {
      const valor = Number(document.getElementById("valorFinanciado").value);
      const taxa = Number(document.getElementById("taxaJurosFinanciamento").value) / 100;
      const parcelas = Number(document.getElementById("quantidadeParcelas").value);

      if (isNaN(valor) || isNaN(taxa) || isNaN(parcelas) || valor <= 0 || taxa <= 0 || parcelas <= 0) {
          document.getElementById("resultado13").innerHTML = `<p>Por favor, insira valores válidos.</p>`;
          return;
      }

      const calcularParcelas = (valor, taxa, parcelas) => {
          const juros = valor * taxa;
          const total = valor + juros;
          return total / parcelas;
      };

      const valorParcela = calcularParcelas(valor, taxa, parcelas).toFixed(2);
      document.getElementById("resultado13").innerHTML = `<p>Valor de cada parcela: R$ ${valorParcela}</p>`;
  });

  modal.querySelector(".close").addEventListener("click", () => {
      modal.style.display = "none";
  });
}
