import{d as _,I as i,r as m,b as o,c as a,M as e,X as f,f as u,F as v,Z as h,n as k,a1 as b,p as g,i as w,e as x,k as I}from"./entry.c4c948ec.js";const B=t=>(g("data-v-db38e505"),t=t(),w(),t),S={key:1,class:"loaded"},V=["poster"],C=["src"],$=["src","type"],N=["autoplay","src"],P=B(()=>x("button",null,null,-1)),E=[P],F=_({__name:"VideoPlayer",props:{poster:{type:String,default:""},src:{type:String,default:""},sources:{type:Array,default:()=>[]},autoplay:{type:Boolean,default:!1}},setup(t){const r=t,c=i(()=>{if(r.src&&r.src.includes("youtube.com/watch")){const s=r.src.match(/\?v=([^&]*)/);return{name:"youtube",src:`https://www.youtube-nocookie.com/embed/${(s==null?void 0:s[1])||""}?autoplay=1`,poster:r.poster||`https://i3.ytimg.com/vi/${(s==null?void 0:s[1])||""}/hqdefault.jpg`}}}),d=m(!1);if(!r.src&&!r.sources.length)throw new Error("VideoPlayer: you need to provide either `src` or `sources` props");const p=i(()=>{var s,l;return r.src||((l=(s=r.sources)==null?void 0:s[0])==null?void 0:l.src)||!1});return(s,l)=>{const y=b;return o(),a("div",{class:k(["video-player",{loaded:e(d)}])},[(e(c)?e(c).poster:t.poster)?(o(),f(y,{key:0,src:e(c)?e(c).poster:t.poster},null,8,["src"])):u("",!0),e(d)?(o(),a("div",S,[e(c)?e(c).name==="youtube"?(o(),a("iframe",{key:1,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true",autoplay:t.autoplay,src:e(c).src},null,8,N)):u("",!0):(o(),a("video",{key:0,poster:t.poster,controls:"",autoplay:""},[e(p)?(o(),a("source",{key:0,src:e(p)},null,8,C)):u("",!0),(o(!0),a(v,null,h(t.sources,n=>(o(),a("source",{key:n.src||n,src:n.src||n,type:n.type},null,8,$))),128))],8,V))])):u("",!0),e(d)?u("",!0):(o(),a("div",{key:2,class:"play-button",onClick:l[0]||(l[0]=n=>d.value=!0)},E))],2)}}});const q=I(F,[["__scopeId","data-v-db38e505"]]);export{q as default};
