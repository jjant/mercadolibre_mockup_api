var fetch = require('node-fetch');

const baseUrl = 'https://api.mercadolibre.com';

async function queryItems(query) {
	const url = `${baseUrl}/sites/MLA/search?q=${query}`;
  const maxResultCount = 4;

	const response = await fetch(url).then(res => res.json());
	const items = response.results.slice(0, maxResultCount).map(product => ({
		id: product.id,
		title: product.title,
		price: {
			currency: product.currency_id,
			amount: product.price,
		},
		picture: product.thumbnail,
		condition: product.condition,
		free_shipping: product.shipping.free_shipping,
		location: product.address.city_name,
	}));

	return {
		items,
	};
};

async function queryItem(itemId) {
  const productUrl = `${baseUrl}/items/${itemId}`;
  const descriptionUrl = `${productUrl}/description`;

  const product = await fetch(productUrl).then(res => res.json())
  const description = await fetch(descriptionUrl).then(res => res.json());
  const categories = await _queryCategories(product.category_id);

  return {
    item: {
      id: product.id,
      title: product.title,
      price: {
        currency: product.currency_id,
        amount: product.price,
      },
      picture: (product.pictures[0] && product.pictures[0].url) || defaultImage,
      condition: product.condition,
      free_shipping: product.shipping.free_shipping,
      sold_quantity: product.sold_quantity,
      description: {
        html: description.text,
        plain_text: description.plain_text,
      },
      categories,
    }
  };
}

async function _queryCategories(categoryId) {
  const categoriesUrl = `${baseUrl}/categories/${categoryId}`;

  const category = await fetch(categoriesUrl).then(res => res.json());
  const categories = category.path_from_root;

  return categories;
}

module.exports = {
  queryItems,
  queryItem,
};
