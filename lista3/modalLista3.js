// Selecione todos os botões de abrir modal
const openModalButtons = document.querySelectorAll(".openModal");
const closeButtons = document.querySelectorAll(".close");
const modals = document.querySelectorAll(".modal");

// Adiciona evento aos botões de abrir modal
openModalButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal"); // Identifica o modal
    const modal = document.getElementById(modalId);
    modal.style.display = "block";

    // Chama a função correspondente dinamicamente
    const atividadeFunctionName = `executarAtividade${modalId.replace("modal", "")}`;
    if (typeof window[atividadeFunctionName] === "function") {
      window[atividadeFunctionName](); // Executa a função se existir
    }
  });
});

// Adiciona evento aos botões de fechar modal
closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    modal.style.display = "none";
  });
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

//Resultados das atividades

// Atividade 1
function executarAtividade1() {
  const vetorInteiros = [1, 2, 3, 4, 5];
  const dobroLista = vetorInteiros.map(n => n * 2);

  const resultadoAtividade1 = `
      <p>Lista original: ${vetorInteiros.join(", ")}</p>
      <p>Dobro da Lista: ${dobroLista.join(", ")}</p>
  `;
  document.getElementById('resultadoAtividade1').innerHTML = resultadoAtividade1;
}

// Atividade 2
function executarAtividade2() {
  const vetorInteros = [1, 2, 3, 4, 5, 6, 7, 8];
  const soma = vetorInteros.reduce((acc, curr) => acc + curr, 0); 
  const media = soma / vetorInteros.length;

  const resultadoAtividade2 = `
      <p>Essa é a média: ${media}</p>
  `;
  document.getElementById('resultadoAtividade2').innerHTML = resultadoAtividade2;
}


function executarAtividade3() {
  const inputsContainer = document.getElementById('inputs');

  inputsContainer.innerHTML = ''; 
  for (let i = 1; i <= 20; i++) {
      const input = document.createElement('input');
      input.type = 'number';
      input.className = 'numero';
      input.placeholder = `Idade ${i}`;
      input.required = true; // Define o campo como obrigatório
      inputsContainer.appendChild(input);
  }


  document.getElementById('calcular').addEventListener('click', () => {
      const inputs = document.querySelectorAll('.numero');
      const idades = Array.from(inputs).map(input => Number(input.value));


      if (idades.some(isNaN)) {
          alert("Por favor, preencha todas as idades!");
          return;
      }

      // Calcula a soma de todas as idades no array "idades"
      // O método reduce percorre cada elemento do array, acumulando o valor total.
      // - "acc" é o acumulador, que começa como 0 (valor inicial definido no final da linha).
      // - "curr" é o valor atual do elemento do array sendo processado.
      const soma = idades.reduce((acc, curr) => acc + curr, 0); 

      // Calcula a média das idades.
      // A média é obtida dividindo a soma total pelo número de elementos no array.
      // O ".length" retorna a quantidade de elementos no array "idades".
      const media = soma / idades.length;

      // Cria um novo array chamado "idadeAcimaMedia" contendo apenas as idades que são maiores que a média.
      // O método filter percorre cada elemento de "idades", verificando se atende à condição: idade > média.
      // Se a condição for verdadeira, o elemento é adicionado ao novo array "idadeAcimaMedia".
      const idadeAcimaMedia = idades.filter(idade => idade > media);
l
      const resultadoAtividade3 = `
          <p><strong>Média:</strong> ${media.toFixed(2)}</p>
          <p><strong>Idades acima da média:</strong> ${idadeAcimaMedia.join(", ") || "Nenhuma"}</p>
      `;
      document.getElementById('resultadoAtividade3').innerHTML = resultadoAtividade3;

      inputs.forEach(input => {
          input.value = ""; 
      });
  });
}


