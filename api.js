const express = require ('express');
const pool = require ('./database')
const router = express.Router ();
router.get('/todo/rollno',async function(req,res){
  try {
        const myquery = 'SELECT `mylist` FROM `todolist`.`todotable`';
        const rows = await pool.query(myquery,req.params.mylist);
        console.log("MY DB" , rows);
        //res.status(200).json({rollno:req.params.rollno})
        res.status(200).json({mylist:rows})

    } catch (error) {
        res.status(400).send("MY DB ERROR" + error.message);       
    }
});
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
      console.log("inserted");
      } 
      catch (error) {
        res.status(400).send(error.message);
      }

});
router.delete('/todo/delete/:mylist',async function(req,res){
    try{
      const myquery = 'DELETE FROM `todolist`.`todotable` WHERE  `mylist`= ?';
      const rpl = await pool.query (myquery,req.params.rollno);
      res.status(200).json({todolist1:rpl.deletemylist});
      console.log("deleted");
    }
    catch(error){
      res.status(400).send(error.message);
    }
  
  });
  module.exports=router;