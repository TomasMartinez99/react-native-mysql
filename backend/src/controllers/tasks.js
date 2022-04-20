import { connect } from "../database";

// Obtener tareas
export const getTasks = async (req, res) => {
    const connection = await connect();

    const [rows] = await connection.query("SELECT * FROM tasks");
    res.json(rows);
}

// Obtener tarea
export const getTask = async (req, res) => {
    const connection = await connect();

    const [rows] = await connection.query("SELECT * FROM tasks WHERE id = ?", [
        req.params.id
    ]);
    res.json(rows);
}

// Obtener conteo de tareas
export const getTaskCount = async (req, res) => {
    const connection = await connect();

    const [rows] = await connection.query("SELECT COUNT(*) FROM tasks");
    res.json(rows[0]["COUNT(*)"]);
}

// Guardar tarea
export const saveTask = async(req, res) => {
    const connection = await connect();

    const results = await connection.query(
      "INSERT INTO tasks(title, description) VALUES (?, ?)", [req.body.title, req.body.description]);
    res.json({
        id: results.insertId,
        ...req.body
    });
}

// Eliminar tarea
export const deleteTask = async(req, res) => {
    const connection = await connect();

    const result = await connection.execute("DELETE FROM tasks WHERE id = ?", [
        req.params.id,    
    ]);
    
    res.sendStatus(204);
}

// Actualizar tarea
export const updateTask = async(req, res) => {
    const connection = await connect();

    const results = await connection.query('UPDATE tasks SET ? WHERE id = ?', [
        req.body,
        req.params.id
    ]);
    console.log(results);
    res.sendStatus(204);
}