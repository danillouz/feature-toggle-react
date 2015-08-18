/**
 * @module FeatureFour
 *
 * Component, regarded as a feature, is toggled by means of a target date from the feature toggle
 * configuration file.
 *
 * When the target date is met, the feature will be toggled for all users.
 *
 * This allows all users to access certain features from a specific date set in the future.
 */

// Dependencies.
var React = require('react');

// Component.
module.exports = React.createClass({
	render: function () {
		return (
			<section className="feature-three">
				<span>Feature Three: enabled by specific future date</span>
			</section>
		);
	}
});
