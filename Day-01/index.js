require('./my_to_upper_case')
require('./my_to_lower_case')
require('./my_concat')
require('./my_char_at')
require('./my_includes')
require('./is_empty')
require('./my_insert')

var sentence = 'The quick brown fox jumps over the lazy dog.'
var word = 'fox '
var words = sentence.split(' ')

console.log("hello".my_to_upper_case())
console.log("HELLO".my_to_lower_case())
console.log("Hello".my_concat("I'm","so","bad"))
console.log("I'm so bad".my_char_at(5))
console.log(`The word "${word}" ${sentence.my_includes(word)? 'is': 'is not'} in the sentence`)
console.log(`The sentence ${sentence.is_empty()? 'is' : 'is not'} empty`)
console.log(`${sentence.my_insert(word, 16)}`)
console.log(words[3])
console.log(word.substr(1, 2))