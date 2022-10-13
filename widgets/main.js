'use strict'

module.exports = (data, props) => {
  return {
    "type": "flex",
    "direction": "vertical",
    "scroll": true,
    "spacing": 4,
    "crossAxisAlignment": "center",
    "children": [
      {
        "type": "button",
        "text": "long task",
        "onPressed": {
          "action": "longtask"
        }
      },
      {
        "type": "widget",
        "name": "loader",
        "coll": "loader",
        "query": {
          "user": "@me"
        }
      }
    ]
  }
}

