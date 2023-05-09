"use strict";(globalThis["webpackChunkmy_shop"]=globalThis["webpackChunkmy_shop"]||[]).push([[399],{3876:(e,t,l)=>{l.d(t,{Z:()=>d});var a=l(3728),i=l(7846);const o=(0,a.B)(),s=new i.f(o),d=s},6293:(e,t,l)=>{l.d(t,{o:()=>s});l(9665);var a=l(1809),i=l(4886),o=l(3876);(0,i.UK)(o.Z);const s=(0,a.Q_)("filter",{state:()=>({items:null,cart:[],types:[],allTypes:[]}),getters:{},actions:{addToCart(e){this.items.forEach((t=>{t.id==e&&(this.cart.includes(t)||this.cart.push(t))}))},removeFromCart(e){this.cart=this.cart.filter((t=>t.id!=e))},getTypes(){this.allTypes=this.items.map((e=>e.type))}}})},7544:(e,t,l)=>{l.d(t,{Z:()=>k});var a=l(9835),i=l(6970);const o=["src","id"],s={class:"text-h6"},d={class:"text-subtitle2"},r={class:"text-right"};function m(e,t,l,m,n,u){const c=(0,a.up)("q-card-section"),p=(0,a.up)("q-btn"),g=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(g,{class:"my-card",style:{cursor:"pointer"}},{default:(0,a.w5)((()=>[(0,a._)("img",{class:"MsCardImg",src:`${l.item.img}`,id:l.item.id,onClick:t[0]||(t[0]=(...e)=>m.toProductCard&&m.toProductCard(...e))},null,8,o),(0,a.Wm)(c,{id:l.item.id,onClick:m.toProductCard},{default:(0,a.w5)((()=>[(0,a._)("div",s,(0,i.zw)(l.item.type),1),(0,a._)("div",d,[(0,a.Uk)(" Price: "),(0,a._)("strong",null,(0,i.zw)(new Intl.NumberFormat("ru",{style:"currency",currency:"RUB"}).format(l.item.price)),1)])])),_:1},8,["id","onClick"]),(0,a.Wm)(c,{class:"q-pt-none MsCardDesc"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(l.item.description),1)])),_:1}),(0,a._)("div",r,[(0,a.Wm)(p,{color:"white",id:l.item.id,class:"q-ma-sm","text-color":"black",onClick:m.handleClick},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(l.lable),1)])),_:1},8,["id","onClick"])])])),_:1})}l(9665);var n=l(1809),u=l(6293),c=l(8339);const p={name:"MsCard",props:{item:{type:Object,default(){}},lable:{type:String},func:{type:Function}},setup(e){const t=(0,u.o)(),{cart:l}=(0,n.Jk)(t),a=(0,c.tv)(),i=e=>{a.push({name:"productPage",params:{id:e.currentTarget.id}})},o=t=>{const l=e.func;l(t.currentTarget.id)};return{cart:l,handleClick:o,toProductCard:i}}};var g=l(1639),w=l(4458),y=l(3190),f=l(8879),x=l(9984),C=l.n(x);const b=(0,g.Z)(p,[["render",m]]),k=b;C()(p,"components",{QCard:w.Z,QCardSection:y.Z,QBtn:f.Z})},399:(e,t,l)=>{l.r(t),l.d(t,{default:()=>P});var a=l(9835);const i=(0,a._)("h2",{class:"flex justify-center MsTitle"},"Cart",-1),o={key:0},s={key:1},d={class:"flex justify-between cart_btns"},r={class:"q-pa-md row justify-center q-gutter-md"},m={class:"q-pa-md q-gutter-sm"},n=(0,a._)("div",{class:"text-h6 text-grey"},"Please enter details",-1),u={class:"q-gutter-md",style:{"min-width":"700px"}},c={class:"text-center"};function p(e,t,l,p,g,w){const y=(0,a.up)("q-btn"),f=(0,a.up)("ms-card"),x=(0,a.up)("q-page"),C=(0,a.up)("q-space"),b=(0,a.up)("q-tooltip"),k=(0,a.up)("q-bar"),h=(0,a.up)("q-card-section"),_=(0,a.up)("q-input"),q=(0,a.up)("q-select"),V=(0,a.up)("q-form"),v=(0,a.up)("q-card"),W=(0,a.up)("q-dialog"),Z=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a.Wm)(x,{class:"flex justify-center"},{default:(0,a.w5)((()=>[p.items.length?((0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",d,[(0,a.Wm)(y,{class:"q-ma-xs",color:"grey",onClick:t[0]||(t[0]=e=>p.dialog=!0)},{default:(0,a.w5)((()=>[(0,a.Uk)("Buy")])),_:1}),(0,a.Wm)(y,{class:"q-ma-xs",to:"/",label:"Back to catalog"})]),(0,a._)("div",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.items,(e=>((0,a.wg)(),(0,a.j4)(f,{key:e.id,item:e,lable:p.btnLable,func:p.remoteFromCart},null,8,["item","lable","func"])))),128))])])):((0,a.wg)(),(0,a.iD)("h2",o,"Your cart is empty :("))])),_:1}),(0,a._)("div",m,[(0,a.Wm)(W,{modelValue:p.dialog,"onUpdate:modelValue":t[10]||(t[10]=e=>p.dialog=e),persistent:"",maximized:p.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{class:"text-white"},{default:(0,a.w5)((()=>[(0,a.Wm)(k,null,{default:(0,a.w5)((()=>[(0,a.Wm)(C),(0,a.Wm)(y,{dense:"",flat:"",icon:"minimize",onClick:t[1]||(t[1]=e=>p.maximizedToggle=!1),disable:!p.maximizedToggle},{default:(0,a.w5)((()=>[p.maximizedToggle?((0,a.wg)(),(0,a.j4)(b,{key:0,class:"bg-white text-primary"},{default:(0,a.w5)((()=>[(0,a.Uk)("Minimize")])),_:1})):(0,a.kq)("",!0)])),_:1},8,["disable"]),(0,a.Wm)(y,{dense:"",flat:"",icon:"crop_square",onClick:t[2]||(t[2]=e=>p.maximizedToggle=!0),disable:p.maximizedToggle},{default:(0,a.w5)((()=>[p.maximizedToggle?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(b,{key:0,class:"bg-white text-primary"},{default:(0,a.w5)((()=>[(0,a.Uk)("Maximize")])),_:1}))])),_:1},8,["disable"]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(y,{dense:"",flat:"",icon:"close"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{class:"bg-white text-primary"},{default:(0,a.w5)((()=>[(0,a.Uk)("Close")])),_:1})])),_:1})),[[Z]])])),_:1}),(0,a.Wm)(h,{class:"text-center"},{default:(0,a.w5)((()=>[n])),_:1}),(0,a.Wm)(h,{class:"q-pt-none flex justify-center"},{default:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a.Wm)(V,null,{default:(0,a.w5)((()=>[(0,a.Wm)(_,{modelValue:e.text,"onUpdate:modelValue":t[3]||(t[3]=t=>e.text=t),label:"Country"},null,8,["modelValue"]),(0,a.Wm)(_,{modelValue:e.text,"onUpdate:modelValue":t[4]||(t[4]=t=>e.text=t),label:"City"},null,8,["modelValue"]),(0,a.Wm)(_,{modelValue:e.text,"onUpdate:modelValue":t[5]||(t[5]=t=>e.text=t),label:"Address"},null,8,["modelValue"]),(0,a.Wm)(q,{modelValue:p.model,"onUpdate:modelValue":t[6]||(t[6]=e=>p.model=e),options:p.options,label:"Payment details"},null,8,["modelValue","options"]),"Credit card"===p.model?((0,a.wg)(),(0,a.j4)(_,{key:0,modelValue:e.text,"onUpdate:modelValue":t[7]||(t[7]=t=>e.text=t),label:"Card details"},null,8,["modelValue"])):(0,a.kq)("",!0),"Postal order"===p.model?((0,a.wg)(),(0,a.j4)(_,{key:1,modelValue:e.text,"onUpdate:modelValue":t[8]||(t[8]=t=>e.text=t),label:"Postal order details"},null,8,["modelValue"])):(0,a.kq)("",!0),"With your smile"===p.model?((0,a.wg)(),(0,a.j4)(_,{key:2,modelValue:e.text,"onUpdate:modelValue":t[9]||(t[9]=t=>e.text=t),label:"Give me a smile"},null,8,["modelValue"])):(0,a.kq)("",!0)])),_:1})])])),_:1}),(0,a._)("div",c,[(0,a.wy)((0,a.Wm)(y,{label:"Go!",color:"grey"},null,512),[[Z]])])])),_:1})])),_:1},8,["modelValue","maximized"])])],64)}var g=l(7544),w=l(6293),y=l(499);const f={name:"CartPage",components:{MsCard:g.Z},data(){return{items:[]}},setup(){const e=(0,w.o)(),t=(0,a.Fl)((()=>e.cart??[])),l="Delete",i=t=>{e.removeFromCart(t)};return{items:t,btnLable:l,dialog:(0,y.iH)(!1),maximizedToggle:(0,y.iH)(!0),model:(0,y.iH)(null),options:["Credit card","Postal order","Cash to courier","With your smile"],remoteFromCart:i}}};var x=l(1639),C=l(9885),b=l(8879),k=l(2074),h=l(4458),_=l(4526),q=l(136),V=l(6858),v=l(3190),W=l(8326),Z=l(6611),T=l(4363),z=l(2146),U=l(9984),Q=l.n(U);const j=(0,x.Z)(f,[["render",p]]),P=j;Q()(f,"components",{QPage:C.Z,QBtn:b.Z,QDialog:k.Z,QCard:h.Z,QBar:_.Z,QSpace:q.Z,QTooltip:V.Z,QCardSection:v.Z,QForm:W.Z,QInput:Z.Z,QSelect:T.Z}),Q()(f,"directives",{ClosePopup:z.Z})}}]);