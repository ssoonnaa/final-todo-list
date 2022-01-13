const express = require ('express');
const pool = require ('./database')
const router = express.Router ();
router.post('/todo/register', async function(req,res){
    try {
      const {mylist}=req.body;
      if(mylist==undefined){
        res.json({status:500,message:"fields are necessary"})
        return;
      }
      const myquery= 'INSERT INTO todotable (mylist) VALUES (?)';
      const result = await pool.query(myquery,[mylist]);
      res.status(200).json({todolist:result.insertlist});
      console.log("inseerted");
      } 
      catch (error) {
        res.status(400).send(error.message);
      }

});
router.delete('/todo/remove/:rollno',async function(req,res){
    try{
      const myquery = 'DELETE FROM `todolist`.`todotable` WHERE  `no`=?;';
      const rpl = await pool.query (myquery,req.params.rollno);
      res.status(200).json({todolist1:rpl.deleteno});
    }
    catch(error){
      res.status(400).send(error.message);
    }
  
  });
  module.exports=router;