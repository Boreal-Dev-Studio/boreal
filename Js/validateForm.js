function validateForm() {
    // Récupère les valeurs des champs de saisie
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Vérifie que l'adresse e-mail a un format valide
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Veuillez entrer une adresse e-mail valide");
      return false;
    }
  
    // Vérifie que le mot de passe répond aux exigences de sécurité
    if (password.length < 8 || !/\d/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
      alert("Le mot de passe doit contenir au moins 8 caractères, dont au moins un chiffre et un caractère spécial");
      return false;
    }
  
    // Si toutes les vérifications sont passées, soumet le formulaire
    return true;
  }