// eslint-disable-next-line import/prefer-default-export
export const counterTasks = (counter) => {
  const tasksCountContent = '';
  if (counter === 0) {
    tasksCountContent = "Vous n'avez pas de tâche en cours";
  }
  else if (counter === 1) {
    tasksCountContent = 'vous avez 1 tâche en cours';
  }
  else {
    tasksCountContent = `vous avez ${counter} en cours`;
  }
  return tasksCountContent;
};
