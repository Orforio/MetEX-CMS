'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
	query: `movementsBySlugAndDirection(lineSlug: String!, stationSlug: String!, up: Boolean!): [Movement]`,
	resolver: {
		Query: {
			movementsBySlugAndDirection: {
				descriptions: 'Return all Movements associated with given Station in a given direction by slug',
				resolverOf: 'Movement.find',
				async resolver(_, { lineSlug, stationSlug, up }) {
					const direction = up ? 'up' : 'down';
					const oppositeDirection = up ? 'down' : 'up';
					const entity = await strapi.services.movement.find({
						_where: {
							[oppositeDirection + '_station.slug']: stationSlug,
							[oppositeDirection + '_station.line.slug']: lineSlug
						},
						_sort: direction + '_allowed:desc'
					});
					return sanitizeEntity(entity, { model: strapi.models.movement });
				}
			}
		}
	}
};
