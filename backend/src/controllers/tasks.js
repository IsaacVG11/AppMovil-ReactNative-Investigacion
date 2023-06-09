import { connect }  from '../database'

export const getTasks = async (req, res) => {
    const connection = await connect(); //Me conecto primero a la base de datos y lo guardo en una variable
    const [rows] = await connection.query('SELECT * FROM tasks'); //Luego la conexión que me devuelva la puedo ejecutar haciendo un query y que me devuelva las filas solamente
    res.json(rows)
}

export const getTaskByID = async (req, res) => {
    const connection = await connect(); 
    const [rows] = await connection.query('SELECT * FROM tasks WHERE id =?', [req.params.id]);
    res.json(rows[0])//Ponemos rows[0] porque como sabemos el json nos devuelve un arreglo y en la posicion 0 tenemos la info que nos interesa de nuestra base de datos
}

export const getTaskCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT(*) FROM tasks');
    res.json(rows[0]['COUNT(*)']);
}

export const saveTask = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query('INSERT INTO tasks(title , description) VALUES (?,?)', [req.body.title, req.body.description]);

    res.json({
        id: results.insertId,
        ...req.body,
    });
};

export const deleteTask = async (req, res) => {
    const connection = await connect();
    await connection.query('DELETE FROM tasks WHERE id = ?', [req.params.id]);
    res.sendStatus(204);
}

export const updateTask = async (req, res) => {
    const connection = await connect();
    await connection.query('UPDATE tasks SET ? WHERE id = ?', [req.body, req.params.id]);
    res.sendStatus(204);
}