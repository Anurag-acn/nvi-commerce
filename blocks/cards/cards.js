import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  /* change to ul, li */
  let card = 0;
  const ul = document.createElement('ul');
  [...block.children].forEach(row => {
    const li = document.createElement('li');
    card += 1;
    li.classList.add(`cards-card-${card}`);
    moveInstrumentation(row, li);
    while (row.firstElementChild) {
      li.append(row.firstElementChild);
    }

    [...li.children].forEach((div, index) => {
      if (index === 0 && div.querySelector('picture')) {
        div.className = 'cards-card-image';
      } else if (index === 1 && div.querySelector('p')) {
        div.className = 'cards-card-pretitle';
      } else if (index === 2 && div.querySelector('p')) {
        div.className = 'cards-card-title';
      } else if (index === 3 && div.querySelector('p')) {
        div.className = 'cards-card-subtitle';
      } else if (index === 4 && div.querySelector('p')) {
        div.className = 'cards-card-bodyText';
      } else {
        div.className = 'cards-card-body';
      }
    });

    ul.append(li);

    const newButtonContainer = document.createElement('div');
    newButtonContainer.classList.add('Cards-card-buttonContainer');

    // Iterate over the children of the li element
    [...li.children].forEach(div => {
      const buttonContainers = div.querySelectorAll('.button-container');
      buttonContainers.forEach(buttonContainer => {
        newButtonContainer.appendChild(buttonContainer.parentElement);
      });
    });

    li.appendChild(newButtonContainer);
  });

  ul.querySelectorAll('picture > img').forEach(img => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });
  block.textContent = '';
  block.append(ul);
}
