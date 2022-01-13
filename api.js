const express = require ('express');
const pool = require ('./database')
const router = express.Router ();
router.post('/register', async function(req,res){
    try {
      const {list}=req.body;
      if(list==undefined){
        res.json({status:500,message:"fields are necessary"})
        return;
      }
      const myquery= 'INSERT INTO mytodotable (list) VALUES (?)';
      const result = await pool.query(myquery,[list]);
      res.status(200).json({todolist:result.insertlist});
      } 
      catch (error) {
        res.status(400).send(error.message);
      }

});
router.delete('/remove/:rollno',async function(req,res){
    try{
      const myquery = 'DELETE FROM `mysql`.`mytodotable` WHERE  `no`=?;';
      const rpl = await pool.query (myquery,req.params.rollno);
      res.status(200).json({todolist1:rpl.deleteno});
    }
    catch(error){
      res.status(400).send(error.message);
    }
  
  });