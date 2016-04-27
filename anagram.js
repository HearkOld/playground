// Super short function to produce an anagrammed word
anagram=function(r){function n(r){for(var n,t,a=r.length;0!==a;)t=Math.floor(Math.random()*a),a-=1,n=r[a],r[a]=r[t],r[t]=n;return r}function t(r){var n;return this.y=r,n=r[Math.floor(Math.random()*r.length)]}for(var a=[],o=[],h=0;h<r.length;h++)o.push(r[h]);for(var f=0;f<o.length;f++)a.push(t(o[f]));return n(a).join("")};
