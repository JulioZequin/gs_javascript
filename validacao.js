 // Lista global de usuários
 let users = [];

 // Função para cadastrar um novo usuário
 function cadastrar() {
     let email = document.getElementById('cad-email').value;
     let confirmEmail = document.getElementById('cad-confirm-email').value;
     let password = document.getElementById('cad-password').value;
     let confirmPassword = document.getElementById('cad-confirm-password').value;

     if (email === confirmEmail && password === confirmPassword) {
         users.push({ email: email, password: password });
         alert('Cadastro realizado com sucesso!');
         document.getElementById('cadastro-form').reset();
         toggleForms(); // Alterna para o formulário de login
     } else {
         alert('Os campos de confirmação não coincidem.');
     }
 }

 // Função para verificar o login
 function login() {
     let email = document.getElementById('login-email').value;
     let password = document.getElementById('login-password').value;
     let validUser = users.find(user => user.email === email && user.password === password);

     if (validUser) {
         alert('Sucesso!');
         location.href = "index.html"; // Redireciona para a página principal
     } else {
         alert('Usuário ou senha incorretos');
         document.getElementById('login-form').reset();
     }
 }

 // Função para alternar entre os formulários
 function toggleForms() {
     document.getElementById('cadastro-container').classList.toggle('hidden');
     document.getElementById('login-container').classList.toggle('hidden');
 }

