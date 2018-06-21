const model = require('../model/food.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()


function userLogin (req, res, next) {
  if (!req.body.email || !req.body.password) {
    res.status(400).send('Must have email & password.')
  } else {
    model.userLogin(req.body.email, req.body.password)
    .then(result => {
      if (result.errors) {
        res.status(400).send(result.errors)
      } else {
        res.cookie('jwt', result)
        res.redirect('/events.html')
      }
    })
  }
}

function userSignup (req, res, next) {

}

function userInfo (req, res, next) {
  model.userInfo(req.params.id)
    .then(result => {
      res.send(result)
    })
}

function allIngredients (req, res, next) {
  model.allIngredients(req.params.id)
    .then(result => {
      res.send(result)
    })
}

function addIngredient (req, res, next) {

}

function deleteIngredient (req, res, next) {

}

function createEvent (req, res, next) {
  model.createEvent(req.body.name, req.body.time, req.body.date, req.body.location)
    .then(result => {
      res.send(result)
    })
}

function allEvents (req, res, next) {
  model.allEvents()
    .then(result => {
      res.send(result)
    })
}

function eventInfo (req, res, next) {

}

function updateEvent (req, res, next) {

}

function getRecipe (req, res, next) {

}

module.exports = {
  userLogin,
  userSignup,
  userInfo,
  allIngredients,
  addIngredient,
  deleteIngredient,
  createEvent,
  allEvents,
  eventInfo,
  updateEvent,
  getRecipe
}
