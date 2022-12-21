const express = require('express')
const router = express.Router()
const members = require('../../Members')
const uuid = require('uuid')

router.get('/', (req, res) => {
  res.json(members)
})

router.get('/:id', (req, res) => {
  let found = members.filter(member => member.id === parseInt(req.params.id))
  if (found.length > 0) {
    res.json(found[0])
  } 
  else {
    res.status(400).json({msg: `Sorry, there is no member with id ${req.params.id}`})
  }
})

router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  };

  console.log('created newMember')

  if (!newMember.name || !newMember.email) {
    res.status(400).json({msg: `Please include a name and email`})
  }
  else {
    members.push(newMember)
    res.status(201).json(members)
  }
})

module.exports = router;