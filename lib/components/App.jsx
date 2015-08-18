var React = require('react');
var FeatureOne = require('./components/FeatureOne');
var FeatureTwo = require('./components/FeatureTwo');
var FeatureThree = require('./components/FeatureThree');

module.exports = React.createClass({
	render: function () {
		return (
			<section className="app">
				<FeatureOne />
				<FeatureTwo />
				<FeatureThree />
			</section>
		);
	}
});
