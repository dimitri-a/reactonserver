import express from 'express';

let app = express();
app.set('port', (process.env.PORT || 3000))

app.get('*', (req, res) => {
   //todo remove
   debugger;

   res.end('<p>hello from server</p>')
})

app.listen(app.get('port'))

console.info('==> ✅  Server is listening in ' + process.env.NODE_ENV + ' mode')
console.info('==> 🌎  Go to http://localhost:%s', app.get('port'))