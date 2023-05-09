"use strict";(globalThis["webpackChunkmy_shop"]=globalThis["webpackChunkmy_shop"]||[]).push([[491],{3876:(e,t,i)=>{i.d(t,{Z:()=>p});var o=i(3728),l=i(7846);const r=(0,o.B)(),s=new l.f(r),p=s},4062:(e,t,i)=>{i.d(t,{o:()=>l});var o=i(8010);const l={getAll:o.ZP`
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
  `,searchData:o.ZP`
    query ($like: String!) {
      my_shop(where: { description: { _ilike: $like } }) {
        id
        img
        price
        type
        description
      }
    }
  `}},6293:(e,t,i)=>{i.d(t,{o:()=>s});i(9665);var o=i(1809),l=i(4886),r=i(3876);(0,l.UK)(r.Z);const s=(0,o.Q_)("filter",{state:()=>({items:null,cart:[],types:[],allTypes:[],isCatalog:!1}),getters:{},actions:{addToCart(e){this.items.forEach((t=>{t.id==e&&(this.cart.includes(t)||this.cart.push(t))}))},removeFromCart(e){this.cart=this.cart.filter((t=>t.id!=e))},getTypes(){this.allTypes=this.items.map((e=>e.type))}}})},2491:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Z});var o=i(9835);const l={class:"q-pa-md q-gutter-sm"},r={class:"q-gutter-md",style:{"min-width":"700px"}},s={class:"text-center q-ma-xl"};function p(e,t,i,p,a,n){const m=(0,o.up)("q-select"),d=(0,o.up)("q-input"),c=(0,o.up)("q-btn"),u=(0,o.up)("q-form"),y=(0,o.up)("q-card-section");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(y,{class:"q-pt-none flex justify-center"},{default:(0,o.w5)((()=>[(0,o._)("div",r,[(0,o.Wm)(u,{onSubmit:p.onSubmit},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{modelValue:p.form.model,"onUpdate:modelValue":t[0]||(t[0]=e=>p.form.model=e),options:p.form.options,label:"Product type"},null,8,["modelValue","options"]),"New"===p.form.model?((0,o.wg)(),(0,o.j4)(d,{key:0,modelValue:p.form.newType,"onUpdate:modelValue":t[1]||(t[1]=e=>p.form.newType=e),label:"Type"},null,8,["modelValue"])):(0,o.kq)("",!0),(0,o.Wm)(d,{modelValue:p.form.price,"onUpdate:modelValue":t[2]||(t[2]=e=>p.form.price=e),type:"number",label:"Price"},null,8,["modelValue"]),(0,o.Wm)(d,{modelValue:p.form.description,"onUpdate:modelValue":t[3]||(t[3]=e=>p.form.description=e),label:"Description"},null,8,["modelValue"]),(0,o.Wm)(d,{modelValue:p.form.image,"onUpdate:modelValue":t[4]||(t[4]=e=>p.form.image=e),label:"Image link"},null,8,["modelValue"]),(0,o._)("div",s,[(0,o.Wm)(c,{label:"Add",type:"submit"})])])),_:1},8,["onSubmit"])])])),_:1})])}var a=i(499),n=i(4886),m=i(4062),d=i(6293),c=i(9302);const u={name:"MsAddProduct",setup(){const e=(0,c.Z)(),t=(0,d.o)(),{mutate:i}=(0,n.Db)(m.o.addClothes),l=(0,a.iH)({model:(0,a.iH)(null),options:["T-shirt","Shoes","Underwear","New"],price:(0,a.iH)(null),description:(0,a.iH)(null),image:(0,a.iH)(null),newType:(0,a.iH)(null)}),r=()=>{e.notify({type:"positive",message:"Product successfully added"})},s=async()=>{try{if("New"===l.value.model){const{data:e}=await i({type:l.value.newType,description:l.value.description,price:l.value.price,img:l.value.image})}else{const{data:e}=await i({type:l.value.model,description:l.value.description,price:l.value.price,img:l.value.image})}l.value.model=null,l.value.description=null,l.value.price=null,l.value.image=null,l.value.newType=null;const e=(0,n.aM)((()=>m.o.getAll));t.items=(0,o.Fl)((()=>e.result.value?.my_shop??[])),r()}catch(e){console.log(e.message)}};return{form:l,onSubmit:s,showNotif:r}}};var y=i(1639),g=i(3190),h=i(8326),f=i(4363),_=i(6611),v=i(8879),b=i(9984),w=i.n(b);const q=(0,y.Z)(u,[["render",p]]),Z=q;w()(u,"components",{QCardSection:g.Z,QForm:h.Z,QSelect:f.Z,QInput:_.Z,QBtn:v.Z})}}]);