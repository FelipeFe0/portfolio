document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('envio');
  const resposta = document.getElementById('resposta');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagemTexto = document.getElementById('mensagem').value.trim();

    if (nome === '' || email === '' || mensagemTexto === '') {
      resposta.textContent = 'Por favor, preencha todos os campos.';
      resposta.style.color = 'red';
    } else {
      emailjs.send("service_v7kzksk", "template_q57nipa", {
        nome: nome,
        email: email,
        mensagem: mensagemTexto
      }).then(function () {
        resposta.textContent = 'Mensagem enviada com sucesso!';
        resposta.style.color = 'green';
        form.reset();
      }, function (error) {
        resposta.textContent = 'Erro ao enviar. Tente novamente.';
        resposta.style.color = 'red';
        console.error(error);
      });
    }
  });
});
