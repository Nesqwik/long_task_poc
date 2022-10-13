'use strict'

module.exports = (data, props) => {
    var loader = data[0];

    return {
        type: "text",
        value: loader.progress + "%"
    }
}

