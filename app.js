const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
bodyParser = require('body-parser');
const methodOverride = require('method-override');
const passport = require('passport');
const sessions = require('express-session');
const router = require('./routes/index.js');

// Load config
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 5000;

const app = express();

//Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Method override
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      let method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

// Set Global var
app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

// Handlebars engine
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.listen(PORT, console.log(`Server listening on port ${PORT}`));
