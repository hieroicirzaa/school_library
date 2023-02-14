const { Op } = require(`sequelize`)
const memberModel = require(`../models/index`).member
const query = require('sequelize').Op
const path = require('path')
const fs = require('fs')
const upload = require(`./upload_profile`).single('profile')

exports.getAllMember = async (request, response) => {
  let members = await memberModel.findAll()
  return response.json({
    success: true,
    data: members,
    message: `All Members have been loaded`
  })
}

exports.findMember = async (request, response) => {

  let keyword = request.body.keyword
  
  let members = await memberModel.findAll({
    where: {
      [query.or]: [
        { name: { [Op.substring]: keyword } },
        { gender: { [Op.substring]: keyword } },
        { address: { [Op.substring]: keyword } }
      ]
    }
  })
  return response.json({
    success: true,
    data: members,
    message: `All Members have been loaded`
  })
}

exports.addMember = (request, response) => {
  upload(request, response, async(error) => {
      if (error) {
          return response.json({ message: error })
      }
      if (!request.file) {
          return response.json({
              message: `Nothing to Upload`
          })
      }
      let newMember = {
          name: request.body.name,
          address: request.body.address,
          gender: request.body.gender,
          contact: request.body.contact,
          profile: request.file.filename
      }
      memberModel.create(newMember)
          .then(result => {
              return response.json({
                  success: true,
                  data: result,
                  message: `New member has been inserted`
              })
          })
          .catch(error => {
              return response.json({
                  success: false,
                  message: error.message
              })
          })
  })
}

exports.updateMember = (request, response) => {
  upload(request, response, async error => {
      if (error) {
          return response.json({ message: error })
      }
      let id = request.params.id

      let member = {
          name: request.body.name,
          address: request.body.address,
          gender: request.body.gender,
          contact: request.body.contact
      }
      if (request.file) {
          const selectedMember = await memberModel.findOne({
              where: { id: id }
          })
          const oldProfileMember = selectedMember.profile
          const pathProfile = path.join(__dirname, '../profile', oldProfileMember)
          if (fs.existsSync(pathProfile)) {
              fs.unlink(pathProfile, error =>
                  console.log(error))
          }
          member.profile = request.file.filename
      }
      memberModel.update(member, { where: { id: id } })
          .then(result => {
              return response.json({
                  success: true,
                  message: `Data member has been updated`
              })
          })
          .catch(error => {
              return response.json({
                  success: false,
                  message: error.message
              })
          })
  })

}

exports.deleteMember = async (request, response) => {
  const id = request.params.id
  const member = await memberModel.findOne({ where: { id: id } })
  const oldProfileMember = member.profile

  const pathProfile = path.join(__dirname, `../profile`, oldProfileMember)
  if (fs.existsSync(pathProfile)) {
      fs.unlink(pathProfile, error => console.log(error))
  }
  else {
      console.log(`not existing profile`)
  }
  memberModel.destroy({ where: { id: id } })
      .then(result => {
          return response.json({
              success: true,
              message: `Data member has been deleted`
          })
      })
      .catch(error => {
          return response.json({
              success: false,
              message: error.message
          })
      })
}