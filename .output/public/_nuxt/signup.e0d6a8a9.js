import{_ as $}from"./Input.719645d5.js";import{_ as y}from"./nuxt-link.f6550055.js";import{_ as v}from"./layout.57285c1e.js";import{x as k,h as P,i as V,j as q,w as _,o as m,a as t,b as i,l as e,c as d,t as c,m as u,d as h}from"./entry.58710a5b.js";import{u as C,c as n,r as p,e as M,m as N,s as D}from"./index.d6913887.js";const U={action:"",class:"py-6"},A=t("h1",{class:"text-center pb-6 text-white"},"Cadastro",-1),B={class:"mb-1"},L={key:0,class:"text-error font-medium text-xs"},S={class:"mb-1"},E={key:0,class:"text-error font-medium text-xs"},F={class:"mb-1"},j={key:0,class:"text-error font-medium text-xs"},I={class:"pb-6"},J={key:0,class:"text-error font-medium text-xs"},T={class:"text-sm text-center"},W={__name:"signup",setup(z){const w=k(),a=P({name:"",email:"",password:"",confirmPassword:""}),x=async()=>{s.value.$validate(),s.value.$error||await w.signUpUser({name:a.name,email:a.email,password:a.password})},f=V(()=>({name:{required:n.withMessage("Preencha o nome completo",p)},email:{required:n.withMessage("Preencha o e-mail",p),email:n.withMessage("Formato de e-mail inválido",M)},password:{required:n.withMessage("Preencha a senha",p),minLength:n.withMessage("É preciso no minímo 6 caracteres",N(6))},confirmPassword:{required:n.withMessage("Confirme a senha",p),sameAs:n.withMessage("As senhas são diferentes",D(a.password))}})),s=C(f,a);return(G,o)=>{const l=$,g=y,b=v;return m(),q(b,{name:"auth"},{content:_(()=>[t("div",null,[t("form",U,[A,t("div",B,[i(l,{name:"name",type:"text",label:"Nome completo",placeholder:"Digite aqui seu nome","onUpdate:modelValue":o[0]||(o[0]=r=>e(a).name=r)}),e(s).name.$error?(m(),d("span",L,c(e(s).name.$errors[0].$message),1)):u("",!0)]),t("div",S,[i(l,{name:"email",type:"email",label:"E-mail",placeholder:"Digite aqui seu e-mail","onUpdate:modelValue":o[1]||(o[1]=r=>e(a).email=r)}),e(s).email.$error?(m(),d("span",E,c(e(s).email.$errors[0].$message),1)):u("",!0)]),t("div",F,[i(l,{name:"password",type:"password",label:"Senha",placeholder:"Digite aqui sua senha","onUpdate:modelValue":o[2]||(o[2]=r=>e(a).password=r)}),e(s).password.$error?(m(),d("span",j,c(e(s).password.$errors[0].$message),1)):u("",!0)]),t("div",I,[i(l,{name:"confirmPassword",type:"password",label:"Confirmar senha",placeholder:"Digite a senha novamente","onUpdate:modelValue":o[3]||(o[3]=r=>e(a).confirmPassword=r)}),e(s).confirmPassword.$error?(m(),d("span",J,c(e(s).confirmPassword.$errors[0].$message),1)):u("",!0)]),t("button",{type:"button",class:"btn btn-secondary text-neutral-50 w-full",onClick:x},"Cadastrar")]),t("p",T,[h(" Já possui uma conta? "),i(g,{to:"/auth/signin",class:"font-semibold ml-2"},{default:_(()=>[h("Entrar")]),_:1})])])]),_:1})}}};export{W as default};
