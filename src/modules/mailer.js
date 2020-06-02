const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');
const exphbs = require('express-handlebars');

const {host, port, user, pass} = require('../config/mail.json');

const transport = nodemailer.createTransport({
  host,
  port,
  auth: { user, pass },
});

const authTemplate = path.resolve('./src/app/resources/mail/');
const partials = path.resolve('partials');
const layouts = path.resolve('layouts');

const options = {
  viewEngine: exphbs.create({
    layoutsDir: authTemplate, // location of handlebars templates
    partialsDir: authTemplate, // location of your subtemplates aka. header, footer etc
    defaultLayout: 'forgot_password', // name of main template
    extname: '.hbs', // handlebars extension
  }),
  viewPath: authTemplate,
  extName: '.hbs',
  };

transport.use('compile', hbs(options));


module.exports = transport;

