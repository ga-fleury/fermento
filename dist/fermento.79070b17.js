parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vmLn":[function(require,module,exports) {
function r(){}function a(){createCanvas(800,800);var r=createVector(width/2,height/2),a=["#0F8FE6","#ff7b00","#AB76FF","#FFEA00","#F53800","#06CBAD"];strokeWeight(7),angleMode(DEGREES),noFill();for(var o=10*round(random(0,36)),e=10*round(random(0,36)),t=10*round(random(0,36)),n=10*round(random(0,36)),l=10*round(random(0,36)),c=10*round(random(0,36)),i=10*round(random(0,36)),d=10*round(random(0,36)),s=0;s<2;s++){var f=round(random(0,a.length-1));a.splice(f,1)}for(s=a.length-1;s>0;s--){var u=Math.floor(Math.random()*(s+1)),h=a[s];a[s]=a[u],a[u]=h}translate(r.x,r.y),rotate(o),stroke(a[0]),arc(0,0,170,170,0,90),arc(0,0,110,110,0,90),strokeWeight(24),arc(0,0,140,140,0,90),fill(a[0]),strokeWeight(7),arc(0,70,30,30,90,270),arc(70,0,30,30,180,0),noFill(),rotate(e),stroke(a[1]),arc(0,0,170,170,180,270),arc(0,0,110,110,180,270),strokeWeight(24),arc(0,0,140,140,180,270),strokeWeight(7),fill(a[1]),arc(0,-70,30,30,270,90),arc(-70,0,30,30,0,180),noFill(),rotate(t),fill(a[2]),stroke(a[2]),ellipse(0,10,30,30),rotate(n),noFill(),ellipse(70,70,25,25),rotate(l),arc(0,0,200,200,90,180),arc(0,0,140,140,90,180),arc(0,85,30,30,270,90),arc(-85,0,30,30,180,0),rotate(c),fill(a[3]),stroke(a[3]),ellipse(-40,-100,12,12),rotate(i),noFill(),ellipse(50,0,50,50),rotate(d),arc(0,0,200,200,270,0),arc(0,0,140,140,270,0),arc(0,-85,30,30,90,270),arc(85,0,30,30,0,180),noLoop()}function o(){noCanvas(),redraw()}function e(){keyCode===BACKSPACE&&saveCanvas("myCanvas","png")}
},{}]},{},["vmLn"], null)