const transformResponse = (resp) => {
	return resp.map((item)=>{
		// console.log('item a_c', item.a_c)
		return {
			a_c: item.a_c.S,
			g_f: item.g_f.S,
			audience: item.audience.S,
			product_category: item.product_category.S,
			product_group: item.product_group.S,
			product_family: item.product_family.S,
			price: item.price.N,
			price_sale: item.price_sale.N,
			altText: item.altText.L.map(el => el.S),
			swatchColors: item.swatchColors.L.map(el => el.S),
			images: item.images.L.map(el => el.S),
			sizes: item.sizes.L.map(el => {
				console.log("transform size",el.S)
				return el.S}),
			items: item.items.L.map(el => el.S),
			copy_desc: item.copy_desc.S,
			copy_list: item.copy_list.L.map(el => {return {title: el.title.S, copy: el.copy.S}}),
			detail_images: item.detail_images.L.map(el => el.S),
			thumb_images: item.thumb_images.L.map(el => el.S)
		}
	});
}
module.exports = transformResponse