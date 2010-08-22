// add the vendored express to the require path
require.paths.unshift("vendor/connect/lib")

var connect = require("connect")

function showId(req, res) {
  var params = req.params
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('the number ' + params.id)
}

function helloWorld(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('hello world')
}

var server = connect.createServer(
  connect.logger(),
  connect.staticProvider(__dirname + '/public'),
  connect.router(function(app){
    app.get('/numbers/:id', showId)
    app.get('/', helloWorld)
  })
)


server.listen(parseInt(process.env.PORT) || 9393)
