/* eslint-disable */

export default async function decorate(block) {
    const panels = [...block.children];
    const accordionContainer = document.createElement('div');
    accordionContainer.classList.add('accordion-container');
    [...panels].forEach((panel) => {
        const[accordionLabel, copyText, collapseOpt] = [...panel.children];
        console.log(copyText)
        const summary = document.createElement('summary');
        if(accordionLabel) {
            summary.className = 'accordion-item-label';
            summary.append(accordionLabel);
        }
        const body = document.createElement('div');
        body.className = 'accordion-item-body';
        if(copyText?.textContent !== "") {
            body.append(copyText);
        }

        const details = document.createElement('details');
        details.className = 'accordion-item';
        
        let collapse = true;
        if(collapseOpt?.textContent.trim() == 'false') {
            collapse = false;
        }
        if(collapse) {
            details.setAttribute('open', '');
        }
        panel.textContent = '';
        
        details.append(summary, body);
        panel.append(details);
    })
}