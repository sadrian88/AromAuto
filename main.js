
        // Simple JavaScript for mobile menu toggle (would need to be expanded)
        document.querySelector('.md\\:hidden').addEventListener('click', function() {
            // This would toggle a mobile menu in a real implementation
            alert('Mobile menu would open here in a full implementation');
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        document.addEventListener('DOMContentLoaded', () => {
    const scents = [
        "Arctic White", "Beach Days", "Black Ice", "Bubble Gum", "Café",
        "City Style", "Coconut", "Forest Fruit", "Frosted Pine", "Green Apple",
        "Jungle Fever", "Kirsche", "Lavender", "Leather", "Lemon", "Mai-Tai",
        "Midnight Chic", "New Car", "Orange Juice", "Peach", "Piña Colada",
        "Sport", "Strawberry", "Summer Cotton", "Supernova", "Tropical",
        "Vanilla", "Vanillaroma", "Wild Instinct"
    ];

    const wave = document.getElementById('scentsWave');
    
    // Adaugă aromele de 2 ori pentru loop continuu
    const duplicatedScents = [...scents, ...scents];
    
    duplicatedScents.forEach(scent => {
        const span = document.createElement('span');
        span.className = 'inline-block mx-8 text-2xl font-bold text-white';
        span.textContent = scent;
        wave.appendChild(span);
    });

    // Calculează durata animației în funcție de numărul de arome
    const duration = scents.length * 1.8; // Ajustează pentru viteză
    wave.style.animation = `wave ${duration}s linear infinite`;
    
    // Forțează repornirea animației pentru a preveni freeze-ul
    void wave.offsetWidth;
});

// Adaugă acest stil dacă nu există deja
const style = document.createElement('style');
style.textContent = `
@keyframes wave {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
.scent-wave {
    animation: wave 20s linear infinite;
    will-change: transform;
}
.scent-wave-container {
    overflow: hidden;
}
`;

/*document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('productVideo');
    const playButton = document.getElementById('playButton');
    const videoOverlay = document.getElementById('videoOverlay');

    // Inițializare video
    video.controls = false;
    video.muted = true; 

    // Handler pentru play
    const playVideo = () => {
        video.play()
            .then(() => {
                videoOverlay.classList.add('hidden');
                video.controls = true;
            })
            .catch(error => {
                console.error('Eroare redare:', error);
                alert(`Video nu poate fi redat: ${error.message}`);
            });
    };

    // Eveniment la click pe buton
    playButton.addEventListener('click', playVideo);

    // Reset overlay când video se termină
    video.addEventListener('ended', () => {
        videoOverlay.classList.remove('hidden');
        video.controls = true;
    });
});*/
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");

  // Deschide modalul la click pe imagini
  document.querySelectorAll(".product-card img").forEach(img => {
    img.addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  // Închide modalul dacă butonul X există
  if (closeBtn) {
    closeBtn.onclick = () => modal.style.display = "none";
  }

  // Închide când dai click pe fundalul întunecat
  modal.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
