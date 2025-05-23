// ... existing code ...
// Botão para subir ao topo
const btnTopo = document.getElementById('btn-topo');
const btnRodape = document.getElementById('btn-rodape');

function checaPosicaoScroll() {
  const scrollY = window.scrollY || window.pageYOffset;
  const alturaJanela = window.innerHeight;
  const alturaTotal = document.documentElement.scrollHeight;

  // No topo: só mostra o botão de descer
  if (scrollY < 50) {
    btnTopo.style.display = 'none';
    btnRodape.style.display = 'block';
  }
  // No rodapé: só mostra o botão de subir
  else if (scrollY + alturaJanela >= alturaTotal - 50) {
    btnTopo.style.display = 'block';
    btnRodape.style.display = 'none';
  }
  // No meio: nenhum botão
  else {
    btnTopo.style.display = 'none';
    btnRodape.style.display = 'none';
  }
}

window.addEventListener('scroll', checaPosicaoScroll);
window.addEventListener('resize', checaPosicaoScroll);
document.addEventListener('DOMContentLoaded', checaPosicaoScroll);

btnTopo.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
btnRodape.onclick = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
// ... existing code ...