function ZI(a){this.b=a}
function dJ(a){this.c=a}
function Fyb(){this.b=new byc}
function iJ(){throw new Prc}
function jJ(a,b){this.b=a;this.c=b}
function Mwb(a,b){this.b=a;this.c=b}
function BI(b,a){return b.c[VDc+a]}
function AI(a,b){return OU(b,1)?BI(a,MU(b,1)):null}
function CI(a,b){var c;this.b=a;this.c={};for(c=0;c<a.length;++c){this.c[VDc+a[c]]=b[c]}}
function cJ(a){var b;if(a.b>=a.c.b.b.length){throw new ezc}b=a.c.b.b[a.b++];return new jJ(b,BI(a.c.b,b))}
function Eyb(a){var b;b=MU(a.b.qe(yMc),159);if(!b){b=new CI(CU(aeb,GAc,1,[tKc,qKc,wKc,sKc,xKc,vKc,zMc,AMc]),CU(aeb,GAc,1,[BMc,CMc,DMc,EMc,FMc,GMc,HMc,IMc]));a.b.se(yMc,b)}return b}
function Iwb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r;f=new Fyb;n=new u5b;i=MU(n.k,99);n.p[xHc]=5;q=ohb(f3);o=new f$b(q);wj(o,new Mwb(a,q),(Gx(),Gx(),Fx));p=new m7b;p.f[xHc]=3;j7b(p,new T2b("Cet exemple interagit avec l'\xE9chatillon de l'interface:"));j7b(p,o);o5b(n,0,0,p);D5b(i,0)[lJc]=2;g=new Wac;g.db[mJc]='Amelie';XB(g.b);g.db.style[CDc]=jMc;l5b(n,1,0,'<b>Pr\xE9nom:<\/b>');o5b(n,1,1,g);k=new Wac;k.db[mJc]='Crutcher';XB(k.b);k.db.style[CDc]=jMc;l5b(n,2,0,'<b>Nom:<\/b>');o5b(n,2,1,k);b=new j8b;c=Eyb(f);for(e=c.pe().cc();e.Be();){d=MU(e.Ce(),160);j=MU(d.Ee(),1);r=MU(d.Tc(),1);f8b(b,r,j,-1)}l5b(n,3,0,'<b>Couleur Pr\xE9f\xE9r\xE9e:<\/b>');o5b(n,3,1,b);return n}
var yMc='colorMap';cfb(365,366,eBc,CI);_.ne=function DI(a){return (OU(a,1)?BI(this,MU(a,1)):null)!=null};_.pe=function EI(){return new ZI(this)};_.qe=function FI(a){return OU(a,1)?BI(this,MU(a,1)):null};_.ue=function GI(){return this.b.length};_.b=null;_.c=null;cfb(367,368,gBc,ZI);_.xe=function $I(a){var b,c;if(!OU(a,160)){return false}b=MU(a,160);c=AI(this.b,b.Ee());if(c!=null&&Jqc(c,b.Tc())){return true}return false};_.cc=function _I(){return new dJ(this)};_.ue=function aJ(){return this.b.b.length};_.b=null;cfb(370,1,{},dJ);_.Be=function eJ(){return this.b<this.c.b.b.length};_.Ce=function fJ(){return cJ(this)};_.De=function gJ(){throw new Prc};_.b=0;_.c=null;cfb(371,1,hBc,jJ);_.eQ=function kJ(a){var b;if(OU(a,160)){b=MU(a,160);if(Jqc(this.b,b.Ee())&&Jqc(this.c,b.Tc())){return true}}return false};_.Ee=function lJ(){return this.b};_.Tc=function mJ(){return this.c};_.hC=function nJ(){var a,b;a=0;b=0;this.b!=null&&(a=nrc(this.b));this.c!=null&&(b=nrc(this.c));return a^b};_.Fe=function oJ(a){return iJ(MU(a,1))};_.tS=function pJ(){return this.b+REc+this.c};_.b=null;_.c=null;cfb(656,1,qBc,Mwb);_.Lc=function Nwb(a){hhb(this.b,this.c+uMc)};_.b=null;_.c=null;cfb(657,1,tBc);_.qc=function Rwb(){Hhb(this.c,Iwb(this.b))};cfb(682,1,{},Fyb);var f3=Jpc(uIc,'ExampleConstants'),E2=Hpc(uIc,'CwConstantsExample$1',656),e3=Hpc(uIc,'ExampleConstants_fr',682),z$=Hpc(JIc,'ConstantMap',365),y$=Hpc(JIc,'ConstantMap$EntryImpl',371),x$=Hpc(JIc,'ConstantMap$1',367),w$=Hpc(JIc,'ConstantMap$1$1',370);gCc(Jn)(30);