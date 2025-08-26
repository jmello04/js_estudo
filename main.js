let userCount = 3;

function validateName(name) {
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{3,30}$/;
    return nameRegex.test(name.trim());
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorDiv = document.getElementById(inputId + '-error');
    
    input.classList.add('error');
    input.classList.remove('success');
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
}

function showSuccess(inputId) {
    const input = document.getElementById(inputId);
    const errorDiv = document.getElementById(inputId + '-error');
    
    input.classList.add('success');
    input.classList.remove('error');
    errorDiv.classList.remove('show');
}

function clearFieldValidation(inputId) {
    const input = document.getElementById(inputId);
    const errorDiv = document.getElementById(inputId + '-error');
    
    input.classList.remove('error', 'success');
    errorDiv.classList.remove('show');
}

function clearMessages() {
    const successMessage = document.getElementById('success-message');
    successMessage.classList.remove('show');
    
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    nameError.classList.remove('show');
    emailError.classList.remove('show');
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    nameInput.classList.remove('error', 'success');
    emailInput.classList.remove('error', 'success');
}

function addUser() {
    clearMessages();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    
    let isValid = true;
    
    if (!name) {
        showError('name', 'Nome é obrigatório');
        isValid = false;
    } else if (!validateName(name)) {
        showError('name', 'Nome deve conter apenas letras e espaços (3-30 caracteres)');
        isValid = false;
    } else {
        showSuccess('name');
    }
    
    if (!email) {
        showError('email', 'Email é obrigatório');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email', 'Por favor, insira um email válido (ex: nome@email.com)');
        isValid = false;
    } else {
        showSuccess('email');
    }
    
    if (isValid) {
        userCount++;
        const userList = document.querySelector('.user-list');
        const newItem = document.createElement('div');
        newItem.className = 'user-item';
        newItem.innerHTML = `
            <span class="user-text">${name} - ${email}</span>
            <button class="delete-btn" onclick="deleteUser(this)">×</button>
        `;
        userList.appendChild(newItem);
        
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        
        const successMessage = document.getElementById('success-message');
        successMessage.textContent = `Usuário "${name}" adicionado com sucesso!`;
        successMessage.classList.add('show');
        
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 3000);
        
        setTimeout(() => {
            document.getElementById('name').classList.remove('success');
            document.getElementById('email').classList.remove('success');
        }, 2000);
    }
}

function deleteUser(button) {
    const userItem = button.parentElement;
    const userName = userItem.querySelector('.user-text').textContent.split(' - ')[0];
    
    if (confirm(`Tem certeza que deseja excluir "${userName}"?`)) {
        userItem.style.animation = 'slideOut 0.3s ease-out';
        
        setTimeout(() => {
            userItem.remove();
        }, 300);
    }
}

// Event listeners com validação em tempo real
document.getElementById('name').addEventListener('input', function() {
    const name = this.value.trim();
    
    // Se o campo estiver vazio, remove todas as validações
    if (!name) {
        clearFieldValidation('name');
        return;
    }
    
    // Valida o nome em tempo real
    if (validateName(name)) {
        showSuccess('name');
    } else {
        showError('name', 'Nome deve conter apenas letras e espaços (3-30 caracteres)');
    }
});

document.getElementById('email').addEventListener('input', function() {
    const email = this.value.trim();
    
    // Se o campo estiver vazio, remove todas as validações
    if (!email) {
        clearFieldValidation('email');
        return;
    }
    
    // Valida o email em tempo real
    if (validateEmail(email)) {
        showSuccess('email');
    } else {
        showError('email', 'Por favor, insira um email válido');
    }
});

document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addUser();
    }
});

const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(-100%);
        }
    }
`;
document.head.appendChild(style);