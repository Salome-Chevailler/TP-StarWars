// ====== Afficher la liste des films lors du clic sur un bouton =========
// -- gestion du clic sur le bouton
// cible : le bouton d'id "films"
// event : click
// action : liste des films de StarWars
document.getElementById("films").addEventListener("click", listeFilms);

// ====== la fonction qui récupère les films et les affiche
function listeFilms(event) {
  const url = "https://swapi.dev/api/films/"; // l’url de la ressource

  let fetchOptions = { method: "GET" }; // les options de l'API fetch

  // exécuter la requête AJAX
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      // dataJSON = les données renvoyées
      let listeFilms = dataJSON.results; // contient le tableau des 6 films
      console.log(listeFilms);
      // ici le traitement des données …
      // créer un élement <li> pour chaque film
      let texteHTML = "";
      for (let film of listeFilms) {
        texteHTML = texteHTML + "<li>" + film.title + "</li>";
      }
      // pour l'affichage dans le navigateur
      document.getElementById("liste").innerHTML = texteHTML;
    })
    .catch((error) => {
      // gestion des erreurs
      console.log(error);
    });
}
