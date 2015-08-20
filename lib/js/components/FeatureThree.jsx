/**
 * @module FeatureThree
 *
 * Component, regarded as a feature, is toggled by means of a privilege.
 *
 * When a specific privilege is found in a 'symbol list', the feature will be toggled for a specific
 * user asociated with said privilege.
 *
 * This allows users with certain privileges to access certain features.
 */

// Dependencies.
var React = require('react');

// Component.
module.exports = React.createClass({
	render: function () {
		return (
			<section className="feature-three">
				<span>Feature Three: enabled by privilege</span>
			</section>
		);
	}
});
