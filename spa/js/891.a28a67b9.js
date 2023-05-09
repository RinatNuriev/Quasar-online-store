"use strict";(globalThis["webpackChunkmy_shop"]=globalThis["webpackChunkmy_shop"]||[]).push([[891],{3876:(e,t,i)=>{i.d(t,{Z:()=>n});var l=i(3728),o=i(7846);const r=(0,l.B)(),p=new o.f(r),n=p},4062:(e,t,i)=>{i.d(t,{o:()=>o});var l=i(8010);const o={getAll:l.ZP`
    query {
      my_shop {
        description
        id
        img
        price
        type
      }
    }
  `,addClothes:l.ZP`
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
  `,filter:l.ZP`
    query ($type: [String!]) {
      my_shop(where: { type: { _in: $type } }) {
        id
        img
        price
        type
        description
      }
    }
  `,sortByType:l.ZP`
    query {
      my_shop(order_by: { type: asc }) {
        description
        id
        img
        price
        type
      }
    }
  `,sortByPrice:l.ZP`
    query {
      my_shop(order_by: { price: asc }) {
        description
        id
        img
        price
        type
      }
    }
  `,sort:l.ZP`
    query ($type: [String!], $sort: [my_shop_order_by!]) {
      my_shop(where: { type: { _in: $type } }, order_by: $sort) {
        id
        img
        price
        type
        description
      }
    }
  `}},6293:(e,t,i)=>{i.d(t,{o:()=>p});i(9665);var l=i(1809),o=i(4886),r=i(3876);(0,o.UK)(r.Z);const p=(0,l.Q_)("filter",{state:()=>({items:null,cart:[],types:[],allTypes:[]}),getters:{},actions:{addToCart(e){this.items.forEach((t=>{t.id==e&&(this.cart.includes(t)||this.cart.push(t))}))},removeFromCart(e){this.cart=this.cart.filter((t=>t.id!=e))},getTypes(){this.allTypes=this.items.map((e=>e.type))}}})},3891:(e,t,i)=>{i.r(t),i.d(t,{default:()=>q});var l=i(9835);const o={class:"q-pa-md q-gutter-sm"},r={class:"q-gutter-md",style:{"min-width":"700px"}},p={class:"text-center q-ma-xl"};function n(e,t,i,n,a,s){const m=(0,l.up)("q-select"),d=(0,l.up)("q-input"),u=(0,l.up)("q-btn"),c=(0,l.up)("q-form"),y=(0,l.up)("q-card-section");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l.Wm)(y,{class:"q-pt-none flex justify-center"},{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l.Wm)(c,{onSubmit:n.onSubmit},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:n.form.model,"onUpdate:modelValue":t[0]||(t[0]=e=>n.form.model=e),options:n.form.options,label:"Product type"},null,8,["modelValue","options"]),"New"===n.form.model?((0,l.wg)(),(0,l.j4)(d,{key:0,modelValue:n.form.newType,"onUpdate:modelValue":t[1]||(t[1]=e=>n.form.newType=e),label:"Type"},null,8,["modelValue"])):(0,l.kq)("",!0),(0,l.Wm)(d,{modelValue:n.form.price,"onUpdate:modelValue":t[2]||(t[2]=e=>n.form.price=e),type:"number",label:"Price"},null,8,["modelValue"]),(0,l.Wm)(d,{modelValue:n.form.description,"onUpdate:modelValue":t[3]||(t[3]=e=>n.form.description=e),label:"Description"},null,8,["modelValue"]),(0,l.Wm)(d,{modelValue:n.form.image,"onUpdate:modelValue":t[4]||(t[4]=e=>n.form.image=e),label:"Image link"},null,8,["modelValue"]),(0,l._)("div",p,[(0,l.Wm)(u,{label:"Add",type:"submit"})])])),_:1},8,["onSubmit"])])])),_:1})])}var a=i(499),s=i(4886),m=i(4062),d=i(6293);const u={name:"MsAddProduct",setup(){const e=(0,d.o)(),{mutate:t}=(0,s.Db)(m.o.addClothes),i=(0,a.iH)({model:(0,a.iH)(null),options:["T-shirt","Shoes","Underwear","New"],price:(0,a.iH)(null),description:(0,a.iH)(null),image:(0,a.iH)(null),newType:(0,a.iH)(null)}),o=async()=>{if("New"===i.value.model){const{data:e}=await t({type:i.value.newType,description:i.value.description,price:i.value.price,img:i.value.image})}else{const{data:e}=await t({type:i.value.model,description:i.value.description,price:i.value.price,img:i.value.image})}i.value.model=null,i.value.description=null,i.value.price=null,i.value.image=null,i.value.newType=null;const o=(0,s.aM)((()=>m.o.getAll));e.items=(0,l.Fl)((()=>o.result.value?.my_shop??[]))};return{form:i,onSubmit:o}}};var c=i(1639),y=i(3190),g=i(8326),h=i(4363),f=i(6611),v=i(8879),_=i(9984),b=i.n(_);const w=(0,c.Z)(u,[["render",n]]),q=w;b()(u,"components",{QCardSection:y.Z,QForm:g.Z,QSelect:h.Z,QInput:f.Z,QBtn:v.Z})}}]);