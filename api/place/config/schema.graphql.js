'use strict';

module.exports = {
	query: `placeBySlug(slug: String!): Place`,
	resolver: {
		Query: {
			placeBySlug: {
				description: 'Return a single Place by slug',
				resolver: 'application::place.place.findOneBySlug'
			},
		}
	}
};
