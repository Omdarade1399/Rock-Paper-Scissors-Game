//* Creating a function to count vowels in a string //

function countVowel(str){
  let count = 0;
  for (const char of str){
        if(char=== "a" || 
           char=== "e" ||  
           char=== "i" ||  
           char=== "o" ||  
           char=== "u"){
          count++;
        }
  }
   return count;
}

 console.log("vowel count of Apna College is " + countVowel("apna college"));