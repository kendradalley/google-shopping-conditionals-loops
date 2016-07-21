var data = require('../products.json');

// 1.) Go through the items and find all results that have kind of shopping#product. 
//Print the count of these results. Where else is this count information stored in the search results? 
//we are items is an array use (i.e. data array then items array
//Navigate down the levels of data structure data > items > kind

// var shoppingCount = 0;

// for(var i = 0; i < data.items.length; i++) {
// 	var item = data.items[i]; //item is an object
// 	if(item.kind === 'shopping#product')
// 		shoppingCount++ //increment the count plus one
// }
// console.log(shoppingCount);


// 2.) Print the title all items with a backorder availability in inventories.


for(var i = 0; i < data.items.length; i++) {
	var item = data.items[i];
	if(item.product.inventories[0].availability === 'backorder')
	
}
console.log(item.product.title);

// 3.) Print the title all items with more than one image link.

// for(var i = 0; i < data.items.length; i++) {
// 	var item = data.items[i];
// 	if(item.product.images.length > 2){
// 	console.log(item.product.title);
// }
// }

// 4.) Print all "Canon" products in the items (careful with case sensitivity).
//print out object

// for(var i = 0; i < data.items.length; i++) {
// 	var item = data.items[i];
// 	if(item.product.brand === 'Canon'){
// 	console.log(item.product.title);
// }
// }
// 5.) Print all items that have an author name of "eBay" and are brand "Canon".
//print out the object
// for(var i = 0; i < data.items.length; i++) {
// 	var item = data.items[i];
// 	if(item.product.author.name === 'eBay' && item.product.brand === "Canon"){
// 	console.log(item.product.title);
// }
// }

// 6.) Print all the products with their brand, price, and an image link
for(var i = 0; i < data.items.length; i++) {
	var item = data.items[i];

	console.log(item.product.brand,item.product.inventories[0].price,item.product.images[0].link);
	// console.log(item.product.inventories[0].price);
	// console.log(item.product.images.link);
}


// console.log(data.items);