(async function run() {
  const Koa = require("koa");
  const Static = require("koa-static-cache");
  const Router = require("koa-router");
  const bodyParser = require("koa-bodyparser");
  const mysql = require("mysql2/promise");

  const app = new Koa();
  app.use(
    Static("./static", {
      prefix: "/",
      gzip: true,
    })
  );
  app.use(bodyParser());

  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "test",
  });

  const router = new Router();

  router.get("/list", async (ctx) => {
    let [users] = await connection.query("SELECT * FROM users");
    ctx.body = users;
  });
  router.post("/add", async (ctx) => {
    let title = ctx.request.body.title || "";
    if (!title) {
      ctx.body = {
        code: 1,
        message: "title不能为空",
      };
      return;
    }
    let [users] = await connection.query(
      "INSERT INTO users (name,age,sex,birthday) values ('王麻子',15,1,45)"
    );
    ctx.body = users;
  });

  app.use(router.routes());

  app.listen("3000");
  console.log("程序正在3000端口运行。。。。");
})();
