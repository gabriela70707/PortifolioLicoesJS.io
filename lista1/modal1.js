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

// Fechar o modal quando clicar fora do mesmo
window.addEventListener("click", (evento) => {
    modais.forEach(modal => {
        if (evento.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Atividade 1: Diferença entre dois números
function executarAtividade1(modal) {
    modal.querySelector(".modal-content").innerHTML = `
        <span class="close">&times;</span>
        <p>Digite dois números para calcular a diferença:</p>
        <input type="number" id="numero1" placeholder="Número 1">
        <input type="number" id="numero2" placeholder="Número 2">
        <button id="calcular1" class="calcular">Calcular</button>
        <div id="resultado1"></div>
    `;

    document.getElementById("calcular1").addEventListener("click", () => {
        const numero1 = Number(document.getElementById("numero1").value);
        const numero2 = Number(document.getElementById("numero2").value);
        const diferenca = numero1 - numero2;
        document.getElementById("resultado1").innerHTML = `<p>A diferença é: ${diferenca}</p>`;
    });
}

// Atividade 2: Verificar se um número é par ou ímpar
function executarAtividade2(modal) {
    modal.querySelector(".modal-content").innerHTML = `
        <span class="close">&times;</span>
        <p>Digite um número para verificar se é par:</p>
        <input type="number" id="numeroPar" placeholder="Número">
        <button id="calcular2" class="calcular">Verificar</button>
        <div id="resultado2"></div>
    `;

    document.getElementById("calcular2").addEventListener("click", () => {
        const numero = Number(document.getElementById("numeroPar").value);
        const resultado = numero % 2 === 0
            ? `<p>O número ${numero} é par.</p>`
            : `<p>O número ${numero} é ímpar.</p>`;
        document.getElementById("resultado2").innerHTML = resultado;
    });
}


// Atividade 3: Verificar se uma nota é múltipla da outra
function executarAtividade3(modal) {
    modal.querySelector(".modal-content").innerHTML = `
        <span class="close">&times;</span>
        <p>Digite duas notas para verificar se a primeira é múltipla da segunda:</p>
        <input type="number" id="nota1" placeholder="Primeira nota">
        <input type="number" id="nota2" placeholder="Segunda nota">
        <button id="verificarMultipla" class="calcular">Verificar</button>
        <div id="resultado3"></div>
    `;

    document.getElementById("verificarMultipla").addEventListener("click", () => {
        const nota1 = Number(document.getElementById("nota1").value);
        const nota2 = Number(document.getElementById("nota2").value);

        if (isNaN(nota1) || isNaN(nota2) || nota2 === 0) {
            document.getElementById("resultado3").innerHTML = `<p>Por favor, insira valores válidos e certifique-se de que a segunda nota não seja zero.</p>`;
            return;
        }

        const resultado = nota1 % nota2 === 0
            ? `<p>A primeira nota (${nota1}) é divisível pela segunda (${nota2}).</p>`
            : `<p>A primeira nota (${nota1}) não é divisível pela segunda (${nota2}).</p>`;
        document.getElementById("resultado3").innerHTML = resultado;
    });

    const botaoFechar = modal.querySelector(".close");
    botaoFechar.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// Atividade 4: Converter Celsius para Fahrenheit
function executarAtividade4(modal) {
    modal.querySelector(".modal-content").innerHTML = `
        <span class="close">&times;</span>
        <p>Digite a temperatura em Celsius para converter em Fahrenheit:</p>
        <input type="number" id="celsius" placeholder="Temperatura (°C)">
        <button id="converterTemperatura" class="calcular">Converter</button>
        <div id="resultado4"></div>
    `;

    document.getElementById("converterTemperatura").addEventListener("click", () => {
        const celsius = Number(document.getElementById("celsius").value);

        if (isNaN(celsius)) {
            document.getElementById("resultado4").innerHTML = `<p>Por favor, insira um valor válido para a temperatura.</p>`;
            return;
        }

        const fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById("resultado4").innerHTML = `<p>A temperatura convertida é ${fahrenheit.toFixed(2)} °F.</p>`;
    });

    const botaoFechar = modal.querySelector(".close");
    botaoFechar.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// Atividade 5: Cálculo de área
function executarAtividade5(modal) {
    modal.querySelector(".modal-content").innerHTML = `
        <span class="close">&times;</span>
        <p>Digite os valores para calcular a área:</p>
        <input type="number" id="altura" placeholder="Altura">
        <input type="number" id="base" placeholder="Base">
        <button id="calcular5" class="calcular">Calcular</button>
        <div id="resultado5"></div>
    `;

   
    document.getElementById("calcular5").addEventListener("click", () => {
        const altura = Number(document.getElementById("altura").value);
        const base = Number(document.getElementById("base").value);

      
        if (isNaN(altura) || isNaN(base) || altura <= 0 || base <= 0) {
            document.getElementById("resultado5").innerHTML = `<p>Por favor, insira valores válidos para altura e base!</p>`;
            return;
        }


        const area = base * altura;
        document.getElementById("resultado5").innerHTML = `<p>A área é: ${area}</p>`;
    });


    const botaoFechar = modal.querySelector(".close");
    botaoFechar.addEventListener("click", () => {
        modal.style.display = "none";
    });
}


// Atividade 6: Verificar se notas estão acima da média e se são pares
function executarAtividade6(modal) {
    modal.querySelector(".modal-content").innerHTML = `
        <span class="close">&times;</span>
        <p>Digite duas notas para verificar:</p>
        <input type="number" id="nota1" placeholder="Nota 1">
        <input type="number" id="nota2" placeholder="Nota 2">
        <button id="verificarNotas" class="calcular">Verificar</button>
        <div id="resultado6"></div>
    `;

    document.getElementById("verificarNotas").addEventListener("click", () => {
        const nota1 = Number(document.getElementById("nota1").value);
        const nota2 = Number(document.getElementById("nota2").value);

        if (isNaN(nota1) || isNaN(nota2)) {
            document.getElementById("resultado6").innerHTML = `<p>Por favor, insira valores válidos para as notas.</p>`;
            return;
        }

        const media = 6;
        let resultado = "";

        // Verificar se as notas estão acima da média
        const verificarMedia = (nota) => {
            return nota > media
                ? `<p>A nota ${nota} está acima da média (${media}).</p>`
                : `<p>A nota ${nota} não está acima da média (${media}).</p>`;
        };

        // Verificar se as notas são pares
        const verificarPar = (nota) => {
            return nota % 2 === 0
                ? `<p>A nota ${nota} é par.</p>`
                : `<p>A nota ${nota} é ímpar.</p>`;
        };

        resultado += verificarMedia(nota1);
        resultado += verificarPar(nota1);
        resultado += verificarMedia(nota2);
        resultado += verificarPar(nota2);

        document.getElementById("resultado6").innerHTML = resultado;
    });

    const botaoFechar = modal.querySelector(".close");
    botaoFechar.addEventListener("click", () => {
        modal.style.display = "none";
    });
}


// Atividade 7: Calcular IMC
function executarAtividade7(modal) {
    modal.querySelector(".modal-content").innerHTML = `
        <span class="close">&times;</span>
        <p>Calcule o seu IMC:</p>
        <input type="number" id="peso" placeholder="Peso (kg)">
        <input type="number" id="altura" placeholder="Altura (m)">
        <button id="calcular7" class="calcular">Calcular IMC</button>
        <div id="resultado7"></div>
    `;

    document.getElementById("calcular7").addEventListener("click", () => {
        const peso = Number(document.getElementById("peso").value);
        const altura = Number(document.getElementById("altura").value);

        if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
            document.getElementById("resultado7").innerHTML = `<p>Por favor, insira valores válidos para peso e altura!</p>`;
            return;
        }

        const imc = (peso / (altura * altura)).toFixed(2);
        let classificacao = "";

        if (imc <= 18.5) classificacao = "Abaixo do normal";
        else if (imc >= 18.6 && imc <= 24.9) classificacao = "Normal";
        else if (imc >= 25 && imc <= 29.9) classificacao = "Sobrepeso";
        else classificacao = "Obesidade";

        document.getElementById("resultado7").innerHTML = `<p>IMC: ${imc} (${classificacao})</p>`;
    });

    const botaoFechar = modal.querySelector(".close");
    botaoFechar.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// Atividade 8: Verificar se um ano é bissexto
function executarAtividade8(modal) {
    modal.querySelector(".modal-content").innerHTML = `
        <span class="close">&times;</span>
        <p>Verifique se um ano é bissexto:</p>
        <input type="number" id="ano" placeholder="Digite o ano">
        <button id="calcular8" class="calcular">Verificar</button>
        <div id="resultado8"></div>
    `;

    document.getElementById("calcular8").addEventListener("click", () => {
        const ano = Number(document.getElementById("ano").value);

        if (isNaN(ano) || ano <= 0) {
            document.getElementById("resultado8").innerHTML = `<p>Por favor, insira um ano válido!</p>`;
            return;
        }

        const bissexto = (ano % 4 === 0 && ano % 400 === 0);
        const resultado = bissexto
            ? `<p>O ano ${ano} é Bissexto!</p>`
            : `<p>O ano ${ano} não é Bissexto!</p>`;
        document.getElementById("resultado8").innerHTML = resultado;
    });

    const botaoFechar = modal.querySelector(".close");
    botaoFechar.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// Atividade 9: Conversão de taxa de câmbio
function executarAtividade9(modal) {
    modal.querySelector(".modal-content").innerHTML = `
        <span class="close">&times;</span>
        <p>Converter valor com taxa de câmbio:</p>
        <input type="number" id="taxaCambio" placeholder="Taxa de câmbio">
        <input type="number" id="valor" placeholder="Valor a converter">
        <button id="calcular9" class="calcular">Converter</button>
        <div id="resultado9"></div>
    `;

    document.getElementById("calcular9").addEventListener("click", () => {
        const taxa = Number(document.getElementById("taxaCambio").value);
        const valor = Number(document.getElementById("valor").value);

        if (taxa <= 0 || valor <= 0 || isNaN(taxa) || isNaN(valor)) {
            document.getElementById("resultado9").innerHTML = `<p>Por favor, insira valores válidos!</p>`;
            return;
        }

        const convertido = (taxa * valor).toFixed(2);
        document.getElementById("resultado9").innerHTML = `<p>O valor convertido é: ${convertido}</p>`;
    });

    const botaoFechar = modal.querySelector(".close");
    botaoFechar.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// Atividade 10: Tabuada de um número
function executarAtividade10(modal) {
    modal.querySelector(".modal-content").innerHTML = `
        <span class="close">&times;</span>
        <p>Digite um número para exibir a tabuada:</p>
        <input type="number" id="numero" placeholder="Número de 1 a 9">
        <button id="calcular10" class="calcular">Exibir Tabuada</button>
        <div id="resultado10"></div>
    `;

    document.getElementById("calcular10").addEventListener("click", () => {
        const numero = Number(document.getElementById("numero").value);

        if (numero < 1 || numero > 9 || isNaN(numero)) {
            document.getElementById("resultado10").innerHTML = `<p>Por favor, insira um número entre 1 e 9!</p>`;
            return;
        }

        let tabuada = "<p>Tabuada:</p>";
        for (let i = 0; i <= 10; i++) {
            tabuada += `<p>${numero} x ${i} = ${numero * i}</p>`;
        }
        document.getElementById("resultado10").innerHTML = tabuada;
    });

    const botaoFechar = modal.querySelector(".close");
    botaoFechar.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// Atividade 11: Jogo de pedra, papel e tesoura
function executarAtividade11(modal) {
    modal.querySelector(".modal-content").innerHTML = `
        <span class="close">&times;</span>
        <p>Jogo de Pedra, Papel e Tesoura:</p>
        <select id="jogadaUsuario">
            <option value="1">Papel</option>
            <option value="2">Tesoura</option>
            <option value="3">Pedra</option>
        </select>
        <button id="jogar11" class="calcular">Jogar</button>
        <div id="resultado11"></div>
    `;

    document.getElementById("jogar11").addEventListener("click", () => {
        const jogadaUsuario = Number(document.getElementById("jogadaUsuario").value);
        const cpu = ["pedra", "papel", "tesoura"];
        const sorte = Math.floor(Math.random() * cpu.length);
        const jogadaCPU = cpu[sorte];
        let resultado = "";

        switch (jogadaUsuario) {
            case 1:
                resultado = jogadaCPU === "papel" ? "Empate!!" : jogadaCPU === "pedra" ? "Você venceu!!" : "O CPU venceu!!";
                break;
            case 2:
                resultado = jogadaCPU === "tesoura" ? "Empate!!" : jogadaCPU === "papel" ? "Você venceu!!" : "O CPU venceu!!";
                break;
            case 3:
                resultado = jogadaCPU === "pedra" ? "Empate!!" : jogadaCPU === "tesoura" ? "Você venceu!!" : "O CPU venceu!!";
                break;
            default:
                resultado = "Opção inválida!";
        }

        document.getElementById("resultado11").innerHTML = `
            <p>Jogada do CPU: ${jogadaCPU}</p>
            <p>${resultado}</p>
        `;
    });

    const botaoFechar = modal.querySelector(".close");
    botaoFechar.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// Atividade 12: Cálculo de fatorial
function executarAtividade12(modal) {
    modal.querySelector(".modal-content").innerHTML = `
        <span class="close">&times;</span>
        <p>Digite um número para calcular o fatorial:</p>
        <input type="number" id="numeroFatorial" placeholder="Número">
        <button id="calcular12" class="calcular">Calcular Fatorial</button>
        <div id="resultado12"></div>
    `;

    document.getElementById("calcular12").addEventListener("click", () => {
        const numero = Number(document.getElementById("numeroFatorial").value);

        if (isNaN(numero) || numero < 0) {
            document.getElementById("resultado12").innerHTML = `<p>Por favor, insira um número válido!</p>`;
            return;
        }

        function fatorial(n) {
            return n === 0 ? 1 : n * fatorial(n - 1);
        }

        const resultadoFatorial = fatorial(numero);
        document.getElementById("resultado12").innerHTML = `<p>O fatorial de ${numero} é: ${resultadoFatorial}</p>`;
    });

    const botaoFechar = modal.querySelector(".close");
    botaoFechar.addEventListener("click", () => {
        modal.style.display = "none";
    });
}
