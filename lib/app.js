var express = require("express")

var app = express.createServer()

app.configure(function(){
  app.set('views', __dirname + '/views')
  app.set('view engine', 'ejs')
  app.use(express.logger())
  app.use(express.errorHandler({ showStack: true, dumpExceptions: true }))
})

app.get('/', function(req, res){
  res.render('index', {
    locals: { title: 'My Site' }
  })
})

app.get('/:id', function(req, res){
  res.render('show', {
    locals: { title: 'My Number Page', objectId: req.params.id }
  })
})

exports.run = function() {
  app.listen(parseInt(process.env.PORT) || 9393)
}
