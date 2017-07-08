function ClozeCard(text, cloze) {
  this.cloze = cloze;
  this.fullText = text;
  this.part = text.replace(cloze, "...");
}

var card1 = new ClozeCard("George Washington is the first President of USA", "George Washington");
card1.partial();
console.log(card1);

module.exports = ClozeCard;
 