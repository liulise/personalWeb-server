const cp = require('child_process');

cp.execFile('C:\\\\Users\\\\admin\\\\AppData\\\\Roaming\\\\npm', ['-h'], (err, stdout) =>
{
  if (err) { console.log(err); }
  console.log(stdout);
});
