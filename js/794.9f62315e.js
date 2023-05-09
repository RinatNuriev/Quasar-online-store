"use strict";(globalThis["webpackChunkmy_shop"]=globalThis["webpackChunkmy_shop"]||[]).push([[794],{3876:(e,t,l)=>{l.d(t,{Z:()=>n});var o=l(3728),a=l(7846);const r=(0,o.B)(),s=new a.f(r),n=s},4062:(e,t,l)=>{l.d(t,{o:()=>a});var o=l(8010);const a={getAll:o.ZP`
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
  `}},6293:(e,t,l)=>{l.d(t,{o:()=>s});l(9665);var o=l(1809),a=l(4886),r=l(3876);(0,a.UK)(r.Z);const s=(0,o.Q_)("filter",{state:()=>({items:null,cart:[],types:[],allTypes:[],isCatalog:!1}),getters:{},actions:{addToCart(e){this.items.forEach((t=>{t.id==e&&(this.cart.includes(t)||this.cart.push(t))}))},removeFromCart(e){this.cart=this.cart.filter((t=>t.id!=e))},getTypes(){this.allTypes=this.items.map((e=>e.type))}}})},2794:(e,t,l)=>{l.r(t),l.d(t,{default:()=>M});var o=l(9835),a=l(6970),r=l(1957);const s=(0,o._)("div",{class:"q-ml-md"},[(0,o._)("div",{id:"user-button"})],-1),n={class:"text-right q-pa-sm"},i={class:""},u={class:"row no-wrap q-pa-md"},d={class:"column"},c={class:"flex justify-end"};function p(e,t,l,p,m,y){const h=(0,o.up)("q-btn"),g=(0,o.up)("q-icon"),w=(0,o.up)("q-avatar"),b=(0,o.up)("q-toolbar-title"),_=(0,o.up)("q-item"),v=(0,o.up)("q-toolbar"),f=(0,o.up)("q-header"),k=(0,o.up)("q-toggle"),q=(0,o.up)("q-form"),C=(0,o.up)("q-btn-dropdown"),Z=(0,o.up)("q-drawer"),W=(0,o.up)("router-view"),S=(0,o.up)("q-page-container"),Q=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(Q,{view:"lhh LpR lFf",class:"bg-blue-grey-1"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{elevated:"",class:"bg-teal-6 text-blue-grey-1 aling-center q-pt-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Wm)(h,{dense:"",flat:"",round:"",icon:"menu",onClick:p.toggleLeftDrawer},null,8,["onClick"]),(0,o.Wm)(b,{class:"flex items-center"},{default:(0,o.w5)((()=>[(0,o._)("h4",{class:"text-blue-grey-2 cursor-pointer",onClick:t[0]||(t[0]=(...e)=>p.toMainPage&&p.toMainPage(...e))}," myShop "),(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,{name:"font_download"})])),_:1})])),_:1}),(0,o.Wm)(_,{id:"auth-links"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{color:"white text-black",size:"sm",style:{width:"75px"},dense:"",label:"Login",type:"button",onClick:p.login},null,8,["onClick"])])),_:1}),s,(0,o.Wm)(h,{to:"/cart",color:"primary",class:"q-ml-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{name:"shopping_cart"}),(0,o.Uk)(" "+(0,a.zw)(p.cart.length),1)])),_:1})])),_:1}),(0,o._)("div",n,[(0,o._)("span",i,"Total price: "+(0,a.zw)(p.totalPrice),1)])])),_:1}),(0,o.Wm)(Z,{modelValue:p.leftDrawerOpen,"onUpdate:modelValue":t[4]||(t[4]=e=>p.leftDrawerOpen=e),side:"left",bordered:"",class:"column wrap justify-start items-start q-pa-xl MsMainLayoutDrawer"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{to:"/catalog",color:"secondary",label:"Catalog",class:"q-mb-sm"}),(0,o.Wm)(h,{color:"secondary",label:"Add product",to:"/add",class:"q-mb-sm"}),(0,o.wy)((0,o.Wm)(C,{class:"glossy",color:"primary",label:"Categories"},{default:(0,o.w5)((()=>[(0,o._)("div",u,[(0,o.Wm)(q,{onSubmit:p.onSubmit},{default:(0,o.w5)((()=>[(0,o._)("div",d,[(0,o.Wm)(k,{name:"clothes",modelValue:p.tshirt,"onUpdate:modelValue":t[1]||(t[1]=e=>p.tshirt=e),label:"T-shirt","true-value":"T-shirt"},null,8,["modelValue"]),(0,o.Wm)(k,{name:"clothes",modelValue:p.shoes,"onUpdate:modelValue":t[2]||(t[2]=e=>p.shoes=e),label:"Shoes","true-value":"Shoes"},null,8,["modelValue"]),(0,o.Wm)(k,{name:"clothes",modelValue:p.underwear,"onUpdate:modelValue":t[3]||(t[3]=e=>p.underwear=e),label:"Underwear","true-value":"Underwear"},null,8,["modelValue"])]),(0,o._)("div",c,[(0,o.Wm)(h,{label:"Submit",type:"submit",color:"secondary"})])])),_:1},8,["onSubmit"]),(0,o._)("div",null,[(0,o.Wm)(h,{label:"All",color:"secondary",onClick:p.getAllItems},null,8,["onClick"])])])])),_:1},512),[[r.F8,p.store.isCatalog]])])),_:1},8,["modelValue"]),(0,o.Wm)(S,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W)])),_:1})])),_:1})}l(9665);var m=l(499),y=l(4886),h=l(4062),g=l(6293),w=l(3876),b=l(8339);const _="pk_test_YXBwYXJlbnQtY2hpZ2dlci00Ny5jbGVyay5hY2NvdW50cy5kZXYk",v=document.createElement("script");v.setAttribute("data-clerk-publishable-key",_),v.async=!0,v.src="https://cdn.jsdelivr.net/npm/@clerk/clerk-js@latest/dist/clerk.browser.js",v.crossOrigin="anonymous",v.addEventListener("load",(async function(){await window.Clerk.load();const e=document.getElementById("user-button"),t=document.getElementById("auth-links");window.Clerk.addListener((({user:e})=>{t.style.display=e?"none":""})),window.Clerk.user&&(window.Clerk.mountUserButton(e),e.style.margin="auto",localStorage.setItem("session_id",window.Clerk.session.id))})),document.body.appendChild(v),(0,y.UK)(w.Z);const f={setup(){const e=async()=>{await window.Clerk.signOut()},t=async({email:e,password:t})=>{window.Clerk.openSignIn()},l=(0,m.iH)(!1),a=(0,m.iH)(null),r=(0,m.iH)(null),s=(0,m.iH)(null),n=(0,g.o)(),i=(0,o.Fl)((()=>n.cart??[])),u=(0,b.tv)();let d=(0,o.Fl)((()=>n.cart?.reduce(((e,t)=>e+t.price),0)));const c=e=>{const t=(0,y.aM)((()=>h.o.filter),{type:e});if(0!==e.length)n.items=(0,o.Fl)((()=>t.result.value?.my_shop??[]));else{a.value=null,r.value=null,s.value=null,n.types=[];const e=(0,y.aM)((()=>h.o.filter),{type:["Shoes","Underwear","T-shirt"]});n.items=(0,o.Fl)((()=>e.result.value?.my_shop??[]))}};(0,o.bv)((()=>{const{result:e}=(0,y.aM)(h.o.getAll);n.items=(0,o.Fl)((()=>e.value?.my_shop??[]))}));const p=e=>{const t=new FormData(e.target),l=[];for(const[o,a]of t.entries())l.push(a);n.types=l,c(l)},w=()=>{u.push({path:"/"})},_=e=>{a.value=null,r.value=null,s.value=null,n.types=[];const t=(0,y.aM)((()=>h.o.getAll));n.items=(0,o.Fl)((()=>t.result.value?.my_shop??[]))};return{leftDrawerOpen:l,toggleLeftDrawer(){l.value=!l.value},tshirt:a,shoes:r,underwear:s,store:n,onSubmit:p,cart:i,totalPrice:d,toMainPage:w,getAllItems:_,login:t,logout:e,store:n}}};var k=l(1639),q=l(7605),C=l(6602),Z=l(1663),W=l(8879),S=l(1973),Q=l(1357),T=l(2857),$=l(490),P=l(3655),V=l(8479),F=l(8326),U=l(592),A=l(2133),B=l(9984),D=l.n(B);const I=(0,k.Z)(f,[["render",p]]),M=I;D()(f,"components",{QLayout:q.Z,QHeader:C.Z,QToolbar:Z.Z,QBtn:W.Z,QToolbarTitle:S.Z,QAvatar:Q.Z,QIcon:T.Z,QItem:$.Z,QDrawer:P.Z,QBtnDropdown:V.Z,QForm:F.Z,QToggle:U.Z,QPageContainer:A.Z})}}]);