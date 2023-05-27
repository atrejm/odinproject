import _ from 'lodash';
import { functionOne } from './functionOne';
import myName from './myName';
import './style.css';
import Icon from './icon.png';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.textContent = myName("Atrej");
    element.classList.add('hello');
  
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
  }
  
  functionOne();
  document.body.appendChild(component());