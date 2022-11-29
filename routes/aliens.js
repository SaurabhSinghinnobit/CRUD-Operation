const express = require('express');
//const alien = require('../models/alien');
const router = express.Router();
const Alien = require('../models/alien');
 
// router.get('/', () => {
//     console.log('Get request');
// })
 
// router.get('/', (req,res) => {
//     res.send('Get request');
// })
 
// GET Query
// async - await both are used together use. If you are async use wait not use in this case promise show and cant give result
// so await must use promise always give any default value that value is..pending,reject(error),resolve(data)
 
router.get('/', async(req,res) => {
   try {
       const aliens = await Alien.find()
       res.json(aliens)
 
   } catch (err) {
       res.send('Error:'+ err);
   }
})
 
router.get('/:id', async(req,res) => {
   try {
      const alien = await Alien.findById(req.params.id)
      res.json(alien)
   }catch(err){
       res.send("Error" + err)
   }
})
 
// POST Query
 
// Here make an alien object and store the data.
 
router.post('/', async(req,res) => {
   const alien = new Alien({
       name: req.body.name,
       tech: req.body.tech,
       sub:  req.body.sub
   })
 
console.log(req.body.name)
try {
   const a1 =  await alien.save()
   console.log(a1)
   res.send(a1)
} catch (err) {
   res.send("Error")
}
})
 
// Patch(when small update) Query
 
router.patch('/:id',async(req,res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
    } catch (err) {
        res.send("Error" + err)
    }
})
 
// PUT(Update)PUT (use for large update..)query in two ways
 
// router.put('/:id',async(req,res) => {
//     try {
//         const alien = await Alien.findById(req.params.id)        
//         if (typeof alien === 'undefined') {
//             console.log("Variable is Undefined or data is not presents");
//             throw Error("Hey Id can't found");
//         }
//         else {
//         alien.sub = req.body.sub
//         alien.name = req.body.name
//         const a1 = await alien.save()
//         console.log(a1)
//         res.json(a1)
//         }
//     } catch (err) {
//         res.send("Error" + err)
//     }
// })
 
// router.put('/:id',async(req,res) => {
 
//    try {
//        const alien = await Alien.findById(req.params.id)        
//        if (alien) {
//            alien.sub = req.body.sub
//            alien.name = req.body.name
//            alien.tech = req.body.tech
//            const a1 = await alien.save()
//            console.log(a1)
//            res.json(a1)
//        }
//        else{
//            console.log(`In alien object ${alien}data is not present`);
//            throw Error("Hey Id can't found");
//        }
//    } catch (err) {
//        res.send("Error" + err)
//    }
// })
 
// Update the document by Id
 
router.put('/:id',async(req,res) => {
 
    try {
        const alien = await Alien.findById(req.params.id)        
        if (alien) {
            
            const result = await Alien.findByIdAndUpdate(req.params.id,{$set:{
                'name': 'chawla',
                'tech' : 'python'}
            });
            res.json(result);
        }
        else{
            console.log(`In alien ${alien}data is not present`)
            throw Error("Hey Id can't found");
        }
    } catch (err) {
        res.send("Error" + err)
    }
})
 
// DELETE Query
 
router.delete('/:id',async(req,res) => {
 
   try {
       const alien = await Alien.findById(req.params.id)        
       if (alien) {
           alien.sub = req.body.sub
           alien.name = req.body.name
           alien.tech = req.body.tech
           const a1 = await alien.delete()
           console.log(a1)
           res.json(a1)
          
       }
       else{
           console.log(`In alien object ${alien}data is not present`)
           throw Error("Hey Id can't found");
       }
   } catch (err) {
       res.send("Error" + err)
   }
})
 
module.exports = router;