/**
 * @module FeatureToggleUtils
 */

// Interface.
module.exports = {

	/**
	 * Determines if a 'target symbol' is present in a predefined 'list of symbols'.
	 *
	 * @param  {Array}   symbols 	  - a predefined list of symbols (emails, privileges, etc.)
	 * @param  {string}  targetSymbol - target symbol that MUST occur in the predefined symbol list
	 *
	 * @return {Boolean} denotes if the target symbol is present in the predefined symbol list
	 */
	isEnabledForSymbol: function (symbols, targetSymbol) {
		return !!~symbols.indexOf(targetSymbol);
	},

	/**
	 * Determines if the current date equals or is greater than a specific target date.
	 *
	 * @param  {string}  targetDate - date string of the format YYYY-MM-DD ('2015-08-26')
	 *
	 * @return {Boolean} denotes if the current date equals or is greater than the target date
	 */
	isEnabledFromDate: function (targetDate) {
		var now = Date.now();
		var target = +new Date(targetDate);

		return now >= target;
	}
};
