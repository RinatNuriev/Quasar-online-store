"use strict";(globalThis["webpackChunkmy_shop"]=globalThis["webpackChunkmy_shop"]||[]).push([[636],{3876:(t,e,s)=>{s.d(e,{Z:()=>n});var r=s(3728),i=s(7846);const o=(0,r.B)(),a=new i.f(o),n=a},4062:(t,e,s)=>{s.d(e,{o:()=>i});var r=s(8010);const i={getAll:r.ZP`
    query {
      my_shop {
        description
        id
        img
        price
        type
      }
    }
  `,addClothes:r.ZP`
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
  `,filter:r.ZP`
    query ($type: [String!]) {
      my_shop(where: { type: { _in: $type } }) {
        id
        img
        price
        type
        description
      }
    }
  `,sortByType:r.ZP`
    query {
      my_shop(order_by: { type: asc }) {
        description
        id
        img
        price
        type
      }
    }
  `,sortByPrice:r.ZP`
    query {
      my_shop(order_by: { price: asc }) {
        description
        id
        img
        price
        type
      }
    }
  `,sort:r.ZP`
    query ($type: [String!], $sort: [my_shop_order_by!]) {
      my_shop(where: { type: { _in: $type } }, order_by: $sort) {
        id
        img
        price
        type
        description
      }
    }
  `,searchData:r.ZP`
    query ($like: String!) {
      my_shop(where: { description: { _ilike: $like } }) {
        id
        img
        price
        type
        description
      }
    }
  `}},6293:(t,e,s)=>{s.d(e,{o:()=>a});s(9665);var r=s(1809),i=s(4886),o=s(3876);(0,i.UK)(o.Z);const a=(0,r.Q_)("filter",{state:()=>({items:null,cart:[],types:[],allTypes:[],isCatalog:!1}),getters:{},actions:{addToCart(t){this.items.forEach((e=>{e.id==t&&(this.cart.includes(e)||this.cart.push(e))}))},removeFromCart(t){this.cart=this.cart.filter((e=>e.id!=t))},getTypes(){this.allTypes=this.items.map((t=>t.type))}}})},7544:(t,e,s)=>{s.d(e,{Z:()=>b});var r=s(9835),i=s(6970);const o=["src","id"],a={class:"text-h6"},n={class:"text-subtitle2"},c={class:"text-right"};function l(t,e,s,l,p,d){const u=(0,r.up)("q-card-section"),m=(0,r.up)("q-btn"),y=(0,r.up)("q-card");return(0,r.wg)(),(0,r.j4)(y,{class:"my-card",style:{cursor:"pointer"}},{default:(0,r.w5)((()=>[(0,r._)("img",{class:"MsCardImg",src:`${s.item.img}`,id:s.item.id,onClick:e[0]||(e[0]=(...t)=>l.toProductCard&&l.toProductCard(...t))},null,8,o),(0,r.Wm)(u,{id:s.item.id,onClick:l.toProductCard},{default:(0,r.w5)((()=>[(0,r._)("div",a,(0,i.zw)(s.item.type),1),(0,r._)("div",n,[(0,r.Uk)(" Price: "),(0,r._)("strong",null,(0,i.zw)(new Intl.NumberFormat("ru",{style:"currency",currency:"RUB"}).format(s.item.price)),1)])])),_:1},8,["id","onClick"]),(0,r.Wm)(u,{class:"q-pt-none MsCardDesc"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(s.item.description),1)])),_:1}),(0,r._)("div",c,[(0,r.Wm)(m,{color:"white",id:s.item.id,class:"q-ma-sm","text-color":"black",onClick:l.handleClick},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(s.lable),1)])),_:1},8,["id","onClick"])])])),_:1})}s(9665);var p=s(1809),d=s(6293),u=s(8339);const m={name:"MsCard",props:{item:{type:Object,default(){}},lable:{type:String},func:{type:Function}},setup(t){const e=(0,d.o)(),{cart:s}=(0,p.Jk)(e),r=(0,u.tv)(),i=t=>{r.push({name:"productPage",params:{id:t.currentTarget.id}})},o=e=>{const s=t.func;s(e.currentTarget.id)};return{cart:s,handleClick:o,toProductCard:i}}};var y=s(1639),h=s(4458),g=s(3190),_=s(8879),C=s(9984),f=s.n(C);const k=(0,y.Z)(m,[["render",l]]),b=k;f()(m,"components",{QCard:h.Z,QCardSection:g.Z,QBtn:_.Z})},7712:(t,e,s)=>{s.r(e),s.d(e,{default:()=>Z});var r=s(9835),i=s(1957);const o=(0,r._)("h2",{class:"flex justify-center MsTitle"},"Catalog",-1),a={key:0},n=(0,r._)("h3",{class:"flex justify-center"},"Loading...",-1),c={class:"q-pa-md row items-start justify-center q-gutter-md"};function l(t,e,s,l,p,d){const u=(0,r.up)("q-linear-progress"),m=(0,r.up)("q-btn"),y=(0,r.up)("q-input"),h=(0,r.up)("ms-card"),g=(0,r.up)("q-page");return(0,r.wg)(),(0,r.iD)(r.HY,null,[o,t.items.length?((0,r.wg)(),(0,r.j4)(g,{key:1,class:"column items-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(y,{onKeyup:(0,i.D2)(t.searchRequest,["enter"]),filled:"","bottom-slots":"",modelValue:t.dataSearch,"onUpdate:modelValue":e[0]||(e[0]=e=>t.dataSearch=e),label:"Look up something",style:{width:"80%"}},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{label:"Go!",onClick:t.searchRequest},null,8,["onClick"])])),_:1},8,["onKeyup","modelValue"]),(0,r._)("div",null,[(0,r.Wm)(m,{class:"btn q-ma-xs",onClick:t.sortByType},{default:(0,r.w5)((()=>[(0,r.Uk)("Sort by type")])),_:1},8,["onClick"]),(0,r.Wm)(m,{class:"btn q-ma-xs",onClick:t.sortByPrice},{default:(0,r.w5)((()=>[(0,r.Uk)("Sort by price")])),_:1},8,["onClick"])]),(0,r._)("div",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.items,(e=>((0,r.wg)(),(0,r.j4)(h,{key:e.id,item:e,lable:t.btnLable,func:t.addToCart},null,8,["item","lable","func"])))),128))])])),_:1})):((0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(u,{query:""}),n]))],64)}var p=s(499),d=s(7544),u=s(6293),m=s(4062),y=s(4886),h=s(9302);const g=(0,r.aZ)({name:"MsCatalogPage",components:{MsCard:d.Z},setup(){const t=(0,h.Z)(),e=(0,u.o)(),s=(0,r.Fl)((()=>e.items??[])),i="Add to cart",o=(0,p.iH)(null),a=t=>{e.addToCart(t)},n=()=>{if(e.types.length){const{result:t}=(0,y.aM)(m.o.sort,{type:e.types,sort:{type:"asc"}});return void(e.items=(0,r.Fl)((()=>t.value?.my_shop??[])))}const{result:t}=(0,y.aM)(m.o.sortByType);e.items=(0,r.Fl)((()=>t.value?.my_shop??[]))},c=()=>{if(e.types.length){const{result:t}=(0,y.aM)(m.o.sort,{type:e.types,sort:{price:"asc"}});return void(e.items=(0,r.Fl)((()=>t.value?.my_shop??[])))}const{result:t}=(0,y.aM)(m.o.sortByPrice);e.items=(0,r.Fl)((()=>t.value?.my_shop??[]))},l=()=>{t.notify({type:"warning",message:"Nothing found"})},d=()=>{const{result:t,loading:s}=(0,y.aM)(m.o.searchData,{like:`%${o.value}%`}),i=(0,r.Fl)((()=>t.value?.my_shop??[]));e.items=i,setTimeout((()=>{if(!e.items.length){const{result:t}=(0,y.aM)(m.o.getAll);e.items=(0,r.Fl)((()=>t.value?.my_shop??[])),l()}}),3e3),o.value=""};return(0,r.bv)((()=>{e.isCatalog=!0})),(0,r.Ah)((()=>{e.isCatalog=!1})),{items:s,sortByType:n,sortByPrice:c,btnLable:i,addToCart:a,dataSearch:o,searchRequest:d,showNotif:l}}});var _=s(1639),C=s(8289),f=s(9885),k=s(6611),b=s(8879),w=s(9984),v=s.n(w);const q=(0,_.Z)(g,[["render",l]]),Z=q;v()(g,"components",{QLinearProgress:C.Z,QPage:f.Z,QInput:k.Z,QBtn:b.Z})}}]);