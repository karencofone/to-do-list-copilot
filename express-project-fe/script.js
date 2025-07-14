const API_URL = "http://localhost:3000/tasks";

document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  taskForm.addEventListener("submit", addTask);

  fetchTasks();
});

async function fetchTasks() {
  try {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    renderTasks(tasks);
  } catch (error) {
    console.error("Error al obtener las tareas:", error);
  }
}

function renderTasks(tasks) {
  const pendingContainer = document.getElementById("pending-tasks-container");
  const completedContainer = document.getElementById(
    "completed-tasks-container"
  );

  pendingContainer.innerHTML = "";
  completedContainer.innerHTML = "";

  tasks.forEach((task) => {
    const taskElement = renderTask(task);
    if (task.status === "Pending") {
      pendingContainer.appendChild(taskElement);
    } else {
      completedContainer.appendChild(taskElement);
    }
  });
}

function renderTask(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = `task ${task.status === "Completed" ? "completed" : ""}`;
  taskDiv.innerHTML = `
    <h3>${task.title}</h3>
    <p>${task.description || "Sin descripción"}</p>
    <p>Vence: ${task.dueDate || "Sin fecha"}</p>
    <p>Prioridad: ${task.priority}</p>
    <p>Estado: ${task.status}</p>
    <div class="actions">
      <button onclick="toggleTaskStatus('${task.id}', '${task.status}')">
        ${
          task.status === "Pending"
            ? "Marcar como Completada"
            : "Marcar como Pendiente"
        }
      </button>
      <button onclick="editTask('${task.id}')">Editar</button>
      <button onclick="deleteTask('${task.id}')">Eliminar</button>
    </div>
  `;
  return taskDiv;
}

async function addTask(event) {
  event.preventDefault();
  const title = document.getElementById("task-title").value;
  const description = document.getElementById("task-description").value;
  const dueDate = document.getElementById("task-dueDate").value;
  const priority = document.getElementById("task-priority").value;

  const newTask = { title, description, dueDate, priority, status: "Pending" };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });
    if (response.ok) {
      fetchTasks();
      document.getElementById("task-form").reset();
    }
  } catch (error) {
    console.error("Error al agregar la tarea:", error);
  }
}

async function toggleTaskStatus(id, currentStatus) {
  const newStatus = currentStatus === "Pending" ? "Completed" : "Pending";
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    fetchTasks();
  } catch (error) {
    console.error("Error al cambiar el estado de la tarea:", error);
  }
}

async function editTask(id) {
  const newTitle = prompt("Nuevo título (deja vacío para no cambiar):");
  const newDescription = prompt(
    "Nueva descripción (deja vacío para no cambiar):"
  );

  const updatedFields = {};
  if (newTitle) updatedFields.title = newTitle;
  if (newDescription) updatedFields.description = newDescription;

  try {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields),
    });
    fetchTasks();
  } catch (error) {
    console.error("Error al editar la tarea:", error);
  }
}

async function deleteTask(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchTasks();
  } catch (error) {
    console.error("Error al eliminar la tarea:", error);
  }
}
