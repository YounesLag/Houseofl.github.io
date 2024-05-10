
//toggle pour la liste
document.querySelectorAll('#maList li').forEach(item => {
    item.addEventListener('click', () => {
      const paragraph = item.querySelector('p');
      const isHidden = getComputedStyle(paragraph).display === 'none';
      paragraph.style.display = isHidden ? 'block' : 'none';
    });
  });

