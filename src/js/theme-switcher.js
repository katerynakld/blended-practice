import { refs } from './refs';

const currentTheme = localStorage.getItem('theme');

if (currentTheme !== null) {
  refs.body.classList.add(currentTheme);
}

export function onThemeToggleClick(event) {
  event.preventDefault();

  if (refs.body.classList.contains('theme-dark')) {
    refs.body.classList.remove('theme-dark');
    refs.body.classList.add('theme-light');
    localStorage.setItem('theme', 'theme-light');
  } else {
    refs.body.classList.remove('theme-light');
    refs.body.classList.add('theme-dark');
    localStorage.setItem('theme', 'theme-dark');
  }
}
