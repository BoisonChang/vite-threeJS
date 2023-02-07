(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Do="149",Li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},af=0,ll=1,of=2,du=1,lf=2,Er=3,Yn=0,Bt=1,Rn=2,qn=0,Ji=1,cl=2,ul=3,hl=4,cf=5,Yi=100,uf=101,hf=102,fl=103,dl=104,ff=200,df=201,pf=202,mf=203,pu=204,mu=205,gf=206,_f=207,xf=208,vf=209,yf=210,Mf=0,Sf=1,bf=2,ro=3,wf=4,Tf=5,Ef=6,Af=7,gu=0,Cf=1,Pf=2,On=0,Lf=1,Df=2,Rf=3,If=4,Of=5,_u=300,ir=301,rr=302,so=303,ao=304,Us=306,oo=1e3,on=1001,lo=1002,bt=1003,pl=1004,Ks=1005,Zt=1006,Ff=1007,Or=1008,yi=1009,Nf=1010,Uf=1011,xu=1012,zf=1013,fi=1014,di=1015,Fr=1016,kf=1017,Bf=1018,Qi=1020,Gf=1021,ln=1023,Vf=1024,Hf=1025,mi=1026,sr=1027,Wf=1028,qf=1029,Xf=1030,jf=1031,Yf=1033,Js=33776,Qs=33777,ea=33778,ta=33779,ml=35840,gl=35841,_l=35842,xl=35843,$f=36196,vl=37492,yl=37496,Ml=37808,Sl=37809,bl=37810,wl=37811,Tl=37812,El=37813,Al=37814,Cl=37815,Pl=37816,Ll=37817,Dl=37818,Rl=37819,Il=37820,Ol=37821,na=36492,Zf=36283,Fl=36284,Nl=36285,Ul=36286,Mi=3e3,Ge=3001,Kf=3200,Jf=3201,vu=0,Qf=1,un="srgb",Nr="srgb-linear",ia=7680,ed=519,zl=35044,kl="300 es",co=1035;class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ra=Math.PI/180,Bl=180/Math.PI;function Wr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dt[s&255]+dt[s>>8&255]+dt[s>>16&255]+dt[s>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]).toLowerCase()}function Et(s,e,t){return Math.max(e,Math.min(t,s))}function td(s,e){return(s%e+e)%e}function sa(s,e,t){return(1-t)*s+t*e}function Gl(s){return(s&s-1)===0&&s!==0}function uo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Kr(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ot(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],m=n[5],g=n[8],h=i[0],p=i[3],_=i[6],M=i[1],y=i[4],S=i[7],x=i[2],E=i[5],P=i[8];return r[0]=o*h+a*M+c*x,r[3]=o*p+a*y+c*E,r[6]=o*_+a*S+c*P,r[1]=l*h+u*M+d*x,r[4]=l*p+u*y+d*E,r[7]=l*_+u*S+d*P,r[2]=f*h+m*M+g*x,r[5]=f*p+m*y+g*E,r[8]=f*_+m*S+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*r,m=l*r-o*c,g=t*d+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/g;return e[0]=d*h,e[1]=(i*l-u*n)*h,e[2]=(a*n-i*o)*h,e[3]=f*h,e[4]=(u*t-i*c)*h,e[5]=(i*r-a*t)*h,e[6]=m*h,e[7]=(n*c-l*t)*h,e[8]=(o*t-n*r)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new kt;function yu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const oa={[un]:{[Nr]:gi},[Nr]:{[un]:xs}},Mt={legacyMode:!0,get workingColorSpace(){return Nr},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(oa[e]&&oa[e][t]!==void 0){const n=oa[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qe={r:0,g:0,b:0},nn={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function la(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Qr(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Mt.workingColorSpace){if(e=td(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=la(o,r,e+1/3),this.g=la(o,r,e),this.b=la(o,r,e-1/3)}return Mt.toWorkingColorSpace(this,i),this}setStyle(e,t=un){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Mt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Mt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Mt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Mt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=un){const n=Mu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return Mt.fromWorkingColorSpace(Qr(this,Qe),e),Et(Qe.r*255,0,255)<<16^Et(Qe.g*255,0,255)<<8^Et(Qe.b*255,0,255)<<0}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(Qr(this,Qe),t);const n=Qe.r,i=Qe.g,r=Qe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(Qr(this,Qe),t),e.r=Qe.r,e.g=Qe.g,e.b=Qe.b,e}getStyle(e=un){return Mt.fromWorkingColorSpace(Qr(this,Qe),e),e!==un?`color(${e} ${Qe.r} ${Qe.g} ${Qe.b})`:`rgb(${Qe.r*255|0},${Qe.g*255|0},${Qe.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(nn),nn.h+=e,nn.s+=t,nn.l+=n,this.setHSL(nn.h,nn.s,nn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nn),e.getHSL(Jr);const n=sa(nn.h,Jr.h,t),i=sa(nn.s,Jr.s,t),r=sa(nn.l,Jr.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Be.NAMES=Mu;let Ri;class Su{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ri===void 0&&(Ri=Ur("canvas")),Ri.width=e.width,Ri.height=e.height;const n=Ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class bu{constructor(e=null){this.isSource=!0,this.uuid=Wr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ca(i[o].image)):r.push(ca(i[o]))}else r=ca(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ca(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Su.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nd=0;class Ct extends Ai{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=on,i=on,r=Zt,o=Or,a=ln,c=yi,l=Ct.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Wr(),this.name="",this.source=new bu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_u)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oo:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oo:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=_u;Ct.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],g=c[9],h=c[2],p=c[6],_=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-h)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+h)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,S=(m+1)/2,x=(_+1)/2,E=(u+f)/4,P=(d+h)/4,v=(g+p)/4;return y>S&&y>x?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=E/n,r=P/n):S>x?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=E/i,r=v/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=P/r,i=v/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(d-h)*(d-h)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-h)/M,this.z=(f-u)/M,this.w=Math.acos((l+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Si extends Ai{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wu extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class id extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3];const f=r[o+0],m=r[o+1],g=r[o+2],h=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=h;return}if(d!==h||c!==f||l!==m||u!==g){let p=1-a;const _=c*f+l*m+u*g+d*h,M=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const x=Math.sqrt(y),E=Math.atan2(x,_*M);p=Math.sin(p*E)/x,a=Math.sin(a*E)/x}const S=a*M;if(c=c*p+f*S,l=l*p+m*S,u=u*p+g*S,d=d*p+h*S,p===1-a){const x=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=x,l*=x,u*=x,d*=x}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*d+c*m-l*f,e[t+1]=c*g+u*f+l*d-a*m,e[t+2]=l*g+u*m+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),d=a(r/2),f=c(n/2),m=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"YZX":this._x=f*u*d+l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d-f*m*g;break;case"XZY":this._x=f*u*d-l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-r*i,d=c*i+r*n-o*t,f=-r*t-o*n-a*i;return this.x=l*c+f*-r+u*-a-d*-o,this.y=u*c+f*-o+d*-r-l*-a,this.z=d*c+f*-a+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new U,Vl=new bi;class qr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],d=e[c+1],f=e[c+2];u<t&&(t=u),d<n&&(n=d),f<i&&(i=f),u>r&&(r=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),d=e.getY(c),f=e.getZ(c);u<t&&(t=u),d<n&&(n=d),f<i&&(i=f),u>r&&(r=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)ii.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ii)}else n.boundingBox===null&&n.computeBoundingBox(),ha.copy(n.boundingBox),ha.applyMatrix4(e.matrixWorld),this.union(ha);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),es.subVectors(this.max,xr),Ii.subVectors(e.a,xr),Oi.subVectors(e.b,xr),Fi.subVectors(e.c,xr),Un.subVectors(Oi,Ii),zn.subVectors(Fi,Oi),ri.subVectors(Ii,Fi);let t=[0,-Un.z,Un.y,0,-zn.z,zn.y,0,-ri.z,ri.y,Un.z,0,-Un.x,zn.z,0,-zn.x,ri.z,0,-ri.x,-Un.y,Un.x,0,-zn.y,zn.x,0,-ri.y,ri.x,0];return!fa(t,Ii,Oi,Fi,es)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,Ii,Oi,Fi,es))?!1:(ts.crossVectors(Un,zn),t=[ts.x,ts.y,ts.z],fa(t,Ii,Oi,Fi,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ii.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new U,new U,new U,new U,new U,new U,new U,new U],ii=new U,ha=new qr,Ii=new U,Oi=new U,Fi=new U,Un=new U,zn=new U,ri=new U,xr=new U,es=new U,ts=new U,si=new U;function fa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){si.fromArray(s,r);const a=i.x*Math.abs(si.x)+i.y*Math.abs(si.y)+i.z*Math.abs(si.z),c=e.dot(si),l=t.dot(si),u=n.dot(si);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const rd=new qr,vr=new U,da=new U;class Ro{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);const t=vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(vr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(da)),this.expandByPoint(vr.copy(e.center).sub(da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new U,pa=new U,ns=new U,kn=new U,ma=new U,is=new U,ga=new U;class sd{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.direction).multiplyScalar(t).add(this.origin),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){pa.copy(e).add(t).multiplyScalar(.5),ns.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(pa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ns),a=kn.dot(this.direction),c=-kn.dot(ns),l=kn.lengthSq(),u=Math.abs(1-o*o);let d,f,m,g;if(u>0)if(d=o*c-a,f=o*a-c,g=r*u,d>=0)if(f>=-g)if(f<=g){const h=1/u;d*=h,f*=h,m=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(ns).multiplyScalar(f).add(pa),m}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),i=wn.dot(wn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,i,r){ma.subVectors(t,e),is.subVectors(n,e),ga.crossVectors(ma,is);let o=this.direction.dot(ga),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,e);const c=a*this.direction.dot(is.crossVectors(kn,is));if(c<0)return null;const l=a*this.direction.dot(ma.cross(kn));if(l<0||c+l>o)return null;const u=-a*kn.dot(ga);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,c,l,u,d,f,m,g,h,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=u,_[10]=d,_[14]=f,_[3]=m,_[7]=g,_[11]=h,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ni.setFromMatrixColumn(e,0).length(),r=1/Ni.setFromMatrixColumn(e,1).length(),o=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*d,g=a*u,h=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=f-h*l,t[9]=-a*c,t[2]=h-f*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,m=c*d,g=l*u,h=l*d;t[0]=f+h*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=h+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,m=c*d,g=l*u,h=l*d;t[0]=f-h*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=h-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,m=o*d,g=a*u,h=a*d;t[0]=c*u,t[4]=g*l-m,t[8]=f*l+h,t[1]=c*d,t[5]=h*l+f,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,g=a*c,h=a*l;t[0]=c*u,t[4]=h-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+g,t[10]=f-h*d}else if(e.order==="XZY"){const f=o*c,m=o*l,g=a*c,h=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+h,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=h*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ad,e,od)}lookAt(e,t,n){const i=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Bn.crossVectors(n,Ft),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Bn.crossVectors(n,Ft)),Bn.normalize(),rs.crossVectors(Ft,Bn),i[0]=Bn.x,i[4]=rs.x,i[8]=Ft.x,i[1]=Bn.y,i[5]=rs.y,i[9]=Ft.y,i[2]=Bn.z,i[6]=rs.z,i[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],m=n[13],g=n[2],h=n[6],p=n[10],_=n[14],M=n[3],y=n[7],S=n[11],x=n[15],E=i[0],P=i[4],v=i[8],w=i[12],L=i[1],G=i[5],j=i[9],I=i[13],R=i[2],k=i[6],Y=i[10],$=i[14],V=i[3],J=i[7],K=i[11],ue=i[15];return r[0]=o*E+a*L+c*R+l*V,r[4]=o*P+a*G+c*k+l*J,r[8]=o*v+a*j+c*Y+l*K,r[12]=o*w+a*I+c*$+l*ue,r[1]=u*E+d*L+f*R+m*V,r[5]=u*P+d*G+f*k+m*J,r[9]=u*v+d*j+f*Y+m*K,r[13]=u*w+d*I+f*$+m*ue,r[2]=g*E+h*L+p*R+_*V,r[6]=g*P+h*G+p*k+_*J,r[10]=g*v+h*j+p*Y+_*K,r[14]=g*w+h*I+p*$+_*ue,r[3]=M*E+y*L+S*R+x*V,r[7]=M*P+y*G+S*k+x*J,r[11]=M*v+y*j+S*Y+x*K,r[15]=M*w+y*I+S*$+x*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],h=e[7],p=e[11],_=e[15];return g*(+r*c*d-i*l*d-r*a*f+n*l*f+i*a*m-n*c*m)+h*(+t*c*m-t*l*f+r*o*f-i*o*m+i*l*u-r*c*u)+p*(+t*l*d-t*a*m-r*o*d+n*o*m+r*a*u-n*l*u)+_*(-i*a*u-t*c*d+t*a*f+i*o*d-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],h=e[13],p=e[14],_=e[15],M=d*p*l-h*f*l+h*c*m-a*p*m-d*c*_+a*f*_,y=g*f*l-u*p*l-g*c*m+o*p*m+u*c*_-o*f*_,S=u*h*l-g*d*l+g*a*m-o*h*m-u*a*_+o*d*_,x=g*d*c-u*h*c-g*a*f+o*h*f+u*a*p-o*d*p,E=t*M+n*y+i*S+r*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/E;return e[0]=M*P,e[1]=(h*f*r-d*p*r-h*i*m+n*p*m+d*i*_-n*f*_)*P,e[2]=(a*p*r-h*c*r+h*i*l-n*p*l-a*i*_+n*c*_)*P,e[3]=(d*c*r-a*f*r-d*i*l+n*f*l+a*i*m-n*c*m)*P,e[4]=y*P,e[5]=(u*p*r-g*f*r+g*i*m-t*p*m-u*i*_+t*f*_)*P,e[6]=(g*c*r-o*p*r-g*i*l+t*p*l+o*i*_-t*c*_)*P,e[7]=(o*f*r-u*c*r+u*i*l-t*f*l-o*i*m+t*c*m)*P,e[8]=S*P,e[9]=(g*d*r-u*h*r-g*n*m+t*h*m+u*n*_-t*d*_)*P,e[10]=(o*h*r-g*a*r+g*n*l-t*h*l-o*n*_+t*a*_)*P,e[11]=(u*a*r-o*d*r-u*n*l+t*d*l+o*n*m-t*a*m)*P,e[12]=x*P,e[13]=(u*h*i-g*d*i+g*n*f-t*h*f-u*n*p+t*d*p)*P,e[14]=(g*a*i-o*h*i-g*n*c+t*h*c+o*n*p-t*a*p)*P,e[15]=(o*d*i-u*a*i+u*n*c-t*d*c-o*n*f+t*a*f)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,f=r*l,m=r*u,g=r*d,h=o*u,p=o*d,_=a*d,M=c*l,y=c*u,S=c*d,x=n.x,E=n.y,P=n.z;return i[0]=(1-(h+_))*x,i[1]=(m+S)*x,i[2]=(g-y)*x,i[3]=0,i[4]=(m-S)*E,i[5]=(1-(f+_))*E,i[6]=(p+M)*E,i[7]=0,i[8]=(g+y)*P,i[9]=(p-M)*P,i[10]=(1-(f+h))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ni.set(i[0],i[1],i[2]).length();const o=Ni.set(i[4],i[5],i[6]).length(),a=Ni.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],rn.copy(this);const l=1/r,u=1/o,d=1/a;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,t.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,c=2*r/(t-e),l=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-r),d=(t+e)*c,f=(n+i)*l,m=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ni=new U,rn=new tt,ad=new U(0,0,0),od=new U(1,1,1),Bn=new U,rs=new U,Ft=new U,Hl=new tt,Wl=new bi;class zs{constructor(e=0,t=0,n=0,i=zs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zs.DEFAULT_ORDER="XYZ";class Tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ld=0;const ql=new U,Ui=new bi,Tn=new tt,ss=new U,yr=new U,cd=new U,ud=new bi,Xl=new U(1,0,0),jl=new U(0,1,0),Yl=new U(0,0,1),hd={type:"added"},$l={type:"removed"};class gt extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new U,t=new zs,n=new bi,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new kt}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(Xl,e)}rotateY(e){return this.rotateOnAxis(jl,e)}rotateZ(e){return this.rotateOnAxis(Yl,e)}translateOnAxis(e,t){return ql.copy(e).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xl,e)}translateY(e){return this.translateOnAxis(jl,e)}translateZ(e){return this.translateOnAxis(Yl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ss.copy(e):ss.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(yr,ss,this.up):Tn.lookAt(ss,yr,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($l)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent($l)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,cd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,ud,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DEFAULT_UP=new U(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new U,En=new U,_a=new U,An=new U,zi=new U,ki=new U,Zl=new U,xa=new U,va=new U,ya=new U;class Ln{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),sn.subVectors(e,t),i.cross(sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){sn.subVectors(i,t),En.subVectors(n,t),_a.subVectors(e,t);const o=sn.dot(sn),a=sn.dot(En),c=sn.dot(_a),l=En.dot(En),u=En.dot(_a),d=o*l-a*a;if(d===0)return r.set(-2,-1,-1);const f=1/d,m=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,An),c.set(0,0),c.addScaledVector(r,An.x),c.addScaledVector(o,An.y),c.addScaledVector(a,An.z),c}static isFrontFacing(e,t,n,i){return sn.subVectors(n,t),En.subVectors(e,t),sn.cross(En).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),sn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ln.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;zi.subVectors(i,n),ki.subVectors(r,n),xa.subVectors(e,n);const c=zi.dot(xa),l=ki.dot(xa);if(c<=0&&l<=0)return t.copy(n);va.subVectors(e,i);const u=zi.dot(va),d=ki.dot(va);if(u>=0&&d<=u)return t.copy(i);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(zi,o);ya.subVectors(e,r);const m=zi.dot(ya),g=ki.dot(ya);if(g>=0&&m<=g)return t.copy(r);const h=m*l-c*g;if(h<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ki,a);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Zl.subVectors(r,i),a=(d-u)/(d-u+(m-g)),t.copy(i).addScaledVector(Zl,a);const _=1/(p+h+f);return o=h*_,a=f*_,t.copy(n).addScaledVector(zi,o).addScaledVector(ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let fd=0;class Xr extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=Ji,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=pu,this.blendDst=mu,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Io extends Xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ke=new U,as=new we;class gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)as.fromBufferAttribute(this,t),as.applyMatrix3(e),this.setXY(t,as.x,as.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix3(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Eu extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Au extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _n extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dd=0;const jt=new tt,Ma=new gt,Bi=new U,Nt=new qr,Mr=new qr,ot=new U;class Kn extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yu(e)?Au:Eu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return Ma.lookAt(e),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _n(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(Nt.min,Mr.min),Nt.expandByPoint(ot),ot.addVectors(Nt.max,Mr.max),Nt.expandByPoint(ot)):(Nt.expandByPoint(Mr.min),Nt.expandByPoint(Mr.max))}Nt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ot.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ot));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ot.fromBufferAttribute(a,l),c&&(Bi.fromBufferAttribute(e,l),ot.add(Bi)),i=Math.max(i,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let L=0;L<a;L++)l[L]=new U,u[L]=new U;const d=new U,f=new U,m=new U,g=new we,h=new we,p=new we,_=new U,M=new U;function y(L,G,j){d.fromArray(i,L*3),f.fromArray(i,G*3),m.fromArray(i,j*3),g.fromArray(o,L*2),h.fromArray(o,G*2),p.fromArray(o,j*2),f.sub(d),m.sub(d),h.sub(g),p.sub(g);const I=1/(h.x*p.y-p.x*h.y);isFinite(I)&&(_.copy(f).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(I),M.copy(m).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(I),l[L].add(_),l[G].add(_),l[j].add(_),u[L].add(M),u[G].add(M),u[j].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let L=0,G=S.length;L<G;++L){const j=S[L],I=j.start,R=j.count;for(let k=I,Y=I+R;k<Y;k+=3)y(n[k+0],n[k+1],n[k+2])}const x=new U,E=new U,P=new U,v=new U;function w(L){P.fromArray(r,L*3),v.copy(P);const G=l[L];x.copy(G),x.sub(P.multiplyScalar(P.dot(G))).normalize(),E.crossVectors(v,G);const I=E.dot(u[L])<0?-1:1;c[L*4]=x.x,c[L*4+1]=x.y,c[L*4+2]=x.z,c[L*4+3]=I}for(let L=0,G=S.length;L<G;++L){const j=S[L],I=j.start,R=j.count;for(let k=I,Y=I+R;k<Y;k+=3)w(n[k+0]),w(n[k+1]),w(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,d=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),h=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,h),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,h),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(h,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let h=0,p=c.length;h<p;h++){a.isInterleavedBufferAttribute?m=c[h]*a.data.stride+a.offset:m=c[h]*u;for(let _=0;_<u;_++)f[g++]=l[m++]}return new gn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kl=new tt,Gi=new sd,Sa=new Ro,Sr=new U,br=new U,wr=new U,ba=new U,os=new U,ls=new we,cs=new we,us=new we,wa=new U,hs=new U;class mn extends gt{constructor(e=new Kn,t=new Io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){os.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(ba.fromBufferAttribute(d,e),o?os.addScaledVector(ba,u):os.addScaledVector(ba.sub(t),u))}t.add(os)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(r),e.ray.intersectsSphere(Sa)===!1)||(Kl.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Kl),n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,d=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const h=d[m],p=i[h.materialIndex],_=Math.max(h.start,f.start),M=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let y=_,S=M;y<S;y+=3){const x=a.getX(y),E=a.getX(y+1),P=a.getX(y+2);o=fs(this,p,e,Gi,l,u,x,E,P),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let h=m,p=g;h<p;h+=3){const _=a.getX(h),M=a.getX(h+1),y=a.getX(h+2);o=fs(this,i,e,Gi,l,u,_,M,y),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const h=d[m],p=i[h.materialIndex],_=Math.max(h.start,f.start),M=Math.min(c.count,Math.min(h.start+h.count,f.start+f.count));for(let y=_,S=M;y<S;y+=3){const x=y,E=y+1,P=y+2;o=fs(this,p,e,Gi,l,u,x,E,P),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let h=m,p=g;h<p;h+=3){const _=h,M=h+1,y=h+2;o=fs(this,i,e,Gi,l,u,_,M,y),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}}}function pd(s,e,t,n,i,r,o,a){let c;if(e.side===Bt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Yn,a),c===null)return null;hs.copy(a),hs.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(hs);return l<t.near||l>t.far?null:{distance:l,point:hs.clone(),object:s}}function fs(s,e,t,n,i,r,o,a,c){s.getVertexPosition(o,Sr),s.getVertexPosition(a,br),s.getVertexPosition(c,wr);const l=pd(s,e,t,n,Sr,br,wr,wa);if(l){i&&(ls.fromBufferAttribute(i,o),cs.fromBufferAttribute(i,a),us.fromBufferAttribute(i,c),l.uv=Ln.getUV(wa,Sr,br,wr,ls,cs,us,new we)),r&&(ls.fromBufferAttribute(r,o),cs.fromBufferAttribute(r,a),us.fromBufferAttribute(r,c),l.uv2=Ln.getUV(wa,Sr,br,wr,ls,cs,us,new we));const u={a:o,b:a,c,normal:new U,materialIndex:0};Ln.getNormal(Sr,br,wr,u.normal),l.face=u}return l}class jr extends Kn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new _n(l,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(d,2));function g(h,p,_,M,y,S,x,E,P,v,w){const L=S/P,G=x/v,j=S/2,I=x/2,R=E/2,k=P+1,Y=v+1;let $=0,V=0;const J=new U;for(let K=0;K<Y;K++){const ue=K*G-I;for(let z=0;z<k;z++){const Z=z*L-j;J[h]=Z*M,J[p]=ue*y,J[_]=R,l.push(J.x,J.y,J.z),J[h]=0,J[p]=0,J[_]=E>0?1:-1,u.push(J.x,J.y,J.z),d.push(z/P),d.push(1-K/v),$+=1}}for(let K=0;K<v;K++)for(let ue=0;ue<P;ue++){const z=f+ue+k*K,Z=f+ue+k*(K+1),te=f+(ue+1)+k*(K+1),ne=f+(ue+1)+k*K;c.push(z,Z,ne),c.push(Z,te,ne),V+=6}a.addGroup(m,V,w),m+=V,f+=$}}static fromJSON(e){return new jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ar(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function St(s){const e={};for(let t=0;t<s.length;t++){const n=ar(s[t]);for(const i in n)e[i]=n[i]}return e}function md(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Cu(s){return s.getRenderTarget()===null&&s.outputEncoding===Ge?un:Nr}const gd={clone:ar,merge:St};var _d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_d,this.fragmentShader=xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=md(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Pu extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends Pu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ra*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vi=-90,Hi=1;class vd extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Kt(Vi,Hi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Kt(Vi,Hi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Kt(Vi,Hi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Kt(Vi,Hi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Kt(Vi,Hi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Kt(Vi,Hi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=On,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Lu extends Ct{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ir,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yd extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Lu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new jr(5,5,5),r=new wi({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:qn});r.uniforms.tEquirect.value=t;const o=new mn(i,r),a=t.minFilter;return t.minFilter===Or&&(t.minFilter=Zt),new vd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ta=new U,Md=new U,Sd=new kt;class li{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ta.subVectors(n,t).cross(Md.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ta),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sd.getNormalMatrix(e),i=this.coplanarPoint(Ta).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new Ro,ds=new U;class Oo{constructor(e=new li,t=new li,n=new li,i=new li,r=new li,o=new li){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],d=n[7],f=n[8],m=n[9],g=n[10],h=n[11],p=n[12],_=n[13],M=n[14],y=n[15];return t[0].setComponents(a-i,d-c,h-f,y-p).normalize(),t[1].setComponents(a+i,d+c,h+f,y+p).normalize(),t[2].setComponents(a+r,d+l,h+m,y+_).normalize(),t[3].setComponents(a-r,d-l,h-m,y-_).normalize(),t[4].setComponents(a-o,d-u,h-g,y-M).normalize(),t[5].setComponents(a+o,d+u,h+g,y+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ds.x=i.normal.x>0?e.max.x:e.min.x,ds.y=i.normal.y>0?e.max.y:e.min.y,ds.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Du(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function bd(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const d=l.array,f=l.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,d,f),l.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,d){const f=u.array,m=u.updateRange;s.bindBuffer(d,l),m.count===-1?s.bufferSubData(d,0,f):(t?s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,i(l,u)):d.version<l.version&&(r(d.buffer,l,u),d.version=l.version)}return{get:o,remove:a,update:c}}class Fo extends Kn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,d=e/a,f=t/c,m=[],g=[],h=[],p=[];for(let _=0;_<u;_++){const M=_*f-o;for(let y=0;y<l;y++){const S=y*d-r;g.push(S,-M,0),h.push(0,0,1),p.push(y/a),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let M=0;M<a;M++){const y=M+l*_,S=M+l*(_+1),x=M+1+l*(_+1),E=M+1+l*_;m.push(y,S,E),m.push(S,x,E)}this.setIndex(m),this.setAttribute("position",new _n(g,3)),this.setAttribute("normal",new _n(h,3)),this.setAttribute("uv",new _n(p,2))}static fromJSON(e){return new Fo(e.width,e.height,e.widthSegments,e.heightSegments)}}var wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ld="vec3 transformed = vec3( position );",Dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Id=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Od=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Wd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,op=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,vp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,bp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Fp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,zp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,$p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,am=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,pm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,mm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,gm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,_m=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,xm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,vm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ym=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Om=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,km=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,eg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,be={alphamap_fragment:wd,alphamap_pars_fragment:Td,alphatest_fragment:Ed,alphatest_pars_fragment:Ad,aomap_fragment:Cd,aomap_pars_fragment:Pd,begin_vertex:Ld,beginnormal_vertex:Dd,bsdfs:Rd,iridescence_fragment:Id,bumpmap_pars_fragment:Od,clipping_planes_fragment:Fd,clipping_planes_pars_fragment:Nd,clipping_planes_pars_vertex:Ud,clipping_planes_vertex:zd,color_fragment:kd,color_pars_fragment:Bd,color_pars_vertex:Gd,color_vertex:Vd,common:Hd,cube_uv_reflection_fragment:Wd,defaultnormal_vertex:qd,displacementmap_pars_vertex:Xd,displacementmap_vertex:jd,emissivemap_fragment:Yd,emissivemap_pars_fragment:$d,encodings_fragment:Zd,encodings_pars_fragment:Kd,envmap_fragment:Jd,envmap_common_pars_fragment:Qd,envmap_pars_fragment:ep,envmap_pars_vertex:tp,envmap_physical_pars_fragment:dp,envmap_vertex:np,fog_vertex:ip,fog_pars_vertex:rp,fog_fragment:sp,fog_pars_fragment:ap,gradientmap_pars_fragment:op,lightmap_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_fragment:up,lights_lambert_pars_fragment:hp,lights_pars_begin:fp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:_p,lights_physical_fragment:xp,lights_physical_pars_fragment:vp,lights_fragment_begin:yp,lights_fragment_maps:Mp,lights_fragment_end:Sp,logdepthbuf_fragment:bp,logdepthbuf_pars_fragment:wp,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:Ep,map_fragment:Ap,map_pars_fragment:Cp,map_particle_fragment:Pp,map_particle_pars_fragment:Lp,metalnessmap_fragment:Dp,metalnessmap_pars_fragment:Rp,morphcolor_vertex:Ip,morphnormal_vertex:Op,morphtarget_pars_vertex:Fp,morphtarget_vertex:Np,normal_fragment_begin:Up,normal_fragment_maps:zp,normal_pars_fragment:kp,normal_pars_vertex:Bp,normal_vertex:Gp,normalmap_pars_fragment:Vp,clearcoat_normal_fragment_begin:Hp,clearcoat_normal_fragment_maps:Wp,clearcoat_pars_fragment:qp,iridescence_pars_fragment:Xp,output_fragment:jp,packing:Yp,premultiplied_alpha_fragment:$p,project_vertex:Zp,dithering_fragment:Kp,dithering_pars_fragment:Jp,roughnessmap_fragment:Qp,roughnessmap_pars_fragment:em,shadowmap_pars_fragment:tm,shadowmap_pars_vertex:nm,shadowmap_vertex:im,shadowmask_pars_fragment:rm,skinbase_vertex:sm,skinning_pars_vertex:am,skinning_vertex:om,skinnormal_vertex:lm,specularmap_fragment:cm,specularmap_pars_fragment:um,tonemapping_fragment:hm,tonemapping_pars_fragment:fm,transmission_fragment:dm,transmission_pars_fragment:pm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:_m,uv2_pars_fragment:xm,uv2_pars_vertex:vm,uv2_vertex:ym,worldpos_vertex:Mm,background_vert:Sm,background_frag:bm,backgroundCube_vert:wm,backgroundCube_frag:Tm,cube_vert:Em,cube_frag:Am,depth_vert:Cm,depth_frag:Pm,distanceRGBA_vert:Lm,distanceRGBA_frag:Dm,equirect_vert:Rm,equirect_frag:Im,linedashed_vert:Om,linedashed_frag:Fm,meshbasic_vert:Nm,meshbasic_frag:Um,meshlambert_vert:zm,meshlambert_frag:km,meshmatcap_vert:Bm,meshmatcap_frag:Gm,meshnormal_vert:Vm,meshnormal_frag:Hm,meshphong_vert:Wm,meshphong_frag:qm,meshphysical_vert:Xm,meshphysical_frag:jm,meshtoon_vert:Ym,meshtoon_frag:$m,points_vert:Zm,points_frag:Km,shadow_vert:Jm,shadow_frag:Qm,sprite_vert:eg,sprite_frag:tg},re={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new kt},uv2Transform:{value:new kt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new kt}}},hn={basic:{uniforms:St([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:St([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Be(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:St([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:St([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:St([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Be(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:St([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:St([re.points,re.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:St([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:St([re.common,re.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:St([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:St([re.sprite,re.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:St([re.common,re.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:St([re.lights,re.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};hn.physical={uniforms:St([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new we(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const ps={r:0,b:0,g:0};function ng(s,e,t,n,i,r,o){const a=new Be(0);let c=r===!0?0:1,l,u,d=null,f=0,m=null;function g(p,_){let M=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y));const S=s.xr,x=S.getSession&&S.getSession();x&&x.environmentBlendMode==="additive"&&(y=null),y===null?h(a,c):y&&y.isColor&&(h(y,1),M=!0),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Us)?(u===void 0&&(u=new mn(new jr(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:ar(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,P,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=y.encoding!==Ge,(d!==y||f!==y.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,m=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new mn(new Fo(2,2),new wi({name:"BackgroundMaterial",uniforms:ar(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=y.encoding!==Ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,m=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function h(p,_){p.getRGB(ps,Cu(s)),n.buffers.color.setClear(ps.r,ps.g,ps.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),c=_,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,h(a,c)},render:g}}function ig(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null);let l=c,u=!1;function d(R,k,Y,$,V){let J=!1;if(o){const K=h($,Y,k);l!==K&&(l=K,m(l.object)),J=_(R,$,Y,V),J&&M(R,$,Y,V)}else{const K=k.wireframe===!0;(l.geometry!==$.id||l.program!==Y.id||l.wireframe!==K)&&(l.geometry=$.id,l.program=Y.id,l.wireframe=K,J=!0)}V!==null&&t.update(V,34963),(J||u)&&(u=!1,v(R,k,Y,$),V!==null&&s.bindBuffer(34963,t.get(V).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function h(R,k,Y){const $=Y.wireframe===!0;let V=a[R.id];V===void 0&&(V={},a[R.id]=V);let J=V[k.id];J===void 0&&(J={},V[k.id]=J);let K=J[$];return K===void 0&&(K=p(f()),J[$]=K),K}function p(R){const k=[],Y=[],$=[];for(let V=0;V<i;V++)k[V]=0,Y[V]=0,$[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Y,attributeDivisors:$,object:R,attributes:{},index:null}}function _(R,k,Y,$){const V=l.attributes,J=k.attributes;let K=0;const ue=Y.getAttributes();for(const z in ue)if(ue[z].location>=0){const te=V[z];let ne=J[z];if(ne===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),te===void 0||te.attribute!==ne||ne&&te.data!==ne.data)return!0;K++}return l.attributesNum!==K||l.index!==$}function M(R,k,Y,$){const V={},J=k.attributes;let K=0;const ue=Y.getAttributes();for(const z in ue)if(ue[z].location>=0){let te=J[z];te===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(te=R.instanceColor));const ne={};ne.attribute=te,te&&te.data&&(ne.data=te.data),V[z]=ne,K++}l.attributes=V,l.attributesNum=K,l.index=$}function y(){const R=l.newAttributes;for(let k=0,Y=R.length;k<Y;k++)R[k]=0}function S(R){x(R,0)}function x(R,k){const Y=l.newAttributes,$=l.enabledAttributes,V=l.attributeDivisors;Y[R]=1,$[R]===0&&(s.enableVertexAttribArray(R),$[R]=1),V[R]!==k&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,k),V[R]=k)}function E(){const R=l.newAttributes,k=l.enabledAttributes;for(let Y=0,$=k.length;Y<$;Y++)k[Y]!==R[Y]&&(s.disableVertexAttribArray(Y),k[Y]=0)}function P(R,k,Y,$,V,J){n.isWebGL2===!0&&(Y===5124||Y===5125)?s.vertexAttribIPointer(R,k,Y,V,J):s.vertexAttribPointer(R,k,Y,$,V,J)}function v(R,k,Y,$){if(n.isWebGL2===!1&&(R.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const V=$.attributes,J=Y.getAttributes(),K=k.defaultAttributeValues;for(const ue in J){const z=J[ue];if(z.location>=0){let Z=V[ue];if(Z===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor)),Z!==void 0){const te=Z.normalized,ne=Z.itemSize,B=t.get(Z);if(B===void 0)continue;const ye=B.buffer,me=B.type,de=B.bytesPerElement;if(Z.isInterleavedBufferAttribute){const le=Z.data,Ne=le.stride,Se=Z.offset;if(le.isInstancedInterleavedBuffer){for(let xe=0;xe<z.locationSize;xe++)x(z.location+xe,le.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<z.locationSize;xe++)S(z.location+xe);s.bindBuffer(34962,ye);for(let xe=0;xe<z.locationSize;xe++)P(z.location+xe,ne/z.locationSize,me,te,Ne*de,(Se+ne/z.locationSize*xe)*de)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<z.locationSize;le++)x(z.location+le,Z.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<z.locationSize;le++)S(z.location+le);s.bindBuffer(34962,ye);for(let le=0;le<z.locationSize;le++)P(z.location+le,ne/z.locationSize,me,te,ne*de,ne/z.locationSize*le*de)}}else if(K!==void 0){const te=K[ue];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(z.location,te);break;case 3:s.vertexAttrib3fv(z.location,te);break;case 4:s.vertexAttrib4fv(z.location,te);break;default:s.vertexAttrib1fv(z.location,te)}}}}E()}function w(){j();for(const R in a){const k=a[R];for(const Y in k){const $=k[Y];for(const V in $)g($[V].object),delete $[V];delete k[Y]}delete a[R]}}function L(R){if(a[R.id]===void 0)return;const k=a[R.id];for(const Y in k){const $=k[Y];for(const V in $)g($[V].object),delete $[V];delete k[Y]}delete a[R.id]}function G(R){for(const k in a){const Y=a[k];if(Y[R.id]===void 0)continue;const $=Y[R.id];for(const V in $)g($[V].object),delete $[V];delete Y[R.id]}}function j(){I(),u=!0,l!==c&&(l=c,m(l.object))}function I(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:j,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:G,initAttributes:y,enableAttribute:S,disableUnusedAttributes:E}}function rg(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,d){if(d===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,l,u,d),t.update(u,r,d)}this.setMode=o,this.render=a,this.renderInstances=c}function sg(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),g=s.getParameter(34076),h=s.getParameter(34921),p=s.getParameter(36347),_=s.getParameter(36348),M=s.getParameter(36349),y=f>0,S=o||e.has("OES_texture_float"),x=y&&S,E=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:x,maxSamples:E}}function ag(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new li,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,_=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?u(null):l();else{const M=r?0:n,y=M*4;let S=_.clippingState||null;c.value=S,S=u(g,f,y,m);for(let x=0;x!==y;++x)S[x]=t[x];_.clippingState=S,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,g){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=c.value,g!==!0||p===null){const _=m+h*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<_)&&(p=new Float32Array(_));for(let y=0,S=m;y!==h;++y,S+=4)o.copy(d[y]).applyMatrix4(M,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function og(s){let e=new WeakMap;function t(o,a){return a===so?o.mapping=ir:a===ao&&(o.mapping=rr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===so||a===ao)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new yd(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ru extends Pu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $i=4,Jl=[.125,.215,.35,.446,.526,.582],hi=20,Ea=new Ru,Ql=new Be;let Aa=null;const ci=(1+Math.sqrt(5))/2,qi=1/ci,ec=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,ci,qi),new U(0,ci,-qi),new U(qi,0,ci),new U(-qi,0,ci),new U(ci,qi,0),new U(-ci,qi,0)];class tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Aa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Aa),e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Aa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Fr,format:ln,encoding:Mi,depthBuffer:!1},i=nc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lg(r)),this._blurMaterial=cg(r,e,t)}return i}_compileMaterial(e){const t=new mn(this._lodPlanes[0],e);this._renderer.compile(t,Ea)}_sceneToCubeUV(e,t,n,i){const a=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ql),u.toneMapping=On,u.autoClear=!1;const m=new Io({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new mn(new jr,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(Ql),h=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):M===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const y=this._cubeSize;ms(i,M*y,_>2?y:0,y,y),u.setRenderTarget(i),h&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ir||e.mapping===rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new mn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ms(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ea)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ec[(i-1)%ec.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new mn(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*hi-1),h=r/g,p=isFinite(r)?1+Math.floor(u*h):hi;p>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hi}`);const _=[];let M=0;for(let P=0;P<hi;++P){const v=P/h,w=Math.exp(-v*v/2);_.push(w),P===0?M+=w:P<p&&(M+=2*w)}for(let P=0;P<_.length;P++)_[P]=_[P]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const S=this._sizeLods[i],x=3*S*(i>y-$i?i-y+$i:0),E=4*(this._cubeSize-S);ms(t,x,E,3*S,2*S),c.setRenderTarget(t),c.render(d,Ea)}}function lg(s){const e=[],t=[],n=[];let i=s;const r=s-$i+1+Jl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-$i?c=Jl[o-s+$i-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,h=3,p=2,_=1,M=new Float32Array(h*g*m),y=new Float32Array(p*g*m),S=new Float32Array(_*g*m);for(let E=0;E<m;E++){const P=E%3*2/3-1,v=E>2?0:-1,w=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];M.set(w,h*g*E),y.set(f,p*g*E);const L=[E,E,E,E,E,E];S.set(L,_*g*E)}const x=new Kn;x.setAttribute("position",new gn(M,h)),x.setAttribute("uv",new gn(y,p)),x.setAttribute("faceIndex",new gn(S,_)),e.push(x),i>$i&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nc(s,e,t){const n=new Si(s,e,t);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ms(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function cg(s,e,t){const n=new Float32Array(hi),i=new U(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ic(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function rc(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function No(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ug(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===so||c===ao,u=c===ir||c===rr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new tc(s)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new tc(s));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function hg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function fg(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)e.update(f[g],34962);const m=d.morphAttributes;for(const g in m){const h=m[g];for(let p=0,_=h.length;p<_;p++)e.update(h[p],34962)}}function l(d){const f=[],m=d.index,g=d.attributes.position;let h=0;if(m!==null){const M=m.array;h=m.version;for(let y=0,S=M.length;y<S;y+=3){const x=M[y+0],E=M[y+1],P=M[y+2];f.push(x,E,E,P,P,x)}}else{const M=g.array;h=g.version;for(let y=0,S=M.length/3-1;y<S;y+=3){const x=y+0,E=y+1,P=y+2;f.push(x,E,E,P,P,x)}}const p=new(yu(f)?Au:Eu)(f,1);p.version=h;const _=r.get(d);_&&e.remove(_),r.set(d,p)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function dg(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,m){s.drawElements(r,m,a,f*c),t.update(m,r,1)}function d(f,m,g){if(g===0)return;let h,p;if(i)h=s,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,m,a,f*c,g),t.update(m,r,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d}function pg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function mg(s,e){return s[0]-e[0]}function gg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function _g(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new lt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d,f){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=h!==void 0?h.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let Y=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",Y)};var g=Y;_!==void 0&&_.texture.dispose();const S=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let L=0;S===!0&&(L=1),x===!0&&(L=2),E===!0&&(L=3);let G=u.attributes.position.count*L,j=1;G>e.maxTextureSize&&(j=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const I=new Float32Array(G*j*4*p),R=new wu(I,G,j,p);R.type=di,R.needsUpdate=!0;const k=L*4;for(let $=0;$<p;$++){const V=P[$],J=v[$],K=w[$],ue=G*j*4*$;for(let z=0;z<V.count;z++){const Z=z*k;S===!0&&(o.fromBufferAttribute(V,z),I[ue+Z+0]=o.x,I[ue+Z+1]=o.y,I[ue+Z+2]=o.z,I[ue+Z+3]=0),x===!0&&(o.fromBufferAttribute(J,z),I[ue+Z+4]=o.x,I[ue+Z+5]=o.y,I[ue+Z+6]=o.z,I[ue+Z+7]=0),E===!0&&(o.fromBufferAttribute(K,z),I[ue+Z+8]=o.x,I[ue+Z+9]=o.y,I[ue+Z+10]=o.z,I[ue+Z+11]=K.itemSize===4?o.w:1)}}_={count:p,texture:R,size:new we(G,j)},r.set(u,_),u.addEventListener("dispose",Y)}let M=0;for(let S=0;S<m.length;S++)M+=m[S];const y=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const h=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==h){p=[];for(let x=0;x<h;x++)p[x]=[x,0];n[u.id]=p}for(let x=0;x<h;x++){const E=p[x];E[0]=x,E[1]=m[x]}p.sort(gg);for(let x=0;x<8;x++)x<h&&p[x][1]?(a[x][0]=p[x][0],a[x][1]=p[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(mg);const _=u.morphAttributes.position,M=u.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const E=a[x],P=E[0],v=E[1];P!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+x)!==_[P]&&u.setAttribute("morphTarget"+x,_[P]),M&&u.getAttribute("morphNormal"+x)!==M[P]&&u.setAttribute("morphNormal"+x,M[P]),i[x]=v,y+=v):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),M&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const S=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(s,"morphTargetBaseInfluence",S),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function xg(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);return i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Iu=new Ct,Ou=new wu,Fu=new id,Nu=new Lu,sc=[],ac=[],oc=new Float32Array(16),lc=new Float32Array(9),cc=new Float32Array(4);function pr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=sc[i];if(r===void 0&&(r=new Float32Array(i),sc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function nt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function it(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ks(s,e){let t=ac[e];t===void 0&&(t=new Int32Array(e),ac[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function vg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function yg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;s.uniform2fv(this.addr,e),it(t,e)}}function Mg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nt(t,e))return;s.uniform3fv(this.addr,e),it(t,e)}}function Sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;s.uniform4fv(this.addr,e),it(t,e)}}function bg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;cc.set(n),s.uniformMatrix2fv(this.addr,!1,cc),it(t,n)}}function wg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;lc.set(n),s.uniformMatrix3fv(this.addr,!1,lc),it(t,n)}}function Tg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;oc.set(n),s.uniformMatrix4fv(this.addr,!1,oc),it(t,n)}}function Eg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ag(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;s.uniform2iv(this.addr,e),it(t,e)}}function Cg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;s.uniform3iv(this.addr,e),it(t,e)}}function Pg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;s.uniform4iv(this.addr,e),it(t,e)}}function Lg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;s.uniform2uiv(this.addr,e),it(t,e)}}function Rg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;s.uniform3uiv(this.addr,e),it(t,e)}}function Ig(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;s.uniform4uiv(this.addr,e),it(t,e)}}function Og(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Iu,i)}function Fg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fu,i)}function Ng(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nu,i)}function Ug(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ou,i)}function zg(s){switch(s){case 5126:return vg;case 35664:return yg;case 35665:return Mg;case 35666:return Sg;case 35674:return bg;case 35675:return wg;case 35676:return Tg;case 5124:case 35670:return Eg;case 35667:case 35671:return Ag;case 35668:case 35672:return Cg;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Dg;case 36295:return Rg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Ug}}function kg(s,e){s.uniform1fv(this.addr,e)}function Bg(s,e){const t=pr(e,this.size,2);s.uniform2fv(this.addr,t)}function Gg(s,e){const t=pr(e,this.size,3);s.uniform3fv(this.addr,t)}function Vg(s,e){const t=pr(e,this.size,4);s.uniform4fv(this.addr,t)}function Hg(s,e){const t=pr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Wg(s,e){const t=pr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function qg(s,e){const t=pr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Xg(s,e){s.uniform1iv(this.addr,e)}function jg(s,e){s.uniform2iv(this.addr,e)}function Yg(s,e){s.uniform3iv(this.addr,e)}function $g(s,e){s.uniform4iv(this.addr,e)}function Zg(s,e){s.uniform1uiv(this.addr,e)}function Kg(s,e){s.uniform2uiv(this.addr,e)}function Jg(s,e){s.uniform3uiv(this.addr,e)}function Qg(s,e){s.uniform4uiv(this.addr,e)}function e_(s,e,t){const n=this.cache,i=e.length,r=ks(t,i);nt(n,r)||(s.uniform1iv(this.addr,r),it(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Iu,r[o])}function t_(s,e,t){const n=this.cache,i=e.length,r=ks(t,i);nt(n,r)||(s.uniform1iv(this.addr,r),it(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Fu,r[o])}function n_(s,e,t){const n=this.cache,i=e.length,r=ks(t,i);nt(n,r)||(s.uniform1iv(this.addr,r),it(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Nu,r[o])}function i_(s,e,t){const n=this.cache,i=e.length,r=ks(t,i);nt(n,r)||(s.uniform1iv(this.addr,r),it(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ou,r[o])}function r_(s){switch(s){case 5126:return kg;case 35664:return Bg;case 35665:return Gg;case 35666:return Vg;case 35674:return Hg;case 35675:return Wg;case 35676:return qg;case 5124:case 35670:return Xg;case 35667:case 35671:return jg;case 35668:case 35672:return Yg;case 35669:case 35673:return $g;case 5125:return Zg;case 36294:return Kg;case 36295:return Jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}class s_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=zg(t.type)}}class a_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=r_(t.type)}}class o_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function uc(s,e){s.seq.push(e),s.map[e.id]=e}function l_(s,e,t){const n=s.name,i=n.length;for(Ca.lastIndex=0;;){const r=Ca.exec(n),o=Ca.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){uc(t,l===void 0?new s_(a,s,e):new a_(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new o_(a),uc(t,d)),t=d}}}class vs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);l_(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function hc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let c_=0;function u_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function h_(s){switch(s){case Mi:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function fc(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+u_(s.getShaderSource(e),o)}else return i}function f_(s,e){const t=h_(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function d_(s,e){let t;switch(e){case Lf:t="Linear";break;case Df:t="Reinhard";break;case Rf:t="OptimizedCineon";break;case If:t="ACESFilmic";break;case Of:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function p_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ar).join(`
`)}function m_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function g_(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ar(s){return s!==""}function dc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const __=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(s){return s.replace(__,x_)}function x_(s,e){const t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ho(t)}const v_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mc(s){return s.replace(v_,y_)}function y_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function M_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===du?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===lf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Er&&(e="SHADOWMAP_TYPE_VSM"),e}function S_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ir:case rr:e="ENVMAP_TYPE_CUBE";break;case Us:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case rr:e="ENVMAP_MODE_REFRACTION";break}return e}function w_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case gu:e="ENVMAP_BLENDING_MULTIPLY";break;case Cf:e="ENVMAP_BLENDING_MIX";break;case Pf:e="ENVMAP_BLENDING_ADD";break}return e}function T_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function E_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=M_(t),l=S_(t),u=b_(t),d=w_(t),f=T_(t),m=t.isWebGL2?"":p_(t),g=m_(r),h=i.createProgram();let p,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Ar).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Ar).join(`
`),_.length>0&&(_+=`
`)):(p=[gc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),_=[m,gc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?be.tonemapping_pars_fragment:"",t.toneMapping!==On?d_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,f_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ar).join(`
`)),o=ho(o),o=dc(o,t),o=pc(o,t),a=ho(a),a=dc(a,t),a=pc(a,t),o=mc(o),a=mc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=M+p+o,S=M+_+a,x=hc(i,35633,y),E=hc(i,35632,S);if(i.attachShader(h,x),i.attachShader(h,E),t.index0AttributeName!==void 0?i.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(h,0,"position"),i.linkProgram(h),s.debug.checkShaderErrors){const w=i.getProgramInfoLog(h).trim(),L=i.getShaderInfoLog(x).trim(),G=i.getShaderInfoLog(E).trim();let j=!0,I=!0;if(i.getProgramParameter(h,35714)===!1){j=!1;const R=fc(i,x,"vertex"),k=fc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(h,35715)+`

Program Info Log: `+w+`
`+R+`
`+k)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(L===""||G==="")&&(I=!1);I&&(this.diagnostics={runnable:j,programLog:w,vertexShader:{log:L,prefix:p},fragmentShader:{log:G,prefix:_}})}i.deleteShader(x),i.deleteShader(E);let P;this.getUniforms=function(){return P===void 0&&(P=new vs(i,h)),P};let v;return this.getAttributes=function(){return v===void 0&&(v=g_(i,h)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=c_++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=E,this}let A_=0;class C_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new P_(e),t.set(e,n)),n}}class P_{constructor(e){this.id=A_++,this.code=e,this.usedTimes=0}}function L_(s,e,t,n,i,r,o){const a=new Tu,c=new C_,l=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(v,w,L,G,j){const I=G.fog,R=j.geometry,k=v.isMeshStandardMaterial?G.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),$=Y&&Y.mapping===Us?Y.image.height:null,V=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const J=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,K=J!==void 0?J.length:0;let ue=0;R.morphAttributes.position!==void 0&&(ue=1),R.morphAttributes.normal!==void 0&&(ue=2),R.morphAttributes.color!==void 0&&(ue=3);let z,Z,te,ne;if(V){const Ne=hn[V];z=Ne.vertexShader,Z=Ne.fragmentShader}else z=v.vertexShader,Z=v.fragmentShader,c.update(v),te=c.getVertexShaderID(v),ne=c.getFragmentShaderID(v);const B=s.getRenderTarget(),ye=v.alphaTest>0,me=v.clearcoat>0,de=v.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:v.type,vertexShader:z,fragmentShader:Z,defines:v.defines,customVertexShaderID:te,customFragmentShaderID:ne,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:f,outputEncoding:B===null?s.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:Mi,map:!!v.map,matcap:!!v.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:$,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Qf,tangentSpaceNormalMap:v.normalMapType===vu,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ge,clearcoat:me,clearcoatMap:me&&!!v.clearcoatMap,clearcoatRoughnessMap:me&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:me&&!!v.clearcoatNormalMap,iridescence:de,iridescenceMap:de&&!!v.iridescenceMap,iridescenceThicknessMap:de&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Ji,alphaMap:!!v.alphaMap,alphaTest:ye,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!R.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!I,useFog:v.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:On,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rn,flipSided:v.side===Bt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)w.push(L),w.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(_(w,v),M(w,v),w.push(s.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.physicallyCorrectLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),v.push(a.mask)}function y(v){const w=g[v.type];let L;if(w){const G=hn[w];L=gd.clone(G.uniforms)}else L=v.uniforms;return L}function S(v,w){let L;for(let G=0,j=l.length;G<j;G++){const I=l[G];if(I.cacheKey===w){L=I,++L.usedTimes;break}}return L===void 0&&(L=new E_(s,w,v,r),l.push(L)),L}function x(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),v.destroy()}}function E(v){c.remove(v)}function P(){c.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:y,acquireProgram:S,releaseProgram:x,releaseShaderCache:E,programs:l,dispose:P}}function D_(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function R_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function _c(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function xc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,m,g,h,p){let _=s[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:h,group:p},s[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=h,_.group=p),e++,_}function a(d,f,m,g,h,p){const _=o(d,f,m,g,h,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function c(d,f,m,g,h,p){const _=o(d,f,m,g,h,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function l(d,f){t.length>1&&t.sort(d||R_),n.length>1&&n.sort(f||_c),i.length>1&&i.sort(f||_c)}function u(){for(let d=e,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function I_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new xc,s.set(n,[o])):i>=r.length?(o=new xc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function O_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Be};break;case"SpotLight":t={position:new U,direction:new U,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function F_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let N_=0;function U_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function z_(s,e){const t=new O_,n=F_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,o=new tt,a=new tt;function c(u,d){let f=0,m=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let h=0,p=0,_=0,M=0,y=0,S=0,x=0,E=0,P=0,v=0;u.sort(U_);const w=d!==!0?Math.PI:1;for(let G=0,j=u.length;G<j;G++){const I=u[G],R=I.color,k=I.intensity,Y=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=R.r*k*w,m+=R.g*k*w,g+=R.b*k*w;else if(I.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],k);else if(I.isDirectionalLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const J=I.shadow,K=n.get(I);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,i.directionalShadow[h]=K,i.directionalShadowMap[h]=$,i.directionalShadowMatrix[h]=I.shadow.matrix,S++}i.directional[h]=V,h++}else if(I.isSpotLight){const V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(R).multiplyScalar(k*w),V.distance=Y,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[_]=V;const J=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,J.updateMatrices(I),I.castShadow&&v++),i.spotLightMatrix[_]=J.matrix,I.castShadow){const K=n.get(I);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=$,E++}_++}else if(I.isRectAreaLight){const V=t.get(I);V.color.copy(R).multiplyScalar(k),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=V,M++}else if(I.isPointLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*w),V.distance=I.distance,V.decay=I.decay,I.castShadow){const J=I.shadow,K=n.get(I);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,K.shadowCameraNear=J.camera.near,K.shadowCameraFar=J.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=$,i.pointShadowMatrix[p]=I.shadow.matrix,x++}i.point[p]=V,p++}else if(I.isHemisphereLight){const V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(k*w),V.groundColor.copy(I.groundColor).multiplyScalar(k*w),i.hemi[y]=V,y++}}M>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==h||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==M||L.hemiLength!==y||L.numDirectionalShadows!==S||L.numPointShadows!==x||L.numSpotShadows!==E||L.numSpotMaps!==P)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=M,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=E+P-v,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=v,L.directionalLength=h,L.pointLength=p,L.spotLength=_,L.rectAreaLength=M,L.hemiLength=y,L.numDirectionalShadows=S,L.numPointShadows=x,L.numSpotShadows=E,L.numSpotMaps=P,i.version=N_++)}function l(u,d){let f=0,m=0,g=0,h=0,p=0;const _=d.matrixWorldInverse;for(let M=0,y=u.length;M<y;M++){const S=u[M];if(S.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),f++}else if(S.isSpotLight){const x=i.spot[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),g++}else if(S.isRectAreaLight){const x=i.rectArea[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),a.identity(),o.copy(S.matrixWorld),o.premultiply(_),a.extractRotation(o),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),h++}else if(S.isPointLight){const x=i.point[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),m++}else if(S.isHemisphereLight){const x=i.hemi[p];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(_),p++}}}return{setup:c,setupView:l,state:i}}function vc(s,e){const t=new z_(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function k_(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new vc(s,e),t.set(r,[c])):o>=a.length?(c=new vc(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class B_ extends Xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class G_ extends Xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const V_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function W_(s,e,t){let n=new Oo;const i=new we,r=new we,o=new lt,a=new B_({depthPacking:Jf}),c=new G_,l={},u=t.maxTextureSize,d={[Yn]:Bt,[Bt]:Yn,[Rn]:Rn},f=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:V_,fragmentShader:H_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Kn;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new mn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=du,this.render=function(S,x,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const P=s.getRenderTarget(),v=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),L=s.state;L.setBlending(qn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let G=0,j=S.length;G<j;G++){const I=S[G],R=I.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const k=R.getFrameExtents();if(i.multiply(k),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/k.x),i.x=r.x*k.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/k.y),i.y=r.y*k.y,R.mapSize.y=r.y)),R.map===null){const $=this.type!==Er?{minFilter:bt,magFilter:bt}:{};R.map=new Si(i.x,i.y,$),R.map.texture.name=I.name+".shadowMap",R.camera.updateProjectionMatrix()}s.setRenderTarget(R.map),s.clear();const Y=R.getViewportCount();for(let $=0;$<Y;$++){const V=R.getViewport($);o.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),L.viewport(o),R.updateMatrices(I,$),n=R.getFrustum(),y(x,E,R.camera,I,this.type)}R.isPointLightShadow!==!0&&this.type===Er&&_(R,E),R.needsUpdate=!1}p.needsUpdate=!1,s.setRenderTarget(P,v,w)};function _(S,x){const E=e.update(h);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Si(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(x,null,E,f,h,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(x,null,E,m,h,null)}function M(S,x,E,P,v,w){let L=null;const G=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(G!==void 0)L=G;else if(L=E.isPointLight===!0?c:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const j=L.uuid,I=x.uuid;let R=l[j];R===void 0&&(R={},l[j]=R);let k=R[I];k===void 0&&(k=L.clone(),R[I]=k),L=k}return L.visible=x.visible,L.wireframe=x.wireframe,w===Er?L.side=x.shadowSide!==null?x.shadowSide:x.side:L.side=x.shadowSide!==null?x.shadowSide:d[x.side],L.alphaMap=x.alphaMap,L.alphaTest=x.alphaTest,L.map=x.map,L.clipShadows=x.clipShadows,L.clippingPlanes=x.clippingPlanes,L.clipIntersection=x.clipIntersection,L.displacementMap=x.displacementMap,L.displacementScale=x.displacementScale,L.displacementBias=x.displacementBias,L.wireframeLinewidth=x.wireframeLinewidth,L.linewidth=x.linewidth,E.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(E.matrixWorld),L.nearDistance=P,L.farDistance=v),L}function y(S,x,E,P,v){if(S.visible===!1)return;if(S.layers.test(x.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===Er)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);const G=e.update(S),j=S.material;if(Array.isArray(j)){const I=G.groups;for(let R=0,k=I.length;R<k;R++){const Y=I[R],$=j[Y.materialIndex];if($&&$.visible){const V=M(S,$,P,E.near,E.far,v);s.renderBufferDirect(E,null,G,V,S,Y)}}}else if(j.visible){const I=M(S,j,P,E.near,E.far,v);s.renderBufferDirect(E,null,G,I,S,null)}}const L=S.children;for(let G=0,j=L.length;G<j;G++)y(L[G],x,E,P,v)}}function q_(s,e,t){const n=t.isWebGL2;function i(){let D=!1;const W=new lt;let Q=null;const ce=new lt(0,0,0,0);return{setMask:function(ge){Q!==ge&&!D&&(s.colorMask(ge,ge,ge,ge),Q=ge)},setLocked:function(ge){D=ge},setClear:function(ge,Fe,st,ft,Qn){Qn===!0&&(ge*=ft,Fe*=ft,st*=ft),W.set(ge,Fe,st,ft),ce.equals(W)===!1&&(s.clearColor(ge,Fe,st,ft),ce.copy(W))},reset:function(){D=!1,Q=null,ce.set(-1,0,0,0)}}}function r(){let D=!1,W=null,Q=null,ce=null;return{setTest:function(ge){ge?ye(2929):me(2929)},setMask:function(ge){W!==ge&&!D&&(s.depthMask(ge),W=ge)},setFunc:function(ge){if(Q!==ge){switch(ge){case Mf:s.depthFunc(512);break;case Sf:s.depthFunc(519);break;case bf:s.depthFunc(513);break;case ro:s.depthFunc(515);break;case wf:s.depthFunc(514);break;case Tf:s.depthFunc(518);break;case Ef:s.depthFunc(516);break;case Af:s.depthFunc(517);break;default:s.depthFunc(515)}Q=ge}},setLocked:function(ge){D=ge},setClear:function(ge){ce!==ge&&(s.clearDepth(ge),ce=ge)},reset:function(){D=!1,W=null,Q=null,ce=null}}}function o(){let D=!1,W=null,Q=null,ce=null,ge=null,Fe=null,st=null,ft=null,Qn=null;return{setTest:function(Ve){D||(Ve?ye(2960):me(2960))},setMask:function(Ve){W!==Ve&&!D&&(s.stencilMask(Ve),W=Ve)},setFunc:function(Ve,Mn,Xt){(Q!==Ve||ce!==Mn||ge!==Xt)&&(s.stencilFunc(Ve,Mn,Xt),Q=Ve,ce=Mn,ge=Xt)},setOp:function(Ve,Mn,Xt){(Fe!==Ve||st!==Mn||ft!==Xt)&&(s.stencilOp(Ve,Mn,Xt),Fe=Ve,st=Mn,ft=Xt)},setLocked:function(Ve){D=Ve},setClear:function(Ve){Qn!==Ve&&(s.clearStencil(Ve),Qn=Ve)},reset:function(){D=!1,W=null,Q=null,ce=null,ge=null,Fe=null,st=null,ft=null,Qn=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,h=[],p=null,_=!1,M=null,y=null,S=null,x=null,E=null,P=null,v=null,w=!1,L=null,G=null,j=null,I=null,R=null;const k=s.getParameter(35661);let Y=!1,$=0;const V=s.getParameter(7938);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=$>=2);let J=null,K={};const ue=s.getParameter(3088),z=s.getParameter(2978),Z=new lt().fromArray(ue),te=new lt().fromArray(z);function ne(D,W,Q){const ce=new Uint8Array(4),ge=s.createTexture();s.bindTexture(D,ge),s.texParameteri(D,10241,9728),s.texParameteri(D,10240,9728);for(let Fe=0;Fe<Q;Fe++)s.texImage2D(W+Fe,0,6408,1,1,0,6408,5121,ce);return ge}const B={};B[3553]=ne(3553,3553,1),B[34067]=ne(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ye(2929),c.setFunc(ro),Ye(!1),vt(ll),ye(2884),rt(qn);function ye(D){f[D]!==!0&&(s.enable(D),f[D]=!0)}function me(D){f[D]!==!1&&(s.disable(D),f[D]=!1)}function de(D,W){return m[D]!==W?(s.bindFramebuffer(D,W),m[D]=W,n&&(D===36009&&(m[36160]=W),D===36160&&(m[36009]=W)),!0):!1}function le(D,W){let Q=h,ce=!1;if(D)if(Q=g.get(W),Q===void 0&&(Q=[],g.set(W,Q)),D.isWebGLMultipleRenderTargets){const ge=D.texture;if(Q.length!==ge.length||Q[0]!==36064){for(let Fe=0,st=ge.length;Fe<st;Fe++)Q[Fe]=36064+Fe;Q.length=ge.length,ce=!0}}else Q[0]!==36064&&(Q[0]=36064,ce=!0);else Q[0]!==1029&&(Q[0]=1029,ce=!0);ce&&(t.isWebGL2?s.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Ne(D){return p!==D?(s.useProgram(D),p=D,!0):!1}const Se={[Yi]:32774,[uf]:32778,[hf]:32779};if(n)Se[fl]=32775,Se[dl]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Se[fl]=D.MIN_EXT,Se[dl]=D.MAX_EXT)}const xe={[ff]:0,[df]:1,[pf]:768,[pu]:770,[yf]:776,[xf]:774,[gf]:772,[mf]:769,[mu]:771,[vf]:775,[_f]:773};function rt(D,W,Q,ce,ge,Fe,st,ft){if(D===qn){_===!0&&(me(3042),_=!1);return}if(_===!1&&(ye(3042),_=!0),D!==cf){if(D!==M||ft!==w){if((y!==Yi||E!==Yi)&&(s.blendEquation(32774),y=Yi,E=Yi),ft)switch(D){case Ji:s.blendFuncSeparate(1,771,1,771);break;case cl:s.blendFunc(1,1);break;case ul:s.blendFuncSeparate(0,769,0,1);break;case hl:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ji:s.blendFuncSeparate(770,771,1,771);break;case cl:s.blendFunc(770,1);break;case ul:s.blendFuncSeparate(0,769,0,1);break;case hl:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,x=null,P=null,v=null,M=D,w=ft}return}ge=ge||W,Fe=Fe||Q,st=st||ce,(W!==y||ge!==E)&&(s.blendEquationSeparate(Se[W],Se[ge]),y=W,E=ge),(Q!==S||ce!==x||Fe!==P||st!==v)&&(s.blendFuncSeparate(xe[Q],xe[ce],xe[Fe],xe[st]),S=Q,x=ce,P=Fe,v=st),M=D,w=!1}function ht(D,W){D.side===Rn?me(2884):ye(2884);let Q=D.side===Bt;W&&(Q=!Q),Ye(Q),D.blending===Ji&&D.transparent===!1?rt(qn):rt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);const ce=D.stencilWrite;l.setTest(ce),ce&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Oe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ye(32926):me(32926)}function Ye(D){L!==D&&(D?s.frontFace(2304):s.frontFace(2305),L=D)}function vt(D){D!==af?(ye(2884),D!==G&&(D===ll?s.cullFace(1029):D===of?s.cullFace(1028):s.cullFace(1032))):me(2884),G=D}function Xe(D){D!==j&&(Y&&s.lineWidth(D),j=D)}function Oe(D,W,Q){D?(ye(32823),(I!==W||R!==Q)&&(s.polygonOffset(W,Q),I=W,R=Q)):me(32823)}function qt(D){D?ye(3089):me(3089)}function wt(D){D===void 0&&(D=33984+k-1),J!==D&&(s.activeTexture(D),J=D)}function A(D,W,Q){Q===void 0&&(J===null?Q=33984+k-1:Q=J);let ce=K[Q];ce===void 0&&(ce={type:void 0,texture:void 0},K[Q]=ce),(ce.type!==D||ce.texture!==W)&&(J!==Q&&(s.activeTexture(Q),J=Q),s.bindTexture(D,W||B[D]),ce.type=D,ce.texture=W)}function b(){const D=K[J];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function H(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(D){Z.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Z.copy(D))}function fe(D){te.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),te.copy(D))}function Ae(D,W){let Q=d.get(W);Q===void 0&&(Q=new WeakMap,d.set(W,Q));let ce=Q.get(D);ce===void 0&&(ce=s.getUniformBlockIndex(W,D.name),Q.set(D,ce))}function Pe(D,W){const ce=d.get(W).get(D);u.get(W)!==ce&&(s.uniformBlockBinding(W,ce,D.__bindingPointIndex),u.set(W,ce))}function Ue(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},J=null,K={},m={},g=new WeakMap,h=[],p=null,_=!1,M=null,y=null,S=null,x=null,E=null,P=null,v=null,w=!1,L=null,G=null,j=null,I=null,R=null,Z.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ye,disable:me,bindFramebuffer:de,drawBuffers:le,useProgram:Ne,setBlending:rt,setMaterial:ht,setFlipSided:Ye,setCullFace:vt,setLineWidth:Xe,setPolygonOffset:Oe,setScissorTest:qt,activeTexture:wt,bindTexture:A,unbindTexture:b,compressedTexImage2D:H,compressedTexImage3D:ee,texImage2D:he,texImage3D:ae,updateUBOMapping:Ae,uniformBlockBinding:Pe,texStorage2D:O,texStorage3D:oe,texSubImage2D:ie,texSubImage3D:se,compressedTexSubImage2D:ve,compressedTexSubImage3D:C,scissor:pe,viewport:fe,reset:Ue}}function X_(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,b){return _?new OffscreenCanvas(A,b):Ur("canvas")}function y(A,b,H,ee){let ie=1;if((A.width>ee||A.height>ee)&&(ie=ee/Math.max(A.width,A.height)),ie<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const se=b?uo:Math.floor,ve=se(ie*A.width),C=se(ie*A.height);h===void 0&&(h=M(ve,C));const O=H?M(ve,C):h;return O.width=ve,O.height=C,O.getContext("2d").drawImage(A,0,0,ve,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ve+"x"+C+")."),O}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return Gl(A.width)&&Gl(A.height)}function x(A){return a?!1:A.wrapS!==on||A.wrapT!==on||A.minFilter!==bt&&A.minFilter!==Zt}function E(A,b){return A.generateMipmaps&&b&&A.minFilter!==bt&&A.minFilter!==Zt}function P(A){s.generateMipmap(A)}function v(A,b,H,ee,ie=!1){if(a===!1)return b;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=b;return b===6403&&(H===5126&&(se=33326),H===5131&&(se=33325),H===5121&&(se=33321)),b===33319&&(H===5126&&(se=33328),H===5131&&(se=33327),H===5121&&(se=33323)),b===6408&&(H===5126&&(se=34836),H===5131&&(se=34842),H===5121&&(se=ee===Ge&&ie===!1?35907:32856),H===32819&&(se=32854),H===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function w(A,b,H){return E(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==bt&&A.minFilter!==Zt?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function L(A){return A===bt||A===pl||A===Ks?9728:9729}function G(A){const b=A.target;b.removeEventListener("dispose",G),I(b),b.isVideoTexture&&g.delete(b)}function j(A){const b=A.target;b.removeEventListener("dispose",j),k(b)}function I(A){const b=n.get(A);if(b.__webglInit===void 0)return;const H=A.source,ee=p.get(H);if(ee){const ie=ee[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(A),Object.keys(ee).length===0&&p.delete(H)}n.remove(A)}function R(A){const b=n.get(A);s.deleteTexture(b.__webglTexture);const H=A.source,ee=p.get(H);delete ee[b.__cacheKey],o.memory.textures--}function k(A){const b=A.texture,H=n.get(A),ee=n.get(b);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)s.deleteFramebuffer(H.__webglFramebuffer[ie]),H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer[ie]);else{if(s.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&s.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ie=0;ie<H.__webglColorRenderbuffer.length;ie++)H.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(H.__webglColorRenderbuffer[ie]);H.__webglDepthRenderbuffer&&s.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ie=0,se=b.length;ie<se;ie++){const ve=n.get(b[ie]);ve.__webglTexture&&(s.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(b[ie])}n.remove(b),n.remove(A)}let Y=0;function $(){Y=0}function V(){const A=Y;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),Y+=1,A}function J(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.encoding),b.join()}function K(A,b){const H=n.get(A);if(A.isVideoTexture&&qt(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(H,A,b);return}}t.bindTexture(3553,H.__webglTexture,33984+b)}function ue(A,b){const H=n.get(A);if(A.version>0&&H.__version!==A.version){me(H,A,b);return}t.bindTexture(35866,H.__webglTexture,33984+b)}function z(A,b){const H=n.get(A);if(A.version>0&&H.__version!==A.version){me(H,A,b);return}t.bindTexture(32879,H.__webglTexture,33984+b)}function Z(A,b){const H=n.get(A);if(A.version>0&&H.__version!==A.version){de(H,A,b);return}t.bindTexture(34067,H.__webglTexture,33984+b)}const te={[oo]:10497,[on]:33071,[lo]:33648},ne={[bt]:9728,[pl]:9984,[Ks]:9986,[Zt]:9729,[Ff]:9985,[Or]:9987};function B(A,b,H){if(H?(s.texParameteri(A,10242,te[b.wrapS]),s.texParameteri(A,10243,te[b.wrapT]),(A===32879||A===35866)&&s.texParameteri(A,32882,te[b.wrapR]),s.texParameteri(A,10240,ne[b.magFilter]),s.texParameteri(A,10241,ne[b.minFilter])):(s.texParameteri(A,10242,33071),s.texParameteri(A,10243,33071),(A===32879||A===35866)&&s.texParameteri(A,32882,33071),(b.wrapS!==on||b.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,10240,L(b.magFilter)),s.texParameteri(A,10241,L(b.minFilter)),b.minFilter!==bt&&b.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===bt||b.minFilter!==Ks&&b.minFilter!==Or||b.type===di&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Fr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(A,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function ye(A,b){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",G));const ee=b.source;let ie=p.get(ee);ie===void 0&&(ie={},p.set(ee,ie));const se=J(b);if(se!==A.__cacheKey){ie[se]===void 0&&(ie[se]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ie[se].usedTimes++;const ve=ie[A.__cacheKey];ve!==void 0&&(ie[A.__cacheKey].usedTimes--,ve.usedTimes===0&&R(b)),A.__cacheKey=se,A.__webglTexture=ie[se].texture}return H}function me(A,b,H){let ee=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=35866),b.isData3DTexture&&(ee=32879);const ie=ye(A,b),se=b.source;t.bindTexture(ee,A.__webglTexture,33984+H);const ve=n.get(se);if(se.version!==ve.__version||ie===!0){t.activeTexture(33984+H),s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const C=x(b)&&S(b.image)===!1;let O=y(b.image,C,!1,u);O=wt(b,O);const oe=S(O)||a,he=r.convert(b.format,b.encoding);let ae=r.convert(b.type),pe=v(b.internalFormat,he,ae,b.encoding,b.isVideoTexture);B(ee,b,oe);let fe;const Ae=b.mipmaps,Pe=a&&b.isVideoTexture!==!0,Ue=ve.__version===void 0||ie===!0,D=w(b,O,oe);if(b.isDepthTexture)pe=6402,a?b.type===di?pe=36012:b.type===fi?pe=33190:b.type===Qi?pe=35056:pe=33189:b.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===mi&&pe===6402&&b.type!==xu&&b.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=fi,ae=r.convert(b.type)),b.format===sr&&pe===6402&&(pe=34041,b.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Qi,ae=r.convert(b.type))),Ue&&(Pe?t.texStorage2D(3553,1,pe,O.width,O.height):t.texImage2D(3553,0,pe,O.width,O.height,0,he,ae,null));else if(b.isDataTexture)if(Ae.length>0&&oe){Pe&&Ue&&t.texStorage2D(3553,D,pe,Ae[0].width,Ae[0].height);for(let W=0,Q=Ae.length;W<Q;W++)fe=Ae[W],Pe?t.texSubImage2D(3553,W,0,0,fe.width,fe.height,he,ae,fe.data):t.texImage2D(3553,W,pe,fe.width,fe.height,0,he,ae,fe.data);b.generateMipmaps=!1}else Pe?(Ue&&t.texStorage2D(3553,D,pe,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,he,ae,O.data)):t.texImage2D(3553,0,pe,O.width,O.height,0,he,ae,O.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Pe&&Ue&&t.texStorage3D(35866,D,pe,Ae[0].width,Ae[0].height,O.depth);for(let W=0,Q=Ae.length;W<Q;W++)fe=Ae[W],b.format!==ln?he!==null?Pe?t.compressedTexSubImage3D(35866,W,0,0,0,fe.width,fe.height,O.depth,he,fe.data,0,0):t.compressedTexImage3D(35866,W,pe,fe.width,fe.height,O.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(35866,W,0,0,0,fe.width,fe.height,O.depth,he,ae,fe.data):t.texImage3D(35866,W,pe,fe.width,fe.height,O.depth,0,he,ae,fe.data)}else{Pe&&Ue&&t.texStorage2D(3553,D,pe,Ae[0].width,Ae[0].height);for(let W=0,Q=Ae.length;W<Q;W++)fe=Ae[W],b.format!==ln?he!==null?Pe?t.compressedTexSubImage2D(3553,W,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(3553,W,pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(3553,W,0,0,fe.width,fe.height,he,ae,fe.data):t.texImage2D(3553,W,pe,fe.width,fe.height,0,he,ae,fe.data)}else if(b.isDataArrayTexture)Pe?(Ue&&t.texStorage3D(35866,D,pe,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,he,ae,O.data)):t.texImage3D(35866,0,pe,O.width,O.height,O.depth,0,he,ae,O.data);else if(b.isData3DTexture)Pe?(Ue&&t.texStorage3D(32879,D,pe,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,he,ae,O.data)):t.texImage3D(32879,0,pe,O.width,O.height,O.depth,0,he,ae,O.data);else if(b.isFramebufferTexture){if(Ue)if(Pe)t.texStorage2D(3553,D,pe,O.width,O.height);else{let W=O.width,Q=O.height;for(let ce=0;ce<D;ce++)t.texImage2D(3553,ce,pe,W,Q,0,he,ae,null),W>>=1,Q>>=1}}else if(Ae.length>0&&oe){Pe&&Ue&&t.texStorage2D(3553,D,pe,Ae[0].width,Ae[0].height);for(let W=0,Q=Ae.length;W<Q;W++)fe=Ae[W],Pe?t.texSubImage2D(3553,W,0,0,he,ae,fe):t.texImage2D(3553,W,pe,he,ae,fe);b.generateMipmaps=!1}else Pe?(Ue&&t.texStorage2D(3553,D,pe,O.width,O.height),t.texSubImage2D(3553,0,0,0,he,ae,O)):t.texImage2D(3553,0,pe,he,ae,O);E(b,oe)&&P(ee),ve.__version=se.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function de(A,b,H){if(b.image.length!==6)return;const ee=ye(A,b),ie=b.source;t.bindTexture(34067,A.__webglTexture,33984+H);const se=n.get(ie);if(ie.version!==se.__version||ee===!0){t.activeTexture(33984+H),s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const ve=b.isCompressedTexture||b.image[0].isCompressedTexture,C=b.image[0]&&b.image[0].isDataTexture,O=[];for(let W=0;W<6;W++)!ve&&!C?O[W]=y(b.image[W],!1,!0,l):O[W]=C?b.image[W].image:b.image[W],O[W]=wt(b,O[W]);const oe=O[0],he=S(oe)||a,ae=r.convert(b.format,b.encoding),pe=r.convert(b.type),fe=v(b.internalFormat,ae,pe,b.encoding),Ae=a&&b.isVideoTexture!==!0,Pe=se.__version===void 0||ee===!0;let Ue=w(b,oe,he);B(34067,b,he);let D;if(ve){Ae&&Pe&&t.texStorage2D(34067,Ue,fe,oe.width,oe.height);for(let W=0;W<6;W++){D=O[W].mipmaps;for(let Q=0;Q<D.length;Q++){const ce=D[Q];b.format!==ln?ae!==null?Ae?t.compressedTexSubImage2D(34069+W,Q,0,0,ce.width,ce.height,ae,ce.data):t.compressedTexImage2D(34069+W,Q,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(34069+W,Q,0,0,ce.width,ce.height,ae,pe,ce.data):t.texImage2D(34069+W,Q,fe,ce.width,ce.height,0,ae,pe,ce.data)}}}else{D=b.mipmaps,Ae&&Pe&&(D.length>0&&Ue++,t.texStorage2D(34067,Ue,fe,O[0].width,O[0].height));for(let W=0;W<6;W++)if(C){Ae?t.texSubImage2D(34069+W,0,0,0,O[W].width,O[W].height,ae,pe,O[W].data):t.texImage2D(34069+W,0,fe,O[W].width,O[W].height,0,ae,pe,O[W].data);for(let Q=0;Q<D.length;Q++){const ge=D[Q].image[W].image;Ae?t.texSubImage2D(34069+W,Q+1,0,0,ge.width,ge.height,ae,pe,ge.data):t.texImage2D(34069+W,Q+1,fe,ge.width,ge.height,0,ae,pe,ge.data)}}else{Ae?t.texSubImage2D(34069+W,0,0,0,ae,pe,O[W]):t.texImage2D(34069+W,0,fe,ae,pe,O[W]);for(let Q=0;Q<D.length;Q++){const ce=D[Q];Ae?t.texSubImage2D(34069+W,Q+1,0,0,ae,pe,ce.image[W]):t.texImage2D(34069+W,Q+1,fe,ae,pe,ce.image[W])}}}E(b,he)&&P(34067),se.__version=ie.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function le(A,b,H,ee,ie){const se=r.convert(H.format,H.encoding),ve=r.convert(H.type),C=v(H.internalFormat,se,ve,H.encoding);n.get(b).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,C,b.width,b.height,b.depth,0,se,ve,null):t.texImage2D(ie,0,C,b.width,b.height,0,se,ve,null)),t.bindFramebuffer(36160,A),Oe(b)?f.framebufferTexture2DMultisampleEXT(36160,ee,ie,n.get(H).__webglTexture,0,Xe(b)):(ie===3553||ie>=34069&&ie<=34074)&&s.framebufferTexture2D(36160,ee,ie,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(A,b,H){if(s.bindRenderbuffer(36161,A),b.depthBuffer&&!b.stencilBuffer){let ee=33189;if(H||Oe(b)){const ie=b.depthTexture;ie&&ie.isDepthTexture&&(ie.type===di?ee=36012:ie.type===fi&&(ee=33190));const se=Xe(b);Oe(b)?f.renderbufferStorageMultisampleEXT(36161,se,ee,b.width,b.height):s.renderbufferStorageMultisample(36161,se,ee,b.width,b.height)}else s.renderbufferStorage(36161,ee,b.width,b.height);s.framebufferRenderbuffer(36160,36096,36161,A)}else if(b.depthBuffer&&b.stencilBuffer){const ee=Xe(b);H&&Oe(b)===!1?s.renderbufferStorageMultisample(36161,ee,35056,b.width,b.height):Oe(b)?f.renderbufferStorageMultisampleEXT(36161,ee,35056,b.width,b.height):s.renderbufferStorage(36161,34041,b.width,b.height),s.framebufferRenderbuffer(36160,33306,36161,A)}else{const ee=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ie=0;ie<ee.length;ie++){const se=ee[ie],ve=r.convert(se.format,se.encoding),C=r.convert(se.type),O=v(se.internalFormat,ve,C,se.encoding),oe=Xe(b);H&&Oe(b)===!1?s.renderbufferStorageMultisample(36161,oe,O,b.width,b.height):Oe(b)?f.renderbufferStorageMultisampleEXT(36161,oe,O,b.width,b.height):s.renderbufferStorage(36161,O,b.width,b.height)}}s.bindRenderbuffer(36161,null)}function Se(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);const ee=n.get(b.depthTexture).__webglTexture,ie=Xe(b);if(b.depthTexture.format===mi)Oe(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ie):s.framebufferTexture2D(36160,36096,3553,ee,0);else if(b.depthTexture.format===sr)Oe(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ie):s.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function xe(A){const b=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Se(b.__webglFramebuffer,A)}else if(H){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]=s.createRenderbuffer(),Ne(b.__webglDepthbuffer[ee],A,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),Ne(b.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function rt(A,b,H){const ee=n.get(A);b!==void 0&&le(ee.__webglFramebuffer,A,A.texture,36064,3553),H!==void 0&&xe(A)}function ht(A){const b=A.texture,H=n.get(A),ee=n.get(b);A.addEventListener("dispose",j),A.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=b.version,o.memory.textures++);const ie=A.isWebGLCubeRenderTarget===!0,se=A.isWebGLMultipleRenderTargets===!0,ve=S(A)||a;if(ie){H.__webglFramebuffer=[];for(let C=0;C<6;C++)H.__webglFramebuffer[C]=s.createFramebuffer()}else{if(H.__webglFramebuffer=s.createFramebuffer(),se)if(i.drawBuffers){const C=A.texture;for(let O=0,oe=C.length;O<oe;O++){const he=n.get(C[O]);he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Oe(A)===!1){const C=se?b:[b];H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let O=0;O<C.length;O++){const oe=C[O];H.__webglColorRenderbuffer[O]=s.createRenderbuffer(),s.bindRenderbuffer(36161,H.__webglColorRenderbuffer[O]);const he=r.convert(oe.format,oe.encoding),ae=r.convert(oe.type),pe=v(oe.internalFormat,he,ae,oe.encoding,A.isXRRenderTarget===!0),fe=Xe(A);s.renderbufferStorageMultisample(36161,fe,pe,A.width,A.height),s.framebufferRenderbuffer(36160,36064+O,36161,H.__webglColorRenderbuffer[O])}s.bindRenderbuffer(36161,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ee.__webglTexture),B(34067,b,ve);for(let C=0;C<6;C++)le(H.__webglFramebuffer[C],A,b,36064,34069+C);E(b,ve)&&P(34067),t.unbindTexture()}else if(se){const C=A.texture;for(let O=0,oe=C.length;O<oe;O++){const he=C[O],ae=n.get(he);t.bindTexture(3553,ae.__webglTexture),B(3553,he,ve),le(H.__webglFramebuffer,A,he,36064+O,3553),E(he,ve)&&P(3553)}t.unbindTexture()}else{let C=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?C=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,ee.__webglTexture),B(C,b,ve),le(H.__webglFramebuffer,A,b,36064,C),E(b,ve)&&P(C),t.unbindTexture()}A.depthBuffer&&xe(A)}function Ye(A){const b=S(A)||a,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ee=0,ie=H.length;ee<ie;ee++){const se=H[ee];if(E(se,b)){const ve=A.isWebGLCubeRenderTarget?34067:3553,C=n.get(se).__webglTexture;t.bindTexture(ve,C),P(ve),t.unbindTexture()}}}function vt(A){if(a&&A.samples>0&&Oe(A)===!1){const b=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,ee=A.height;let ie=16384;const se=[],ve=A.stencilBuffer?33306:36096,C=n.get(A),O=A.isWebGLMultipleRenderTargets===!0;if(O)for(let oe=0;oe<b.length;oe++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),s.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let oe=0;oe<b.length;oe++){se.push(36064+oe),A.depthBuffer&&se.push(ve);const he=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(he===!1&&(A.depthBuffer&&(ie|=256),A.stencilBuffer&&(ie|=1024)),O&&s.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[oe]),he===!0&&(s.invalidateFramebuffer(36008,[ve]),s.invalidateFramebuffer(36009,[ve])),O){const ae=n.get(b[oe]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,ae,0)}s.blitFramebuffer(0,0,H,ee,0,0,H,ee,ie,9728),m&&s.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),O)for(let oe=0;oe<b.length;oe++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+oe,36161,C.__webglColorRenderbuffer[oe]);const he=n.get(b[oe]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),s.framebufferTexture2D(36009,36064+oe,3553,he,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function Xe(A){return Math.min(d,A.samples)}function Oe(A){const b=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function qt(A){const b=o.render.frame;g.get(A)!==b&&(g.set(A,b),A.update())}function wt(A,b){const H=A.encoding,ee=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===co||H!==Mi&&(H===Ge?a===!1?e.has("EXT_sRGB")===!0&&ee===ln?(A.format=co,A.minFilter=Zt,A.generateMipmaps=!1):b=Su.sRGBToLinear(b):(ee!==ln||ie!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),b}this.allocateTextureUnit=V,this.resetTextureUnits=$,this.setTexture2D=K,this.setTexture2DArray=ue,this.setTexture3D=z,this.setTextureCube=Z,this.rebindTextures=rt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Oe}function j_(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===yi)return 5121;if(r===kf)return 32819;if(r===Bf)return 32820;if(r===Nf)return 5120;if(r===Uf)return 5122;if(r===xu)return 5123;if(r===zf)return 5124;if(r===fi)return 5125;if(r===di)return 5126;if(r===Fr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Gf)return 6406;if(r===ln)return 6408;if(r===Vf)return 6409;if(r===Hf)return 6410;if(r===mi)return 6402;if(r===sr)return 34041;if(r===co)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Wf)return 6403;if(r===qf)return 36244;if(r===Xf)return 33319;if(r===jf)return 33320;if(r===Yf)return 36249;if(r===Js||r===Qs||r===ea||r===ta)if(o===Ge)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Js)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Js)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ea)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ta)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ml||r===gl||r===_l||r===xl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ml)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===gl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_l)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$f)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===vl||r===yl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===vl)return o===Ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===yl)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ml||r===Sl||r===bl||r===wl||r===Tl||r===El||r===Al||r===Cl||r===Pl||r===Ll||r===Dl||r===Rl||r===Il||r===Ol)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ml)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sl)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bl)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wl)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Tl)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===El)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Al)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cl)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pl)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ll)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Dl)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rl)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Il)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ol)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===na)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===na)return o===Ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Zf||r===Fl||r===Nl||r===Ul)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===na)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Fl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ul)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Y_ extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gs extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $_={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,n),_=this._getHandJoint(l,h);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Z_ extends Ct{constructor(e,t,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:mi,u!==mi&&u!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mi&&(n=fi),n===void 0&&u===sr&&(n=Qi),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=c!==void 0?c:bt,this.flipY=!1,this.generateMipmaps=!1}}class K_ extends Ai{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,m=null,g=null;const h=t.getContextAttributes();let p=null,_=null;const M=[],y=[],S=new Set,x=new Map,E=new Kt;E.layers.enable(1),E.viewport=new lt;const P=new Kt;P.layers.enable(2),P.viewport=new lt;const v=[E,P],w=new Y_;w.layers.enable(1),w.layers.enable(2);let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Z=M[z];return Z===void 0&&(Z=new Pa,M[z]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(z){let Z=M[z];return Z===void 0&&(Z=new Pa,M[z]=Z),Z.getGripSpace()},this.getHand=function(z){let Z=M[z];return Z===void 0&&(Z=new Pa,M[z]=Z),Z.getHandSpace()};function j(z){const Z=y.indexOf(z.inputSource);if(Z===-1)return;const te=M[Z];te!==void 0&&te.dispatchEvent({type:z.type,data:z.inputSource})}function I(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",R);for(let z=0;z<M.length;z++){const Z=y[z];Z!==null&&(y[z]=null,M[z].disconnect(Z))}L=null,G=null,e.setRenderTarget(p),m=null,f=null,d=null,i=null,_=null,ue.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",I),i.addEventListener("inputsourceschange",R),h.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:m}),_=new Si(m.framebufferWidth,m.framebufferHeight,{format:ln,type:yi,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let Z=null,te=null,ne=null;h.depth&&(ne=h.stencil?35056:33190,Z=h.stencil?sr:mi,te=h.stencil?Qi:fi);const B={colorFormat:32856,depthFormat:ne,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(B),i.updateRenderState({layers:[f]}),_=new Si(f.textureWidth,f.textureHeight,{format:ln,type:yi,depthTexture:new Z_(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const ye=e.properties.get(_);ye.__ignoreDepthValues=f.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(z){for(let Z=0;Z<z.removed.length;Z++){const te=z.removed[Z],ne=y.indexOf(te);ne>=0&&(y[ne]=null,M[ne].disconnect(te))}for(let Z=0;Z<z.added.length;Z++){const te=z.added[Z];let ne=y.indexOf(te);if(ne===-1){for(let ye=0;ye<M.length;ye++)if(ye>=y.length){y.push(te),ne=ye;break}else if(y[ye]===null){y[ye]=te,ne=ye;break}if(ne===-1)break}const B=M[ne];B&&B.connect(te)}}const k=new U,Y=new U;function $(z,Z,te){k.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(te.matrixWorld);const ne=k.distanceTo(Y),B=Z.projectionMatrix.elements,ye=te.projectionMatrix.elements,me=B[14]/(B[10]-1),de=B[14]/(B[10]+1),le=(B[9]+1)/B[5],Ne=(B[9]-1)/B[5],Se=(B[8]-1)/B[0],xe=(ye[8]+1)/ye[0],rt=me*Se,ht=me*xe,Ye=ne/(-Se+xe),vt=Ye*-Se;Z.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(vt),z.translateZ(Ye),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Xe=me+Ye,Oe=de+Ye,qt=rt-vt,wt=ht+(ne-vt),A=le*de/Oe*Xe,b=Ne*de/Oe*Xe;z.projectionMatrix.makePerspective(qt,wt,A,b,Xe,Oe)}function V(z,Z){Z===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Z.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;w.near=P.near=E.near=z.near,w.far=P.far=E.far=z.far,(L!==w.near||G!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,G=w.far);const Z=z.parent,te=w.cameras;V(w,Z);for(let B=0;B<te.length;B++)V(te[B],Z);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),z.matrix.copy(w.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const ne=z.children;for(let B=0,ye=ne.length;B<ye;B++)ne[B].updateMatrixWorld(!0);te.length===2?$(w,E,P):w.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(z){c=z,f!==null&&(f.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.getPlanes=function(){return S};let J=null;function K(z,Z){if(u=Z.getViewerPose(l||o),g=Z,u!==null){const te=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let ne=!1;te.length!==w.cameras.length&&(w.cameras.length=0,ne=!0);for(let B=0;B<te.length;B++){const ye=te[B];let me=null;if(m!==null)me=m.getViewport(ye);else{const le=d.getViewSubImage(f,ye);me=le.viewport,B===0&&(e.setRenderTargetTextures(_,le.colorTexture,f.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(_))}let de=v[B];de===void 0&&(de=new Kt,de.layers.enable(B),de.viewport=new lt,v[B]=de),de.matrix.fromArray(ye.transform.matrix),de.projectionMatrix.fromArray(ye.projectionMatrix),de.viewport.set(me.x,me.y,me.width,me.height),B===0&&w.matrix.copy(de.matrix),ne===!0&&w.cameras.push(de)}}for(let te=0;te<M.length;te++){const ne=y[te],B=M[te];ne!==null&&B!==void 0&&B.update(ne,Z,l||o)}if(J&&J(z,Z),Z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let te=null;for(const ne of S)Z.detectedPlanes.has(ne)||(te===null&&(te=[]),te.push(ne));if(te!==null)for(const ne of te)S.delete(ne),x.delete(ne),n.dispatchEvent({type:"planeremoved",data:ne});for(const ne of Z.detectedPlanes)if(!S.has(ne))S.add(ne),x.set(ne,Z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ne});else{const B=x.get(ne);ne.lastChangedTime>B&&(x.set(ne,ne.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ne}))}}g=null}const ue=new Du;ue.setAnimationLoop(K),this.setAnimationLoop=function(z){J=z},this.dispose=function(){}}}function J_(s,e){function t(h,p){p.color.getRGB(h.fogColor.value,Cu(s)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function n(h,p,_,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(h,p):p.isMeshToonMaterial?(i(h,p),u(h,p)):p.isMeshPhongMaterial?(i(h,p),l(h,p)):p.isMeshStandardMaterial?(i(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,y)):p.isMeshMatcapMaterial?(i(h,p),m(h,p)):p.isMeshDepthMaterial?i(h,p):p.isMeshDistanceMaterial?(i(h,p),g(h,p)):p.isMeshNormalMaterial?i(h,p):p.isLineBasicMaterial?(r(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,_,M):p.isSpriteMaterial?c(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===Bt&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===Bt&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(h.envMap.value=_,h.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const S=s.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),h.uvTransform.value.copy(M.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),h.uv2Transform.value.copy(y.matrix))}function r(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,_,M){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*_,h.scale.value=M*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),h.uvTransform.value.copy(y.matrix))}function c(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function l(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function u(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,_){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Bt&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=_.texture,h.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function g(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Q_(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function c(M,y){const S=y.program;n.uniformBlockBinding(M,S)}function l(M,y){let S=i[M.id];S===void 0&&(g(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",p));const x=y.program;n.updateUBOMapping(M,x);const E=e.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function u(M){const y=d();M.__bindingPointIndex=y;const S=s.createBuffer(),x=M.__size,E=M.usage;return s.bindBuffer(35345,S),s.bufferData(35345,x,E),s.bindBuffer(35345,null),s.bindBufferBase(35345,y,S),S}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=i[M.id],S=M.uniforms,x=M.__cache;s.bindBuffer(35345,y);for(let E=0,P=S.length;E<P;E++){const v=S[E];if(m(v,E,x)===!0){const w=v.__offset,L=Array.isArray(v.value)?v.value:[v.value];let G=0;for(let j=0;j<L.length;j++){const I=L[j],R=h(I);typeof I=="number"?(v.__data[0]=I,s.bufferSubData(35345,w+G,v.__data)):I.isMatrix3?(v.__data[0]=I.elements[0],v.__data[1]=I.elements[1],v.__data[2]=I.elements[2],v.__data[3]=I.elements[0],v.__data[4]=I.elements[3],v.__data[5]=I.elements[4],v.__data[6]=I.elements[5],v.__data[7]=I.elements[0],v.__data[8]=I.elements[6],v.__data[9]=I.elements[7],v.__data[10]=I.elements[8],v.__data[11]=I.elements[0]):(I.toArray(v.__data,G),G+=R.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,w,v.__data)}}s.bindBuffer(35345,null)}function m(M,y,S){const x=M.value;if(S[y]===void 0){if(typeof x=="number")S[y]=x;else{const E=Array.isArray(x)?x:[x],P=[];for(let v=0;v<E.length;v++)P.push(E[v].clone());S[y]=P}return!0}else if(typeof x=="number"){if(S[y]!==x)return S[y]=x,!0}else{const E=Array.isArray(S[y])?S[y]:[S[y]],P=Array.isArray(x)?x:[x];for(let v=0;v<E.length;v++){const w=E[v];if(w.equals(P[v])===!1)return w.copy(P[v]),!0}}return!1}function g(M){const y=M.uniforms;let S=0;const x=16;let E=0;for(let P=0,v=y.length;P<v;P++){const w=y[P],L={boundary:0,storage:0},G=Array.isArray(w.value)?w.value:[w.value];for(let j=0,I=G.length;j<I;j++){const R=G[j],k=h(R);L.boundary+=k.boundary,L.storage+=k.storage}if(w.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=S,P>0){E=S%x;const j=x-E;E!==0&&j-L.boundary<0&&(S+=x-E,w.__offset=S)}S+=L.storage}return E=S%x,E>0&&(S+=x-E),M.__size=S,M.__cache={},this}function h(M){const y={boundary:0,storage:0};return typeof M=="number"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){const y=M.target;y.removeEventListener("dispose",p);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function _(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:_}}function e0(){const s=Ur("canvas");return s.style.display="block",s}function t0(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:e0(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let d=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mi,this.physicallyCorrectLights=!1,this.toneMapping=On,this.toneMappingExposure=1;const h=this;let p=!1,_=0,M=0,y=null,S=-1,x=null;const E=new lt,P=new lt;let v=null,w=e.width,L=e.height,G=1,j=null,I=null;const R=new lt(0,0,w,L),k=new lt(0,0,w,L);let Y=!1;const $=new Oo;let V=!1,J=!1,K=null;const ue=new tt,z=new we,Z=new U,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return y===null?G:1}let B=t;function ye(T,N){for(let q=0;q<T.length;q++){const F=T[q],X=e.getContext(F,N);if(X!==null)return X}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Do}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Ae,!1),B===null){const N=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&N.shift(),B=ye(N,T),B===null)throw ye(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let me,de,le,Ne,Se,xe,rt,ht,Ye,vt,Xe,Oe,qt,wt,A,b,H,ee,ie,se,ve,C,O,oe;function he(){me=new hg(B),de=new sg(B,me,s),me.init(de),C=new j_(B,me,de),le=new q_(B,me,de),Ne=new pg,Se=new D_,xe=new X_(B,me,le,Se,de,C,Ne),rt=new og(h),ht=new ug(h),Ye=new bd(B,de),O=new ig(B,me,Ye,de),vt=new fg(B,Ye,Ne,O),Xe=new xg(B,vt,Ye,Ne),ie=new _g(B,de,xe),b=new ag(Se),Oe=new L_(h,rt,ht,me,de,O,b),qt=new J_(h,Se),wt=new I_,A=new k_(me,de),ee=new ng(h,rt,ht,le,Xe,u,o),H=new W_(h,Xe,de),oe=new Q_(B,Ne,de,le),se=new rg(B,me,Ne,de),ve=new dg(B,me,Ne,de),Ne.programs=Oe.programs,h.capabilities=de,h.extensions=me,h.properties=Se,h.renderLists=wt,h.shadowMap=H,h.state=le,h.info=Ne}he();const ae=new K_(h,B);this.xr=ae,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(w,L,!1))},this.getSize=function(T){return T.set(w,L)},this.setSize=function(T,N,q){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,L=N,e.width=Math.floor(T*G),e.height=Math.floor(N*G),q!==!1&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(w*G,L*G).floor()},this.setDrawingBufferSize=function(T,N,q){w=T,L=N,G=q,e.width=Math.floor(T*q),e.height=Math.floor(N*q),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,N,q,F){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,N,q,F),le.viewport(E.copy(R).multiplyScalar(G).floor())},this.getScissor=function(T){return T.copy(k)},this.setScissor=function(T,N,q,F){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,N,q,F),le.scissor(P.copy(k).multiplyScalar(G).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(T){le.setScissorTest(Y=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(T=!0,N=!0,q=!0){let F=0;T&&(F|=16384),N&&(F|=256),q&&(F|=1024),B.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Ae,!1),wt.dispose(),A.dispose(),Se.dispose(),rt.dispose(),ht.dispose(),Xe.dispose(),O.dispose(),oe.dispose(),Oe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ce),ae.removeEventListener("sessionend",ge),K&&(K.dispose(),K=null),Fe.stop()};function pe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Ne.autoReset,N=H.enabled,q=H.autoUpdate,F=H.needsUpdate,X=H.type;he(),Ne.autoReset=T,H.enabled=N,H.autoUpdate=q,H.needsUpdate=F,H.type=X}function Ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pe(T){const N=T.target;N.removeEventListener("dispose",Pe),Ue(N)}function Ue(T){D(T),Se.remove(T)}function D(T){const N=Se.get(T).programs;N!==void 0&&(N.forEach(function(q){Oe.releaseProgram(q)}),T.isShaderMaterial&&Oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,q,F,X,_e){N===null&&(N=te);const Me=X.isMesh&&X.matrixWorld.determinant()<0,Te=tf(T,N,q,F,X);le.setMaterial(F,Me);let Ee=q.index,Ie=1;F.wireframe===!0&&(Ee=vt.getWireframeAttribute(q),Ie=2);const Le=q.drawRange,De=q.attributes.position;let $e=Le.start*Ie,Rt=(Le.start+Le.count)*Ie;_e!==null&&($e=Math.max($e,_e.start*Ie),Rt=Math.min(Rt,(_e.start+_e.count)*Ie)),Ee!==null?($e=Math.max($e,0),Rt=Math.min(Rt,Ee.count)):De!=null&&($e=Math.max($e,0),Rt=Math.min(Rt,De.count));const Sn=Rt-$e;if(Sn<0||Sn===1/0)return;O.setup(X,F,Te,q,Ee);let ei,Ze=se;if(Ee!==null&&(ei=Ye.get(Ee),Ze=ve,Ze.setIndex(ei)),X.isMesh)F.wireframe===!0?(le.setLineWidth(F.wireframeLinewidth*ne()),Ze.setMode(1)):Ze.setMode(4);else if(X.isLine){let Re=F.linewidth;Re===void 0&&(Re=1),le.setLineWidth(Re*ne()),X.isLineSegments?Ze.setMode(1):X.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else X.isPoints?Ze.setMode(0):X.isSprite&&Ze.setMode(4);if(X.isInstancedMesh)Ze.renderInstances($e,Sn,X.count);else if(q.isInstancedBufferGeometry){const Re=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,js=Math.min(q.instanceCount,Re);Ze.renderInstances($e,Sn,js)}else Ze.render($e,Sn)},this.compile=function(T,N){function q(F,X,_e){F.transparent===!0&&F.side===Rn&&F.forceSinglePass===!1?(F.side=Bt,F.needsUpdate=!0,Xt(F,X,_e),F.side=Yn,F.needsUpdate=!0,Xt(F,X,_e),F.side=Rn):Xt(F,X,_e)}f=A.get(T),f.init(),g.push(f),T.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights(h.physicallyCorrectLights),T.traverse(function(F){const X=F.material;if(X)if(Array.isArray(X))for(let _e=0;_e<X.length;_e++){const Me=X[_e];q(Me,T,F)}else q(X,T,F)}),g.pop(),f=null};let W=null;function Q(T){W&&W(T)}function ce(){Fe.stop()}function ge(){Fe.start()}const Fe=new Du;Fe.setAnimationLoop(Q),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(T){W=T,ae.setAnimationLoop(T),T===null?Fe.stop():Fe.start()},ae.addEventListener("sessionstart",ce),ae.addEventListener("sessionend",ge),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(N),N=ae.getCamera()),T.isScene===!0&&T.onBeforeRender(h,T,N,y),f=A.get(T,g.length),f.init(),g.push(f),ue.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(ue),J=this.localClippingEnabled,V=b.init(this.clippingPlanes,J),d=wt.get(T,m.length),d.init(),m.push(d),st(T,N,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(j,I),V===!0&&b.beginShadows();const q=f.state.shadowsArray;if(H.render(q,T,N),V===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(d,T),f.setupLights(h.physicallyCorrectLights),N.isArrayCamera){const F=N.cameras;for(let X=0,_e=F.length;X<_e;X++){const Me=F[X];ft(d,T,Me,Me.viewport)}}else ft(d,T,N);y!==null&&(xe.updateMultisampleRenderTarget(y),xe.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(h,T,N),O.resetDefaultState(),S=-1,x=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function st(T,N,q,F){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){F&&Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);const Me=Xe.update(T),Te=T.material;Te.visible&&d.push(T,Me,Te,q,Z.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ne.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ne.render.frame),!T.frustumCulled||$.intersectsObject(T))){F&&Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);const Me=Xe.update(T),Te=T.material;if(Array.isArray(Te)){const Ee=Me.groups;for(let Ie=0,Le=Ee.length;Ie<Le;Ie++){const De=Ee[Ie],$e=Te[De.materialIndex];$e&&$e.visible&&d.push(T,Me,$e,q,Z.z,De)}}else Te.visible&&d.push(T,Me,Te,q,Z.z,null)}}const _e=T.children;for(let Me=0,Te=_e.length;Me<Te;Me++)st(_e[Me],N,q,F)}function ft(T,N,q,F){const X=T.opaque,_e=T.transmissive,Me=T.transparent;f.setupLightsView(q),V===!0&&b.setGlobalState(h.clippingPlanes,q),_e.length>0&&Qn(X,N,q),F&&le.viewport(E.copy(F)),X.length>0&&Ve(X,N,q),_e.length>0&&Ve(_e,N,q),Me.length>0&&Ve(Me,N,q),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Qn(T,N,q){const F=de.isWebGL2;K===null&&(K=new Si(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?Fr:yi,minFilter:Or,samples:F&&r===!0?4:0})),h.getDrawingBufferSize(z),F?K.setSize(z.x,z.y):K.setSize(uo(z.x),uo(z.y));const X=h.getRenderTarget();h.setRenderTarget(K),h.clear();const _e=h.toneMapping;h.toneMapping=On,Ve(T,N,q),h.toneMapping=_e,xe.updateMultisampleRenderTarget(K),xe.updateRenderTargetMipmap(K),h.setRenderTarget(X)}function Ve(T,N,q){const F=N.isScene===!0?N.overrideMaterial:null;for(let X=0,_e=T.length;X<_e;X++){const Me=T[X],Te=Me.object,Ee=Me.geometry,Ie=F===null?Me.material:F,Le=Me.group;Te.layers.test(q.layers)&&Mn(Te,N,q,Ee,Ie,Le)}}function Mn(T,N,q,F,X,_e){T.onBeforeRender(h,N,q,F,X,_e),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(h,N,q,F,T,_e),X.transparent===!0&&X.side===Rn&&X.forceSinglePass===!1?(X.side=Bt,X.needsUpdate=!0,h.renderBufferDirect(q,N,F,X,T,_e),X.side=Yn,X.needsUpdate=!0,h.renderBufferDirect(q,N,F,X,T,_e),X.side=Rn):h.renderBufferDirect(q,N,F,X,T,_e),T.onAfterRender(h,N,q,F,X,_e)}function Xt(T,N,q){N.isScene!==!0&&(N=te);const F=Se.get(T),X=f.state.lights,_e=f.state.shadowsArray,Me=X.state.version,Te=Oe.getParameters(T,X.state,_e,N,q),Ee=Oe.getProgramCacheKey(Te);let Ie=F.programs;F.environment=T.isMeshStandardMaterial?N.environment:null,F.fog=N.fog,F.envMap=(T.isMeshStandardMaterial?ht:rt).get(T.envMap||F.environment),Ie===void 0&&(T.addEventListener("dispose",Pe),Ie=new Map,F.programs=Ie);let Le=Ie.get(Ee);if(Le!==void 0){if(F.currentProgram===Le&&F.lightsStateVersion===Me)return sl(T,Te),Le}else Te.uniforms=Oe.getUniforms(T),T.onBuild(q,Te,h),T.onBeforeCompile(Te,h),Le=Oe.acquireProgram(Te,Ee),Ie.set(Ee,Le),F.uniforms=Te.uniforms;const De=F.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=b.uniform),sl(T,Te),F.needsLights=rf(T),F.lightsStateVersion=Me,F.needsLights&&(De.ambientLightColor.value=X.state.ambient,De.lightProbe.value=X.state.probe,De.directionalLights.value=X.state.directional,De.directionalLightShadows.value=X.state.directionalShadow,De.spotLights.value=X.state.spot,De.spotLightShadows.value=X.state.spotShadow,De.rectAreaLights.value=X.state.rectArea,De.ltc_1.value=X.state.rectAreaLTC1,De.ltc_2.value=X.state.rectAreaLTC2,De.pointLights.value=X.state.point,De.pointLightShadows.value=X.state.pointShadow,De.hemisphereLights.value=X.state.hemi,De.directionalShadowMap.value=X.state.directionalShadowMap,De.directionalShadowMatrix.value=X.state.directionalShadowMatrix,De.spotShadowMap.value=X.state.spotShadowMap,De.spotLightMatrix.value=X.state.spotLightMatrix,De.spotLightMap.value=X.state.spotLightMap,De.pointShadowMap.value=X.state.pointShadowMap,De.pointShadowMatrix.value=X.state.pointShadowMatrix);const $e=Le.getUniforms(),Rt=vs.seqWithValue($e.seq,De);return F.currentProgram=Le,F.uniformsList=Rt,Le}function sl(T,N){const q=Se.get(T);q.outputEncoding=N.outputEncoding,q.instancing=N.instancing,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function tf(T,N,q,F,X){N.isScene!==!0&&(N=te),xe.resetTextureUnits();const _e=N.fog,Me=F.isMeshStandardMaterial?N.environment:null,Te=y===null?h.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Mi,Ee=(F.isMeshStandardMaterial?ht:rt).get(F.envMap||Me),Ie=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Le=!!F.normalMap&&!!q.attributes.tangent,De=!!q.morphAttributes.position,$e=!!q.morphAttributes.normal,Rt=!!q.morphAttributes.color,Sn=F.toneMapped?h.toneMapping:On,ei=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ze=ei!==void 0?ei.length:0,Re=Se.get(F),js=f.state.lights;if(V===!0&&(J===!0||T!==x)){const It=T===x&&F.id===S;b.setState(F,T,It)}let at=!1;F.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==js.state.version||Re.outputEncoding!==Te||X.isInstancedMesh&&Re.instancing===!1||!X.isInstancedMesh&&Re.instancing===!0||X.isSkinnedMesh&&Re.skinning===!1||!X.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==Ee||F.fog===!0&&Re.fog!==_e||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==b.numPlanes||Re.numIntersection!==b.numIntersection)||Re.vertexAlphas!==Ie||Re.vertexTangents!==Le||Re.morphTargets!==De||Re.morphNormals!==$e||Re.morphColors!==Rt||Re.toneMapping!==Sn||de.isWebGL2===!0&&Re.morphTargetsCount!==Ze)&&(at=!0):(at=!0,Re.__version=F.version);let ti=Re.currentProgram;at===!0&&(ti=Xt(F,N,X));let al=!1,_r=!1,Ys=!1;const yt=ti.getUniforms(),ni=Re.uniforms;if(le.useProgram(ti.program)&&(al=!0,_r=!0,Ys=!0),F.id!==S&&(S=F.id,_r=!0),al||x!==T){if(yt.setValue(B,"projectionMatrix",T.projectionMatrix),de.logarithmicDepthBuffer&&yt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),x!==T&&(x=T,_r=!0,Ys=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const It=yt.map.cameraPosition;It!==void 0&&It.setValue(B,Z.setFromMatrixPosition(T.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&yt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||X.isSkinnedMesh)&&yt.setValue(B,"viewMatrix",T.matrixWorldInverse)}if(X.isSkinnedMesh){yt.setOptional(B,X,"bindMatrix"),yt.setOptional(B,X,"bindMatrixInverse");const It=X.skeleton;It&&(de.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),yt.setValue(B,"boneTexture",It.boneTexture,xe),yt.setValue(B,"boneTextureSize",It.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const $s=q.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0&&de.isWebGL2===!0)&&ie.update(X,q,F,ti),(_r||Re.receiveShadow!==X.receiveShadow)&&(Re.receiveShadow=X.receiveShadow,yt.setValue(B,"receiveShadow",X.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(ni.envMap.value=Ee,ni.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),_r&&(yt.setValue(B,"toneMappingExposure",h.toneMappingExposure),Re.needsLights&&nf(ni,Ys),_e&&F.fog===!0&&qt.refreshFogUniforms(ni,_e),qt.refreshMaterialUniforms(ni,F,G,L,K),vs.upload(B,Re.uniformsList,ni,xe)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(vs.upload(B,Re.uniformsList,ni,xe),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&yt.setValue(B,"center",X.center),yt.setValue(B,"modelViewMatrix",X.modelViewMatrix),yt.setValue(B,"normalMatrix",X.normalMatrix),yt.setValue(B,"modelMatrix",X.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const It=F.uniformsGroups;for(let Zs=0,sf=It.length;Zs<sf;Zs++)if(de.isWebGL2){const ol=It[Zs];oe.update(ol,ti),oe.bind(ol,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function nf(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function rf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,N,q){Se.get(T.texture).__webglTexture=N,Se.get(T.depthTexture).__webglTexture=q;const F=Se.get(T);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){const q=Se.get(T);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,q=0){y=T,_=N,M=q;let F=!0,X=null,_e=!1,Me=!1;if(T){const Ee=Se.get(T);Ee.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),F=!1):Ee.__webglFramebuffer===void 0?xe.setupRenderTarget(T):Ee.__hasExternalTextures&&xe.rebindTextures(T,Se.get(T.texture).__webglTexture,Se.get(T.depthTexture).__webglTexture);const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Me=!0);const Le=Se.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(X=Le[N],_e=!0):de.isWebGL2&&T.samples>0&&xe.useMultisampledRTT(T)===!1?X=Se.get(T).__webglMultisampledFramebuffer:X=Le,E.copy(T.viewport),P.copy(T.scissor),v=T.scissorTest}else E.copy(R).multiplyScalar(G).floor(),P.copy(k).multiplyScalar(G).floor(),v=Y;if(le.bindFramebuffer(36160,X)&&de.drawBuffers&&F&&le.drawBuffers(T,X),le.viewport(E),le.scissor(P),le.setScissorTest(v),_e){const Ee=Se.get(T.texture);B.framebufferTexture2D(36160,36064,34069+N,Ee.__webglTexture,q)}else if(Me){const Ee=Se.get(T.texture),Ie=N||0;B.framebufferTextureLayer(36160,36064,Ee.__webglTexture,q||0,Ie)}S=-1},this.readRenderTargetPixels=function(T,N,q,F,X,_e,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){le.bindFramebuffer(36160,Te);try{const Ee=T.texture,Ie=Ee.format,Le=Ee.type;if(Ie!==ln&&C.convert(Ie)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===Fr&&(me.has("EXT_color_buffer_half_float")||de.isWebGL2&&me.has("EXT_color_buffer_float"));if(Le!==yi&&C.convert(Le)!==B.getParameter(35738)&&!(Le===di&&(de.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-F&&q>=0&&q<=T.height-X&&B.readPixels(N,q,F,X,C.convert(Ie),C.convert(Le),_e)}finally{const Ee=y!==null?Se.get(y).__webglFramebuffer:null;le.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(T,N,q=0){const F=Math.pow(2,-q),X=Math.floor(N.image.width*F),_e=Math.floor(N.image.height*F);xe.setTexture2D(N,0),B.copyTexSubImage2D(3553,q,0,0,T.x,T.y,X,_e),le.unbindTexture()},this.copyTextureToTexture=function(T,N,q,F=0){const X=N.image.width,_e=N.image.height,Me=C.convert(q.format),Te=C.convert(q.type);xe.setTexture2D(q,0),B.pixelStorei(37440,q.flipY),B.pixelStorei(37441,q.premultiplyAlpha),B.pixelStorei(3317,q.unpackAlignment),N.isDataTexture?B.texSubImage2D(3553,F,T.x,T.y,X,_e,Me,Te,N.image.data):N.isCompressedTexture?B.compressedTexSubImage2D(3553,F,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,Me,N.mipmaps[0].data):B.texSubImage2D(3553,F,T.x,T.y,Me,Te,N.image),F===0&&q.generateMipmaps&&B.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(T,N,q,F,X=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=T.max.x-T.min.x+1,Me=T.max.y-T.min.y+1,Te=T.max.z-T.min.z+1,Ee=C.convert(F.format),Ie=C.convert(F.type);let Le;if(F.isData3DTexture)xe.setTexture3D(F,0),Le=32879;else if(F.isDataArrayTexture)xe.setTexture2DArray(F,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,F.flipY),B.pixelStorei(37441,F.premultiplyAlpha),B.pixelStorei(3317,F.unpackAlignment);const De=B.getParameter(3314),$e=B.getParameter(32878),Rt=B.getParameter(3316),Sn=B.getParameter(3315),ei=B.getParameter(32877),Ze=q.isCompressedTexture?q.mipmaps[0]:q.image;B.pixelStorei(3314,Ze.width),B.pixelStorei(32878,Ze.height),B.pixelStorei(3316,T.min.x),B.pixelStorei(3315,T.min.y),B.pixelStorei(32877,T.min.z),q.isDataTexture||q.isData3DTexture?B.texSubImage3D(Le,X,N.x,N.y,N.z,_e,Me,Te,Ee,Ie,Ze.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Le,X,N.x,N.y,N.z,_e,Me,Te,Ee,Ze.data)):B.texSubImage3D(Le,X,N.x,N.y,N.z,_e,Me,Te,Ee,Ie,Ze),B.pixelStorei(3314,De),B.pixelStorei(32878,$e),B.pixelStorei(3316,Rt),B.pixelStorei(3315,Sn),B.pixelStorei(32877,ei),X===0&&F.generateMipmaps&&B.generateMipmap(Le),le.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?xe.setTextureCube(T,0):T.isData3DTexture?xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xe.setTexture2DArray(T,0):xe.setTexture2D(T,0),le.unbindTexture()},this.resetState=function(){_=0,M=0,y=null,le.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Uu extends t0{}Uu.prototype.isWebGL1Renderer=!0;class n0 extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Bs extends Kn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new U,f=new U,m=[],g=[],h=[],p=[];for(let _=0;_<=n;_++){const M=[],y=_/n;let S=0;_==0&&o==0?S=.5/t:_==n&&c==Math.PI&&(S=-.5/t);for(let x=0;x<=t;x++){const E=x/t;d.x=-e*Math.cos(i+E*r)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(i+E*r)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),h.push(f.x,f.y,f.z),p.push(E+S,1-y),M.push(l++)}u.push(M)}for(let _=0;_<n;_++)for(let M=0;M<t;M++){const y=u[_][M+1],S=u[_][M],x=u[_+1][M],E=u[_+1][M+1];(_!==0||o>0)&&m.push(y,S,E),(_!==n-1||c<Math.PI)&&m.push(S,x,E)}this.setIndex(m),this.setAttribute("position",new _n(g,3)),this.setAttribute("normal",new _n(h,3)),this.setAttribute("uv",new _n(p,2))}static fromJSON(e){return new Bs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class i0 extends Xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vu,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const yc={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class r0{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const s0=new r0;class zu{constructor(e){this.manager=e!==void 0?e:s0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class a0 extends zu{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=yc.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ur("img");function c(){u(),yc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class ku extends zu{constructor(e){super(e)}load(e,t,n,i){const r=new Ct,o=new a0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class o0 extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const La=new tt,Mc=new U,Sc=new U;class l0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oo,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Mc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mc),Sc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sc),t.updateMatrixWorld(),La.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class c0 extends l0{constructor(){super(new Ru(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class u0 extends o0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new c0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);const wc={type:"change"},Da={type:"start"},Tc={type:"end"};class h0 extends Ai{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",wt),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(wc),n.update(),r=i.NONE},this.update=function(){const C=new U,O=new bi().setFromUnitVectors(e.up,new U(0,1,0)),oe=O.clone().invert(),he=new U,ae=new bi,pe=2*Math.PI;return function(){const Ae=n.object.position;C.copy(Ae).sub(n.target),C.applyQuaternion(O),a.setFromVector3(C),n.autoRotate&&r===i.NONE&&w(P()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Pe=n.minAzimuthAngle,Ue=n.maxAzimuthAngle;return isFinite(Pe)&&isFinite(Ue)&&(Pe<-Math.PI?Pe+=pe:Pe>Math.PI&&(Pe-=pe),Ue<-Math.PI?Ue+=pe:Ue>Math.PI&&(Ue-=pe),Pe<=Ue?a.theta=Math.max(Pe,Math.min(Ue,a.theta)):a.theta=a.theta>(Pe+Ue)/2?Math.max(Pe,a.theta):Math.min(Ue,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),C.setFromSpherical(a),C.applyQuaternion(oe),Ae.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,d||he.distanceToSquared(n.object.position)>o||8*(1-ae.dot(n.object.quaternion))>o?(n.dispatchEvent(wc),he.copy(n.object.position),ae.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",H),n.domElement.removeEventListener("pointerdown",rt),n.domElement.removeEventListener("pointercancel",vt),n.domElement.removeEventListener("wheel",qt),n.domElement.removeEventListener("pointermove",ht),n.domElement.removeEventListener("pointerup",Ye),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",wt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new bc,c=new bc;let l=1;const u=new U;let d=!1;const f=new we,m=new we,g=new we,h=new we,p=new we,_=new we,M=new we,y=new we,S=new we,x=[],E={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function w(C){c.theta-=C}function L(C){c.phi-=C}const G=function(){const C=new U;return function(oe,he){C.setFromMatrixColumn(he,0),C.multiplyScalar(-oe),u.add(C)}}(),j=function(){const C=new U;return function(oe,he){n.screenSpacePanning===!0?C.setFromMatrixColumn(he,1):(C.setFromMatrixColumn(he,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(oe),u.add(C)}}(),I=function(){const C=new U;return function(oe,he){const ae=n.domElement;if(n.object.isPerspectiveCamera){const pe=n.object.position;C.copy(pe).sub(n.target);let fe=C.length();fe*=Math.tan(n.object.fov/2*Math.PI/180),G(2*oe*fe/ae.clientHeight,n.object.matrix),j(2*he*fe/ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(G(oe*(n.object.right-n.object.left)/n.object.zoom/ae.clientWidth,n.object.matrix),j(he*(n.object.top-n.object.bottom)/n.object.zoom/ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(C){n.object.isPerspectiveCamera?l/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(C){n.object.isPerspectiveCamera?l*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(C){f.set(C.clientX,C.clientY)}function $(C){M.set(C.clientX,C.clientY)}function V(C){h.set(C.clientX,C.clientY)}function J(C){m.set(C.clientX,C.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const O=n.domElement;w(2*Math.PI*g.x/O.clientHeight),L(2*Math.PI*g.y/O.clientHeight),f.copy(m),n.update()}function K(C){y.set(C.clientX,C.clientY),S.subVectors(y,M),S.y>0?R(v()):S.y<0&&k(v()),M.copy(y),n.update()}function ue(C){p.set(C.clientX,C.clientY),_.subVectors(p,h).multiplyScalar(n.panSpeed),I(_.x,_.y),h.copy(p),n.update()}function z(C){C.deltaY<0?k(v()):C.deltaY>0&&R(v()),n.update()}function Z(C){let O=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),O=!0;break}O&&(C.preventDefault(),n.update())}function te(){if(x.length===1)f.set(x[0].pageX,x[0].pageY);else{const C=.5*(x[0].pageX+x[1].pageX),O=.5*(x[0].pageY+x[1].pageY);f.set(C,O)}}function ne(){if(x.length===1)h.set(x[0].pageX,x[0].pageY);else{const C=.5*(x[0].pageX+x[1].pageX),O=.5*(x[0].pageY+x[1].pageY);h.set(C,O)}}function B(){const C=x[0].pageX-x[1].pageX,O=x[0].pageY-x[1].pageY,oe=Math.sqrt(C*C+O*O);M.set(0,oe)}function ye(){n.enableZoom&&B(),n.enablePan&&ne()}function me(){n.enableZoom&&B(),n.enableRotate&&te()}function de(C){if(x.length==1)m.set(C.pageX,C.pageY);else{const oe=ve(C),he=.5*(C.pageX+oe.x),ae=.5*(C.pageY+oe.y);m.set(he,ae)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const O=n.domElement;w(2*Math.PI*g.x/O.clientHeight),L(2*Math.PI*g.y/O.clientHeight),f.copy(m)}function le(C){if(x.length===1)p.set(C.pageX,C.pageY);else{const O=ve(C),oe=.5*(C.pageX+O.x),he=.5*(C.pageY+O.y);p.set(oe,he)}_.subVectors(p,h).multiplyScalar(n.panSpeed),I(_.x,_.y),h.copy(p)}function Ne(C){const O=ve(C),oe=C.pageX-O.x,he=C.pageY-O.y,ae=Math.sqrt(oe*oe+he*he);y.set(0,ae),S.set(0,Math.pow(y.y/M.y,n.zoomSpeed)),R(S.y),M.copy(y)}function Se(C){n.enableZoom&&Ne(C),n.enablePan&&le(C)}function xe(C){n.enableZoom&&Ne(C),n.enableRotate&&de(C)}function rt(C){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",ht),n.domElement.addEventListener("pointerup",Ye)),ee(C),C.pointerType==="touch"?A(C):Xe(C))}function ht(C){n.enabled!==!1&&(C.pointerType==="touch"?b(C):Oe(C))}function Ye(C){ie(C),x.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",ht),n.domElement.removeEventListener("pointerup",Ye)),n.dispatchEvent(Tc),r=i.NONE}function vt(C){ie(C)}function Xe(C){let O;switch(C.button){case 0:O=n.mouseButtons.LEFT;break;case 1:O=n.mouseButtons.MIDDLE;break;case 2:O=n.mouseButtons.RIGHT;break;default:O=-1}switch(O){case Li.DOLLY:if(n.enableZoom===!1)return;$(C),r=i.DOLLY;break;case Li.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;V(C),r=i.PAN}else{if(n.enableRotate===!1)return;Y(C),r=i.ROTATE}break;case Li.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;Y(C),r=i.ROTATE}else{if(n.enablePan===!1)return;V(C),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Da)}function Oe(C){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;J(C);break;case i.DOLLY:if(n.enableZoom===!1)return;K(C);break;case i.PAN:if(n.enablePan===!1)return;ue(C);break}}function qt(C){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(C.preventDefault(),n.dispatchEvent(Da),z(C),n.dispatchEvent(Tc))}function wt(C){n.enabled===!1||n.enablePan===!1||Z(C)}function A(C){switch(se(C),x.length){case 1:switch(n.touches.ONE){case Di.ROTATE:if(n.enableRotate===!1)return;te(),r=i.TOUCH_ROTATE;break;case Di.PAN:if(n.enablePan===!1)return;ne(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Di.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ye(),r=i.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Da)}function b(C){switch(se(C),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;de(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;le(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(C),n.update();break;default:r=i.NONE}}function H(C){n.enabled!==!1&&C.preventDefault()}function ee(C){x.push(C)}function ie(C){delete E[C.pointerId];for(let O=0;O<x.length;O++)if(x[O].pointerId==C.pointerId){x.splice(O,1);return}}function se(C){let O=E[C.pointerId];O===void 0&&(O=new we,E[C.pointerId]=O),O.set(C.pageX,C.pageY)}function ve(C){const O=C.pointerId===x[0].pointerId?x[1]:x[0];return E[O.pointerId]}n.domElement.addEventListener("contextmenu",H),n.domElement.addEventListener("pointerdown",rt),n.domElement.addEventListener("pointercancel",vt),n.domElement.addEventListener("wheel",qt,{passive:!1}),this.update()}}function Cn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Bu(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Gt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},or={duration:.5,overwrite:!1,delay:0},Uo,_t,Je,Jt=1e8,ke=1/Jt,fo=Math.PI*2,f0=fo/4,d0=0,Gu=Math.sqrt,p0=Math.cos,m0=Math.sin,ct=function(e){return typeof e=="string"},qe=function(e){return typeof e=="function"},Fn=function(e){return typeof e=="number"},zo=function(e){return typeof e>"u"},vn=function(e){return typeof e=="object"},Pt=function(e){return e!==!1},Vu=function(){return typeof window<"u"},_s=function(e){return qe(e)||ct(e)},Hu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},xt=Array.isArray,po=/(?:-?\.?\d|\.)+/gi,Wu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ra=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qu=/[+-]=-?[.\d]+/,Xu=/[^,'"\[\]\s]+/gi,g0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,He,$t,mo,ko,Vt={},Ts={},ju,Yu=function(e){return(Ts=Ti(e,Vt))&&Ht},Bo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Es=function(e,t){return!t&&console.warn(e)},$u=function(e,t){return e&&(Vt[e]=t)&&Ts&&(Ts[e]=t)||Vt},zr=function(){return 0},_0={suppressEvents:!0,isStart:!0,kill:!1},ys={suppressEvents:!0,kill:!1},x0={suppressEvents:!0},Go={},Xn=[],go={},Zu,Ut={},Ia={},Ec=30,Ms=[],Vo="",Ho=function(e){var t=e[0],n,i;if(vn(t)||qe(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ms.length;i--&&!Ms[i].targetTest(t););n=Ms[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new xh(e[i],n)))||e.splice(i,1);return e},_i=function(e){return e._gsap||Ho(Qt(e))[0]._gsap},Ku=function(e,t,n){return(n=e[t])&&qe(n)?e[t]():zo(n)&&e.getAttribute&&e.getAttribute(t)||n},Lt=function(e,t){return(e=e.split(",")).forEach(t)||e},je=function(e){return Math.round(e*1e5)/1e5||0},ut=function(e){return Math.round(e*1e7)/1e7||0},er=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},v0=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},As=function(){var e=Xn.length,t=Xn.slice(0),n,i;for(go={},Xn.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ju=function(e,t,n,i){Xn.length&&!_t&&As(),e.render(t,n,i||_t&&t<0&&(e._initted||e._startAt)),Xn.length&&!_t&&As()},Qu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Xu).length<2?t:ct(e)?e.trim():e},eh=function(e){return e},tn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},y0=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ti=function(e,t){for(var n in t)e[n]=t[n];return e},Ac=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=vn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Cs=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Lr=function(e){var t=e.parent||He,n=e.keyframes?y0(xt(e.keyframes)):tn;if(Pt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},M0=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},th=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Gs=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},$n=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},xi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},S0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_o=function(e,t,n,i){return e._startAt&&(_t?e._startAt.revert(ys):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},b0=function s(e){return!e||e._ts&&s(e.parent)},Cc=function(e){return e._repeat?lr(e._tTime,e=e.duration()+e._rDelay)*e:0},lr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ps=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Vs=function(e){return e._end=ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||ke)||0))},Hs=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ut(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Vs(e),n._dirty||xi(n,e)),e},nh=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Ps(e.rawTime(),t),(!t._dur||Yr(0,t.totalDuration(),n)-t._tTime>ke)&&t.render(n,!0)),xi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ke}},dn=function(e,t,n,i){return t.parent&&$n(t),t._start=ut((Fn(n)?n:n||e!==He?Yt(e,n,t):e._time)+t._delay),t._end=ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),th(e,t,"_first","_last",e._sort?"_start":0),xo(t)||(e._recent=t),i||nh(e,t),e._ts<0&&Hs(e,e._tTime),e},ih=function(e,t){return(Vt.ScrollTrigger||Bo("scrollTrigger",t))&&Vt.ScrollTrigger.create(t,e)},rh=function(e,t,n,i,r){if(qo(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!_t&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Zu!==zt.frame)return Xn.push(e),e._lazy=[r,i],1},w0=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},xo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},T0=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&w0(e)&&!(!e._initted&&xo(e))||(e._ts<0||e._dp._ts<0)&&!xo(e))?0:1,a=e._rDelay,c=0,l,u,d;if(a&&e._repeat&&(c=Yr(0,e._tDur,t),u=lr(c,a),e._yoyo&&u&1&&(o=1-o),u!==lr(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||_t||i||e._zTime===ke||!t&&e._zTime){if(!e._initted&&rh(e,t,i,n,c))return;for(d=e._zTime,e._zTime=t||(n?ke:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&_o(e,t,n,!0),e._onUpdate&&!n&&en(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&en(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&$n(e,1),!n&&!_t&&(en(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},E0=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},cr=function(e,t,n,i){var r=e._repeat,o=ut(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:ut(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Hs(e,e._tTime=e._tDur*a),e.parent&&Vs(e),n||xi(e.parent,e),e},Pc=function(e){return e instanceof At?xi(e):cr(e,e._dur)},A0={_start:0,endTime:zr,totalDuration:zr},Yt=function s(e,t,n){var i=e.labels,r=e._recent||A0,o=e.duration()>=Jt?r.endTime(!1):e._dur,a,c,l;return ct(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(xt(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},Dr=function(e,t,n){var i=Fn(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Pt(c.vars.inherit)&&c.parent;o.immediateRender=Pt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new et(t[0],o,t[r+1])},Jn=function(e,t){return e||e===0?t(e):t},Yr=function(e,t,n){return n<e?e:n>t?t:n},mt=function(e,t){return!ct(e)||!(t=g0.exec(e))?"":t[1]},C0=function(e,t,n){return Jn(n,function(i){return Yr(e,t,i)})},vo=[].slice,sh=function(e,t){return e&&vn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&vn(e[0]))&&!e.nodeType&&e!==$t},P0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return ct(i)&&!t||sh(i,1)?(r=n).push.apply(r,Qt(i)):n.push(i)})||n},Qt=function(e,t,n){return Je&&!t&&Je.selector?Je.selector(e):ct(e)&&!n&&(mo||!ur())?vo.call((t||ko).querySelectorAll(e),0):xt(e)?P0(e,n):sh(e)?vo.call(e,0):e?[e]:[]},yo=function(e){return e=Qt(e)[0]||Es("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Qt(t,n.querySelectorAll?n:n===e?Es("Invalid scope")||ko.createElement("div"):e)}},ah=function(e){return e.sort(function(){return .5-Math.random()})},oh=function(e){if(qe(e))return e;var t=vn(e)?e:{each:e},n=vi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=t.axis,u=i,d=i;return ct(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(u=i[0],d=i[1]),function(f,m,g){var h=(g||t).length,p=o[h],_,M,y,S,x,E,P,v,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,Jt])[1],!w){for(P=-Jt;P<(P=g[w++].getBoundingClientRect().left)&&w<h;);w--}for(p=o[h]=[],_=c?Math.min(w,h)*u-.5:i%w,M=w===Jt?0:c?h*d/w-.5:i/w|0,P=0,v=Jt,E=0;E<h;E++)y=E%w-_,S=M-(E/w|0),p[E]=x=l?Math.abs(l==="y"?S:y):Gu(y*y+S*S),x>P&&(P=x),x<v&&(v=x);i==="random"&&ah(p),p.max=P-v,p.min=v,p.v=h=(parseFloat(t.amount)||parseFloat(t.each)*(w>h?h-1:l?l==="y"?h/w:w:Math.max(w,h/w))||0)*(i==="edges"?-1:1),p.b=h<0?r-h:r,p.u=mt(t.amount||t.each)||0,n=n&&h<0?mh(n):n}return h=(p[f]-p.min)/p.max||0,ut(p.b+(n?n(h):h)*p.v)+p.u}},Mo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ut(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Fn(n)?0:mt(n))}},lh=function(e,t){var n=xt(e),i,r;return!n&&vn(e)&&(i=n=e.radius||Jt,e.values?(e=Qt(e.values),(r=!Fn(e[0]))&&(i*=i)):e=Mo(e.increment)),Jn(t,n?qe(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=Jt,u=0,d=e.length,f,m;d--;)r?(f=e[d].x-a,m=e[d].y-c,f=f*f+m*m):f=Math.abs(e[d]-a),f<l&&(l=f,u=d);return u=!i||l<=i?e[u]:o,r||u===o||Fn(o)?u:u+mt(o)}:Mo(e))},ch=function(e,t,n,i){return Jn(xt(e)?!t:n===!0?!!(n=0):!i,function(){return xt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},L0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},D0=function(e,t){return function(n){return e(parseFloat(n))+(t||mt(n))}},R0=function(e,t,n){return hh(e,t,0,1,n)},uh=function(e,t,n){return Jn(n,function(i){return e[~~t(i)]})},I0=function s(e,t,n){var i=t-e;return xt(e)?uh(e,s(0,e.length),t):Jn(n,function(r){return(i+(r-e)%i)%i+e})},O0=function s(e,t,n){var i=t-e,r=i*2;return xt(e)?uh(e,s(0,e.length-1),t):Jn(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},kr=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?Xu:po),n+=e.substr(t,i-t)+ch(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},hh=function(e,t,n,i,r){var o=t-e,a=i-n;return Jn(r,function(c){return n+((c-e)/o*a||0)})},F0=function s(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var o=ct(e),a={},c,l,u,d,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(xt(e)&&!xt(t)){for(u=[],d=e.length,f=d-2,l=1;l<d;l++)u.push(s(e[l-1],e[l]));d--,r=function(g){g*=d;var h=Math.min(f,~~g);return u[h](g-h)},n=t}else i||(e=Ti(xt(e)?[]:{},e));if(!u){for(c in t)Wo.call(a,e,c,"get",t[c]);r=function(g){return Yo(g,a)||(o?e.p:e)}}}return Jn(n,r)},Lc=function(e,t,n){var i=e.labels,r=Jt,o,a,c;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},en=function(e,t,n){var i=e.vars,r=i[t],o=Je,a=e._ctx,c,l,u;if(r)return c=i[t+"Params"],l=i.callbackScope||e,n&&Xn.length&&As(),a&&(Je=a),u=c?r.apply(l,c):r.call(l),Je=o,u},Cr=function(e){return $n(e),e.scrollTrigger&&e.scrollTrigger.kill(!!_t),e.progress()<1&&en(e,"onInterrupt"),e},Ki,N0=function(e){e=!e.name&&e.default||e;var t=e.name,n=qe(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:zr,render:Yo,add:Wo,kill:J0,modifier:K0,rawVars:0},o={targetTest:0,get:0,getSetter:jo,aliases:{},register:0};if(ur(),e!==i){if(Ut[t])return;tn(i,tn(Cs(e,r),o)),Ti(i.prototype,Ti(r,Cs(e,o))),Ut[i.prop=t]=i,e.targetTest&&(Ms.push(i),Go[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}$u(t,i),e.register&&e.register(Ht,i,Dt)},ze=255,Pr={aqua:[0,ze,ze],lime:[0,ze,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ze],navy:[0,0,128],white:[ze,ze,ze],olive:[128,128,0],yellow:[ze,ze,0],orange:[ze,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ze,0,0],pink:[ze,192,203],cyan:[0,ze,ze],transparent:[ze,ze,ze,0]},Oa=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ze+.5|0},fh=function(e,t,n){var i=e?Fn(e)?[e>>16,e>>8&ze,e&ze]:0:Pr.black,r,o,a,c,l,u,d,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Pr[e])i=Pr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ze,i&ze,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ze,e&ze]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(po),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(l+1):u+l-u*l,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Oa(c+1/3,r,o),i[1]=Oa(c,r,o),i[2]=Oa(c-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Wu),n&&i.length<4&&(i[3]=1),i}else i=e.match(po)||Pr.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/ze,o=i[1]/ze,a=i[2]/ze,d=Math.max(r,o,a),f=Math.min(r,o,a),u=(d+f)/2,d===f?c=l=0:(m=d-f,l=u>.5?m/(2-d-f):m/(d+f),c=d===r?(o-a)/m+(o<a?6:0):d===o?(a-r)/m+2:(r-o)/m+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},dh=function(e){var t=[],n=[],i=-1;return e.split(jn).forEach(function(r){var o=r.match(Zi)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Dc=function(e,t,n){var i="",r=(e+i).match(jn),o=t?"hsla(":"rgba(",a=0,c,l,u,d;if(!r)return e;if(r=r.map(function(f){return(f=fh(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=dh(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(jn,"1").split(Zi),d=l.length-1;a<d;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=e.split(jn),d=l.length-1;a<d;a++)i+=l[a]+r[a];return i+l[d]},jn=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Pr)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),U0=/hsl[a]?\(/,ph=function(e){var t=e.join(" "),n;if(jn.lastIndex=0,jn.test(t))return n=U0.test(t),e[1]=Dc(e[1],n),e[0]=Dc(e[0],n,dh(e[1])),!0},Br,zt=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,u,d,f,m,g=function h(p){var _=s()-i,M=p===!0,y,S,x,E;if(_>e&&(n+=_-t),i+=_,x=i-n,y=x-o,(y>0||M)&&(E=++d.frame,f=x-d.time*1e3,d.time=x=x/1e3,o+=y+(y>=r?4:r-y),S=1),M||(c=l(h)),S)for(m=0;m<a.length;m++)a[m](x,f,E,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){ju&&(!mo&&Vu()&&($t=mo=window,ko=$t.document||{},Vt.gsap=Ht,($t.gsapVersions||($t.gsapVersions=[])).push(Ht.version),Yu(Ts||$t.GreenSockGlobals||!$t.gsap&&$t||{}),u=$t.requestAnimationFrame),c&&d.sleep(),l=u||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Br=1,g(2))},sleep:function(){(u?$t.cancelAnimationFrame:clearTimeout)(c),Br=0,l=zr},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){r=1e3/(p||240),o=d.time*1e3+r},add:function(p,_,M){var y=_?function(S,x,E,P){p(S,x,E,P),d.remove(y)}:p;return d.remove(p),a[M?"unshift":"push"](y),ur(),y},remove:function(p,_){~(_=a.indexOf(p))&&a.splice(_,1)&&m>=_&&m--},_listeners:a},d}(),ur=function(){return!Br&&zt.wake()},Ce={},z0=/^[\d.\-M][\d.\-,\s]/,k0=/["']/g,B0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[i]=isNaN(l)?l.replace(k0,"").trim():+l,i=c.substr(a+1).trim();return t},G0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},V0=function(e){var t=(e+"").split("("),n=Ce[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[B0(t[1])]:G0(e).split(",").map(Qu)):Ce._CE&&z0.test(e)?Ce._CE("",e):n},mh=function(e){return function(t){return 1-e(1-t)}},gh=function s(e,t){for(var n=e._first,i;n;)n instanceof At?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},vi=function(e,t){return e&&(qe(e)?e:Ce[e]||V0(e))||t},Ci=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Lt(e,function(a){Ce[a]=Vt[a]=r,Ce[o=a.toLowerCase()]=n;for(var c in r)Ce[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Ce[a+"."+c]=r[c]}),r},_h=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Fa=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/fo*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*m0((u-o)*r)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:_h(a);return r=fo/r,c.config=function(l,u){return s(e,l,u)},c},Na=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:_h(n);return i.config=function(r){return s(e,r)},i};Lt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Ci(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ce.Linear.easeNone=Ce.none=Ce.Linear.easeIn;Ci("Elastic",Fa("in"),Fa("out"),Fa());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Ci("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ci("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Ci("Circ",function(s){return-(Gu(1-s*s)-1)});Ci("Sine",function(s){return s===1?1:-p0(s*f0)+1});Ci("Back",Na("in"),Na("out"),Na());Ce.SteppedEase=Ce.steps=Vt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-ke;return function(a){return((i*Yr(0,o,a)|0)+r)*n}}};or.ease=Ce["quad.out"];Lt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Vo+=s+","+s+"Params,"});var xh=function(e,t){this.id=d0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ku,this.set=t?t.getSetter:jo},hr=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,cr(this,+t.duration,1,1),this.data=t.data,Je&&(this._ctx=Je,Je.data.push(this)),Br||zt.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,cr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ur(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Hs(this,n),!r._dp||r.parent||nh(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&dn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ke||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ju(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Cc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Cc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?lr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ke?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ps(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ke?0:this._rts,this.totalTime(Yr(-this._delay,this._tDur,i),!0),Vs(this),S0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ur(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ke&&(this._tTime-=ke)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&dn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Pt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ps(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=x0);var i=_t;return _t=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_t=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Pc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Pc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Yt(this,n),Pt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Pt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ke:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ke,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ke)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=qe(n)?n:eh,a=function(){var l=i.then;i.then=null,qe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),r(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Cr(this)},s}();tn(hr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ke,_prom:0,_ps:!1,_rts:1});var At=function(s){Bu(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Pt(n.sortChildren),He&&dn(n.parent||He,Cn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&ih(Cn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Dr(0,arguments,this),this},t.from=function(i,r,o){return Dr(1,arguments,this),this},t.fromTo=function(i,r,o,a){return Dr(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Lr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new et(i,r,Yt(this,o),1),this},t.call=function(i,r,o){return dn(this,et.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,c,l,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new et(i,o,Yt(this,c)),this},t.staggerFrom=function(i,r,o,a,c,l,u){return o.runBackwards=1,Lr(o).immediateRender=Pt(o.immediateRender),this.staggerTo(i,r,o,a,c,l,u)},t.staggerFromTo=function(i,r,o,a,c,l,u,d){return a.startAt=o,Lr(a).immediateRender=Pt(a.immediateRender),this.staggerTo(i,r,a,c,l,u,d)},t.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:ut(i),d=this._zTime<0!=i<0&&(this._initted||!l),f,m,g,h,p,_,M,y,S,x,E,P;if(this!==He&&u>c&&i>=0&&(u=c),u!==this._tTime||o||d){if(a!==this._time&&l&&(u+=this._time-a,i+=this._time-a),f=u,S=this._start,y=this._ts,_=!y,d&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(f=ut(u%p),u===c?(h=this._repeat,f=l):(h=~~(u/p),h&&h===u/p&&(f=l,h--),f>l&&(f=l)),x=lr(this._tTime,p),!a&&this._tTime&&x!==h&&(x=h),E&&h&1&&(f=l-f,P=1),h!==x&&!this._lock){var v=E&&x&1,w=v===(E&&h&1);if(h<x&&(v=!v),a=v?0:l,this._lock=1,this.render(a||(P?0:ut(h*p)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&en(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,w&&(this._lock=2,a=v?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;gh(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=E0(this,ut(a),ut(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&(en(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,o),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=-ke);break}}m=g}else{m=this._last;for(var L=i<0?i:f;m;){if(g=m._prev,(m._act||L<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,r,o||_t&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=L?-ke:ke);break}}m=g}}if(M&&!r&&(this.pause(),M.render(f>=a?0:-ke)._zTime=f>=a?1:-1,this._ts))return this._start=S,Vs(this),this.render(i,r,o);this._onUpdate&&!r&&en(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&$n(this,1),!r&&!(i<0&&!a)&&(u||a||!c)&&(en(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Fn(r)||(r=Yt(this,r,i)),!(i instanceof hr)){if(xt(i))return i.forEach(function(a){return o.add(a,r)}),this;if(ct(i))return this.addLabel(i,r);if(qe(i))i=et.delayedCall(0,i);else return this}return this!==i?dn(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Jt);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof et?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return ct(i)?this.removeLabel(i):qe(i)?this.killTweensOf(i):(Gs(this,i),i===this._recent&&(this._recent=this._last),xi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ut(zt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Yt(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=et.delayedCall(0,r||zr,o);return a.data="isPause",this._hasPause=1,dn(this,a,Yt(this,i))},t.removePause=function(i){var r=this._first;for(i=Yt(this,i);r;)r._start===i&&r.data==="isPause"&&$n(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Gn!==a[c]&&a[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=Qt(i),c=this._first,l=Fn(r),u;c;)c instanceof et?v0(c._targets,a)&&(l?(!Gn||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(u=c.getTweensOf(a,r)).length&&o.push.apply(o,u),c=c._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Yt(o,i),c=r,l=c.startAt,u=c.onStart,d=c.onStartParams,f=c.immediateRender,m,g=et.to(o,tn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||ke,onStart:function(){if(o.pause(),!m){var p=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());g._dur!==p&&cr(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,d||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,tn({startAt:{time:Yt(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Lc(this,Yt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Lc(this,Yt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ke)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return xi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),xi(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,c=Jt,l,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,dn(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(r-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;cr(o,o===He&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(He._ts&&(Ju(He,Ps(i,He)),Zu=zt.frame),zt.frame>=Ec){Ec+=Gt.autoSleep||120;var r=He._first;if((!r||!r._ts)&&Gt.autoSleep&&zt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||zt.sleep()}}},e}(hr);tn(At.prototype,{_lock:0,_hasPause:0,_forcing:0});var H0=function(e,t,n,i,r,o,a){var c=new Dt(this._pt,e,t,0,1,wh,null,r),l=0,u=0,d,f,m,g,h,p,_,M;for(c.b=n,c.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=kr(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),f=n.match(Ra)||[];d=Ra.exec(i);)g=d[0],h=i.substring(l,d.index),m?m=(m+1)%5:h.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:h||u===1?h:",",s:p,c:g.charAt(1)==="="?er(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},l=Ra.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(qu.test(i)||_)&&(c.e=0),this._pt=c,c},Wo=function(e,t,n,i,r,o,a,c,l,u){qe(i)&&(i=i(r||0,e,o));var d=e[t],f=n!=="get"?n:qe(d)?l?e[t.indexOf("set")||!qe(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():d,m=qe(d)?l?Y0:Sh:Xo,g;if(ct(i)&&(~i.indexOf("random(")&&(i=kr(i)),i.charAt(1)==="="&&(g=er(f,i)+(mt(f)||0),(g||g===0)&&(i=g))),!u||f!==i||So)return!isNaN(f*i)&&i!==""?(g=new Dt(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?Z0:bh,0,m),l&&(g.fp=l),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&Bo(t,i),H0.call(this,e,t,f,i,m,c||Gt.stringFilter,l))},W0=function(e,t,n,i,r){if(qe(e)&&(e=Rr(e,r,t,n,i)),!vn(e)||e.style&&e.nodeType||xt(e)||Hu(e))return ct(e)?Rr(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=Rr(e[a],r,t,n,i);return o},vh=function(e,t,n,i,r,o){var a,c,l,u;if(Ut[e]&&(a=new Ut[e]).init(r,a.rawVars?t[e]:W0(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new Dt(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Ki))for(l=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)l[a._props[u]]=c;return a},Gn,So,qo=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.onUpdateParams,d=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,g=i.keyframes,h=i.autoRevert,p=e._dur,_=e._startAt,M=e._targets,y=e.parent,S=y&&y.data==="nested"?y.vars.targets:M,x=e._overwrite==="auto"&&!Uo,E=e.timeline,P,v,w,L,G,j,I,R,k,Y,$,V,J;if(E&&(!g||!r)&&(r="none"),e._ease=vi(r,or.ease),e._yEase=m?mh(vi(m===!0?r:m,or.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!E&&!!i.runBackwards,!E||g&&!i.stagger){if(R=M[0]?_i(M[0]).harness:0,V=R&&i[R.prop],P=Cs(i,Go),_&&(_._zTime<0&&_.progress(1),t<0&&f&&a&&!h?_.render(-1,!0):_.revert(f&&p?ys:_0),_._lazy=0),o){if($n(e._startAt=et.set(M,tn({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!_&&Pt(c),startAt:null,delay:0,onUpdate:l,onUpdateParams:u,callbackScope:d,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_t||!a&&!h)&&e._startAt.revert(ys),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!_){if(t&&(a=!1),w=tn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Pt(c),immediateRender:a,stagger:0,parent:y},P),V&&(w[R.prop]=V),$n(e._startAt=et.set(M,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_t?e._startAt.revert(ys):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,ke,ke);else if(!t)return}for(e._pt=e._ptCache=0,c=p&&Pt(c)||c&&!p,v=0;v<M.length;v++){if(G=M[v],I=G._gsap||Ho(M)[v]._gsap,e._ptLookup[v]=Y={},go[I.id]&&Xn.length&&As(),$=S===M?v:S.indexOf(G),R&&(k=new R).init(G,V||P,e,$,S)!==!1&&(e._pt=L=new Dt(e._pt,G,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(K){Y[K]=L}),k.priority&&(j=1)),!R||V)for(w in P)Ut[w]&&(k=vh(w,P,e,$,G,S))?k.priority&&(j=1):Y[w]=L=Wo.call(e,G,w,"get",P[w],$,S,0,i.stringFilter);e._op&&e._op[v]&&e.kill(G,e._op[v]),x&&e._pt&&(Gn=e,He.killTweensOf(G,Y,e.globalTime(t)),J=!e.parent,Gn=0),e._pt&&c&&(go[I.id]=1)}j&&Th(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!J,g&&t<=0&&E.render(Jt,!0,!0)},q0=function(e,t,n,i,r,o,a){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return So=1,e.vars[t]="+=0",qo(e,a),So=0,1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(i||i===0)&&!r?i:l.s+(i||0)+o*l.c,l.c=n-l.s,u.e&&(u.e=je(n)+mt(u.e)),u.b&&(u.b=l.s+mt(u.b))},X0=function(e,t){var n=e[0]?_i(e[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return t;r=Ti({},t);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},j0=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(xt(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Rr=function(e,t,n,i,r){return qe(e)?e.call(t,n,i,r):ct(e)&&~e.indexOf("random(")?kr(e):e},yh=Vo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Mh={};Lt(yh+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Mh[s]=1});var et=function(s){Bu(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Lr(i))||this;var c=a.vars,l=c.duration,u=c.delay,d=c.immediateRender,f=c.stagger,m=c.overwrite,g=c.keyframes,h=c.defaults,p=c.scrollTrigger,_=c.yoyoEase,M=i.parent||He,y=(xt(n)||Hu(n)?Fn(n[0]):"length"in i)?[n]:Qt(n),S,x,E,P,v,w,L,G;if(a._targets=y.length?Ho(y):Es("GSAP target "+n+" not found. https://greensock.com",!Gt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||f||_s(l)||_s(u)){if(i=a.vars,S=a.timeline=new At({data:"nested",defaults:h||{},targets:M&&M.data==="nested"?M.vars.targets:y}),S.kill(),S.parent=S._dp=Cn(a),S._start=0,f||_s(l)||_s(u)){if(P=y.length,L=f&&oh(f),vn(f))for(v in f)~yh.indexOf(v)&&(G||(G={}),G[v]=f[v]);for(x=0;x<P;x++)E=Cs(i,Mh),E.stagger=0,_&&(E.yoyoEase=_),G&&Ti(E,G),w=y[x],E.duration=+Rr(l,Cn(a),x,w,y),E.delay=(+Rr(u,Cn(a),x,w,y)||0)-a._delay,!f&&P===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),S.to(w,E,L?L(x,w,y):0),S._ease=Ce.none;S.duration()?l=u=0:a.timeline=0}else if(g){Lr(tn(S.vars.defaults,{ease:"none"})),S._ease=vi(g.ease||i.ease||"none");var j=0,I,R,k;if(xt(g))g.forEach(function(Y){return S.to(y,Y,">")}),S.duration();else{E={};for(v in g)v==="ease"||v==="easeEach"||j0(v,g[v],E,g.easeEach);for(v in E)for(I=E[v].sort(function(Y,$){return Y.t-$.t}),j=0,x=0;x<I.length;x++)R=I[x],k={ease:R.e,duration:(R.t-(x?I[x-1].t:0))/100*l},k[v]=R.v,S.to(y,k,j),j+=k.duration;S.duration()<l&&S.to({},{duration:l-S.duration()})}}l||a.duration(l=S.duration())}else a.timeline=0;return m===!0&&!Uo&&(Gn=Cn(a),He.killTweensOf(y),Gn=0),dn(M,Cn(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!l&&!g&&a._start===ut(M._time)&&Pt(d)&&b0(Cn(a))&&M.data!=="nested")&&(a._tTime=-ke,a.render(Math.max(0,-u)||0)),p&&ih(Cn(a),p),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,u=i<0,d=i>c-ke&&!u?c:i<ke?0:i,f,m,g,h,p,_,M,y,S;if(!l)T0(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=d,y=this.timeline,this._repeat){if(h=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(h*100+i,r,o);if(f=ut(d%h),d===c?(g=this._repeat,f=l):(g=~~(d/h),g&&g===d/h&&(f=l,g--),f>l&&(f=l)),_=this._yoyo&&g&1,_&&(S=this._yEase,f=l-f),p=lr(this._tTime,h),f===a&&!o&&this._initted)return this._tTime=d,this;g!==p&&(y&&this._yEase&&gh(y,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(ut(h*g),!0).invalidate()._lock=0))}if(!this._initted){if(rh(this,u?i:f,o,r,d))return this._tTime=0,this;if(a!==this._time)return this;if(l!==this._dur)return this.render(i,r,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(f/l),this._from&&(this.ratio=M=1-M),f&&!a&&!r&&(en(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;y&&y.render(i<0?i:!f&&_?-ke:y._dur*y._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&_o(this,i,r,o),en(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&en(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&_o(this,i,!0,!0),(i||!l)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&$n(this,1),!r&&!(u&&!a)&&(d||a||_)&&(en(this,d===c?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a){Br||zt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||qo(this,c),l=this._ease(c/this._dur),q0(this,i,r,o,a,l,c)?this.resetTo(i,r,o,a):(Hs(this,0),this.parent||th(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Cr(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Gn&&Gn.vars.overwrite!==!0)._first||Cr(this),this.parent&&o!==this.timeline.totalDuration()&&cr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?Qt(i):a,l=this._ptLookup,u=this._pt,d,f,m,g,h,p,_;if((!r||r==="all")&&M0(a,c))return r==="all"&&(this._pt=0),Cr(this);for(d=this._op=this._op||[],r!=="all"&&(ct(r)&&(h={},Lt(r,function(M){return h[M]=1}),r=h),r=X0(a,r)),_=a.length;_--;)if(~c.indexOf(a[_])){f=l[_],r==="all"?(d[_]=r,g=f,m={}):(m=d[_]=d[_]||{},g=r);for(h in g)p=f&&f[h],p&&((!("kill"in p.d)||p.d.kill(h)===!0)&&Gs(this,p,"_pt"),delete f[h]),m!=="all"&&(m[h]=1)}return this._initted&&!this._pt&&u&&Cr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Dr(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return Dr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return He.killTweensOf(i,r,o)},e}(hr);tn(et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Lt("staggerTo,staggerFrom,staggerFromTo",function(s){et[s]=function(){var e=new At,t=vo.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Xo=function(e,t,n){return e[t]=n},Sh=function(e,t,n){return e[t](n)},Y0=function(e,t,n,i){return e[t](i.fp,n)},$0=function(e,t,n){return e.setAttribute(t,n)},jo=function(e,t){return qe(e[t])?Sh:zo(e[t])&&e.setAttribute?$0:Xo},bh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Z0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},wh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Yo=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},K0=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},J0=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Gs(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Q0=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Th=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Dt=function(){function s(t,n,i,r,o,a,c,l,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||bh,this.d=c||this,this.set=l||Xo,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Q0,this.m=n,this.mt=r,this.tween=i},s}();Lt(Vo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Go[s]=1});Vt.TweenMax=Vt.TweenLite=et;Vt.TimelineLite=Vt.TimelineMax=At;He=new At({sortChildren:!1,defaults:or,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gt.stringFilter=ph;var fr=[],Ss={},ex=[],Rc=0,Ua=function(e){return(Ss[e]||ex).map(function(t){return t()})},bo=function(){var e=Date.now(),t=[];e-Rc>2&&(Ua("matchMediaInit"),fr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=$t.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&t.push(n))}),Ua("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Rc=e,Ua("matchMedia"))},Eh=function(){function s(t,n){this.selector=n&&yo(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){qe(n)&&(r=i,i=n,n=qe);var o=this,a=function(){var l=Je,u=o.selector,d;return l&&l!==o&&l.data.push(o),r&&(o.selector=yo(r)),Je=o,d=i.apply(o,arguments),qe(d)&&o._r.push(d),Je=l,o.selector=u,o.isReverted=!1,d};return o.last=a,n===qe?a(o):n?o[n]=a:a},e.ignore=function(n){var i=Je;Je=null,n(this),Je=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof et&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var o=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(l){return o.splice(o.indexOf(l),1)}))}),o.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,l){return l.g-c.g||-1}).forEach(function(c){return c.t.revert(n)}),this.data.forEach(function(c){return!(c instanceof hr)&&c.revert&&c.revert(n)}),this._r.forEach(function(c){return c(n,r)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),i){var a=fr.indexOf(this);~a&&fr.splice(a,1)}},e.revert=function(n){this.kill(n||{})},s}(),tx=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){vn(n)||(n={matches:n});var o=new Eh(0,r||this.scope),a=o.conditions={},c,l,u;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?u=1:(c=$t.matchMedia(n[l]),c&&(fr.indexOf(o)<0&&fr.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(bo):c.addEventListener("change",bo)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Ls={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return N0(i)})},timeline:function(e){return new At(e)},getTweensOf:function(e,t){return He.getTweensOf(e,t)},getProperty:function(e,t,n,i){ct(e)&&(e=Qt(e)[0]);var r=_i(e||{}).get,o=n?eh:Qu;return n==="native"&&(n=""),e&&(t?o((Ut[t]&&Ut[t].get||r)(e,t,n,i)):function(a,c,l){return o((Ut[a]&&Ut[a].get||r)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=Qt(e),e.length>1){var i=e.map(function(u){return Ht.quickSetter(u,t,n)}),r=i.length;return function(u){for(var d=r;d--;)i[d](u)}}e=e[0]||{};var o=Ut[t],a=_i(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(u){var d=new o;Ki._pt=0,d.init(e,n?u+n:u,Ki,0,[e]),d.render(1,d),Ki._pt&&Yo(1,Ki)}:a.set(e,c);return o?l:function(u){return l(e,c,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=Ht.to(e,Ti((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(c,l,u){return r.resetTo(t,c,l,u)};return o.tween=r,o},isTweening:function(e){return He.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vi(e.ease,or.ease)),Ac(or,e||{})},config:function(e){return Ac(Gt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Ut[a]&&!Vt[a]&&Es(t+" effect requires "+a+" plugin.")}),Ia[t]=function(a,c,l){return n(Qt(a),tn(c||{},r),l)},o&&(At.prototype[t]=function(a,c,l){return this.add(Ia[t](a,vn(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Ce[e]=vi(t)},parseEase:function(e,t){return arguments.length?vi(e,t):Ce},getById:function(e){return He.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new At(e),i,r;for(n.smoothChildTiming=Pt(e.smoothChildTiming),He.remove(n),n._dp=0,n._time=n._tTime=He._time,i=He._first;i;)r=i._next,(t||!(!i._dur&&i instanceof et&&i.vars.onComplete===i._targets[0]))&&dn(n,i,i._start-i._delay),i=r;return dn(He,n,0),n},context:function(e,t){return e?new Eh(e,t):Je},matchMedia:function(e){return new tx(e)},matchMediaRefresh:function(){return fr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||bo()},addEventListener:function(e,t){var n=Ss[e]||(Ss[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ss[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:I0,wrapYoyo:O0,distribute:oh,random:ch,snap:lh,normalize:R0,getUnit:mt,clamp:C0,splitColor:fh,toArray:Qt,selector:yo,mapRange:hh,pipe:L0,unitize:D0,interpolate:F0,shuffle:ah},install:Yu,effects:Ia,ticker:zt,updateRoot:At.updateRoot,plugins:Ut,globalTimeline:He,core:{PropTween:Dt,globals:$u,Tween:et,Timeline:At,Animation:hr,getCache:_i,_removeLinkedListItem:Gs,reverting:function(){return _t},context:function(e){return e&&Je&&(Je.data.push(e),e._ctx=Je),Je},suppressOverwrites:function(e){return Uo=e}}};Lt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ls[s]=et[s]});zt.add(At.updateRoot);Ki=Ls.to({},{duration:0});var nx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ix=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=nx(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},za=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(ct(r)&&(c={},Lt(r,function(u){return c[u]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}ix(a,r)}}}},Ht=Ls.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)_t?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},za("roundProps",Mo),za("modifiers"),za("snap",lh))||Ls;et.version=At.version=Ht.version="3.11.4";ju=1;Vu()&&ur();Ce.Power0;Ce.Power1;Ce.Power2;Ce.Power3;Ce.Power4;Ce.Linear;Ce.Quad;Ce.Cubic;Ce.Quart;Ce.Quint;Ce.Strong;Ce.Elastic;Ce.Back;Ce.SteppedEase;Ce.Bounce;Ce.Sine;Ce.Expo;Ce.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ic,Vn,tr,$o,pi,Oc,Zo,rx=function(){return typeof window<"u"},Nn={},ui=180/Math.PI,nr=Math.PI/180,Xi=Math.atan2,Fc=1e8,Ko=/([A-Z])/g,sx=/(left|right|width|margin|padding|x)/i,ax=/[\s,\(]\S/,In={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ox=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},cx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ah=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ch=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ux=function(e,t,n){return e.style[t]=n},hx=function(e,t,n){return e.style.setProperty(t,n)},fx=function(e,t,n){return e._gsap[t]=n},dx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},px=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},mx=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},We="transform",cn=We+"Origin",gx=function(e,t){var n=this,i=this.target,r=i.style;if(e in Nn){if(this.tfm=this.tfm||{},e!=="transform"&&(e=In[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Pn(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Pn(i,e)),this.props.indexOf(We)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(cn,t,"")),e=We}(r||t)&&this.props.push(e,t,r[e])},Ph=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},_x=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].replace(Ko,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Zo(),r&&!r.isStart&&!n[We]&&(Ph(n),i.uncache=1)}},Lh=function(e,t){var n={target:e,props:[],revert:_x,save:gx};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Dh,To=function(e,t){var n=Vn.createElementNS?Vn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Vn.createElement(e);return n.style?n:Vn.createElement(e)},xn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ko,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,dr(t)||t,1)||""},Nc="O,Moz,ms,Ms,Webkit".split(","),dr=function(e,t,n){var i=t||pi,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Nc[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Nc[o]:"")+e},Eo=function(){rx()&&window.document&&(Ic=window,Vn=Ic.document,tr=Vn.documentElement,pi=To("div")||{style:{}},To("div"),We=dr(We),cn=We+"Origin",pi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Dh=!!dr("perspective"),Zo=Ht.core.reverting,$o=1)},ka=function s(e){var t=To("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(tr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),tr.removeChild(t),this.style.cssText=r,o},Uc=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Rh=function(e){var t;try{t=e.getBBox()}catch{t=ka.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ka||(t=ka.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Uc(e,["x","cx","x1"])||0,y:+Uc(e,["y","cy","y1"])||0,width:0,height:0}:t},Ih=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Rh(e))},Gr=function(e,t){if(t){var n=e.style;t in Nn&&t!==cn&&(t=We),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Ko,"-$1").toLowerCase())):n.removeAttribute(t)}},Hn=function(e,t,n,i,r,o){var a=new Dt(e._pt,t,n,0,1,o?Ch:Ah);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},zc={deg:1,rad:1,turn:1},xx={grid:1,flex:1},Zn=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=pi.style,c=sx.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),d=100,f=i==="px",m=i==="%",g,h,p,_;return i===o||!r||zc[i]||zc[o]?r:(o!=="px"&&!f&&(r=s(e,t,n,"px")),_=e.getCTM&&Ih(e),(m||o==="%")&&(Nn[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[c?"width":"height"]:e[u],je(m?r/g*d:r/100*g)):(a[c?"width":"height"]=d+(f?o:i),h=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,_&&(h=(e.ownerSVGElement||{}).parentNode),(!h||h===Vn||!h.appendChild)&&(h=Vn.body),p=h._gsap,p&&m&&p.width&&c&&p.time===zt.time&&!p.uncache?je(r/p.width*d):((m||o==="%")&&!xx[xn(h,"display")]&&(a.position=xn(e,"position")),h===e&&(a.position="static"),h.appendChild(pi),g=pi[u],h.removeChild(pi),a.position="absolute",c&&m&&(p=_i(h),p.time=zt.time,p.width=h[u]),je(f?g*r/d:g&&r?d/g*r:0))))},Pn=function(e,t,n,i){var r;return $o||Eo(),t in In&&t!=="transform"&&(t=In[t],~t.indexOf(",")&&(t=t.split(",")[0])),Nn[t]&&t!=="transform"?(r=Hr(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Rs(xn(e,cn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ds[t]&&Ds[t](e,t,n)||xn(e,t)||Ku(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Zn(e,t,r,n)+n:r},vx=function(e,t,n,i){if(!n||n==="none"){var r=dr(t,e,1),o=r&&xn(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=xn(e,"borderTopColor"))}var a=new Dt(this._pt,e.style,t,0,1,wh),c=0,l=0,u,d,f,m,g,h,p,_,M,y,S,x;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=xn(e,t)||i,e.style[t]=n),u=[n,i],ph(u),n=u[0],i=u[1],f=n.match(Zi)||[],x=i.match(Zi)||[],x.length){for(;d=Zi.exec(i);)p=d[0],M=i.substring(c,d.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(h=f[l++]||"")&&(m=parseFloat(h)||0,S=h.substr((m+"").length),p.charAt(1)==="="&&(p=er(m,p)+S),_=parseFloat(p),y=p.substr((_+"").length),c=Zi.lastIndex-y.length,y||(y=y||Gt.units[t]||S,c===i.length&&(i+=y,a.e+=y)),S!==y&&(m=Zn(e,t,h,y)||0),a._pt={_next:a._pt,p:M||l===1?M:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?Ch:Ah;return qu.test(i)&&(a.e=0),this._pt=a,a},kc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},yx=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=kc[n]||n,t[1]=kc[i]||i,t.join(" ")},Mx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],Nn[a]&&(c=1,a=a==="transformOrigin"?cn:We),Gr(n,a);c&&(Gr(n,We),o&&(o.svg&&n.removeAttribute("transform"),Hr(n,1),o.uncache=1,Ph(i)))}},Ds={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Dt(e._pt,t,n,0,0,Mx);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Vr=[1,0,0,1,0,0],Oh={},Fh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Bc=function(e){var t=xn(e,We);return Fh(t)?Vr:t.substr(7).match(Wu).map(je)},Jo=function(e,t){var n=e._gsap||_i(e),i=e.style,r=Bc(e),o,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Vr:r):(r===Vr&&!e.offsetParent&&e!==tr&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(l=1,a=e.nextElementSibling,tr.appendChild(e)),r=Bc(e),c?i.display=c:Gr(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):tr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ao=function(e,t,n,i,r,o){var a=e._gsap,c=r||Jo(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,m=c[0],g=c[1],h=c[2],p=c[3],_=c[4],M=c[5],y=t.split(" "),S=parseFloat(y[0])||0,x=parseFloat(y[1])||0,E,P,v,w;n?c!==Vr&&(P=m*p-g*h)&&(v=S*(p/P)+x*(-h/P)+(h*M-p*_)/P,w=S*(-g/P)+x*(m/P)-(m*M-g*_)/P,S=v,x=w):(E=Rh(e),S=E.x+(~y[0].indexOf("%")?S/100*E.width:S),x=E.y+(~(y[1]||y[0]).indexOf("%")?x/100*E.height:x)),i||i!==!1&&a.smooth?(_=S-l,M=x-u,a.xOffset=d+(_*m+M*h)-_,a.yOffset=f+(_*g+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=x,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[cn]="0px 0px",o&&(Hn(o,a,"xOrigin",l,S),Hn(o,a,"yOrigin",u,x),Hn(o,a,"xOffset",d,a.xOffset),Hn(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+x)},Hr=function(e,t){var n=e._gsap||new xh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=xn(e,cn)||"0",u,d,f,m,g,h,p,_,M,y,S,x,E,P,v,w,L,G,j,I,R,k,Y,$,V,J,K,ue,z,Z,te,ne;return u=d=f=h=p=_=M=y=S=0,m=g=1,n.svg=!!(e.getCTM&&Ih(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[We]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[We]!=="none"?c[We]:"")),i.scale=i.rotate=i.translate="none"),P=Jo(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),l=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),Ao(e,$||l,!!$||n.originIsAbsolute,n.smooth!==!1,P)),x=n.xOrigin||0,E=n.yOrigin||0,P!==Vr&&(G=P[0],j=P[1],I=P[2],R=P[3],u=k=P[4],d=Y=P[5],P.length===6?(m=Math.sqrt(G*G+j*j),g=Math.sqrt(R*R+I*I),h=G||j?Xi(j,G)*ui:0,M=I||R?Xi(I,R)*ui+h:0,M&&(g*=Math.abs(Math.cos(M*nr))),n.svg&&(u-=x-(x*G+E*I),d-=E-(x*j+E*R))):(ne=P[6],Z=P[7],K=P[8],ue=P[9],z=P[10],te=P[11],u=P[12],d=P[13],f=P[14],v=Xi(ne,z),p=v*ui,v&&(w=Math.cos(-v),L=Math.sin(-v),$=k*w+K*L,V=Y*w+ue*L,J=ne*w+z*L,K=k*-L+K*w,ue=Y*-L+ue*w,z=ne*-L+z*w,te=Z*-L+te*w,k=$,Y=V,ne=J),v=Xi(-I,z),_=v*ui,v&&(w=Math.cos(-v),L=Math.sin(-v),$=G*w-K*L,V=j*w-ue*L,J=I*w-z*L,te=R*L+te*w,G=$,j=V,I=J),v=Xi(j,G),h=v*ui,v&&(w=Math.cos(v),L=Math.sin(v),$=G*w+j*L,V=k*w+Y*L,j=j*w-G*L,Y=Y*w-k*L,G=$,k=V),p&&Math.abs(p)+Math.abs(h)>359.9&&(p=h=0,_=180-_),m=je(Math.sqrt(G*G+j*j+I*I)),g=je(Math.sqrt(Y*Y+ne*ne)),v=Xi(k,Y),M=Math.abs(v)>2e-4?v*ui:0,S=te?1/(te<0?-te:te):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Fh(xn(e,We)),$&&e.setAttribute("transform",$))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(m*=-1,M+=h<=0?180:-180,h+=h<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=je(m),n.scaleY=je(g),n.rotation=je(h)+a,n.rotationX=je(p)+a,n.rotationY=je(_)+a,n.skewX=M+a,n.skewY=y+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[cn]=Rs(l)),n.xOffset=n.yOffset=0,n.force3D=Gt.force3D,n.renderTransform=n.svg?bx:Dh?Nh:Sx,n.uncache=0,n},Rs=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ba=function(e,t,n){var i=mt(t);return je(parseFloat(t)+parseFloat(Zn(e,"x",n+"px",i)))+i},Sx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Nh(e,t)},ai="0deg",Tr="0px",oi=") ",Nh=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,h=n.scaleY,p=n.transformPerspective,_=n.force3D,M=n.target,y=n.zOrigin,S="",x=_==="auto"&&e&&e!==1||_===!0;if(y&&(d!==ai||u!==ai)){var E=parseFloat(u)*nr,P=Math.sin(E),v=Math.cos(E),w;E=parseFloat(d)*nr,w=Math.cos(E),o=Ba(M,o,P*w*-y),a=Ba(M,a,-Math.sin(E)*-y),c=Ba(M,c,v*w*-y+y)}p!==Tr&&(S+="perspective("+p+oi),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(x||o!==Tr||a!==Tr||c!==Tr)&&(S+=c!==Tr||x?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+oi),l!==ai&&(S+="rotate("+l+oi),u!==ai&&(S+="rotateY("+u+oi),d!==ai&&(S+="rotateX("+d+oi),(f!==ai||m!==ai)&&(S+="skew("+f+", "+m+oi),(g!==1||h!==1)&&(S+="scale("+g+", "+h+oi),M.style[We]=S||"translate(0, 0)"},bx=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,h=n.yOrigin,p=n.xOffset,_=n.yOffset,M=n.forceCSS,y=parseFloat(o),S=parseFloat(a),x,E,P,v,w;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=nr,l*=nr,x=Math.cos(c)*d,E=Math.sin(c)*d,P=Math.sin(c-l)*-f,v=Math.cos(c-l)*f,l&&(u*=nr,w=Math.tan(l-u),w=Math.sqrt(1+w*w),P*=w,v*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),x*=w,E*=w)),x=je(x),E=je(E),P=je(P),v=je(v)):(x=d,v=f,E=P=0),(y&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(y=Zn(m,"x",o,"px"),S=Zn(m,"y",a,"px")),(g||h||p||_)&&(y=je(y+g-(g*x+h*P)+p),S=je(S+h-(g*E+h*v)+_)),(i||r)&&(w=m.getBBox(),y=je(y+i/100*w.width),S=je(S+r/100*w.height)),w="matrix("+x+","+E+","+P+","+v+","+y+","+S+")",m.setAttribute("transform",w),M&&(m.style[We]=w)},wx=function(e,t,n,i,r){var o=360,a=ct(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?ui:1),l=c-i,u=i+l+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),d==="cw"&&l<0?l=(l+o*Fc)%o-~~(l/o)*o:d==="ccw"&&l>0&&(l=(l-o*Fc)%o-~~(l/o)*o)),e._pt=f=new Dt(e._pt,t,n,i,l,ox),f.e=u,f.u="deg",e._props.push(n),f},Gc=function(e,t){for(var n in t)e[n]=t[n];return e},Tx=function(e,t,n){var i=Gc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,d,f,m,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[We]=t,a=Hr(n,1),Gr(n,We),n.setAttribute("transform",l)):(l=getComputedStyle(n)[We],o[We]=t,a=Hr(n,1),o[We]=l);for(c in Nn)l=i[c],u=a[c],l!==u&&r.indexOf(c)<0&&(m=mt(l),g=mt(u),d=m!==g?Zn(n,c,l,g):parseFloat(l),f=parseFloat(u),e._pt=new Dt(e._pt,a,c,d,f-d,wo),e._pt.u=g||0,e._props.push(c));Gc(a,i)};Lt("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Ds[e>1?"border"+s:s]=function(a,c,l,u,d){var f,m;if(arguments.length<4)return f=o.map(function(g){return Pn(a,g,l)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},o.forEach(function(g,h){return m[g]=f[h]=f[h]||f[(h-1)/2|0]}),a.init(c,m,d)}});var Uh={name:"css",register:Eo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,c=n.vars.startAt,l,u,d,f,m,g,h,p,_,M,y,S,x,E,P,v;$o||Eo(),this.styles=this.styles||Lh(e),v=this.styles.props,this.tween=n;for(h in t)if(h!=="autoRound"&&(u=t[h],!(Ut[h]&&vh(h,t,n,i,e,r)))){if(m=typeof u,g=Ds[h],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=kr(u)),g)g(this,e,h,u,n)&&(P=1);else if(h.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(h)+"").trim(),u+="",jn.lastIndex=0,jn.test(l)||(p=mt(l),_=mt(u)),_?p!==_&&(l=Zn(e,h,l,_)+_):p&&(u+=p),this.add(a,"setProperty",l,u,i,r,0,0,h),o.push(h),v.push(h,0,a[h]);else if(m!=="undefined"){if(c&&h in c?(l=typeof c[h]=="function"?c[h].call(n,i,e,r):c[h],ct(l)&&~l.indexOf("random(")&&(l=kr(l)),mt(l+"")||(l+=Gt.units[h]||mt(Pn(e,h))||""),(l+"").charAt(1)==="="&&(l=Pn(e,h))):l=Pn(e,h),f=parseFloat(l),M=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),d=parseFloat(u),h in In&&(h==="autoAlpha"&&(f===1&&Pn(e,"visibility")==="hidden"&&d&&(f=0),v.push("visibility",0,a.visibility),Hn(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),h!=="scale"&&h!=="transform"&&(h=In[h],~h.indexOf(",")&&(h=h.split(",")[0]))),y=h in Nn,y){if(this.styles.save(h),S||(x=e._gsap,x.renderTransform&&!t.parseTransform||Hr(e,t.parseTransform),E=t.smoothOrigin!==!1&&x.smooth,S=this._pt=new Dt(this._pt,a,We,0,1,x.renderTransform,x,0,-1),S.dep=1),h==="scale")this._pt=new Dt(this._pt,x,"scaleY",x.scaleY,(M?er(x.scaleY,M+d):d)-x.scaleY||0,wo),this._pt.u=0,o.push("scaleY",h),h+="X";else if(h==="transformOrigin"){v.push(cn,0,a[cn]),u=yx(u),x.svg?Ao(e,u,0,E,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==x.zOrigin&&Hn(this,x,"zOrigin",x.zOrigin,_),Hn(this,a,h,Rs(l),Rs(u)));continue}else if(h==="svgOrigin"){Ao(e,u,1,E,0,this);continue}else if(h in Oh){wx(this,x,h,f,M?er(f,M+u):u);continue}else if(h==="smoothOrigin"){Hn(this,x,"smooth",x.smooth,u);continue}else if(h==="force3D"){x[h]=u;continue}else if(h==="transform"){Tx(this,u,e);continue}}else h in a||(h=dr(h)||h);if(y||(d||d===0)&&(f||f===0)&&!ax.test(u)&&h in a)p=(l+"").substr((f+"").length),d||(d=0),_=mt(u)||(h in Gt.units?Gt.units[h]:p),p!==_&&(f=Zn(e,h,l,_)),this._pt=new Dt(this._pt,y?x:a,h,f,(M?er(f,M+d):d)-f,!y&&(_==="px"||h==="zIndex")&&t.autoRound!==!1?cx:wo),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=l,this._pt.r=lx);else if(h in a)vx.call(this,e,h,l,M?M+u:u);else if(h in e)this.add(e,h,l||e[h],M?M+u:u,i,r);else if(h!=="parseTransform"){Bo(h,u);continue}y||(h in a?v.push(h,0,a[h]):v.push(h,1,l||e[h])),o.push(h)}}P&&Th(this)},render:function(e,t){if(t.tween._time||!Zo())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Pn,aliases:In,getSetter:function(e,t,n){var i=In[t];return i&&i.indexOf(",")<0&&(t=i),t in Nn&&t!==cn&&(e._gsap.x||Pn(e,"x"))?n&&Oc===n?t==="scale"?dx:fx:(Oc=n||{})&&(t==="scale"?px:mx):e.style&&!zo(e.style[t])?ux:~t.indexOf("-")?hx:jo(e,t)},core:{_removeProperty:Gr,_getMatrix:Jo}};Ht.utils.checkPrefix=dr;Ht.core.getStyleSaver=Lh;(function(s,e,t,n){var i=Lt(s+","+e+","+t,function(r){Nn[r]=1});Lt(e,function(r){Gt.units[r]="deg",Oh[r]=1}),In[i[13]]=s+","+e,Lt(n,function(r){var o=r.split(":");In[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Lt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Gt.units[s]="px"});Ht.registerPlugin(Uh);var zh=Ht.registerPlugin(Uh)||Ht;zh.core.Tween;var Vc={},Ex={get exports(){return Vc},set exports(s){Vc=s}},Is={},Ax={get exports(){return Is},set exports(s){Is=s}},kh=function(e,t){return function(){for(var i=new Array(arguments.length),r=0;r<i.length;r++)i[r]=arguments[r];return e.apply(t,i)}},Cx=kh,Pi=Object.prototype.toString;function Qo(s){return Pi.call(s)==="[object Array]"}function Co(s){return typeof s>"u"}function Px(s){return s!==null&&!Co(s)&&s.constructor!==null&&!Co(s.constructor)&&typeof s.constructor.isBuffer=="function"&&s.constructor.isBuffer(s)}function Lx(s){return Pi.call(s)==="[object ArrayBuffer]"}function Dx(s){return typeof FormData<"u"&&s instanceof FormData}function Rx(s){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(s):e=s&&s.buffer&&s.buffer instanceof ArrayBuffer,e}function Ix(s){return typeof s=="string"}function Ox(s){return typeof s=="number"}function Bh(s){return s!==null&&typeof s=="object"}function bs(s){if(Pi.call(s)!=="[object Object]")return!1;var e=Object.getPrototypeOf(s);return e===null||e===Object.prototype}function Fx(s){return Pi.call(s)==="[object Date]"}function Nx(s){return Pi.call(s)==="[object File]"}function Ux(s){return Pi.call(s)==="[object Blob]"}function Gh(s){return Pi.call(s)==="[object Function]"}function zx(s){return Bh(s)&&Gh(s.pipe)}function kx(s){return typeof URLSearchParams<"u"&&s instanceof URLSearchParams}function Bx(s){return s.replace(/^\s*/,"").replace(/\s*$/,"")}function Gx(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function el(s,e){if(!(s===null||typeof s>"u"))if(typeof s!="object"&&(s=[s]),Qo(s))for(var t=0,n=s.length;t<n;t++)e.call(null,s[t],t,s);else for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&e.call(null,s[i],i,s)}function Po(){var s={};function e(i,r){bs(s[r])&&bs(i)?s[r]=Po(s[r],i):bs(i)?s[r]=Po({},i):Qo(i)?s[r]=i.slice():s[r]=i}for(var t=0,n=arguments.length;t<n;t++)el(arguments[t],e);return s}function Vx(s,e,t){return el(e,function(i,r){t&&typeof i=="function"?s[r]=Cx(i,t):s[r]=i}),s}function Hx(s){return s.charCodeAt(0)===65279&&(s=s.slice(1)),s}var Wt={isArray:Qo,isArrayBuffer:Lx,isBuffer:Px,isFormData:Dx,isArrayBufferView:Rx,isString:Ix,isNumber:Ox,isObject:Bh,isPlainObject:bs,isUndefined:Co,isDate:Fx,isFile:Nx,isBlob:Ux,isFunction:Gh,isStream:zx,isURLSearchParams:kx,isStandardBrowserEnv:Gx,forEach:el,merge:Po,extend:Vx,trim:Bx,stripBOM:Hx},ji=Wt;function Hc(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Vh=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(ji.isURLSearchParams(t))i=t.toString();else{var r=[];ji.forEach(t,function(c,l){c===null||typeof c>"u"||(ji.isArray(c)?l=l+"[]":c=[c],ji.forEach(c,function(d){ji.isDate(d)?d=d.toISOString():ji.isObject(d)&&(d=JSON.stringify(d)),r.push(Hc(l)+"="+Hc(d))}))}),i=r.join("&")}if(i){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e},Wx=Wt;function Ws(){this.handlers=[]}Ws.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1};Ws.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};Ws.prototype.forEach=function(e){Wx.forEach(this.handlers,function(n){n!==null&&e(n)})};var qx=Ws,Xx=Wt,jx=function(e,t,n){return Xx.forEach(n,function(r){e=r(e,t)}),e},Ga,Wc;function Hh(){return Wc||(Wc=1,Ga=function(e){return!!(e&&e.__CANCEL__)}),Ga}var Yx=Wt,$x=function(e,t){Yx.forEach(e,function(i,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=i,delete e[r])})},Va,qc;function Zx(){return qc||(qc=1,Va=function(e,t,n,i,r){return e.config=t,n&&(e.code=n),e.request=i,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}),Va}var Ha,Xc;function Wh(){if(Xc)return Ha;Xc=1;var s=Zx();return Ha=function(t,n,i,r,o){var a=new Error(t);return s(a,n,i,r,o)},Ha}var Wa,jc;function Kx(){if(jc)return Wa;jc=1;var s=Wh();return Wa=function(t,n,i){var r=i.config.validateStatus;!i.status||!r||r(i.status)?t(i):n(s("Request failed with status code "+i.status,i.config,null,i.request,i))},Wa}var qa,Yc;function Jx(){if(Yc)return qa;Yc=1;var s=Wt;return qa=s.isStandardBrowserEnv()?function(){return{write:function(n,i,r,o,a,c){var l=[];l.push(n+"="+encodeURIComponent(i)),s.isNumber(r)&&l.push("expires="+new Date(r).toGMTString()),s.isString(o)&&l.push("path="+o),s.isString(a)&&l.push("domain="+a),c===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){var i=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),qa}var Xa,$c;function Qx(){return $c||($c=1,Xa=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}),Xa}var ja,Zc;function ev(){return Zc||(Zc=1,ja=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}),ja}var Ya,Kc;function tv(){if(Kc)return Ya;Kc=1;var s=Qx(),e=ev();return Ya=function(n,i){return n&&!s(i)?e(n,i):i},Ya}var $a,Jc;function nv(){if(Jc)return $a;Jc=1;var s=Wt,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return $a=function(n){var i={},r,o,a;return n&&s.forEach(n.split(`
`),function(l){if(a=l.indexOf(":"),r=s.trim(l.substr(0,a)).toLowerCase(),o=s.trim(l.substr(a+1)),r){if(i[r]&&e.indexOf(r)>=0)return;r==="set-cookie"?i[r]=(i[r]?i[r]:[]).concat([o]):i[r]=i[r]?i[r]+", "+o:o}}),i},$a}var Za,Qc;function iv(){if(Qc)return Za;Qc=1;var s=Wt;return Za=s.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),i;function r(o){var a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=r(window.location.href),function(a){var c=s.isString(a)?r(a):a;return c.protocol===i.protocol&&c.host===i.host}}():function(){return function(){return!0}}(),Za}var Ka,eu;function tu(){if(eu)return Ka;eu=1;var s=Wt,e=Kx(),t=Jx(),n=Vh,i=tv(),r=nv(),o=iv(),a=Wh();return Ka=function(l){return new Promise(function(d,f){var m=l.data,g=l.headers;s.isFormData(m)&&delete g["Content-Type"],(s.isBlob(m)||s.isFile(m))&&m.type&&delete g["Content-Type"];var h=new XMLHttpRequest;if(l.auth){var p=l.auth.username||"",_=unescape(encodeURIComponent(l.auth.password))||"";g.Authorization="Basic "+btoa(p+":"+_)}var M=i(l.baseURL,l.url);if(h.open(l.method.toUpperCase(),n(M,l.params,l.paramsSerializer),!0),h.timeout=l.timeout,h.onreadystatechange=function(){if(!(!h||h.readyState!==4)&&!(h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0))){var x="getAllResponseHeaders"in h?r(h.getAllResponseHeaders()):null,E=!l.responseType||l.responseType==="text"?h.responseText:h.response,P={data:E,status:h.status,statusText:h.statusText,headers:x,config:l,request:h};e(d,f,P),h=null}},h.onabort=function(){h&&(f(a("Request aborted",l,"ECONNABORTED",h)),h=null)},h.onerror=function(){f(a("Network Error",l,null,h)),h=null},h.ontimeout=function(){var x="timeout of "+l.timeout+"ms exceeded";l.timeoutErrorMessage&&(x=l.timeoutErrorMessage),f(a(x,l,"ECONNABORTED",h)),h=null},s.isStandardBrowserEnv()){var y=(l.withCredentials||o(M))&&l.xsrfCookieName?t.read(l.xsrfCookieName):void 0;y&&(g[l.xsrfHeaderName]=y)}if("setRequestHeader"in h&&s.forEach(g,function(x,E){typeof m>"u"&&E.toLowerCase()==="content-type"?delete g[E]:h.setRequestHeader(E,x)}),s.isUndefined(l.withCredentials)||(h.withCredentials=!!l.withCredentials),l.responseType)try{h.responseType=l.responseType}catch(S){if(l.responseType!=="json")throw S}typeof l.onDownloadProgress=="function"&&h.addEventListener("progress",l.onDownloadProgress),typeof l.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",l.onUploadProgress),l.cancelToken&&l.cancelToken.promise.then(function(x){h&&(h.abort(),f(x),h=null)}),m||(m=null),h.send(m)})},Ka}var Tt=Wt,nu=$x,rv={"Content-Type":"application/x-www-form-urlencoded"};function iu(s,e){!Tt.isUndefined(s)&&Tt.isUndefined(s["Content-Type"])&&(s["Content-Type"]=e)}function sv(){var s;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(s=tu()),s}var qs={adapter:sv(),transformRequest:[function(e,t){return nu(t,"Accept"),nu(t,"Content-Type"),Tt.isFormData(e)||Tt.isArrayBuffer(e)||Tt.isBuffer(e)||Tt.isStream(e)||Tt.isFile(e)||Tt.isBlob(e)?e:Tt.isArrayBufferView(e)?e.buffer:Tt.isURLSearchParams(e)?(iu(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):Tt.isObject(e)?(iu(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if(typeof e=="string")try{e=JSON.parse(e)}catch{}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};qs.headers={common:{Accept:"application/json, text/plain, */*"}};Tt.forEach(["delete","get","head"],function(e){qs.headers[e]={}});Tt.forEach(["post","put","patch"],function(e){qs.headers[e]=Tt.merge(rv)});var qh=qs,ru=Wt,Ja=jx,av=Hh(),ov=qh;function Qa(s){s.cancelToken&&s.cancelToken.throwIfRequested()}var lv=function(e){Qa(e),e.headers=e.headers||{},e.data=Ja(e.data,e.headers,e.transformRequest),e.headers=ru.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ru.forEach(["delete","get","head","post","put","patch","common"],function(i){delete e.headers[i]});var t=e.adapter||ov.adapter;return t(e).then(function(i){return Qa(e),i.data=Ja(i.data,i.headers,e.transformResponse),i},function(i){return av(i)||(Qa(e),i&&i.response&&(i.response.data=Ja(i.response.data,i.response.headers,e.transformResponse))),Promise.reject(i)})},pt=Wt,Xh=function(e,t){t=t||{};var n={},i=["url","method","data"],r=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(f,m){return pt.isPlainObject(f)&&pt.isPlainObject(m)?pt.merge(f,m):pt.isPlainObject(m)?pt.merge({},m):pt.isArray(m)?m.slice():m}function l(f){pt.isUndefined(t[f])?pt.isUndefined(e[f])||(n[f]=c(void 0,e[f])):n[f]=c(e[f],t[f])}pt.forEach(i,function(m){pt.isUndefined(t[m])||(n[m]=c(void 0,t[m]))}),pt.forEach(r,l),pt.forEach(o,function(m){pt.isUndefined(t[m])?pt.isUndefined(e[m])||(n[m]=c(void 0,e[m])):n[m]=c(void 0,t[m])}),pt.forEach(a,function(m){m in t?n[m]=c(e[m],t[m]):m in e&&(n[m]=c(void 0,e[m]))});var u=i.concat(r).concat(o).concat(a),d=Object.keys(e).concat(Object.keys(t)).filter(function(m){return u.indexOf(m)===-1});return pt.forEach(d,l),n},jh=Wt,cv=Vh,su=qx,uv=lv,Xs=Xh;function $r(s){this.defaults=s,this.interceptors={request:new su,response:new su}}$r.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=Xs(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[uv,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(r){t.unshift(r.fulfilled,r.rejected)}),this.interceptors.response.forEach(function(r){t.push(r.fulfilled,r.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n};$r.prototype.getUri=function(e){return e=Xs(this.defaults,e),cv(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};jh.forEach(["delete","get","head","options"],function(e){$r.prototype[e]=function(t,n){return this.request(Xs(n||{},{method:e,url:t}))}});jh.forEach(["post","put","patch"],function(e){$r.prototype[e]=function(t,n,i){return this.request(Xs(i||{},{method:e,url:t,data:n}))}});var hv=$r,eo,au;function Yh(){if(au)return eo;au=1;function s(e){this.message=e}return s.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},s.prototype.__CANCEL__=!0,eo=s,eo}var to,ou;function fv(){if(ou)return to;ou=1;var s=Yh();function e(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var n;this.promise=new Promise(function(o){n=o});var i=this;t(function(o){i.reason||(i.reason=new s(o),n(i.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.source=function(){var n,i=new e(function(o){n=o});return{token:i,cancel:n}},to=e,to}var no,lu;function dv(){return lu||(lu=1,no=function(e){return function(n){return e.apply(null,n)}}),no}var cu=Wt,pv=kh,ws=hv,mv=Xh,gv=qh;function $h(s){var e=new ws(s),t=pv(ws.prototype.request,e);return cu.extend(t,ws.prototype,e),cu.extend(t,e),t}var yn=$h(gv);yn.Axios=ws;yn.create=function(e){return $h(mv(yn.defaults,e))};yn.Cancel=Yh();yn.CancelToken=fv();yn.isCancel=Hh();yn.all=function(e){return Promise.all(e)};yn.spread=dv();Ax.exports=yn;Is.default=yn;(function(s){s.exports=Is})(Ex);var mr={};Object.defineProperty(mr,"__esModule",{value:!0});var Dn={Automatic:"auto",Afrikaans:"af",Albanian:"sq",Amharic:"am",Arabic:"ar",Armenian:"hy",Azerbaijani:"az",Basque:"eu",Belarusian:"be",Bengali:"bn",Bosnian:"bs",Bulgarian:"bg",Catalan:"ca",Cebuano:"ceb",Chichewa:"ny","Chinese Simplified":"zh-cn","Chinese Traditional":"zh-tw",Corsican:"co",Croatian:"hr",Czech:"cs",Danish:"da",Dutch:"nl",English:"en",Esperanto:"eo",Estonian:"et",Filipino:"tl",Finnish:"fi",French:"fr",Frisian:"fy",Galician:"gl",Georgian:"ka",German:"de",Greek:"el",Gujarati:"gu","Haitian Creole":"ht",Hausa:"ha",Hawaiian:"haw",Hebrew:"iw",Hindi:"hi",Hmong:"hmn",Hungarian:"hu",Icelandic:"is",Igbo:"ig",Indonesian:"id",Irish:"ga",Italian:"it",Japanese:"ja",Javanese:"jw",Kannada:"kn",Kazakh:"kk",Khmer:"km",Korean:"ko","Kurdish (Kurmanji)":"ku",Kyrgyz:"ky",Lao:"lo",Latin:"la",Latvian:"lv",Lithuanian:"lt",Luxembourgish:"lb",Macedonian:"mk",Malagasy:"mg",Malay:"ms",Malayalam:"ml",Maltese:"mt",Maori:"mi",Marathi:"mr",Mongolian:"mn","Myanmar (Burmese)":"my",Nepali:"ne",Norwegian:"no",Pashto:"ps",Persian:"fa",Polish:"pl",Portuguese:"pt",Punjabi:"ma",Romanian:"ro",Russian:"ru",Samoan:"sm","Scots Gaelic":"gd",Serbian:"sr",Sesotho:"st",Shona:"sn",Sindhi:"sd",Sinhala:"si",Slovak:"sk",Slovenian:"sl",Somali:"so",Spanish:"es",Sundanese:"su",Swahili:"sw",Swedish:"sv",Tajik:"tg",Tamil:"ta",Telugu:"te",Thai:"th",Turkish:"tr",Ukrainian:"uk",Urdu:"ur",Uyghur:"ug",Uzbek:"uz",Vietnamese:"vi",Welsh:"cy",Xhosa:"xh",Yiddish:"yi",Yoruba:"yo",Zulu:"zu"};function _v(s){return Boolean(Zh(s))}mr.isSupport=_v;function Zh(s){if(!s)return!1;if(Dn[s])return Dn[s];var e=Object.keys(Dn).filter(function(t){var n=s.toLowerCase();return Dn[t]===n});return e[0]?Dn[e[0]]:!1}mr.getCode=Zh;function xv(){return Object.keys(Dn)}mr.getAllLanguage=xv;function vv(){return Object.keys(Dn).map(function(s){return Dn[s]})}mr.getAllCode=vv;mr.default=Dn;var tl={};const Kh="[]";Object.defineProperty(tl,"__esModule",{value:!0});function yv(s){return s.join(`${Kh}
`)}tl.arrayStringify=yv;function Mv(s){s.length;var e=s.map(function(n,i){var r=n[0];return r.trim()}),t=e.join(" ").split(Kh).map(n=>n.trim());return t}tl.parseMultiple=Mv;const Sv="https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg",bv="https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg";let Wn="rotate",Ir="en";const gr=new n0,wv=new Bs(3,64,64),Jh=new ku,Tv=Jh.load(Sv),uu=Jh.load(bv),Ev=new i0({color:16777215,map:Tv,displacementMap:uu,displacementScale:.06,bumpMap:uu,bumpScale:.04,reflectivity:0,shininess:0}),Os=new mn(wv,Ev);gr.add(Os);const Av=new ku().load("https://storage.googleapis.com/umas_public_assets/michaelBay/free_star_sky_hdri_spherical_map_by_kirriaa_dbw8p0w%20(1).jpg"),Cv=new Io({map:Av,side:Rn}),Pv=new Bs(50,50,50),Qh=new mn(Pv,Cv);gr.add(Qh);const fn={width:window.innerWidth,height:window.innerHeight},nl=new u0(16777215,1);nl.position.set(-100,10,50);nl.intensity=1.25;gr.add(nl);const Ei=new Kt(75,fn.width/fn.height,.1,100);Ei.position.z=10;gr.add(Ei);const ef=document.querySelector(".webgl"),Zr=new Uu({canvas:ef});Zr.setSize(fn.width,fn.height);Zr.setPixelRatio(2);Zr.render(gr,Ei);const Lo=new h0(Ei,ef);window.addEventListener("resize",()=>{fn.width=window.innerWidth,fn.height=window.innerHeight,Ei.updateProjectionMatrix(),Ei.aspect=fn.width/fn.height,Zr.setSize(fn.width,fn.height)});const il=()=>{console.log("status",Wn),Wn!=="stop"&&(Os.rotation.y+=.01,Os.rotation.x+=5e-4,Qh.rotation.y+=.001,Lo.update(),Zr.render(gr,Ei),window.requestAnimationFrame(il))};il();const rl=zh.timeline({defaults:{duration:1}});rl.fromTo(Os.scale,{z:0,x:0,y:0},{z:1,x:1,y:1});rl.fromTo("nav",{y:"-100%"},{y:"0%"});rl.fromTo([".title",".btn"],{opacity:0},{opacity:1});const pn=document.querySelector("#btn"),an=document.querySelector(".title"),io=document.querySelector(".lang"),hu=document.querySelector(".explore"),fu=document.querySelector(".sphere"),Fs=["Every day is a journey, and the moon is just a stage.","A full moon is like a spotlight on the human condition.","The moon brings magic to life, but it also brings mystery.","The moon may be a friend for the night, but the sun is a friend forever.","The moon is always there, shining its light on us, no matter what we do.","Under the moonlight, the night seems shorter and the heart feels lighter.","The moon brings out the beauty in the darkness and the light within us.","A crescent moon is a reminder that even the smallest sliver of light can make a difference.","The moon is a symbol of change and growth, just like the tides of life.","The moon is a silent witness to the passage of time and the changes it brings.","The moon is a constant companion, always there to light our way in the darkness.","The moon is a reminder of the cyclical nature of life, and the inevitability of change.","The moon is a symbol of mystery and enchantment, inviting us to dream and imagine.","The moon is a reminder of the delicate balance between light and dark, and the importance of finding harmony within ourselves.","A full moon is a symbol of completion, reminding us to celebrate our achievements and the milestones in our lives.","The moon is a symbol of the feminine, reminding us to embrace our intuition and inner wisdom.","The moon is a reminder of the power of nature, and the majesty of the universe.","The moon is a symbol of hope, reminding us that even in the darkest of nights, the light will always return.","The moon is a symbol of the eternal, reminding us that some things never change, no matter how much time passes.","The moon is a symbol of resilience, reminding us that even though it may wane, it will always wax again.","The moon is a symbol of mystery and the unknown, inviting us to explore the uncharted territories within ourselves.","The moon is a symbol of unity, reminding us that we are all connected by the same celestial body.","The moon is a reminder of the importance of letting go and embracing change, just like the tides."],Ns=["月圓人團圓，月缺人散散。","月高光明照，人高心情好。","月亮有陰晴圓缺，生活有喜怒哀樂。","月黑風高夜長，人靜心境安寧。","月圓人團圓，喜氣洋洋。","月圓影明朗，知識普遍宏開。","月有陰晴圓缺，情有陰陽秀。","月到中秋人團圓，美滿心情伴隨著。","月黑風高秋夜長，家人團聚心溫暖。","月亮如鑑，心境如月，圓滿生活。","月黑風高走馬路，總比月亮光芒好。","月亮好像一個盤子，有時是圓的，有時是半圓的。","月亮會亮，即使你沒有看到它。","月亮是一個藍色的燈，照亮夜空中的星星。","月亮會顯示在天空中，只有當夜幕降下"],Lv=()=>{pn.addEventListener("click",function(){Wn==="stop"?(an.style.fontSize="",Ir==="en"?(an.innerText="Give it a spin",pn.innerText="找靈感"):(an.innerText="用手指轉一轉",pn.innerText="Get Your Way"),an.innerText="Give it a spin",Wn="rotate",Lo.enabled=!0,il()):Wn==="rotate"&&(Wn="stop",an.style.fontSize="20px",Ir==="en"?(an.innerHTML=Fs[Math.floor(Math.random()*Fs.length)],pn.innerText="Back"):(an.innerHTML=Ns[Math.floor(Math.random()*Ns.length)],pn.innerText="重設"),Lo.enabled=!1)})};Lv();const Dv=()=>{io.addEventListener("click",async function(){Ir==="en"?(io.innerText="繁體中文",Ir="tw",Wn==="stop"?(an.innerText=Ns[Math.floor(Math.random()*Ns.length)],pn.innerText="重設"):(an.innerText="用手指轉一轉",pn.innerText="找靈感"),hu.innerText="探索",fu.innerText="球球"):(pn.innerText="Back",hu.innerText="explore",fu.innerText="sphere",Wn==="stop"?(an.innerText=Fs[Math.floor(Math.random()*Fs.length)],pn.innerText="Back"):(pn.innerText="Get Your Way",an.innerText="Give it a spin"),io.innerText="English",Ir="en")})};Dv();
