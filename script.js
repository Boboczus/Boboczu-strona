const canvas = document.getElementById('matrix');
console.log('Canvas:', canvas);

if (canvas) {
  const ctx = canvas.getContext('2d');
  
  // Ustaw rozmiar canvas
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  
  const chars = '01█▓▒░';
  const fontSize = 20;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = new Array(columns).fill(0);
  
  function draw() {
    // Czarny tlo
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Zielony tekst
    ctx.fillStyle = '#00ff00';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      
      ctx.fillText(char, x, y);
      
      drops[i] += 0.5; // Wolniej
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.9) {
        drops[i] = 0;
      }
    }
    
    requestAnimationFrame(draw);
  }
  
  window.addEventListener('resize', resizeCanvas);
  
  draw();
  console.log('Animacja Matrix uruchomiona');
} else {
  console.error('Canvas element nie znaleziony!');
}
