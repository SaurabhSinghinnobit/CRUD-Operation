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
// async - await both are together use. If you are async use wait not use in this case promise show and cant give result
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

// Here make a alien object and storing the data.

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

// Patch Query

// router.patch('/:id',async(req,res) => {
//     try {
//         const alien = await Alien.findById(req.params.id)
//         alien.sub = req.body.sub
//         const a1 = await alien.save()
//         res.json(a1)
//     } catch (err) {
//         res.send("Error" + err)
//     }
// })

// PUT(Update) query in two ways

// router.put('/:id',async(req,res) => {
//     try {
//         const alien = await Alien.findById(req.params.id)         
//         if (typeof alien === 'undefined') {
//             console.log("Variable is Undefined or data is not presents");
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

router.put('/:id',async(req,res) => {
   
    try {
        const alien = await Alien.findById(req.params.id)         
        if (alien) {
            alien.sub = req.body.sub
            alien.name = req.body.name
            alien.tech = req.body.tech
            const a1 = await alien.save()
            console.log(a1)
            res.json(a1)
        }
        else{
            console.log(`In alien object ${alien}data is not present`)
        }
    } catch (err) {
        res.send("Error" + err)
    }
})

// Update the document by creating the object

// router.put('/:id',async(req,res) => {
   
//     try {
//         const alien = await Alien.findById(req.params.id)         
//         if (alien) {
//             let{
//                 name,
//                 tech,
//                 sub
//             } = req.query
//             res.send(`name is ${name}, tech is ${tech} , sub is ${sub}`)
//             db.alien.update({'name':'sagun'},{$set:{'name':'mahak'}})
          
//         }
//         else{
//             console.log(`In alien ${alien}data is not present`)
//         }
//     } catch (err) {
//         res.send("Error" + err)
//     }
// })

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
        }
    } catch (err) {
        res.send("Error" + err)
    }
})

module.exports = router;