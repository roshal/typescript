
const nps = {}

exports.scripts = nps

nps.build = 'tsc typescript/*.ts'

nps.watch = 'tsc --watch typescript/*.ts'
