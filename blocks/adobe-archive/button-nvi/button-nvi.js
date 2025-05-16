/* eslint-disable */

export default function decorate(block) {
  const buttonChildrens = [...block.children];
  const [btn, id, ariaLabel, classes] = [...buttonChildrens];
  if (ariaLabel?.textContent) {
    const cta = block?.querySelector('a.button');
    cta.ariaLabel = ariaLabel.textContent.trim();
  }
  if (classes?.textContent.includes('americas')) {
    block.classList.add('americas');
  } else if (classes?.textContent.includes('eyeglass')) {
    block.classList.add('eyeglass');
  } else if (classes?.textContent.includes('discountcontacts')) {
    block.classList.add('discountcontacts');
  } else if (classes?.textContent.includes('vistaopt')) {
    block.classList.add('vistaopt');
  }
  if (classes) {
    block.removeChild(classes);
  }
  block?.removeChild(id);
  block?.removeChild(ariaLabel);
}
