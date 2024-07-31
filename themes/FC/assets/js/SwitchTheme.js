function switchTheme(theme) {
    switch (theme) {
      case 'light':
        document.body.classList.remove('dark');
        break;
      case 'dark':
        document.body.classList.add('dark');
        break;
      // auto
      default:
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.body.classList.add('dark');
        }
    }
  }

  function isDarkTheme() {
    return document.body.className.includes("dark");
  }

  function getPrefTheme() {
    return localStorage.getItem("pref-theme");
  }

  function setPrefTheme(theme) {
    switchTheme(theme)
    localStorage.setItem("pref-theme", theme);
  }

  const toggleThemeCallbacks = {}
  toggleThemeCallbacks['main'] = (isDark) => {
    // console.log('window toggle-theme 1')
    if (isDark) {
      setPrefTheme('light');
    } else {
      setPrefTheme('dark');
    }
  }

  // listen to set-theme event,
  // because window is never changed by InstantClick,
  // we add the listener to window to ensure the event is always received
  window.addEventListener('toggle-theme', function() {
    // console.log('window toggle-theme')
    const isDark = isDarkTheme()
    for (const key in toggleThemeCallbacks) {
      toggleThemeCallbacks[key](isDark)
    }
  });

  // this function is used as the event listener for toggle-theme button click
  function toggleThemeListener() {
    // console.log('click theme-toggle')
    window.dispatchEvent(new CustomEvent('toggle-theme'));
  }