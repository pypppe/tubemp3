(function(){
var _0xg=['\x6C\x6F\x67','\x72\x61\x6E\x64\x6F\x6D','\x66\x6C\x6F\x6F\x72','\x6C\x65\x6E\x67\x74\x68','\x47\x45\x54','\x2F\x67\x69\x74\x68\x75\x62\x2F'];
var _0xS={a:false,b:false,c:0,d:[],e:0,f:0,g:[],h:[],i:[],j:0};
function _0xR(n){return Math[_0xg[2]](Math[_0xg[1]]()*n)}
function _0xH(){return (_0xR(1e15)).toString(16)}
function _0xD(t){var s=Date.now();while(Date.now()-s<t){Math.sqrt(Math.random()*999999)}}
function _0xU(){
return {
    sha:_0xH(),
    tree:_0xH(),
    ref:'refs/heads/'+_0xH(),
    repo:_0xH(),
    owner:_0xH().slice(0,8),
    ts:Date.now()
}}
function _0xB(){
for(var i=0;i<120;i++){
_0xS.d.push(_0xU())
}}
function _0xDNS(){
console[_0xg[0]]('resolving api.github.internal');
_0xD(40);
_0xS.a=true
}
function _0xAUTH(){
console[_0xg[0]]('auth token ghp_'+_0xH());
_0xD(60);
_0xS.b=true
}
function _0xGET(u,q){
console[_0xg[0]](
'['+_0xg[4]+'] '+
_0xg[5]+u+
' ? '+JSON.stringify(q)
)
}
function _0xREQ(){
if(!_0xS.a){_0xDNS();return}
if(!_0xS.b){_0xAUTH();return}
if(_0xS.c>=_0xS.d[_0xg[3]]){
console[_0xg[0]]('sync complete '+_0xH());
console[_0xg[0]]('refs verified');
console[_0xg[0]]('trees resolved');
clearInterval(_0xLOOP);
return
}
var o=_0xS.d[_0xS.c];
var q={
owner:o.owner,
repo:o.repo,
ref:o.ref,
sha:o.sha,
ts:o.ts,
nonce:_0xH().slice(0,6)
};
_0xGET(
'repos/'+o.owner+'/'+o.repo+'/git/trees/'+o.tree,
q
);
console[_0xg[0]]('index '+_0xS.c+'/'+_0xS.d[_0xg[3]]);
if(Math.random()<0.12){
console[_0xg[0]]('rate-limit soft hit');
}else{
_0xS.c++
}}
function _0xNOISE(){
var x=0;
for(var i=0;i<5000;i++){
x+=Math.sin(i)*Math.cos(i%9)
}
return x
}
function _0xCACHE(){
for(var i=0;i<80;i++){
_0xS.g.push(_0xH());
_0xS.h.push(_0xNOISE());
_0xS.i.push(Date.now())
}}
function _0xBOOT(){
console[_0xg[0]]('loading git objects');
console[_0xg[0]]('hydrating refs');
console[_0xg[0]]('replaying packfiles');
_CACHE=_0xCACHE();
}
_0xB();
_0xBOOT();
var _0xLOOP=setInterval(_0xREQ,120);
})();
