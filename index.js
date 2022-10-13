'use strict'
// Widgets

module.exports = async () => {
  return {
    widgets: {
      main: require('./widgets/main'),
      loader: require('./widgets/loader')
    },
    listeners: {
      longtask: require('./listeners/longtask'),
      onEnvStart: require('./listeners/onEnvStart'),
      onSessionStart: require('./listeners/onSessionStart'),
      onUserFirstJoin: require('./listeners/onUserFirstJoin')
    },
    rootWidget: 'main'
  }
}