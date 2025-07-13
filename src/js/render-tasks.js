import { refs } from './refs';

export function addTasks(tasks) {
  const markup = tasks
    .map(
      ({ taskName, taskDescription }) => `<li class="task-list-item">
  <button class="task-list-item-btn" data-name=${taskName}>Delete</button>
  <h3>${taskName}</h3>
  <p>${taskDescription}</p>
</li>`
    )
    .join('');

  refs.taskList.innerHTML = markup;
}
