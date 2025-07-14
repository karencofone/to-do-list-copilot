const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

// Obtener todas las tareas
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Crear una nueva tarea
app.post("/tasks", (req, res) => {
  const { title, description, dueDate, priority, status } = req.body;

  if (!title || !priority || !status) {
    return res
      .status(400)
      .json({ error: "Los campos title, priority y status son obligatorios." });
  }

  const newTask = {
    id: uuidv4(),
    title,
    description: description || "",
    dueDate: dueDate || "",
    priority,
    status,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Actualizar una tarea existente
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, priority, status } = req.body;

  const task = tasks.find((task) => task.id === id);
  if (!task) {
    return res.status(404).json({ error: "Tarea no encontrada." });
  }

  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (dueDate !== undefined) task.dueDate = dueDate;
  if (priority !== undefined) task.priority = priority;
  if (status !== undefined) task.status = status;

  res.json(task);
});

// Eliminar una tarea
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;

  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return res.status(404).json({ error: "Tarea no encontrada." });
  }

  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

// Configurar el servidor para escuchar en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
