function ClozeCard(fullText, cloze) {
  if (fullText.includes(cloze) === false)
  {
  	console.log('"' + cloze + '" ' + "doesn't appear in " + '"' + fullText + '"');
  }
  else
  {
  	this.cloze = cloze;
    this.fullText = fullText;
    this.partial = fullText.replace(cloze, "...");
  }
}

module.exports = ClozeCard;
 