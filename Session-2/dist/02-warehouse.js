"use strict";
class warehouse {
    constructor() {
        this.newStock = {
            itemName: ""
        };
        this.items = [];
    }
    addStock() {
        console.log(this.newStock);
        this.items.push(this.newStock);
        this.newStock = {
            itemName: ""
        };
    }
    set stock(name) {
        console.log("setting " + name);
        this.newStock.itemName = name;
    }
    get ware() {
        return this.items;
    }
}
let wares = new warehouse();
wares.stock = "item 1";
wares.addStock();
wares.stock = "item 2";
wares.addStock();
console.log(wares.ware);
//# sourceMappingURL=02-warehouse.js.map