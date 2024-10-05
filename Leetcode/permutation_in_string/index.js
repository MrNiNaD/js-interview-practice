/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const createStringMap = (str, start, end) => {
      const map = {}
      
      for (let i = start; i <= end; i++) {
          const letter = str[i];
          map[letter] = (map[letter] ?? 0) + 1;
      }  
      
      return map;
  }
  
  const s1Map = createStringMap(s1, 0, s1.length - 1);
  let i = 0;
  let j = s1.length - 1;
  
  while (j < s2.length) {
      const s2Map = createStringMap(s2, i, j);
      let match = true;
      
      for (let k in s2Map) {
          if (s2Map[k] !== s1Map[k]) {
              match = false;
              break;
          }
      }
      
      if (match) {
          return true
      }

      i++;
      j++;
  }
  
  return false;
};