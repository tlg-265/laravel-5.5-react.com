/**
 * Goal: * 
 * While: "$ npm run watch" is running,
 * whenever some of the files: /template/template-XX.json is modified,
 * the current script should be executed.
 * To the variable: "tmplate" should be assigned the name of that file,
 * for example: 'template-02.json'
 */

var template = '###TBD###';
var watch = require('node-watch');
watch('./', { recursive: true }, function(evt, name) {
  console.log('%s changed.', name);
});

// console.log((template1['text-color']));
// console.log(`The template: ${template} was modified.`);
