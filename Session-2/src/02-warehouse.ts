interface item	{
	itemName: string;
}

class warehouse	{
	private newStock: item = {
		itemName: ""
	}
	private items: Array<item> = [];
	addStock()	{
		console.log(this.newStock);
		this.items.push(this.newStock);
		this.newStock = {
			itemName: ""
		};
	}
	set stock(name: string)	{
		console.log("setting "  + name);
		this.newStock.itemName = name;
	}
	get ware(): Array<item>	{
		return this.items;
	}
}

let wares = new warehouse();
wares.stock = "item 1";
wares.addStock();
wares.stock = "item 2";
wares.addStock();
console.log(wares.ware) // trying to figure out why the items are blank when returning the array
