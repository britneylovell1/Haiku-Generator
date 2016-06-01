var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');


function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

var countSyllables = function(phoneme) {
	// Search for digits in phoneme. Return number of syllables.

	var found = phoneme.match(/\d/gi);
	
	if (found) {
		return found.length;
	} 
	
	return 0;
}


function formatData(data){    
   var lines = data.toString().split("\n");
   var wordList = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]; 

   lines.forEach(function(line){ 
   		var word = line.split("  ")[0];
   		var numberOfSyllables = countSyllables(line.split("  ")[1]);
   		
   		wordList[numberOfSyllables].push(word);
    }); 

  	return wordList; 
}


var wordList = formatData(cmudictFile);


function createHaiku(structure){
    var haiku = '';
    
    for (var i = 0; i < structure.length; i++) {
    	var randomIndex = Math.floor(Math.random() * (wordList[structure[i]].length));
    	haiku += wordList[structure[i]][randomIndex] +'\n';
    };
    
    return haiku;
}



module.exports = {
  createHaiku: createHaiku,
};
