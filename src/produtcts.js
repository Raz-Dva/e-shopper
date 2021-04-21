let obj = {
    "products": [
      {
        "id":1,
        "imgUrl": "https://image.shutterstock.com/z/stock-photo-pair-of-white-sneakers-isolated-on-white-background-sport-shoes-712448377.jpg",
        "name": "Sport Shoes",
        "price": 110
      },
      {
        "id":2,
        "imgUrl": "https://image.shutterstock.com/z/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg",
        "name": "Red SNEAKER",
        "price": 91
      }
    ]
}
var obj = {
    "products": [
      {
        "id":1,        
        "name": "Sport Shoes",
        "price": 110
      },
      {
        "id":2,
        "name": "Red SNEAKER",
        "price": 91
      }
    ]
};
obj.products.forEach((ind)=>{
    if(ind.id == 2){console.log(ind.id)}
})