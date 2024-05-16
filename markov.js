
class MarkovMachine {

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.createChains();
  }

  createChains() {
    let chains = new Map(); 
  
    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;
      
   
      if (chains.has(word)) {
        chains.get(word).push(nextWord); 
      } else {
        chains.set(word, [nextWord]); 
      }
    }
  
    this.chains = chains; 
  }


  static choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }


  makeText(numWords = 150) {
    let keys = Array.from(this.chains.keys());
    let key = MarkovMachine.choice(keys);
    let out = [];

    while (out.length < numWords && key !== null) {
      out.push(key);
      key = MarkovMachine.choice(this.chains.get(key));
    }

    return out.join(" ");
  }
}


module.exports = {
  MarkovMachine,
};
