// var s1 = "night", s2 = "thing";
 
// if(s1.length !== s2.length) {
//   console.log("They are not anagram");
// }
// else {
// var count1 = [], count2 = [];
//   for(var i=0;i<256;i++) {
//     count1[i] = 0;
//     count2[i] = 0;
//   }
 
//   for(var i=0;i<s1.length;i++) {
//     var ch1 = s1.charCodeAt(i);
//     var ch2 = s2.charCodeAt(i); // 110
//     count1[ch1]++;
//     count2[ch2]++;
//   }
 
//   var flag = true;
 
//   for(var i=0;i<256;i++){
//     if(count1[i] !== count2[i]) {
//       console.log("They are not anagrams");
//       flag = false;
//       break;
//     }
//   }
 
//   if(flag) {
//     console.log("They are anagrams");
//   }
  
// }
function areAnagrams(word1, word2) {
  // Helper function to normalize and sort a word
  function normalizeAndSort(word) {
      return word.toLowerCase().split('').sort().join('');
  }

  // Normalize and sort both words
  const sortedWord1 = normalizeAndSort(word1);
  const sortedWord2 = normalizeAndSort(word2);

  // Compare the sorted words
  return sortedWord1 === sortedWord2;
}

// Example usage:
const word1 = "Listen";
const word2 = "Silent";

if (areAnagrams(word1, word2)) {
  console.log(`"${word1}" and "${word2}" are anagrams.`);
} else {
  console.log(`"${word1}" and "${word2}" are not anagrams.`);
}
