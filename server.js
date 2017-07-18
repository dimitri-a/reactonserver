import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from './routes';

let app = express();
app.set('port', (process.env.PORT || 3000))

app.get('/hello', (req, res) => {
    //todo remove
    debugger;

    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {

        const reactMarkup = ReactDOMServer.renderToStaticMarkup(<RoutingContext {...renderProps} />)

        res.locals.reactMarkup = reactMarkup

        console.log('req=', req);

        res.end('<p>hello from server</p>')
    });

})

app.listen(app.get('port'))

console.info('==> ✅  Server is listening in ' + process.env.NODE_ENV + ' mode')
console.info('==> 🌎  Go to http://localhost:%s', app.get('port'))