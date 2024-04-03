var http = require('http');
let skillList = ['- HTML', '- CSS (LASS, SASS, SCSS)', '- JavaScript (TypeScript)', '- React (Next.js)', '- Redux']

const PORT = 3001;

const server = http.createServer((req, res)=>{
  console.log('server request');
  console.log(req.url, req.method);

  for(let i = 0; skillList.length > i; i++) {
    res.write(skillList[i]);
  }
  res.end();
})

server.listen(PORT, 'localhost', (error)=>{
  error ? console.log(error) : console.log(`listening port ${PORT}`)
})