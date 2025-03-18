const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

firebase.analytics().logEvent('login');

function addDownline(uplineId, downlineId) {
    db.collection('users').doc(uplineId).update({
        downline: firebase.firestore.FieldValue.arrayUnion(downlineId)
    })
    .then(() => {
        console.log("Downline berhasil ditambahkan!");
    })
    .catch(error => {
        console.error("Gagal menambahkan downline:", error);
    });
}
