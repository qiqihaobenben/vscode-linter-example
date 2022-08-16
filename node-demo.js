const cluster = require("cluster")
const Koa = require("koa")
const app = new Koa()
const port = 3000
const instances = 2

if (cluster.isMaster) {
  for (let i = 0; i < instances; i++) {
    cluster.fork()
  }
  console.log(
    Object.keys(process.env).filter((name) => name.includes("npm_config_aaa"))
  )
} else {
  setup()
}

function setup() {
  app.listen(port, () => console.log("app start on port", port))

  // app.use(async (req, res, next) => {
  //   console.log("first")
  //   await next()
  //   console.log("first end")
  // })

  // app.use(async (req, res, next) => {
  //   console.log("second")
  //   await next()
  //   console.log("second end")
  // })

  // app.use(async (req, res, next) => {
  //   console.log("async")
  //   await next()
  //   await new Promise((resolve) => {
  //     setTimeout(() => {
  //       console.log("wait 1000 ms end")
  //       resolve()
  //     }, 1000)
  //   })
  //   console.log("async end")
  // })

  // app.use(async (req, res, next) => {
  //   console.log("third")
  //   await next()
  //   console.log("third end")
  // })

  app.use(function (ctx, next) {
    console.log("first")
    next()
    console.log("first end")
    ctx.response.body = `${process.pid}`
  })
}
