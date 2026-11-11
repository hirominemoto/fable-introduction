(()=>{var Zu=0,eh=1,Ju=2;var Kr=1,qo=2,Gs=3,xi=0,kt=1,Nn=2,$n=0,Hs=1,Kn=2,th=3,nh=4,$u=5;var Vi=100,Ku=101,ju=102,ed=103,td=104,nd=200,id=201,sd=202,rd=203,ih=204,sh=205,ad=206,od=207,ld=208,cd=209,hd=210,ud=211,dd=212,fd=213,pd=214,oo=0,lo=1,co=2,vs=3,ho=4,uo=5,fo=6,po=7,Yo=0,md=1,gd=2,Un=0,jr=1,ea=2,ta=3,Qi=4,na=5,ia=6,sa=7;var rh=300,Wi=301,ks=302,Zo=303,Jo=304,mo=1e3,Ln=1001,go=1002,Ut=1003,_d=1004;var ra=1005;var en=1006,$o=1007;var jn=1008;var an=1009,ah=1010,oh=1011,Vs=1012,Ko=1013,En=1014,xn=1015,Rt=1016,jo=1017,el=1018,Xi=1020,lh=35902,ch=35899,hh=1021,uh=1022,wn=1023,Zn=1026,ei=1027,tl=1028,nl=1029,vi=1030,il=1031;var sl=1033,aa=33776,oa=33777,la=33778,ca=33779,rl=35840,al=35841,ol=35842,ll=35843,cl=36196,hl=37492,ul=37496,dl=37488,fl=37489,ha=37490,pl=37491,ml=37808,gl=37809,_l=37810,xl=37811,vl=37812,yl=37813,Ml=37814,Sl=37815,bl=37816,Tl=37817,El=37818,wl=37819,Al=37820,Ll=37821,Rl=36492,Cl=36494,Pl=36495,Il=36283,Dl=36284,ua=36285,Nl=36286;var mr=2300,_o=2301,ro=2302,kc=2303,Vc=2400,Qc=2401,Wc=2402;var xd=3200;var da=0,vd=1,ti="",Kt="srgb",gr="srgb-linear",_r="linear",lt="srgb";var ao=7680;var yd=519,Md=512,Sd=513,bd=514,dh=515,Td=516,Ed=517,fh=518,ph=519,mh=35044;var gh="300 es",pn=2e3,ys=2001;function Kf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function jf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wd(){let i=xr("canvas");return i.style.display="block",i}var lu={},Ms=null;function vr(...i){let e="THREE."+i.shift();Ms?Ms("log",e,...i):console.log(e,...i)}function Ad(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Oe(...i){i=Ad(i);let e="THREE."+i.shift();if(Ms)Ms("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ge(...i){i=Ad(i);let e="THREE."+i.shift();if(Ms)Ms("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ni(...i){let e=i.join(" ");e in lu||(lu[e]=!0,Oe(...i))}function Ld(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Rd={[oo]:oo,[co]:fo,[ho]:ho,[vs]:uo,[lo]:lo,[fo]:co,[po]:po,[uo]:vs},Rn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var mc=Math.PI/180,xo=180/Math.PI;function yi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function e0(i,e){return(i%e+e)%e}function gc(i,e,t){return(1-t)*i+t*e}function Cd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ul(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Pd(i,e){if(e.constructor===Float32Array)return i;let t=Ul(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Id(i,e){if(e.constructor===Float32Array)return i;let t=Ul(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var ee=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Cn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*M;p<0&&(u=-u,f=-f,g=-g,M=-M,p=-p);let m=1-o;if(p<.9995){let S=Math.acos(p),T=Math.sin(S);m=Math.sin(m*S)/T,o=Math.sin(o*S)/T,l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+M*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+M*o;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_c=new C,cu=new Cn,ke=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],M=s[0],p=s[3],m=s[6],S=s[1],T=s[4],v=s[7],A=s[2],E=s[5],_=s[8];return r[0]=a*M+o*S+l*A,r[3]=a*p+o*T+l*E,r[6]=a*m+o*v+l*_,r[1]=c*M+h*S+d*A,r[4]=c*p+h*T+d*E,r[7]=c*m+h*v+d*_,r[2]=u*M+f*S+g*A,r[5]=u*p+f*T+g*E,r[8]=u*m+f*v+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return e[0]=d*M,e[1]=(s*c-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=u*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=f*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ni("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xc.makeScale(e,t)),this}rotate(e){return Ni("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xc.makeRotation(-e)),this}translate(e,t){return Ni("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xc=new ke,hu=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uu=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function t0(){let i={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?_r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gr]:{primaries:e,whitePoint:n,transfer:_r,toXYZ:hu,fromXYZ:uu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:hu,fromXYZ:uu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),i}var Je=t0();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var es,vo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{es===void 0&&(es=xr("canvas")),es.width=e.width,es.height=e.height;let s=es.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=es}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},n0=0,Ss=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vc(s[a].image)):r.push(vc(s[a]))}else r=vc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function vc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var i0=0,yc=new C,tn=class i extends Rn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=en,a=jn,o=wn,l=an,c=i.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=yi(),this.name="",this.source=new Ss(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(yc).x}get height(){return this.source.getSize(yc).y}get depth(){return this.source.getSize(yc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mo:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mo:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=rh;tn.DEFAULT_ANISOTROPY=1;var yt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],M=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,v=(f+1)/2,A=(m+1)/2,E=(h+u)/4,_=(d+M)/4,b=(g+p)/4;return T>v&&T>A?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=_/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=_/r,s=b/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-M)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yo=class extends Rn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new tn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ss(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Et=class extends yo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},yr=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mo=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ht=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,d,u,f,g,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,M,p)}set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,M,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),a=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,M=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-M*c,t[9]=-o*l,t[2]=M-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,M=c*d;t[0]=u+M*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=M+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,M=c*d;t[0]=u-M*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=M-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,M=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+M,t[1]=l*d,t[5]=M*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,M=o*c;t[0]=l*h,t[4]=M-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-M*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,M=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+M,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=M*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s0,e,r0)}lookAt(e,t,n){let s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),oi.crossVectors(n,on),oi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),oi.crossVectors(n,on)),oi.normalize(),Ra.crossVectors(on,oi),s[0]=oi.x,s[4]=Ra.x,s[8]=on.x,s[1]=oi.y,s[5]=Ra.y,s[9]=on.y,s[2]=oi.z,s[6]=Ra.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],M=n[6],p=n[10],m=n[14],S=n[3],T=n[7],v=n[11],A=n[15],E=s[0],_=s[4],b=s[8],U=s[12],L=s[1],N=s[5],F=s[9],V=s[13],P=s[2],G=s[6],W=s[10],H=s[14],ne=s[3],Q=s[7],K=s[11],te=s[15];return r[0]=a*E+o*L+l*P+c*ne,r[4]=a*_+o*N+l*G+c*Q,r[8]=a*b+o*F+l*W+c*K,r[12]=a*U+o*V+l*H+c*te,r[1]=h*E+d*L+u*P+f*ne,r[5]=h*_+d*N+u*G+f*Q,r[9]=h*b+d*F+u*W+f*K,r[13]=h*U+d*V+u*H+f*te,r[2]=g*E+M*L+p*P+m*ne,r[6]=g*_+M*N+p*G+m*Q,r[10]=g*b+M*F+p*W+m*K,r[14]=g*U+M*V+p*H+m*te,r[3]=S*E+T*L+v*P+A*ne,r[7]=S*_+T*N+v*G+A*Q,r[11]=S*b+T*F+v*W+A*K,r[15]=S*U+T*V+v*H+A*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],M=e[7],p=e[11],m=e[15],S=l*f-c*u,T=o*f-c*d,v=o*u-l*d,A=a*f-c*h,E=a*u-l*h,_=a*d-o*h;return t*(M*S-p*T+m*v)-n*(g*S-p*A+m*E)+s*(g*T-M*A+m*_)-r*(g*v-M*E+p*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],M=e[13],p=e[14],m=e[15],S=t*o-n*a,T=t*l-s*a,v=t*c-r*a,A=n*l-s*o,E=n*c-r*o,_=s*c-r*l,b=h*M-d*g,U=h*p-u*g,L=h*m-f*g,N=d*p-u*M,F=d*m-f*M,V=u*m-f*p,P=S*V-T*F+v*N+A*L-E*U+_*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/P;return e[0]=(o*V-l*F+c*N)*G,e[1]=(s*F-n*V-r*N)*G,e[2]=(M*_-p*E+m*A)*G,e[3]=(u*E-d*_-f*A)*G,e[4]=(l*L-a*V-c*U)*G,e[5]=(t*V-s*L+r*U)*G,e[6]=(p*v-g*_-m*T)*G,e[7]=(h*_-u*v+f*T)*G,e[8]=(a*F-o*L+c*b)*G,e[9]=(n*L-t*F-r*b)*G,e[10]=(g*E-M*v+m*S)*G,e[11]=(d*v-h*E-f*S)*G,e[12]=(o*U-a*N-l*b)*G,e[13]=(t*N-n*U+s*b)*G,e[14]=(M*T-g*A-p*S)*G,e[15]=(h*A-d*T+u*S)*G,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,M=a*h,p=a*d,m=o*d,S=l*c,T=l*h,v=l*d,A=n.x,E=n.y,_=n.z;return s[0]=(1-(M+m))*A,s[1]=(f+v)*A,s[2]=(g-T)*A,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(u+m))*E,s[6]=(p+S)*E,s[7]=0,s[8]=(g+T)*_,s[9]=(p-S)*_,s[10]=(1-(u+M))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ts.set(s[0],s[1],s[2]).length(),o=ts.set(s[4],s[5],s[6]).length(),l=ts.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Mn.copy(this);let c=1/a,h=1/o,d=1/l;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,t.setFromRotationMatrix(Mn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=pn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===pn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===ys)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=pn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===pn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===ys)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ts=new C,Mn=new ht,s0=new C(0,0,0),r0=new C(1,1,1),oi=new C,Ra=new C,on=new C,du=new ht,fu=new Cn,Pn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(du,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fu.setFromEuler(this),this.setFromQuaternion(fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var Mr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},a0=0,pu=new C,ns=new Cn,kn=new ht,Ca=new C,nr=new C,o0=new C,l0=new Cn,mu=new C(1,0,0),gu=new C(0,1,0),_u=new C(0,0,1),xu={type:"added"},c0={type:"removed"},is={type:"childadded",child:null},Mc={type:"childremoved",child:null},bt=class i extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new Pn,n=new Cn,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new ke}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(mu,e)}rotateY(e){return this.rotateOnAxis(gu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return pu.copy(e).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mu,e)}translateY(e){return this.translateOnAxis(gu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(nr,Ca,this.up):kn.lookAt(Ca,nr,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(kn),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xu),is.child=e,this.dispatchEvent(is),is.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(c0),Mc.child=e,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xu),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,o0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,l0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bt.DEFAULT_UP=new C(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},h0={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let p=t.getJointPose(M,n),m=this._getHandJoint(c,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(h0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function Sc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=e0(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Sc(a,r,e+1/3),this.g=Sc(a,r,e),this.b=Sc(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=Dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Je.workingToColorSpace(qt.copy(this),e),Math.round($e(qt.r*255,0,255))*65536+Math.round($e(qt.g*255,0,255))*256+Math.round($e(qt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(qt.copy(this),t);let n=qt.r,s=qt.g,r=qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Kt){Je.workingToColorSpace(qt.copy(this),e);let t=qt.r,n=qt.g,s=qt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Pa);let n=gc(li.h,Pa.h,t),s=gc(li.s,Pa.s,t),r=gc(li.l,Pa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new be;be.NAMES=Dd;var Sr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var fi=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Sn=new C,Vn=new C,bc=new C,Qn=new C,ss=new C,rs=new C,vu=new C,Tc=new C,Ec=new C,wc=new C,Ac=new yt,Lc=new yt,Rc=new yt,qn=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Sn.subVectors(e,t),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Sn.subVectors(s,t),Vn.subVectors(n,t),bc.subVectors(e,t);let a=Sn.dot(Sn),o=Sn.dot(Vn),l=Sn.dot(bc),c=Vn.dot(Vn),h=Vn.dot(bc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ac.setScalar(0),Lc.setScalar(0),Rc.setScalar(0),Ac.fromBufferAttribute(e,t),Lc.fromBufferAttribute(e,n),Rc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ac,r.x),a.addScaledVector(Lc,r.y),a.addScaledVector(Rc,r.z),a}static isFrontFacing(e,t,n,s){return Sn.subVectors(n,t),Vn.subVectors(e,t),Sn.cross(Vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Sn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ss.subVectors(s,n),rs.subVectors(r,n),Tc.subVectors(e,n);let l=ss.dot(Tc),c=rs.dot(Tc);if(l<=0&&c<=0)return t.copy(n);Ec.subVectors(e,s);let h=ss.dot(Ec),d=rs.dot(Ec);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(ss,a);wc.subVectors(e,r);let f=ss.dot(wc),g=rs.dot(wc);if(g>=0&&f<=g)return t.copy(r);let M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(rs,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return vu.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(vu,o);let m=1/(p+M+u);return a=M*m,o=u*m,t.copy(n).addScaledVector(ss,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},In=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),Da.subVectors(this.max,ir),as.subVectors(e.a,ir),os.subVectors(e.b,ir),ls.subVectors(e.c,ir),ci.subVectors(os,as),hi.subVectors(ls,os),Ci.subVectors(as,ls);let t=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ci.z,Ci.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ci.z,0,-Ci.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ci.y,Ci.x,0];return!Cc(t,as,os,ls,Da)||(t=[1,0,0,0,1,0,0,0,1],!Cc(t,as,os,ls,Da))?!1:(Na.crossVectors(ci,hi),t=[Na.x,Na.y,Na.z],Cc(t,as,os,ls,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Wn=[new C,new C,new C,new C,new C,new C,new C,new C],bn=new C,Ia=new In,as=new C,os=new C,ls=new C,ci=new C,hi=new C,Ci=new C,ir=new C,Da=new C,Na=new C,Pi=new C;function Cc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Pi.fromArray(i,r);let o=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Lt=new C,Ua=new ee,u0=0,Gt=class extends Rn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:u0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mh,this.updateRanges=[],this.gpuType=xn,this.version=0,this._normalizationScale=e!==void 0?Ul(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Pd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Id(e,this.array)}};var br=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Tr=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var et=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},d0=new In,sr=new C,Pc=new C,Dn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):d0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);let t=sr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(Pc)),this.expandByPoint(sr.copy(e.center).sub(Pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},f0=0,fn=new ht,Ic=new bt,cs=new C,ln=new In,rr=new In,Nt=new C,vt=class i extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kf(e)?Tr:br)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return Ic.lookAt(e),Ic.updateMatrix(),this.applyMatrix4(Ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new et(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(ln.min,rr.min),ln.expandByPoint(Nt),Nt.addVectors(ln.max,rr.max),ln.expandByPoint(Nt)):(ln.expandByPoint(rr.min),ln.expandByPoint(rr.max))}ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(e,c),Nt.add(cs)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new C,l[U]=new C;let h=new C,d=new C,u=new C,f=new ee,g=new ee,M=new ee,p=new C,m=new C;function S(U,L,N){c[U]=c[L]=c[N]=1,h.fromBufferAttribute(n,U),d.fromBufferAttribute(n,L),u.fromBufferAttribute(n,N),f.fromBufferAttribute(r,U),g.fromBufferAttribute(r,L),M.fromBufferAttribute(r,N),d.sub(h),u.sub(h),g.sub(f),M.sub(f);let F=1/(g.x*M.y-M.x*g.y);isFinite(F)&&(p.copy(d).multiplyScalar(M.y).addScaledVector(u,-g.y).multiplyScalar(F),m.copy(u).multiplyScalar(g.x).addScaledVector(d,-M.x).multiplyScalar(F),o[U].add(p),o[L].add(p),o[N].add(p),l[U].add(m),l[L].add(m),l[N].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,L=T.length;U<L;++U){let N=T[U],F=N.start,V=N.count;for(let P=F,G=F+V;P<G;P+=3)S(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let v=new C,A=new C,E=new C,_=new C;function b(U){E.fromBufferAttribute(s,U),_.copy(E);let L=o[U];v.copy(L),v.sub(E.multiplyScalar(E.dot(L))).normalize(),A.crossVectors(_,L);let F=A.dot(l[U])<0?-1:1;a.setXYZW(U,v.x,v.y,v.z,F)}for(let U=0,L=n.count;U<L;++U)c[U]&&b(U);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),M=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new Gt(u,h,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},So=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mh,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=yu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=yu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function yu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=yi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var $t=new C,Er=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Ul(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){vr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){vr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Pd(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Id(e,this.data.array)}},Dc=new C,p0=new C,m0=new ke,Tn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Dc.subVectors(n,t).cross(p0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Dc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||m0.getNormalMatrix(e),s=this.coplanarPoint(Dc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},g0=0,mn=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=Hs,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=sh,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ao,this.stencilZFail=ao,this.stencilZPass=ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Tn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ee().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ee().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ui=class extends mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hs,ar=new C,us=new C,ds=new C,fs=new ee,or=new ee,Nd=new ht,Fa=new C,lr=new C,Oa=new C,Mu=new ee,Nc=new ee,Su=new ee,Ts=class extends bt{constructor(e=new Ui){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new So(t,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new Er(n,3,0,!1)),hs.setAttribute("uv",new Er(n,2,3,!1))}this.geometry=hs,this.material=e,this.center=new ee(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),Nd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-ds.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ba(Fa.set(-.5,-.5,0),ds,a,us,s,r),Ba(lr.set(.5,-.5,0),ds,a,us,s,r),Ba(Oa.set(.5,.5,0),ds,a,us,s,r),Mu.set(0,0),Nc.set(1,0),Su.set(1,1);let o=e.ray.intersectTriangle(Fa,lr,Oa,!1,ar);if(o===null&&(Ba(lr.set(-.5,.5,0),ds,a,us,s,r),Nc.set(0,1),o=e.ray.intersectTriangle(Fa,Oa,lr,!1,ar),o===null))return;let l=e.ray.origin.distanceTo(ar);l<e.near||l>e.far||t.push({distance:l,point:ar.clone(),uv:qn.getInterpolation(ar,Fa,lr,Oa,Mu,Nc,Su,new ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ba(i,e,t,n,s,r){fs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(or.x=r*fs.x-s*fs.y,or.y=s*fs.x+r*fs.y):or.copy(fs),i.copy(e),i.x+=or.x,i.y+=or.y,i.applyMatrix4(Nd)}var Xn=new C,Uc=new C,za=new C,Ga=new C,Es=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Uc.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),Ga.copy(this.origin).sub(Uc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(za),o=Ga.dot(this.direction),l=-Ga.dot(za),c=Ga.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let M=1/h;d*=M,u*=M,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Uc).addScaledVector(za,u),f}intersectSphere(e,t){if(e.radius<0)return null;Xn.subVectors(e.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,M=t.y-a.y,p=t.z-a.z,m=n.x-a.x,S=n.y-a.y,T=n.z-a.z,v=Math.abs(l),A=Math.abs(c),E=Math.abs(h),_,b,U,L,N,F,V,P,G,W,H,ne;if(v>=A&&v>=E?(U=l,F=d,G=g,ne=m,l>=0?(_=c,b=h,L=u,N=f,V=M,P=p,W=S,H=T):(_=h,b=c,L=f,N=u,V=p,P=M,W=T,H=S)):A>=E?(U=c,F=u,G=M,ne=S,c>=0?(_=h,b=l,L=f,N=d,V=p,P=g,W=T,H=m):(_=l,b=h,L=d,N=f,V=g,P=p,W=m,H=T)):(U=h,F=f,G=p,ne=T,h>=0?(_=l,b=c,L=d,N=u,V=g,P=M,W=m,H=S):(_=c,b=l,L=u,N=d,V=M,P=g,W=S,H=m)),U===0)return null;let Q=_/U,K=b/U,te=1/U,Ee=L-Q*F,Be=N-K*F,q=V-Q*G,_e=P-K*G,we=W-Q*ne,Ne=H-K*ne,xe=we*_e-Ne*q,Ue=Ee*Ne-Be*we,_t=q*Be-_e*Ee;if(s){if(xe<0||Ue<0||_t<0)return null}else if((xe<0||Ue<0||_t<0)&&(xe>0||Ue>0||_t>0))return null;let ze=xe+Ue+_t;if(ze===0)return null;let Ye=te*(xe*F+Ue*G+_t*ne);return(ze>0?Ye<0:Ye>0)?null:this.at(Ye/ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bu=new ht,Ii=new Es,Ha=new Dn,Tu=new C,ka=new C,Va=new C,Qa=new C,Fc=new C,Wa=new C,Eu=new C,Xa=new C,rt=class extends bt{constructor(e=new vt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Fc.fromBufferAttribute(d,e),a?Wa.addScaledVector(Fc,h):Wa.addScaledVector(Fc.sub(t),h))}t.add(Wa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(Ha.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Ha,Tu)===null||Ii.origin.distanceToSquared(Tu)>(e.far-e.near)**2))&&(bu.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(bu),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let p=u[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),T=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=S,A=T;v<A;v+=3){let E=o.getX(v),_=o.getX(v+1),b=o.getX(v+2);s=qa(this,m,e,n,c,h,d,E,_,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let p=g,m=M;p<m;p+=3){let S=o.getX(p),T=o.getX(p+1),v=o.getX(p+2);s=qa(this,a,e,n,c,h,d,S,T,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let p=u[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),T=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=S,A=T;v<A;v+=3){let E=v,_=v+1,b=v+2;s=qa(this,m,e,n,c,h,d,E,_,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let p=g,m=M;p<m;p+=3){let S=p,T=p+1,v=p+2;s=qa(this,a,e,n,c,h,d,S,T,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function _0(i,e,t,n,s,r,a,o){let l;if(e.side===kt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===xi,o),l===null)return null;Xa.copy(o),Xa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Xa);return c<t.near||c>t.far?null:{distance:c,point:Xa.clone(),object:i}}function qa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ka),i.getVertexPosition(l,Va),i.getVertexPosition(c,Qa);let h=_0(i,e,t,n,ka,Va,Qa,Eu);if(h){let d=new C;qn.getBarycoord(Eu,ka,Va,Qa,d),s&&(h.uv=qn.getInterpolatedAttribute(s,o,l,c,d,new ee)),r&&(h.uv1=qn.getInterpolatedAttribute(r,o,l,c,d,new ee)),a&&(h.normal=qn.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};qn.getNormal(ka,Va,Qa,u.normal),h.face=u,h.barycoord=d}return h}var wr=class extends tn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ut,h=Ut,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ar=class extends Gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ps=new ht,wu=new ht,Ya=[],Au=new In,x0=new ht,cr=new rt,hr=new Dn,gn=class extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ar(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,x0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),Au.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(Au)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),hr.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),e.ray.intersectsSphere(hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),wu.multiplyMatrices(n,ps),cr.matrixWorld=wu,cr.raycast(e,Ya);for(let a=0,o=Ya.length;a<o;a++){let l=Ya[a];l.instanceId=r,l.object=this,t.push(l)}Ya.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wr(new Float32Array(s*this.count),s,this.count,tl,xn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Di=new Dn,v0=new ee(.5,.5),Za=new C,pi=class{constructor(e=new Tn,t=new Tn,n=new Tn,s=new Tn,r=new Tn,a=new Tn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],M=r[9],p=r[10],m=r[11],S=r[12],T=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,m-g,A-S).normalize(),s[1].setComponents(c+a,f+h,m+g,A+S).normalize(),s[2].setComponents(c+o,f+d,m+M,A+T).normalize(),s[3].setComponents(c-o,f-d,m-M,A-T).normalize(),n)s[4].setComponents(l,u,p,v).normalize(),s[5].setComponents(c-l,f-u,m-p,A-v).normalize();else if(s[4].setComponents(c-l,f-u,m-p,A-v).normalize(),t===pn)s[5].setComponents(c+l,f+u,m+p,A+v).normalize();else if(t===ys)s[5].setComponents(l,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);let t=v0.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Za.x=s.normal.x>0?e.max.x:e.min.x,Za.y=s.normal.y>0?e.max.y:e.min.y,Za.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Lu=new ht,bo=class i{constructor(){this.coordinateSystem=pn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Lu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new pi),n[s].setFromProjectionMatrix(Lu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new pi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var ws=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},To=new C,Eo=new C,Ru=new ht,ur=new Es,Ja=new Dn,Oc=new C,Cu=new C,wo=class extends bt{constructor(e=new vt,t=new ws){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)To.fromBufferAttribute(t,s-1),Eo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=To.distanceTo(Eo);e.setAttribute("lineDistance",new et(n,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(s),Ja.radius+=r,e.ray.intersectsSphere(Ja)===!1)return;Ru.copy(s).invert(),ur.copy(e.ray).applyMatrix4(Ru);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=f,p=g-1;M<p;M+=c){let m=h.getX(M),S=h.getX(M+1),T=$a(this,e,ur,l,m,S,M);T&&t.push(T)}if(this.isLineLoop){let M=h.getX(g-1),p=h.getX(f),m=$a(this,e,ur,l,M,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=f,p=g-1;M<p;M+=c){let m=$a(this,e,ur,l,M,M+1,M);m&&t.push(m)}if(this.isLineLoop){let M=$a(this,e,ur,l,g-1,f,g-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function $a(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(To.fromBufferAttribute(o,s),Eo.fromBufferAttribute(o,r),t.distanceSqToSegment(To,Eo,Oc,Cu)>n)return;Oc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Oc);if(!(c<e.near||c>e.far))return{distance:c,point:Cu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Pu=new C,Iu=new C,Lr=class extends wo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Pu.fromBufferAttribute(t,s),Iu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pu.distanceTo(Iu);e.setAttribute("lineDistance",new et(n,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Fi=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Du=new ht,Xc=new Es,Ka=new Dn,ja=new C,As=class extends bt{constructor(e=new vt,t=new Fi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(s),Ka.radius+=r,e.ray.intersectsSphere(Ka)===!1)return;Du.copy(s).invert(),Xc.copy(e.ray).applyMatrix4(Du);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,M=f;g<M;g++){let p=c.getX(g);ja.fromBufferAttribute(d,p),Nu(ja,p,l,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,M=f;g<M;g++)ja.fromBufferAttribute(d,g),Nu(ja,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Nu(i,e,t,n,s,r,a){let o=Xc.distanceSqToPoint(i);if(o<t){let l=new C;Xc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Rr=class extends tn{constructor(e=[],t=Wi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ls=class extends tn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Jn=class extends tn{constructor(e,t,n=En,s,r,a,o=Ut,l=Ut,c,h=Zn,d=1){if(h!==Zn&&h!==ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ss(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Cr=class extends Jn{constructor(e,t=En,n=Wi,s,r,a=Ut,o=Ut,l,c=Zn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Pr=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_n=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(d,2));function g(M,p,m,S,T,v,A,E,_,b,U){let L=v/_,N=A/b,F=v/2,V=A/2,P=E/2,G=_+1,W=b+1,H=0,ne=0,Q=new C;for(let K=0;K<W;K++){let te=K*N-V;for(let Ee=0;Ee<G;Ee++){let Be=Ee*L-F;Q[M]=Be*S,Q[p]=te*T,Q[m]=P,c.push(Q.x,Q.y,Q.z),Q[M]=0,Q[p]=0,Q[m]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(Ee/_),d.push(1-K/b),H+=1}}for(let K=0;K<b;K++)for(let te=0;te<_;te++){let Ee=u+te+G*K,Be=u+te+G*(K+1),q=u+(te+1)+G*(K+1),_e=u+(te+1)+G*K;l.push(Ee,Be,_e),l.push(Be,q,_e),ne+=6}o.addGroup(f,ne,U),f+=ne,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Oi=class i extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new C,h=new ee;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(o,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Rs=class i extends vt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,M=[],p=n/2,m=0;S(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new et(d,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(f,2));function S(){let v=new C,A=new C,E=0,_=(t-e)/n;for(let b=0;b<=r;b++){let U=[],L=b/r,N=L*(t-e)+e;for(let F=0;F<=s;F++){let V=F/s,P=V*l+o,G=Math.sin(P),W=Math.cos(P);A.x=N*G,A.y=-L*n+p,A.z=N*W,d.push(A.x,A.y,A.z),v.set(G,_,W).normalize(),u.push(v.x,v.y,v.z),f.push(V,1-L),U.push(g++)}M.push(U)}for(let b=0;b<s;b++)for(let U=0;U<r;U++){let L=M[U][b],N=M[U+1][b],F=M[U+1][b+1],V=M[U][b+1];(e>0||U!==0)&&(h.push(L,N,V),E+=3),(t>0||U!==r-1)&&(h.push(N,F,V),E+=3)}c.addGroup(m,E,0),m+=E}function T(v){let A=g,E=new ee,_=new C,b=0,U=v===!0?e:t,L=v===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,p*L,0),u.push(0,L,0),f.push(.5,.5),g++;let N=g;for(let F=0;F<=s;F++){let P=F/s*l+o,G=Math.cos(P),W=Math.sin(P);_.x=U*W,_.y=p*L,_.z=U*G,d.push(_.x,_.y,_.z),u.push(0,L,0),E.x=G*.5+.5,E.y=W*.5*L+.5,f.push(E.x,E.y),g++}for(let F=0;F<s;F++){let V=A+F,P=N+F;v===!0?h.push(P,P+1,V):h.push(P+1,P,V),b+=3}c.addGroup(m,b,v===!0?1:2),m+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ir=class i extends Rs{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ao=class i extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let T=new C,v=new C,A=new C;for(let E=0;E<t.length;E+=3)f(t[E+0],T),f(t[E+1],v),f(t[E+2],A),l(T,v,A,S)}function l(S,T,v,A){let E=A+1,_=[];for(let b=0;b<=E;b++){_[b]=[];let U=S.clone().lerp(v,b/E),L=T.clone().lerp(v,b/E),N=E-b;for(let F=0;F<=N;F++)F===0&&b===E?_[b][F]=U:_[b][F]=U.clone().lerp(L,F/N)}for(let b=0;b<E;b++)for(let U=0;U<2*(E-b)-1;U++){let L=Math.floor(U/2);U%2===0?(u(_[b][L+1]),u(_[b+1][L]),u(_[b][L])):(u(_[b][L+1]),u(_[b+1][L+1]),u(_[b+1][L]))}}function c(S){let T=new C;for(let v=0;v<r.length;v+=3)T.x=r[v+0],T.y=r[v+1],T.z=r[v+2],T.normalize().multiplyScalar(S),r[v+0]=T.x,r[v+1]=T.y,r[v+2]=T.z}function h(){let S=new C;for(let T=0;T<r.length;T+=3){S.x=r[T+0],S.y=r[T+1],S.z=r[T+2];let v=p(S)/2/Math.PI+.5,A=m(S)/Math.PI+.5;a.push(v,1-A)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){let T=a[S+0],v=a[S+2],A=a[S+4],E=Math.max(T,v,A),_=Math.min(T,v,A);E>.9&&_<.1&&(T<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,T){let v=S*3;T.x=e[v+0],T.y=e[v+1],T.z=e[v+2]}function g(){let S=new C,T=new C,v=new C,A=new C,E=new ee,_=new ee,b=new ee;for(let U=0,L=0;U<r.length;U+=9,L+=6){S.set(r[U+0],r[U+1],r[U+2]),T.set(r[U+3],r[U+4],r[U+5]),v.set(r[U+6],r[U+7],r[U+8]),E.set(a[L+0],a[L+1]),_.set(a[L+2],a[L+3]),b.set(a[L+4],a[L+5]),A.copy(S).add(T).add(v).divideScalar(3);let N=p(A);M(E,L+0,S,N),M(_,L+2,T,N),M(b,L+4,v,N)}}function M(S,T,v,A){A<0&&S.x===1&&(a[T]=S.x-1),v.x===0&&v.z===0&&(a[T]=A/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ee:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,s=[],r=[],a=[],o=new C,l=new ht;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos($e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos($e(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Cs=class extends cn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ee){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Lo=class extends Cs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function _h(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Uu=new C,Fu=new C,Bc=new _h,zc=new _h,Gc=new _h,Ps=class extends cn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Fu.subVectors(s[0],s[1]).add(s[0]),c=Fu);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Uu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Uu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);M<1e-4&&(M=1),g<1e-4&&(g=M),p<1e-4&&(p=M),Bc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,M,p),zc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,M,p),Gc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,M,p)}else this.curveType==="catmullrom"&&(Bc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),zc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Gc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Bc.calc(l),zc.calc(l),Gc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ou(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function y0(i,e){let t=1-i;return t*t*e}function M0(i,e){return 2*(1-i)*i*e}function S0(i,e){return i*i*e}function fr(i,e,t,n){return y0(i,e)+M0(i,t)+S0(i,n)}function b0(i,e){let t=1-i;return t*t*t*e}function T0(i,e){let t=1-i;return 3*t*t*i*e}function E0(i,e){return 3*(1-i)*i*i*e}function w0(i,e){return i*i*i*e}function pr(i,e,t,n,s){return b0(i,e)+T0(i,t)+E0(i,n)+w0(i,s)}var Dr=class extends cn{constructor(e=new ee,t=new ee,n=new ee,s=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ee){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(pr(e,s.x,r.x,a.x,o.x),pr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ro=class extends cn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(pr(e,s.x,r.x,a.x,o.x),pr(e,s.y,r.y,a.y,o.y),pr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nr=class extends cn{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Co=class extends cn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ur=class extends cn{constructor(e=new ee,t=new ee,n=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ee){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(fr(e,s.x,r.x,a.x),fr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fr=class extends cn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(fr(e,s.x,r.x,a.x),fr(e,s.y,r.y,a.y),fr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Or=class extends cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Ou(o,l.x,c.x,h.x,d.x),Ou(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ee().fromArray(s))}return this}},Po=Object.freeze({__proto__:null,ArcCurve:Lo,CatmullRomCurve3:Ps,CubicBezierCurve:Dr,CubicBezierCurve3:Ro,EllipseCurve:Cs,LineCurve:Nr,LineCurve3:Co,QuadraticBezierCurve:Ur,QuadraticBezierCurve3:Fr,SplineCurve:Or}),Io=class extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Po[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Po[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Bi=class extends Io{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Nr(this.currentPoint.clone(),new ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ur(this.currentPoint.clone(),new ee(e,t),new ee(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Dr(this.currentPoint.clone(),new ee(e,t),new ee(n,s),new ee(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Or(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Cs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Br=class extends Bi{constructor(e){super(e),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Bi().fromJSON(s))}return this}};function A0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Ud(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=I0(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,d=l;for(let u=t;u<s;u+=t){let f=i[u],g=i[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return zr(r,a,t,o,l,c,0),a}function Ud(i,e,t,n,s){let r;if(s===V0(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Bu(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Bu(a/n|0,i[a],i[a+1],r);return r&&Is(r,r.next)&&(Hr(r),r=r.next),r}function zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Is(t,t.next)||St(t.prev,t,t.next)===0)){if(Hr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&O0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?R0(i,n,s,r):L0(i)){e.push(l.i,i.i,c.i),Hr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=C0(zi(i),e),zr(i,e,t,n,s,r,2)):a===2&&P0(i,e,t,n,s,r):zr(zi(i),e,t,n,s,r,1);break}}}function L0(i){let e=i.prev,t=i,n=i.next;if(St(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&dr(s,o,r,l,a,c,g.x,g.y)&&St(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function R0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(St(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),M=Math.max(o,l,c),p=Math.max(h,d,u),m=qc(f,g,e,t,n),S=qc(M,p,e,t,n),T=i.prevZ,v=i.nextZ;for(;T&&T.z>=m&&v&&v.z<=S;){if(T.x>=f&&T.x<=M&&T.y>=g&&T.y<=p&&T!==s&&T!==a&&dr(o,h,l,d,c,u,T.x,T.y)&&St(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=f&&v.x<=M&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&dr(o,h,l,d,c,u,v.x,v.y)&&St(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=m;){if(T.x>=f&&T.x<=M&&T.y>=g&&T.y<=p&&T!==s&&T!==a&&dr(o,h,l,d,c,u,T.x,T.y)&&St(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=M&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&dr(o,h,l,d,c,u,v.x,v.y)&&St(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function C0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Is(n,s)&&Od(n,t,t.next,s)&&Gr(n,s)&&Gr(s,n)&&(e.push(n.i,t.i,s.i),Hr(t),Hr(t.next),t=i=s),t=t.next}while(t!==i);return zi(t)}function P0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&G0(a,o)){let l=Bd(a,o);a=zi(a,a.next),l=zi(l,l.next),zr(a,e,t,n,s,r,0),zr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function I0(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Ud(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(z0(c))}s.sort(D0);for(let r=0;r<s.length;r++)t=N0(s[r],t);return t}function D0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function N0(i,e){let t=U0(i,e);if(!t)return e;let n=Bd(t,i);return zi(n,n.next),zi(t,t.next)}function U0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Is(i,t))return t;do{if(Is(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Fd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Gr(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&F0(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function F0(i,e){return St(i.prev,i,e.prev)<0&&St(e.next,i,i.next)<0}function O0(i,e,t,n){let s=i;do s.z===0&&(s.z=qc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,B0(s)}function B0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function qc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function z0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Fd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function dr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Fd(i,e,t,n,s,r,a,o)}function G0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!H0(i,e)&&(Gr(i,e)&&Gr(e,i)&&k0(i,e)&&(St(i.prev,i,e.prev)||St(i,e.prev,e))||Is(i,e)&&St(i.prev,i,i.next)>0&&St(e.prev,e,e.next)>0)}function St(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Is(i,e){return i.x===e.x&&i.y===e.y}function Od(i,e,t,n){let s=to(St(i,e,t)),r=to(St(i,e,n)),a=to(St(t,n,i)),o=to(St(t,n,e));return!!(s!==r&&a!==o||s===0&&eo(i,t,e)||r===0&&eo(i,n,e)||a===0&&eo(t,i,n)||o===0&&eo(t,e,n))}function eo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function to(i){return i>0?1:i<0?-1:0}function H0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Od(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Gr(i,e){return St(i.prev,i,i.next)<0?St(i,e,i.next)>=0&&St(i,i.prev,e)>=0:St(i,e,i.prev)<0||St(i,i.next,e)<0}function k0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Bd(i,e){let t=Yc(i.i,i.x,i.y),n=Yc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Bu(i,e,t,n){let s=Yc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function V0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Zc=class{static triangulate(e,t,n=2){return A0(e,t,n)}},di=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];zu(e),Gu(n,e);let a=e.length;t.forEach(zu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Gu(n,t[l]);let o=Zc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function zu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Gu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var kr=class i extends vt{constructor(e=new Br([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Q0,T,v=!1,A,E,_,b;if(m){T=m.getSpacedPoints(h),v=!0,u=!1;let j=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(h,j),E=new C,_=new C,b=new C}u||(p=0,f=0,g=0,M=0);let U=o.extractPoints(c),L=U.shape,N=U.holes;if(!di.isClockWise(L)){L=L.reverse();for(let j=0,ce=N.length;j<ce;j++){let ae=N[j];di.isClockWise(ae)&&(N[j]=ae.reverse())}}function V(j){let ae=10000000000000001e-36,Se=j[0];for(let ge=1;ge<=j.length;ge++){let Qe=ge%j.length,Pe=j[Qe],je=Pe.x-Se.x,nt=Pe.y-Se.y,ot=je*je+nt*nt,D=Math.max(Math.abs(Pe.x),Math.abs(Pe.y),Math.abs(Se.x),Math.abs(Se.y)),wt=ae*D*D;if(ot<=wt){j.splice(Qe,1),ge--;continue}Se=Pe}}V(L),N.forEach(V);let P=N.length,G=L;for(let j=0;j<P;j++){let ce=N[j];L=L.concat(ce)}function W(j,ce,ae){return ce||Ge("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(ce,ae)}let H=L.length;function ne(j,ce,ae){let Se,ge,Qe,Pe=j.x-ce.x,je=j.y-ce.y,nt=ae.x-j.x,ot=ae.y-j.y,D=Pe*Pe+je*je,wt=Pe*ot-je*nt;if(Math.abs(wt)>Number.EPSILON){let Ze=Math.sqrt(D),ft=Math.sqrt(nt*nt+ot*ot),fe=ce.x-je/Ze,Tt=ce.y+Pe/Ze,Fe=ae.x-ot/ft,He=ae.y+nt/ft,w=((Fe-fe)*ot-(He-Tt)*nt)/(Pe*ot-je*nt);Se=fe+Pe*w-j.x,ge=Tt+je*w-j.y;let x=Se*Se+ge*ge;if(x<=2)return new ee(Se,ge);Qe=Math.sqrt(x/2)}else{let Ze=!1;Pe>Number.EPSILON?nt>Number.EPSILON&&(Ze=!0):Pe<-Number.EPSILON?nt<-Number.EPSILON&&(Ze=!0):Math.sign(je)===Math.sign(ot)&&(Ze=!0),Ze?(Se=-je,ge=Pe,Qe=Math.sqrt(D)):(Se=Pe,ge=je,Qe=Math.sqrt(D/2))}return new ee(Se/Qe,ge/Qe)}let Q=[];for(let j=0,ce=G.length,ae=ce-1,Se=j+1;j<ce;j++,ae++,Se++)ae===ce&&(ae=0),Se===ce&&(Se=0),Q[j]=ne(G[j],G[ae],G[Se]);let K=[],te,Ee=Q.concat();for(let j=0,ce=P;j<ce;j++){let ae=N[j];te=[];for(let Se=0,ge=ae.length,Qe=ge-1,Pe=Se+1;Se<ge;Se++,Qe++,Pe++)Qe===ge&&(Qe=0),Pe===ge&&(Pe=0),te[Se]=ne(ae[Se],ae[Qe],ae[Pe]);K.push(te),Ee=Ee.concat(te)}let Be;if(p===0)Be=di.triangulateShape(G,N);else{let j=[],ce=[];for(let ae=0;ae<p;ae++){let Se=ae/p,ge=f*Math.cos(Se*Math.PI/2),Qe=g*Math.sin(Se*Math.PI/2)+M;for(let Pe=0,je=G.length;Pe<je;Pe++){let nt=W(G[Pe],Q[Pe],Qe);Ue(nt.x,nt.y,-ge),Se===0&&j.push(nt)}for(let Pe=0,je=P;Pe<je;Pe++){let nt=N[Pe];te=K[Pe];let ot=[];for(let D=0,wt=nt.length;D<wt;D++){let Ze=W(nt[D],te[D],Qe);Ue(Ze.x,Ze.y,-ge),Se===0&&ot.push(Ze)}Se===0&&ce.push(ot)}}Be=di.triangulateShape(j,ce)}let q=Be.length,_e=g+M;for(let j=0;j<H;j++){let ce=u?W(L[j],Ee[j],_e):L[j];v?(_.copy(A.normals[0]).multiplyScalar(ce.x),E.copy(A.binormals[0]).multiplyScalar(ce.y),b.copy(T[0]).add(_).add(E),Ue(b.x,b.y,b.z)):Ue(ce.x,ce.y,0)}for(let j=1;j<=h;j++)for(let ce=0;ce<H;ce++){let ae=u?W(L[ce],Ee[ce],_e):L[ce];v?(_.copy(A.normals[j]).multiplyScalar(ae.x),E.copy(A.binormals[j]).multiplyScalar(ae.y),b.copy(T[j]).add(_).add(E),Ue(b.x,b.y,b.z)):Ue(ae.x,ae.y,d/h*j)}for(let j=p-1;j>=0;j--){let ce=j/p,ae=f*Math.cos(ce*Math.PI/2),Se=g*Math.sin(ce*Math.PI/2)+M;for(let ge=0,Qe=G.length;ge<Qe;ge++){let Pe=W(G[ge],Q[ge],Se);Ue(Pe.x,Pe.y,d+ae)}for(let ge=0,Qe=N.length;ge<Qe;ge++){let Pe=N[ge];te=K[ge];for(let je=0,nt=Pe.length;je<nt;je++){let ot=W(Pe[je],te[je],Se);v?Ue(ot.x,ot.y+T[h-1].y,T[h-1].x+ae):Ue(ot.x,ot.y,d+ae)}}}we(),Ne();function we(){let j=s.length/3;if(u){let ce=0,ae=H*ce;for(let Se=0;Se<q;Se++){let ge=Be[Se];_t(ge[2]+ae,ge[1]+ae,ge[0]+ae)}ce=h+p*2,ae=H*ce;for(let Se=0;Se<q;Se++){let ge=Be[Se];_t(ge[0]+ae,ge[1]+ae,ge[2]+ae)}}else{for(let ce=0;ce<q;ce++){let ae=Be[ce];_t(ae[2],ae[1],ae[0])}for(let ce=0;ce<q;ce++){let ae=Be[ce];_t(ae[0]+H*h,ae[1]+H*h,ae[2]+H*h)}}n.addGroup(j,s.length/3-j,0)}function Ne(){let j=s.length/3,ce=0;xe(G,ce),ce+=G.length;for(let ae=0,Se=N.length;ae<Se;ae++){let ge=N[ae];xe(ge,ce),ce+=ge.length}n.addGroup(j,s.length/3-j,1)}function xe(j,ce){let ae=j.length;for(;--ae>=0;){let Se=ae,ge=ae-1;ge<0&&(ge=j.length-1);for(let Qe=0,Pe=h+p*2;Qe<Pe;Qe++){let je=H*Qe,nt=H*(Qe+1),ot=ce+Se+je,D=ce+ge+je,wt=ce+ge+nt,Ze=ce+Se+nt;ze(ot,D,wt,Ze)}}}function Ue(j,ce,ae){l.push(j),l.push(ce),l.push(ae)}function _t(j,ce,ae){Ye(j),Ye(ce),Ye(ae);let Se=s.length/3,ge=S.generateTopUV(n,s,Se-3,Se-2,Se-1);Ke(ge[0]),Ke(ge[1]),Ke(ge[2])}function ze(j,ce,ae,Se){Ye(j),Ye(ce),Ye(Se),Ye(ce),Ye(ae),Ye(Se);let ge=s.length/3,Qe=S.generateSideWallUV(n,s,ge-6,ge-3,ge-2,ge-1);Ke(Qe[0]),Ke(Qe[1]),Ke(Qe[3]),Ke(Qe[1]),Ke(Qe[2]),Ke(Qe[3])}function Ye(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function Ke(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return W0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Po[s.type]().fromJSON(s)),new i(n,e.options)}},Q0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ee(r,a),new ee(o,l),new ee(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],M=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ee(a,1-l),new ee(c,1-d),new ee(u,1-g),new ee(M,1-m)]:[new ee(o,1-l),new ee(h,1-d),new ee(f,1-g),new ee(p,1-m)]}};function W0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ds=class i extends Ao{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Vr=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],M=[],p=[];for(let m=0;m<h;m++){let S=m*u-a;for(let T=0;T<c;T++){let v=T*d-r;g.push(v,-S,0),M.push(0,0,1),p.push(T/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let T=S+c*m,v=S+c*(m+1),A=S+1+c*(m+1),E=S+1+c*m;f.push(T,v,E),f.push(v,A,E)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(M,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ns=class i extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new C,u=new C,f=[],g=[],M=[],p=[];for(let m=0;m<=n;m++){let S=[],T=m/n,v=a+T*o,A=e*Math.cos(v),E=Math.sqrt(e*e-A*A),_=0;m===0&&a===0?_=.5/t:m===n&&l===Math.PI&&(_=-.5/t);for(let b=0;b<=t;b++){let U=b/t,L=s+U*r;d.x=-E*Math.cos(L),d.y=A,d.z=E*Math.sin(L),g.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),p.push(U+_,1-T),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){let T=h[m][S+1],v=h[m][S],A=h[m+1][S],E=h[m+1][S+1];(m!==0||a>0)&&f.push(T,v,E),(m!==n-1||l<Math.PI)&&f.push(v,A,E)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(M,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Us=class i extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new C,f=new C,g=new C;for(let M=0;M<=n;M++){let p=a+M/n*o;for(let m=0;m<=s;m++){let S=m/s*r;f.x=(e+t*Math.cos(p))*Math.cos(S),f.y=(e+t*Math.cos(p))*Math.sin(S),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let p=1;p<=s;p++){let m=(s+1)*M+p-1,S=(s+1)*(M-1)+p-1,T=(s+1)*(M-1)+p,v=(s+1)*M+p;l.push(m,S,v),l.push(S,T,v)}this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Qr=class i extends vt{constructor(e=new Fr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new ee,h=new C,d=[],u=[],f=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new et(d,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(f,2));function M(){for(let T=0;T<t;T++)p(T);p(r===!1?t:0),S(),m()}function p(T){h=e.getPointAt(T/t,h);let v=a.normals[T],A=a.binormals[T];for(let E=0;E<=s;E++){let _=E/s*Math.PI*2,b=Math.sin(_),U=-Math.cos(_);l.x=U*v.x+b*A.x,l.y=U*v.y+b*A.y,l.z=U*v.z+b*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let T=1;T<=t;T++)for(let v=1;v<=s;v++){let A=(s+1)*(T-1)+(v-1),E=(s+1)*T+(v-1),_=(s+1)*T+v,b=(s+1)*(T-1)+v;g.push(A,E,b),g.push(E,_,b)}}function S(){for(let T=0;T<=t;T++)for(let v=0;v<=s;v++)c.x=T/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Po[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function qi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Hu(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Hu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Yt(i){let e={};for(let t=0;t<i.length;t++){let n=qi(i[t]);for(let s in n)e[s]=n[s]}return e}function Hu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function X0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var ni={clone:qi,merge:Yt},q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ft=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=X0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new be().setHex(s.value);break;case"v2":this.uniforms[n].value=new ee().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fs=class extends Ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ot=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wr=class extends Ot{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ni('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ni('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Xr=class extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Yo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Do=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},No=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ms(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function no(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var mi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Uo=class extends mi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vc,endingEnd:Vc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qc:r=e,o=2*t-n;break;case Wc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qc:a=e,l=2*n-t;break;case Wc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),M=g*g,p=M*g,m=-u*p+2*u*M-u*g,S=(1+u)*p+(-1.5-2*u)*M+(-.5+u)*g+1,T=(-1-f)*p+(1.5+f)*M+.5*g,v=f*p-f*M;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+S*a[c+A]+T*a[l+A]+v*a[d+A];return r}},Fo=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Oo=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bo=class extends mi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),M=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*M+a[l+p]*g;return r}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let M=a[c+g],p=a[l+g],m=f*u+g*2,S=d[m],T=d[m+1],v=e*u+g*2,A=h[v],E=h[v+1],_=J0(n,t,S,A,s);r[g]=zd(_,M,T,E,p)}return r}};function zd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Z0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function J0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=zd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Z0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var hn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ms(t,this.TimeBufferType),this.values=ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ms(e.times,Array),values:ms(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),no(e.settings)&&(n.settings={inTangents:ms(e.settings.inTangents,Array),outTangents:ms(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case mr:t=this.InterpolantFactoryMethodDiscrete;break;case _o:t=this.InterpolantFactoryMethodLinear;break;case ro:t=this.InterpolantFactoryMethodSmooth;break;case kc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return _o;case this.InterpolantFactoryMethodSmooth:return ro;case this.InterpolantFactoryMethodBezier:return kc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;no(this.settings)&&(ku(this.settings.inTangents,e),ku(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;no(this.settings)&&(Vu(this.settings.inTangents,e),Vu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&jf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ro,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let M=t[d+g];if(M!==t[u+g]||M!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,no(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ku(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Vu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=_o;var gi=class extends hn{constructor(e,t,n){super(e,t,n)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=mr;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var zo=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};zo.prototype.ValueTypeName="color";var Go=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};Go.prototype.ValueTypeName="number";var Ho=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Cn.slerpFlat(r,0,a,c-o,a,c,l);return r}},qr=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ho(this.times,this.values,this.getValueSize(),e)}};qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends hn{constructor(e,t,n){super(e,t,n)}};_i.prototype.ValueTypeName="string";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=mr;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};ko.prototype.ValueTypeName="vector";var Vo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gd=new Vo,Qo=class{constructor(e){this.manager=e!==void 0?e:Gd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Qo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Os=class extends bt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Bs=class extends Os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Hc=new ht,Qu=new C,Wu=new C,Yr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pi,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qu),Wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Hc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ys||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},io=new C,so=new Cn,An=new C,Zr=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(io,so,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,so,An.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(io,so,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,so,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ui=new C,Xu=new ee,qu=new ee,zt=class extends Zr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,Xu,qu),t.subVectors(qu,Xu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Jc=class extends Yr{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0}},Gi=class extends Os{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Hi=class extends Zr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$c=class extends Yr{constructor(){super(new Hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ki=class extends Os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new $c}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var gs=-90,_s=1,zs=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(gs,_s,e,t);s.layers=this.layers,this.add(s);let r=new zt(gs,_s,e,t);r.layers=this.layers,this.add(r);let a=new zt(gs,_s,e,t);a.layers=this.layers,this.add(a);let o=new zt(gs,_s,e,t);o.layers=this.layers,this.add(o);let l=new zt(gs,_s,e,t);l.layers=this.layers,this.add(l);let c=new zt(gs,_s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Wo=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Jr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=$0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function $0(){this._document.hidden===!1&&this.reset()}var vh="\\[\\]\\.:\\/",K0=new RegExp("["+vh+"]","g"),yh="[^"+vh+"]",j0="[^"+vh.replace("\\.","")+"]",ep=/((?:WC+[\/:])*)/.source.replace("WC",yh),tp=/(WCOD+)?/.source.replace("WCOD",j0),np=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yh),ip=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yh),sp=new RegExp("^"+ep+tp+np+ip+"$"),rp=["material","materials","bones","map"],Kc=class{constructor(e,t,n){let s=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(K0,"")}static parseTrackName(e){let t=sp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);rp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=Kc;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vx=new Float32Array(1);var jc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}},Yu=new ee,Xo=class{constructor(e=new ee(1/0,1/0),t=new ee(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yu).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var $r=class{constructor(){this.type="ShapePath",this.color=new be,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new Bi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,a){return this.currentPath.bezierCurveTo(e,t,n,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let h=!1,d=c.length;for(let u=0,f=d-1;u<d;f=u++){let g=c[u],M=c[f];g.y>l.y!=M.y>l.y&&l.x<(M.x-g.x)*(l.y-g.y)/(M.y-g.y)+g.x&&(h=!h)}return h}function t(l,c){let h=c.getCenter(new ee);if(e(h,l))return h;let d=h.y,u=[],f=l.length;for(let g=0;g<f;g++){let M=l[g],p=l[(g+1)%f];if(M.y>d!=p.y>d){let m=M.x+(d-M.y)*(p.x-M.x)/(p.y-M.y);u.push(m)}}return u.length>1&&(u.sort((g,M)=>g-M),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Oe('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let s=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=di.area(c);if(h===0)continue;let d=new Xo;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let d=l-1;d>=0;d--){let u=r[d];if(u.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}s(c.winding)===s(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new Br;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let h=new Bi;h.curves=l.subPath.curves,c.holes.push(h)}return a}};function Mh(i,e,t,n){let s=ap(n);switch(t){case hh:return i*e;case tl:return i*e/s.components*s.byteLength;case nl:return i*e/s.components*s.byteLength;case vi:return i*e*2/s.components*s.byteLength;case il:return i*e*2/s.components*s.byteLength;case uh:return i*e*3/s.components*s.byteLength;case wn:return i*e*4/s.components*s.byteLength;case sl:return i*e*4/s.components*s.byteLength;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case la:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case al:case ll:return Math.max(i,16)*Math.max(e,8)/4;case rl:case ol:return Math.max(i,8)*Math.max(e,8)/2;case cl:case hl:case dl:case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ul:case ha:case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Cl:case Pl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Il:case Dl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ua:case Nl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ap(i){switch(i){case an:case ah:return{byteLength:1,components:1};case Vs:case oh:case Rt:return{byteLength:2,components:1};case jo:case el:return{byteLength:2,components:4};case En:case Ko:case xn:return{byteLength:4,components:1};case lh:case ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function cf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function lp(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],M=d[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let M=d[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
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
#endif`,bp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ip=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zp=`#ifdef USE_GRADIENTMAP
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
}`,Jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,em=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,am=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,om=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Am=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Om=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ng=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ig=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,mg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,_g=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Eg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ag=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Pg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Dg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ug=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:cp,alphahash_pars_fragment:hp,alphamap_fragment:up,alphamap_pars_fragment:dp,alphatest_fragment:fp,alphatest_pars_fragment:pp,aomap_fragment:mp,aomap_pars_fragment:gp,batching_pars_vertex:_p,batching_vertex:xp,begin_vertex:vp,beginnormal_vertex:yp,bsdfs:Mp,iridescence_fragment:Sp,bumpmap_pars_fragment:bp,clipping_planes_fragment:Tp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Ap,color_fragment:Lp,color_pars_fragment:Rp,color_pars_vertex:Cp,color_vertex:Pp,common:Ip,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Np,displacementmap_vertex:Up,emissivemap_fragment:Fp,emissivemap_pars_fragment:Op,colorspace_fragment:Bp,colorspace_pars_fragment:zp,envmap_fragment:Gp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:kp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:em,envmap_vertex:Qp,fog_vertex:Wp,fog_pars_vertex:Xp,fog_fragment:qp,fog_pars_fragment:Yp,gradientmap_pars_fragment:Zp,lightmap_pars_fragment:Jp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Kp,lights_pars_begin:jp,lights_toon_fragment:tm,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:sm,lights_physical_fragment:rm,lights_physical_pars_fragment:am,lights_fragment_begin:om,lights_fragment_maps:lm,lights_fragment_end:cm,lightprobes_pars_fragment:hm,logdepthbuf_fragment:um,logdepthbuf_pars_fragment:dm,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:pm,map_fragment:mm,map_pars_fragment:gm,map_particle_fragment:_m,map_particle_pars_fragment:xm,metalnessmap_fragment:vm,metalnessmap_pars_fragment:ym,morphinstance_vertex:Mm,morphcolor_vertex:Sm,morphnormal_vertex:bm,morphtarget_pars_vertex:Tm,morphtarget_vertex:Em,normal_fragment_begin:wm,normal_fragment_maps:Am,normal_pars_fragment:Lm,normal_pars_vertex:Rm,normal_vertex:Cm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Dm,clearcoat_pars_fragment:Nm,iridescence_pars_fragment:Um,opaque_fragment:Fm,packing:Om,premultiplied_alpha_fragment:Bm,project_vertex:zm,dithering_fragment:Gm,dithering_pars_fragment:Hm,roughnessmap_fragment:km,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:qm,skinbase_vertex:Ym,skinning_pars_vertex:Zm,skinning_vertex:Jm,skinnormal_vertex:$m,specularmap_fragment:Km,specularmap_pars_fragment:jm,tonemapping_fragment:eg,tonemapping_pars_fragment:tg,transmission_fragment:ng,transmission_pars_fragment:ig,uv_pars_fragment:sg,uv_pars_vertex:rg,uv_vertex:ag,worldpos_vertex:og,background_vert:lg,background_frag:cg,backgroundCube_vert:hg,backgroundCube_frag:ug,cube_vert:dg,cube_frag:fg,depth_vert:pg,depth_frag:mg,distance_vert:gg,distance_frag:_g,equirect_vert:xg,equirect_frag:vg,linedashed_vert:yg,linedashed_frag:Mg,meshbasic_vert:Sg,meshbasic_frag:bg,meshlambert_vert:Tg,meshlambert_frag:Eg,meshmatcap_vert:wg,meshmatcap_frag:Ag,meshnormal_vert:Lg,meshnormal_frag:Rg,meshphong_vert:Cg,meshphong_frag:Pg,meshphysical_vert:Ig,meshphysical_frag:Dg,meshtoon_vert:Ng,meshtoon_frag:Ug,points_vert:Fg,points_frag:Og,shadow_vert:Bg,shadow_frag:zg,sprite_vert:Gg,sprite_frag:Hg},ye={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},On={basic:{uniforms:Yt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Yt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Yt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Yt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Yt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new be(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Yt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Yt([ye.points,ye.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Yt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Yt([ye.common,ye.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Yt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Yt([ye.sprite,ye.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Yt([ye.common,ye.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Yt([ye.lights,ye.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};On.physical={uniforms:Yt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Fl={r:0,b:0,g:0},kg=new ht,hf=new ke;hf.set(-1,0,0,0,1,0,0,0,1);function Vg(i,e,t,n,s,r){let a=new be(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){let v=S.backgroundBlurriness>0;T=e.get(T,v)}return T}function g(S){let T=!1,v=f(S);v===null?p(a,o):v&&v.isColor&&(p(v,1),T=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,T){let v=f(T);v&&v.isCubeTexture?(c===void 0&&(c=new rt(new _n(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:qi(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(hf),c.material.toneMapped=Je.getTransfer(v.colorSpace)!==lt,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new rt(new Vr(2,2),new Ft({name:"BackgroundMaterial",uniforms:qi(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Je.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,T){S.getRGB(Fl,xh(i)),t.buffers.color.setClear(Fl.r,Fl.g,Fl.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:g,addToRenderList:M,dispose:m}}function Qg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,F,V,P,G){let W=!1,H=d(N,P,V,F);r!==H&&(r=H,c(r.object)),W=f(N,P,V,G),W&&g(N,P,V,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(N,F,V,P),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,F,V,P){let G=P.wireframe===!0,W=n[F.id];W===void 0&&(W={},n[F.id]=W);let H=N.isInstancedMesh===!0?N.id:0,ne=W[H];ne===void 0&&(ne={},W[H]=ne);let Q=ne[V.id];Q===void 0&&(Q={},ne[V.id]=Q);let K=Q[G];return K===void 0&&(K=u(l()),Q[G]=K),K}function u(N){let F=[],V=[],P=[];for(let G=0;G<t;G++)F[G]=0,V[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:P,object:N,attributes:{},index:null}}function f(N,F,V,P){let G=r.attributes,W=F.attributes,H=0,ne=V.getAttributes();for(let Q in ne)if(ne[Q].location>=0){let te=G[Q],Ee=W[Q];if(Ee===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(Ee=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(Ee=N.instanceColor)),te===void 0||te.attribute!==Ee||Ee&&te.data!==Ee.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function g(N,F,V,P){let G={},W=F.attributes,H=0,ne=V.getAttributes();for(let Q in ne)if(ne[Q].location>=0){let te=W[Q];te===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(te=N.instanceColor));let Ee={};Ee.attribute=te,te&&te.data&&(Ee.data=te.data),G[Q]=Ee,H++}r.attributes=G,r.attributesNum=H,r.index=P}function M(){let N=r.newAttributes;for(let F=0,V=N.length;F<V;F++)N[F]=0}function p(N){m(N,0)}function m(N,F){let V=r.newAttributes,P=r.enabledAttributes,G=r.attributeDivisors;V[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),G[N]!==F&&(i.vertexAttribDivisor(N,F),G[N]=F)}function S(){let N=r.newAttributes,F=r.enabledAttributes;for(let V=0,P=F.length;V<P;V++)F[V]!==N[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function T(N,F,V,P,G,W,H){H===!0?i.vertexAttribIPointer(N,F,V,G,W):i.vertexAttribPointer(N,F,V,P,G,W)}function v(N,F,V,P){M();let G=P.attributes,W=V.getAttributes(),H=F.defaultAttributeValues;for(let ne in W){let Q=W[ne];if(Q.location>=0){let K=G[ne];if(K===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){let te=K.normalized,Ee=K.itemSize,Be=e.get(K);if(Be===void 0)continue;let q=Be.buffer,_e=Be.type,we=Be.bytesPerElement,Ne=_e===i.INT||_e===i.UNSIGNED_INT||K.gpuType===Ko;if(K.isInterleavedBufferAttribute){let xe=K.data,Ue=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,_t=K.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let ze=0;ze<Q.locationSize;ze++)m(Q.location+ze,xe.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ze=0;ze<Q.locationSize;ze++)p(Q.location+ze);i.bindBuffer(i.ARRAY_BUFFER,q);for(let ze=0;ze<Q.locationSize;ze++)T(Q.location+ze,Ee/Q.locationSize,_e,te,Ue*we,(_t+Ee/Q.locationSize*ze)*we,Ne)}else{if(K.isInstancedBufferAttribute){for(let xe=0;xe<Q.locationSize;xe++)m(Q.location+xe,K.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let xe=0;xe<Q.locationSize;xe++)p(Q.location+xe);i.bindBuffer(i.ARRAY_BUFFER,q);for(let xe=0;xe<Q.locationSize;xe++)T(Q.location+xe,Ee/Q.locationSize,_e,te,Ee*we,Ee/Q.locationSize*xe*we,Ne)}}else if(H!==void 0){let te=H[ne];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(Q.location,te);break;case 3:i.vertexAttrib3fv(Q.location,te);break;case 4:i.vertexAttrib4fv(Q.location,te);break;default:i.vertexAttrib1fv(Q.location,te)}}}}S()}function A(){U();for(let N in n){let F=n[N];for(let V in F){let P=F[V];for(let G in P){let W=P[G];for(let H in W)h(W[H].object),delete W[H];delete P[G]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let F=n[N.id];for(let V in F){let P=F[V];for(let G in P){let W=P[G];for(let H in W)h(W[H].object),delete W[H];delete P[G]}}delete n[N.id]}function _(N){for(let F in n){let V=n[F];for(let P in V){let G=V[P];if(G[N.id]===void 0)continue;let W=G[N.id];for(let H in W)h(W[H].object),delete W[H];delete G[N.id]}}}function b(N){for(let F in n){let V=n[F],P=N.isInstancedMesh===!0?N.id:0,G=V[P];if(G!==void 0){for(let W in G){let H=G[W];for(let ne in H)h(H[ne].object),delete H[ne];delete G[W]}delete V[P],Object.keys(V).length===0&&delete n[F]}}}function U(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:M,enableAttribute:p,disableUnusedAttributes:S}}function Wg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Xg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==wn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===Rt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==an&&_!==xn&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:v,maxSamples:A,samples:E}}function qg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Tn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,M=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let S=r?0:n,T=S*4,v=m.clippingState||null;l.value=v,v=h(g,u,T,f);for(let A=0;A!==T;++A)v[A]=t[A];m.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let M=d!==null?d.length:0,p=null;if(M!==0){if(p=l.value,g!==!0||p===null){let m=f+M*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,v=f;T!==M;++T,v+=4)a.copy(d[T]).applyMatrix4(S,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}var ma=class extends Et{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Rr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _n(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:$n});r.uniforms.tEquirect.value=t;let a=new rt(s,r),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=en),new zs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Hd=256,Yg=3,Zg=20,uf=256,df=16,Jg=3,$g=new C,Kg=new be,Ws=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new zs(1,10,null),this._boxMesh=new rt(new _n(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=$g}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(Kg));let p=new zs(n,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=g,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Hd,Cd(e))}_fromTexture(e,t){e.mapping===Wi||e.mapping===ks?this._setSize(e.image.length===0?Hd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=kd(e,!1,!1),n=Math.log2(e)-Yg;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=kd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Wi||e.mapping===ks?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Vd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=jg(),this._integrationMaterial=e_());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/df);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Jg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(uf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=t_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function kd(i,e,t){return new ma(i,{minFilter:jn,generateMipmaps:e,type:Rt,colorSpace:gr,depthBuffer:t})}function ga(i,e,t){return new Ft({name:i,uniforms:e,vertexShader:qe.cube_vert,fragmentShader:t,side:kt,blending:$n,depthTest:!1,depthWrite:!1})}function jg(){return ga("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${uf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function e_(){return ga("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:df}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function t_(){return ga("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Zg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Vd(){return ga("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Qd(){return ga("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function n_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Zo||f===Jo)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new ma(g.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,g=f===Zo||f===Jo,M=f===Wi||f===ks;if(g||M){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Ws(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let S=u.image;return g&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new Ws(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Zo?u.mapping=Wi:f===Jo&&(u.mapping=ks),u}function l(u){let f=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function i_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ni("WebGLRenderer: "+n+" extension not supported."),s}}}function s_(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let M=r.get(g);M&&(e.remove(M),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function h(g){let M=g.attributes;for(let p in M)e.update(M[p],i.ARRAY_BUFFER)}function d(g){let M=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let S=M!==null?M.array.length:p.array.length/3-1,T=p.count>=65535?Tr:br,v=new T(Math.ceil(S/3)*6,1),A=v.array;if(M!==null){let _=M.array;m=M.version;for(let b=0,U=0;b<S;b+=3){let L=_[b+0],N=_[b+1],F=_[b+2];A[U++]=L,A[U++]=N,A[U++]=N,A[U++]=F,A[U++]=F,A[U++]=L}}else{m=p.version;for(let _=0,b=0;_<S;_+=3){let U=_+0,L=_+1,N=_+2;A[b++]=U,A[b++]=L,A[b++]=L,A[b++]=N,A[b++]=N,A[b++]=U}}v.version=m;let E=r.get(g);E&&e.remove(E),r.set(g,v)}function u(g){let M=r.get(g);if(M){let p=g.index;p!==null&&M.version<p.version&&d(g)}else d(g);return r.get(g)}function f(){for(let g in s){let M=s[g].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function r_(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let M=0;for(let p=0;p<f;p++)M+=u[p];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function a_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function o_(i,e,t){let n=new WeakMap,s=new yt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let U=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),M===!0&&(T=3);let v=o.attributes.position.count*T,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*A*4*d),_=new yr(E,v,A,d);_.type=xn,_.needsUpdate=!0;let b=T*4;for(let L=0;L<d;L++){let N=p[L],F=m[L],V=S[L],P=v*A*4*L;for(let G=0;G<N.count;G++){let W=G*b;f===!0&&(s.fromBufferAttribute(N,G),E[P+W+0]=s.x,E[P+W+1]=s.y,E[P+W+2]=s.z,E[P+W+3]=0),g===!0&&(s.fromBufferAttribute(F,G),E[P+W+4]=s.x,E[P+W+5]=s.y,E[P+W+6]=s.z,E[P+W+7]=0),M===!0&&(s.fromBufferAttribute(V,G),E[P+W+8]=s.x,E[P+W+9]=s.y,E[P+W+10]=s.z,E[P+W+11]=V.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new ee(v,A)},n.set(o,u),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function l_(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var c_={[jr]:"LINEAR_TONE_MAPPING",[ea]:"REINHARD_TONE_MAPPING",[ta]:"CINEON_TONE_MAPPING",[Qi]:"ACES_FILMIC_TONE_MAPPING",[ia]:"AGX_TONE_MAPPING",[sa]:"NEUTRAL_TONE_MAPPING",[na]:"CUSTOM_TONE_MAPPING"};function h_(i,e,t,n,s,r){let a=new Et(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new vt;h.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new et([0,2,0,0,2,0],2));let d=new Fs({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new rt(h,d),f=new Hi(-1,1,1,-1,0,1),g=null,M=null,p=!1,m,S=null,T=[],v=!1;this.setSize=function(A,E){a.setSize(A,E),o!==null&&o.setSize(A,E),l!==null&&l.setSize(A,E);for(let _=0;_<T.length;_++){let b=T[_];b.setSize&&b.setSize(A,E)}},this.setEffects=function(A){T=A,v=T.length>0&&T[0].isRenderPass===!0;let E=a.width,_=a.height;T.length>0&&o===null&&(o=new Et(E,_,{type:Rt,depthBuffer:!1,stencilBuffer:!1}),l=new Et(E,_,{type:Rt,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&T.some(U=>U.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Jn(E,_),r===!0&&(c.format=ei,c.type=Xi)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let U=0;U<T.length;U++){let L=T[U];L.setSize&&L.setSize(E,_),b&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(A,E){if(p||A.toneMapping===Un&&T.length===0)return!1;if(S=E,E!==null){let _=E.width,b=E.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return v===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=Un,!0},this.hasRenderPass=function(){return v},this.end=function(A,E){A.toneMapping=m,p=!0;let _=a,b=o;for(let U=0;U<T.length;U++){let L=T[U];L.enabled!==!1&&(L.render(A,b,_,E),L.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(g!==A.outputColorSpace||M!==A.toneMapping){g=A.outputColorSpace,M=A.toneMapping,d.defines={},Je.getTransfer(g)===lt&&(d.defines.SRGB_TRANSFER="");let U=c_[M];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(S),A.render(u,f),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var ff=new tn,pf=new Jn(1,1),mf=new Cr(1),gf=new yr,_f=new Mo,xf=new Rr,Wd=[],Xd=[],qd=new Float32Array(16),Yd=new Float32Array(9),Zd=new Float32Array(4);function Xs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Wd[s];if(r===void 0&&(r=new Float32Array(s),Wd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zl(i,e){let t=Xd[e];t===void 0&&(t=new Int32Array(e),Xd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function u_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function m_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Zd.set(n),i.uniformMatrix2fv(this.addr,!1,Zd),Pt(t,n)}}function g_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Yd.set(n),i.uniformMatrix3fv(this.addr,!1,Yd),Pt(t,n)}}function __(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;qd.set(n),i.uniformMatrix4fv(this.addr,!1,qd),Pt(t,n)}}function x_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function v_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function S_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function b_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function T_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function Gl(i){return i.version===0&&(i.compareFunction=ph,i.needsUpdate=!0),i}function w_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Gl(pf):r=ff,t.setTexture2D(e||r,s)}function A_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||_f,s)}function L_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Gl(mf):r=xf,t.setTextureCube(e||r,s)}function R_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gf,s)}function C_(i){switch(i){case 5126:return u_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return __;case 5124:case 35670:return x_;case 35667:case 35671:return v_;case 35668:case 35672:return y_;case 35669:case 35673:return M_;case 5125:return S_;case 36294:return b_;case 36295:return T_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return R_}}function P_(i,e){i.uniform1fv(this.addr,e)}function I_(i,e){let t=Xs(e,this.size,2);i.uniform2fv(this.addr,t)}function D_(i,e){let t=Xs(e,this.size,3);i.uniform3fv(this.addr,t)}function N_(i,e){let t=Xs(e,this.size,4);i.uniform4fv(this.addr,t)}function U_(i,e){let t=Xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function F_(i,e){let t=Xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function O_(i,e){let t=Xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function B_(i,e){i.uniform1iv(this.addr,e)}function z_(i,e){i.uniform2iv(this.addr,e)}function G_(i,e){i.uniform3iv(this.addr,e)}function H_(i,e){i.uniform4iv(this.addr,e)}function k_(i,e){i.uniform1uiv(this.addr,e)}function V_(i,e){i.uniform2uiv(this.addr,e)}function Q_(i,e){i.uniform3uiv(this.addr,e)}function W_(i,e){i.uniform4uiv(this.addr,e)}function X_(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Gl(pf):a=ff;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function q_(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||_f,r[a])}function Y_(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Gl(mf):a=xf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Z_(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gf,r[a])}function J_(i){switch(i){case 5126:return P_;case 35664:return I_;case 35665:return D_;case 35666:return N_;case 35674:return U_;case 35675:return F_;case 35676:return O_;case 5124:case 35670:return B_;case 35667:case 35671:return z_;case 35668:case 35672:return G_;case 35669:case 35673:return H_;case 5125:return k_;case 36294:return V_;case 36295:return Q_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return Z_}}var Th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=C_(t.type)}},Eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J_(t.type)}},wh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Sh=/(\w+)(\])?(\[|\.)?/g;function Jd(i,e){i.seq.push(e),i.map[e.id]=e}function $_(i,e,t){let n=i.name,s=n.length;for(Sh.lastIndex=0;;){let r=Sh.exec(n),a=Sh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Jd(t,c===void 0?new Th(o,i,e):new Eh(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new wh(o),Jd(t,d)),t=d}}}var Qs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);$_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function $d(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var K_=37297,j_=0;function e1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Kd=new ke;function t1(i){Je._getMatrix(Kd,Je.workingColorSpace,i);let e=`mat3( ${Kd.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case _r:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function jd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+e1(i.getShaderSource(e),o)}else return r}function n1(i,e){let t=t1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var i1={[jr]:"Linear",[ea]:"Reinhard",[ta]:"Cineon",[Qi]:"ACESFilmic",[ia]:"AgX",[sa]:"Neutral",[na]:"Custom"};function s1(i,e){let t=i1[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ol=new C;function r1(){Je.getLuminanceCoefficients(Ol);let i=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function o1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function l1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function pa(i){return i!==""}function ef(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function tf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var c1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(i){return i.replace(c1,h1)}function h1(i,e){let t=qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ah(t)}var u1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(i){return i.replace(u1,d1)}function d1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var f1={[Kr]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function p1(i){return f1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var m1={[ks]:"ENVMAP_MODE_REFRACTION"};function g1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":m1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _1={[Yo]:"ENVMAP_BLENDING_MULTIPLY",[md]:"ENVMAP_BLENDING_MIX",[gd]:"ENVMAP_BLENDING_ADD"};function x1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_1[i.combine]||"ENVMAP_BLENDING_NONE"}function v1(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=p1(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=g1(t),d=x1(t),u=a1(t),f=o1(r),g=s.createProgram(),M,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(pa).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(pa).join(`
`),p.length>0&&(p+=`
`)):(M=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),p=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?qe.tonemapping_pars_fragment:"",t.toneMapping!==Un?s1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,n1("linearToOutputTexel",t.outputColorSpace),r1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),a=Ah(a),a=ef(a,t),a=tf(a,t),o=Ah(o),o=ef(o,t),o=tf(o,t),a=nf(a),o=nf(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",t.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=m+M+a,T=m+p+o,v=$d(s,s.VERTEX_SHADER,S),A=$d(s,s.FRAGMENT_SHADER,T);s.attachShader(g,v),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(L){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(v)||"",V=s.getShaderInfoLog(A)||"",P=N.trim(),G=F.trim(),W=V.trim(),H=!0,ne=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,v,A);else{let Q=jd(s,v,"vertex"),K=jd(s,A,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+P+`
`+Q+`
`+K)}else P!==""?Oe("WebGLProgram: Program Info Log:",P):(G===""||W==="")&&(ne=!1);ne&&(L.diagnostics={runnable:H,programLog:P,vertexShader:{log:G,prefix:M},fragmentShader:{log:W,prefix:p}})}s.deleteShader(v),s.deleteShader(A),_=new Qs(s,g),b=l1(s,g)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(g,K_)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=A,this}var y1=0,Lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rh(e),t.set(e,n)),n}},Rh=class{constructor(e){this.id=y1++,this.code=e,this.usedTimes=0}};function M1(i){return i===vi||i===ha||i===ua}function S1(i,e,t,n,s,r){let a=new Mr,o=new Lh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,U,L,N,F){let V=L.fog,P=N.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||G,W),ne=u[_.type],Q=n.precision;_.precision!==null&&(Q=n.getMaxPrecision(_.precision),Q!==_.precision&&Oe("WebGLProgram.getParameters:",_.precision,"not supported, using",Q,"instead."));let K=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,te=K!==void 0?K.length:0,Ee=0;P.morphAttributes.position!==void 0&&(Ee=1),P.morphAttributes.normal!==void 0&&(Ee=2),P.morphAttributes.color!==void 0&&(Ee=3);let Be,q,_e,we;if(ne){let ve=On[ne];Be=ve.vertexShader,q=ve.fragmentShader}else{Be=_.vertexShader,q=_.fragmentShader;let ve=o.getVertexShaderStage(_),dt=o.getFragmentShaderStage(_);o.update(_,ve,dt),_e=ve.id,we=dt.id}let Ne=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,_t=N.isBatchedMesh===!0,ze=!!_.map,Ye=!!_.matcap,Ke=!!H,j=Ke&&H.isPMREMTexture===!0,ce=!!_.aoMap,ae=!!_.lightMap,Se=!!_.bumpMap&&_.wireframe===!1,ge=!!_.normalMap,Qe=!!_.displacementMap,Pe=!!_.emissiveMap,je=!!_.metalnessMap,nt=!!_.roughnessMap,ot=_.anisotropy>0,D=_.clearcoat>0,wt=_.diffuseRoughness>0,Ze=_.dispersion>0,ft=_.retroreflectivity>0,fe=_.iridescence>0,Tt=_.sheen>0,Fe=_.transmission>0,He=ot&&!!_.anisotropyMap,w=D&&!!_.clearcoatMap,x=D&&!!_.clearcoatNormalMap,B=D&&!!_.clearcoatRoughnessMap,ie=wt&&!!_.diffuseRoughnessMap,$=fe&&!!_.iridescenceMap,oe=fe&&!!_.iridescenceThicknessMap,pe=Tt&&!!_.sheenColorMap,Y=Tt&&!!_.sheenRoughnessMap,Z=!!_.specularMap,he=!!_.specularColorMap,R=!!_.specularIntensityMap,J=Fe&&!!_.transmissionMap,X=Fe&&!!_.thicknessMap,ue=!!_.gradientMap,re=!!_.alphaMap,le=_.alphaTest>0,Ie=!!_.alphaHash,Xe=!!_.extensions,se=Un;_.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(se=i.toneMapping);let De=j?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,We={shaderID:ne,shaderType:_.type,shaderName:_.name,vertexShader:Be,fragmentShader:q,defines:_.defines,customVertexShaderID:_e,customFragmentShaderID:we,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Q,batching:_t,batchingColor:_t&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,outputColorSpace:Ne===null?i.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ze,matcap:Ye,envMap:Ke,envMapMode:Ke&&H.mapping,envMapPMREM:j,envMapMaxLod:j?De.length-1:null,envMapSize:j?De[0].width:null,aoMap:ce,lightMap:ae,bumpMap:Se,normalMap:ge,displacementMap:Qe,emissiveMap:Pe,normalMapObjectSpace:ge&&_.normalMapType===vd,normalMapTangentSpace:ge&&_.normalMapType===da,packedNormalMap:ge&&_.normalMapType===da&&M1(_.normalMap.format),metalnessMap:je,roughnessMap:nt,anisotropy:ot,anisotropyMap:He,clearcoat:D,clearcoatMap:w,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:wt,diffuseRoughnessMap:ie,dispersion:Ze,retroreflection:ft,iridescence:fe,iridescenceMap:$,iridescenceThicknessMap:oe,sheen:Tt,sheenColorMap:pe,sheenRoughnessMap:Y,specularMap:Z,specularColorMap:he,specularIntensityMap:R,transmission:Fe,transmissionMap:J,thicknessMap:X,gradientMap:ue,opaque:_.transparent===!1&&_.blending===Hs&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:le,alphaHash:Ie,combine:_.combine,mapUv:ze&&f(_.map.channel),aoMapUv:ce&&f(_.aoMap.channel),lightMapUv:ae&&f(_.lightMap.channel),bumpMapUv:Se&&f(_.bumpMap.channel),normalMapUv:ge&&f(_.normalMap.channel),displacementMapUv:Qe&&f(_.displacementMap.channel),emissiveMapUv:Pe&&f(_.emissiveMap.channel),metalnessMapUv:je&&f(_.metalnessMap.channel),roughnessMapUv:nt&&f(_.roughnessMap.channel),anisotropyMapUv:He&&f(_.anisotropyMap.channel),clearcoatMapUv:w&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:$&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(_.sheenRoughnessMap.channel),specularMapUv:Z&&f(_.specularMap.channel),specularColorMapUv:he&&f(_.specularColorMap.channel),specularIntensityMapUv:R&&f(_.specularIntensityMap.channel),transmissionMapUv:J&&f(_.transmissionMap.channel),thicknessMapUv:X&&f(_.thicknessMap.channel),alphaMapUv:re&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ge||ot),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(ze||re),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&ge===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Ee,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:F.filter(ve=>ve.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:ze&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===lt,decodeVideoTextureEmissive:Pe&&_.emissiveMap.isVideoTexture===!0&&Je.getTransfer(_.emissiveMap.colorSpace)===lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Nn,flipSided:_.side===kt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Xe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&_.extensions.multiDraw===!0||_t)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function M(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)b.push(U),b.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(p(b,_),m(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){let b=u[_.type],U;if(b){let L=On[b];U=ni.clone(L.uniforms)}else U=_.uniforms;return U}function T(_,b){let U=h.get(b);return U!==void 0?++U.usedTimes:(U=new v1(i,b,_,s),c.push(U),h.set(b,U)),U}function v(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:S,acquireProgram:T,releaseProgram:v,releaseShaderCache:A,programs:c,dispose:E}}function b1(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function T1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function rf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function af(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,M,p,m){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:p,group:m},i[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=a(u),S.groupOrder=M,S.renderOrder=u.renderOrder,S.z=p,S.group=m),e++,S}function l(u,f,g,M,p,m,S){S.reversedDepth===!0&&(p=-p);let T=o(u,f,g,M,p,m);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):t.push(T)}function c(u,f,g,M,p,m){let S=o(u,f,g,M,p,m);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,f){t.length>1&&t.sort(u||T1),n.length>1&&n.sort(f||rf),s.length>1&&s.sort(f||rf)}function d(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function E1(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new af,i.set(n,[a])):s>=r.length?(a=new af,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function w1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new be};break;case"SpotLight":t={position:new C,direction:new C,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function A1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var L1=0;function R1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function C1(i){let e=new w1,t=A1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new ht,a=new ht;function o(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,M=0,p=0,m=0,S=0,T=0,v=0,A=0,E=0,_=0,b=0,U=0,L=0;c.sort(R1);for(let F=0,V=c.length;F<V;F++){let P=c[F],G=P.color,W=P.intensity,H=P.distance,ne=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===vi?ne=P.shadow.map.texture:ne=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=G.r*W,d+=G.g*W,u+=G.b*W;else if(P.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(P.sh.coefficients[Q],W);L++}else if(P.isSunLight){let Q=e.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,te=t.get(P);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=te,n.sunShadowMap[g]=ne;let Ee=K.getViewportCount();for(let Be=0;Be<Ee;Be++)n.sunShadowMatrix[M+Be]=K.getMatrix(Be),n.sunShadowCascade[M+Be]=K._cascadeData[Be];M+=Ee,g++}n.sun[f]=Q,f++}else if(P.isDirectionalLight){let Q=e.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,te=t.get(P);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,n.directionalShadow[p]=te,n.directionalShadowMap[p]=ne,n.directionalShadowMatrix[p]=P.shadow.matrix,A++}n.directional[p]=Q,p++}else if(P.isSpotLight){let Q=e.get(P);Q.position.setFromMatrixPosition(P.matrixWorld),Q.color.copy(G).multiplyScalar(W),Q.distance=H,Q.coneCos=Math.cos(P.angle),Q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Q.decay=P.decay,n.spot[S]=Q;let K=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,K.updateMatrices(P),P.castShadow&&U++),n.spotLightMatrix[S]=K.matrix,P.castShadow){let te=t.get(P);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,n.spotShadow[S]=te,n.spotShadowMap[S]=ne,_++}S++}else if(P.isRectAreaLight){let Q=e.get(P);Q.color.copy(G).multiplyScalar(W),Q.halfWidth.set(P.width*.5,0,0),Q.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=Q,T++}else if(P.isPointLight){let Q=e.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity),Q.distance=P.distance,Q.decay=P.decay,P.castShadow){let K=P.shadow,te=t.get(P);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,te.shadowCameraNear=K.camera.near,te.shadowCameraFar=K.camera.far,n.pointShadow[m]=te,n.pointShadowMap[m]=ne,n.pointShadowMatrix[m]=P.shadow.matrix,E++}n.point[m]=Q,m++}else if(P.isHemisphereLight){let Q=e.get(P);Q.skyColor.copy(P.color).multiplyScalar(W),Q.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[v]=Q,v++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==S||N.rectAreaLength!==T||N.hemiLength!==v||N.numSunShadows!==g||N.numDirectionalShadows!==A||N.numPointShadows!==E||N.numSpotShadows!==_||N.numSpotMaps!==b||N.numLightProbes!==L)&&(n.sun.length=f,n.directional.length=p,n.spot.length=S,n.rectArea.length=T,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-U,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=L,N.sunLength=f,N.directionalLength=p,N.pointLength=m,N.spotLength=S,N.rectAreaLength=T,N.hemiLength=v,N.numSunShadows=g,N.numDirectionalShadows=A,N.numPointShadows=E,N.numSpotShadows=_,N.numSpotMaps=b,N.numLightProbes=L,n.version=L1++)}function l(c,h){let d=0,u=0,f=0,g=0,M=0,p=0,m=h.matrixWorldInverse;for(let S=0,T=c.length;S<T;S++){let v=c[S];if(v.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),u++}else if(v.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let A=n.rectArea[M];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(v.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let A=n.hemi[p];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function of(i){let e=new C1(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function P1(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new of(i),e.set(s,[o])):r>=a.length?(o=new of(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var I1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,N1=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],U1=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],lf=new ht,fa=new C,bh=new C;function F1(i,e,t){let n=new pi,s=new ee,r=new ee,a=new yt,o=new Do,l=new No,c={},h=t.maxTextureSize,d={[xi]:kt,[kt]:xi,[Nn]:Nn},u=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:I1,fragmentShader:D1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new vt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new rt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kr;let m=this.type;this.render=function(E,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===qo&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kr);let U=i.getRenderTarget(),L=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending($n),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=m!==this.type;V&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(G=>G.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,G=E.length;P<G;P++){let W=E[P],H=W.shadow;if(H===void 0){Oe("WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ne=H.getFrameExtents();s.multiply(ne),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,H.mapSize.y=r.y));let Q=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Q,H.map===null||V===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Gs){if(W.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Et(s.x,s.y,{format:vi,type:Rt,minFilter:en,magFilter:en,generateMipmaps:!1}),H.map.texture.name=W.name+".shadowMap",H.map.depthTexture=new Jn(s.x,s.y,xn),H.map.depthTexture.name=W.name+".shadowMapDepth",H.map.depthTexture.format=Zn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ut,H.map.depthTexture.magFilter=Ut}else W.isPointLight?(H.map=new ma(s.x),H.map.depthTexture=new Cr(s.x,En)):(H.map=new Et(s.x,s.y),H.map.depthTexture=new Jn(s.x,s.y,En)),H.map.depthTexture.name=W.name+".shadowMap",H.map.depthTexture.format=Zn,this.type===Kr?(H.map.depthTexture.compareFunction=Q?fh:dh,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ut,H.map.depthTexture.magFilter=Ut);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let K=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();W.isPointLight!==!0&&H.updateMatrices(W,b);let te=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:b.layers;for(let Ee=0;Ee<K;Ee++){let Be=H.getCamera(Ee);if(W.isPointLight){let q=H.camera,_e=H.matrix,we=W.distance||q.far;we!==q.far&&(q.far=we,q.updateProjectionMatrix()),fa.setFromMatrixPosition(W.matrixWorld),q.position.copy(fa),bh.copy(q.position),bh.add(N1[Ee]),q.up.copy(U1[Ee]),q.lookAt(bh),q.updateMatrixWorld(),_e.makeTranslation(-fa.x,-fa.y,-fa.z),lf.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(lf,q.coordinateSystem,q.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,Ee),i.clear();else{Ee===0&&(i.setRenderTarget(H.map),i.clear());let q=H.getViewport(Ee);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),F.viewport(a)}n=H.getFrustum(Ee),v(_,b,Be,W,te,this.type)}H.isPointLightShadow!==!0&&this.type===Gs&&S(H,b),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(U,L,N)};function S(E,_){let b=e.update(M);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Et(s.x,s.y,{format:vi,type:Rt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,b,u,M,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,b,f,M,null)}function T(E,_,b,U){let L=null,N=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)L=N;else if(L=b.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=L.uuid,V=_.uuid,P=c[F];P===void 0&&(P={},c[F]=P);let G=P[V];G===void 0&&(G=L.clone(),P[V]=G,_.addEventListener("dispose",A)),L=G}if(L.visible=_.visible,L.wireframe=_.wireframe,U===Gs?L.side=_.shadowSide!==null?_.shadowSide:_.side:L.side=_.shadowSide!==null?_.shadowSide:d[_.side],L.alphaMap=_.alphaMap,L.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,L.map=_.map,L.clipShadows=_.clipShadows,L.clippingPlanes=_.clippingPlanes,L.clipIntersection=_.clipIntersection,L.displacementMap=_.displacementMap,L.displacementScale=_.displacementScale,L.displacementBias=_.displacementBias,L.wireframeLinewidth=_.wireframeLinewidth,L.linewidth=_.linewidth,b.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let F=i.properties.get(L);F.light=b}return L}function v(E,_,b,U,L,N){if(E.visible===!1)return;if(E.layers.test(L)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Gs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let P=e.update(E),G=E.material;if(Array.isArray(G)){let W=P.groups;for(let H=0,ne=W.length;H<ne;H++){let Q=W[H],K=G[Q.materialIndex];if(K&&K.visible){let te=T(E,K,U,N);E.onBeforeShadow(i,E,_,b,P,te,Q),i.renderBufferDirect(b,null,P,te,E,Q),E.onAfterShadow(i,E,_,b,P,te,Q)}}}else if(G.visible){let W=T(E,G,U,N);E.onBeforeShadow(i,E,_,b,P,W,null),i.renderBufferDirect(b,null,P,W,E,null),E.onAfterShadow(i,E,_,b,P,W,null)}}let V=E.children;for(let P=0,G=V.length;P<G;P++)v(V[P],_,b,U,L,N)}function A(E){E.target.removeEventListener("dispose",A);for(let b in c){let U=c[b],L=E.target.uuid;L in U&&(U[L].dispose(),delete U[L])}}}function O1(i,e){function t(){let R=!1,J=new yt,X=null,ue=new yt(0,0,0,0);return{setMask:function(re){X!==re&&!R&&(i.colorMask(re,re,re,re),X=re)},setLocked:function(re){R=re},setClear:function(re,le,Ie,Xe,se){se===!0&&(re*=Xe,le*=Xe,Ie*=Xe),J.set(re,le,Ie,Xe),ue.equals(J)===!1&&(i.clearColor(re,le,Ie,Xe),ue.copy(J))},reset:function(){R=!1,X=null,ue.set(-1,0,0,0)}}}function n(){let R=!1,J=!1,X=null,ue=null,re=null;return{setReversed:function(le){if(J!==le){let Ie=e.get("EXT_clip_control");le?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),J=le;let Xe=re;re=null,this.setClear(Xe)}},getReversed:function(){return J},setTest:function(le){le?xe(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(le){X!==le&&!R&&(i.depthMask(le),X=le)},setFunc:function(le){if(J&&(le=Rd[le]),ue!==le){switch(le){case oo:i.depthFunc(i.NEVER);break;case lo:i.depthFunc(i.ALWAYS);break;case co:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case ho:i.depthFunc(i.EQUAL);break;case uo:i.depthFunc(i.GEQUAL);break;case fo:i.depthFunc(i.GREATER);break;case po:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=le}},setLocked:function(le){R=le},setClear:function(le){re!==le&&(re=le,J&&(le=1-le),i.clearDepth(le))},reset:function(){R=!1,X=null,ue=null,re=null,J=!1}}}function s(){let R=!1,J=null,X=null,ue=null,re=null,le=null,Ie=null,Xe=null,se=null;return{setTest:function(De){R||(De?xe(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(De){J!==De&&!R&&(i.stencilMask(De),J=De)},setFunc:function(De,We,ve){(X!==De||ue!==We||re!==ve)&&(i.stencilFunc(De,We,ve),X=De,ue=We,re=ve)},setOp:function(De,We,ve){(le!==De||Ie!==We||Xe!==ve)&&(i.stencilOp(De,We,ve),le=De,Ie=We,Xe=ve)},setLocked:function(De){R=De},setClear:function(De){se!==De&&(i.clearStencil(De),se=De)},reset:function(){R=!1,J=null,X=null,ue=null,re=null,le=null,Ie=null,Xe=null,se=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],M=null,p=!1,m=null,S=null,T=null,v=null,A=null,E=null,_=null,b=new be(0,0,0),U=0,L=!1,N=null,F=null,V=null,P=null,G=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ne=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=ne>=1):Q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=ne>=2);let K=null,te={},Ee=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),q=new yt().fromArray(Ee),_e=new yt().fromArray(Be);function we(R,J,X,ue){let re=new Uint8Array(4),le=i.createTexture();i.bindTexture(R,le),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<X;Ie++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(J+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return le}let Ne={};Ne[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),Ne[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ne[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ne[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xe(i.DEPTH_TEST),a.setFunc(vs),Se(!1),ge(eh),xe(i.CULL_FACE),ce($n);function xe(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Ue(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function _t(R,J){return u[R]!==J?(i.bindFramebuffer(R,J),u[R]=J,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=J),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=J),!0):!1}function ze(R,J){let X=g,ue=!1;if(R){X=f.get(J),X===void 0&&(X=[],f.set(J,X));let re=R.textures;if(X.length!==re.length||X[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Ie=re.length;le<Ie;le++)X[le]=i.COLOR_ATTACHMENT0+le;X.length=re.length,ue=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,ue=!0);ue&&i.drawBuffers(X)}function Ye(R){return M!==R?(i.useProgram(R),M=R,!0):!1}let Ke={[Vi]:i.FUNC_ADD,[Ku]:i.FUNC_SUBTRACT,[ju]:i.FUNC_REVERSE_SUBTRACT};Ke[ed]=i.MIN,Ke[td]=i.MAX;let j={[nd]:i.ZERO,[id]:i.ONE,[sd]:i.SRC_COLOR,[ih]:i.SRC_ALPHA,[hd]:i.SRC_ALPHA_SATURATE,[ld]:i.DST_COLOR,[ad]:i.DST_ALPHA,[rd]:i.ONE_MINUS_SRC_COLOR,[sh]:i.ONE_MINUS_SRC_ALPHA,[cd]:i.ONE_MINUS_DST_COLOR,[od]:i.ONE_MINUS_DST_ALPHA,[ud]:i.CONSTANT_COLOR,[dd]:i.ONE_MINUS_CONSTANT_COLOR,[fd]:i.CONSTANT_ALPHA,[pd]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(R,J,X,ue,re,le,Ie,Xe,se,De){if(R===$n){p===!0&&(Ue(i.BLEND),p=!1);return}if(p===!1&&(xe(i.BLEND),p=!0),R!==$u){if(R!==m||De!==L){if((S!==Vi||A!==Vi)&&(i.blendEquation(i.FUNC_ADD),S=Vi,A=Vi),De)switch(R){case Hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kn:i.blendFunc(i.ONE,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",R);break}else switch(R){case Hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case th:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nh:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",R);break}T=null,v=null,E=null,_=null,b.set(0,0,0),U=0,m=R,L=De}return}re=re||J,le=le||X,Ie=Ie||ue,(J!==S||re!==A)&&(i.blendEquationSeparate(Ke[J],Ke[re]),S=J,A=re),(X!==T||ue!==v||le!==E||Ie!==_)&&(i.blendFuncSeparate(j[X],j[ue],j[le],j[Ie]),T=X,v=ue,E=le,_=Ie),(Xe.equals(b)===!1||se!==U)&&(i.blendColor(Xe.r,Xe.g,Xe.b,se),b.copy(Xe),U=se),m=R,L=!1}function ae(R,J){R.side===Nn?Ue(i.CULL_FACE):xe(i.CULL_FACE);let X=R.side===kt;J&&(X=!X),Se(X),R.blending===Hs&&R.transparent===!1?ce($n):ce(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let ue=R.stencilWrite;o.setTest(ue),ue&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Pe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(R){N!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),N=R)}function ge(R){R!==Zu?(xe(i.CULL_FACE),R!==F&&(R===eh?i.cullFace(i.BACK):R===Ju?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),F=R}function Qe(R){R!==V&&(H&&i.lineWidth(R),V=R)}function Pe(R,J,X){R?(xe(i.POLYGON_OFFSET_FILL),(P!==J||G!==X)&&(P=J,G=X,a.getReversed()&&(J=-J,X=-X),i.polygonOffset(J,X))):Ue(i.POLYGON_OFFSET_FILL)}function je(R){R?xe(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function nt(R){R===void 0&&(R=i.TEXTURE0+W-1),K!==R&&(i.activeTexture(R),K=R)}function ot(R,J,X){X===void 0&&(K===null?X=i.TEXTURE0+W-1:X=K);let ue=te[X];ue===void 0&&(ue={type:void 0,texture:void 0},te[X]=ue),(ue.type!==R||ue.texture!==J)&&(K!==X&&(i.activeTexture(X),K=X),i.bindTexture(R,J||Ne[R]),ue.type=R,ue.texture=J)}function D(){let R=te[K];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function wt(){try{i.compressedTexImage2D(...arguments)}catch(R){Ge("WebGLState:",R)}}function Ze(){try{i.compressedTexImage3D(...arguments)}catch(R){Ge("WebGLState:",R)}}function ft(){try{i.texSubImage2D(...arguments)}catch(R){Ge("WebGLState:",R)}}function fe(){try{i.texSubImage3D(...arguments)}catch(R){Ge("WebGLState:",R)}}function Tt(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Ge("WebGLState:",R)}}function Fe(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Ge("WebGLState:",R)}}function He(){try{i.texStorage2D(...arguments)}catch(R){Ge("WebGLState:",R)}}function w(){try{i.texStorage3D(...arguments)}catch(R){Ge("WebGLState:",R)}}function x(){try{i.texImage2D(...arguments)}catch(R){Ge("WebGLState:",R)}}function B(){try{i.texImage3D(...arguments)}catch(R){Ge("WebGLState:",R)}}function ie(R){return d[R]!==void 0?d[R]:i.getParameter(R)}function $(R,J){d[R]!==J&&(i.pixelStorei(R,J),d[R]=J)}function oe(R){q.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),q.copy(R))}function pe(R){_e.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),_e.copy(R))}function Y(R,J){let X=c.get(J);X===void 0&&(X=new WeakMap,c.set(J,X));let ue=X.get(R);ue===void 0&&(ue=i.getUniformBlockIndex(J,R.name),i.uniformBlockBinding(J,ue,ue),X.set(R,ue))}function Z(R,J,X){let re=c.get(J).get(R);l[re]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,re,X),l[re]=X)}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,te={},u={},l={},f=new WeakMap,g=[],M=null,p=!1,m=null,S=null,T=null,v=null,A=null,E=null,_=null,b=new be(0,0,0),U=0,L=!1,N=null,F=null,V=null,P=null,G=null,q.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xe,disable:Ue,bindFramebuffer:_t,drawBuffers:ze,useProgram:Ye,setBlending:ce,setMaterial:ae,setFlipSided:Se,setCullFace:ge,setLineWidth:Qe,setPolygonOffset:Pe,setScissorTest:je,activeTexture:nt,bindTexture:ot,unbindTexture:D,compressedTexImage2D:wt,compressedTexImage3D:Ze,texImage2D:x,texImage3D:B,pixelStorei:$,getParameter:ie,updateUBOMapping:Y,uniformBlockBinding:Z,texStorage2D:He,texStorage3D:w,texSubImage2D:ft,texSubImage3D:fe,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Fe,scissor:oe,viewport:pe,reset:he}}function B1(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap,d=new Set,u,f=new WeakMap,g=new Set,M=new FinalizationRegistry(w=>g.delete(w)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,x){return p?new OffscreenCanvas(w,x):xr("canvas")}function S(w,x,B){let ie=1,$=He(w);if(($.width>B||$.height>B)&&(ie=B/Math.max($.width,$.height)),ie<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let oe=Math.floor(ie*$.width),pe=Math.floor(ie*$.height);u===void 0&&(u=m(oe,pe));let Y=x?m(oe,pe):u;return Y.width=oe,Y.height=pe,Y.getContext("2d").drawImage(w,0,0,oe,pe),Oe("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+oe+"x"+pe+")."),Y}else return"data"in w&&Oe("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function T(w){return w.generateMipmaps}function v(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,x,B,ie,$,oe=!1){if(w!==null){if(i[w]!==void 0)return i[w];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let pe;ie&&(pe=e.get("EXT_texture_norm16"),pe||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8),B===i.UNSIGNED_SHORT&&pe&&(Y=pe.R16_EXT),B===i.SHORT&&pe&&(Y=pe.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),x===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8),B===i.UNSIGNED_SHORT&&pe&&(Y=pe.RG16_EXT),B===i.SHORT&&pe&&(Y=pe.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&pe&&(Y=pe.RGB16_EXT),B===i.SHORT&&pe&&(Y=pe.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){let Z=oe?_r:Je.getTransfer($);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=Z===lt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&pe&&(Y=pe.RGBA16_EXT),B===i.SHORT&&pe&&(Y=pe.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(w,x){let B;return w?x===null||x===En||x===Xi?B=i.DEPTH24_STENCIL8:x===xn?B=i.DEPTH32F_STENCIL8:x===Vs&&(B=i.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===En||x===Xi?B=i.DEPTH_COMPONENT24:x===xn?B=i.DEPTH_COMPONENT32F:x===Vs&&(B=i.DEPTH_COMPONENT16),B}function b(w,x){return T(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ut&&w.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function U(w){let x=new WeakRef(w);n.get(w).__ref=x,g.add(x),M.register(w,x,x)}function L(w){let x=n.get(w).__ref;x!==void 0&&(g.delete(x),M.unregister(x))}function N(w){V(w.target)}function F(w){P(w.target)}function V(w){w.removeEventListener("dispose",N),L(w),W(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&d.delete(w)}function P(w){w.removeEventListener("dispose",F),L(w),ne(w)}function G(){for(let w of g){let x=w.deref();x!==void 0&&(x.isRenderTarget===!0?P(x):V(x))}g.clear(),d.clear()}function W(w){let x=n.get(w);if(x.__webglInit===void 0)return;let B=w.source,ie=f.get(B);if(ie){let $=ie[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&H(w),Object.keys(ie).length===0&&f.delete(B)}n.remove(w)}function H(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let B=w.source,ie=f.get(B);delete ie[x.__cacheKey],a.memory.textures--}function ne(w){let x=n.get(w);x.__depthDisposeCallback&&x.__depthDisposeCallback();let B=w.depthTexture;if(B&&B.renderTarget===w&&V(B),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let oe=0;oe<x.__webglFramebuffer[$].length;oe++)i.deleteFramebuffer(x.__webglFramebuffer[$][oe]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let ie=w.textures;for(let $=0,oe=ie.length;$<oe;$++){let pe=n.get(ie[$]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(ie[$])}n.remove(w)}let Q=0;function K(){Q=0}function te(){return Q}function Ee(w){Q=w}function Be(){let w=Q;return w>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),Q+=1,w}function q(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.mipmapsAutoUpdate),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function _e(w,x){let B=n.get(w);if(w.isVideoTexture&&Tt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){let ie=w.image;if(ie===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(B,w,x);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function we(w,x){let B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){ae(B,w,x);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Ne(w,x){let B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){ae(B,w,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function xe(w,x){let B=n.get(w);if(w.version>0&&B.__version!==w.version){Se(B,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let Ue={[mo]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[go]:i.MIRRORED_REPEAT},_t={[Ut]:i.NEAREST,[_d]:i.NEAREST_MIPMAP_NEAREST,[ra]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[$o]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},ze={[Md]:i.NEVER,[ph]:i.ALWAYS,[Sd]:i.LESS,[dh]:i.LEQUAL,[bd]:i.EQUAL,[fh]:i.GEQUAL,[Td]:i.GREATER,[Ed]:i.NOTEQUAL};function Ye(w,x){if(x.type===xn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===en||x.magFilter===$o||x.magFilter===ra||x.magFilter===jn||x.minFilter===en||x.minFilter===$o||x.minFilter===ra||x.minFilter===jn)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Ue[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Ue[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Ue[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,_t[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,_t[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ze[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ut||x.minFilter!==ra&&x.minFilter!==jn||x.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ke(w,x){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",N),U(x));let ie=x.source,$=f.get(ie);$===void 0&&($={},f.set(ie,$));let oe=q(x);if(oe!==w.__cacheKey){$[oe]===void 0&&($[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[oe].usedTimes++;let pe=$[w.__cacheKey];pe!==void 0&&($[w.__cacheKey].usedTimes--,pe.usedTimes===0&&H(x)),w.__cacheKey=oe,w.__webglTexture=$[oe].texture}return B}function j(w,x,B){return Math.floor(Math.floor(w/B)/x)}function ce(w,x,B,ie){let oe=w.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,ie,x.data);else{oe.sort((R,J)=>R.start-J.start);let pe=0;for(let R=1;R<oe.length;R++){let J=oe[pe],X=oe[R],ue=J.start+J.count,re=j(X.start,x.width,4),le=j(J.start,x.width,4);X.start<=ue+1&&re===le&&j(X.start+X.count-1,x.width,4)===re?J.count=Math.max(J.count,X.start+X.count-J.start):(++pe,oe[pe]=X)}oe.length=pe+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let R=0,J=oe.length;R<J;R++){let X=oe[R],ue=Math.floor(X.start/4),re=Math.ceil(X.count/4),le=ue%x.width,Ie=Math.floor(ue/x.width),Xe=re,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ie),t.texSubImage2D(i.TEXTURE_2D,0,le,Ie,Xe,se,B,ie,x.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function ae(w,x,B){let ie=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ie=i.TEXTURE_3D);let $=Ke(w,x),oe=x.source;t.bindTexture(ie,w.__webglTexture,i.TEXTURE0+B);let pe=n.get(oe);if(oe.version!==pe.__version||$===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let se=Je.getPrimaries(Je.workingColorSpace),De=x.colorSpace===ti?null:Je.getPrimaries(x.colorSpace),We=x.colorSpace===ti||se===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Z=S(x.image,!1,s.maxTextureSize);Z=Fe(x,Z);let he=r.convert(x.format,x.colorSpace),R=r.convert(x.type),J=E(x.internalFormat,he,R,x.normalized,x.colorSpace,x.isVideoTexture);Ye(ie,x);let X,ue=x.mipmaps,re=x.isVideoTexture!==!0,le=pe.__version===void 0||$===!0,Ie=oe.dataReady,Xe=b(x,Z);if(x.isDepthTexture)J=_(x.format===ei,x.type),le&&(re?t.texStorage2D(i.TEXTURE_2D,1,J,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,J,Z.width,Z.height,0,he,R,null));else if(x.isDataTexture)if(ue.length>0){re&&le&&t.texStorage2D(i.TEXTURE_2D,Xe,J,ue[0].width,ue[0].height);for(let se=0,De=ue.length;se<De;se++)X=ue[se],re?Ie&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,X.width,X.height,he,R,X.data):t.texImage2D(i.TEXTURE_2D,se,J,X.width,X.height,0,he,R,X.data);x.generateMipmaps=!1}else re?(le&&t.texStorage2D(i.TEXTURE_2D,Xe,J,Z.width,Z.height),Ie&&ce(x,Z,he,R)):t.texImage2D(i.TEXTURE_2D,0,J,Z.width,Z.height,0,he,R,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){re&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Xe,J,ue[0].width,ue[0].height,Z.depth);for(let se=0,De=ue.length;se<De;se++)if(X=ue[se],x.format!==wn)if(he!==null)if(re){if(Ie)if(x.layerUpdates.size>0){let We=Mh(X.width,X.height,x.format,x.type);for(let ve of x.layerUpdates){let dt=X.data.subarray(ve*We/X.data.BYTES_PER_ELEMENT,(ve+1)*We/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,ve,X.width,X.height,1,he,dt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,X.width,X.height,Z.depth,he,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,J,X.width,X.height,Z.depth,0,X.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,X.width,X.height,Z.depth,he,R,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,J,X.width,X.height,Z.depth,0,he,R,X.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{re&&le&&t.texStorage2D(i.TEXTURE_2D,Xe,J,ue[0].width,ue[0].height);for(let se=0,De=ue.length;se<De;se++)X=ue[se],x.format!==wn?he!==null?re?Ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,X.width,X.height,he,X.data):t.compressedTexImage2D(i.TEXTURE_2D,se,J,X.width,X.height,0,X.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Ie&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,X.width,X.height,he,R,X.data):t.texImage2D(i.TEXTURE_2D,se,J,X.width,X.height,0,he,R,X.data)}else if(x.isDataArrayTexture)if(re){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Xe,J,Z.width,Z.height,Z.depth),Ie)if(x.layerUpdates.size>0){let se=Mh(Z.width,Z.height,x.format,x.type);for(let De of x.layerUpdates){let We=Z.data.subarray(De*se/Z.data.BYTES_PER_ELEMENT,(De+1)*se/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,Z.width,Z.height,1,he,R,We)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,he,R,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,J,Z.width,Z.height,Z.depth,0,he,R,Z.data);else if(x.isData3DTexture)re?(le&&t.texStorage3D(i.TEXTURE_3D,Xe,J,Z.width,Z.height,Z.depth),Ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,he,R,Z.data)):t.texImage3D(i.TEXTURE_3D,0,J,Z.width,Z.height,Z.depth,0,he,R,Z.data);else if(x.isFramebufferTexture){if(le)if(re)t.texStorage2D(i.TEXTURE_2D,Xe,J,Z.width,Z.height);else{let se=Z.width,De=Z.height;for(let We=0;We<Xe;We++)t.texImage2D(i.TEXTURE_2D,We,J,se,De,0,he,R,null),se>>=1,De>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),Z.parentNode!==se){se.appendChild(Z),d.add(x),se.onpaint=De=>{let We=De.changedElements;for(let ve of d)We.includes(ve.image)&&(ve.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let We=i.RGBA,ve=i.RGBA,dt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,We,ve,dt,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ue.length>0){if(re&&le){let se=He(ue[0]);t.texStorage2D(i.TEXTURE_2D,Xe,J,se.width,se.height)}for(let se=0,De=ue.length;se<De;se++)X=ue[se],re?Ie&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,he,R,X):t.texImage2D(i.TEXTURE_2D,se,J,he,R,X);x.generateMipmaps=!1}else if(re){if(le){let se=He(Z);t.texStorage2D(i.TEXTURE_2D,Xe,J,se.width,se.height)}Ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,R,Z)}else t.texImage2D(i.TEXTURE_2D,0,J,he,R,Z);T(x)&&x.mipmapsAutoUpdate===!0&&v(ie),pe.__version=oe.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Se(w,x,B){if(x.image.length!==6)return;let ie=Ke(w,x),$=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);let oe=n.get($);if($.version!==oe.__version||ie===!0){t.activeTexture(i.TEXTURE0+B);let pe=Je.getPrimaries(Je.workingColorSpace),Y=x.colorSpace===ti?null:Je.getPrimaries(x.colorSpace),Z=x.colorSpace===ti||pe===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let he=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,J=[];for(let ve=0;ve<6;ve++)!he&&!R?J[ve]=S(x.image[ve],!0,s.maxCubemapSize):J[ve]=R?x.image[ve].image:x.image[ve],J[ve]=Fe(x,J[ve]);let X=J[0],ue=r.convert(x.format,x.colorSpace),re=r.convert(x.type),le=E(x.internalFormat,ue,re,x.normalized,x.colorSpace),Ie=x.isVideoTexture!==!0,Xe=oe.__version===void 0||ie===!0,se=$.dataReady,De=b(x,X);Ye(i.TEXTURE_CUBE_MAP,x);let We;if(x.isDepthTexture){if(le=_(x.format===ei,x.type),Xe)if(Ie)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,le,X.width,X.height);else for(let ve=0;ve<6;ve++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,le,X.width,X.height,0,ue,re,null)}else if(he){Ie&&Xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,le,X.width,X.height);for(let ve=0;ve<6;ve++){We=J[ve].mipmaps;for(let dt=0;dt<We.length;dt++){let It=We[dt];x.format!==wn?ue!==null?Ie?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,dt,0,0,It.width,It.height,ue,It.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,dt,le,It.width,It.height,0,It.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,dt,0,0,It.width,It.height,ue,re,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,dt,le,It.width,It.height,0,ue,re,It.data)}}}else{if(We=x.mipmaps,Ie&&Xe){We.length>0&&De++;let ve=He(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,le,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(R){Ie?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,J[ve].width,J[ve].height,ue,re,J[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,le,J[ve].width,J[ve].height,0,ue,re,J[ve].data);for(let dt=0;dt<We.length;dt++){let ri=We[dt].image[ve].image;Ie?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,dt+1,0,0,ri.width,ri.height,ue,re,ri.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,dt+1,le,ri.width,ri.height,0,ue,re,ri.data)}}else{Ie?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ue,re,J[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,le,ue,re,J[ve]);for(let dt=0;dt<We.length;dt++){let It=We[dt];Ie?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,dt+1,0,0,ue,re,It.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,dt+1,le,ue,re,It.image[ve])}}}T(x)&&x.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),oe.__version=$.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ge(w,x,B,ie,$,oe){let pe=r.convert(B.format,B.colorSpace),Y=r.convert(B.type),Z=E(B.internalFormat,pe,Y,B.normalized,B.colorSpace),he=n.get(x),R=n.get(B);if(R.__renderTarget=x,!he.__hasExternalTextures){let J=Math.max(1,x.width>>oe),X=Math.max(1,x.height>>oe);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,oe,Z,J,X,x.depth,0,pe,Y,null):t.texImage2D($,oe,Z,J,X,0,pe,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),fe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,$,R.__webglTexture,0,ft(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,$,R.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(w,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let ie=x.depthTexture,$=ie&&ie.isDepthTexture?ie.type:null,oe=_(x.stencilBuffer,$),pe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(x),oe,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(x),oe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,oe,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,w)}else{let ie=x.textures;for(let $=0;$<ie.length;$++){let oe=ie[$],pe=r.convert(oe.format,oe.colorSpace),Y=r.convert(oe.type),Z=E(oe.internalFormat,pe,Y,oe.normalized,oe.colorSpace);fe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(x),Z,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(x),Z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(w,x,B){let ie=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(x.depthTexture);$.__renderTarget=x;let oe=ie?x.depthTexture.image[0]:x.depthTexture.image;(!$.__webglTexture||oe.width!==x.width||oe.height!==x.height)&&(oe.width=x.width,oe.height=x.height,x.depthTexture.needsUpdate=!0),ie?xe(x.depthTexture,0):_e(x.depthTexture,0);let pe=$.__webglTexture,Y=ft(x),Z=ie?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,he=x.depthTexture.format===ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Zn)fe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,Z,pe,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,he,Z,pe,0);else if(x.depthTexture.format===ei)fe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,Z,pe,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,he,Z,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(w){let x=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let ie=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ie){let $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ie.removeEventListener("dispose",$)};ie.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=ie}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let ie=0;ie<6;ie++)Pe(x.__webglFramebuffer[ie],w,ie);else w.texture.mipmaps.length>0?Pe(x.__webglFramebuffer[0],w,0):Pe(x.__webglFramebuffer,w,0);else if(B){x.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ie]),x.__webglDepthbuffer[ie]===void 0)x.__webglDepthbuffer[ie]=i.createRenderbuffer(),Qe(x.__webglDepthbuffer[ie],w,!1);else{let $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,oe)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Qe(x.__webglDepthbuffer,w,!1);else{let $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(w,x,B){let ie=n.get(w);x!==void 0&&ge(ie.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&je(w)}function ot(w){let x=w.texture,B=n.get(w),ie=n.get(x);w.addEventListener("dispose",F),U(w);let $=w.textures,oe=w.isWebGLCubeRenderTarget===!0,pe=$.length>1;if(pe||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=x.version,a.memory.textures++),oe){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let Z=0;Z<x.mipmaps.length;Z++)B.__webglFramebuffer[Y][Z]=i.createFramebuffer()}else B.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)B.__webglFramebuffer[Y]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(pe)for(let Y=0,Z=$.length;Y<Z;Y++){let he=n.get($[Y]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&fe(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<$.length;Y++){let Z=$[Y];B.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);let he=r.convert(Z.format,Z.colorSpace),R=r.convert(Z.type),J=E(Z.internalFormat,he,R,Z.normalized,Z.colorSpace,w.isXRRenderTarget===!0),X=ft(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,J,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Qe(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)ge(B.__webglFramebuffer[Y][Z],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else ge(B.__webglFramebuffer[Y],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);T(x)?v(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(pe){for(let Y=0,Z=$.length;Y<Z;Y++){let he=$[Y],R=n.get(he),J=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,R.__webglTexture),Ye(J,he),ge(B.__webglFramebuffer,w,he,i.COLOR_ATTACHMENT0+Y,J,0),T(he)&&v(J)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,ie.__webglTexture),Ye(Y,x),x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)ge(B.__webglFramebuffer[Z],w,x,i.COLOR_ATTACHMENT0,Y,Z);else ge(B.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,Y,0);T(x)?v(Y):x.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&je(w)}function D(w){let x=w.textures;for(let B=0,ie=x.length;B<ie;B++){let $=x[B];if(T($)&&$.mipmapsAutoUpdate===!0){let oe=A(w),pe=n.get($).__webglTexture;t.bindTexture(oe,pe),v(oe),t.unbindTexture()}}}let wt=[];function Ze(w){if(w.samples>0){if(fe(w)===!1){let x=w.textures,B=w.width,ie=w.height,$=i.COLOR_BUFFER_BIT,oe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(w),Y=x.length>1;if(Y)for(let he=0;he<x.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let he=0;he<x.length;he++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[he]);let R=n.get(x[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,B,ie,0,0,B,ie,$,i.NEAREST),l===!0&&(wt.length=0,wt.push(i.COLOR_ATTACHMENT0+he),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&wt.push(oe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let he=0;he<x.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,pe.__webglColorRenderbuffer[he]);let R=n.get(x[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ft(w){return Math.min(s.maxSamples,w.samples)}function fe(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(w){let x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Fe(w,x){let B=w.colorSpace,ie=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==gr&&B!==ti&&(Je.getTransfer(B)===lt?(ie!==wn||$!==an)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",B)),x}function He(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Be,this.resetTextureUnits=K,this.getTextureUnits=te,this.setTextureUnits=Ee,this.setTexture2D=_e,this.setTexture2DArray=we,this.setTexture3D=Ne,this.setTextureCube=xe,this.rebindTextures=nt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=fe,this.dispose=G}function z1(i,e){function t(n,s=ti){let r,a=Je.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===el)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ch)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ah)return i.BYTE;if(n===oh)return i.SHORT;if(n===Vs)return i.UNSIGNED_SHORT;if(n===Ko)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===Rt)return i.HALF_FLOAT;if(n===hh)return i.ALPHA;if(n===uh)return i.RGB;if(n===wn)return i.RGBA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===tl)return i.RED;if(n===nl)return i.RED_INTEGER;if(n===vi)return i.RG;if(n===il)return i.RG_INTEGER;if(n===sl)return i.RGBA_INTEGER;if(n===aa||n===oa||n===la||n===ca)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rl||n===al||n===ol||n===ll)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cl||n===hl||n===ul||n===dl||n===fl||n===ha||n===pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cl||n===hl)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ul)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===dl)return r.COMPRESSED_R11_EAC;if(n===fl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ha)return r.COMPRESSED_RG11_EAC;if(n===pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===Ml||n===Sl||n===bl||n===Tl||n===El||n===wl||n===Al||n===Ll)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ml)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_l)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===El)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ll)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rl||n===Cl||n===Pl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Rl)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Il||n===Dl||n===ua||n===Nl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Il)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var G1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Pr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ft({vertexShader:G1,fragmentShader:H1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ph=class extends Rn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,M=typeof XRWebGLBinding<"u",p=new Ch,m={},S=t.getContextAttributes(),T=null,v=null,A=[],E=[],_=new ee,b=null,U=null,L=new zt;L.viewport=new yt;let N=new zt;N.viewport=new yt;let F=[L,N],V=new Wo,P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let _e=A[q];return _e===void 0&&(_e=new bs,A[q]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(q){let _e=A[q];return _e===void 0&&(_e=new bs,A[q]=_e),_e.getGripSpace()},this.getHand=function(q){let _e=A[q];return _e===void 0&&(_e=new bs,A[q]=_e),_e.getHandSpace()};function W(q){let _e=E.indexOf(q.inputSource);if(_e===-1)return;let we=A[_e];we!==void 0&&(we.update(q.inputSource,q.frame,c||a),we.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",ne);for(let q=0;q<A.length;q++){let _e=E[q];_e!==null&&(E[q]=null,A[q].disconnect(_e))}P=null,G=null,p.reset();for(let q in m)delete m[q];if(e.setRenderTarget(T),f=null,u=null,d=null,s=null,v=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),U!==null){let q=U.camera;q.fov=U.fov,q.zoom=U.zoom,q.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",H),s.addEventListener("inputsourceschange",ne),S.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ne=null,xe=null;S.depth&&(xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=S.stencil?ei:Zn,Ne=S.stencil?Xi:En);let Ue={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ue),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Et(u.textureWidth,u.textureHeight,{format:wn,type:an,depthTexture:new Jn(u.textureWidth,u.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let we={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Et(f.framebufferWidth,f.framebufferHeight,{format:wn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ne(q){for(let _e=0;_e<q.removed.length;_e++){let we=q.removed[_e],Ne=E.indexOf(we);Ne>=0&&(E[Ne]=null,A[Ne].disconnect(we))}for(let _e=0;_e<q.added.length;_e++){let we=q.added[_e],Ne=E.indexOf(we);if(Ne===-1){for(let Ue=0;Ue<A.length;Ue++)if(Ue>=E.length){E.push(we),Ne=Ue;break}else if(E[Ue]===null){E[Ue]=we,Ne=Ue;break}if(Ne===-1)break}let xe=A[Ne];xe&&xe.connect(we)}}function Q(q,_e){_e===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(_e.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let _e=q.near,we=q.far;p.texture!==null&&(p.depthNear>0&&(_e=p.depthNear),p.depthFar>0&&(we=p.depthFar)),V.near=N.near=L.near=_e,V.far=N.far=L.far=we,(P!==V.near||G!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,G=V.far),V.layers.mask=q.layers.mask|6,L.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let Ne=q.parent,xe=V.cameras;Q(V,Ne);for(let Ue=0;Ue<xe.length;Ue++)Q(xe[Ue],Ne);V.projectionMatrix.copy(L.projectionMatrix),V.projectionMatrixInverse.copy(L.projectionMatrixInverse),U===null&&q.isPerspectiveCamera&&(U={camera:q,fov:q.fov,zoom:q.zoom}),K(q,V,Ne)};function K(q,_e,we){we===null?q.matrix.copy(_e.matrixWorld):(q.matrix.copy(we.matrixWorld),q.matrix.invert(),q.matrix.multiply(_e.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(_e.projectionMatrix),q.projectionMatrixInverse.copy(_e.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=xo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(q){return m[q]};let te=null;function Ee(q,_e){if(h=_e.getViewerPose(c||a),g=_e,h!==null){let we=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ne=!1;we.length!==V.cameras.length&&(V.cameras.length=0,Ne=!0);for(let ze=0;ze<we.length;ze++){let Ye=we[ze],Ke=null;if(f!==null)Ke=f.getViewport(Ye);else{let ce=d.getViewSubImage(u,Ye);Ke=ce.viewport,ze===0&&(e.setRenderTargetTextures(v,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(v))}let j=F[ze];j===void 0&&(j=new zt,j.layers.enable(ze),j.viewport=new yt,F[ze]=j),j.matrix.fromArray(Ye.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Ye.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),ze===0&&(V.matrix.copy(j.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ne===!0&&V.cameras.push(j)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let ze=d.getDepthInformation(we[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,s.renderState)}if(xe&&xe.includes("camera-access")&&M){e.state.unbindTexture(),d=n.getBinding();for(let ze=0;ze<we.length;ze++){let Ye=we[ze].camera;if(Ye){let Ke=m[Ye];Ke||(Ke=new Pr,m[Ye]=Ke);let j=d.getCameraImage(Ye);Ke.sourceTexture=j}}}}for(let we=0;we<A.length;we++){let Ne=E[we],xe=A[we];Ne!==null&&xe!==void 0&&xe.update(Ne,_e,c||a)}te&&te(q,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),g=null}let Be=new cf;Be.setAnimationLoop(Ee),this.setAnimationLoop=function(q){te=q},this.dispose=function(){}}},k1=new ht,vf=new ke;vf.set(-1,0,0,0,1,0,0,0,1);function V1(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,xh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,T,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),M(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===kt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===kt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=e.get(m),T=S.envMap,v=S.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(k1.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(vf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=T*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===kt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){let S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q1(i,e,t,n){let s={},r={};function a(S,T){let v=T.program;n.uniformBlockBinding(S,v,s[S.id])}function o(S,T){let v=s[S.id];v===void 0&&(g(S),v=l(S),s[S.id]=v,S.addEventListener("dispose",p));let A=T.program;n.updateUBOMapping(S,A);let E=e.render.frame;r[S.id]!==E&&(c(S),r[S.id]=E)}function l(S){let T=i.createBuffer(),v=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,v,A),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(S){let T=s[S.id],v=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let E=0,_=v.length;E<_;E++){let b=v[E];if(Array.isArray(b))for(let U=0,L=b.length;U<L;U++)h(b[U],E,U,A);else h(b,E,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,T,v,A){if(u(S,T,v,A)===!0){let E=S.__offset,_=S.value;if(Array.isArray(_)){let b=0;for(let U=0;U<_.length;U++){let L=_[U],N=M(L,!0);d(L,S.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,S.__data)}}function d(S,T,v){typeof S=="number"||typeof S=="boolean"?T[v]=S:S.isMatrix3?(T[v]=S.elements[0],T[v+1]=S.elements[1],T[v+2]=S.elements[2],T[v+3]=0,T[v+4]=S.elements[3],T[v+5]=S.elements[4],T[v+6]=S.elements[5],T[v+7]=0,T[v+8]=S.elements[6],T[v+9]=S.elements[7],T[v+10]=S.elements[8],T[v+11]=0):ArrayBuffer.isView(S)?T.set(S.subarray(0,T.length-v),v):S.toArray(T,v)}function u(S,T,v,A){let E=S.value,_=T+"_"+v;if(Array.isArray(E)){A[_]===void 0&&(A[_]=[]);let b=A[_],U=!1;for(let L=0;L<E.length;L++)f(E[L],b,L)===!0&&(U=!0);return U}return f(E,A,_)}function f(S,T,v){if(T[v]===void 0)return typeof S=="number"||typeof S=="boolean"?T[v]=S:ArrayBuffer.isView(S)?T[v]=S.slice():T[v]=S.clone(),!0;{let A=T[v];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return T[v]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function g(S){let T=S.uniforms,v=0,A=16;for(let _=0,b=T.length;_<b;_++){let U=Array.isArray(T[_])?T[_]:[T[_]];for(let L=0,N=U.length;L<N;L++){let F=U[L],V=Array.isArray(F.value)?F.value:[F.value],P=Array.isArray(T[_])||Array.isArray(F.value),G=v;for(let H=0,ne=V.length;H<ne;H++){let Q=V[H],K=M(Q,P),te=v%A,Ee=te%K.boundary,Be=te+Ee;v+=Ee,Be!==0&&A-Be<K.storage&&(v+=A-Be),H===0&&(G=v),v+=K.storage}let W=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new W((v-G)/Float32Array.BYTES_PER_ELEMENT),F.__offset=G}}let E=v%A;return E>0&&(v+=A-E),S.__size=v,S.__cache={},this}function M(S,T){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=16,v.storage=48):S.isMatrix4?(v.boundary=16,v.storage=64):S.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(v.boundary=16,v.storage=S.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",S),T===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(S){let T=S.target;T.removeEventListener("dispose",p),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:m}}var W1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fn=null;function X1(){return Fn===null&&(Fn=new wr(W1,16,16,vi,Rt),Fn.name="DFG_LUT",Fn.minFilter=en,Fn.magFilter=en,Fn.wrapS=Ln,Fn.wrapT=Ln,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}var Bl=class{constructor(e={}){let{canvas:t=wd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=an}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=f,p=new Set([sl,il,nl]),m=new Set([an,En,Vs,Xi,jo,el]),S=new Uint32Array(4),T=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},A=null,E=null,_=[],b=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,N=!1,F=null,V=null,P=null,G=null;this._outputColorSpace=Kt;let W=0,H=0,ne=null,Q=-1,K=null,te=new yt,Ee=new yt,Be=null,q=new be(0),_e=0,we=t.width,Ne=t.height,xe=1,Ue=null,_t=null,ze=new yt(0,0,we,Ne),Ye=new yt(0,0,we,Ne),Ke=!1,j=new pi,ce=new bo,ae=!1,Se=!1,ge=new ht,Qe=new C,Pe=new yt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function ot(){return ne===null?xe:1}let D=n;function wt(y,I){return t.getContext(y,I)}let Ze,ft,fe,Tt,Fe,He,w,x,B,ie,$,oe,pe,Y,Z,he,R,J,X,ue,re,le,Ie;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",ve,!1),D===null){let I="webgl2";if(D=wt(I,y),D===null)throw wt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(y){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ge("WebGLRenderer: "+y.message),y}function Xe(){Ze=new i_(D),Ze.init(),re=new z1(D,Ze),ft=new Xg(D,Ze,e,re),fe=new O1(D,Ze),ft.reversedDepthBuffer&&u&&fe.buffers.depth.setReversed(!0),V=D.createFramebuffer(),P=D.createFramebuffer(),G=D.createFramebuffer(),Tt=new a_(D),Fe=new b1,He=new B1(D,Ze,fe,Fe,ft,re,Tt),w=new n_(L),x=new lp(D),le=new Qg(D,x),B=new s_(D,x,Tt,le),ie=new l_(D,B,x,le,Tt),J=new o_(D,ft,He),Z=new qg(Fe),$=new S1(L,w,Ze,ft,le,Z),oe=new V1(L,Fe),pe=new E1,Y=new P1(Ze),R=new Vg(L,w,fe,ie,g,l),he=new F1(L,ie,ft),Ie=new Q1(D,Tt,ft,fe),X=new Wg(D,Ze,Tt),ue=new r_(D,Ze,Tt),Tt.programs=$.programs,L.capabilities=ft,L.extensions=Ze,L.properties=Fe,L.renderLists=pe,L.shadowMap=he,L.state=fe,L.info=Tt}M!==an&&(U=new h_(M,t.width,t.height,o,s,r));let se=new Ph(L,D);this.xr=se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=Ze.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Ze.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(y){y!==void 0&&(xe=y,this.setSize(we,Ne,!1))},this.getSize=function(y){return y.set(we,Ne)},this.setSize=function(y,I,k=!0){if(se.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}we=y,Ne=I,t.width=Math.floor(y*xe),t.height=Math.floor(I*xe),k===!0&&(t.style.width=y+"px",t.style.height=I+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(we*xe,Ne*xe).floor()},this.setDrawingBufferSize=function(y,I,k){we=y,Ne=I,xe=k,t.width=Math.floor(y*k),t.height=Math.floor(I*k),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(M===an){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(te)},this.getViewport=function(y){return y.copy(ze)},this.setViewport=function(y,I,k,O){y.isVector4?ze.set(y.x,y.y,y.z,y.w):ze.set(y,I,k,O),fe.viewport(te.copy(ze).multiplyScalar(ot()).round())},this.getScissor=function(y){return y.copy(Ye)},this.setScissor=function(y,I,k,O){y.isVector4?Ye.set(y.x,y.y,y.z,y.w):Ye.set(y,I,k,O),fe.scissor(Ee.copy(Ye).multiplyScalar(ot()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(y){fe.setScissorTest(Ke=y)},this.setOpaqueSort=function(y){Ue=y},this.setTransparentSort=function(y){_t=y},this.getClearColor=function(y){return y.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,k=!0){let O=0;if(y){let z=!1;if(ne!==null){let me=ne.texture.format;z=p.has(me)}if(z){let me=ne.texture.type,Ae=m.has(me),de=R.getClearColor(),Me=R.getClearAlpha(),Ce=de.r,Ve=de.g,it=de.b;Ae?(S[0]=Ce,S[1]=Ve,S[2]=it,S[3]=Me,D.clearBufferuiv(D.COLOR,0,S)):(T[0]=Ce,T[1]=Ve,T[2]=it,T[3]=Me,D.clearBufferiv(D.COLOR,0,T))}else O|=D.COLOR_BUFFER_BIT}I&&(O|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),R.dispose(),pe.dispose(),Y.dispose(),He.dispose(),Fe.dispose(),w.dispose(),ie.dispose(),B.dispose(),le.dispose(),Ie.dispose(),$.dispose(),se.dispose(),se.removeEventListener("sessionstart",Kh),se.removeEventListener("sessionend",jh),Ai.stop()};function De(y){y.preventDefault(),vr("WebGLRenderer: Context Lost."),N=!0}function We(){vr("WebGLRenderer: Context Restored."),N=!1;let y=Tt.autoReset,I=he.enabled,k=he.autoUpdate,O=he.needsUpdate,z=he.type;Xe(),Tt.autoReset=y,he.enabled=I,he.autoUpdate=k,he.needsUpdate=O,he.type=z}function ve(y){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function dt(y){let I=y.target;I.removeEventListener("dispose",dt),It(I)}function It(y){ri(y),Fe.remove(y)}function ri(y){let I=Fe.get(y).programs;I!==void 0&&(I.forEach(function(k){$.releaseProgram(k)}),y.isShaderMaterial&&$.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,k,O,z,me){I===null&&(I=je);let Ae=z.isMesh&&z.matrixWorld.determinantAffine()<0,de=Zf(y,I,k,O,z);fe.setMaterial(O,Ae);let Me=k.index,Ce=1;if(O.wireframe===!0){if(Me=B.getWireframeAttribute(k),Me===void 0)return;Ce=2}let Ve=k.drawRange,it=k.attributes.position,Le=Ve.start*Ce,st=(Ve.start+Ve.count)*Ce;me!==null&&(Le=Math.max(Le,me.start*Ce),st=Math.min(st,(me.start+me.count)*Ce)),Me!==null?(Le=Math.max(Le,0),st=Math.min(st,Me.count)):it!=null&&(Le=Math.max(Le,0),st=Math.min(st,it.count));let At=st-Le;if(At<0||At===1/0)return;le.setup(z,O,de,k,Me);let mt,pt=X;if(Me!==null&&(mt=x.get(Me),pt=ue,pt.setIndex(mt)),z.isMesh)O.wireframe===!0?(fe.setLineWidth(O.wireframeLinewidth*ot()),pt.setMode(D.LINES)):pt.setMode(D.TRIANGLES);else if(z.isLine){let Qt=O.linewidth;Qt===void 0&&(Qt=1),fe.setLineWidth(Qt*ot()),z.isLineSegments?pt.setMode(D.LINES):z.isLineLoop?pt.setMode(D.LINE_LOOP):pt.setMode(D.LINE_STRIP)}else z.isPoints?pt.setMode(D.POINTS):z.isSprite&&pt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))pt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Qt=z._multiDrawStarts,Re=z._multiDrawCounts,Jt=z._multiDrawCount,ct=Me?x.get(Me).bytesPerElement:1,Li=Fe.get(O).currentProgram.getUniforms();for(let Wt=0;Wt<Jt;Wt++)Li.setValue(D,"_gl_DrawID",Wt),pt.render(Qt[Wt]/ct,Re[Wt])}else if(z.isInstancedMesh)pt.renderInstances(Le,At,z.count);else if(k.isInstancedBufferGeometry){let Qt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Re=Math.min(k.instanceCount,Qt);pt.renderInstances(Le,At,Re)}else pt.render(Le,At)};function $h(y,I,k,O){F!==null&&y.isNodeMaterial&&F.setObject(O,y),ae===!0&&Z.setState(y,k,!1),y.transparent===!0&&y.side===Nn&&y.forceSinglePass===!1?(y.side=kt,y.needsUpdate=!0,tr(y,I,O),y.side=xi,y.needsUpdate=!0,tr(y,I,O),y.side=Nn):tr(y,I,O)}this.compile=function(y,I,k=null){k===null&&(k=y),F!==null&&F.renderStart(y,I,k),E=Y.get(k),E.init(I),b.push(E),k.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),y!==k&&y.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),Se=this.localClippingEnabled,ae=Z.init(this.clippingPlanes,Se),ae===!0&&Z.setGlobalState(this.clippingPlanes,I),F!==null&&he.render(E.state.shadowsArray,k,I);let O=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let me=z.material;if(me)if(Array.isArray(me))for(let Ae=0;Ae<me.length;Ae++){let de=me[Ae];$h(de,k,I,z),O.add(de)}else $h(me,k,I,z),O.add(me)}),E=b.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(y,I,k=null){let O=this.compile(y,I,k);return new Promise(z=>{function me(){if(O.forEach(function(Ae){let Me=Fe.get(Ae).currentProgram;(Me===void 0||Me.isReady())&&O.delete(Ae)}),O.size===0){z(y);return}setTimeout(me,10)}Ze.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let fc=null;function qf(y){fc&&fc(y)}function Kh(){Ai.stop()}function jh(){Ai.start()}let Ai=new cf;Ai.setAnimationLoop(qf),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(y){fc=y,se.setAnimationLoop(y),y===null?Ai.stop():Ai.start()},se.addEventListener("sessionstart",Kh),se.addEventListener("sessionend",jh),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(y,I);let k=se.enabled===!0&&se.isPresenting===!0,O=U!==null&&(ne===null||k)&&U.begin(L,ne);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(I),I=se.getCamera()),y.isScene===!0&&y.onBeforeRender(L,y,I,ne),E=Y.get(y,b.length),E.init(I),E.state.textureUnits=He.getTextureUnits(),b.push(E),ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?ce.setFromArrayCamera(I):j.setFromProjectionMatrix(ge,pn,I.reversedDepth),Se=this.localClippingEnabled,ae=Z.init(this.clippingPlanes,Se),A=pe.get(y,_.length),A.init(),_.push(A),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){let Ae=L.xr.getDepthSensingMesh();Ae!==null&&pc(Ae,I,-1/0,L.sortObjects)}pc(y,I,0,L.sortObjects),A.finish(),F!==null&&F.updateLights(E.state.lightsArray),L.sortObjects===!0&&A.sort(Ue,_t),nt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,nt&&R.addToRenderList(A,y),this.info.autoReset===!0&&this.info.reset(),ae===!0&&Z.beginShadows();let z=E.state.shadowsArray;if(he.render(z,y,I),ae===!0&&Z.endShadows(),(O&&U.hasRenderPass())===!1){let Ae=A.opaque,de=A.transmissive;if(E.setupLights(),I.isArrayCamera){let Me=I.cameras;if(de.length>0)for(let Ce=0,Ve=Me.length;Ce<Ve;Ce++){let it=Me[Ce];tu(Ae,de,y,it)}nt&&R.render(y);for(let Ce=0,Ve=Me.length;Ce<Ve;Ce++){let it=Me[Ce];eu(A,y,it,it.viewport)}}else de.length>0&&tu(Ae,de,y,I),nt&&R.render(y),eu(A,y,I)}ne!==null&&H===0&&(He.updateMultisampleRenderTarget(ne),He.updateRenderTargetMipmap(ne)),O&&U.end(L),y.isScene===!0&&y.onAfterRender(L,y,I),le.resetDefaultState(),Q=-1,K=null,b.pop(),b.length>0?(E=b[b.length-1],He.setTextureUnits(E.state.textureUnits),ae===!0&&Z.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,F!==null&&F.renderEnd()};function pc(y,I,k,O){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){let Ae=I.isArrayCamera?ce:j;if(!y.frustumCulled||y.intersectsFrustum(Ae)){O&&Pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ge);let de=ie.update(y),Me=y.material;Me.visible&&A.push(y,de,Me,k,Pe.z,null,I)}}else if(y.isMesh||y.isLine||y.isPoints){let Ae=I.isArrayCamera?ce:j;if(!y.frustumCulled||y.intersectsFrustum(Ae)){let de=ie.update(y),Me=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Pe.copy(y.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Pe.copy(de.boundingSphere.center)),Pe.applyMatrix4(y.matrixWorld).applyMatrix4(ge)),Array.isArray(Me)){let Ce=de.groups;for(let Ve=0,it=Ce.length;Ve<it;Ve++){let Le=Ce[Ve],st=Me[Le.materialIndex];st&&st.visible&&A.push(y,de,st,k,Pe.z,Le,I)}}else Me.visible&&A.push(y,de,Me,k,Pe.z,null,I)}}}let me=y.children;for(let Ae=0,de=me.length;Ae<de;Ae++)pc(me[Ae],I,k,O)}function eu(y,I,k,O){let{opaque:z,transmissive:me,transparent:Ae}=y;E.setupLightsView(k),ae===!0&&Z.setGlobalState(L.clippingPlanes,k),O&&fe.viewport(te.copy(O)),z.length>0&&Aa(z,I,k),me.length>0&&Aa(me,I,k),Ae.length>0&&Aa(Ae,I,k),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function tu(y,I,k,O){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[O.id]===void 0){let Le=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[O.id]=new Et(1,1,{generateMipmaps:!0,type:Le?Rt:an,minFilter:jn,samples:Math.max(4,ft.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let me=E.state.transmissionRenderTarget[O.id],Ae=O.viewport||te;me.setSize(Ae.z*L.transmissionResolutionScale,Ae.w*L.transmissionResolutionScale);let de=L.getRenderTarget(),Me=L.getActiveCubeFace(),Ce=L.getActiveMipmapLevel();L.setRenderTarget(me),L.getClearColor(q),_e=L.getClearAlpha(),_e<1&&L.setClearColor(16777215,.5),L.clear(),nt&&R.render(k);let Ve=L.toneMapping;L.toneMapping=Un;let it=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),E.setupLightsView(O),ae===!0&&Z.setGlobalState(L.clippingPlanes,O),Aa(y,k,O),He.updateMultisampleRenderTarget(me),He.updateRenderTargetMipmap(me),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let st=0,At=I.length;st<At;st++){let mt=I[st],{object:pt,geometry:Qt,material:Re,group:Jt}=mt;if(Re.side===Nn&&pt.layers.test(O.layers)){let ct=Re.side;Re.side=kt,Re.needsUpdate=!0,nu(pt,k,O,Qt,Re,Jt),Re.side=ct,Re.needsUpdate=!0,Le=!0}}Le===!0&&(He.updateMultisampleRenderTarget(me),He.updateRenderTargetMipmap(me))}L.setRenderTarget(de,Me,Ce),L.setClearColor(q,_e),it!==void 0&&(O.viewport=it),L.toneMapping=Ve}function Aa(y,I,k){let O=I.isScene===!0?I.overrideMaterial:null;for(let z=0,me=y.length;z<me;z++){let Ae=y[z],{object:de,geometry:Me,group:Ce}=Ae,Ve=Ae.material;Ve.allowOverride===!0&&O!==null&&(Ve=O),de.layers.test(k.layers)&&nu(de,I,k,Me,Ve,Ce)}}function nu(y,I,k,O,z,me){F!==null&&z.isNodeMaterial&&F.setObject(y,z),y.onBeforeRender(L,I,k,O,z,me),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(L,I,k,O,y,me),z.transparent===!0&&z.side===Nn&&z.forceSinglePass===!1?(z.side=kt,z.needsUpdate=!0,L.renderBufferDirect(k,I,O,z,y,me),z.side=xi,z.needsUpdate=!0,L.renderBufferDirect(k,I,O,z,y,me),z.side=Nn):L.renderBufferDirect(k,I,O,z,y,me),y.onAfterRender(L,I,k,O,z,me)}function iu(y){let I=0;for(let k of y)k.texture!==null&&I++;return I}function tr(y,I,k){I.isScene!==!0&&(I=je);let O=Fe.get(y),z=E.state.lights,me=E.state.shadowsArray,Ae=z.state.version,de=$.getParameters(y,z.state,me,I,k,E.state.lightProbeGridArray),Me=$.getProgramCacheKey(de),Ce=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;let Ve=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;O.envMap=w.get(y.envMap||O.environment,Ve),O.envMapRotation=O.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Ce===void 0&&(y.addEventListener("dispose",dt),Ce=new Map,O.programs=Ce,O.programVariants=new Map);let it=Ce.get(Me);if(it!==void 0){if(O.currentProgram===it&&O.lightsStateVersion===Ae)return ru(y,de),it}else de.uniforms=$.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,k,de),y.onBeforeCompile(de,L),it=$.acquireProgram(de,Me),Ce.set(Me,it),O.uniforms=de.uniforms;let Le=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Le.clippingPlanes=Z.uniform),ru(y,de),O.needsLights=$f(y),O.lightsStateVersion=Ae,O.needsLights&&(Le.ambientLightColor.value=z.state.ambient,Le.lightProbe.value=z.state.probe,Le.sunLights.value=z.state.sun,Le.sunLightShadows.value=z.state.sunShadow,Le.directionalLights.value=z.state.directional,Le.directionalLightShadows.value=z.state.directionalShadow,Le.spotLights.value=z.state.spot,Le.spotLightShadows.value=z.state.spotShadow,Le.rectAreaLights.value=z.state.rectArea,Le.ltc_1.value=z.state.rectAreaLTC1,Le.ltc_2.value=z.state.rectAreaLTC2,Le.pointLights.value=z.state.point,Le.pointLightShadows.value=z.state.pointShadow,Le.hemisphereLights.value=z.state.hemi,Le.sunShadowMatrix.value=z.state.sunShadowMatrix,Le.sunShadowCascade.value=z.state.sunShadowCascade,Le.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Le.spotLightMatrix.value=z.state.spotLightMatrix,Le.spotLightMap.value=z.state.spotLightMap,Le.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=iu(E.state.lightProbeGridArray),O.currentProgram=it,O.uniformsList=null,it}function Yf(y,I,k,O,z){let me=Fe.get(y),Ae=me.currentProgram.id+","+O+","+z,de=me.programVariants.get(Ae);return de===void 0?(de=tr(y,I,k),me.programVariants.set(Ae,de)):(me.currentProgram=de,me.uniformsList=null,me.outputColorSpace=O,me.toneMapping=z),de}function su(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=Qs.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function ru(y,I){let k=Fe.get(y);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Zf(y,I,k,O,z){I.isScene!==!0&&(I=je),He.resetTextureUnits();let me=I.fog,Ae=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,de=ne===null?L.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Je.workingColorSpace,Me=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ce=w.get(O.envMap||Ae,Me),Ve=O.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,it=!!k.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Le=!!k.morphAttributes.position,st=!!k.morphAttributes.normal,At=!!k.morphAttributes.color,mt=Un;O.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(mt=L.toneMapping);let pt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Qt=pt!==void 0?pt.length:0,Re=Fe.get(O),Jt=E.state.lights;if(ae===!0&&(Se===!0||y!==K)){let Mt=y===K&&O.id===Q;Z.setState(O,y,Mt)}let ct=!1,Li=!1;O.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==Jt.state.version||z.isBatchedMesh&&Re.batching===!1||!z.isBatchedMesh&&Re.batching===!0||z.isBatchedMesh&&Re.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Re.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Re.instancing===!1||!z.isInstancedMesh&&Re.instancing===!0||z.isSkinnedMesh&&Re.skinning===!1||!z.isSkinnedMesh&&Re.skinning===!0||z.isInstancedMesh&&Re.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Re.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Re.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Re.instancingMorph===!1&&z.morphTexture!==null||Re.envMap!==Ce||O.fog===!0&&Re.fog!==me||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Z.numPlanes||Re.numIntersection!==Z.numIntersection)||Re.vertexAlphas!==Ve||Re.vertexTangents!==it||Re.morphTargets!==Le||Re.morphNormals!==st||Re.morphColors!==At||Re.morphTargetsCount!==Qt||Re.numLightProbeGrids!==iu(E.state.lightProbeGridArray)?ct=!0:(Re.outputColorSpace!==de||Re.toneMapping!==mt)&&(Li=!0):(ct=!0,Re.__version=O.version);let Wt=Re.currentProgram;(ct===!0||Li===!0)&&(Wt=Li===!0?Yf(O,I,z,de,mt):tr(O,I,z),F&&O.isNodeMaterial&&F.onUpdateProgram(O,Wt,Re));let La=!1,ai=!1,Ri=!1,at=Wt.getUniforms(),Bt=Re.uniforms;if(fe.useProgram(Wt.program)&&(La=!0,ai=!0,Ri=!0),O.id!==Q&&(Q=O.id,ai=!0),La||K!==y){fe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),at.setValue(D,"projectionMatrix",y.projectionMatrix),at.setValue(D,"viewMatrix",y.matrixWorldInverse);let Dt=at.map.cameraPosition;Dt!==void 0&&Dt.setValue(D,Qe.setFromMatrixPosition(y.matrixWorld)),ft.logarithmicDepthBuffer&&at.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&at.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),K!==y&&(K=y,ai=!0,Ri=!0)}if(Re.needsLights&&(Jt.state.sunShadowMap.length>0&&at.setValue(D,"sunShadowMap",Jt.state.sunShadowMap,He),Jt.state.directionalShadowMap.length>0&&at.setValue(D,"directionalShadowMap",Jt.state.directionalShadowMap,He),Jt.state.spotShadowMap.length>0&&at.setValue(D,"spotShadowMap",Jt.state.spotShadowMap,He),Jt.state.pointShadowMap.length>0&&at.setValue(D,"pointShadowMap",Jt.state.pointShadowMap,He)),z.isSkinnedMesh){at.setOptional(D,z,"bindMatrix"),at.setOptional(D,z,"bindMatrixInverse");let Mt=z.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),at.setValue(D,"boneTexture",Mt.boneTexture,He))}z.isBatchedMesh&&(at.setOptional(D,z,"batchingTexture"),at.setValue(D,"batchingTexture",z._matricesTexture,He),at.setOptional(D,z,"batchingIdTexture"),at.setValue(D,"batchingIdTexture",z._indirectTexture,He),at.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&at.setValue(D,"batchingColorTexture",z._colorsTexture,He));let yn=k.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&J.update(z,k,Wt),(ai||Re.receiveShadow!==z.receiveShadow)&&(Re.receiveShadow=z.receiveShadow,at.setValue(D,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(Bt.envMapIntensity.value=I.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=X1()),ai){if(at.setValue(D,"toneMappingExposure",L.toneMappingExposure),Re.needsLights&&Jf(Bt,Ri),me&&O.fog===!0&&oe.refreshFogUniforms(Bt,me),oe.refreshMaterialUniforms(Bt,O,xe,Ne,E.state.transmissionRenderTarget[y.id]),Re.needsLights&&Re.numLightProbeGrids>0){let Mt=v,Dt=0;for(let Hn of E.state.lightProbeGridArray)Hn.texture!==null&&(Mt.textures[Dt]=Hn.texture,Mt.min[Dt]=Hn.boundingBox.min,Mt.max[Dt]=Hn.boundingBox.max,Mt.resolution[Dt]=Hn.resolution,Dt++);for(let Hn in Mt)Mt[Hn].length=Dt;Bt.probesSH.value=Mt.textures,Bt.probesMin.value=Mt.min,Bt.probesMax.value=Mt.max,Bt.probesResolution.value=Mt.resolution}Qs.upload(D,su(Re),Bt,He)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Qs.upload(D,su(Re),Bt,He),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&at.setValue(D,"center",z.center),at.setValue(D,"modelViewMatrix",z.modelViewMatrix),at.setValue(D,"normalMatrix",z.normalMatrix),at.setValue(D,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){let Mt=O.uniformsGroups;for(let Dt=0,Hn=Mt.length;Dt<Hn;Dt++){let ou=Mt[Dt];Ie.update(ou,Wt),Ie.bind(ou,Wt)}}return Wt}function Jf(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function $f(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(y,I,k){let O=Fe.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Fe.get(y.texture).__webglTexture=I,Fe.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:k,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){let k=Fe.get(y);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,k=0){ne=y,W=I,H=k;let O=null,z=!1,me=!1;if(y){let de=Fe.get(y);if(de.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(D.FRAMEBUFFER,de.__webglFramebuffer),te.copy(y.viewport),Ee.copy(y.scissor),Be=y.scissorTest,fe.viewport(te),fe.scissor(Ee),fe.setScissorTest(Be),Q=-1;return}else if(de.__webglFramebuffer===void 0)He.setupRenderTarget(y);else if(de.__hasExternalTextures)He.rebindTextures(y,Fe.get(y.texture).__webglTexture,Fe.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ve=y.depthTexture;if(de.__boundDepthTexture!==Ve){if(Ve!==null&&Fe.has(Ve)&&(y.width!==Ve.image.width||y.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(y)}}let Me=y.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(me=!0);let Ce=Fe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?O=Ce[I][k]:O=Ce[I],z=!0):y.samples>0&&He.useMultisampledRTT(y)===!1?O=Fe.get(y).__webglMultisampledFramebuffer:Array.isArray(Ce)?O=Ce[k]:O=Ce,te.copy(y.viewport),Ee.copy(y.scissor),Be=y.scissorTest}else te.copy(ze).multiplyScalar(xe).floor(),Ee.copy(Ye).multiplyScalar(xe).floor(),Be=Ke;if(k!==0&&(O=V),fe.bindFramebuffer(D.FRAMEBUFFER,O)&&fe.drawBuffers(y,O),fe.viewport(te),fe.scissor(Ee),fe.setScissorTest(Be),z){let de=Fe.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,de.__webglTexture,k)}else if(me){let de=I;for(let Me=0;Me<y.textures.length;Me++){let Ce=Fe.get(y.textures[Me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Me,Ce.__webglTexture,k,de)}}else if(y!==null&&k!==0){let de=Fe.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,de.__webglTexture,k)}Q=-1};function au(y){let I=Fe.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=ft.textureFormatReadable(y.format),I.__typeReadable=ft.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,k,O,z,me,Ae,de=0){if(!(y&&y.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Fe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ae!==void 0&&(Me=Me[Ae],Array.isArray(Me)&&(Me=Me[0])),Me){fe.bindFramebuffer(D.FRAMEBUFFER,Me);try{let Ce=y.textures[de],Ve=Ce.format,it=Ce.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+de);let Le=au(Ce);if(Le.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-O&&k>=0&&k<=y.height-z&&D.readPixels(I,k,O,z,re.convert(Ve),re.convert(it),me)}finally{let Ce=ne!==null?Fe.get(ne).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(y,I,k,O,z,me,Ae,de=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Fe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ae!==void 0&&(Me=Me[Ae],Array.isArray(Me)&&(Me=Me[0])),Me)if(I>=0&&I<=y.width-O&&k>=0&&k<=y.height-z){fe.bindFramebuffer(D.FRAMEBUFFER,Me);let Ce=y.textures[de],Ve=Ce.format,it=Ce.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+de);let Le=au(Ce);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,st),D.bufferData(D.PIXEL_PACK_BUFFER,me.byteLength,D.STREAM_READ),D.readPixels(I,k,O,z,re.convert(Ve),re.convert(it),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let At=ne!==null?Fe.get(ne).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,At);let mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ld(D,mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,st),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,me),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(st),D.deleteSync(mt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,k=0){let O=Math.pow(2,-k),z=Math.floor(y.image.width*O),me=Math.floor(y.image.height*O),Ae=I!==null?I.x:0,de=I!==null?I.y:0;He.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,Ae,de,z,me),fe.unbindTexture()},this.copyTextureToTexture=function(y,I,k=null,O=null,z=0,me=0){let Ae,de,Me,Ce,Ve,it,Le,st,At,mt=y.isCompressedTexture?y.mipmaps[me]:y.image;if(k!==null)Ae=k.max.x-k.min.x,de=k.max.y-k.min.y,Me=k.isBox3?k.max.z-k.min.z:1,Ce=k.min.x,Ve=k.min.y,it=k.isBox3?k.min.z:0;else{let at=Math.pow(2,-z);Ae=Math.floor(mt.width*at),de=Math.floor(mt.height*at),y.isDataArrayTexture?Me=mt.depth:y.isData3DTexture?Me=Math.floor(mt.depth*at):Me=1,Ce=0,Ve=0,it=0}O!==null?(Le=O.x,st=O.y,At=O.z):(Le=0,st=0,At=0);let pt=re.convert(I.format),Qt=re.convert(I.type),Re;I.isData3DTexture?(He.setTexture3D(I,0),Re=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(He.setTexture2DArray(I,0),Re=D.TEXTURE_2D_ARRAY):(He.setTexture2D(I,0),Re=D.TEXTURE_2D),fe.activeTexture(D.TEXTURE0),fe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),fe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),fe.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);let Jt=fe.getParameter(D.UNPACK_ROW_LENGTH),ct=fe.getParameter(D.UNPACK_IMAGE_HEIGHT),Li=fe.getParameter(D.UNPACK_SKIP_PIXELS),Wt=fe.getParameter(D.UNPACK_SKIP_ROWS),La=fe.getParameter(D.UNPACK_SKIP_IMAGES);fe.pixelStorei(D.UNPACK_ROW_LENGTH,mt.width),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt.height),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),fe.pixelStorei(D.UNPACK_SKIP_ROWS,Ve),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,it);let ai=y.isDataArrayTexture||y.isData3DTexture,Ri=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){let at=Fe.get(y),Bt=Fe.get(I),yn=Fe.get(at.__renderTarget),Mt=Fe.get(Bt.__renderTarget);fe.bindFramebuffer(D.READ_FRAMEBUFFER,yn.__webglFramebuffer),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Dt=0;Dt<Me;Dt++)ai&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Fe.get(y).__webglTexture,z,it+Dt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Fe.get(I).__webglTexture,me,At+Dt)),D.blitFramebuffer(Ce,Ve,Ce+Ae,Ve+de,Le,st,Le+Ae,st+de,D.DEPTH_BUFFER_BIT,D.NEAREST);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||Fe.has(y)){let at=Fe.get(y),Bt=Fe.get(I);fe.bindFramebuffer(D.READ_FRAMEBUFFER,P),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let yn=0;yn<Me;yn++)ai?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,at.__webglTexture,z,it+yn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,at.__webglTexture,z),Ri?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Bt.__webglTexture,me,At+yn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Bt.__webglTexture,me),z!==0?D.blitFramebuffer(Ce,Ve,Ce+Ae,Ve+de,Le,st,Le+Ae,st+de,D.COLOR_BUFFER_BIT,D.NEAREST):Ri?D.copyTexSubImage3D(Re,me,Le,st,At+yn,Ce,Ve,Ae,de):D.copyTexSubImage2D(Re,me,Le,st,Ce,Ve,Ae,de);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ri?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(Re,me,Le,st,At,Ae,de,Me,pt,Qt,mt.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(Re,me,Le,st,At,Ae,de,Me,pt,mt.data):D.texSubImage3D(Re,me,Le,st,At,Ae,de,Me,pt,Qt,mt):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,me,Le,st,Ae,de,pt,Qt,mt.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,me,Le,st,mt.width,mt.height,pt,mt.data):D.texSubImage2D(D.TEXTURE_2D,me,Le,st,Ae,de,pt,Qt,mt);fe.pixelStorei(D.UNPACK_ROW_LENGTH,Jt),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ct),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,Li),fe.pixelStorei(D.UNPACK_SKIP_ROWS,Wt),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,La),me===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&D.generateMipmap(Re),fe.unbindTexture()},this.initRenderTarget=function(y){Fe.get(y).__webglFramebuffer===void 0&&He.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?He.setTextureCube(y,0):y.isData3DTexture?He.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?He.setTexture2DArray(y,0):He.setTexture2D(y,0),fe.unbindTexture()},this.resetState=function(){W=0,H=0,ne=null,fe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var qs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Y1=new Hi(-1,1,1,-1,0,1),Ih=class extends vt{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}},Z1=new Ih,Mi=class{constructor(e){this._mesh=new rt(Z1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Y1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Hl=class extends un{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ni.clone(e.uniforms),this.material=new Ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Mi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var _a=class extends un{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},kl=class extends un{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Vl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ee);this._width=n.width,this._height=n.height,t=new Et(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hl(qs),this.copyPass.material.blending=$n,this.timer=new Jr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_a!==void 0&&(a instanceof _a?n=!0:a instanceof kl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var xa=class extends un{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new be}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var yf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ys=class i extends un{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ee(e.x,e.y):new ee(256,256),this.clearColor=new be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Et(r,a,{type:Rt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Et(r,a,{type:Rt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Et(r,a,{type:Rt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=yf;this.highPassUniforms=ni.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ft({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ee(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ni.clone(qs.uniforms),this.blendMaterial=new Ft({uniforms:this.copyUniforms,vertexShader:qs.vertexShader,fragmentShader:qs.fragmentShader,premultipliedAlpha:!0,blending:Kn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new be,this._oldClearAlpha=1,this._basic=new Ht,this._fsQuad=new Mi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ee(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Ft({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ee(.5,.5)},direction:{value:new ee(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ys.BlurDirectionX=new ee(1,0);Ys.BlurDirectionY=new ee(0,1);var va={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ql=class extends un{constructor(){super(),this.isOutputPass=!0,this.uniforms=ni.clone(va.uniforms),this.material=new Fs({name:va.name,uniforms:this.uniforms,vertexShader:va.vertexShader,fragmentShader:va.fragmentShader}),this._fsQuad=new Mi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===jr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ea?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ta?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ia?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===na&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Wl=class extends fi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new _n;e.deleteAttribute("uv");let t=new Ot({side:kt}),n=new Ot,s=new Gi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new rt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new gn(e,n,6),o=new bt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new rt(e,Zs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new rt(e,Zs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new rt(e,Zs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new rt(e,Zs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new rt(e,Zs(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new rt(e,Zs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Zs(i){return new Xr({color:0,emissive:16777215,emissiveIntensity:i})}var Dh={"1":{a:.4897,c:[["M",.4619,.0371],["L",.4619,0],["L",.0591,0],["L",.0591,.0371],["Q",.0737,.0381,.1057,.042],["Q",.1377,.0459,.1494,.0498],["L",.1494,.0498],["Q",.1641,.0547,.1724,.0664],["Q",.1807,.0781,.1807,.0986],["L",.1807,.0986],["L",.1807,.4082],["L",.0571,.4082],["L",.0571,.4546],["L",.084,.4546],["Q",.1265,.4546,.1575,.4639],["Q",.1885,.4731,.209,.4863],["L",.209,.4863],["Q",.23,.5,.2434,.5146],["Q",.2568,.5293,.2646,.5405],["L",.2646,.5405],["L",.3506,.5405],["Q",.3491,.5088,.3477,.4663],["Q",.3462,.4238,.3462,.3901],["L",.3462,.3901],["L",.3462,.104],["Q",.3462,.0864,.3538,.0735],["Q",.3613,.0605,.3755,.0537],["L",.3755,.0537],["Q",.3882,.0479,.418,.043],["Q",.4478,.0381,.4619,.0371],["L",.4619,.0371]]},"2":{a:.6265,c:[["M",.583,.1338],["L",.583,0],["L",.0537,0],["L",.0537,.0884],["Q",.0884,.1235,.1296,.1526],["Q",.1709,.1816,.2134,.2041],["L",.2134,.2041],["Q",.2588,.228,.2896,.2468],["Q",.3203,.2656,.3379,.2861],["L",.3379,.2861],["Q",.3555,.3052,.363,.3276],["Q",.3706,.3501,.3706,.3779],["L",.3706,.3779],["Q",.3706,.4399,.3413,.4683],["Q",.312,.4966,.2637,.4966],["L",.2637,.4966],["Q",.2485,.4966,.2351,.4944],["Q",.2217,.4922,.207,.4863],["L",.207,.4863],["Q",.2144,.4644,.2212,.4409],["Q",.228,.4175,.228,.3887],["L",.228,.3887],["Q",.228,.354,.2031,.3335],["Q",.1782,.313,.1396,.313],["L",.1396,.313],["Q",.103,.313,.0813,.3369],["Q",.0596,.3608,.0596,.395],["L",.0596,.395],["Q",.0596,.4546,.1289,.498],["Q",.1982,.5415,.2979,.5415],["L",.2979,.5415],["Q",.4131,.5415,.4841,.502],["Q",.5552,.4624,.5552,.3745],["L",.5552,.3745],["Q",.5552,.3291,.5364,.3013],["Q",.5176,.2734,.481,.2524],["L",.481,.2524],["Q",.4482,.2334,.4084,.2212],["Q",.3687,.209,.3232,.1978],["L",.3232,.1978],["Q",.2749,.1855,.239,.1719],["Q",.2031,.1582,.1753,.1392],["L",.1753,.1392],["L",.1753,.1338],["L",.583,.1338]]},"5":{a:.5991,c:[["M",.4707,.2314],["L",.4707,.2314],["Q",.5073,.207,.5322,.1658],["Q",.5571,.1245,.5571,.0635],["L",.5571,.0635],["Q",.5571,-.0439,.4739,-.1121],["Q",.3906,-.1802,.2612,-.1802],["L",.2612,-.1802],["Q",.1611,-.1802,.0942,-.1372],["Q",.0273,-.0942,.0273,-.0356],["L",.0273,-.0356],["Q",.0273,-.001,.0496,.0229],["Q",.0718,.0469,.1089,.0469],["L",.1089,.0469],["Q",.1475,.0469,.1721,.0261],["Q",.1968,.0054,.1968,-.0293],["L",.1968,-.0293],["Q",.1968,-.0537,.1885,-.0825],["Q",.1802,-.1113,.1748,-.1265],["L",.1748,-.1265],["Q",.1865,-.1309,.2021,-.1331],["Q",.2178,-.1353,.2314,-.1353],["L",.2314,-.1353],["Q",.2593,-.1353,.2861,-.1228],["Q",.313,-.1104,.332,-.0864],["L",.332,-.0864],["Q",.354,-.0591,.3652,-.0217],["Q",.3765,.0156,.3765,.063],["L",.3765,.063],["Q",.3765,.1318,.3396,.176],["Q",.3027,.2202,.2441,.2202],["L",.2441,.2202],["Q",.1987,.2202,.168,.2019],["Q",.1372,.1836,.1128,.1538],["L",.1128,.1538],["L",.0747,.1665],["L",.1221,.5259],["L",.5347,.5259],["L",.5347,.3911],["L",.1572,.3911],["L",.1372,.23],["Q",.1636,.2466,.2051,.2617],["Q",.2466,.2769,.3027,.2769],["L",.3027,.2769],["Q",.3462,.2769,.3884,.2673],["Q",.4307,.2578,.4707,.2314]]},"8":{a:.6763,c:[["M",.6255,.1938],["L",.6255,.1938],["Q",.6255,.104,.5452,.043],["Q",.4648,-.0181,.3267,-.0181],["L",.3267,-.0181],["Q",.2031,-.0181,.127,.0342],["Q",.0508,.0864,.0508,.168],["L",.0508,.168],["Q",.0508,.231,.0916,.2717],["Q",.1323,.3125,.2202,.333],["L",.2202,.333],["Q",.1499,.3647,.114,.4131],["Q",.0781,.4614,.0781,.521],["L",.0781,.521],["Q",.0781,.6025,.156,.6577],["Q",.2339,.7129,.3486,.7129],["L",.3486,.7129],["Q",.46,.7129,.5291,.6641],["Q",.5981,.6152,.5981,.543],["L",.5981,.543],["Q",.5981,.4873,.5605,.4495],["Q",.5229,.4116,.4482,.3892],["L",.4482,.3892],["Q",.542,.3555,.5837,.3064],["Q",.6255,.2573,.6255,.1938],["M",.4351,.5439],["L",.4351,.5439],["Q",.4351,.6006,.4099,.6355],["Q",.3848,.6704,.3398,.6704],["L",.3398,.6704],["Q",.2974,.6704,.2695,.6406],["Q",.2417,.6108,.2417,.5645],["L",.2417,.5645],["Q",.2417,.5322,.2539,.5105],["Q",.2661,.4888,.2886,.4727],["L",.2886,.4727],["Q",.3091,.4575,.3464,.4395],["Q",.3838,.4214,.4131,.4067],["L",.4131,.4067],["Q",.4238,.4312,.4294,.4666],["Q",.4351,.502,.4351,.5439],["M",.4614,.1445],["L",.4614,.1445],["Q",.4614,.1787,.4468,.2012],["Q",.4321,.2236,.4048,.2417],["L",.4048,.2417],["Q",.3774,.2593,.3352,.2778],["Q",.293,.2964,.2549,.3154],["L",.2549,.3154],["Q",.2388,.2964,.2266,.2583],["Q",.2144,.2202,.2144,.1777],["L",.2144,.1777],["Q",.2144,.106,.249,.0654],["Q",.2837,.0249,.3403,.0249],["L",.3403,.0249],["Q",.397,.0249,.4292,.0581],["Q",.4614,.0913,.4614,.1445]]},F:{a:.6714,c:[["M",.6563,.6929],["L",.6563,.5078],["L",.6187,.5078],["Q",.6045,.5483,.5686,.594],["Q",.5327,.6396,.5005,.644],["L",.5005,.644],["Q",.4858,.646,.4614,.6475],["Q",.437,.6489,.4165,.6489],["L",.4165,.6489],["L",.3086,.6489],["L",.3086,.377],["L",.3774,.377],["Q",.4067,.377,.4282,.3835],["Q",.4497,.3901,.4663,.4072],["L",.4663,.4072],["Q",.4785,.4194,.49,.448],["Q",.5015,.4766,.5039,.4971],["L",.5039,.4971],["L",.541,.4971],["L",.541,.2056],["L",.5039,.2056],["Q",.502,.2275,.4888,.259],["Q",.4756,.2905,.4663,.3008],["L",.4663,.3008],["Q",.4521,.3164,.4302,.324],["Q",.4082,.3315,.3774,.3315],["L",.3774,.3315],["L",.3086,.3315],["L",.3086,.1021],["Q",.3086,.0845,.3152,.072],["Q",.3218,.0596,.3403,.0518],["L",.3403,.0518],["Q",.3511,.0474,.3699,.0437],["Q",.3887,.04,.4072,.0381],["L",.4072,.0381],["L",.4072,0],["L",.0337,0],["L",.0337,.0381],["Q",.0479,.0396,.0713,.0422],["Q",.0947,.0449,.104,.0488],["L",.104,.0488],["Q",.1216,.0557,.1284,.0679],["Q",.1353,.0801,.1353,.0991],["L",.1353,.0991],["L",.1353,.5879],["Q",.1353,.6045,.1292,.6169],["Q",.123,.6294,.104,.6377],["L",.104,.6377],["Q",.0903,.6436,.0679,.6484],["Q",.0454,.6533,.0337,.6548],["L",.0337,.6548],["L",.0337,.6929],["L",.6563,.6929]]},A:{a:.7583,c:[["M",.7856,.0381],["L",.7856,0],["L",.4082,0],["L",.4082,.0381],["Q",.4346,.04,.4702,.0476],["Q",.5059,.0552,.5059,.0664],["L",.5059,.0664],["Q",.5059,.0703,.5051,.0752],["Q",.5044,.0801,.501,.0884],["L",.501,.0884],["L",.4419,.2319],["L",.2026,.2319],["Q",.1943,.2119,.1843,.1851],["Q",.1743,.1582,.167,.1372],["L",.167,.1372],["Q",.1577,.1099,.156,.0977],["Q",.1543,.0854,.1543,.0806],["L",.1543,.0806],["Q",.1543,.0649,.178,.054],["Q",.2017,.043,.2568,.0381],["L",.2568,.0381],["L",.2568,0],["L",-.0273,0],["L",-.0273,.0381],["Q",-.0112,.0391,.009,.0432],["Q",.0293,.0474,.041,.0547],["L",.041,.0547],["Q",.061,.0664,.075,.0835],["Q",.0889,.1006,.0981,.124],["L",.0981,.124],["Q",.1548,.2612,.2117,.3989],["Q",.2686,.5366,.3374,.7026],["L",.3374,.7026],["L",.4351,.7026],["Q",.5308,.4673,.585,.3306],["Q",.6392,.1938,.6772,.104],["L",.6772,.104],["Q",.6836,.0894,.6934,.0774],["Q",.7031,.0654,.7212,.0547],["L",.7212,.0547],["Q",.7349,.0469,.7529,.043],["Q",.771,.0391,.7856,.0381],["L",.7856,.0381],["M",.2222,.2803],["L",.4219,.2803],["L",.3213,.5313],["L",.2222,.2803]]},B:{a:.7573,c:[["M",.6455,.3179],["L",.6455,.3179],["Q",.6768,.2964,.6963,.2639],["Q",.7158,.2314,.7158,.1875],["L",.7158,.1875],["Q",.7158,.1348,.6936,.0984],["Q",.6714,.062,.6299,.041],["L",.6299,.041],["Q",.5859,.0186,.5286,.0093],["Q",.4712,0,.3936,0],["L",.3936,0],["L",.0337,0],["L",.0337,.0381],["Q",.0488,.0396,.0718,.0425],["Q",.0947,.0454,.104,.0493],["L",.104,.0493],["Q",.1221,.0566,.1287,.0686],["Q",.1353,.0806,.1353,.0996],["L",.1353,.0996],["L",.1353,.5879],["Q",.1353,.6055,.1299,.6172],["Q",.1245,.6289,.104,.6377],["L",.104,.6377],["Q",.0889,.644,.0688,.6482],["Q",.0488,.6523,.0337,.6548],["L",.0337,.6548],["L",.0337,.6929],["L",.4102,.6929],["Q",.5522,.6929,.6152,.6538],["Q",.6782,.6147,.6782,.5386],["L",.6782,.5386],["Q",.6782,.5034,.6641,.4768],["Q",.6499,.4502,.6235,.4307],["L",.6235,.4307],["Q",.5996,.4126,.5664,.3994],["Q",.5332,.3862,.4951,.3774],["L",.4951,.3774],["L",.4951,.3682],["Q",.5332,.3643,.5742,.3513],["Q",.6152,.3384,.6455,.3179],["M",.4883,.5264],["L",.4883,.5264],["Q",.4883,.584,.4558,.6162],["Q",.4233,.6484,.3584,.6484],["L",.3584,.6484],["Q",.3491,.6484,.3342,.6477],["Q",.3193,.647,.3086,.6465],["L",.3086,.6465],["L",.3086,.3896],["L",.334,.3896],["Q",.4131,.3896,.4507,.4265],["Q",.4883,.4634,.4883,.5264],["M",.5225,.1938],["L",.5225,.1938],["Q",.5225,.2661,.4795,.3047],["Q",.4365,.3433,.356,.3433],["L",.356,.3433],["Q",.3467,.3433,.3313,.3425],["Q",.3159,.3418,.3086,.3413],["L",.3086,.3413],["L",.3086,.0879],["Q",.313,.0698,.3359,.0574],["Q",.3589,.0449,.3916,.0449],["L",.3916,.0449],["Q",.4497,.0449,.4861,.084],["Q",.5225,.123,.5225,.1938]]},L:{a:.6855,c:[["M",.6499,.2222],["L",.6855,.2222],["L",.6719,0],["L",.0337,0],["L",.0337,.0381],["Q",.0508,.0396,.0737,.0427],["Q",.0967,.0459,.104,.0488],["L",.104,.0488],["Q",.1216,.0557,.1284,.0679],["Q",.1353,.0801,.1353,.0991],["L",.1353,.0991],["L",.1353,.5879],["Q",.1353,.6055,.1299,.6169],["Q",.1245,.6284,.104,.6377],["L",.104,.6377],["Q",.0889,.6445,.0676,.6487],["Q",.0464,.6528,.0337,.6548],["L",.0337,.6548],["L",.0337,.6929],["L",.4141,.6929],["L",.4141,.6548],["Q",.3984,.6533,.3772,.6506],["Q",.356,.6479,.3403,.6431],["L",.3403,.6431],["Q",.3213,.6367,.3149,.6233],["Q",.3086,.6099,.3086,.5928],["L",.3086,.5928],["L",.3086,.1372],["Q",.3086,.105,.313,.0864],["Q",.3174,.0679,.3301,.0591],["L",.3301,.0591],["Q",.3428,.0498,.3655,.0471],["Q",.3882,.0444,.4282,.0444],["L",.4282,.0444],["Q",.4673,.0444,.5042,.0491],["Q",.541,.0537,.5571,.0693],["L",.5571,.0693],["Q",.582,.0942,.6082,.1394],["Q",.6343,.1846,.6499,.2222],["L",.6499,.2222]]},E:{a:.7212,c:[["M",.6479,.6929],["L",.6479,.5161],["L",.6108,.5161],["Q",.5967,.5557,.562,.5962],["Q",.5273,.6367,.4932,.644],["L",.4932,.644],["Q",.4785,.6475,.4524,.6482],["Q",.4263,.6489,.4092,.6489],["L",.4092,.6489],["L",.3086,.6489],["L",.3086,.3813],["L",.3799,.3813],["Q",.4067,.3813,.4287,.3877],["Q",.4507,.394,.4688,.4121],["L",.4688,.4121],["Q",.48,.4233,.4915,.4517],["Q",.5029,.48,.5063,.501],["L",.5063,.501],["L",.5435,.501],["L",.5435,.2119],["L",.5063,.2119],["Q",.5034,.2324,.4915,.2634],["Q",.4795,.2944,.4688,.3062],["L",.4688,.3062],["Q",.4526,.3237,.4307,.3303],["Q",.4087,.3369,.3799,.3369],["L",.3799,.3369],["L",.3086,.3369],["L",.3086,.1372],["Q",.3086,.106,.3132,.0876],["Q",.3179,.0693,.3306,.0596],["L",.3306,.0596],["Q",.3428,.0503,.364,.0474],["Q",.3853,.0444,.4219,.0444],["L",.4219,.0444],["Q",.439,.0444,.4629,.0449],["Q",.4868,.0454,.5049,.0479],["L",.5049,.0479],["Q",.5254,.0503,.5432,.0552],["Q",.561,.0601,.5698,.0693],["L",.5698,.0693],["Q",.5933,.0933,.6226,.1423],["Q",.6519,.1914,.6611,.2158],["L",.6611,.2158],["L",.6968,.2158],["L",.6836,0],["L",.0337,0],["L",.0337,.0381],["Q",.0474,.0391,.0708,.042],["Q",.0942,.0449,.104,.0488],["L",.104,.0488],["Q",.1226,.0566,.1289,.0686],["Q",.1353,.0806,.1353,.0991],["L",.1353,.0991],["L",.1353,.5879],["Q",.1353,.6055,.1299,.6169],["Q",.1245,.6284,.104,.6377],["L",.104,.6377],["Q",.0913,.6436,.0684,.6484],["Q",.0454,.6533,.0337,.6548],["L",.0337,.6548],["L",.0337,.6929],["L",.6479,.6929]]},".":{a:.3281,c:[["M",.2607,.0811],["L",.2607,.0811],["Q",.2607,.0425,.2322,.0142],["Q",.2036,-.0142,.1646,-.0142],["L",.1646,-.0142],["Q",.125,-.0142,.0964,.0139],["Q",.0679,.042,.0679,.0811],["L",.0679,.0811],["Q",.0679,.1201,.0964,.1487],["Q",.125,.1772,.1646,.1772],["L",.1646,.1772],["Q",.2036,.1772,.2322,.1484],["Q",.2607,.1196,.2607,.0811]]},M:{a:1.0234,c:[["M",.9858,.0381],["L",.9858,0],["L",.6104,0],["L",.6104,.0381],["Q",.627,.0396,.6511,.043],["Q",.6753,.0464,.6841,.0503],["L",.6841,.0503],["Q",.7021,.0576,.71,.0703],["Q",.7178,.083,.7178,.1025],["L",.7178,.1025],["L",.7178,.6201],["L",.4795,.0112],["L",.418,.0112],["Q",.4136,.0273,.3962,.0752],["Q",.3789,.123,.3682,.1519],["L",.3682,.1519],["L",.1929,.6279],["L",.1929,.2065],["Q",.1929,.146,.2009,.1145],["Q",.209,.083,.2271,.0684],["L",.2271,.0684],["Q",.2393,.0581,.2708,.0488],["Q",.3022,.0396,.3149,.0381],["L",.3149,.0381],["L",.3149,0],["L",.0171,0],["L",.0171,.0381],["Q",.0293,.0396,.0569,.0447],["Q",.0845,.0498,.1021,.0625],["L",.1021,.0625],["Q",.1216,.0762,.1284,.1086],["Q",.1353,.1411,.1353,.2012],["L",.1353,.2012],["L",.1353,.5444],["Q",.1353,.5757,.1274,.5964],["Q",.1196,.6172,.104,.6294],["L",.104,.6294],["Q",.0845,.6445,.064,.6489],["Q",.0435,.6533,.0225,.6548],["L",.0225,.6548],["L",.0225,.6929],["L",.3413,.6929],["L",.5122,.2354],["L",.6563,.6069],["Q",.6636,.6274,.6704,.6558],["Q",.6772,.6841,.6777,.6929],["L",.6777,.6929],["L",.9849,.6929],["L",.9849,.6548],["Q",.9692,.6538,.9521,.6509],["Q",.9351,.6479,.9194,.6431],["L",.9194,.6431],["Q",.9004,.6367,.8943,.623],["Q",.8882,.6094,.8882,.5928],["L",.8882,.5928],["L",.8882,.1021],["Q",.8882,.0845,.8943,.0725],["Q",.9004,.0605,.9194,.0518],["L",.9194,.0518],["Q",.9292,.0474,.9514,.0435],["Q",.9736,.0396,.9858,.0381],["L",.9858,.0381]]},K:{a:.8169,c:[["M",.8477,.0381],["L",.8477,0],["L",.5732,0],["Q",.5112,.0952,.4614,.1592],["Q",.4116,.2231,.334,.3198],["L",.334,.3198],["L",.3086,.3198],["L",.3086,.1021],["Q",.3086,.0845,.3149,.0723],["Q",.3213,.0601,.3403,.0518],["L",.3403,.0518],["Q",.3491,.0479,.3665,.0439],["Q",.3838,.04,.4009,.0381],["L",.4009,.0381],["L",.4009,0],["L",.0327,0],["L",.0327,.0381],["Q",.0459,.0391,.0701,.041],["Q",.0942,.043,.104,.0469],["L",.104,.0469],["Q",.1216,.0537,.1284,.0659],["Q",.1353,.0781,.1353,.0967],["L",.1353,.0967],["L",.1353,.5879],["Q",.1353,.605,.1294,.6167],["Q",.1235,.6284,.104,.6377],["L",.104,.6377],["Q",.0889,.6445,.0674,.6489],["Q",.0459,.6533,.0327,.6548],["L",.0327,.6548],["L",.0327,.6929],["L",.4131,.6929],["L",.4131,.6548],["Q",.3979,.6533,.3767,.6506],["Q",.3555,.6479,.3403,.6431],["L",.3403,.6431],["Q",.3213,.6367,.3149,.623],["Q",.3086,.6094,.3086,.5928],["L",.3086,.5928],["L",.3086,.3594],["L",.3291,.3594],["Q",.3672,.394,.418,.4429],["Q",.4688,.4917,.4966,.5229],["L",.4966,.5229],["Q",.5356,.5664,.554,.5918],["Q",.5723,.6172,.5723,.6357],["L",.5723,.6357],["Q",.5723,.644,.5547,.6484],["Q",.5371,.6528,.501,.6548],["L",.501,.6548],["L",.501,.6929],["L",.8022,.6929],["L",.8022,.6548],["Q",.7476,.6489,.7104,.635],["Q",.6733,.6211,.6367,.5884],["L",.6367,.5884],["Q",.5845,.5415,.5505,.5071],["Q",.5166,.4727,.4634,.4189],["L",.4634,.4189],["Q",.5103,.3618,.5762,.2791],["Q",.6421,.1963,.7075,.1177],["L",.7075,.1177],["Q",.7241,.0977,.7456,.0793],["Q",.7671,.061,.793,.0498],["L",.793,.0498],["Q",.8052,.0444,.8208,.0415],["Q",.8364,.0386,.8477,.0381],["L",.8477,.0381]]},x:{a:.5879,c:[["M",.585,.0356],["L",.585,0],["L",.2798,0],["L",.2798,.0356],["Q",.3037,.0371,.3198,.0398],["Q",.3359,.0425,.3359,.0508],["L",.3359,.0508],["Q",.3359,.0547,.3318,.063],["Q",.3276,.0713,.3213,.0815],["L",.3213,.0815],["Q",.312,.0967,.2893,.1294],["Q",.2666,.1621,.2466,.1899],["L",.2466,.1899],["Q",.2183,.1572,.1992,.1338],["Q",.1802,.1104,.1592,.0835],["L",.1592,.0835],["Q",.1519,.0747,.1489,.0674],["Q",.146,.0601,.146,.0586],["L",.146,.0586],["Q",.146,.0474,.1619,.0415],["Q",.1777,.0356,.1997,.0356],["L",.1997,.0356],["L",.1997,0],["L",.0015,0],["L",.0015,.0356],["Q",.041,.0439,.0647,.062],["Q",.0884,.0801,.0967,.0898],["L",.0967,.0898],["Q",.1323,.1279,.157,.1531],["Q",.1816,.1782,.2231,.2236],["L",.2231,.2236],["Q",.1953,.2622,.1558,.3179],["Q",.1162,.3735,.0898,.4092],["L",.0898,.4092],["Q",.0767,.4268,.0576,.4363],["Q",.0386,.4458,.0083,.4487],["L",.0083,.4487],["L",.0083,.4844],["L",.3066,.4844],["L",.3066,.4487],["Q",.2905,.4487,.2749,.4468],["Q",.2593,.4448,.2593,.4399],["L",.2593,.4399],["Q",.2593,.436,.2617,.4302],["Q",.2642,.4243,.2681,.418],["L",.2681,.418],["Q",.2773,.4023,.2974,.3721],["Q",.3174,.3418,.3403,.3086],["L",.3403,.3086],["Q",.3623,.3354,.3772,.3525],["Q",.3921,.3696,.4155,.4009],["L",.4155,.4009],["Q",.4243,.4126,.4265,.4185],["Q",.4287,.4243,.4287,.4258],["L",.4287,.4258],["Q",.4287,.4341,.4182,.4407],["Q",.4077,.4473,.377,.4487],["L",.377,.4487],["L",.377,.4844],["L",.5713,.4844],["L",.5713,.4487],["Q",.5474,.4448,.5249,.4326],["Q",.5024,.4204,.478,.3945],["L",.478,.3945],["Q",.4399,.355,.4226,.3367],["Q",.4053,.3184,.3652,.2759],["L",.3652,.2759],["Q",.3877,.2441,.4302,.1836],["Q",.4727,.123,.5034,.0815],["L",.5034,.0815],["Q",.5166,.063,.533,.0513],["Q",.5493,.0396,.585,.0356],["L",.585,.0356]]}," ":{a:.2539,c:[]},\u8AAD:{a:1,c:[["M",.4741,.4238],["L",.4741,.4238],["L",.8428,.4238],["Q",.8828,.4722,.894,.4722],["L",.894,.4722],["Q",.9058,.4722,.9521,.4287],["L",.9521,.4287],["Q",.9761,.4077,.9761,.397],["L",.9761,.397],["Q",.9761,.3823,.9419,.3735],["L",.9419,.3735],["Q",.9307,.3716,.9063,.3506],["L",.9063,.3506],["Q",.8691,.3203,.8433,.3027],["L",.8433,.3027],["Q",.8423,.3018,.8408,.3018],["L",.8408,.3018],["Q",.832,.3018,.832,.3091],["L",.832,.3091],["Q",.832,.3101,.8325,.3105],["L",.8325,.3105],["Q",.8491,.3618,.856,.4009],["L",.856,.4009],["L",.479,.4009],["Q",.481,.3887,.481,.3774],["L",.481,.3774],["Q",.481,.335,.46,.3096],["L",.46,.3096],["Q",.4409,.2871,.4102,.2871],["L",.4102,.2871],["Q",.3901,.2871,.3784,.3003],["L",.3784,.3003],["Q",.3682,.312,.3682,.3301],["L",.3682,.3301],["Q",.3682,.3506,.376,.3604],["L",.376,.3604],["Q",.3833,.3687,.4072,.3828],["L",.4072,.3828],["Q",.4307,.3979,.439,.4175],["L",.439,.4175],["Q",.4463,.4341,.4473,.4648],["L",.4473,.4648],["Q",.4473,.4692,.4526,.4692],["L",.4526,.4692],["Q",.4556,.4692,.457,.4668],["L",.457,.4668],["Q",.4678,.4448,.4741,.4238],["M",.9424,.6538],["L",.7012,.6538],["L",.7012,.5342],["L",.7822,.5342],["Q",.8291,.5898,.8413,.5898],["L",.8413,.5898],["Q",.8516,.5898,.8994,.5503],["L",.8994,.5503],["Q",.9233,.5308,.9233,.521],["L",.9233,.521],["Q",.9233,.5112,.9102,.5112],["L",.9102,.5112],["L",.4995,.5112],["Q",.4795,.5112,.4492,.5054],["L",.4492,.5054],["L",.4385,.542],["Q",.4731,.5342,.5024,.5342],["L",.5024,.5342],["L",.6084,.5342],["L",.6084,.6538],["L",.4604,.6538],["Q",.4434,.6538,.4165,.6479],["L",.4165,.6479],["L",.4053,.6846],["Q",.4331,.6768,.4585,.6768],["L",.4585,.6768],["L",.6084,.6768],["L",.6084,.7339],["Q",.6084,.7856,.6035,.834],["L",.6035,.834],["Q",.7334,.8218,.7334,.8032],["L",.7334,.8032],["Q",.7334,.7896,.7012,.7749],["L",.7012,.7749],["L",.7012,.6768],["L",.8101,.6768],["Q",.8569,.7319,.8691,.7319],["L",.8691,.7319],["Q",.8784,.7319,.9292,.6938],["L",.9292,.6938],["Q",.9551,.6724,.9551,.6636],["L",.9551,.6636],["Q",.9551,.6538,.9424,.6538],["L",.9424,.6538],["M",.2651,-.0283],["L",.2651,-.0132],["L",.167,-.0132],["L",.167,-.0493],["Q",.167,-.0864,.1162,-.0864],["L",.1162,-.0864],["Q",.0762,-.0864,.0762,-.0576],["L",.0762,-.0576],["L",.0811,.1431],["Q",.0811,.2261,.0752,.2808],["L",.0752,.2808],["Q",.1328,.2549,.1782,.231],["L",.1782,.231],["L",.2583,.231],["Q",.2949,.2749,.3062,.2749],["L",.3062,.2749],["Q",.3179,.2749,.3569,.2432],["L",.3569,.2432],["Q",.3779,.2261,.3779,.2158],["L",.3779,.2158],["Q",.3779,.2031,.3501,.1841],["L",.3501,.1841],["L",.3501,.1499],["L",.3521,-.02],["Q",.3521,-.0591,.3022,-.0591],["L",.3022,-.0591],["Q",.2651,-.0591,.2651,-.0283],["L",.2651,-.0283],["M",.167,.0098],["L",.2651,.0098],["L",.2651,.208],["L",.167,.208],["L",.167,.0098],["M",.3809,.748],["L",.3809,.748],["Q",.3809,.7378,.3682,.7378],["L",.3682,.7378],["L",.1479,.7378],["Q",.1255,.7378,.0908,.7319],["L",.0908,.7319],["L",.0801,.769],["Q",.1162,.7612,.1479,.7612],["L",.1479,.7612],["L",.2368,.7612],["Q",.2832,.8198,.2959,.8198],["L",.2959,.8198],["Q",.3066,.8198,.356,.7778],["L",.356,.7778],["Q",.3809,.7573,.3809,.748],["M",.3711,.479],["L",.3711,.479],["Q",.3711,.4692,.3579,.4692],["L",.3579,.4692],["L",.145,.4692],["Q",.124,.4692,.0938,.4634],["L",.0938,.4634],["L",.083,.5],["Q",.1162,.4922,.145,.4922],["L",.145,.4922],["L",.231,.4922],["Q",.2754,.5479,.2881,.5479],["L",.2881,.5479],["Q",.2983,.5479,.3462,.5088],["L",.3462,.5088],["Q",.3711,.4883,.3711,.479],["M",.3638,.3501],["L",.3638,.3501],["Q",.3638,.3398,.3511,.3398],["L",.3511,.3398],["L",.1431,.3398],["Q",.124,.3398,.0938,.334],["L",.0938,.334],["L",.083,.3711],["Q",.1162,.3628,.145,.3628],["L",.145,.3628],["L",.228,.3628],["Q",.272,.4189,.2847,.4189],["L",.2847,.4189],["Q",.2944,.4189,.3408,.3789],["L",.3408,.3789],["Q",.3638,.3589,.3638,.3501],["M",.9653,-.0039],["L",.9653,-.0039],["Q",.9653,-.0361,.9321,-.0527],["L",.9321,-.0527],["Q",.8999,-.0698,.8257,-.0698],["L",.8257,-.0698],["Q",.7402,-.0698,.7114,-.0459],["L",.7114,-.0459],["Q",.6855,-.0239,.6855,.0332],["L",.6855,.0332],["L",.6885,.1411],["Q",.6885,.2603,.6821,.3452],["L",.6821,.3452],["Q",.7671,.3354,.7856,.3306],["L",.7856,.3306],["Q",.8032,.3257,.8032,.3159],["L",.8032,.3159],["Q",.8032,.3018,.7754,.29],["L",.7754,.29],["L",.7754,.0449],["Q",.7754,.0244,.7852,.0186],["L",.7852,.0186],["Q",.7935,.0132,.8174,.0132],["L",.8174,.0132],["Q",.8486,.0132,.8682,.02],["L",.8682,.02],["Q",.8809,.0249,.8921,.0581],["L",.8921,.0581],["Q",.9019,.0854,.9189,.1558],["L",.9189,.1558],["Q",.9199,.1592,.9248,.1592],["L",.9248,.1592],["Q",.9312,.1592,.9312,.1548],["L",.9312,.1548],["L",.9312,.061],["Q",.9312,.0459,.9341,.041],["L",.9341,.041],["Q",.936,.0376,.9443,.0342],["L",.9443,.0342],["Q",.9653,.0234,.9653,-.0039],["M",.4111,.6157],["L",.4111,.6157],["Q",.4111,.606,.3979,.606],["L",.3979,.606],["L",.1147,.606],["Q",.0898,.606,.0542,.6001],["L",.0542,.6001],["L",.043,.6367],["Q",.0815,.6289,.1147,.6289],["L",.1147,.6289],["L",.2642,.6289],["Q",.3091,.6899,.3223,.6899],["L",.3223,.6899],["Q",.332,.6899,.3843,.6479],["L",.3843,.6479],["Q",.4111,.625,.4111,.6157],["M",.6401,.314],["L",.6401,.314],["Q",.6401,.3003,.6128,.2891],["L",.6128,.2891],["L",.6108,.2529],["Q",.6035,.1118,.5522,.041],["L",.5522,.041],["Q",.4941,-.0391,.3604,-.0801],["L",.3604,-.0801],["Q",.3521,-.082,.3521,-.0718],["L",.3521,-.0718],["Q",.3521,-.0698,.3535,-.0688],["L",.3535,-.0688],["Q",.4429,-.0146,.4839,.0688],["L",.4839,.0688],["Q",.5181,.1382,.5181,.2612],["L",.5181,.2612],["Q",.5181,.3066,.5142,.3452],["L",.5142,.3452],["Q",.5923,.3369,.6177,.3301],["L",.6177,.3301],["Q",.6401,.3237,.6401,.314]]},\u3080:{a:1,c:[["M",.6812,.1416],["L",.6812,.1509],["Q",.6553,.4292,.6553,.4487],["L",.6553,.4487],["Q",.6553,.5503,.7412,.5518],["L",.7412,.5518],["Q",.8169,.5532,.876,.4868],["L",.876,.4868],["Q",.916,.4409,.916,.3848],["L",.916,.3848],["Q",.916,.3574,.9023,.3418],["L",.9023,.3418],["Q",.8911,.3281,.874,.3281],["L",.874,.3281],["Q",.8491,.3281,.832,.3447],["L",.832,.3447],["Q",.8169,.3594,.7881,.3594],["L",.7881,.3594],["Q",.7842,.3599,.7788,.3599],["L",.7788,.3599],["L",.7393,.3589],["Q",.7251,.3589,.7251,.3647],["L",.7251,.3647],["Q",.7251,.3696,.7471,.3779],["L",.7471,.3779],["Q",.7661,.3853,.7959,.4028],["L",.7959,.4028],["Q",.8159,.4136,.8159,.4268],["L",.8159,.4268],["Q",.8159,.4624,.7861,.4907],["L",.7861,.4907],["Q",.7549,.522,.7222,.522],["L",.7222,.522],["Q",.7021,.522,.6919,.5049],["L",.6919,.5049],["Q",.6841,.4902,.6841,.4648],["L",.6841,.4648],["Q",.6841,.4053,.7017,.3291],["L",.7017,.3291],["Q",.7222,.2402,.7603,.1709],["L",.7603,.1709],["Q",.7827,.144,.7813,.104],["L",.7813,.104],["Q",.7783,.0508,.7231,.0171],["L",.7231,.0171],["Q",.6416,-.0332,.4795,-.0332],["L",.4795,-.0332],["Q",.353,-.0332,.2915,.0029],["L",.2915,.0029],["Q",.2354,.0352,.2354,.0981],["L",.2354,.0981],["Q",.2354,.147,.2671,.2061],["L",.2671,.2061],["Q",.2139,.2119,.187,.2402],["L",.187,.2402],["Q",.1582,.272,.1582,.3213],["L",.1582,.3213],["Q",.1582,.3691,.1914,.4019],["L",.1914,.4019],["Q",.2222,.4331,.2612,.4331],["L",.2612,.4331],["Q",.3081,.4331,.3232,.4111],["L",.3232,.4111],["Q",.3252,.4731,.3252,.4917],["L",.3252,.4917],["Q",.3252,.5132,.3242,.5298],["L",.3242,.5298],["Q",.252,.5181,.207,.5181],["L",.207,.5181],["Q",.1436,.5181,.1084,.5767],["L",.1084,.5767],["Q",.0972,.5933,.0972,.6016],["L",.0972,.6016],["Q",.0972,.6089,.103,.6089],["L",.103,.6089],["Q",.104,.6089,.105,.6089],["L",.105,.6089],["Q",.1084,.6079,.1157,.603],["L",.1157,.603],["Q",.125,.5967,.1323,.5928],["L",.1323,.5928],["Q",.1606,.5771,.1963,.5771],["L",.1963,.5771],["Q",.25,.5771,.3262,.5928],["L",.3262,.5928],["L",.3262,.6987],["Q",.3262,.7471,.2964,.75],["L",.2964,.75],["Q",.2764,.752,.2695,.752],["L",.2695,.752],["Q",.2563,.7529,.2563,.7598],["L",.2563,.7598],["Q",.2563,.7676,.2715,.7808],["L",.2715,.7808],["Q",.2939,.7998,.3213,.7998],["L",.3213,.7998],["Q",.3579,.7998,.3931,.7788],["L",.3931,.7788],["Q",.4263,.7588,.4272,.7388],["L",.4272,.7388],["Q",.4282,.7251,.4111,.7021],["L",.4111,.7021],["Q",.3975,.6831,.394,.6108],["L",.394,.6108],["Q",.4546,.6294,.4751,.6499],["L",.4751,.6499],["Q",.4873,.6621,.5122,.6641],["L",.5122,.6641],["Q",.5361,.6641,.5601,.6572],["L",.5601,.6572],["Q",.585,.6494,.585,.625],["L",.585,.625],["Q",.585,.6089,.5747,.6011],["L",.5747,.6011],["Q",.5664,.5947,.542,.5859],["L",.542,.5859],["Q",.4858,.5659,.3911,.542],["L",.3911,.542],["L",.3843,.377],["Q",.3862,.3398,.3862,.332],["L",.3862,.332],["Q",.3862,.2397,.3174,.2119],["L",.3174,.2119],["Q",.2852,.168,.2852,.1182],["L",.2852,.1182],["Q",.2852,.0752,.3252,.0586],["L",.3252,.0586],["Q",.3647,.042,.459,.042],["L",.459,.042],["Q",.5283,.042,.5752,.0547],["L",.5752,.0547],["Q",.6021,.062,.6367,.0791],["L",.6367,.0791],["Q",.6812,.1011,.6812,.1416],["L",.6812,.1416],["M",.2729,.4023],["L",.2729,.4023],["Q",.2437,.4023,.2261,.3862],["L",.2261,.3862],["Q",.2051,.3652,.2051,.3281],["L",.2051,.3281],["Q",.2051,.2954,.2251,.2754],["L",.2251,.2754],["Q",.2393,.2612,.269,.2612],["L",.269,.2612],["Q",.2944,.2612,.3101,.2832],["L",.3101,.2832],["Q",.3232,.3027,.3232,.3345],["L",.3232,.3345],["Q",.3232,.3701,.3062,.3872],["L",.3062,.3872],["Q",.291,.4023,.2729,.4023]]},\u8003:{a:1,c:[["M",.6421,.5112],["L",.6421,.5112],["L",.7881,.5112],["Q",.8481,.5771,.8599,.5771],["L",.8599,.5771],["Q",.8691,.5771,.9253,.5313],["L",.9253,.5313],["Q",.9521,.5098,.9521,.498],["L",.9521,.498],["Q",.9521,.4883,.939,.4883],["L",.939,.4883],["L",.6147,.4883],["Q",.5049,.3965,.3979,.332],["L",.3979,.332],["L",.3926,.313],["Q",.563,.3477,.6689,.3984],["L",.6689,.3984],["Q",.7188,.4214,.7461,.4443],["L",.7461,.4443],["Q",.8101,.3926,.8228,.3799],["L",.8228,.3799],["Q",.834,.3687,.834,.3604],["L",.834,.3604],["Q",.834,.3472,.8115,.3472],["L",.8115,.3472],["Q",.7998,.3472,.7852,.3511],["L",.7852,.3511],["Q",.5869,.2988,.3887,.2944],["L",.3887,.2944],["L",.3696,.2231],["L",.6938,.2231],["Q",.7397,.269,.75,.269],["L",.75,.269],["Q",.7612,.269,.8071,.229],["L",.8071,.229],["Q",.8301,.209,.8301,.1982],["L",.8301,.1982],["Q",.8301,.186,.791,.167],["L",.791,.167],["Q",.7637,.0142,.7271,-.0337],["L",.7271,-.0337],["Q",.7051,-.0669,.6655,-.0811],["L",.6655,-.0811],["Q",.6465,-.0889,.6079,-.0889],["L",.6079,-.0889],["Q",.5938,-.0889,.5903,-.083],["L",.5903,-.083],["Q",.5869,-.0786,.5825,-.0591],["L",.5825,-.0591],["Q",.5767,-.0332,.5513,-.0186],["L",.5513,-.0186],["Q",.5249,-.0034,.4556,.0161],["L",.4556,.0161],["Q",.4526,.0166,.4526,.0225],["L",.4526,.0225],["Q",.4526,.0332,.4575,.0322],["L",.4575,.0322],["Q",.5581,.02,.606,.02],["L",.606,.02],["Q",.6328,.02,.6426,.0244],["L",.6426,.0244],["Q",.6514,.0288,.6587,.042],["L",.6587,.042],["Q",.6802,.0781,.6987,.2002],["L",.6987,.2002],["L",.3628,.2002],["Q",.3555,.1719,.3477,.1489],["L",.3477,.1489],["Q",.3359,.1221,.2979,.1221],["L",.2979,.1221],["Q",.2476,.1221,.2476,.147],["L",.2476,.147],["Q",.2476,.1499,.2515,.166],["L",.2515,.166],["Q",.2749,.2319,.2866,.271],["L",.2866,.271],["Q",.1631,.208,.0327,.1724],["L",.0327,.1724],["Q",.0259,.1709,.0259,.1826],["L",.0259,.1826],["Q",.0259,.1855,.0278,.1865],["L",.0278,.1865],["Q",.1675,.2456,.3047,.3364],["L",.3047,.3364],["Q",.3193,.3926,.3247,.4312],["L",.3247,.4312],["L",.3955,.4004],["Q",.4448,.4351,.5049,.4883],["L",.5049,.4883],["L",.1279,.4883],["Q",.1001,.4883,.0596,.4824],["L",.0596,.4824],["L",.0488,.519],["Q",.0889,.5112,.1235,.5112],["L",.1235,.5112],["L",.3857,.5112],["L",.3857,.6553],["L",.2158,.6553],["Q",.1909,.6553,.1548,.6494],["L",.1548,.6494],["L",.1436,.686],["Q",.1812,.6782,.2129,.6782],["L",.2129,.6782],["L",.3857,.6782],["L",.3857,.7378],["Q",.3857,.7837,.3809,.8369],["L",.3809,.8369],["Q",.4683,.8291,.4966,.8193],["L",.4966,.8193],["Q",.5142,.8135,.5142,.8042],["L",.5142,.8042],["Q",.5142,.7905,.4819,.7788],["L",.4819,.7788],["L",.4819,.6782],["L",.541,.6782],["Q",.5903,.7329,.6021,.7329],["L",.6021,.7329],["Q",.6123,.7329,.6592,.6943],["L",.6592,.6943],["Q",.6777,.6787,.6821,.6704],["L",.6821,.6704],["Q",.7358,.7373,.772,.8062],["L",.772,.8062],["Q",.8828,.749,.8828,.731],["L",.8828,.731],["Q",.8828,.7129,.834,.7129],["L",.834,.7129],["Q",.751,.6079,.6421,.5112],["M",.4819,.5112],["L",.5308,.5112],["Q",.6045,.5791,.6689,.6553],["L",.6689,.6553],["L",.4819,.6553],["L",.4819,.5112]]},\u3048:{a:1,c:[["M",.3594,.8013],["L",.3594,.8013],["Q",.3594,.8091,.3633,.8091],["L",.3633,.8091],["Q",.3652,.8091,.3765,.7979],["L",.3765,.7979],["Q",.418,.7539,.5244,.751],["L",.5244,.751],["Q",.5791,.7505,.6128,.7275],["L",.6128,.7275],["Q",.6401,.7085,.6401,.6841],["L",.6401,.6841],["Q",.6401,.6479,.5972,.6479],["L",.5972,.6479],["L",.5552,.6509],["L",.5293,.6509],["Q",.5127,.6509,.4834,.644],["L",.4834,.644],["Q",.439,.6338,.3682,.6089],["L",.3682,.6089],["Q",.3574,.606,.354,.606],["L",.354,.606],["Q",.3472,.606,.3472,.6099],["L",.3472,.6099],["Q",.3472,.6162,.354,.6201],["L",.354,.6201],["Q",.3638,.6255,.3867,.6382],["L",.3867,.6382],["Q",.437,.667,.4644,.6841],["L",.4644,.6841],["Q",.4014,.709,.3765,.75],["L",.3765,.75],["Q",.3594,.7754,.3594,.8013],["M",.4272,.252],["L",.4272,.252],["Q",.4526,.2632,.4761,.2632],["L",.4761,.2632],["Q",.5151,.2632,.5381,.2417],["L",.5381,.2417],["Q",.5601,.2212,.5742,.1763],["L",.5742,.1763],["L",.5854,.1421],["Q",.5952,.1118,.6074,.0933],["L",.6074,.0933],["Q",.6216,.0703,.6733,.0703],["L",.6733,.0703],["Q",.7222,.0703,.7871,.083],["L",.7871,.083],["Q",.8076,.0869,.8242,.0869],["L",.8242,.0869],["Q",.8428,.0869,.8604,.082],["L",.8604,.082],["Q",.877,.0767,.8862,.0669],["L",.8862,.0669],["Q",.9023,.0527,.9023,.0278],["L",.9023,.0278],["Q",.9023,.0073,.874,-.0073],["L",.874,-.0073],["Q",.854,-.0176,.8306,-.02],["L",.8306,-.02],["Q",.7822,-.0259,.7153,-.0259],["L",.7153,-.0259],["Q",.6255,-.0259,.5874,-.0059],["L",.5874,-.0059],["Q",.5454,.0156,.5322,.0562],["L",.5322,.0562],["Q",.5259,.0747,.5093,.1509],["L",.5093,.1509],["Q",.4985,.2007,.4893,.2119],["L",.4893,.2119],["Q",.4731,.231,.4473,.231],["L",.4473,.231],["Q",.4287,.231,.4063,.2134],["L",.4063,.2134],["Q",.3857,.1978,.3472,.1572],["L",.3472,.1572],["Q",.2979,.105,.2241,-.0039],["L",.2241,-.0039],["Q",.2095,-.0259,.1851,-.0259],["L",.1851,-.0259],["Q",.1362,-.0259,.1362,.0361],["L",.1362,.0361],["Q",.1362,.0576,.165,.084],["L",.165,.084],["Q",.3223,.2339,.3652,.2783],["L",.3652,.2783],["Q",.458,.374,.499,.4194],["L",.499,.4194],["Q",.5127,.4341,.5405,.4702],["L",.5405,.4702],["Q",.543,.4736,.543,.4771],["L",.543,.4771],["Q",.543,.4849,.5342,.4849],["L",.5342,.4849],["Q",.5322,.4849,.5303,.4844],["L",.5303,.4844],["Q",.4438,.4517,.3779,.416],["L",.3779,.416],["Q",.3267,.3877,.3242,.3853],["L",.3242,.3853],["Q",.313,.374,.292,.374],["L",.292,.374],["Q",.27,.374,.249,.395],["L",.249,.395],["Q",.2275,.4165,.2183,.437],["L",.2183,.437],["Q",.208,.457,.208,.4722],["L",.208,.4722],["Q",.208,.4907,.2168,.5059],["L",.2168,.5059],["Q",.2246,.5181,.231,.5181],["L",.231,.5181],["Q",.2354,.5181,.2451,.499],["L",.2451,.499],["Q",.2642,.4619,.292,.4619],["L",.292,.4619],["Q",.3257,.4619,.498,.5229],["L",.498,.5229],["Q",.5239,.5332,.541,.5479],["L",.541,.5479],["Q",.5552,.5591,.5679,.5591],["L",.5679,.5591],["Q",.5957,.5591,.6382,.5269],["L",.6382,.5269],["Q",.6685,.5044,.6763,.4922],["L",.6763,.4922],["Q",.6821,.4834,.6821,.4692],["L",.6821,.4692],["Q",.6821,.4526,.6563,.4438],["L",.6563,.4438],["Q",.6304,.4346,.5981,.4131],["L",.5981,.4131],["Q",.584,.4028,.5483,.3701],["L",.5483,.3701],["Q",.5044,.3311,.4272,.252]]},\u308B:{a:1,c:[["M",.3662,.3472],["L",.3662,.3472],["L",.3672,.3452],["Q",.4624,.4292,.5703,.4292],["L",.5703,.4292],["Q",.6772,.4292,.7471,.3691],["L",.7471,.3691],["Q",.7778,.3433,.7964,.3022],["L",.7964,.3022],["Q",.813,.2646,.813,.2261],["L",.813,.2261],["Q",.813,.0996,.7119,.0293],["L",.7119,.0293],["Q",.6274,-.0298,.5142,-.0298],["L",.5142,-.0298],["Q",.4219,-.0298,.376,0],["L",.376,0],["Q",.3252,.0337,.3252,.0923],["L",.3252,.0923],["Q",.3252,.1372,.3604,.1631],["L",.3604,.1631],["Q",.394,.187,.4434,.187],["L",.4434,.187],["Q",.5063,.187,.5571,.1362],["L",.5571,.1362],["Q",.5923,.0991,.6084,.0532],["L",.6084,.0532],["Q",.6514,.0708,.6777,.104],["L",.6777,.104],["Q",.7139,.1484,.7139,.2251],["L",.7139,.2251],["Q",.7139,.2979,.665,.3452],["L",.665,.3452],["Q",.6255,.3833,.5518,.3833],["L",.5518,.3833],["Q",.4653,.3833,.3906,.3262],["L",.3906,.3262],["Q",.335,.2837,.2759,.2012],["L",.2759,.2012],["Q",.2476,.1611,.2271,.1611],["L",.2271,.1611],["Q",.2119,.1611,.1982,.1733],["L",.1982,.1733],["Q",.1802,.1875,.1802,.21],["L",.1802,.21],["Q",.1802,.2363,.1992,.2554],["L",.1992,.2554],["Q",.3223,.3867,.3906,.4673],["L",.3906,.4673],["Q",.4634,.5537,.5459,.6646],["L",.5459,.6646],["Q",.5571,.6802,.5571,.6846],["L",.5571,.6846],["Q",.5571,.6919,.5488,.6919],["L",.5488,.6919],["Q",.5469,.6919,.5449,.6914],["L",.5449,.6914],["Q",.5098,.6816,.4399,.6489],["L",.4399,.6489],["Q",.418,.6382,.3833,.6201],["L",.3833,.6201],["Q",.3633,.6001,.3423,.6001],["L",.3423,.6001],["Q",.3184,.6001,.2974,.624],["L",.2974,.624],["Q",.2583,.6694,.2583,.6997],["L",.2583,.6997],["Q",.2583,.7124,.2642,.7256],["L",.2642,.7256],["Q",.2695,.7368,.2744,.7368],["L",.2744,.7368],["Q",.2793,.7368,.2925,.7188],["L",.2925,.7188],["Q",.3145,.6899,.3345,.6899],["L",.3345,.6899],["Q",.3838,.6899,.5049,.73],["L",.5049,.73],["Q",.5405,.7412,.5532,.7559],["L",.5532,.7559],["Q",.5645,.769,.5801,.769],["L",.5801,.769],["Q",.6191,.769,.6699,.7271],["L",.6699,.7271],["Q",.689,.7114,.689,.6919],["L",.689,.6919],["Q",.689,.6748,.6729,.666],["L",.6729,.666],["Q",.644,.6494,.6338,.6411],["L",.6338,.6411],["Q",.5894,.6025,.4971,.4951],["L",.4971,.4951],["Q",.4771,.4722,.4287,.418],["L",.4287,.418],["Q",.3916,.377,.3662,.3472],["M",.5303,.0332],["L",.5303,.0332],["Q",.5161,.0898,.4834,.1201],["L",.4834,.1201],["Q",.4512,.1489,.4204,.1489],["L",.4204,.1489],["Q",.3882,.1489,.374,.1318],["L",.374,.1318],["Q",.3643,.1187,.3643,.1001],["L",.3643,.1001],["Q",.3643,.0664,.3931,.0493],["L",.3931,.0493],["Q",.4258,.0303,.4873,.0303],["L",.4873,.0303],["Q",.5151,.0303,.5303,.0332]]},\u3084:{a:1,c:[["M",.3511,.4849],["L",.3511,.4849],["Q",.3716,.4966,.4082,.5151],["L",.4082,.5151],["Q",.4399,.5317,.4551,.54],["L",.4551,.54],["Q",.5332,.5815,.6123,.6079],["L",.6123,.6079],["Q",.6831,.6309,.7251,.6309],["L",.7251,.6309],["Q",.8262,.6309,.873,.583],["L",.873,.583],["Q",.917,.5361,.917,.4771],["L",.917,.4771],["Q",.917,.395,.8398,.3462],["L",.8398,.3462],["Q",.7773,.3062,.6938,.3062],["L",.6938,.3062],["Q",.5723,.3062,.4722,.3691],["L",.4722,.3691],["Q",.4541,.3804,.4541,.3882],["L",.4541,.3882],["Q",.4541,.3921,.4619,.3921],["L",.4619,.3921],["Q",.4648,.3921,.4741,.3896],["L",.4741,.3896],["Q",.4849,.3862,.4902,.3853],["L",.4902,.3853],["Q",.5557,.3701,.6001,.3701],["L",.6001,.3701],["Q",.6123,.3701,.627,.3711],["L",.627,.3711],["Q",.7026,.376,.7612,.4058],["L",.7612,.4058],["Q",.834,.4448,.834,.5049],["L",.834,.5049],["Q",.834,.54,.813,.561],["L",.813,.561],["Q",.7822,.5928,.7251,.5928],["L",.7251,.5928],["Q",.6362,.5928,.4639,.4907],["L",.4639,.4907],["Q",.4487,.4819,.4175,.4629],["L",.4175,.4629],["Q",.3901,.4458,.375,.437],["L",.375,.437],["Q",.415,.3608,.4351,.3223],["L",.4351,.3223],["Q",.498,.1987,.5449,.084],["L",.5449,.084],["Q",.562,.043,.562,.0073],["L",.562,.0073],["Q",.562,-.02,.543,-.0361],["L",.543,-.0361],["Q",.5288,-.0479,.5117,-.0479],["L",.5117,-.0479],["Q",.4956,-.0479,.4819,-.0381],["L",.4819,-.0381],["Q",.4731,-.0313,.4683,-.0146],["L",.4683,-.0146],["Q",.4668,-.0107,.4644,0],["L",.4644,0],["Q",.4624,.0078,.4609,.0122],["L",.4609,.0122],["Q",.4214,.147,.3994,.21],["L",.3994,.21],["Q",.3687,.2969,.3218,.4019],["L",.3218,.4019],["Q",.2813,.3726,.272,.3647],["L",.272,.3647],["Q",.2271,.3262,.2227,.3198],["L",.2227,.3198],["Q",.2109,.3018,.188,.3018],["L",.188,.3018],["Q",.1553,.3018,.1118,.335],["L",.1118,.335],["Q",.0669,.3701,.0669,.4028],["L",.0669,.4028],["Q",.0669,.4238,.0757,.4238],["L",.0757,.4238],["Q",.0786,.4238,.0918,.4146],["L",.0918,.4146],["Q",.1245,.3916,.1489,.3916],["L",.1489,.3916],["Q",.1655,.3916,.2329,.4248],["L",.2329,.4248],["Q",.2529,.4341,.292,.457],["L",.292,.457],["Q",.2783,.4844,.251,.5229],["L",.251,.5229],["Q",.2339,.5483,.2339,.5708],["L",.2339,.5708],["Q",.2339,.6172,.2671,.6499],["L",.2671,.6499],["Q",.291,.6738,.3179,.6738],["L",.3179,.6738],["Q",.3667,.6826,.4561,.689],["L",.4561,.689],["Q",.4268,.7441,.4268,.771],["L",.4268,.771],["Q",.4268,.792,.4336,.8066],["L",.4336,.8066],["Q",.4395,.8188,.4458,.8188],["L",.4458,.8188],["Q",.4536,.8188,.458,.8018],["L",.458,.8018],["Q",.4614,.7886,.4819,.7627],["L",.4819,.7627],["Q",.4893,.7529,.5342,.7178],["L",.5342,.7178],["Q",.5781,.6885,.5781,.6411],["L",.5781,.6411],["Q",.5781,.606,.543,.606],["L",.543,.606],["Q",.5234,.606,.5,.623],["L",.5,.623],["Q",.4727,.6382,.4263,.647],["L",.4263,.647],["Q",.396,.6528,.3677,.6528],["L",.3677,.6528],["Q",.3525,.6528,.3398,.6509],["L",.3398,.6509],["Q",.2959,.6445,.2959,.6079],["L",.2959,.6079],["Q",.2959,.5859,.3037,.5698],["L",.3037,.5698],["Q",.3193,.5391,.3511,.4849]]},\u308A:{a:1,c:[["M",.3711,.3701],["L",.3711,.3701],["Q",.3965,.4507,.4282,.5332],["L",.4282,.5332],["Q",.4536,.603,.4829,.644],["L",.4829,.644],["Q",.5166,.6899,.5679,.6899],["L",.5679,.6899],["Q",.6372,.6899,.6802,.6191],["L",.6802,.6191],["Q",.729,.5376,.729,.4121],["L",.729,.4121],["Q",.729,.2446,.6602,.146],["L",.6602,.146],["Q",.606,.0679,.5298,.022],["L",.5298,.022],["Q",.4575,-.0229,.3579,-.0483],["L",.3579,-.0483],["Q",.3403,-.0532,.3291,-.0532],["L",.3291,-.0532],["Q",.3159,-.0532,.3159,-.043],["L",.3159,-.043],["Q",.3159,-.0376,.334,-.0303],["L",.334,-.0303],["Q",.4951,.0322,.5708,.1519],["L",.5708,.1519],["Q",.6079,.2104,.6216,.2754],["L",.6216,.2754],["Q",.6338,.3335,.6338,.4248],["L",.6338,.4248],["Q",.6338,.5342,.6138,.5908],["L",.6138,.5908],["Q",.5938,.6489,.5518,.6489],["L",.5518,.6489],["Q",.5107,.6489,.4829,.5972],["L",.4829,.5972],["Q",.4536,.5425,.4219,.4077],["L",.4219,.4077],["Q",.4038,.3325,.4028,.3008],["L",.4028,.3008],["Q",.4028,.2954,.4028,.2935],["L",.4028,.2935],["L",.4082,.2339],["Q",.4082,.1968,.373,.1968],["L",.373,.1968],["Q",.3511,.1968,.3325,.2207],["L",.3325,.2207],["Q",.3164,.2402,.3081,.27],["L",.3081,.27],["Q",.2939,.3159,.2939,.4038],["L",.2939,.4038],["Q",.2939,.48,.3184,.6221],["L",.3184,.6221],["Q",.3262,.6719,.3262,.708],["L",.3262,.708],["Q",.3262,.7373,.3003,.769],["L",.3003,.769],["Q",.292,.7788,.292,.7817],["L",.292,.7817],["Q",.292,.7939,.314,.7939],["L",.314,.7939],["Q",.3257,.7939,.3428,.7817],["L",.3428,.7817],["Q",.3872,.7505,.4087,.7051],["L",.4087,.7051],["Q",.4209,.6812,.4209,.6621],["L",.4209,.6621],["Q",.4209,.6431,.4077,.6299],["L",.4077,.6299],["Q",.3989,.6211,.3911,.6001],["L",.3911,.6001],["Q",.355,.4937,.355,.4263],["L",.355,.4263],["Q",.355,.3813,.3579,.3682],["L",.3579,.3682],["Q",.3594,.3628,.3633,.3628],["L",.3633,.3628],["Q",.3687,.3628,.3711,.3701]]},\u629C:{a:1,c:[["M",.2642,.582],["L",.2642,.3901],["Q",.3091,.4028,.3721,.4253],["L",.3721,.4253],["Q",.3726,.4258,.373,.4258],["L",.373,.4258],["Q",.3779,.4258,.3779,.4185],["L",.3779,.4185],["Q",.3779,.415,.376,.4136],["L",.376,.4136],["Q",.3169,.3726,.2642,.3408],["L",.2642,.3408],["L",.2642,.2402],["L",.2651,.0151],["Q",.2651,-.0278,.249,-.0508],["L",.249,-.0508],["Q",.2241,-.0859,.1572,-.0859],["L",.1572,-.0859],["Q",.1436,-.0859,.1421,-.0649],["L",.1421,-.0649],["Q",.1406,-.0332,.1196,-.019],["L",.1196,-.019],["Q",.1016,-.0068,.0469,.0088],["L",.0469,.0088],["Q",.0435,.0098,.0435,.0156],["L",.0435,.0156],["Q",.0435,.022,.0469,.022],["L",.0469,.022],["Q",.1162,.0171,.1602,.0171],["L",.1602,.0171],["Q",.1699,.0171,.1724,.02],["L",.1724,.02],["Q",.1743,.0225,.1743,.0322],["L",.1743,.0322],["L",.1743,.293],["Q",.1455,.2788,.1069,.2622],["L",.1069,.2622],["Q",.103,.2261,.0869,.2261],["L",.0869,.2261],["Q",.0771,.2261,.0684,.2471],["L",.0684,.2471],["Q",.0601,.2681,.0371,.3418],["L",.0371,.3418],["Q",.0522,.3428,.106,.3521],["L",.106,.3521],["Q",.124,.355,.1743,.3662],["L",.1743,.3662],["L",.1743,.582],["L",.1133,.582],["Q",.0928,.582,.061,.5762],["L",.061,.5762],["L",.0503,.6128],["Q",.0835,.605,.1123,.605],["L",.1123,.605],["L",.1743,.605],["L",.1743,.7139],["Q",.1743,.7871,.1689,.832],["L",.1689,.832],["Q",.249,.8247,.2734,.8179],["L",.2734,.8179],["Q",.2964,.812,.2964,.7998],["L",.2964,.7998],["Q",.2964,.7832,.2642,.7729],["L",.2642,.7729],["L",.2642,.605],["L",.2661,.605],["Q",.3042,.6553,.3169,.6553],["L",.3169,.6553],["Q",.3267,.6553,.3643,.6201],["L",.3643,.6201],["Q",.3833,.6011,.3833,.5923],["L",.3833,.5923],["Q",.3833,.582,.3701,.582],["L",.3701,.582],["L",.2642,.582],["M",.5449,.3784],["L",.5449,.3784],["Q",.5313,.3242,.5146,.2764],["L",.5146,.2764],["Q",.4419,.0718,.2832,-.0503],["L",.2832,-.0503],["Q",.2827,-.0508,.2817,-.0508],["L",.2817,-.0508],["Q",.2729,-.0508,.2729,-.041],["L",.2729,-.041],["Q",.2729,-.04,.2734,-.0391],["L",.2734,-.0391],["Q",.3936,.1157,.4448,.3101],["L",.4448,.3101],["Q",.4795,.437,.4907,.5991],["L",.4907,.5991],["L",.4541,.5991],["Q",.4312,.5991,.395,.5933],["L",.395,.5933],["L",.3838,.6299],["Q",.4214,.6221,.4541,.6221],["L",.4541,.6221],["L",.4927,.6221],["Q",.4971,.6758,.4971,.7393],["L",.4971,.7393],["Q",.4971,.7749,.4927,.8271],["L",.4927,.8271],["Q",.583,.8149,.6055,.8086],["L",.6055,.8086],["Q",.626,.8022,.626,.791],["L",.626,.791],["Q",.626,.7764,.5918,.7651],["L",.5918,.7651],["Q",.5889,.6904,.583,.6221],["L",.583,.6221],["L",.7969,.6221],["Q",.8516,.688,.8638,.688],["L",.8638,.688],["Q",.874,.688,.9307,.6421],["L",.9307,.6421],["Q",.96,.6187,.96,.6089],["L",.96,.6089],["Q",.96,.5991,.9468,.5991],["L",.9468,.5991],["L",.5811,.5991],["Q",.5732,.5244,.5601,.4492],["L",.5601,.4492],["L",.75,.4492],["Q",.7876,.4971,.7988,.4971],["L",.7988,.4971],["Q",.8101,.4971,.854,.459],["L",.854,.459],["Q",.877,.4375,.877,.4282],["L",.877,.4282],["Q",.877,.4165,.8447,.3984],["L",.8447,.3984],["Q",.8042,.2573,.7251,.1582],["L",.7251,.1582],["Q",.8306,.0737,.9795,.0464],["L",.9795,.0464],["Q",.9829,.0454,.9829,.041],["L",.9829,.041],["Q",.9829,.0352,.9785,.0332],["L",.9785,.0332],["Q",.9365,.0161,.9146,-.0415],["L",.9146,-.0415],["Q",.9082,-.0576,.8984,-.0576],["L",.8984,-.0576],["Q",.8877,-.0576,.8486,-.0356],["L",.8486,-.0356],["Q",.7412,.0239,.6738,.1021],["L",.6738,.1021],["Q",.5537,-.0132,.3584,-.0596],["L",.3584,-.0596],["Q",.3555,-.0601,.3525,-.0566],["L",.3525,-.0566],["Q",.3501,-.0537,.3501,-.0508],["L",.3501,-.0508],["Q",.3501,-.0493,.3511,-.0488],["L",.3511,-.0488],["Q",.5313,.0415,.6289,.1611],["L",.6289,.1611],["Q",.5645,.2627,.5449,.3784],["M",.666,.2124],["L",.666,.2124],["Q",.7266,.3057,.752,.4263],["L",.752,.4263],["L",.5562,.4263],["Q",.5781,.313,.666,.2124]]},\u304F:{a:1,c:[["M",.5146,.6812],["L",.5146,.6812],["Q",.543,.7124,.543,.73],["L",.543,.73],["Q",.543,.7393,.5317,.7529],["L",.5317,.7529],["Q",.5249,.7617,.5049,.7769],["L",.5049,.7769],["Q",.4956,.7822,.4956,.7886],["L",.4956,.7886],["Q",.4956,.8018,.5327,.8018],["L",.5327,.8018],["Q",.5845,.8018,.6377,.7388],["L",.6377,.7388],["Q",.6626,.709,.6626,.6826],["L",.6626,.6826],["Q",.6626,.6563,.6357,.646],["L",.6357,.646],["Q",.5898,.6289,.5166,.5698],["L",.5166,.5698],["Q",.3882,.4663,.3447,.4238],["L",.3447,.4238],["Q",.3198,.3989,.3198,.3906],["L",.3198,.3906],["Q",.3198,.3828,.333,.3677],["L",.333,.3677],["Q",.3447,.354,.3857,.3262],["L",.3857,.3262],["Q",.5674,.2026,.6318,.1279],["L",.6318,.1279],["Q",.6899,.0605,.6899,.0181],["L",.6899,.0181],["Q",.6899,-.0127,.6787,-.0269],["L",.6787,-.0269],["Q",.6675,-.043,.6377,-.043],["L",.6377,-.043],["Q",.6162,-.043,.585,.0059],["L",.585,.0059],["Q",.4897,.1553,.3018,.3091],["L",.3018,.3091],["Q",.2588,.3438,.2588,.3799],["L",.2588,.3799],["Q",.2588,.4102,.2788,.4331],["L",.2788,.4331],["Q",.2979,.457,.4116,.5698],["L",.4116,.5698],["Q",.459,.6172,.5146,.6812]]},\u3064:{a:1,c:[["M",.4043,.5698],["L",.4043,.5698],["Q",.5278,.627,.6152,.627],["L",.6152,.627],["Q",.6797,.627,.7246,.6113],["L",.7246,.6113],["Q",.7651,.5972,.8052,.5659],["L",.8052,.5659],["Q",.8579,.5249,.8789,.4766],["L",.8789,.4766],["Q",.8975,.4331,.8975,.3711],["L",.8975,.3711],["Q",.8975,.2349,.7705,.1553],["L",.7705,.1553],["Q",.6909,.1055,.5933,.0811],["L",.5933,.0811],["Q",.459,.0488,.3521,.0503],["L",.3521,.0503],["Q",.3281,.0503,.3281,.0625],["L",.3281,.0625],["Q",.3281,.0718,.3501,.0742],["L",.3501,.0742],["Q",.4966,.0918,.6191,.1582],["L",.6191,.1582],["Q",.7075,.2065,.7568,.2764],["L",.7568,.2764],["Q",.8013,.3394,.8013,.4043],["L",.8013,.4043],["Q",.8013,.481,.7524,.5303],["L",.7524,.5303],["Q",.7012,.5811,.6074,.5811],["L",.6074,.5811],["Q",.499,.5811,.3203,.4438],["L",.3203,.4438],["Q",.269,.4058,.2451,.375],["L",.2451,.375],["Q",.2261,.3511,.1992,.3511],["L",.1992,.3511],["Q",.1758,.3511,.146,.3706],["L",.146,.3706],["Q",.1211,.3872,.103,.4102],["L",.103,.4102],["Q",.0742,.4463,.0742,.4692],["L",.0742,.4692],["Q",.0742,.498,.084,.498],["L",.084,.498],["Q",.0889,.498,.0991,.4888],["L",.0991,.4888],["Q",.1348,.46,.1553,.46],["L",.1553,.46],["Q",.1699,.46,.1851,.4673],["L",.1851,.4673],["Q",.2212,.4829,.2393,.4922],["L",.2393,.4922],["Q",.3413,.543,.4043,.5698]]}};var Qh=30,Oh=67.2,Lf=Math.round(Qh*Oh),ii=1920,si=1080,oc=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Te=(i,e,t)=>oc((i-e)/(t-e)),Vt=i=>1-Math.pow(1-i,3),sn=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Zi=i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),gt=(i,e,t)=>i+(e-i)*t,tt=i=>document.getElementById(i);function Ta(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var bi=(i,e)=>{let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)},Nh=(i,e)=>{let t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,a=s*s*(3-2*s),o=r*r*(3-2*r);return gt(gt(bi(t,n),bi(t+1,n),a),gt(bi(t,n+1),bi(t+1,n+1),a),o)},$1=(i,e)=>Nh(i,e)*.55+Nh(i*2.1+5,e*2.1+3)*.28+Nh(i*4.3+9,e*4.3+7)*.17;var Rf=460815,wi=new Bl({canvas:tt("gl"),antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});wi.setPixelRatio(1);wi.setSize(ii,si,!1);wi.toneMapping=Qi;wi.toneMappingExposure=1.15;wi.shadowMap.enabled=!0;wi.shadowMap.type=qo;var dn=new fi;dn.background=new be(Rf);dn.fog=new Sr(Rf,.016);dn.environment=new Ws(wi).fromScene(new Wl,.04).texture;dn.environmentIntensity=.55;var Ti=new zt(42,ii/si,.1,600);dn.add(Ti);dn.add(new Bs(9676543,1708552,.7));var ji=new ki(16768184,1.9);ji.position.set(14,22,10);ji.castShadow=!0;ji.shadow.mapSize.set(2048,2048);Object.assign(ji.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:90});ji.shadow.bias=-5e-4;ji.shadow.normalBias=.04;dn.add(ji);var Ea=new Vl(wi,new Et(ii,si,{type:Rt,samples:4}));Ea.addPass(new xa(dn,Ti));var $i=new fi,K1=new zt(42,ii/si,.1,100);$i.environment=dn.environment;$i.environmentIntensity=.35;$i.add(new Bs(16777215,2236996,.35));{let i=new ki(16769732,1.25);i.position.set(-3,5,8),$i.add(i);let e=new ki(16751206,.7);e.position.set(6,-2,4),$i.add(e)}var Wh=new xa($i,K1);Wh.clear=!1;Wh.clearDepth=!0;Ea.addPass(Wh);var Xl=new Ys(new ee(ii,si),.5,.7,1);Ea.addPass(Xl);Ea.addPass(new Ql);var Cf=[],Gn=i=>(i.visible=!1,i.parent||dn.add(i),Cf.push(i),i),ut=new bt,zn=new be;function j1(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Ls(i)}var lc=j1();{let i=Ta(3),e=2600,t=new Float32Array(e*3);for(let s=0;s<e;s++){let r=i()*2-1,a=i()*6.2832,o=170+i()*120,l=Math.sqrt(1-r*r);t.set([Math.cos(a)*l*o,r*o,Math.sin(a)*l*o],s*3)}let n=new vt;n.setAttribute("position",new Gt(t,3)),dn.add(new As(n,new Fi({color:12568831,size:2.2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.75,map:lc,depthWrite:!1})))}function ex(i){let e=new $r;for(let t of Dh[i].c)t[0]==="M"?e.moveTo(t[1],t[2]):t[0]==="L"?e.lineTo(t[1],t[2]):t[0]==="Q"?e.quadraticCurveTo(t[1],t[2],t[3],t[4]):t[0]==="C"&&e.bezierCurveTo(t[1],t[2],t[3],t[4],t[5],t[6]);return e.toShapes(!1)}function Xh(i,e,t,n){let s=new jt,r=[],a=0;return[...i].forEach((o,l)=>{if(o!==" "){let c=new kr(ex(o),{depth:t/e,curveSegments:6,bevelEnabled:!0,bevelThickness:.028,bevelSize:.016,bevelSegments:3});c.scale(e,e,e),c.computeBoundingBox();let h=c.boundingBox,d=(h.min.x+h.max.x)/2,u=(h.min.y+h.max.y)/2;c.translate(-d,-u,-t/2);let f=new rt(c,n(o,l));f.castShadow=!0,f.userData.base=new C(a+d,u,0),r.push(f),s.add(f)}a+=Dh[o].a*e}),r.forEach(o=>{o.userData.base.x-=a/2,o.position.copy(o.userData.base)}),s.userData.items=r,s.userData.width=a,s}var Pf=new Ot({color:16762490,metalness:1,roughness:.24,emissive:3809798,emissiveIntensity:.5}),tx=new Ot({color:15784372,metalness:.3,roughness:.38,emissive:4861976,emissiveIntensity:.25}),nx=new Ot({color:15895132,metalness:1,roughness:.22,emissive:8006672,emissiveIntensity:.5}),ql=Gn(new jt),Bh=new rt(new Ds(1,0),new Wr({color:16757642,emissive:15233087,emissiveIntensity:1,metalness:.15,roughness:.1,flatShading:!0,clearcoat:1})),If=new rt(new Ds(1.38,1),new Ht({color:new be(1.6,.8,.5),wireframe:!0,transparent:!0,opacity:.32})),Df=new Ts(new Ui({map:lc,color:16747093,blending:Kn,depthWrite:!1,transparent:!0,opacity:.55}));Df.scale.set(7,7,1);var ix=new Gi(16751206,40,40);ql.add(Bh,If,Df,ix);function ya(i,e,t,n,s){ql.visible=n>.001,ql.position.set(i,e,t),ql.scale.setScalar(Math.max(n,.001)),Bh.rotation.set(s*.4,s*.6,0),If.rotation.set(-s*.3,s*.2,s*.1),Bh.material.emissiveIntensity=.9+.35*Math.sin(s*2.4)}var er=8e3,Yl=new Float32Array(er*3),Zl=new Float32Array(er*3),Nf=new Float32Array(er),Jl=new Float32Array(er*3);{let i=Ta(11);for(let e=0;e<er;e++){let t=()=>{let a=i()*2-1,o=i()*6.2832,l=Math.sqrt(1-a*a);return[Math.cos(o)*l,a,Math.sin(o)*l]},n=t(),s=t(),r=5+i()*14;Yl.set([n[0]*r,n[1]*r*.7,n[2]*r],e*3),Zl.set([s[0]*1.05,s[1]*1.05,s[2]*1.05],e*3),Nf[e]=i()}}var qh=new vt;qh.setAttribute("position",new Gt(Jl,3));var Yh=Gn(new As(qh,new Fi({color:new be(1.7,.95,.55),size:.09,map:lc,transparent:!0,blending:Kn,depthWrite:!1})));Yh.frustumCulled=!1;function sx(i){let e=Vt(Te(i,3.45,4.6));for(let t=0;t<er;t++){let n=Nf[t],s=sn(Te(i,.2+n*1.5,2.3+n*1.5)),r=(1-s)*(2.6+n*2.4),a=Math.cos(r),o=Math.sin(r),l=1+e*(2+n*5),c=gt(Yl[t*3],Zl[t*3],s),h=gt(Yl[t*3+1],Zl[t*3+1],s),d=gt(Yl[t*3+2],Zl[t*3+2],s);Jl[t*3]=(c*a+d*o)*l,Jl[t*3+1]=h*l,Jl[t*3+2]=(-c*o+d*a)*l}qh.attributes.position.needsUpdate=!0,Yh.material.opacity=Te(i,0,.8)*(1-Te(i,3.7,4.7))}var Yi=Gn(new rt(new Oi(90,72),new Ot({color:263434,metalness:.45,roughness:.55,transparent:!0})));Yi.rotation.x=-Math.PI/2;Yi.receiveShadow=!0;var zh=Gn(Xh("FABLE 5.2",1.7,.5,(i,e)=>e>=6?nx:Pf));function Mf(i){zh.userData.items.forEach((e,t)=>{let n=Te(i,t*.12,t*.12+.75),s=Vt(n);e.visible=n>0,e.position.copy(e.userData.base),e.position.y+=(1-s)*7+Math.sin(Math.PI*Te(i,t*.12+.75,t*.12+1.15))*.12,e.rotation.set((1-s)*-2.2,(1-s)*.8,0)})}var Sf=["\u8AAD\u3080","\u8003\u3048\u308B","\u3084\u308A\u629C\u304F","\u3064\u304F\u308B"].map(i=>{let e=Xh(i,1.05,.3,()=>tx);return e.userData.items.forEach(t=>{t.castShadow=!1}),e.visible=!1,$i.add(e),e});function rx(i,e,t){if(Sf.forEach((s,r)=>{s.visible=r===i}),i<0)return;let n=Sf[i];n.position.set(-5.9+n.userData.width/2,-.1,-10),n.rotation.set(0,.2+.04*Math.sin(e*1.3),0),n.scale.setScalar(t>.02?1:.001),n.userData.items.forEach((s,r)=>{let a=Te(e,.1+r*.1,.75+r*.1),o=Zi(a);s.visible=a>0&&t>.02,s.position.copy(s.userData.base),s.position.y+=(1-Vt(a))*-1.1,s.rotation.set((1-Vt(a))*1.5,0,0),s.scale.setScalar(Math.max(.001,o))})}function ax(){let i=document.createElement("canvas");i.width=128,i.height=176;let e=i.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,128,176),e.fillStyle="#9a9a9a",e.fillRect(16,18,60,9);for(let n=0;n<9;n++)e.fillRect(16,42+n*14,n%4===3?60:96,5);let t=new Ls(i);return t.colorSpace=Kt,t}var Uf=3e3,Js=Gn(new gn(new _n(.56,.77,.012),new Ht({map:ax()}),Uf));Js.frustumCulled=!1;function ox(i,e){let t=e-17;for(let n=0;n<Uf;n++){let s=n*.41,r=4.7+1.2*Math.sin(n*1.7),a=-n*.04;if(ut.position.set(Math.cos(s)*r,Math.sin(s)*r,a),ut.lookAt(0,0,a-1.5),ut.rotateZ(Math.sin(n*2.3+i*.8)*.5),ut.rotateY(Math.sin(n+i*1.5)*.25),ut.updateMatrix(),Js.setMatrixAt(n,ut.matrix),a>t){let o=.42+2.4*Math.exp(-(a-t)*.5);n%19===0?zn.setRGB(.3*o,1.2*o,1.05*o):zn.setRGB(1*o,.72*o,.5*o)}else zn.setRGB(.1,.13,.28);Js.setColorAt(n,zn)}Js.instanceMatrix.needsUpdate=!0,Js.instanceColor.needsUpdate=!0}var $l=Gn(new jt),cc=120,rn=[],Kl=Array.from({length:cc},()=>[]),hc=[];{let i=Ta(5);for(;rn.length<cc;){let e=new C(i()*2-1,i()*2-1,i()*2-1);e.length()>1||(e.multiply(new C(7.5,4.2,5)),rn.every(t=>t.distanceTo(e)>.9)&&rn.push(e))}rn.forEach((e,t)=>{rn.map((n,s)=>[e.distanceTo(n),s]).sort((n,s)=>n[0]-s[0]).slice(1,4).forEach(([,n])=>{Kl[t].includes(n)||(Kl[t].push(n),Kl[n].push(t),hc.push([t,n]))})})}var Ff=new Lr(new vt().setFromPoints(hc.flatMap(([i,e])=>[rn[i],rn[e]])),new ws({color:7307222,transparent:!0,opacity:.55})),Ma=new gn(new Ns(.11,14,14),new Ht,cc),Gh=new gn(new Ns(.05,8,8),new Ht({color:new be(1.6,1.8,2.6)}),hc.length),Ks=[];{let i=rn.reduce((s,r,a)=>r.x<rn[s].x?a:s,0),e=rn.reduce((s,r,a)=>r.x>rn[s].x?a:s,0),t=new Array(cc).fill(-1),n=[i];for(t[i]=i;n.length;){let s=n.shift();if(s===e)break;for(let r of Kl[s])t[r]<0&&(t[r]=s,n.push(r))}if(t[e]<0)Ks=[i,e];else{for(let s=e;s!==i;s=t[s])Ks.unshift(s);Ks.unshift(i)}}var Of=new Ps(Ks.map(i=>rn[i]),!1,"catmullrom",.08),Bf=400,Hh=new rt(new Qr(Of,Bf,.065,8,!1),new Ht({color:new be(3.2,1.5,.7)})),ec=new Ts(new Ui({map:lc,color:16756864,blending:Kn,depthWrite:!1}));ec.scale.set(2.4,2.4,1);$l.add(Ff,Ma,Gh,Hh,ec);function bf(i){let e=sn(Te(i,2,3.8));rn.forEach((t,n)=>{let s=Ks.indexOf(n),r=s>=0&&e>=s/(Ks.length-1)-.001,a=Zi(Te(i,.2+(t.x+7.5)/15*.9,.7+(t.x+7.5)/15*.9))*(r?2.1:1);ut.position.copy(t),ut.rotation.set(0,0,0),ut.scale.setScalar(Math.max(.001,a)),ut.updateMatrix(),Ma.setMatrixAt(n,ut.matrix),r?zn.setRGB(3,1.5,.7):zn.setRGB(.75,.85,1.5),Ma.setColorAt(n,zn)}),hc.forEach(([t,n],s)=>{let r=(i*.55+bi(s,7))%1;ut.position.lerpVectors(rn[t],rn[n],r),ut.scale.setScalar(Math.sin(r*Math.PI)*Te(i,.8,1.4)+.001),ut.updateMatrix(),Gh.setMatrixAt(s,ut.matrix)}),Ma.instanceMatrix.needsUpdate=!0,Ma.instanceColor.needsUpdate=!0,Gh.instanceMatrix.needsUpdate=!0,Hh.geometry.setDrawRange(0,Math.floor(e*Bf)*8*6),Hh.visible=e>0,ec.visible=e>0&&e<1,ec.position.copy(Of.getPoint(e)),Ff.material.opacity=.55*Te(i,.3,1.2)}var kh=Gn(new jt),Sa=[];{let i=Ta(21),e=17,t=1.35;for(let n=0;n<e;n++)for(let s=0;s<e;s++){if(i()<.24)continue;let r=(n-(e-1)/2)*t,a=(s-(e-1)/2)*t,o=Math.hypot(r,a),l=1+Math.floor((.35+i()*.65)*10*oc(1-o/12,.12,1)),c=.75+i()*.5;for(let h=0;h<l;h++)Sa.push({x:r,y:h+.5,z:a,key:h+o*.14+i()*.6,top:h===l-1,lit:i()<.09,tone:c})}Sa.sort((n,s)=>n.key-s.key)}var uc=Sa.length,Ki=new gn(new _n(1.08,.94,1.08),new Ot({roughness:.55,metalness:.15}),uc);Ki.castShadow=Ki.receiveShadow=!0;Ki.frustumCulled=!1;var tc=new gn(new _n(1.1,.05,1.1),new Ht({color:new be(1.7,.85,.4)}),uc);tc.frustumCulled=!1;var Zh=new rt(new Oi(17,64),new Ot({color:1316905,roughness:.7,metalness:.3}));Zh.rotation.x=-Math.PI/2;Zh.receiveShadow=!0;kh.add(Ki,tc,Zh);Sa.forEach((i,e)=>{i.lit?zn.setRGB(.95,.42,.16):zn.setRGB(.085*i.tone,.11*i.tone,.27*i.tone),Ki.setColorAt(e,zn)});var Tf=-1;function Ef(i){if(i===Tf)return 0;Tf=i;let e=0;return Sa.forEach((t,n)=>{let s=.3+n/uc*3.3,r=Te(i,s,s+.45),a=Vt(r);r>=1&&e++,ut.rotation.set(0,(1-a)*1.2,0),ut.position.set(t.x,t.y+(1-a)*9,t.z),ut.scale.setScalar(r>0?.3+.7*a:1e-4),ut.updateMatrix(),Ki.setMatrixAt(n,ut.matrix),ut.rotation.set(0,0,0),ut.position.set(t.x,t.y+.5,t.z),ut.scale.setScalar(t.top&&r>=1&&bi(n,3)<.28?1:1e-4),ut.updateMatrix(),tc.setMatrixAt(n,ut.matrix)}),Ki.instanceMatrix.needsUpdate=!0,tc.instanceMatrix.needsUpdate=!0,e}var jl=Gn(new jt),vn=64,$s=30,dc=vn*vn*6,nc=new Float32Array(dc*3),zf=new Float32Array(dc*3),Gf=new Float32Array(dc),Jh=(i,e)=>{let t=oc((13.5-Math.hypot(i,e))/10);return t*t*(3-2*t)*(.5+$1(i*.19+3,e*.19+1)*5.4)-.45},Ei=0;for(let i=0;i<=vn;i++)for(let e=0;e<=vn;e++)Ei=Math.max(Ei,Jh((i/vn-.5)*$s,(e/vn-.5)*$s));{let i=0,e=[[.8,.7,.48],[.4,.64,.32],[.26,.5,.3],[.5,.48,.45],[.84,.85,.88]];for(let t=0;t<vn;t++)for(let n=0;n<vn;n++){let s=(t/vn-.5)*$s,r=((t+1)/vn-.5)*$s,a=(n/vn-.5)*$s,o=((n+1)/vn-.5)*$s,l=(t+n)%2?[[s,a],[s,o],[r,a],[r,a],[s,o],[r,o]]:[[s,a],[s,o],[r,o],[s,a],[r,o],[r,a]];for(let c=0;c<2;c++){let h=[0,1,2].map(g=>Jh(...l[c*3+g])),d=Math.max(...h)+(bi(t*2+c,n)-.5)*.5,u=Math.max(...h)<-.06?[.12,.36,.4]:e[d<.05*Ei?0:d<.4*Ei?1:d<.62*Ei?2:d<.84*Ei?3:4],f=.88+bi(t+c*9,n*3)*.24;for(let g=0;g<3;g++)nc[i*3]=l[c*3+g][0],nc[i*3+2]=l[c*3+g][1],Gf[i]=h[g],zf.set([Math.pow(u[0]*f,2.2),Math.pow(u[1]*f,2.2),Math.pow(u[2]*f,2.2)],i*3),i++}}}var wa=new vt;wa.setAttribute("position",new Gt(nc,3));wa.setAttribute("color",new Gt(zf,3));var Ji=new rt(wa,new Ot({vertexColors:!0,flatShading:!0,roughness:.85,metalness:0}));Ji.receiveShadow=!0;Ji.castShadow=!0;Ji.frustumCulled=!1;var ic=new rt(wa,new Ht({wireframe:!0,color:new be(1.5,.8,.45),transparent:!0}));ic.frustumCulled=!1;var ba=new rt(new Oi(24,72),new Ot({color:1535354,roughness:.4,metalness:.2,transparent:!0,opacity:.96}));ba.rotation.x=-Math.PI/2;ba.position.y=-.02;var sc=[];{let i=Ta(9);for(;sc.length<170;){let e=(i()-.5)*24,t=(i()-.5)*24,n=Jh(e,t);n>.07*Ei&&n<.6*Ei&&sc.push({x:e,z:t,h:n,s:.7+i()*.7,o:i()})}}var Hf=new Ir(.3,1,6);Hf.translate(0,.5,0);var kf=new Ot({color:3112262,flatShading:!0,roughness:.8}),lx=new Ht({color:new be(.5,1.5,.8),wireframe:!0}),js=new gn(Hf,kf,sc.length);js.castShadow=!0;js.frustumCulled=!1;jl.add(Ji,ic,ba,js);var wf=null;function Uh(i,e=!1){let t=i+(e?"w":"");if(t===wf)return;wf=t;let n=sn(Te(i,.5,2.2));for(let r=0;r<dc;r++)nc[r*3+1]=Gf[r]*n;wa.attributes.position.needsUpdate=!0;let s=Te(i,1.8,2.7);Ji.visible=s>0&&!e,Ji.material.transparent=s<1,Ji.material.opacity=s,js.material=e?lx:kf,ic.visible=s<1||e,ic.material.opacity=e?.9:Te(i,0,.5)*(1-Te(i,2.2,3)),ba.material.opacity=(e?.18:.96)*Te(i,1.6,2.6),ba.visible=i>1.6,sc.forEach((r,a)=>{let o=2.6+r.o*.9,l=Zi(Te(i,o,o+.4))*r.s;ut.position.set(r.x,r.h-.05,r.z),ut.rotation.set(0,r.o*6,0),ut.scale.setScalar(Math.max(1e-4,l)),ut.updateMatrix(),js.setMatrixAt(a,ut.matrix)}),js.instanceMatrix.needsUpdate=!0}var Vh=[["1M","\u4E00\u5EA6\u306B\u8AAD\u3081\u308B\u91CF\u306F\u3001100\u4E07\u30C8\u30FC\u30AF\u30F3","\u5206\u539A\u3044\u672C\u3092\u4F55\u518A\u3082\u3001\u307E\u308B\u3054\u3068\u62B1\u3048\u305F\u307E\u307E\u8003\u3048\u3089\u308C\u307E\u3059"],["128K","\u4E00\u5EA6\u306B\u66F8\u3051\u308B\u91CF\u306F\u3001\u6700\u5927 12.8\u4E07\u30C8\u30FC\u30AF\u30F3","\u9577\u3044\u5831\u544A\u66F8\u3082\u3001\u5927\u304D\u306A\u30D7\u30ED\u30B0\u30E9\u30E0\u3082\u3001\u3072\u3068\u7D9A\u304D\u3067"],["5","\u8003\u3048\u308B\u6DF1\u3055\u306F\u30015 \u6BB5\u968E","\u3059\u3070\u3084\u3044\u8FD4\u4E8B\u304B\u3089\u3001\u3068\u3053\u3068\u3093\u8003\u3048\u629C\u304F\u7B54\u3048\u307E\u3067"],["2.5x","\u9AD8\u901F\u30E2\u30FC\u30C9\u306A\u3089\u3001\u6700\u5927 2.5 \u500D\u306E\u901F\u3055","\u540C\u3058\u8CE2\u3055\u306E\u307E\u307E\u3001\u6025\u304E\u306E\u4ED5\u4E8B\u306B\u3082"]],Vf=Gn(new jt),Fh=i=>(i-1.5)*6.5,cx=new Ot({color:1711408,metalness:.8,roughness:.35}),hx=new Ht({color:new be(1.5,.7,.32)}),ux=Vh.map(([i],e)=>{let t=new rt(new Rs(1.75,1.95,.5,56),cx);t.position.set(Fh(e),.25,0),t.receiveShadow=!0;let n=new rt(new Us(1.78,.035,10,80),hx);n.rotation.x=Math.PI/2,n.position.set(Fh(e),.52,0);let s=Xh(i,2,.55,()=>Pf);return s.position.set(Fh(e),.7,0),Vf.add(t,n,s),s}),Qf=Gn(new jt),dx=[[1.95,new be(1.5,.7,.32)],[2.3,new be(.3,1.25,1.1)],[2.65,new be(1.3,1,.55)]].map(([i,e])=>{let t=new rt(new Us(i,.028,10,120),new Ht({color:e}));return Qf.add(t),t}),Zt={};for(let i of["birth","title","abil","meta","spec","trust","fin"])Zt[i]=tt("u_"+i);var rc=(i,e,t=0,n=0,s=1)=>{i.style.opacity=e,i.style.transform=`translate(${t}px,${n}px) scale(${s})`},nn=(i,e,t,n=.6,s=34)=>{let r=Vt(Te(e,t,t+n));rc(i,r,0,(1-r)*s)};function Wf(i){let e=[...i.textContent];return i.textContent="",e.map(t=>{let n=document.createElement("span");return n.textContent=t,n.style.display="inline-block",t===" "&&(n.style.width=".3em"),i.appendChild(n),n})}var Af=(i,e,t,n=.06,s=50)=>i.forEach((r,a)=>{let o=Vt(Te(e,t+a*n,t+a*n+.55));rc(r,o,0,(1-o)*s)}),fx=Wf(tt("b_cap")),px=Wf(tt("f_h")),mx=[["100\u4E07\u30C8\u30FC\u30AF\u30F3\u3002\u672C\u306B\u3057\u3066\u4F55\u518A\u3076\u3093\u3082\u306E\u8CC7\u6599\u3092\u3001<br>\u4E00\u5EA6\u306B\u982D\u306B\u5165\u308C\u3066\u8003\u3048\u307E\u3059\u3002"],["\u3044\u3064\u3082\u3001\u8003\u3048\u3066\u304B\u3089\u7B54\u3048\u307E\u3059\u3002<br>\u554F\u984C\u306E\u3080\u305A\u304B\u3057\u3055\u306B\u5408\u308F\u305B\u3066\u3001\u6DF1\u3055\u306F\u81EA\u5206\u3067\u8ABF\u6574\u3002"],["\u4F55\u6642\u9593\u3082\u304B\u304B\u308B\u9577\u3044\u4ED5\u4E8B\u3082\u3001\u8A08\u753B\u3057\u3001<br>\u78BA\u304B\u3081\u306A\u304C\u3089\u3001\u6700\u5F8C\u307E\u3067\u81EA\u5206\u3067\u9032\u3081\u307E\u3059\u3002"],["\u30B3\u30FC\u30C9\u3082\u3001\u6587\u7AE0\u3082\u3001\u3053\u3093\u306A 3D \u306E\u4E16\u754C\u3082\u3002<br>\u8A00\u8449\u304B\u3089\u3001\u5F62\u306B\u3057\u307E\u3059\u3002"]],gx=[tt("r1"),tt("r2"),tt("r3")],Si=[48.8,51.6,54.4],_x=[12,16.8,21.6,26.4,38.4,48,57.6],Bn=(i,e,t,n,s,r,a=0)=>{Ti.position.set(i,e,t),Ti.lookAt(n,s,r),a?Ti.setViewOffset(ii,si,a,0,ii,si):Ti.clearViewOffset()},xx=(i,e,t,n,s,r=0)=>{i.visible=!0,i.position.set(e,t,n),i.scale.setScalar(s),i.rotation.set(0,r,0)};function ac(i){Cf.forEach(l=>{l.visible=!1,l.position.set(0,0,0),l.scale.setScalar(1),l.rotation.set(0,0,0)}),Yi.rotation.x=-Math.PI/2,Ti.up.set(0,1,0);for(let l in Zt)Zt[l].style.display="none";let e=-1,t=0,n=1,s=0,r=0,a=0;if(Xl.strength=.5,dn.fog.density=.016,i<4.8){Yh.visible=!0,sx(i),ya(0,0,0,Zi(Te(i,3.4,4.1)),i);let l=sn(Te(i,0,4.8));Bn(-2.4*l,gt(1.5,.75,l),gt(12,6.58,l),0,0,0),Xl.strength=.5+1.2*Math.sin(Math.PI*Te(i,3.35,4.3)),a=.5*Math.sin(Math.PI*Te(i,3.38,3.8)),Zt.birth.style.display="block",Zt.birth.style.opacity=1-Te(i,3,3.4),Af(fx,i,.9,.07),r=Te(i,.6,1.2)*(1-Te(i,3,3.4))}else if(i<12){let l=sn(Te(i,4.8,5.9));ya(0,gt(0,3.45,l),0,gt(1,.5,l),i),Yi.visible=!0,Yi.material.opacity=Te(i,4.8,6),zh.visible=!0,Mf(i-5);let c=gt(-.35,.32,sn(Te(i,4.8,12))),h=gt(7,10.5,Vt(Te(i,4.8,7.5)));Bn(Math.sin(c)*h,gt(.75,1.9,Vt(Te(i,4.8,8))),Math.cos(c)*h,0,gt(0,1.25,Vt(Te(i,4.8,6.6))),0),Zt.title.style.display="block",Zt.title.style.opacity=1-Te(i,11.5,11.85),nn(tt("t_l1"),i,7.4),nn(tt("t_l2"),i,8.8),r=Te(i,7,7.8)}else if(i<31.2){let l=Math.min(3,Math.floor((i-12)/4.8)),c=i-12-l*4.8;e=l,t=c,n=1-Te(c,4.45,4.7);let h="";if(l===0){let d=3-c*13;Js.visible=!0,ox(c,d),dn.fog.density=.02,Ti.up.set(Math.sin(c*.3)*.25,1,0),Bn(Math.sin(c*.6)*.5,Math.cos(c*.5)*.4,d,0,0,d-10,-300),h=Math.round(1e6*sn(Te(c,.4,4))).toLocaleString("en-US")+" tokens"}else if(l===1){$l.visible=!0,bf(c),$l.rotation.y=c*.12-.2;let d=.35+c*.05,u=gt(19,16.5,sn(Te(c,0,4.8)));Bn(Math.sin(d)*u,1.5+c*.25,Math.cos(d)*u,0,0,0,-330),h=c<2?"thinking \u2026":c<3.8?"\u9053\u7B4B\u3092\u78BA\u304B\u3081\u3066\u3044\u307E\u3059":"\u7B54\u3048\u304C\u898B\u3064\u304B\u308A\u307E\u3057\u305F"}else if(l===2){kh.visible=!0;let d=Ef(c),u=.6+c*.2,f=gt(31,26,sn(Te(c,0,4.8)));Bn(Math.sin(u)*f,gt(9,14,sn(Te(c,0,4.8))),Math.cos(u)*f,0,3,0,-330),h=`step ${String(d).padStart(3,"0")} / ${uc}`}else{jl.visible=!0,Uh(c);let d=.5+c*.22,u=gt(36,31,sn(Te(c,0,4.8)));Bn(Math.sin(d)*u,gt(15,11,sn(Te(c,0,4.8))),Math.cos(d)*u,0,1,0,-330),h=c<2.2?"mesh.generate()":c<3?"material.apply()":"forest.grow()"}Zt.abil.style.display="block",Zt.abil.style.opacity=l===3?1-Te(c,4.45,4.8):n,tt("a_num").innerHTML=`0${l+1} <span style="color:#7c829c">/ 04</span>`,tt("a_cap").innerHTML=mx[l][0],tt("a_chip_t").textContent=h,nn(tt("a_num"),c,.05,.5,20),nn(tt("a_cap"),c,.7),nn(tt("a_chip"),c,1,.5,20)}else if(i<38.4){let l=i-26.4,c=i<35.4;jl.visible=!0,Uh(99,c),s=1;let h=.5+l*.22,d=gt(31,40,sn(Te(i,31.2,38.4)));Bn(Math.sin(h)*d,gt(11,17,sn(Te(i,31.2,38.4))),Math.cos(h)*d,0,1,0,-330),a=Math.max(.35*(1-Te(i,31.2,31.5)),.4*Math.sin(Math.PI*Te(i,35.3,35.7))),Zt.meta.style.display="block",Zt.meta.style.opacity=1-Te(i,37.85,38.2),nn(tt("m_lab"),i,31.4,.5,20),nn(tt("m_h"),i,31.6,.8,50),nn(tt("m_b"),i,32.9,.8),nn(tt("m_frame"),i,33.6,.5,20),tt("m_frame").textContent=`frame ${String(Math.round(i*Qh)).padStart(4,"0")} / ${Lf}  ${c?"\u30FB wireframe":"\u30FB shaded"}`}else if(i<48){Yi.visible=!0,Yi.material.opacity=1,Vf.visible=!0,r=1;let l=Math.min(3,Math.floor((i-38.4)/2.4)),c=i-38.4-l*2.4,h=-9.75+(i-39.6)*2.708;ux.forEach((u,f)=>{let g=38.4+f*2.4+.15,M=Te(i,g,g+.55);u.scale.setScalar(Math.max(.001,Zi(M))),u.rotation.y=(1-Vt(Te(i,g,g+1.3)))*-2.4+.12*Math.sin(i*.9+f),u.position.y=.72+.08*Math.sin(i*1.4+f)}),ya(h+2*Math.sin(i*.5),4.7,-6,.45,i),Bn(h,2.3,8.6,h+.5,1.05,0),Zt.spec.style.display="block",Zt.spec.style.opacity=1-Te(i,47.6,47.9),nn(tt("s_h"),i,38.6,.5,20),tt("s_big").textContent=Vh[l][1],tt("s_small").textContent=Vh[l][2];let d=1-Te(c,2.15,2.4);nn(tt("s_big"),c,.25,.5,30),tt("s_big").style.opacity*=d,nn(tt("s_small"),c,.5,.5,20),tt("s_small").style.opacity*=d}else if(i<57.6){ya(0,0,0,1.05,i),Qf.visible=!0,s=1,Xl.strength=.38,dx.forEach((c,h)=>{c.scale.setScalar(Math.max(.001,Zi(Te(i,Si[h],Si[h]+.7)))),c.rotation.set(i*(.5+h*.13)+h*1.1,i*(.35-h*.1)+h*2,h*.7)});let l=-.4+(i-48)*.06;Bn(Math.sin(l)*10.5,1.2+(i-48)*.08,Math.cos(l)*10.5,0,0,0,-430),Zt.trust.style.display="block",Zt.trust.style.opacity=1-Te(i,57.1,57.45),nn(tt("r_lab"),i,48.3,.5,20),gx.forEach((c,h)=>{let d=Vt(Te(i,Si[h],Si[h]+.7)),u=h<2?gt(1,.6,Te(i,Si[h+1]-.1,Si[h+1]+.5)):1;rc(c,d*u,(1-d)*-50,0),rc(c.children[1],Vt(Te(i,Si[h]+.8,Si[h]+1.4)))})}else{zh.visible=!0,Mf(i-57.9),ya(0,3.45,0,.5*Zi(Te(i,57.7,58.5)),i),r=Te(i,59,60);let l=Vt(Te(i,58.6,60.6)),c=f=>i*.16+f*2.094+.9,h=(f,g,M,p)=>xx(f,Math.cos(c(g))*10.5,p+Math.sin(i*.7+g)*.35,Math.sin(c(g))*4-6.5,M*l,i*.2+g);Uh(99),h(jl,0,.2,3.3),Ef(99),h(kh,1,.2,3),bf(99),h($l,2,.36,4.8);let d=gt(-.28,.26,sn(Te(i,57.6,67.2))),u=gt(8.5,14.5,Vt(Te(i,57.6,64)));Bn(Math.sin(d)*u,gt(1.2,1.5,Vt(Te(i,57.6,64))),Math.cos(d)*u,0,gt(1.2,.35,Vt(Te(i,57.6,64))),0),Zt.fin.style.display="block",Af(px,i,60,.08,60),nn(tt("f_c1"),i,63.6,.7,20),nn(tt("f_c2"),i,64.1,.7,20)}rx(e,t,n),tt("scrim").style.opacity=s,tt("lower").style.opacity=r,tt("flash").style.opacity=a;let o=Math.max(1-Te(i,0,.7),Te(i,66.1,67.1));for(let l of _x)o=Math.max(o,1-Math.abs(i-l)/.24);tt("black").style.opacity=oc(o),Ea.render()}window.renderAt=ac;window.TOTAL=Lf;window.FPS=Qh;function Xf(){let i=Math.min(innerWidth/ii,innerHeight/si);tt("stage").style.transform=`translate(${(innerWidth-ii*i)/2}px,${(innerHeight-si*i)/2}px) scale(${i})`}addEventListener("resize",Xf);Xf();ac(0);window.ready=!0;if(!location.search.includes("capture")){let i=tt("au"),e=tt("play");e.style.display="flex",e.onclick=()=>{e.style.display="none";let t=performance.now(),n=!0;i.currentTime=0,i.play().catch(()=>{n=!1});let s=()=>{let r=n&&!i.paused?i.currentTime:(performance.now()-t)/1e3;if(r>=Oh-.02||i.ended){ac(Oh-.001),e.style.display="flex";return}ac(r),requestAnimationFrame(s)};requestAnimationFrame(s)}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
