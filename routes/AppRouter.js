const router = require('express').Router()
const controller = require('../controllers/AppController')
const authController = require('../controllers/AuthController')
const middleware = require('../middleware')

router.get('/users', controller.getAllUsers)

// Project Routes

router.get(
  '/projects',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getPublicProjects
)

router.get(
  '/projects/user/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getUserProjects
)

router.get(
  '/projects/:projectId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getProjectById
)

router.post(
  '/projects',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createNewProject
)

router.put(
  '/projects/:projectId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateProject
)

// Auth Routes

router.post('/register', authController.Register)

router.post('/login', authController.Login)

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  authController.CheckSession
)

module.exports = router
