/* global tiled, TextFile, Process */

tiled.registerMapFormat('Subprocess Demo', {
  name: 'Subprocess Demo format',
  extension: 'txt',

  write: function (map, fileName) {
    console.log(JSON.stringify(Object.keys(Process), null, 2))
  }
})
