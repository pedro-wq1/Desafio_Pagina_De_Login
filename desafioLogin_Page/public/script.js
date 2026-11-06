const form = document.getElementById('form-login');
const msg = document.getElementById('msg');
const resultado = document.getElementById('resultado');
const campoToken = document.getElementById('token');
const btn = document.getElementById('btn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    msg.textContent = '';
    msg.className = '';
    resultado.classList.add('oculto');
    btn.disabled = true;
    btn.textContent = 'Entrando...';

    try {
        const resposta = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha })
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            throw new Error(dados.mensagem);
        }

        sessionStorage.setItem('access_token', dados.access_token);

        msg.textContent = dados.mensagem;
        msg.className = 'ok';
        campoToken.value = dados.access_token;
        resultado.classList.remove('oculto');
    } catch (erro) {
        msg.textContent = erro.message || 'Erro ao conectar com a API.';
        msg.className = 'erro';
    } finally {
        btn.disabled = false;
        btn.textContent = 'Entrar';
    }
});
