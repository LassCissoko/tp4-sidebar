// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml


const sideBar = document.getElementById('side-bar');
const toggleBtn = document.querySelector('#btn');
const content = document.querySelector('.content');

toggleBtn.addEventListener('click', () => {
  sideBar.classList.toggle('active')
});


content.addEventListener('click', ()=> {
  sideBar.classList.remove('active');
});


if (active) {
  
}