// Selectors

const navToggle = document.querySelector('.mobile-nav-toggle')
const navigation = document.querySelector('.navigation')

// Event Listenress

navToggle.addEventListener('click', () => {
    console.log('clicked')
    const visibility = navigation.getAttribute('data-visible')
    console.log(visibility)

    if(visibility === 'false') {
        navigation.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        navigation.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);

    }
})