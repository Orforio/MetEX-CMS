'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
	lifecycles: {
		beforeCreate: async (data) => {
			if (data.up_station && data.down_station) {
				data.stations = [data.up_station, data.down_station];
			}
		},
		beforeUpdate: async (params, data) => {
			if (data.up_station && data.down_station) {
				data.stations = [data.up_station, data.down_station];
			}
		}
	}
};
