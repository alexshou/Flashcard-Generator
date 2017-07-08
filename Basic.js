function BasicCard(front, back) {
  this.front = front;
  this.back = back;
}

var card1 = new BasicCard("First President of USA", "George Washington");
console.log(card1)

module.exports = BasicCard;


