/**
 * Created by admin on 2018/2/3. 二月
 * yujie
 */
console.log(process.pid);

process.stdin.resume();

process.on('SIGINT', () =>
{
  console.log('Received SIGINT.  Press Control-D to exit.');
});
