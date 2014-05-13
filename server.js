// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express(),
	 path = require('path');

// configure app
app.use(bodyParser());

var port     = process.env.PORT || 8080; // set our port

var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/xIx9ybys'); // connect to our database
var Beer     = require('./app/models/beer');


// static files
app.use(express.static(path.join(__dirname, '/public')))

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

// on routes that end in /beers
// ----------------------------------------------------
router.route('/beers')

	// create a beer (accessed at POST http://localhost:8080/api/beers)
	.post(function(req, res) {
		console.log('post');
		var beer = new Beer();		// create a new instance of the Beer model
		beer.name = req.body.name;  // set the beers name (comes from the request)
		beer.price = req.body.price;
		beer.origin = req.body.origin;

		beer.save(function(err,beer) {
			if (err)
				res.send(err);

			res.json(beer);
		});

		
	})

	// get all the beers (accessed at GET http://localhost:8080/api/beers)
	.get(function(req, res) {
		console.log('get');
		Beer.find(function(err, beers) {
			if (err)
				res.send(err);

			res.json(beers);
		});
	});

// on routes that end in /api/beers/:beer_id
// ----------------------------------------------------
router.route('/beers/:beer_id')

	// get the beer with that id
	.get(function(req, res) {
		Beer.findById(req.params.beer_id, function(err, beer) {
			if (err)
				res.send(err);
			res.json(beer);
		});
	})

	// update the beer with this id
	.put(function(req, res) {
		Beer.findById(req.params.beer_id, function(err, beer) {

			if (err)
				res.send(err);

			beer.name = req.body.name;
			beer.price = req.body.price;
			beer.origin = req.body.origin;
			
			beer.save(function(err, beers) {
				if (err)
					res.send(err);

				res.json(beers);
			});

		});
	})

	// delete the beer with this id
	.delete(function(req, res) {
		Beer.remove({
			_id: req.params.beer_id
		}, function(err, beer) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);



// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
