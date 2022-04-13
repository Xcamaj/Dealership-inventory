const router = require('express').Router();
const { UsedCars, User } = require('../../models');
// const withAuth = require('../../utils/auth');

//OLD CARS
router.get('/', (req, res) => {
    console.log('======================');
    UsedCars.findAll({
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
    UsedCars.findOne({
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
    // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
    UsedCars.create({
      make: req.body.make,
      model: req.body.model,
      price: req.body.price,
      type: req.body.type,
      user_id: req.session.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.put('/:id', (req, res) => {
    UsedCars.update(
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
    UsedCars.destroy({
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
