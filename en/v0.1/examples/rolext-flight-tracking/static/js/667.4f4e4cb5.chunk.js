"use strict";(self.webpackChunkrolext_flight_tracking=self.webpackChunkrolext_flight_tracking||[]).push([[667],{29878:function(e,r,t){t.d(r,{Z:function(){return s}});var n=t(15861),a=t(15671),i=t(43144),o=t(87757);function c(e,r){var t=e.length-r,n=0;do{for(var a=r;a>0;a--)e[n+r]+=e[n],n++;t-=r}while(t>0)}function u(e,r,t){for(var n=0,a=e.length,i=a/t;a>r;){for(var o=r;o>0;--o)e[n+r]+=e[n],++n;a-=r}for(var c=e.slice(),u=0;u<i;++u)for(var f=0;f<t;++f)e[t*u+f]=c[(t-f-1)*i+u]}function f(e,r,t,n,a,i){if(!r||1===r)return e;for(var o=0;o<a.length;++o){if(a[o]%8!==0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(a[o]!==a[0])throw new Error("When decoding with predictor, all samples must have the same size.")}for(var f=a[0]/8,s=2===i?1:a.length,h=0;h<n&&!(h*s*t*f>=e.byteLength);++h){var d=void 0;if(2===r){switch(a[0]){case 8:d=new Uint8Array(e,h*s*t*f,s*t*f);break;case 16:d=new Uint16Array(e,h*s*t*f,s*t*f/2);break;case 32:d=new Uint32Array(e,h*s*t*f,s*t*f/4);break;default:throw new Error("Predictor 2 not allowed with ".concat(a[0]," bits per sample."))}c(d,s)}else 3===r&&u(d=new Uint8Array(e,h*s*t*f,s*t*f),s,f)}return e}var s=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,[{key:"decode",value:function(){var e=(0,n.Z)(o.mark((function e(r,t){var n,a,i,c,u;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.decodeBlock(t);case 2:if(n=e.sent,1===(a=r.Predictor||1)){e.next=9;break}return i=!r.StripOffsets,c=i?r.TileWidth:r.ImageWidth,u=i?r.TileLength:r.RowsPerStrip||r.ImageLength,e.abrupt("return",f(n,a,c,u,r.BitsPerSample,r.PlanarConfiguration));case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}()}]),e}()},40667:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(15861),a=t(15671),i=t(43144),o=t(60136),c=t(27277),u=t(87757),f=function(e){(0,o.Z)(t,e);var r=(0,c.Z)(t);function t(){var e;if((0,a.Z)(this,t),e=r.call(this),"undefined"===typeof createImageBitmap)throw new Error("Cannot decode WebImage as `createImageBitmap` is not available");if("undefined"===typeof document&&"undefined"===typeof OffscreenCanvas)throw new Error("Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available");return e}return(0,i.Z)(t,[{key:"decode",value:function(){var e=(0,n.Z)(u.mark((function e(r,t){var n,a,i,o;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Blob([t]),e.next=3,createImageBitmap(n);case 3:return a=e.sent,"undefined"!==typeof document?((i=document.createElement("canvas")).width=a.width,i.height=a.height):i=new OffscreenCanvas(a.width,a.height),(o=i.getContext("2d")).drawImage(a,0,0),e.abrupt("return",o.getImageData(0,0,a.width,a.height).data.buffer);case 8:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()}]),t}(t(29878).Z)}}]);
//# sourceMappingURL=667.4f4e4cb5.chunk.js.map