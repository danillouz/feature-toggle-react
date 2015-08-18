/**
 * @module App
 *
 * Main component.
 */

// Dependencies.
var React = require('react');

// Feature toggle.
var featureToggles = require('feature-toggles');

// Child Components.
var FeatureOne = require('./FeatureOne');
var FeatureTwo = require('./FeatureTwo');
var FeatureThree = require('./FeatureThree');
var FeatureFour = require('./FeatureFour');

// Component.
module.exports = React.createClass({
	propTypes: {
		userEmail: React.PropTypes.string.isRequired,
		userPrivilege: React.PropTypes.string.isRequired,
		targetDate: React.PropTypes.string.isRequired
	},

	render: function () {
		return (
			<section className="app">
				{
					featureToggles.isFeatureEnabled('featureOne') ?
						<FeatureOne /> :
						null
				}

				{
					featureToggles.isFeatureEnabled('featureTwo', this.props.userEmail) ?
						<FeatureTwo /> :
						null
				}

				{
					featureToggles.isFeatureEnabled('featureThree', this.props.userPrivilege) ?
						<FeatureThree /> :
						null
				}

				{
					featureToggles.isFeatureEnabled('featureFour', this.props.targetDate) ?
						<FeatureFour /> :
						null
				}
			</section>
		);
	}
});
