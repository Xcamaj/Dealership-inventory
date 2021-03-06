const router = require('express').Router();
const { NewCars, User } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users (new)
router.get('/', (req, res) => {
  console.log('======================');
  NewCars.findAll({
    attributes: [
      'id',
      'make',
      'model',
      'price',
      'type'
    ],
    include: [
      {
        model: User,
        attributes: ['id']
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  NewCars.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'make',
      'model',
      'price',
      'type'
    ],
    include: [
      {
        model: User,
        attributes: ['id']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  NewCars.create({
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    type: req.body.type,
    user_id: req.body.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id',  (req, res) => {
  NewCars.update(
    {
      make: req.body.make,
      model: req.body.model,
      price: req.body.price,
      type: req.body.type
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  console.log('id', req.params.id);
  NewCars.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;














