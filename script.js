document.addEventListener('DOMContentLoaded', () => {
    const mySmoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    mySmoothScrollLinks.forEach(myLink => {
        myLink.addEventListener('click', function (e) {
            e.preventDefault();
            const myTarget = document.querySelector(this.getAttribute('href'));
            myTarget.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
