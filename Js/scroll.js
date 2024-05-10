window.addEventListener('DOMContentLoaded', (event) => {
    const navoutHeight = document.querySelector('#navout').offsetHeight;
    document.querySelector('#indexnav #menu-map').style.top = `${navoutHeight}px`;
});
