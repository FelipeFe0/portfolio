document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('envio');
  const mensagem = document.getElementById('mensagem');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagemTexto = document.getElementById('mensagem').value.trim();

    if (nome === '' || email === '' || mensagemTexto === '') {
      mensagem.textContent = 'Por favor, preencha todos os campos.';
      mensagem.style.color = 'red';
    } else {
      emailjs.send("service_v7kzksk", "__ejs-test-mail-service__", {
        nome: nome,
        email: email,
        mensagem: mensagemTexto
      }).then(function(response) {
        mensagem.textContent = 'Mensagem enviada com sucesso!';
        mensagem.style.color = 'green';
        form.reset(); 
      }, function(error) {
        mensagem.textContent = 'Erro ao enviar. Tente novamente.';
        mensagem.style.color = 'red';
        console.log(error);
      });
    }
  });
});