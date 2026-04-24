const API_URL = 'http://localhost:3000/calculos';

// Tenta buscar os dados da API ao carregar a página
window.onload = () => {
    buscarCalculos();
};

async function calcular() {
    event.preventDefault();
    //entrada
    let n1 = parseFloat( document.getElementById('n1').value ) ;
    let n2 = parseFloat( document.getElementById("n2").value );
    let op = document.getElementById("operacao").value;//soma
    let resultado = null;
    
    if( isNaN(n1) || isNaN(n2) ){
        document.getElementById('resultado').innerText = 'Preencha todos os números!'
        return;
    }


    //processamento
    if(op == 'soma'){
        resultado = somar(n1, n2)
        resultado = resultado.toFixed(2);

    } else if(op == 'subtracao') {
        resultado = subtrair(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'multiplicacao'){
        resultado = multiplicar(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'divisao'){

        if(n2 == 0) {
            resultado = 'Não é um número';
        } else {
            resultado = dividir(n1, n2);
            resultado = resultado.toFixed(2);
        }
            
    } else {
        resultado = "Operação Inválida";
    }

    //saída
    document.getElementById('resultado').innerHTML = resultado;

    // Se o resultado for válido, envia para a API
    if (!isNaN(parseFloat(resultado))) {
        const registro = {
            n1: n1,
            n2: n2,
            operacao: op,
            resultado: resultado
        };
        
        await cadastrarNaApi(registro);
        await buscarCalculos();
    }
}

async function cadastrarNaApi(registro) {
    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registro)
        });
    } catch (error) {
        console.error("Erro ao salvar na API:", error);
    }
}

async function buscarCalculos() {
    try {
        const response = await fetch(API_URL);
        const dados = await response.json();
        renderizarCards(dados);
    } catch (error) {
        console.error("Erro ao buscar da API:", error);
    }
}

function renderizarCards(registros) {
    const section = document.getElementById('cadastro');
    section.innerHTML = '';

    registros.forEach(item => {
        const card = `
        <article class="data__card-result">
            <span><strong>Primeiro Número:</strong> ${item.n1}</span>
            <span><strong>Segundo Número:</strong> ${item.n2}</span>
            <span><strong>Operação:</strong> ${item.operacao}</span>
            <span><strong>Resultado:</strong> ${item.resultado}</span>
        </article>
        `;
        section.innerHTML += card;
    });
}

/**
 * Função somar recebe 2 valores e retorna a soma dos 
 * dois valores
 */
 function somar(valor1, valor2) {
    return valor1 + valor2;
}


function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    if(valor2 == 0) {
        return 'Não é um número';
    }
    
    return valor1 / valor2;
}


