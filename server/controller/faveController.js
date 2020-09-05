const { Fave } = require('../models')

class FaveController {

  static getFave(req, res) {
    Fave.findAll({ order: [['id', 'ASC']] })
    .then(faves => {
      res.status(200).json(faves)
    })
    .catch(err => {
      console.log(err)
    })
  }

  static addFave(req, res) {
    const { nickname, imageUrl, pokemonId } = req.body
    const newFave = {
      nickname,
      imageUrl,
      pokemonId
    }

    Fave.create(newFave)
    .then(response => {
      console.log(response)
      res.status(200).json(response)
    })
    .catch(err => {
      console.log(err)
    })
  }

  static removeFave(req, res) {
    const { id } = req.params
    Fave.destroy({ where: { id } })
    .then(response => {
      if(response == 1) {
        res.status(200).json({ message: 'Pokemon has been remove from favourite list'})
      } else {
        res.status(404).json({ message: 'Error Not Found'})
      }
    })
  }

}

module.exports = FaveController