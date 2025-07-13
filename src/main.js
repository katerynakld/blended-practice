import { onTaskFormSubmit } from './js/handlers';
import { onTaskListButtonClick } from './js/handlers';
import { refs } from './js/refs';
import { onThemeToggleClick } from './js/theme-switcher';
import { addTasks } from './js/render-tasks';

refs.taskForm.addEventListener('submit', onTaskFormSubmit);
refs.taskList.addEventListener('click', onTaskListButtonClick);
refs.themeToggleButton.addEventListener('click', onThemeToggleClick);

document.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  addTasks(tasks);
});
