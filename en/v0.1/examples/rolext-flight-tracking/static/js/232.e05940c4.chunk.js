"use strict";(self.webpackChunkrolext_flight_tracking=self.webpackChunkrolext_flight_tracking||[]).push([[232],{29878:function(r,e,n){n.d(e,{Z:function(){return u}});var a=n(15861),t=n(15671),i=n(43144),o=n(87757);function s(r,e){var n=r.length-e,a=0;do{for(var t=e;t>0;t--)r[a+e]+=r[a],a++;n-=e}while(n>0)}function f(r,e,n){for(var a=0,t=r.length,i=t/n;t>e;){for(var o=e;o>0;--o)r[a+e]+=r[a],++a;t-=e}for(var s=r.slice(),f=0;f<i;++f)for(var c=0;c<n;++c)r[n*f+c]=s[(n-c-1)*i+f]}function c(r,e,n,a,t,i){if(!e||1===e)return r;for(var o=0;o<t.length;++o){if(t[o]%8!==0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(t[o]!==t[0])throw new Error("When decoding with predictor, all samples must have the same size.")}for(var c=t[0]/8,u=2===i?1:t.length,l=0;l<a&&!(l*u*n*c>=r.byteLength);++l){var h=void 0;if(2===e){switch(t[0]){case 8:h=new Uint8Array(r,l*u*n*c,u*n*c);break;case 16:h=new Uint16Array(r,l*u*n*c,u*n*c/2);break;case 32:h=new Uint32Array(r,l*u*n*c,u*n*c/4);break;default:throw new Error("Predictor 2 not allowed with ".concat(t[0]," bits per sample."))}s(h,u)}else 3===e&&f(h=new Uint8Array(r,l*u*n*c,u*n*c),u,c)}return r}var u=function(){function r(){(0,t.Z)(this,r)}return(0,i.Z)(r,[{key:"decode",value:function(){var r=(0,a.Z)(o.mark((function r(e,n){var a,t,i,s,f;return o.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.decodeBlock(n);case 2:if(a=r.sent,1===(t=e.Predictor||1)){r.next=9;break}return i=!e.StripOffsets,s=i?e.TileWidth:e.ImageWidth,f=i?e.TileLength:e.RowsPerStrip||e.ImageLength,r.abrupt("return",c(a,t,s,f,e.BitsPerSample,e.PlanarConfiguration));case 9:return r.abrupt("return",a);case 10:case"end":return r.stop()}}),r,this)})));return function(e,n){return r.apply(this,arguments)}}()}]),r}()},66232:function(r,e,n){n.r(e),n.d(e,{default:function(){return y}});var a=n(60136),t=n(27277),i=n(15671),o=n(43144),s=n(29878),f=new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),c=4017,u=799,l=3406,h=2276,v=1567,d=3784,m=5793,p=2896;function b(r,e){for(var n=0,a=[],t=16;t>0&&!r[t-1];)--t;a.push({children:[],index:0});for(var i,o=a[0],s=0;s<t;s++){for(var f=0;f<r[s];f++){for((o=a.pop()).children[o.index]=e[n];o.index>0;)o=a.pop();for(o.index++,a.push(o);a.length<=s;)a.push(i={children:[],index:0}),o.children[o.index]=i.children,o=i;n++}s+1<t&&(a.push(i={children:[],index:0}),o.children[o.index]=i.children,o=i)}return a[0].children}function w(r,e,n,a,t,i,o,s,c){var u=n.mcusPerLine,l=n.progressive,h=e,v=e,d=0,m=0;function p(){if(m>0)return m--,d>>m&1;if(255===(d=r[v++])){var e=r[v++];if(e)throw new Error("unexpected marker: ".concat((d<<8|e).toString(16)))}return m=7,d>>>7}function b(r){for(var e,n=r;null!==(e=p());){if("number"===typeof(n=n[e]))return n;if("object"!==typeof n)throw new Error("invalid huffman sequence")}return null}function w(r){for(var e=r,n=0;e>0;){var a=p();if(null===a)return;n=n<<1|a,--e}return n}function k(r){var e=w(r);return e>=1<<r-1?e:e+(-1<<r)+1}var g=0;var y,P=0;function x(r,e,n,a,t){var i=n%u,o=(n/u|0)*r.v+a,s=i*r.h+t;e(r,r.blocks[o][s])}function C(r,e,n){var a=n/r.blocksPerLine|0,t=n%r.blocksPerLine;e(r,r.blocks[a][t])}var T,A,L,E,I,U,Z=a.length;U=l?0===i?0===s?function(r,e){var n=b(r.huffmanTableDC),a=0===n?0:k(n)<<c;r.pred+=a,e[0]=r.pred}:function(r,e){e[0]|=p()<<c}:0===s?function(r,e){if(g>0)g--;else for(var n=i,a=o;n<=a;){var t=b(r.huffmanTableAC),s=15&t,u=t>>4;if(0===s){if(u<15){g=w(u)+(1<<u)-1;break}n+=16}else e[f[n+=u]]=k(s)*(1<<c),n++}}:function(r,e){for(var n=i,a=o,t=0;n<=a;){var s=f[n],u=e[s]<0?-1:1;switch(P){case 0:var l=b(r.huffmanTableAC),h=15&l;if(t=l>>4,0===h)t<15?(g=w(t)+(1<<t),P=4):(t=16,P=1);else{if(1!==h)throw new Error("invalid ACn encoding");y=k(h),P=t?2:3}continue;case 1:case 2:e[s]?e[s]+=(p()<<c)*u:0===--t&&(P=2===P?3:0);break;case 3:e[s]?e[s]+=(p()<<c)*u:(e[s]=y<<c,P=0);break;case 4:e[s]&&(e[s]+=(p()<<c)*u)}n++}4===P&&0===--g&&(P=0)}:function(r,e){var n=b(r.huffmanTableDC),a=0===n?0:k(n);r.pred+=a,e[0]=r.pred;for(var t=1;t<64;){var i=b(r.huffmanTableAC),o=15&i,s=i>>4;if(0===o){if(s<15)break;t+=16}else e[f[t+=s]]=k(o),t++}};var D,q,z=0;q=1===Z?a[0].blocksPerLine*a[0].blocksPerColumn:u*n.mcusPerColumn;for(var O=t||q;z<q;){for(A=0;A<Z;A++)a[A].pred=0;if(g=0,1===Z)for(T=a[0],I=0;I<O;I++)C(T,U,z),z++;else for(I=0;I<O;I++){for(A=0;A<Z;A++){var M=T=a[A],S=M.h,j=M.v;for(L=0;L<j;L++)for(E=0;E<S;E++)x(T,U,z,L,E)}if(++z===q)break}if(m=0,(D=r[v]<<8|r[v+1])<65280)throw new Error("marker was not found");if(!(D>=65488&&D<=65495))break;v+=2}return v-h}function k(r,e){var n=[],a=e.blocksPerLine,t=e.blocksPerColumn,i=a<<3,o=new Int32Array(64),s=new Uint8Array(64);function f(r,n,a){var t,i,o,s,f,b,w,k,g,y,P=e.quantizationTable,x=a;for(y=0;y<64;y++)x[y]=r[y]*P[y];for(y=0;y<8;++y){var C=8*y;0!==x[1+C]||0!==x[2+C]||0!==x[3+C]||0!==x[4+C]||0!==x[5+C]||0!==x[6+C]||0!==x[7+C]?(t=m*x[0+C]+128>>8,i=m*x[4+C]+128>>8,o=x[2+C],s=x[6+C],f=p*(x[1+C]-x[7+C])+128>>8,k=p*(x[1+C]+x[7+C])+128>>8,b=x[3+C]<<4,w=x[5+C]<<4,g=t-i+1>>1,t=t+i+1>>1,i=g,g=o*d+s*v+128>>8,o=o*v-s*d+128>>8,s=g,g=f-w+1>>1,f=f+w+1>>1,w=g,g=k+b+1>>1,b=k-b+1>>1,k=g,g=t-s+1>>1,t=t+s+1>>1,s=g,g=i-o+1>>1,i=i+o+1>>1,o=g,g=f*h+k*l+2048>>12,f=f*l-k*h+2048>>12,k=g,g=b*u+w*c+2048>>12,b=b*c-w*u+2048>>12,w=g,x[0+C]=t+k,x[7+C]=t-k,x[1+C]=i+w,x[6+C]=i-w,x[2+C]=o+b,x[5+C]=o-b,x[3+C]=s+f,x[4+C]=s-f):(g=m*x[0+C]+512>>10,x[0+C]=g,x[1+C]=g,x[2+C]=g,x[3+C]=g,x[4+C]=g,x[5+C]=g,x[6+C]=g,x[7+C]=g)}for(y=0;y<8;++y){var T=y;0!==x[8+T]||0!==x[16+T]||0!==x[24+T]||0!==x[32+T]||0!==x[40+T]||0!==x[48+T]||0!==x[56+T]?(t=m*x[0+T]+2048>>12,i=m*x[32+T]+2048>>12,o=x[16+T],s=x[48+T],f=p*(x[8+T]-x[56+T])+2048>>12,k=p*(x[8+T]+x[56+T])+2048>>12,b=x[24+T],w=x[40+T],g=t-i+1>>1,t=t+i+1>>1,i=g,g=o*d+s*v+2048>>12,o=o*v-s*d+2048>>12,s=g,g=f-w+1>>1,f=f+w+1>>1,w=g,g=k+b+1>>1,b=k-b+1>>1,k=g,g=t-s+1>>1,t=t+s+1>>1,s=g,g=i-o+1>>1,i=i+o+1>>1,o=g,g=f*h+k*l+2048>>12,f=f*l-k*h+2048>>12,k=g,g=b*u+w*c+2048>>12,b=b*c-w*u+2048>>12,w=g,x[0+T]=t+k,x[56+T]=t-k,x[8+T]=i+w,x[48+T]=i-w,x[16+T]=o+b,x[40+T]=o-b,x[24+T]=s+f,x[32+T]=s-f):(g=m*a[y+0]+8192>>14,x[0+T]=g,x[8+T]=g,x[16+T]=g,x[24+T]=g,x[32+T]=g,x[40+T]=g,x[48+T]=g,x[56+T]=g)}for(y=0;y<64;++y){var A=128+(x[y]+8>>4);n[y]=A<0?0:A>255?255:A}}for(var b=0;b<t;b++){for(var w=b<<3,k=0;k<8;k++)n.push(new Uint8Array(i));for(var g=0;g<a;g++){f(e.blocks[b][g],s,o);for(var y=0,P=g<<3,x=0;x<8;x++)for(var C=n[w+x],T=0;T<8;T++)C[P+T]=s[y++]}}return n}var g=function(){function r(){(0,i.Z)(this,r),this.jfif=null,this.adobe=null,this.quantizationTables=[],this.huffmanTablesAC=[],this.huffmanTablesDC=[],this.resetFrames()}return(0,o.Z)(r,[{key:"resetFrames",value:function(){this.frames=[]}},{key:"parse",value:function(r){var e=0;function n(){var n=r[e]<<8|r[e+1];return e+=2,n}function a(){var a=n(),t=r.subarray(e,e+a-2);return e+=t.length,t}function t(r){var e,n,a=0,t=0;for(n in r.components)r.components.hasOwnProperty(n)&&(a<(e=r.components[n]).h&&(a=e.h),t<e.v&&(t=e.v));var i=Math.ceil(r.samplesPerLine/8/a),o=Math.ceil(r.scanLines/8/t);for(n in r.components)if(r.components.hasOwnProperty(n)){e=r.components[n];for(var s=Math.ceil(Math.ceil(r.samplesPerLine/8)*e.h/a),f=Math.ceil(Math.ceil(r.scanLines/8)*e.v/t),c=i*e.h,u=o*e.v,l=[],h=0;h<u;h++){for(var v=[],d=0;d<c;d++)v.push(new Int32Array(64));l.push(v)}e.blocksPerLine=s,e.blocksPerColumn=f,e.blocks=l}r.maxH=a,r.maxV=t,r.mcusPerLine=i,r.mcusPerColumn=o}var i=n();if(65496!==i)throw new Error("SOI not found");for(i=n();65497!==i;){switch(i){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var o=a();65504===i&&74===o[0]&&70===o[1]&&73===o[2]&&70===o[3]&&0===o[4]&&(this.jfif={version:{major:o[5],minor:o[6]},densityUnits:o[7],xDensity:o[8]<<8|o[9],yDensity:o[10]<<8|o[11],thumbWidth:o[12],thumbHeight:o[13],thumbData:o.subarray(14,14+3*o[12]*o[13])}),65518===i&&65===o[0]&&100===o[1]&&111===o[2]&&98===o[3]&&101===o[4]&&0===o[5]&&(this.adobe={version:o[6],flags0:o[7]<<8|o[8],flags1:o[9]<<8|o[10],transformCode:o[11]});break;case 65499:for(var s=n()+e-2;e<s;){var c=r[e++],u=new Int32Array(64);if(c>>4===0)for(var l=0;l<64;l++){u[f[l]]=r[e++]}else{if(c>>4!==1)throw new Error("DQT: invalid table spec");for(var h=0;h<64;h++){u[f[h]]=n()}}this.quantizationTables[15&c]=u}break;case 65472:case 65473:case 65474:n();for(var v={extended:65473===i,progressive:65474===i,precision:r[e++],scanLines:n(),samplesPerLine:n(),components:{},componentsOrder:[]},d=r[e++],m=void 0,p=0;p<d;p++){m=r[e];var k=r[e+1]>>4,g=15&r[e+1],y=r[e+2];v.componentsOrder.push(m),v.components[m]={h:k,v:g,quantizationIdx:y},e+=3}t(v),this.frames.push(v);break;case 65476:for(var P=n(),x=2;x<P;){for(var C=r[e++],T=new Uint8Array(16),A=0,L=0;L<16;L++,e++)T[L]=r[e],A+=T[L];for(var E=new Uint8Array(A),I=0;I<A;I++,e++)E[I]=r[e];x+=17+A,C>>4===0?this.huffmanTablesDC[15&C]=b(T,E):this.huffmanTablesAC[15&C]=b(T,E)}break;case 65501:n(),this.resetInterval=n();break;case 65498:n();for(var U=r[e++],Z=[],D=this.frames[0],q=0;q<U;q++){var z=D.components[r[e++]],O=r[e++];z.huffmanTableDC=this.huffmanTablesDC[O>>4],z.huffmanTableAC=this.huffmanTablesAC[15&O],Z.push(z)}var M=r[e++],S=r[e++],j=r[e++],W=w(r,e,D,Z,this.resetInterval,M,S,j>>4,15&j);e+=W;break;case 65535:255!==r[e]&&e--;break;default:if(255===r[e-3]&&r[e-2]>=192&&r[e-2]<=254){e-=3;break}throw new Error("unknown JPEG marker ".concat(i.toString(16)))}i=n()}}},{key:"getResult",value:function(){var r=this.frames;if(0===this.frames.length)throw new Error("no frames were decoded");this.frames.length>1&&console.warn("more than one frame is not supported");for(var e=0;e<this.frames.length;e++)for(var n=this.frames[e].components,a=0,t=Object.keys(n);a<t.length;a++){var i=t[a];n[i].quantizationTable=this.quantizationTables[n[i].quantizationIdx],delete n[i].quantizationIdx}for(var o=r[0],s=o.components,f=o.componentsOrder,c=[],u=o.samplesPerLine,l=o.scanLines,h=0;h<f.length;h++){var v=s[f[h]];c.push({lines:k(0,v),scaleX:v.h/o.maxH,scaleY:v.v/o.maxV})}for(var d=new Uint8Array(u*l*c.length),m=0,p=0;p<l;++p)for(var b=0;b<u;++b)for(var w=0;w<c.length;++w){var g=c[w];d[m]=g.lines[0|p*g.scaleY][0|b*g.scaleX],++m}return d}}]),r}(),y=function(r){(0,a.Z)(n,r);var e=(0,t.Z)(n);function n(r){var a;return(0,i.Z)(this,n),(a=e.call(this)).reader=new g,r.JPEGTables&&a.reader.parse(r.JPEGTables),a}return(0,o.Z)(n,[{key:"decodeBlock",value:function(r){return this.reader.resetFrames(),this.reader.parse(new Uint8Array(r)),this.reader.getResult().buffer}}]),n}(s.Z)}}]);
//# sourceMappingURL=232.e05940c4.chunk.js.map