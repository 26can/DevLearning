function textan(txt){
  var text = txt;
  this.tl1 = text.length;
  this.tl2 = text.replace(/\s/g, "").length;
  this.wc = text.trim().split(/\s+/).length;
  text = text.split('').sort().join('');
  var freq = {};
    for (var i=0; i<text.length;i++) {
        var character = text.charAt(i);
        if (isNaN(character) && (character !=" ")){

          if (freq[character] )
           {
             freq[character]++;
          } else {
             freq[character] = 1;
          }

        }


    }
  this.cc = freq;
}

module.exports = {
  textan: textan
}
