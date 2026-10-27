// Every page in src/pages exports `meta` ({ path, title, panel, nav, icon }) and is routed automatically.
const modules = import.meta.glob('../pages/**/*.jsx', { eager: true });

export const pages = Object.values(modules)
  .filter(m => m.meta && m.default)
  .map(m => ({ panel: 'user', ...m.meta, Component: m.default }));

export const byPanel = panel => pages.filter(p => p.panel === panel);
export const navFor = panel => byPanel(panel).filter(p => p.nav);
