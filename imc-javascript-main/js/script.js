const API_URL = 'http://localhost:3000/imc';

const form = document.getElementById('imc-form');
const nomeInput = document.getElementById('nome');
const alturaInput = document.getElementById('altura');
const pesoInput = document.getElementById('peso');
const mensagem = document.getElementById('mensagem');
const tabela = document.getElementById('cadastro');
const imcValor = document.getElementById('imc-valor');
const imcSituacao = document.getElementById('imc-situacao');

form.addEventListener('submit', onSubmit);
form.addEventListener('reset', onReset);
tabela.addEventListener('click', onTableClick);

void buscarIMC();

async function onSubmit(event) {
  event.preventDefault();

  const dados = obterDadosFormulario();
  const erro = validarFormulario(dados);

  if (erro) {
    mostrarMensagem(erro, 'error');
    return;
  }

  const imc = calcularIMC(dados.altura, dados.peso);
  const situacao = classificarIMC(imc);
  const registro = {
    nome: dados.nome,
    altura: Number(dados.altura.toFixed(2)),
    peso: Number(dados.peso.toFixed(1)),
    imc: Number(imc.toFixed(2)),
    situacao,
  };

  atualizarResultado(registro.imc, situacao);

  const salvo = await cadastrarNaApi(registro);

  if (!salvo.ok) {
    mostrarMensagem(salvo.message, 'error');
    return;
  }

  mostrarMensagem('IMC calculado e cadastrado com sucesso.', 'success');
  limparCampos();
  nomeInput.focus();
  await buscarIMC();
}

function onReset() {
  requestAnimationFrame(() => {
    limparMensagem();
    resetarResultado();
  });
}

async function onTableClick(event) {
  const botao = event.target.closest('[data-delete-id]');

  if (!botao) {
    return;
  }

  const { deleteId } = botao.dataset;
  const confirmou = window.confirm('Deseja realmente excluir este cadastro?');

  if (!confirmou) {
    return;
  }

  try {
    const response = await fetch(`${API_URL}/${deleteId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Falha ao excluir registro.');
    }

    mostrarMensagem('Cadastro removido com sucesso.', 'success');
    await buscarIMC();
  } catch (error) {
    mostrarMensagem(
      'Nao foi possivel excluir. Confira se o json-server esta em execucao.',
      'error'
    );
  }
}

function obterDadosFormulario() {
  return {
    nome: nomeInput.value.trim(),
    altura: parseDecimal(alturaInput.value),
    peso: parseDecimal(pesoInput.value),
  };
}

function validarFormulario({ nome, altura, peso }) {
  if (!nome) {
    return 'Informe o nome do aluno.';
  }

  if (nome.length < 3) {
    return 'Digite um nome com pelo menos 3 caracteres.';
  }

  if (Number.isNaN(altura) || altura <= 0) {
    return 'Informe uma altura valida em metros.';
  }

  if (altura < 0.5 || altura > 2.8) {
    return 'A altura deve estar entre 0,50m e 2,80m.';
  }

  if (Number.isNaN(peso) || peso <= 0) {
    return 'Informe um peso valido em quilos.';
  }

  if (peso < 10 || peso > 500) {
    return 'O peso deve estar entre 10kg e 500kg.';
  }

  return '';
}

function parseDecimal(value) {
  return Number(String(value).replace(',', '.'));
}

function calcularIMC(altura, peso) {
  return peso / (altura * altura);
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return 'Magreza';
  }

  if (imc < 25) {
    return 'Peso adequado';
  }

  if (imc < 30) {
    return 'Sobrepeso';
  }

  if (imc < 35) {
    return 'Obesidade grau I';
  }

  if (imc < 40) {
    return 'Obesidade grau II';
  }

  return 'Obesidade grau III';
}

function atualizarResultado(imc, situacao) {
  imcValor.textContent = formatarNumero(imc, 2);
  imcSituacao.textContent = situacao;
}

function resetarResultado() {
  imcValor.textContent = '--';
  imcSituacao.textContent = 'Preencha os dados para calcular.';
}

function mostrarMensagem(texto, tipo) {
  mensagem.textContent = texto;
  mensagem.className = `form-message form-message--${tipo}`;
}

function limparMensagem() {
  mensagem.textContent = '';
  mensagem.className = 'form-message';
}

function limparCampos() {
  nomeInput.value = '';
  alturaInput.value = '';
  pesoInput.value = '';
}

async function cadastrarNaApi(registro) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(registro),
    });

    if (!response.ok) {
      throw new Error('Erro ao salvar cadastro.');
    }

    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      message:
        'O IMC foi calculado, mas nao foi possivel salvar na API. Inicie o json-server em http://localhost:3000.',
    };
  }
}

async function buscarIMC() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Falha ao buscar registros.');
    }

    const dados = await response.json();
    renderizarTabela(dados);
  } catch (error) {
    tabela.innerHTML = `
      <tr>
        <td colspan="6" class="empty-row">Nao foi possivel carregar os dados. Verifique o json-server.</td>
      </tr>
    `;
  }
}

function renderizarTabela(registros) {
  if (!Array.isArray(registros) || registros.length === 0) {
    tabela.innerHTML = `
      <tr>
        <td colspan="6" class="empty-row">Nenhum registro encontrado.</td>
      </tr>
    `;
    return;
  }

  tabela.innerHTML = registros
    .map((item) => {
      return `
        <tr>
          <td>${escapeHtml(item.nome)}</td>
          <td>${formatarNumero(Number(item.altura), 2)} m</td>
          <td>${formatarNumero(Number(item.peso), 1)} kg</td>
          <td>${formatarNumero(Number(item.imc), 2)}</td>
          <td>${escapeHtml(item.situacao)}</td>
          <td>
            <button class="row-action" type="button" data-delete-id="${item.id}">Excluir</button>
          </td>
        </tr>
      `;
    })
    .join('');
}

function formatarNumero(valor, casasDecimais) {
  if (Number.isNaN(valor)) {
    return '--';
  }

  return valor.toLocaleString('pt-BR', {
    minimumFractionDigits: casasDecimais,
    maximumFractionDigits: casasDecimais,
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
