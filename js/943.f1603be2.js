"use strict";(globalThis["webpackChunkmy_shop"]=globalThis["webpackChunkmy_shop"]||[]).push([[943],{3876:(e,t,l)=>{l.d(t,{Z:()=>n});var o=l(3728),a=l(7846);const s=(0,o.B)(),r=new a.f(s),n=r},4062:(e,t,l)=>{l.d(t,{o:()=>a});var o=l(8010);const a={getAll:o.ZP`
    query {
      my_shop {
        description
        id
        img
        price
        type
      }
    }
  `,addClothes:o.ZP`
    mutation add_clothes(
      $type: String!
      $description: String!
      $price: Int
      $img: String!
    ) {
      insert_my_shop_one(
        object: {
          type: $type
          description: $description
          price: $price
          img: $img
        }
      ) {
        id
        type
        description
        price
        img
      }
    }
  `,filter:o.ZP`
    query ($type: [String!]) {
      my_shop(where: { type: { _in: $type } }) {
        id
        img
        price
        type
        description
      }
    }
  `,sortByType:o.ZP`
    query {
      my_shop(order_by: { type: asc }) {
        description
        id
        img
        price
        type
      }
    }
  `,sortByPrice:o.ZP`
    query {
      my_shop(order_by: { price: asc }) {
        description
        id
        img
        price
        type
      }
    }
  `,sort:o.ZP`
    query ($type: [String!], $sort: [my_shop_order_by!]) {
      my_shop(where: { type: { _in: $type } }, order_by: $sort) {
        id
        img
        price
        type
        description
      }
    }
  `}},6293:(e,t,l)=>{l.d(t,{o:()=>r});l(9665);var o=l(1809),a=l(4886),s=l(3876);(0,a.UK)(s.Z);const r=(0,o.Q_)("filter",{state:()=>({items:null,cart:[],types:[],allTypes:[]}),getters:{},actions:{addToCart(e){this.items.forEach((t=>{t.id==e&&(this.cart.includes(t)||this.cart.push(t))}))},removeFromCart(e){this.cart=this.cart.filter((t=>t.id!=e))},getTypes(){this.allTypes=this.items.map((e=>e.type))}}})},8906:(e,t,l)=>{l.r(t),l.d(t,{default:()=>D});var o=l(9835),a=l(6970);const s=(0,o._)("div",{class:"q-ml-md"},[(0,o._)("div",{id:"user-button"})],-1),r={class:"text-right q-pa-sm"},n={class:""},i={class:"row no-wrap q-pa-md"},u={class:"column"},d={class:"flex justify-end"};function c(e,t,l,c,p,m){const y=(0,o.up)("q-btn"),h=(0,o.up)("q-icon"),w=(0,o.up)("q-avatar"),g=(0,o.up)("q-toolbar-title"),b=(0,o.up)("q-item"),_=(0,o.up)("q-toolbar"),v=(0,o.up)("q-header"),f=(0,o.up)("q-toggle"),k=(0,o.up)("q-form"),q=(0,o.up)("q-btn-dropdown"),Z=(0,o.up)("q-drawer"),C=(0,o.up)("router-view"),W=(0,o.up)("q-page-container"),S=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(S,{view:"lhh LpR lFf",class:"bg-blue-grey-1"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{elevated:"",class:"bg-teal-6 text-blue-grey-1 aling-center q-pt-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,{dense:"",flat:"",round:"",icon:"menu",onClick:c.toggleLeftDrawer},null,8,["onClick"]),(0,o.Wm)(g,{class:"flex items-center"},{default:(0,o.w5)((()=>[(0,o._)("h4",{class:"text-blue-grey-2 cursor-pointer",onClick:t[0]||(t[0]=(...e)=>c.toMainPage&&c.toMainPage(...e))}," myShop "),(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(h,{name:"font_download"})])),_:1})])),_:1}),(0,o.Wm)(b,{id:"auth-links"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{color:"white text-black",size:"sm",style:{width:"75px"},dense:"",label:"Login",to:"/catalog",type:"button",onClick:c.login},null,8,["onClick"])])),_:1}),s,(0,o.Wm)(y,{to:"/cart",color:"primary",class:"q-ml-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{name:"shopping_cart"}),(0,o.Uk)(" "+(0,a.zw)(c.cart.length),1)])),_:1})])),_:1}),(0,o._)("div",r,[(0,o._)("span",n,"Total price: "+(0,a.zw)(c.totalPrice),1)])])),_:1}),(0,o.Wm)(Z,{"show-if-above":"",modelValue:c.leftDrawerOpen,"onUpdate:modelValue":t[4]||(t[4]=e=>c.leftDrawerOpen=e),side:"left",bordered:"",class:"column wrap justify-start items-start q-pa-xl MsMainLayoutDrawer"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{to:"/",color:"secondary",label:"Catalog",class:"q-mb-sm"}),(0,o.Wm)(y,{color:"secondary",label:"Add product",to:"/add",class:"q-mb-sm"}),(0,o.Wm)(q,{class:"glossy",color:"primary",label:"Categories"},{default:(0,o.w5)((()=>[(0,o._)("div",i,[(0,o.Wm)(k,{onSubmit:c.onSubmit},{default:(0,o.w5)((()=>[(0,o._)("div",u,[(0,o.Wm)(f,{name:"clothes",modelValue:c.tshirt,"onUpdate:modelValue":t[1]||(t[1]=e=>c.tshirt=e),label:"T-shirt","true-value":"T-shirt"},null,8,["modelValue"]),(0,o.Wm)(f,{name:"clothes",modelValue:c.shoes,"onUpdate:modelValue":t[2]||(t[2]=e=>c.shoes=e),label:"Shoes","true-value":"Shoes"},null,8,["modelValue"]),(0,o.Wm)(f,{name:"clothes",modelValue:c.underwear,"onUpdate:modelValue":t[3]||(t[3]=e=>c.underwear=e),label:"Underwear","true-value":"Underwear"},null,8,["modelValue"])]),(0,o._)("div",d,[(0,o.Wm)(y,{label:"Submit",type:"submit",color:"secondary"})])])),_:1},8,["onSubmit"]),(0,o._)("div",null,[(0,o.Wm)(y,{label:"All",color:"secondary",onClick:c.getAllItems},null,8,["onClick"])])])])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(W,{class:"q-pa-xl"},{default:(0,o.w5)((()=>[(0,o.Wm)(C)])),_:1})])),_:1})}l(9665);var p=l(499),m=l(4886),y=l(4062),h=l(6293),w=l(3876),g=l(8339);const b="pk_test_YXBwYXJlbnQtY2hpZ2dlci00Ny5jbGVyay5hY2NvdW50cy5kZXYk",_=document.createElement("script");_.setAttribute("data-clerk-publishable-key",b),_.async=!0,_.src="https://cdn.jsdelivr.net/npm/@clerk/clerk-js@latest/dist/clerk.browser.js",_.crossOrigin="anonymous",_.addEventListener("load",(async function(){await window.Clerk.load();const e=document.getElementById("user-button"),t=document.getElementById("auth-links");window.Clerk.addListener((({user:e})=>{t.style.display=e?"none":""})),window.Clerk.user&&(window.Clerk.mountUserButton(e),e.style.margin="auto",localStorage.setItem("session_id",window.Clerk.session.id))})),document.body.appendChild(_),(0,m.UK)(w.Z);const v={setup(){const e=async()=>{await window.Clerk.signOut()},t=async({email:e,password:t})=>{window.Clerk.openSignIn()},l=(0,p.iH)(!1),a=(0,p.iH)(null),s=(0,p.iH)(null),r=(0,p.iH)(null),n=(0,h.o)(),i=(0,o.Fl)((()=>n.cart??[])),u=(0,g.tv)();let d=(0,o.Fl)((()=>n.cart?.reduce(((e,t)=>e+t.price),0)));const c=e=>{const t=(0,m.aM)((()=>y.o.filter),{type:e});if(0!==e.length)n.items=(0,o.Fl)((()=>t.result.value?.my_shop??[]));else{a.value=null,s.value=null,r.value=null,n.types=[];const e=(0,m.aM)((()=>y.o.filter),{type:["Shoes","Underwear","T-shirt"]});n.items=(0,o.Fl)((()=>e.result.value?.my_shop??[]))}};(0,o.bv)((()=>{const{result:e}=(0,m.aM)(y.o.getAll);n.items=(0,o.Fl)((()=>e.value?.my_shop??[]))}));const w=e=>{const t=new FormData(e.target),l=[];for(const[o,a]of t.entries())l.push(a);n.types=l,c(l)},b=()=>{u.push({path:"/"})},_=e=>{a.value=null,s.value=null,r.value=null,n.types=[];const t=(0,m.aM)((()=>y.o.getAll));n.items=(0,o.Fl)((()=>t.result.value?.my_shop??[]))};return{leftDrawerOpen:l,toggleLeftDrawer(){l.value=!l.value},tshirt:a,shoes:s,underwear:r,store:n,onSubmit:w,cart:i,totalPrice:d,toMainPage:b,getAllItems:_,login:t,logout:e}}};var f=l(1639),k=l(7605),q=l(6602),Z=l(1663),C=l(8879),W=l(1973),S=l(1357),Q=l(2857),T=l(490),$=l(3655),P=l(8479),V=l(8326),U=l(592),F=l(2133),x=l(9984),A=l.n(x);const B=(0,f.Z)(v,[["render",c]]),D=B;A()(v,"components",{QLayout:k.Z,QHeader:q.Z,QToolbar:Z.Z,QBtn:C.Z,QToolbarTitle:W.Z,QAvatar:S.Z,QIcon:Q.Z,QItem:T.Z,QDrawer:$.Z,QBtnDropdown:P.Z,QForm:V.Z,QToggle:U.Z,QPageContainer:F.Z})}}]);