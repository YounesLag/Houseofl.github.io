

function incrementer() {
  const inputs = document.getElementsByClassName('quantité');
  for (let input of inputs) {
    const valeurAct = parseInt(input.value);
    if (valeurAct >= 0) {
      input.value = valeurAct + 1;
    }
  }
}

function decrementer() {
  const inputs = document.getElementsByClassName('quantité');
  for (let input of inputs) {
    const valeurAct = parseInt(input.value);
    if (valeurAct > 0) {
      input.value = valeurAct - 1;
    }
  }
}