// const Koa = require("koa");
// const Router = require("koa-router");

import Koa from "koa";
import Router from "@koa/router";
import cors from "@koa/cors";
import json from "koa-json";

import dotenv from "dotenv";

import {
  fetchPremierLeague,
  fetchPremierLeagueTable,
} from "./services/fetchData";

dotenv.config();

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(json());

router.get("/test", async ctx => {
  ctx.status = 200;
  ctx.body = `Hi guys!`;
  console.log("Get request", ctx);
});

router.get("/epl", async ctx => {
  ctx.status = 200;
  const data = await fetchPremierLeague();
  console.log(data);
  ctx.body = data;
});

router.get("/epl_table", async ctx => {
  ctx.status = 200;
  const data = await fetchPremierLeagueTable();
  ctx.body = data;
});

app.use(router.routes()).use(router.allowedMethods());

const { REACT_APP_SERVER_PORT: PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
