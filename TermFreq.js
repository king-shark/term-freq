class TermFreq{
	constructor(t) {
    	this.wordMap = this.countTerms(t);
	}
	get terms(){
		return Object.keys(this.wordMap).sort();
	}
	getCount(t){
		return this.wordMap[t];
	}
	countTerms(text){
		var wordMap = {};
		if (text == ""){
			return wordMap;
		}
		//add regex to split
		var patt = /[^\w'-]+/;
		var textArray = text.split(patt);
		for (var x = 0; x < textArray.length; x++){
			if (textArray[x] != ""){
				if (wordMap[textArray[x].toLowerCase()] == undefined){
					wordMap[textArray[x].toLowerCase()] = 1;
				} else{
					wordMap[textArray[x].toLowerCase()]++;
				}
			}
		}
		return wordMap;
	}
}