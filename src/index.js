import './styles.css';
import menuJson from './menu.json';
import waitIteamTemplate from './templates/post-iteam.hbs';

console.log(menuJson);
console.log(waitIteamTemplate);

// const mark = waitIteamTemplate(menuJson[0]);

const content = document.querySelector('.js-menu');

buildContent(menuJson);

function buildContent(menuJson){
    const markup = menuJson.map(menu => waitIteamTemplate(menu)).join('');
    content.insertAdjacentHTML("beforeend", markup);

    console.log(markup);
}

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const ChangeStyleTheme = document.querySelector('body'); 
const ChangeButton = document.querySelector('.js-switch-input');

ChangeButton.addEventListener('change', changeTheme);


function changeTheme(e){
    console.log(changeTheme);
    const flag = ChangeButton.checked;
    if(flag){
        ChangeStyleTheme.classList.add(Theme.DARK);
        ChangeStyleTheme.classList.remove(Theme.LIGHT);

        localStorage.setItem('Theme',Theme.DARK);
    }
    else{
        ChangeStyleTheme.classList.add(Theme.LIGHT);
        ChangeStyleTheme.classList.remove(Theme.DARK);
        
        localStorage.setItem('Theme',Theme.LIGHT);
    }

}

const lockalStoregValue = localStorage.getItem('Theme');
    if(lockalStoregValue === Theme.DARK){
        ChangeStyleTheme.classList.add(Theme.DARK);
        ChangeStyleTheme.classList.remove(Theme.LIGHT);
        ChangeButton.checked = true;
    }
