function ClozeCard(text, cloze) {
  this.cloze = cloze;
  this.text = text;
  this.part = text.replace(cloze, "...");
}

var card1 = new ClozeCard("George Washington is the first President of USA", "George Washington");
console.log(card1);

module.exports = ClozeCard;
 