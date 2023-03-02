import {pool} from '../db.js'

export const allNumeros =  async (req, res) => {

    const [result] = await pool.query('SELECT * FROM numeros;')
     res.json(result)
  
  }




  
  export const addNumeros =  async (req, res) => {

    const TelefonoAtacante = req.body.telefonoAtacante

    const [rows]= await pool.query('INSERT INTO numeros (numero) VALUES (?);',
    [TelefonoAtacante])    
    res.send({
       id: rows.insertId,
       TelefonoAtacante
       
    }
    )
   
  
  }