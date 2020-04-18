/**
 * Complete the implementation of parseStory.
 * 
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 * 
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 * 
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 * 
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 * 
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
// PARSING !! 
function parseStory(rawStory) {
    let array = [];
    let newStory = rawStory;
    let splitting = newStory.split(" "); // splitting the text
    //console.log(splitting)
    let noun = /n(?=])/ ;
    let verb = /v(?=])/ ;
    let adjective =/a(?=])/;
   
    for (let i=0; i<splitting.length; i++){
      let word = splitting[i]
      let lastLetter = word[word.length-1]
      let punctuation;
      if (lastLetter== "," || lastLetter== ".") {
        word = word.slice(0, word.length-1)
      }
      if(noun.test(word)) {
        let replaceN = word.replace('[n]','');
        array.push(newArray(replaceN,'noun'));
  
      } else if (verb.test(word)){
        let replaceV = word.replace('[v]','');
        array.push(newArray(replaceV,'verb'));
  
      } else if (adjective.test(word)){ 
        let replaceA = word.replace('[a]','');
        array.push(newArray(replaceA,'adjective'));
        
      }
      else {
        array.push(newArray(word));
      }
      if (lastLetter == "." || lastLetter == ",") {
        array.push(newArray(lastLetter))
      }
    }
    function newArray(theWord,pos){
      let newObj = {};
      //Tugba: I changed this
      //newObj [theWord] = pos; 
      newObj["word"]= theWord
      if (pos) {
        newObj["pos"]= pos
      } 
      return newObj;
    }
    return array; 
  }
  
    //return newStory;
  
  /**
   * All your other JavaScript code goes here, inside the function. Don't worry about
   * the `then` and `async` syntax for now.
   * 
   * You'll want to use the results of parseStory() to display the story on the page.
   */
  getRawStory().then(parseStory).then((processedStory) => {
    console.log(processedStory);
  });
  