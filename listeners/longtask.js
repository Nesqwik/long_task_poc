'use strict'

const apiService = require("../services/api");


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loopProgress(api) {
    let res = await apiService.executeQuery(api, "loader", { "user": "@me" })
    let doc = res.data[0];
    for (let i = 0; i < 11; i++) {
        let percent = i * 10;

        doc.progress = percent
        await apiService.updateDoc(api, "loader", doc)
        await sleep(500)
    }
}

module.exports = async (props, event, api) => {
    loopProgress(api);
    return;
}