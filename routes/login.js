const path = require('path');
const User = global.getModel('user');

module.exports = app =>
{
  app.get('/login', (req, res) =>
  {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
  });

  app.post('/login', (req, res) =>
  {
    const { username: name, password } = req.body;
    const user = new User({ name, password });

    user.save(err =>
    {
      if (err)
      {
        res.sendStatus(500);
      }
      else
      {
        res.sendStatus(200);
      }
    });
  });
};