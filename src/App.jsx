import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // Caso a tela seja carregada, as informações da task estão armazenadas no localstorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); //Crio um efeito quando meu state task muda, e salvo a mudança no localstorage(armazenamento) do navegador

  //Essa função só será executada uma vez, quando nessa primeira vez o usuário acaba de acessar a aplicação, devido o segundo parâmetro ser uma lista vazia
  useEffect(() => {
    const fetchTasks = async () => {
      // CHAMAR A API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        { method: "GET" }
      );

      // PEGAR OS DADOS QUE ELA RETORNA
      const data = await response.json();
      console.log(data);

      // ARMAZENAR/PERSISTIR ESSES DADOSNO STATE
      //setTasks(data);
    };
    //SE QUISER, PODE CHAMAR UMA API PARA PEGAR AS TAREFAS
    //fetchTasks();
  }, []);

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (taskId === task.id) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      //NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });

    setTasks(newTask);
  }

  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter((task) => taskId !== task.id);
    console.log(newTask);
    setTasks(newTask);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(), //Gera o id aleatório
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
