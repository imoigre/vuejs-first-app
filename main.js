function car(name, model, owner, year, phone, image)  {
  return {
    name, model, owner, year, phone, image
  }
}

const cars = [
  {name: "Ford", model: "Focus", owner: "Imoigre", year: 2018, phone: "+38 068 316 27 26", image: "images/focus.jpg"},
  {name: "Ford", model: "Mustang", owner: "Alexey", year: 1968, phone: "+38 063 316 27 26", image: "images/mustang.jpg"},
  {name: "Ford", model: "Fusion", owner: "Vladimir", year: 2015, phone: "+38 073 316 27 26", image: "images/fusion.jpg"}
]

new Vue({
 el: '#app',
 data: {
   cars: cars
 }
})