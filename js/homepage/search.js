const searchButton = document.querySelector('.logo-group1 img');
console.log(searchButton);
const container = document.querySelector('.logo-group1');
console.log(container);
searchButton.addEventListener('click', () => {
    container.classList.toggle('active');
});