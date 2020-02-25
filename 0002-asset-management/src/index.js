import _ from 'lodash';
// 1. carregando css
import './style.css';
// 2. carregando imagens
import Icon from './icon.png';
// 4. carregando csv e tsv
// OBS: Only the default export of JSON modules can be used without warning.
import Data from './data.xml';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    console.log(Data);

    return element;
}

document.body.appendChild(component());