const router = require('express').Router();
const sequelize = require('../config/connection');
const { NewCars, UsedCars, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard (new)
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  NewCars.findAll({
    where: {
      user_id: req.session.user_id
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
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  NewCars.findByPk(req.params.id, {
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
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        
        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

///OLD
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  UsedCars.findAll({
    where: {
      user_id: req.session.user_id
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
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  UsedCars.findByPk(req.params.id, {
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
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        
        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});



module.exports = router;
