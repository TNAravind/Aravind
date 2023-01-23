class FoodApp {
    static no = 0;
    constructor(item, rate, quantity, total) {
        this.id = ++FoodApp.no;
        this.item = item;
        this.rate = rate;
        this.quantity = quantity;
        this.total = total;
    }
}

class repoFood {
    
    foodArray = [];

    addfood = (data) => this.foodArray.push(data);

    getfood = () => this.foodArray;
}

const obj = new repoFood();

// obj.addfood(new Fooddef("biriyani","mayura",4,400))

// const hahah = obj.getfood();

// console.log(hahah)?