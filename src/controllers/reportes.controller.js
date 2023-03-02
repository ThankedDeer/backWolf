import {pool} from '../db.js'

export const createReportes =async (req,res) => {
    const Nombre = req.body.Nombre
    const Apellido = req.body.Apellido
    const Telefono = req.body.Telefono
    const TelefonoAtacante = req.body.TelefonoAtacante
    const Descripcion= req.body.Descripcion
    
    const [rows]= await pool.query('INSERT INTO reportes (Nombre, Apellido, Telefono, TelefonoAtacante, Descripcion) VALUES (?, ?, ?, ?, ?)',
     [Nombre, Apellido, Telefono, TelefonoAtacante, Descripcion])    
     res.send({
        id: rows.insertId,
        Nombre,
        Descripcion
     }
     )
}
export const allReportes = async (req,res) => {

const [result] = await pool.query('select * from reportes;')
     res.json(result)

}





export const updateReportes = (req,res) => res.send('actualizando reportes')

export const deleteReportes =  (req,res) => res.send('eliminando reportes')