module.exports = app =>
{
  require('./login')(app);

  app.get('/', (req, res) => { res.redirect('/login'); });
};