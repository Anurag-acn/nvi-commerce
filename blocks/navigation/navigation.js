export default function decorate(block) {
  // console.log(block);
  let child = 0;
  const children = Array.from(block.children);
  if (children.length > 0) {
    // Add a different class to the first child
    children[0].classList.add('navigation-title');
    child += 1;
  }
  // Create a wrapper for all remaining columns
  const wrapper = document.createElement('div');
  wrapper.classList.add('navigation-columns-wrapper');

  children.slice(1).forEach(div => {
    child += 1;
    div.classList.add(`navigation-column-${child}`);

    // Add class to the child elements of each navigation-column-${child}
    const subChildren = Array.from(div.children);
    subChildren.forEach((subDiv, index) => {
      if (index === 0) {
        subDiv.classList.add('navigation-column-title');
      } else {
        subDiv.classList.add(`navigation-column-${child}-child-${index + 1}`);
      }
    });

    // Move this div into the wrapper
    wrapper.appendChild(div);
  });

  // Append the wrapper after the first child
  if (children.length > 1) {
    block.appendChild(wrapper);
  }
}
