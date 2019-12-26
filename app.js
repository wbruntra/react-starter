var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieSession = require('cookie-session')
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieSession({
  name: 'session',
  keys: ['CHANGE_THIS'],

  // Cookie Options
  maxAge: 7 * 24 * 60 * 60 * 1000 // One week
}))

app.use(express.static(path.join(__dirname, 'client','build')));

app.use('/api', indexRouter);

if (process.env.NODE_ENV === 'production') {
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client','build','index.html'))
  })
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: res.locals.message,
    error: res.locals.error,
  });
});

module.exports = app;
