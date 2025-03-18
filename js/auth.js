const auth = firebase.auth();

function showSuccess(message) {
    Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: message,
    });
}

function showError(message) {
    Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: message,
    });
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (!validateEmail(email)) {
        showError("Email tidak valid!");
        return;
    }
    
    if (!validatePassword(password)) {
        showError("Password harus minimal 6 karakter!");
        return;
    }
    
    setLoading(true);
    
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            showSuccess("Login berhasil!");
            window.location.href = "dashboard.html";
        })
        .catch(error => showError(error.message))
        .finally(() => setLoading(false));
}

function login(email, password) {
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Login berhasil!");
            window.location.href = "dashboard.html";
        })
        .catch(error => alert(error.message));
}

function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            alert("Login dengan Google berhasil!");
            window.location.href = "dashboard.html";
        })
        .catch(error => alert(error.message));
}

function register(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Registrasi berhasil, silakan login.");
            window.location.href = "index.html";
        })
        .catch(error => alert(error.message));
}

function registerWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            alert("Registrasi dengan Google berhasil!");
            window.location.href = "index.html";
        })
        .catch(error => alert(error.message));
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return password.length >= 6;
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (!validateEmail(email)) {
        alert("Email tidak valid!");
        return;
    }
    
    if (!validatePassword(password)) {
        alert("Password harus minimal 6 karakter!");
        return;
    }
    
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Login berhasil!");
            window.location.href = "dashboard.html";
        })
        .catch(error => alert(error.message));
}

function setLoading(isLoading) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.disabled = isLoading;
    });
    
    if (isLoading) {
        document.body.style.cursor = "wait";
    } else {
        document.body.style.cursor = "default";
    }
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (!validateEmail(email)) {
        alert("Email tidak valid!");
        return;
    }
    
    if (!validatePassword(password)) {
        alert("Password harus minimal 6 karakter!");
        return;
    }
    
    setLoading(true);
    
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Login berhasil!");
            window.location.href = "dashboard.html";
        })
        .catch(error => alert(error.message))
        .finally(() => setLoading(false));
}

function resetPassword() {
    const email = prompt("Masukkan email Anda:");
    
    if (email && validateEmail(email)) {
        auth.sendPasswordResetEmail(email)
            .then(() => alert("Email reset password telah dikirim!"))
            .catch(error => alert(error.message));
    } else {
        alert("Email tidak valid!");
    }
}

window.resetPassword = resetPassword;

window.login = login;
window.loginWithGoogle = loginWithGoogle;
window.register = register;
window.registerWithGoogle = registerWithGoogle;
