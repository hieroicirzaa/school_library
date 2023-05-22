const express = require('express');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

const adminModel = require('../models/index').admin
const memberModel = require('../models/index').member
const borrowModel = require('../models/index').borrow

// if(adminModel){
  const authenticate = async (request, response) => {
    let dataLogin = {
      username: request.body.username,
      password: md5(request.body.password)
    }
  
    let dataAdmin = await adminModel.findOne({ where: dataLogin })
  
    if (dataAdmin) {
      let payload = JSON.stringify(dataAdmin)
      let secret = `mokleters`
      let token = jwt.sign(payload, secret)
  
      return response.json({
        success: true,
        logged: true,
        message: `Authentication Successed`,
        token: token,
        data: dataAdmin
      })
    }
  
    return response.json({
      success: false,
      logged: false,
      message: `Authentication Failed. Invalid username or password`
    })
  }
  
  const authorize = async (request, response, next) => {
    let headers = request.headers.authorization
    let tokenKey = headers && headers.split(" ")[1]
  
    if (tokenKey == null) {
      return response.json({
        success: false,
        message: 'Unauthorized User'
      })
    }
  
    let secret = `mokleters`
  
    jwt.verify(tokenKey, secret, (error, user) => {
      if (error) {
        return response.json({
          success: false,
          message: `Invalid token`
        })
      }
    })
    next()
  }
module.exports = { authenticate, authorize }
// }else if(memberModel){
//   const authenticate = async (request, response) => {
//     let dataLogin = {
//       name: request.body.name,
//       contact: request.body.contact
//     }
  
//     let dataMember = await memberModel.findOne({ where: dataLogin })
  
//     if (dataMember) {
//       let payload = JSON.stringify(dataMember)
//       let secret = `mokleters`
//       let token = jwt.sign(payload, secret)
  
//       return response.json({
//         success: true,
//         logged: true,
//         message: `Authentication Successed`,
//         token: token,
//         data: dataMember
//       })
//     }
  
//     return response.json({
//       success: false,
//       logged: false,
//       message: `Authentication Failed. Invalid username or password`
//     })
//   }
  
//   const authorize = async (request, response, next) => {
//     let headers = request.headers.authorization
//     let tokenKey = headers && headers.split(" ")[1]
  
//     if (tokenKey == null) {
//       return response.json({
//         success: false,
//         message: 'Unauthorized User'
//       })
//     }
  
//     let secret = `mokleters`
  
//     jwt.verify(tokenKey, secret, (error, user) => {
//       if (error) {
//         return response.json({
//           success: false,
//           message: `Invalid token`
//         })
//       }
//     })
//     next()
//   }
//   module.exports = { authenticate, authorize }
// }else if(borrowModel){
//   const authenticate = async (request, response) => {
//     let dataLogin = {
//       memberID: request.body.memberID,
//       adminID: request.body.adminID
//     }
  
//     let dataBorrow = await borrowModel.findOne({ where: dataLogin })
  
//     if (dataBorrow) {
//       let payload = JSON.stringify(dataBorrow)
//       let secret = `mokleters`
//       let token = jwt.sign(payload, secret)
  
//       return response.json({
//         success: true,
//         logged: true,
//         message: `Authentication Successed`,
//         token: token,
//         data: dataBorrow
//       })
//     }
  
//     return response.json({
//       success: false,
//       logged: false,
//       message: `Authentication Failed. Invalid username or password`
//     })
//   }
  
//   const authorize = async (request, response, next) => {
//     let headers = request.headers.authorization
//     let tokenKey = headers && headers.split(" ")[1]
  
//     if (tokenKey == null) {
//       return response.json({
//         success: false,
//         message: 'Unauthorized User'
//       })
//     }
  
//     let secret = `mokleters`
  
//     jwt.verify(tokenKey, secret, (error, user) => {
//       if (error) {
//         return response.json({
//           success: false,
//           message: `Invalid token`
//         })
//       }
//     })
//     next()
//   }
//   module.exports = { authenticate, authorize }
// }


