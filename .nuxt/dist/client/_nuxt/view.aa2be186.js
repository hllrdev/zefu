import{_ as r}from"./Input.719645d5.js";import{_ as d}from"./layout.57285c1e.js";import{s as p,g as m,H as f,j as h,w as x,k as b,o as v,a as t,b as c,l as e}from"./entry.58710a5b.js";const g={class:"pt-24 px-4 pb-10"},k=t("h1",{class:"text-center pb-6"},"Visualizar produto",-1),w={class:"flex justify-center"},R={class:"md:w-4/5 lg:w-3/5"},y={action:""},C=t("label",{class:"label"},[t("span",{class:"label-text text-neutral-600"},"Foto do produto")],-1),L={class:"flex justify-center pb-6 pt-2"},j=["src"],U={__name:"view",setup(z){const i=b().public.API_URL,o=p().query,s=o.title,n=o.link,a=o.photo,u=m();return f(()=>{(!s||!n||!a)&&u.push("/errors/404")}),(N,V)=>{const l=r,_=d;return v(),h(_,{name:"main"},{content:x(()=>[t("div",g,[k,t("div",w,[t("div",R,[t("form",y,[c(l,{disabled:"",value:e(s),class:"mb-2",size:"md:max-w-2xl",name:"title",label:"Título",placeholder:"Digite o título do produto"},null,8,["value"]),c(l,{disabled:"",value:e(n),class:"mb-2",size:"md:max-w-2xl",name:"link",label:"Link",placeholder:"Digite o link de afiliado"},null,8,["value"]),C,t("div",L,[t("img",{class:"w-72",src:`${e(i)}/static${e(a)}`},null,8,j)])])])])])]),_:1})}}};export{U as default};