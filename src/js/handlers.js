import { stringify } from 'postcss';
import { addTasks } from './render-tasks';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export function onTaskFormSubmit(event) {
  event.preventDefault();

  const { taskName, taskDescription } = event.target.elements;
  const taskNameValue = taskName.value.trim();
  const taskDescriptionValue = taskDescription.value.trim();

  if (taskNameValue === '' || taskDescriptionValue === '') {
    alert('Fill out the form');
    return;
  }

  const task = {
    taskName: taskNameValue,
    taskDescription: taskDescriptionValue,
  };

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  addTasks(tasks);
  event.target.reset();
}

export function onTaskListButtonClick(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  const dataName = event.target.dataset.name;

  tasks = JSON.parse(localStorage.getItem('tasks')).filter(
    ({ taskName }) => taskName !== dataName
  );

  localStorage.setItem('tasks', JSON.stringify(tasks));

  addTasks(tasks);
}
