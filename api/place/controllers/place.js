'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
	async findOneBySlug(ctx) {
		const slug = ctx.params.slug || ctx.params._slug;

		const slugSearch = await strapi.services.place.find({ slug });

		if (slugSearch.length === 1) {
			const entity = await strapi.services.place.findOne({ id: slugSearch[0].id });
			return sanitizeEntity(entity, { model: strapi.models.place });
		} else {
			return;
		}
	}
};
