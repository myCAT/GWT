function v5(a){var b,c;b=DH(a.a.ld(Xuc),149);if(b==null){c=tH(m0,Umc,1,[Yuc,Zuc,$uc,_uc]);a.a.nd(Xuc,c);return c}else{return b}}
function w5(a){var b,c;b=DH(a.a.ld(avc),149);if(b==null){c=tH(m0,Umc,1,[bvc,cvc,dvc,evc,fvc,gvc]);a.a.nd(avc,c);return c}else{return b}}
function btb(a){var b,c,d,e,f,g,i;i=new N4b;K4b(i,new oRb('<b>Select your favorite color:<\/b>'));c=v5(a.a);for(d=0;d<c.length;++d){b=c[d];e=new F$b(Trc,b);dNb(e,'cwRadioButton-color-'+b);d==2&&(e.c.disabled=true,Ri(e,Zi(e.cb)+gsc,true));K4b(i,e)}K4b(i,new oRb('<br><b>Select your favorite sport:<\/b>'));g=w5(a.a);for(d=0;d<g.length;++d){f=g[d];e=new F$b('sport',f);dNb(e,'cwRadioButton-sport-'+fdc(f,zoc,npc));d==2&&eNb(e,(Cbc(),Cbc(),Bbc));K4b(i,e)}return i}
var Xuc='cwRadioButtonColors',avc='cwRadioButtonSports';o1(789,1,Hnc);_.lc=function htb(){Y3(this.b,btb(this.a))};uoc(wn)(1);