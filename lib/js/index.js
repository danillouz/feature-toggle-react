/**
 * @module Index
 *
 * Loads the application.
 */

// Dependencies.
var React = require('react');
var featureToggles = require('feature-toggles');
var features = require('../config/features');
var App = require('./components/App');

// Initialize features.
featureToggles.load(features);

// Render the application.
React.render(
	<App
		userEmail="daniel@crowdynews.com"
		userPrivilege="admin"
		targetDate="2015-08-26"
	/>,

	document.body
);
