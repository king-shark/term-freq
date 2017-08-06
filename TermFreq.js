class TermFreq{
	constructor(t) {
    	this.wordMap = this.countTerms(t);
	}
	get terms(){
		return Object.keys(this.wordMap).sort();
	}
	getTerms(filterCount, sortByName, sortAscending) {
		var terms = [];
		var oldTerms = this.terms;

		if (filterCount != null && filterCount > 0) {
			for (var i = 0; i < oldTerms.length; i++) {
				var term = oldTerms[i];
				if (this.wordMap[term] >= filterCount) {
					terms.push(term);
				}
			}
		} else {
			terms = [].concat(oldTerms);
		}

		if (sortByName) {
			return sortAscending ? terms.sort() : terms.reverse();
		}

		//not sorting by name, sort by count..
		var termsByCountMap = {};
		for (var i = 0; i < terms.length; i++) {
			var term = terms[i];
			var count = this.wordMap[term];
			var termList = termsByCountMap[count];
			if (termList == null) {
				termList = [];
				termsByCountMap[count] = termList;
			}
			termList.push(term);			
		}

		var sortFunction = function(a,b) { return a - b; };		
		terms = [];
		var termCounts = Object.keys(termsByCountMap);
		termCounts = sortAscending ? termCounts.sort(sortFunction) : termCounts.reverse(sortFunction);
		for (var i = 0; i < termCounts.length; i++) {
			var termCount = termCounts[i];
			var termList = termsByCountMap[termCount];
			terms = terms.concat(termList);
		}
		return terms;
	}
	getCount(t){
		return this.wordMap[t];
	}
	countTerms(text){
		var wordMap = {};
		if (text == "" || text == null){
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