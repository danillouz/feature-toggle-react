/**
 * @module FeatureTwo
 *
 * Component, regarded as a feature, is toggled by means of an email address.
 *
 * When a specific email is found in a 'symbol list', the feature will be toggled for a specific
 * user asociated with said email address.
 *
 * This allows certain users to access certain features.
 */

// Dependencies.
var React = require('react');

// Component.
module.exports = React.createClass({
	render: function () {
		return (
			<section className="feature-two">
				<span>Feature Two: enabled by email address</span>
			</section>
		);
	}
});
