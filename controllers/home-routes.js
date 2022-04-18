const router = require('express').Router();
const sequelize = require('../config/connection');
const { NewCars, UsedCars, User } = require('../models');

// get all posts for homepage (NewCars)
router.get('/newcars', (req, res) => {
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
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('newcars', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//USED CARS
router.get('/usedcars', (req, res) => {
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
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
  
        res.render('usedcars', {
          posts,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/', (req, res) => {
 
  res.render('homepage' , {
    loggedIn: req.session.loggedIn
  });
});

module.exports = router;
