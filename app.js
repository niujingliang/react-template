const Koa = require('koa');

const app = new Koa();
const  serve = require("koa-static");

app.use(serve(__dirname+ "/dist",{ extensions: ['html']}));
app.listen(3000);