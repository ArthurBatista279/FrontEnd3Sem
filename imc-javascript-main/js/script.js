async function calcular() {
    const Nome = document.getElementById("nome").value;
    const Altura = parseFloat(document.getElementById("altura").value);
    const Peso = parseFloat(document.getElementById("peso").value);

    if (Nome.trim().length == 0 || isNaN(Altura) || isNaN(Peso)) {
        alert("Preencha os campos: Nome, altura e peso corretamente");
        return false;
    }

    const valorIMC = calcularImc(Altura, Peso);
    const resultadoTexto = gerarTextoImc(valorIMC);

    const objIMC = {
        nome: Nome,
        altura: Altura,
        peso: Peso,
        imc: valorIMC.toFixed(2),
        situacao: resultadoTexto
    };

  
    const sucesso = await cadastrarNaApi(objIMC);

    if (sucesso) {
       
        buscarIMC();

        
        document.getElementById("nome").value = "";
        document.getElementById("altura").value = "";
        document.getElementById("peso").value = "";
        
        alert(`Os dados de ${Nome} foram cadastrados com sucesso!`);
    } else {
        alert("Não foi possível cadastrar no servidor.");
    }
}


async function cadastrarNaApi(objIMC) {
    try {
        let resposta = await fetch("http://localhost:3000/imc", {
            method: "POST",
            body: JSON.stringify(objIMC),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });
        return resposta.ok; 
    } catch (error) {
        console.error("Erro ao conectar com a API:", error);
        return false;
    }
}

async function buscarIMC() {
    try {
        const retorno = await fetch("http://localhost:3000/imc");
        const dadosRetornos = await retorno.json();
        const tabela = document.getElementById("cadastro");
        
        let template = ""; 

        for (let i = 0; i < dadosRetornos.length; i++) {
            const item = dadosRetornos[i];

            template += `
                <tr>
                    <td>${item.nome}</td>
                    <td>${item.altura}m</td>
                    <td>${item.peso}kg</td>
                    <td>${item.imc}</td>
                    <td>${item.situacao}</td>
                    <td>
                        <button onclick="apagarIMC('${item.id}')" style="color: red;">Apagar</button>
                    </td>
                </tr>
            `;
        }

        tabela.innerHTML = template;
        console.log("Tabela atualizada!");

    } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
    }
}


async function apagarIMC(id) {
    if (confirm("Tem certeza que deseja excluir?")) {
        try {
            await fetch(`http://localhost:3000/imc/${id}`, {
                method: "DELETE"
            });
            buscarIMC(); 
        } catch (error) {
            console.log("Erro ao apagar:", error);
        }
    }
}

function calcularImc(altura, peso) {
    return peso / (altura * altura);
}

function gerarTextoImc(IMC) {
    if (IMC < 18.5) return "Magreza";
    else if (IMC < 25) return "Saudável";
    else if (IMC < 30) return "Sobrepeso";
    else return "Obesidade";
}

buscarIMC();