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
  } else if (classes?.textContent.includes('discountContacts')) {
    block.classList.add('discountContacts');
  } else if (classes?.textContent.includes('vistaOpt')) {
    block.classList.add('vistaOpt');
  }
  if (classes) {
    block.removeChild(classes);
  }
  block?.removeChild(id);
  block?.removeChild(ariaLabel);
}
