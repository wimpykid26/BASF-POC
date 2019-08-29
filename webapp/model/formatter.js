sap.ui.define([], function () {
	"use strict";
	return {
		delivery: function (UnitsinStock) {
			let sResult = "";
			if (UnitsinStock > 50) {
				sResult = "Lots Of Stock"
			} else {
				sResult = "Less Of Stock"
			}
			return sResult;
		}
	};
});