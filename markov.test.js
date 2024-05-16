const { MarkovMachine } = require("./markov");


describe('markov machine', function () {
  test('makes chains', function () {
    let mm = new MarkovMachine("aa bb cc aa BB aa BB");

    expect(mm.chains).toEqual(new Map([
      ["aa", ["bb", "BB", "BB"]],
      ["bb", ["cc"]],
      ["cc", ["aa"]],
      ["BB", ["aa", null]]]));
  });


  test("pick choices", function(){
    expect(MarkovMachine.choice([2,2,2])).toEqual [2];
    expect([4,5,6]).toContain(MarkovMachine.choice([4,5,6]))
  })
 

 test("generate valid texts", () => {
let words = ["the cat", "cat in", "in the", "the hat", "hat "];
let mm = new MarkovMachine("the cat in the hat");
let output = mm.makeText();
expect (output.endsWith("hat")).not.toBe(false);
let outputWords = mm.makeText().split(/[ \r\n]+/);
for (let i = 0; i < outputWords.length - 1; i++) {
      expect(words).toContain(outputWords[i] + " " + outputWords[i + 1]);
    }
 }
 );


test("restricts the length", ()=>{
  let mm = new MarkovMachine("the cat in the hat");
  let output = mm.makeText(2);
  let outputWords = output.split(/[ \r\n]+/);
expect([1,2]).toBe === (outputWords.length);
})
});