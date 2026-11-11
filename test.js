const http = require('http');
const { server } = require('./index.js');

http.get('http://localhost:3000/health', (res) => {
  if (res.statusCode === 200) {
    console.log('Test Passed: Health endpoint returned 200 OK');
    server.close();
    process.exit(0);
  } else {
    console.error('Test Failed: Status code ' + res.statusCode);
    server.close();
    process.exit(1);
  }
}).on('error', (err) => {
  console.error('Test Failed:', err.message);
  server.close();
  process.exit(1);
});
