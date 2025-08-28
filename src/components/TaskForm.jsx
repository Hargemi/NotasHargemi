import { useState, useContext, use } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  //const { createTask } = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      descripcion,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl mb-3 font-bold">Crea Tus Tareas</h1>
        <input
          placeholder="escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2 text-black"
        />
        <textarea
          placeholder="descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={descripcion}
          className="bg-slate-300 p-3 w-full mb-2 text-black"
        ></textarea>

        <button className="bg-green-600 rounded-3xl px-2 py-2 hover:bg-green-500">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
