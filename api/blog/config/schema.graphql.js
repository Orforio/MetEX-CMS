'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
	query: `blogBySlug(slug: String!): Blog`,
	resolver: {
		Query: {
			blogBySlug: {
				description: 'Return a single Blog by slug',
				resolverOf: 'Blog.findOne',
				async resolver(_, { slug }) {
					const entity = await strapi.services.blog.findOne({ slug });
					return sanitizeEntity(entity, { model: strapi.models.blog });
				}
			}
		}
	}
};