function executarAtividade4() {
  const inputsContainer = document.getElementById('inputs-numeros');
  const resultadoContainer = document.getElementById('resultadoAtividade4');

  inputsContainer.innerHTML = ''; 
  for (let i = 1; i <= 10; i++) {
      const input = document.createElement('input');
      input.type = 'number';
      input.className = 'numero';
      input.placeholder = `Número ${i}`;
      input.required = true;
      inputsContainer.appendChild(input);
  }


  document.getElementById('calcularPares').addEventListener('click', () => {
      const inputs = document.querySelectorAll('#inputs-numeros .numero');
      const numeros = Array.from(inputs).map(input => Number(input.value));

      if (numeros.some(isNaN)) {
          alert("Por favor, preencha todos os campos com números válidos!");
          return;
      }

      // Filtrar os números pares
      const numerosPares = numeros.filter(numero => numero % 2 === 0);


      if (numerosPares.length === 0) {
          resultadoContainer.innerHTML = `<p>Não há números pares.</p>`;
      } else {
          resultadoContainer.innerHTML = `<p><strong>Números inseridos que são pares:</strong> ${numerosPares.join(", ")}</p>`;
      }

      inputs.forEach(input => {
          input.value = "";
      });
  });
}


//Atividade 5
function executarAtividade5() {
  const inputsContainer = document.getElementById('inputs-numeros-5');
  const resultadoContainer = document.getElementById('resultadoAtividade5');
  inputsContainer.innerHTML = ''; 


  for (let i = 1; i <= 8; i++) {
      const input = document.createElement('input');
      input.type = 'number';
      input.className = 'numero';
      input.placeholder = `Número ${i}`;
      input.required = true;
      inputsContainer.appendChild(input);
  }


  document.getElementById('validarNumeros').addEventListener('click', () => {
      const inputs = document.querySelectorAll('#inputs-numeros-5 .numero');
      const ArrayNumeros = [];
      let numerosInvalidos = false;

      inputs.forEach(input => {
          const numero = Number(input.value);


          if (numero >= 100 && numero <= 200) {
              ArrayNumeros.push(numero);
          } else {
              numerosInvalidos = true; 
          }
      });

      
      if (numerosInvalidos || ArrayNumeros.length < 8) {
          resultadoContainer.innerHTML = `<p><strong>Por favor, insira 8 números válidos (entre 100 e 200).</strong></p>`;
      } else {
          resultadoContainer.innerHTML = `<p><strong>Números Digitados:</strong> ${ArrayNumeros.join(", ")}</p>`;
      }

      
      inputs.forEach(input => {
          input.value = ""; 
      });
  });
}



//Atividade 6

function executarAtividade6() {
  const nomes = ["Gabriela", "Geovanna", "Joyce", "Thifs", "Nico", "Ariane", "Joao", "Gabriel", "Ana", "Fernanda"];
  const inputNome = document.getElementById('inputNome');
  const resultadoContainer = document.getElementById('resultadoAtividade6');

  document.getElementById('verificarNome').addEventListener('click', () => {
      const nomeUsuario = inputNome.value.trim(); 
      let encontrado = false;


      for (let i = 0; i < nomes.length; i++) {
          if (nomes[i].toLowerCase() === nomeUsuario.toLowerCase()) {
              resultadoContainer.innerHTML = `<p>O nome <strong>${nomeUsuario}</strong> está na lista, na posição ${i + 1}.</p>`;
              encontrado = true;
              break;
          }
      }


      if (!encontrado) {
          resultadoContainer.innerHTML = `<p>O nome <strong>${nomeUsuario}</strong> não foi encontrado na lista.</p>`;
      }

 
      inputNome.value = '';
  });
}


//Atividade 7
function executarAtividade7() {
  const nomes = ["Gabriela", "Geovanna", "Joyce", "Thifs", "Nico", "Ariane", "Joao", "Gabriel", "Ana", "Fernanda"];
  const inputNome = document.getElementById('inputNome7');
  const resultadoContainer = document.getElementById('resultadoAtividade7');
  const feedbackContainer = document.getElementById('tentativaFeedback');
  let tentativas = 0;
  let encontrado = false;


  document.getElementById('verificarTentativa').addEventListener('click', () => {
      if (tentativas >= 5 || encontrado) {
          feedbackContainer.innerHTML = "<p>O jogo terminou. Reinicie o modal para tentar novamente!</p>";
          return;
      }

      const nomeUsuario = inputNome.value.trim(); // Captura o valor do input, removendo espaços
      tentativas++;

      for (let i = 0; i < nomes.length; i++) {
          if (nomes[i].toLowerCase() === nomeUsuario.toLowerCase()) {
              resultadoContainer.innerHTML = `<p>O nome <strong>${nomeUsuario}</strong> está na lista na posição ${i + 1}. Você acertou na tentativa ${tentativas}!</p>`;
              encontrado = true;
              break;
          }
      }


      if (!encontrado) {
          feedbackContainer.innerHTML = `<p>Você errou na tentativa ${tentativas}. Restam ${5 - tentativas} tentativas.</p>`;
      }


      if (tentativas === 5 && !encontrado) {
          resultadoContainer.innerHTML = `<p>O nome <strong>${nomeUsuario}</strong> não foi encontrado na lista. Fim das tentativas!</p>`;
      }


      inputNome.value = '';
  });
}


