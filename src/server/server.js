// const Koa = require("koa");
// const Router = require("koa-router");

import Koa from "koa";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

router.get("/epl", async ctx => {
  ctx.status = 200;
  ctx.body = `Hi guys!`;
  console.log("Get request", ctx);
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
