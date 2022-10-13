'use strict'

const apiService = require('../services/api');


module.exports = async (props, event, api) => {
    return await apiService.createDoc(api, "loader", { "user": "@me", "progress": 0 })
}