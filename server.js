
const responseTime = require('koa-response-time')
const summary      = require('server-summary')
const wreq         = require('koa-watchify')
const logger       = require('koa-logger')
const browserify   = require('browserify')
const route        = require('koa-route')
const watchify     = require('watchify')
const km           = require('koa-myth')
const rework       = require('rework')
const myth         = require('myth')
const path         = require('path')
const koa          = require('koa')
const fs           = require('fs')

const env  = process.env.NODE_ENV || 'development'
const port = process.env.port || 1337
const app  = koa()

module.exports = app

if ('test' != env) app.use(logger())
app.use(responseTime())

// browserify
const bundle = browserify({
  entries: [path.join(process.cwd(), 'index.js')],
  fullPaths: true,
  packageCache: {},
  cache: {}
})

if ('development' == process.env.NODE_ENV) bundle = watchify(bundle)
app.use(route.get('/bundle.js', wreq(bundle)))

// css
const css    = fs.readFileSync('index.css', 'utf8')
const styles = rework(css).use(myth())
app.use(route.get('/styles.css', km(styles)))

if (!module.parent) app.listen(port, summary)
