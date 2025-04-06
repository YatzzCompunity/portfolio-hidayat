// Tracker Simulation
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.tracker input');
  const result = document.getElementById('tracker-results');

  input.addEventListener('input', () => {
    const value = input.value.toLowerCase();
    if (!value) {
      result.textContent = "No result.";
      return;
    }

    // Simulasi database pengguna dengan signature tertentu
    const users = [
      { name: "Yuji Itadori", signature: "divine restraint" },
      { name: "Gojo Satoru", signature: "infinity" },
      { name: "Megumi Fushiguro", signature: "ten shadows" },
      { name: "Sukuna", signature: "malevolence" }
    ];

    const found = users.find(user => user.signature.includes(value));
    result.textContent = found ? `Found: ${found.name}` : "No result.";
  });
});

// Domain Audio Handler
function activateDomain() {
  const overlay = document.getElementById('domainEffect');
  overlay.classList.add('active');
  setTimeout(() => overlay.classList.remove('active'), 4000);
  const audio = new Audio('domain_expansion.mp3');
  audio.play();
}
