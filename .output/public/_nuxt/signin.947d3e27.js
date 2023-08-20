import{_ as v}from"./Input.f5e59ea7.js";import{_ as y}from"./nuxt-link.cd74cfd3.js";import{_ as $}from"./layout.b39c5b86.js";import{x as k,h as V,i as q,j as N,w as i,o as l,a as e,b as n,l as s,c as d,t as p,m as _,d as x}from"./entry.0c1eaa11.js";import{u as B,c as m,r as h,e as C}from"./index.56505eb7.js";const D={action:"",class:"py-6"},E=e("h1",{class:"text-center pb-6 text-white"},"Login",-1),S={class:"mb-1"},L={key:0,class:"text-error font-medium text-xs"},M={key:0,class:"text-error font-medium text-xs"},U={class:"text-end pb-4 pt-1"},j={class:"text-sm text-center"},A=e("span",{class:"font-semibold ml-2"},"Cadastrar",-1),J={__name:"signin",setup(F){const f=k(),a=V({email:"",password:""}),w=async()=>{t.value.$validate(),t.value.$error||await f.signInUser({email:a.email,password:a.password})},b=q(()=>({email:{required:m.withMessage("Preencha o e-mail",h),email:m.withMessage("Formato de e-mail inválido",C)},password:{required:m.withMessage("Preencha a senha",h)}})),t=B(b,a);return(I,o)=>{const c=v,u=y,g=$;return l(),N(g,{name:"auth"},{content:i(()=>[e("div",null,[e("form",D,[E,e("div",S,[n(c,{name:"email",type:"email",label:"E-mail",placeholder:"Digite aqui seu e-mail","onUpdate:modelValue":o[0]||(o[0]=r=>s(a).email=r)}),s(t).email.$error?(l(),d("span",L,p(s(t).email.$errors[0].$message),1)):_("",!0)]),e("div",null,[n(c,{name:"password",type:"password",label:"Senha",placeholder:"Digite aqui sua senha","onUpdate:modelValue":o[1]||(o[1]=r=>s(a).password=r)}),s(t).password.$error?(l(),d("span",M,p(s(t).password.$errors[0].$message),1)):_("",!0),e("div",U,[n(u,{class:"text-xs",to:"/auth/recovery"},{default:i(()=>[x(" Esqueceu sua senha? ")]),_:1})])]),e("div",{class:"flex justify-center flex-col"},[e("button",{type:"button",class:"btn btn-secondary text-neutral-50 w-full mb-4",onClick:w},"Entrar")])]),e("p",j,[x(" Ainda não possui uma conta? "),n(u,{to:"/auth/signup"},{default:i(()=>[A]),_:1})])])]),_:1})}}};export{J as default};
