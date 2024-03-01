const http = require("http");
const express = require("express");
const path = require("path");

//Router
const userRouter = require("./router/userRouter");
const boardRouter = require("./router/boardRouter");
const settingRouter = require("./router/settingRouter");
const admRouter = require("./router/admRouter");
const calendarRouter = require("./router/calendar");
const projectRouter = require("./router/project");

const app = express();

const port = 8000;
const build_dir = path.join(__dirname, "/build")

app.get("/ping", (req, res) => {
  res.send("pong1");
});

app.use(express.static(build_dir));

app.use("/api/users", userRouter);
app.use("/api/board", boardRouter);
app.use("/api/setting", settingRouter);
app.use("/api/adm", admRouter);
app.use("/api/calendar", calendarRouter);
app.use("/api/project", projectRouter);

app.get("/*", (req, res) => {
  res.set({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Date: Date.now()
  });
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});


http.createServer(app).listen(port, () => {
  console.log(`app listening at ${port}`);
});
