'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
	query: `stationBySlug(lineSlug: String!, stationSlug: String!): Station`,
	resolver: {
		Query: {
			stationBySlug: {
				description: 'Return a single Station by Line and slug',
				resolverOf: 'Station.findOne',
				async resolver(_, { lineSlug, stationSlug }) {
					const entity = await strapi.services.station.findOne({
						slug: stationSlug,
						_where: {
							active: true,
							'line.slug': lineSlug
						}
					});
					return sanitizeEntity(entity, { model: strapi.models.station });
				}
			}
		}
	}
};
