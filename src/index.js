import "./style.scss";
import "./javascript/stories";
import "./javascript/archive";

if (window.location.href.includes('settings')) {
    const CHECKBOX = document.querySelector('.options__checkbox')

    CHECKBOX.addEventListener('change', () => {
        CHECKBOX.checked ? console.log('checked') : console.log('unchecked');
    })
}