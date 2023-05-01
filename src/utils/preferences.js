function isPortuguese() {

  const language = localStorage.getItem('language') ?? '';

  const searchParams = new URLSearchParams(location.search);
  if (searchParams.get('en') !== null) {
    localStorage.setItem('language', 'en');
    return false;
  }

  if (location.pathname == '/en') return false;

  return language == '';
}

function isLightMode() {

  const themeMode = localStorage.getItem('themeMode') ?? '';

  const searchParams = new URLSearchParams(location.search);
  if (searchParams.get('dark') !== null) {
    localStorage.setItem('themeMode', 'dark');
    return false;
  }

  return themeMode == '';
}

export {
  isPortuguese,
  isLightMode
}