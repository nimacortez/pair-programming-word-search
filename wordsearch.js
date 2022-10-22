const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map((ls) => ls.join(""));
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    };
     const vertical = letters[0].map((_, colIndex) => letters.map((row) => row[colIndex]));
     const verticalJoin = vertical.map((q) => q.join(""));
     for (w of verticalJoin) {
      if (w.includes(word)) return true;
     };
    
    return false;
  };
  
  module.exports = wordSearch;
  
  
  //pair programmed by @nicholasburgess17 & nimacortez