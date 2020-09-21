'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
	query: `placeBySlug(slug: String!): Place`,
	resolver: {
		Query: {
			placeBySlug: {
				description: 'Return a single Place by slug',
				resolverOf: 'Place.findOne',
				async resolver(_, { slug }) {
					const entity = await strapi.services.place.findOne({ slug });
					return sanitizeEntity(entity, { model: strapi.models.place });
				},
			},
		}
	}
};
