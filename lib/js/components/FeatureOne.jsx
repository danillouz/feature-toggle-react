/**
 * @module FeatureOne
 *
 * Component, regarded as a feature, is toggled by means of a Boolean flag from the feature toggle
 * configuration file.
 *
 * This allows all users to access certain features.
 */

// Dependencies.
var React = require('react');

// Component.
module.exports = React.createClass({
	render: function () {
		return (
			<section className="feature-one">
				<span>Feature One: enabled by boolean flag</span>
			</section>
		);
	}
});
