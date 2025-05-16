// eslint-disable-next-line import/no-unresolved
import { toClassName } from '../../scripts/aem.js';

export default async function decorate(block) {
  const [blockId, ariaLabel, activeTabType, activeTabId, ...tabsDivs] = [...block.children];

  const tabsCompId = blockId?.textContent.trim();
  block.removeChild(blockId);
  block.setAttribute('data-block-id', tabsCompId);

  const ariaLblTxt = ariaLabel?.textContent.trim();
  block.removeChild(ariaLabel);
  block.setAttribute('aria-label', ariaLblTxt);

  const activeTabTypeTxt = activeTabType?.textContent.trim();
  block.removeChild(activeTabType);

  const activeTabIdTxt = activeTabId?.textContent.trim();
  block.removeChild(activeTabId);
  let tabId;
  if (activeTabTypeTxt === 'others' && activeTabIdTxt !== '') {
    tabId = toClassName(activeTabIdTxt);
  }

  // build tablist
  const tablist = document.createElement('div');
  tablist.className = 'tabs-list';
  tablist.setAttribute('role', 'tablist');

  // decorate tabs and tabpanels
  const tabs = tabsDivs.map(child => child.firstElementChild);
  tabs.forEach((tab, i) => {
    const id = toClassName(tab.textContent);
    // decorate tabpanel
    const tabpanel = tabsDivs[i];
    tabpanel.className = 'tabs-panel';
    tabpanel.id = `tabpanel-${id}`;
    tabpanel.setAttribute('aria-hidden', !!i);
    if (tabId) {
      if (tabId === id) {
        tabpanel.setAttribute('aria-hidden', false);
      } else {
        tabpanel.setAttribute('aria-hidden', true);
      }
    }
    tabpanel.setAttribute('aria-labelledby', `tab-${id}`);
    tabpanel.setAttribute('role', 'tabpanel');

    // build tab button
    const button = document.createElement('button');
    button.className = 'tabs-tab';
    button.id = `tab-${id}`;
    button.innerHTML = tab.innerHTML;
    button.setAttribute('aria-controls', `tabpanel-${id}`);
    button.setAttribute('aria-selected', !i);
    if (tabId) {
      if (tabId === id) {
        button.setAttribute('aria-selected', true);
      } else {
        button.setAttribute('aria-selected', false);
      }
    }
    button.setAttribute('role', 'tab');
    button.setAttribute('type', 'button');
    button.addEventListener('click', () => {
      block.querySelectorAll('[role=tabpanel]').forEach(panel => {
        panel.setAttribute('aria-hidden', true);
      });
      tablist.querySelectorAll('button').forEach(btn => {
        btn.setAttribute('aria-selected', false);
      });
      tabpanel.setAttribute('aria-hidden', false);
      button.setAttribute('aria-selected', true);
    });
    tablist.append(button);
    tab.remove();
  });

  block.prepend(tablist);
}
