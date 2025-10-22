document.addEventListener('DOMContentLoaded', () => {
  // 1. Trouver l'élément "placeholder" pour la navigation
  const navPlaceholder = document.getElementById('nav-placeholder');
  
  if (navPlaceholder) {
    // 2. Charger le contenu de _nav.html
    fetch('_nav.html')
      .then(response => {
        if (!response.ok) throw new Error('Erreur de chargement du layout');
        return response.text();
      })
      .then(html => {
        // 3. Injecter le HTML de la nav
        navPlaceholder.innerHTML = html;
        
        // 4. (Optionnel mais recommandé) Mettre en surbrillance le lien de la page active
        highlightActiveLink();
      })
      .catch(error => {
        console.error('Impossible de charger la navigation:', error);
        navPlaceholder.innerHTML = '<p class="text-center text-red-500">Erreur de chargement du menu.</p>';
      });
  }
});

function highlightActiveLink() {
  // Récupérer le nom du fichier de la page actuelle (ex: "taxi.html")
  const currentPage = window.location.pathname.split('/').pop();
  
  if (currentPage) {
    // Trouver le lien dans la nav qui correspond à cette page
    const navLinksContainer = document.getElementById('nav-links');
    if (navLinksContainer) {
      const activeLink = navLinksContainer.querySelector(`a[href="${currentPage}"]`);
      
      if (activeLink) {
        // Appliquer les classes Tailwind pour "actif"
        activeLink.classList.add('bg-gray-700', 'font-bold');
      }
    }
  }
}