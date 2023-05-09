"use strict";(globalThis["webpackChunkmy_shop"]=globalThis["webpackChunkmy_shop"]||[]).push([[819],{3876:(t,e,r)=>{r.d(e,{Z:()=>n});var s=r(3728),i=r(7846);const o=(0,s.B)(),c=new i.f(o),n=c},4062:(t,e,r)=>{r.d(e,{o:()=>i});var s=r(8010);const i={getAll:s.ZP`
    query {
      my_shop {
        description
        id
        img
        price
        type
      }
    }
  `,addClothes:s.ZP`
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
  `,filter:s.ZP`
    query ($type: [String!]) {
      my_shop(where: { type: { _in: $type } }) {
        id
        img
        price
        type
        description
      }
    }
  `,sortByType:s.ZP`
    query {
      my_shop(order_by: { type: asc }) {
        description
        id
        img
        price
        type
      }
    }
  `,sortByPrice:s.ZP`
    query {
      my_shop(order_by: { price: asc }) {
        description
        id
        img
        price
        type
      }
    }
  `,sort:s.ZP`
    query ($type: [String!], $sort: [my_shop_order_by!]) {
      my_shop(where: { type: { _in: $type } }, order_by: $sort) {
        id
        img
        price
        type
        description
      }
    }
  `}},6293:(t,e,r)=>{r.d(e,{o:()=>c});r(9665);var s=r(1809),i=r(4886),o=r(3876);(0,i.UK)(o.Z);const c=(0,s.Q_)("filter",{state:()=>({items:null,cart:[],types:[],allTypes:[]}),getters:{},actions:{addToCart(t){this.items.forEach((e=>{e.id==t&&(this.cart.includes(e)||this.cart.push(e))}))},removeFromCart(t){this.cart=this.cart.filter((e=>e.id!=t))},getTypes(){this.allTypes=this.items.map((t=>t.type))}}})},7544:(t,e,r)=>{r.d(e,{Z:()=>k});var s=r(9835),i=r(6970);const o=["src","id"],c={class:"text-h6"},n={class:"text-subtitle2"},a={class:"text-right"};function l(t,e,r,l,p,d){const y=(0,s.up)("q-card-section"),u=(0,s.up)("q-btn"),m=(0,s.up)("q-card");return(0,s.wg)(),(0,s.j4)(m,{class:"my-card",style:{cursor:"pointer"}},{default:(0,s.w5)((()=>[(0,s._)("img",{class:"MsCardImg",src:`${r.item.img}`,id:r.item.id,onClick:e[0]||(e[0]=(...t)=>l.toProductCard&&l.toProductCard(...t))},null,8,o),(0,s.Wm)(y,{id:r.item.id,onClick:l.toProductCard},{default:(0,s.w5)((()=>[(0,s._)("div",c,(0,i.zw)(r.item.type),1),(0,s._)("div",n,[(0,s.Uk)(" Price: "),(0,s._)("strong",null,(0,i.zw)(new Intl.NumberFormat("ru",{style:"currency",currency:"RUB"}).format(r.item.price)),1)])])),_:1},8,["id","onClick"]),(0,s.Wm)(y,{class:"q-pt-none MsCardDesc"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(r.item.description),1)])),_:1}),(0,s._)("div",a,[(0,s.Wm)(u,{color:"white",id:r.item.id,class:"q-ma-sm","text-color":"black",onClick:l.handleClick},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(r.lable),1)])),_:1},8,["id","onClick"])])])),_:1})}r(9665);var p=r(1809),d=r(6293),y=r(8339);const u={name:"MsCard",props:{item:{type:Object,default(){}},lable:{type:String},func:{type:Function}},setup(t){const e=(0,d.o)(),{cart:r}=(0,p.Jk)(e),s=(0,y.tv)(),i=t=>{s.push({name:"productPage",params:{id:t.currentTarget.id}})},o=e=>{const r=t.func;r(e.currentTarget.id)};return{cart:r,handleClick:o,toProductCard:i}}};var m=r(1639),g=r(4458),h=r(3190),_=r(8879),C=r(9984),f=r.n(C);const b=(0,m.Z)(u,[["render",l]]),k=b;f()(u,"components",{QCard:g.Z,QCardSection:h.Z,QBtn:_.Z})},3736:(t,e,r)=>{r.r(e),r.d(e,{default:()=>k});var s=r(9835);const i=(0,s._)("h2",{class:"flex justify-center MsTitle"},"Catalog",-1),o={key:0},c=(0,s._)("h3",{class:"flex justify-center"},"Loading...",-1),n={class:"q-pa-md row items-start justify-center q-gutter-md"};function a(t,e,r,a,l,p){const d=(0,s.up)("q-linear-progress"),y=(0,s.up)("q-btn"),u=(0,s.up)("ms-card"),m=(0,s.up)("q-page");return(0,s.wg)(),(0,s.iD)(s.HY,null,[i,t.items.length?((0,s.wg)(),(0,s.j4)(m,{key:1,class:"column items-center"},{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s.Wm)(y,{class:"btn q-ma-xs",onClick:t.sortByType},{default:(0,s.w5)((()=>[(0,s.Uk)("Sort by type")])),_:1},8,["onClick"]),(0,s.Wm)(y,{class:"btn q-ma-xs",onClick:t.sortByPrice},{default:(0,s.w5)((()=>[(0,s.Uk)("Sort by price")])),_:1},8,["onClick"])]),(0,s._)("div",n,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.items,(e=>((0,s.wg)(),(0,s.j4)(u,{key:e.id,item:e,lable:t.btnLable,func:t.addToCart},null,8,["item","lable","func"])))),128))])])),_:1})):((0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(d,{query:""}),c]))],64)}var l=r(7544),p=r(6293),d=r(4062),y=r(4886);const u=(0,s.aZ)({name:"MsCatalogPage",components:{MsCard:l.Z},setup(){const t=(0,p.o)(),e=(0,s.Fl)((()=>t.items??[])),r="Add to cart",i=e=>{t.addToCart(e)},o=()=>{if(t.types.length){const{result:e}=(0,y.aM)(d.o.sort,{type:t.types,sort:{type:"asc"}});return void(t.items=(0,s.Fl)((()=>e.value?.my_shop??[])))}const{result:e}=(0,y.aM)(d.o.sortByType);t.items=(0,s.Fl)((()=>e.value?.my_shop??[]))},c=()=>{if(t.types.length){const{result:e}=(0,y.aM)(d.o.sort,{type:t.types,sort:{price:"asc"}});return void(t.items=(0,s.Fl)((()=>e.value?.my_shop??[])))}const{result:e}=(0,y.aM)(d.o.sortByPrice);t.items=(0,s.Fl)((()=>e.value?.my_shop??[]))};return{items:e,sortByType:o,sortByPrice:c,btnLable:r,addToCart:i}}});var m=r(1639),g=r(8289),h=r(9885),_=r(8879),C=r(9984),f=r.n(C);const b=(0,m.Z)(u,[["render",a]]),k=b;f()(u,"components",{QLinearProgress:g.Z,QPage:h.Z,QBtn:_.Z})}}]);