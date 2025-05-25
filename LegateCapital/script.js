// Social icon wave effect
const socialIcons = document.querySelectorAll('.social-icons a');
socialIcons.forEach((icon, idx, arr) => {
  icon.addEventListener('mouseenter', () => {
    icon.classList.add('wave-main');
    if (arr[idx - 1]) arr[idx - 1].classList.add('wave-left');
    if (arr[idx + 1]) arr[idx + 1].classList.add('wave-right');
  });
  icon.addEventListener('mouseleave', () => {
    icon.classList.remove('wave-main');
    if (arr[idx - 1]) arr[idx - 1].classList.remove('wave-left');
    if (arr[idx + 1]) arr[idx + 1].classList.remove('wave-right');
  });
});

// WhatsApp floating button modal (if using modal)
document.addEventListener('DOMContentLoaded', function() {
  const whatsappBtn = document.getElementById('whatsapp-float-btn');
  const whatsappModal = document.getElementById('whatsapp-modal');
  const whatsappCancel = document.getElementById('whatsapp-cancel');
  if (whatsappBtn && whatsappModal && whatsappCancel) {
    whatsappBtn.addEventListener('click', function(e) {
      e.preventDefault();
      whatsappModal.style.display = 'block';
    });
    whatsappCancel.addEventListener('click', function() {
      whatsappModal.style.display = 'none';
    });
    window.addEventListener('click', function(e) {
      if (whatsappModal.style.display === 'block' && !whatsappModal.contains(e.target) && e.target !== whatsappBtn) {
        whatsappModal.style.display = 'none';
      }
    });
  }

  // WhatsApp floating button drag & drop
  // Torna o botão WhatsApp arrastável
  (function() {
    const btn = document.getElementById('whatsapp-float-btn');
    let isDragging = false;
    let offsetX, offsetY;
  
    btn.addEventListener('mousedown', function(e) {
      isDragging = true;
      offsetX = e.clientX - btn.getBoundingClientRect().left;
      offsetY = e.clientY - btn.getBoundingClientRect().top;
      btn.style.transition = 'none';
      document.body.style.userSelect = 'none';
    });
  
    document.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      let x = e.clientX - offsetX;
      let y = e.clientY - offsetY;
      btn.style.left = x + 'px';
      btn.style.top = y + 'px';
      btn.style.right = 'auto';
      btn.style.bottom = 'auto';
      btn.style.position = 'fixed';
    });
  
    document.addEventListener('mouseup', function() {
      if (isDragging) {
        isDragging = false;
        btn.style.transition = '';
        document.body.style.userSelect = '';
      }
    });
  })();
});

// Scroll to top/bottom buttons
document.addEventListener('DOMContentLoaded', function() {
  const btnTopo = document.getElementById('btn-topo');
  const btnRodape = document.getElementById('btn-rodape');
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    // Opcional: salvar preferência no localStorage
    if(document.body.classList.contains('light-theme')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });
  // Carregar preferência salva
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme) {
    document.body.classList.add(savedTheme + '-theme');
  } else {
    document.body.classList.add('dark-theme'); // padrão
  }
  function checaPosicaoScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const alturaJanela = window.innerHeight;
    const alturaTotal = document.documentElement.scrollHeight;
    if (scrollY < 50) {
      btnTopo.style.display = 'none';
      btnRodape.style.display = 'block';
    } else if (scrollY + alturaJanela >= alturaTotal - 50) {
      btnTopo.style.display = 'block';
      btnRodape.style.display = 'none';
    } else {
      btnTopo.style.display = 'none';
      btnRodape.style.display = 'none';
    }
  }
  window.addEventListener('scroll', checaPosicaoScroll);
  window.addEventListener('resize', checaPosicaoScroll);
  checaPosicaoScroll();
  btnTopo.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  btnRodape.onclick = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});