//Atividade 8
function executarAtividade8() {
  const inputsContainer = document.getElementById('inputs-numeros-8');
  const resultadoContainer = document.getElementById('resultadoAtividade8');


  inputsContainer.innerHTML = ''; 
  for (let i = 1; i <= 6; i++) {
      const input = document.createElement('input');
      input.type = 'number';
      input.className = 'numero';
      input.placeholder = `Número ${i}`;
      input.required = true;
      inputsContainer.appendChild(input);
  }


  document.getElementById('calcularVetores').addEventListener('click', () => {
      const inputs = document.querySelectorAll('#inputs-numeros-8 .numero');
      const A = [];
      

      inputs.forEach(input => {
          const numero = parseInt(input.value, 10);
          if (!isNaN(numero)) {
              A.push(numero);
          }
      });

      if (A.length < 6) {
          resultadoContainer.innerHTML = `<p>Por favor, insira 6 números válidos.</p>`;
          return;
      }

  
      const B = A.map(numero => numero / 2);


      resultadoContainer.innerHTML = `
          <p><strong>Vetor A:</strong> [${A.join(", ")}]</p>
          <p><strong>Vetor B:</strong> [${B.join(", ")}]</p>
      `;


      inputs.forEach(input => {
          input.value = "";
      });
  });
}

//Atividade 9
function executarAtividade9() {
  const inputsContainerA = document.getElementById('inputs-vetor-A');
  const inputsContainerB = document.getElementById('inputs-vetor-B');
  const resultadoContainer = document.getElementById('resultadoAtividade9');

  inputsContainerA.innerHTML = '';
  inputsContainerB.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
      const inputA = document.createElement('input');
      inputA.type = 'number';
      inputA.className = 'numeroA';
      inputA.placeholder = `Número ${i}`;
      inputA.required = true;
      inputsContainerA.appendChild(inputA);

      const inputB = document.createElement('input');
      inputB.type = 'number';
      inputB.className = 'numeroB';
      inputB.placeholder = `Número ${i}`;
      inputB.required = true;
      inputsContainerB.appendChild(inputB);
  }


  document.getElementById('calcularVetores9').addEventListener('click', () => {
      const inputsA = document.querySelectorAll('.numeroA');
      const inputsB = document.querySelectorAll('.numeroB');
      const A = [];
      const B = [];
      const C = [];


      inputsA.forEach(input => {
          const numero = parseInt(input.value, 10);
          if (!isNaN(numero)) {
              A.push(numero);
          }
      });


      inputsB.forEach(input => {
          const numero = parseInt(input.value, 10);
          if (!isNaN(numero)) {
              B.push(numero);
          }
      });

 
      if (A.length < 5 || B.length < 5) {
          resultadoContainer.innerHTML = `<p>Por favor, preencha todos os 5 números para os vetores A e B.</p>`;
          return;
      }

 
      for (let i = 0; i < 5; i++) {
          C.push(A[i]);
          C.push(B[i]);
      }

  
      resultadoContainer.innerHTML = `
          <p><strong>Vetor A:</strong> [${A.join(", ")}]</p>
          <p><strong>Vetor B:</strong> [${B.join(", ")}]</p>
          <p><strong>Vetor C (alternado):</strong> [${C.join(", ")}]</p>
      `;

      inputsA.forEach(input => {
          input.value = '';
      });
      inputsB.forEach(input => {
          input.value = '';
      });
  });
}

