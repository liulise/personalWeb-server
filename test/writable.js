const { Writable } = require('stream');
const http = require('http');

class CountStream extends Writable
{
  constructor(reg)
  {
    super();
    this.reg = reg;
    this.count = 0;
  }

  end() { this.emit('total', this.count); }

  _write(chunk, encoding, cb)
  {
    console.log(encoding);
    const matchs = chunk.toString().match(this.reg);

    if (matchs) { this.count += matchs.length; }

    cb();
  }
}

module.exports = CountStream;

const transform = new CountStream('match');

http.get('http://www.w3school.com.cn/jsref/jsref_match.asp', res =>
{
  res.pipe(transform);
});

transform.on('total', count =>
{
  console.log(count);
});

