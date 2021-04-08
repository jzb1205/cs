(async function run() {
  const Koa = require("koa");
  const Static = require("koa-static-cache");
  const bodyParser = require("koa-bodyparser");
  const router = require("./router");

  const app = new Koa();

  app.use(
    Static("./static", {
      prefix: "/",
      gzip: true,
    })
  );

  app.use(bodyParser());

  app.use(router.routes());

  app.listen("3000");
  console.log("程序正在3000端口运行。。。。");
})();
