'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
	query: `lineBySlug(slug: String!): Line`,
	resolver: {
		Query: {
			lineBySlug: {
				description: 'Return a single Line by slug',
				resolverOf: 'Line.findOne',
				async resolver(_, { slug }) {
					const entity = await strapi.services.line.findOne({
						slug,
						_where: {
							active: true
						}
					});
					return sanitizeEntity(entity, { model: strapi.models.line });
				}
			}
		}
	}
};
