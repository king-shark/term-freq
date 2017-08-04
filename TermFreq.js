class TermFreq{
	constructor(t) {
    	this.wordMap = this.countTerms(t);
	}
	get terms(){
		return Object.keys(this.wordMap);
	}
	getCount(t){
		return this.wordMap[t];
	}
	countTerms(text){
		var wordMap = {};
		if (text == ""){
			return wordMap;
		}
		var textArray = text.split(" ");
		for (var x = 0; x < textArray.length; x++){
			if (textArray[x] != ""){
				if (wordMap[textArray[x]] == undefined){
					wordMap[textArray[x]] = 1;
				}
				else{
					wordMap[textArray[x]]++;
				}
			}
		}
		return wordMap;
	}
}