const auth = firebase.auth();

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

window.login = login;
window.loginWithGoogle = loginWithGoogle;
window.register = register;
window.registerWithGoogle = registerWithGoogle;
