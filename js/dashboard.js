function logout() {
    auth.signOut().then(() => {
        alert("Logout berhasil!");
        window.location.href = "index.html";
    }).catch(error => alert(error.message));
}

window.logout = logout;
