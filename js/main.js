document.addEventListener("DOMContentLoaded", () => {
  // === MENÚ NAVEGACIÓN MOBILE TOGGLE ===
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  // === CONTROL INTERACTIVO DE EMISORA DIGITAL ===
  let isPlaying = false;
  window.toggleRadio = function () {
    const btn = document.getElementById("playBtn");
    const audio = document.getElementById("radioPlayer");

    if (!isPlaying) {
      btn.innerHTML = '<i class="fa-solid fa-pause"></i> PAUSAR TRANSMISIÓN';
      btn.classList.remove("btn-yellow");
      btn.classList.add("btn-brown");
      isPlaying = true;
      if (audio)
        audio
          .play()
          .catch(() => console.log("Simulación de reproducción activada"));
    } else {
      btn.innerHTML = '<i class="fa-solid fa-play"></i> ESCUCHAR EN VIVO';
      btn.classList.remove("btn-brown");
      btn.classList.add("btn-yellow");
      isPlaying = false;
      if (audio) audio.pause();
    }
  };

  // === INTERCEPTOR DE FORMULARIO DE CONTACTO ===
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "¡Gracias por comunicarte con SINUT UNP! Tu solicitud ha sido registrada correctamente. Nos pondremos en contacto contigo a la brevedad.",
      );
      contactForm.reset();
    });
  }
});
