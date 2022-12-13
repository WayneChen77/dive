"use strict";(self["webpackChunkDive"]=self["webpackChunkDive"]||[]).push([[440],{8440:function(e,t,a){a.r(t),a.d(t,{default:function(){return bt}});var l=a(3396),s=a(9242),o=a(7139);const d=e=>((0,l.dD)("data-v-6d6a8250"),e=e(),(0,l.Cn)(),e),n={class:"container UserCarts"},i={class:"title mb-5"},r={"aria-label":"breadcrumb"},c={class:"breadcrumb"},u={class:"breadcrumb-item"},m=d((()=>(0,l._)("li",{class:"breadcrumb-item active","aria-current":"page"},"購物車",-1))),b=d((()=>(0,l._)("hr",null,null,-1))),p={class:"position-relative m-4"},v={class:"progress",style:{height:"5px"}},_={key:0,class:"progress-bar bg-titleblue",role:"progressbar",style:{width:"0%"},"aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"},g={key:1,class:"progress-bar bg-titleblue",role:"progressbar",style:{width:"33%"},"aria-valuenow":"33","aria-valuemin":"0","aria-valuemax":"100"},f=(0,l.uE)('<button type="button" class="position-absolute top-0 translate-middle btn btn-titleblue rounded-pill btnadj" style="left:0;" data-v-6d6a8250><i class="bi bi-cart2" data-v-6d6a8250></i></button><button type="button" class="position-absolute top-0 translate-middle btn btn-titleblue rounded-pill btnadj" style="left:33%;" data-v-6d6a8250><i class="bi bi-card-checklist" data-v-6d6a8250></i></button><button type="button" class="position-absolute top-0 translate-middle btn btn-titleblue rounded-pill btnadj" style="will-change:;left:66%;" data-v-6d6a8250><i class="bi bi-cash-coin" data-v-6d6a8250></i></button><button type="button" class="position-absolute top-0 translate-middle btn btn-titleblue rounded-pill btnadj" style="left:100%;" data-v-6d6a8250><i class="bi bi-emoji-smile" data-v-6d6a8250></i></button>',4),w={class:"row"},h={class:"col-12 col-sm-8"},y=d((()=>(0,l._)("div",{class:"cartsrwd"},null,-1))),k={class:"col-12 col-md-4"},C={key:0,class:"input-group mt-md-0 mt-3 mb-3 input-group-sm"},x={for:"coupon"},D={class:"input-group-append ms-3"},V=["disabled"],U=d((()=>(0,l._)("span",{class:"mt-3 text-titleblue"},"迎接假期！輸入： godive ，即享88折優惠！",-1))),q={key:1,class:"col-12 col-md-10 rounded mb-3"},j={class:"accordion w-100",id:"accordionExample"},W={class:"accordion-item"},$=d((()=>(0,l._)("h2",{class:"accordion-header",id:"headingOne"},[(0,l._)("button",{class:"accordion-button text-titleblue",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}," 購物車品項 ")],-1))),Z={id:"collapseOne",class:"accordion-collapse collapse show text-titleblue","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},z={class:"accordion-body"},I={class:"col-8"},O={class:"col-4 text-end"},E=d((()=>(0,l._)("hr",null,null,-1))),H={class:"mb-3 pe-2 col-12 col-md-10"},M={class:"border rounded p-0"},P=d((()=>(0,l._)("div",{class:"bg-bgblue rounded-top text-center text-titleblue py-3 mb-3"},[(0,l._)("h3",null,"訂單資料")],-1))),F={class:"mx-3"},N={class:"text-end"},Y={key:0,class:"mx-3"},J={class:"text-end"},K={class:"text-danger mx-3"},S={class:"text-end"},T={class:"text-end"},A=["disabled"];function L(e,t,a,d,L,R){const X=(0,l.up)("router-link"),B=(0,l.up)("CartsItem"),G=(0,l.up)("CartsForm");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("div",i,[(0,l._)("nav",r,[(0,l._)("ol",c,[(0,l._)("li",u,[(0,l.Wm)(X,{class:"text-decoration-none",to:"/home"},{default:(0,l.w5)((()=>[(0,l.Uk)("首頁")])),_:1})]),m])]),b,(0,l._)("div",p,[(0,l._)("div",v,[d.sendData?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",_)),d.sendData?((0,l.wg)(),(0,l.iD)("div",g)):(0,l.kq)("",!0)]),f])]),(0,l._)("div",w,[(0,l._)("div",h,[d.sendData?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(B,{key:0})),y]),(0,l._)("div",k,[d.sendData?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",C,[(0,l._)("label",x,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control mb-3","onUpdate:modelValue":t[0]||(t[0]=e=>d.couponCode=e),placeholder:"請輸入優惠碼"},null,512),[[s.nr,d.couponCode]])]),(0,l._)("div",D,[(0,l._)("button",{disabled:d.carts.length<1,class:"btn btn-outline-titleblue",type:"button",onClick:t[1]||(t[1]=(...e)=>d.addCouponCode&&d.addCouponCode(...e))}," 套用優惠碼 ",8,V)]),U])),d.sendData?((0,l.wg)(),(0,l.iD)("div",q,[(0,l._)("div",j,[(0,l._)("div",W,[$,(0,l._)("div",Z,[(0,l._)("div",z,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.carts,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"row",key:e.id},[(0,l._)("div",I,(0,o.zw)(e.product.title),1),(0,l._)("div",O,"X"+(0,o.zw)(e.qty),1),E])))),128))])])])])])):(0,l.kq)("",!0),(0,l._)("div",H,[(0,l._)("div",M,[P,(0,l._)("div",F,[(0,l.Uk)(" 商品金額: "),(0,l._)("p",N,"$"+(0,o.zw)(this.$filters.currency(d.price.total)),1)]),d.price.total!=d.price.final_total?((0,l.wg)(),(0,l.iD)("div",Y,[(0,l.Uk)(" 折扣金額: "),(0,l._)("p",J,"$"+(0,o.zw)(this.$filters.currency(d.price.total-d.price.final_total)),1)])):(0,l.kq)("",!0),(0,l._)("div",K,[(0,l.Uk)(" 總金額: "),(0,l._)("p",S,"$"+(0,o.zw)(this.$filters.currency(d.price.final_total)),1)]),(0,l._)("div",T,[d.sendData?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("button",{key:0,class:"btn btn-outline-titleblue m-3",type:"button",disabled:d.carts.length<1,onClick:t[2]||(t[2]=e=>d.sendData=!0)}," 送出資料 ",8,A))])])]),d.isMounted?((0,l.wg)(),(0,l.j4)(l.lR,{key:2,to:".cartsrwd",class:"imgtp",disabled:d.isDisabled},[d.sendData?((0,l.wg)(),(0,l.j4)(G,{key:0})):(0,l.kq)("",!0)],8,["disabled"])):(0,l.kq)("",!0)])])])}const R={class:"row"},X={class:"border"},B={key:0,class:"container mt-4"},G={class:"table table-hover align-middle align-middle"},Q=(0,l._)("thead",null,[(0,l._)("tr",{class:"align-middle text-sm text-gray-400"},[(0,l._)("th",{scope:"col",style:{width:"52%"}},"購物車"),(0,l._)("th",{scope:"col",class:"d-none d-md-table-cell",style:{width:"23%"}},"人數"),(0,l._)("th",{scope:"col",class:"d-none d-md-table-cell",style:{width:"15%"}},"總計"),(0,l._)("th",{scope:"col",class:"d-none d-md-table-cell text-center",style:{width:"10%"}}," 刪除 ")])],-1),ee={class:"d-flex align-items-center flex-column flex-sm-row"},te={class:"d-md-none p-2"},ae=["onClick"],le=(0,l._)("i",{class:"bi bi-trash"},null,-1),se=[le],oe=["src","alt","title"],de={class:"text-center py-4"},ne={class:"h5 fw-bolder"},ie={class:"d-md-none"},re={class:"py-2"},ce=["onUpdate:modelValue","onChange"],ue=(0,l._)("option",{value:"1"},"1人",-1),me=(0,l._)("option",{value:"2"},"2人",-1),be=(0,l._)("option",{value:"3"},"3人",-1),pe=(0,l._)("option",{value:"4"},"4人",-1),ve=[ue,me,be,pe],_e={class:"d-none d-md-table-cell text-end align-middle"},ge=["onUpdate:modelValue","onChange"],fe=(0,l._)("option",{value:"1"},"1人",-1),we=(0,l._)("option",{value:"2"},"2人",-1),he=(0,l._)("option",{value:"3"},"3人",-1),ye=(0,l._)("option",{value:"4"},"4人",-1),ke=[fe,we,he,ye],Ce={class:"d-none d-md-table-cell text-end h5"},xe={class:"d-none d-md-table-cell text-end"},De=["onClick"],Ve=(0,l._)("i",{class:"bi bi-trash"},null,-1),Ue=[Ve],qe={key:1,class:"container-fluid mt-4"},je={class:"text-center"},We=(0,l._)("i",{class:"bi bi-cart4 display-1 fw-bold text-dark"},null,-1),$e=(0,l._)("h3",{class:"p-3"},"目前購物車還沒有商品唷",-1);function Ze(e,t,a,d,n,i){const r=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("button",{class:"btn btn-outline-titleblue mb-3",type:"button",onClick:t[0]||(t[0]=(...e)=>d.deleteCart&&d.deleteCart(...e))},"清空資料"),(0,l._)("div",R,[(0,l._)("div",X,[d.carts.length>0?((0,l.wg)(),(0,l.iD)("div",B,[(0,l._)("table",G,[Q,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.carts,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.id},[(0,l._)("td",ee,[(0,l._)("div",te,[(0,l._)("button",{type:"button",class:"btn d-md-block mx-auto btnClose",onClick:e=>d.removeCartItem(t.id)},se,8,ae)]),(0,l._)("img",{class:"productImg w-50 p-1",src:t.product.imageUrl,alt:t.product.title,title:t.product.title},null,8,oe),(0,l._)("div",de,[(0,l._)("div",ne,(0,o.zw)(t.product.title),1),(0,l._)("div",ie,[(0,l._)("div",re,"NT$"+(0,o.zw)(e.$filters.currency(t.total)),1),(0,l.wy)((0,l._)("select",{style:{width:"50vw",padding:"auto"},class:"form-select text-center","onUpdate:modelValue":e=>t.qty=e,"aria-label":"Default select example",onChange:e=>d.adjCart(t)},ve,40,ce),[[s.bM,t.qty,void 0,{number:!0}]])])])]),(0,l._)("td",_e,[(0,l.wy)((0,l._)("select",{class:"form-select px-1","onUpdate:modelValue":e=>t.qty=e,"aria-label":"Default select example",onChange:e=>d.adjCart(t)},ke,40,ge),[[s.bM,t.qty,void 0,{number:!0}]])]),(0,l._)("td",Ce," NT$"+(0,o.zw)(e.$filters.currency(t.total)),1),(0,l._)("td",xe,[(0,l._)("button",{type:"button",class:"btn d-md-block mx-auto btnClose",onClick:e=>d.removeCartItem(t.id)},Ue,8,De)])])))),128))])])])):((0,l.wg)(),(0,l.iD)("div",qe,[(0,l._)("div",je,[We,$e,(0,l.Wm)(r,{to:"/UserProducts",class:"btn btn-outline-titleblue btn-lg mb-5"},{default:(0,l.w5)((()=>[(0,l.Uk)("選購商品")])),_:1})])]))])])],64)}var ze=a(2578),Ie=a(6774);const Oe=(0,Ie.Z)();var Ee={setup(){const{carts:e}=(0,ze.Jk)(Oe),{adjCart:t,removeCartItem:a,deleteCart:l,reduceCart:s,addCart:o}=Oe;return{carts:e,adjCart:t,removeCartItem:a,deleteCart:l,reduceCart:s,addCart:o}}},He=a(89);const Me=(0,He.Z)(Ee,[["render",Ze]]);var Pe=Me;const Fe={class:"row justify-content-center p-md-0 p-3"},Ne=(0,l._)("h3",{class:"text-center fs-3"},"顧客聯絡資料",-1),Ye={class:"my-3"},Je=(0,l._)("label",{for:"name",class:"form-label"},"聯絡人姓名",-1),Ke={class:"mb-3"},Se=(0,l._)("label",{for:"email",class:"form-label"},"聯絡人Email",-1),Te={class:"mb-3"},Ae=(0,l._)("label",{for:"tel",class:"form-label"},"聯絡人電話",-1),Le={class:"mb-3"},Re=(0,l._)("label",{for:"address",class:"form-label"},"聯絡人地址",-1),Xe={class:"mb-3"},Be=(0,l._)("label",{for:"message",class:"form-label"},"留言",-1),Ge=(0,l._)("div",{class:"text-end mb-3"},[(0,l._)("button",{class:"btn btn-danger"},"送出資料")],-1);function Qe(e,t,a,d,n,i){const r=(0,l.up)("FieldView"),c=(0,l.up)("ErrorMessage"),u=(0,l.up)("FormView");return(0,l.wg)(),(0,l.iD)("div",Fe,[Ne,(0,l.Wm)(u,{class:"col-md-10 bg-titleblue rounded my-3 text-warning",onSubmit:d.createOrder},{default:(0,l.w5)((({errors:e})=>[(0,l._)("div",Ye,[Je,(0,l.Wm)(r,{id:"name",name:"姓名",type:"text",class:(0,o.C_)(["form-control",{"is-invalid":e["姓名"],"is-valid":!e[0]&&""!=d.data.form.user.name}]),placeholder:"請輸入聯絡人姓名",rules:d.isName,modelValue:d.data.form.user.name,"onUpdate:modelValue":t[0]||(t[0]=e=>d.data.form.user.name=e)},null,8,["class","rules","modelValue"]),(0,l.Wm)(c,{name:"姓名",class:"invalid-feedback"})]),(0,l._)("div",Ke,[Se,(0,l.Wm)(r,{id:"email",name:"email",type:"email",class:(0,o.C_)(["form-control",{"is-invalid":e["email"],"is-valid":!e[0]&&""!=d.data.form.user.email}]),placeholder:"請輸入聯絡人Email",rules:"email|required",modelValue:d.data.form.user.email,"onUpdate:modelValue":t[1]||(t[1]=e=>d.data.form.user.email=e)},null,8,["class","modelValue"]),(0,l.Wm)(c,{name:"email",class:"invalid-feedback"})]),(0,l._)("div",Te,[Ae,(0,l.Wm)(r,{id:"tel",name:"電話",type:"tel",class:(0,o.C_)(["form-control",{"is-invalid":e["電話"],"is-valid":!e[0]&&""!=d.data.form.user.tel}]),placeholder:"請輸入聯絡人電話",rules:d.isPhone,modelValue:d.data.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=e=>d.data.form.user.tel=e)},null,8,["class","rules","modelValue"]),(0,l.Wm)(c,{name:"電話",class:"invalid-feedback"})]),(0,l._)("div",Le,[Re,(0,l.Wm)(r,{id:"address",name:"地址",type:"text",class:(0,o.C_)(["form-control",{"is-invalid":e["地址"],"is-valid":!e[0]&&""!=d.data.form.user.address}]),placeholder:"請輸入聯絡人地址",rules:"required",modelValue:d.data.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=e=>d.data.form.user.address=e)},null,8,["class","modelValue"]),(0,l.Wm)(c,{name:"地址",class:"invalid-feedback"})]),(0,l._)("div",Xe,[Be,(0,l.wy)((0,l._)("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[4]||(t[4]=e=>d.data.form.message=e)},null,512),[[s.nr,d.data.form.message]])]),Ge])),_:1},8,["onSubmit"])])}a(7658);var et=a(6294),tt=a(4870),at=a(2483),lt=a(70);const st=(0,et.Z)(),ot=(0,Ie.Z)();var dt={setup(){const e=(0,tt.qj)({form:{user:{name:"",email:"",tel:"",address:""},message:""}}),t=t=>{const a=/^[\u4e00-\u9fa5A-Za-z]{0,}$/;return""===e.form.user.name?"姓名為必填":!!a.test(t)||"需要中文或英文姓名"},a=t=>{const a=/^(09)[0-9]{8}$/;return""===e.form.user.tel?"電話為必填":!!a.test(t)||"需要正確的電話號碼"},l=(0,at.tv)(),s=()=>{const t="https://vue3-course-api.hexschool.io/api/waynechendive-api/order",a=e.form;lt.ZP.post(t,{data:a}).then((e=>{const t={content:e.data.message};st.pushMessage(t),ot.getusercarts(),l.push(`/Order/PayView/${e.data.orderId}`)}))};return{data:e,isName:t,isPhone:a,createOrder:s}}};const nt=(0,He.Z)(dt,[["render",Qe]]);var it=nt;const rt=(0,Ie.Z)(),ct=(0,et.Z)();var ut={setup(){const e=(0,tt.iH)(!1),t=(0,tt.iH)(!1),a=(0,tt.iH)(!1),s=(0,tt.iH)("");(0,l.bv)((()=>{e.value=!0,window.innerWidth<430&&(t.value=!0),window.addEventListener("resize",(()=>{console.log(window.screen.width),window.innerWidth<430?t.value=!0:t.value=!1}))}));const{carts:o,price:d}=(0,ze.Jk)(rt),{getusercarts:n}=rt;n();const i=()=>{const e="https://vue3-course-api.hexschool.io/api/waynechendive-api/coupon",t={code:s.value};lt.ZP.post(e,{data:t}).then((e=>{const t={content:e.data.message};ct.pushMessage(t)})),n()};return{couponCode:s,sendData:a,isDisabled:t,isMounted:e,carts:o,price:d,getusercarts:n,addCouponCode:i}},components:{CartsItem:Pe,CartsForm:it},methods:{}};const mt=(0,He.Z)(ut,[["render",L],["__scopeId","data-v-6d6a8250"]]);var bt=mt}}]);
//# sourceMappingURL=440.e459cdc3.js.map