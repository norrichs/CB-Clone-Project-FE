const productList = [
	{ audience: "women", category: "swimwear", group: "bikini-sets" },
	{ audience: "women", category: "swimwear", group: "swimsuits" },
	{ audience: "women", category: "swimwear", group: "beachwear" },
	{ audience: "women", category: "skirts", group: "short-skirts" },
	{ audience: "men", category: "suits-blazers", group: "waistcoats" },
	{
		audience: "men",
		category: "suits-blazers",
		group: "sport-coats-jackets",
	},
	{ audience: "men", category: "suits-blazers", group: "suits" },
	{ audience: "men", category: "underwear", group: "briefs" },
	{ audience: "kids", category: "outerwear", group: "jackets" },
	{ audience: "kids", category: "outerwear", group: "vests" },
	{ audience: "kids", category: "outerwear", group: "snowsuits" },
	{ audience: "kids", category: "clothing", group: "tops-t-shirts" },
];

const productTree = [
	{
		women: [
			{ swimwear: ["bikini-sets", "swimsuits", "beachwear"] },
			{ skirts: ["short-skirts"] },
		],
	},
	{
		men: [
			{'t-shirts-tank-tops':["tanks", "short-sleeves", "graphic-printed-t-shirts", "long-sleeves","polo-shirts","basics"]},
			{'shorts': ["sweat-shorts", "denim", "chino-shorts","cargo-shorts", "casual-shorts"]},
			{'shirts': ["casual", "dress", "denim", "short-sleeve-shirts", "flannel","linen"]},
			{'pants': ["chinos", "joggers", "cargo-pants", "dress-pants", "linen"]},
			{'hoodies-sweatshirts': ["hoodies", "sweatshirts"]},
			{'jeans': ["skinny", "slim", "regular", "relaxed"]},
			{'swimwear':[]},
			{ 'suits-blazers': ["waistcoats", "sport-coats-jackets", "suits", "dress-pants", "premium-quality"] },
			{ 'underwear': ["briefs"] },
		],
	},
	{
		kids: [
			{ outerwear: ["jackets", "vests", "snowsuits"] },
			{ clothing: ["tops-t-shirts"] },
		],
	},
];

const notCaptured = [
	{men: [accessories, shoes, jacketsandcoats, cardigansandsweaters, underwear, sportswear, sleepwear, socks, basics, premium, extended]},
	{women: []},
	{kids: []},
	{baby: []}
]

const sbn = productTree.map((audience) => {
	return (
		<li>
			<h3>Object.keys(audience)[0]</h3>
		</li>
	);
});

console.log(sbn);

// let level = 0;

// for(let i=1; i < productList.length; i++){
// 	if(i)

// }
