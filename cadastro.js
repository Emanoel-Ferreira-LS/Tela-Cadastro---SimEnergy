const checkbox = document.getElementById('show-password');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorDiv = document.getElementById('passwords-error');

checkbox.addEventListener('change', () => {
	if (checkbox.checked) {
		passwordInput.setAttribute('data-show-password', true);
		passwordInput.setAttribute('type', 'text');
		confirmPasswordInput.setAttribute('data-show-password', true);
		confirmPasswordInput.setAttribute('type', 'text');
	} else {
		passwordInput.removeAttribute('data-show-password');
		passwordInput.setAttribute('type', 'password');
		confirmPasswordInput.removeAttribute('data-show-password');
		confirmPasswordInput.setAttribute('type', 'password');
	}
});

confirmPasswordInput.addEventListener('input', () => {
	if (passwordInput.value !== confirmPasswordInput.value) {
		errorDiv.innerText = 'As senhas não correspondem.';
	} else {
		errorDiv.innerText = '';
	}
});























































/*const mostrarSenhaCheckbox = document.getElementById('show-password');
const senhaInput = document.getElementById('password');
const confirmacaoInput = document.getElementById('confirm-password');

mostrarSenhaCheckbox.addEventListener( 'change', () =>{
  if (mostrarSenhaCheckbox.checked) {
    senhaInput.setAttribute('data-show-password',true);
    senhaInput.setAttribute('type','text');
    confirmacaoInput.setAttribute('data-show-password',true);
    confirmacaoInput.setAttribute('type','text');
  } else {
    senhaInput.removeAttribute('data-show-password');
    senhaInput.setAttribute('type','password');
    confirmacaoInput.removeAttribute('data-show-password');
    confirmacaoInput.setAttribute('type','password');
  }
});*/





