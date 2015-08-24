'use strict'

var window = require('global/window')
var Delegator = require('dom-delegator')
var Struct = require('observ-struct')
var Observ = require('observ')
var minimumViewport = require('minimum-viewport')
var orientation = require('screen-orientation')
var delegator = Delegator()

var MOBILE_WIDTH = 640

var device = Struct({
  mobile: Observ(false),
  orientation: Observ(null)
})

module.exports = device

delegator.addEventListener(window, 'resize', onResize)

function onResize () {
  device.mobile.set(minimumViewport({x: MOBILE_WIDTH}))
  device.orientation.set(orientation().direction)
}
