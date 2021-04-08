const connection = require('./connection')

const Router = require("koa-router");

router = new Router()

router.get("/list", async (ctx) => {
    let [users] = await connection.query("SELECT * FROM commet");
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
        "INSERT INTO commet (name,age,sex,birthday) values ('王麻子',15,1,45)"
    );
    ctx.body = users;
});


module.exports = router