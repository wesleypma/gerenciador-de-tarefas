<<<<<<< HEAD
import { ChevronRightIcon, TrashIcon, CheckIcon } from "lucide-react";
=======
import { ChevronRightIcon, TrashIcon } from "lucide-react";
>>>>>>> 0ff640dabc30490c3b56c0ebdaf5b90a87839834
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams(); // Faz o tratamento necessário na string, para não ter nenhum conflito
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
    //navigate(`/task?title=${task.title}&description=${task.description}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
<<<<<<< HEAD
            className={`bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.isCompleted && <CheckIcon />}
=======
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
>>>>>>> 0ff640dabc30490c3b56c0ebdaf5b90a87839834
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
