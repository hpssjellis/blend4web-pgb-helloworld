/*!
 * Module dependencies.
 */

var connect = require('connect'),
    phonegap = require('connect-phonegap'),
    app = connect();

/*!
 * Create Connect server using the PhoneGap middleware.
 */

app.use(phonegap());
console.log('Ctrl-C to quit');
console.log('Click Preview in Nitrous.io to see the URL');
console.log('Enter that URL into the Phonegap Developer App');
var port = process.env.PORT || 3000;
app.listen(port);
