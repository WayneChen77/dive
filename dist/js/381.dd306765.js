"use strict";(self["webpackChunkDive"]=self["webpackChunkDive"]||[]).push([[381],{7064:function(e,t,a){a.d(t,{Z:function(){return P}});var l=a(3396),i=a(7139);const o={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},s={class:"modal-dialog",role:"document"},d={class:"modal-content"},n=(0,l._)("div",{class:"modal-header bg-warning"},[(0,l._)("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"刪除品項"),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),c={class:"modal-body"},r={class:"modal-title",id:"exampleModalLabel"},u={key:0},p={key:1},m={key:0},g={key:1},v={key:2},h={class:"modal-footer"};function _(e,t,a,_,b,f){return(0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("div",s,[(0,l._)("div",d,[n,(0,l._)("div",c,[(0,l._)("h5",r,[(0,l._)("p",null,[(0,l._)("span",null,(0,i.zw)(a.product.title),1),a.product.code?((0,l.wg)(),(0,l.iD)("span",u,"折扣碼:"+(0,i.zw)(a.product.code),1)):(0,l.kq)("",!0),a.product.price?((0,l.wg)(),(0,l.iD)("span",p,"$:"+(0,i.zw)(a.product.price),1)):(0,l.kq)("",!0)]),a.product.percent?((0,l.wg)(),(0,l.iD)("p",m,[(0,l.Uk)(" 折數"),(0,l._)("span",null,(0,i.zw)(a.product.percent),1)])):(0,l.kq)("",!0),a.product.due_date?((0,l.wg)(),(0,l.iD)("p",g,[(0,l.Uk)(" 到期日"),(0,l._)("span",null,(0,i.zw)(this.$filters.date(a.product.due_date)),1)])):(0,l.kq)("",!0),(0,l._)("p",null,"訂單編號:"+(0,i.zw)(a.product.id),1),a.product.user?((0,l.wg)(),(0,l.iD)("p",v,"客戶:"+(0,i.zw)(a.product.user.name),1)):(0,l.kq)("",!0)])]),(0,l._)("div",h,[(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=t=>e.$emit("del-item",a.product))}," 確認刪除 "),(0,l._)("button",{type:"button",class:"btn btn-secondary",onClick:t[1]||(t[1]=(...t)=>e.hideModal&&e.hideModal(...t))},"取消")])])])],512)}var b=a(3618),f={data(){return{modal:""}},props:{product:{type:Object},default(){return{}}},mixins:[b.Z]},w=a(89);const y=(0,w.Z)(f,[["render",_]]);var P=y},8636:function(e,t,a){a.d(t,{Z:function(){return b}});var l=a(3396),i=a(7139),o=a(9242);const s={"aria-label":"Page navigation example"},d={class:"pagination justify-content-center"},n=(0,l._)("a",{class:"page-link",href:" ","aria-label":"Previous"},[(0,l._)("span",{"aria-hidden":"true"},"«")],-1),c=[n],r=["onClick","onKeyup"],u={class:"page-link",href:"#"},p=(0,l._)("a",{class:"page-link",href:"","aria-label":"Next"},[(0,l._)("span",{"aria-hidden":"true"},"»")],-1),m=[p];function g(e,t,a,n,p,g){return(0,l.wg)(),(0,l.iD)("nav",s,[(0,l._)("ul",d,[(0,l._)("li",{class:(0,i.C_)(["page-item",{disabled:!a.pages.has_pre}]),onClick:t[0]||(t[0]=(0,o.iM)((e=>g.clickPagination(a.pages.current_page-1)),["prevent"])),onKeyup:t[1]||(t[1]=(0,o.D2)((e=>g.clickPagination(a.pages.current_page-1)),["enter"]))},c,34),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.pages.total_pages,(e=>((0,l.wg)(),(0,l.iD)("li",{class:(0,i.C_)(["page-item",{active:a.pages.current_page===e}]),key:"pages"+e,onClick:(0,o.iM)((t=>g.clickPagination(e)),["prevent"]),onKeyup:(0,o.D2)((t=>g.clickPagination(e)),["enter"])},[(0,l._)("a",u,(0,i.zw)(e),1)],42,r)))),128)),(0,l._)("li",{class:(0,i.C_)(["page-item",{disabled:!a.pages.has_next}]),onClick:t[2]||(t[2]=(0,o.iM)((e=>g.clickPagination(a.pages.current_page+1)),["prevent"])),onKeyup:t[3]||(t[3]=(0,o.D2)((e=>g.clickPagination(a.pages.current_page+1)),["enter"]))},m,34)])])}var v={props:["pages"],methods:{updatePage(){},clickPagination(e){this.$emit("change-pagination",e)}}},h=a(89);const _=(0,h.Z)(v,[["render",g]]);var b=_},4381:function(e,t,a){a.r(t),a.d(t,{default:function(){return Ue}});var l=a(3396),i=a(7139);const o=e=>((0,l.dD)("data-v-77c2c516"),e=e(),(0,l.Cn)(),e),s={class:"text-end"},d={class:"table mt-4 container diveProduct"},n=o((()=>(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{class:"rwd"},"分類"),(0,l._)("th",{class:"rwdname"},"名稱"),(0,l._)("th",{class:"rwd"},"原價"),(0,l._)("th",{class:"rwd"},"優惠價"),(0,l._)("th",null,"上架"),(0,l._)("th",null,"編輯")])],-1))),c={class:"rwd"},r={class:"rwdname"},u=o((()=>(0,l._)("br",null,null,-1))),p={class:"text-right"},m={class:"text-right rwd"},g={class:"text-success"},v={class:"btn-group"},h=["onClick"],_=["onClick"];function b(e,t,a,o,b,f){const w=(0,l.up)("LoadingView"),y=(0,l.up)("DivePagination"),P=(0,l.up)("DiveModal"),k=(0,l.up)("DeleteModal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(w,{active:b.isLoading},null,8,["active"]),(0,l._)("div",s,[(0,l._)("button",{class:"btn btn-titleblue col-2",onClick:t[0]||(t[0]=e=>f.openModal(!0))},"新增課程")]),(0,l._)("table",d,[n,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(b.diveProducts,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.id},[(0,l._)("td",c,(0,i.zw)(t.category),1),(0,l._)("td",r,[(0,l.Uk)((0,i.zw)(t.title)+" ",1),u,(0,l.Uk)(" "+(0,i.zw)(`(${t.engtitle})`),1)]),(0,l._)("td",p,(0,i.zw)(e.$filters.currency(t.origin_price))+"原價",1),(0,l._)("td",m,(0,i.zw)(e.$filters.currency(t.price)),1),(0,l._)("td",null,[(0,l._)("span",g,(0,i.zw)(1===t.is_enabled?"(上架)":"(下架)"),1)]),(0,l._)("td",null,[(0,l._)("div",v,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>f.openModal(!1,t)}," 編輯 ",8,h),(0,l._)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>f.deleteModal(t)},"刪除",8,_)])])])))),128))])]),(0,l.Wm)(y,{pages:b.pagination,onChangePagination:f.getDiveProducts},null,8,["pages","onChangePagination"]),(0,l.Wm)(P,{product:b.diveProduct,onUpdateProduct:f.updateProduct,ref:"DiveModal"},null,8,["product","onUpdateProduct"]),(0,l.Wm)(k,{product:b.diveProduct,onDelItem:f.delitem,ref:"DeleteModal"},null,8,["product","onDelItem"])],64)}a(7658);var f=a(9242);const w={class:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},y={class:"modal-dialog modal-xl",role:"document"},P={class:"modal-content border-0"},k=(0,l._)("div",{class:"modal-header bg-dark text-white"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,l._)("span",null,"新增產品")]),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),D={class:"modal-body"},x={class:"row"},U={class:"col-sm-4"},M={class:"mb-3"},C={for:"image",class:"form-label"},$={class:"mb-3"},L={for:"customFile",class:"form-label"},z=(0,l._)("i",{class:"fas fa-spinner fa-spin"},null,-1),V=["src"],F={key:0,class:"mt-5"},Z={class:"mb-3"},q={for:"customFile",class:"form-label"},K=(0,l._)("i",{class:"fas fa-spinner fa-spin"},null,-1),I=["onUpdate:modelValue"],j=["onClick"],W={key:0},H=["src","id"],Y={class:"col-sm-8"},N={class:"row gx-2"},S={class:"mb-3 col-md-6"},O={for:"title",class:"form-label"},A={for:"engtitle",class:"form-label"},B={class:"mb-3 col-md-6"},E={for:"category",class:"form-label"},G={class:"row gx-2"},J={class:"mb-3 col-md-6"},Q={for:"origin_price",class:"form-label"},R={class:"mb-3 col-md-6"},T={for:"price",class:"form-label"},X=(0,l._)("hr",null,null,-1),ee={class:"row gx-2"},te={class:"mb-3 col-md-12"},ae={for:"description",class:"form-label"},le={class:"row gx-2"},ie={class:"mb-3 col-12"},oe={for:"content",class:"form-label"},se={class:"row gx-2"},de={class:"mb-3 col-12"},ne={for:"precautions",class:"form-label"},ce={class:"mb-3"},re={class:"form-check"},ue={class:"form-check-label mx-3",for:"is_enabled"},pe={class:"modal-footer"},me=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ge(e,t,a,i,o,s){const d=(0,l.up)("swiper-slide"),n=(0,l.up)("swiper");return(0,l.wg)(),(0,l.iD)("div",w,[(0,l._)("div",y,[(0,l._)("div",P,[k,(0,l._)("div",D,[(0,l._)("div",x,[(0,l._)("div",U,[(0,l._)("div",M,[(0,l._)("label",C,[(0,l.Uk)("輸入圖片網址 "),(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":t[0]||(t[0]=e=>o.diveProduct.imageUrl=e)},null,512),[[f.nr,o.diveProduct.imageUrl]])]),(0,l._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t[1]||(t[1]=e=>o.diveProduct.imageUrl="")}," 移除 ")]),(0,l._)("div",$,[(0,l._)("label",L,[(0,l.Uk)("或 上傳圖片 "),z,(0,l._)("input",{type:"file",class:"form-control",ref:"fileInput",onChange:t[2]||(t[2]=(...e)=>s.uploadFile&&s.uploadFile(...e))},null,544)]),(0,l._)("div",null,[(0,l._)("img",{class:"w-100",src:o.diveProduct.imageUrl,alt:""},null,8,V)])]),o.diveProduct.images?((0,l.wg)(),(0,l.iD)("div",F,[(0,l._)("div",Z,[(0,l._)("label",q,[(0,l.Uk)("新增 其餘圖片 "),(0,l._)("input",{id:"customFile",type:"file",class:"form-control",ref:"fileInputs",onChange:t[3]||(t[3]=t=>s.uploadFiles(e.key)),multiple:""},null,544),K])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.diveProduct.images,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"mb-3 input-group",key:t},[(0,l.wy)((0,l._)("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":e=>o.diveProduct.images[t]=e,placeholder:"請輸入連結"},null,8,I),[[f.nr,o.diveProduct.images[t]]]),(0,l._)("button",{type:"button",class:"btn btn-outline-danger",onClick:e=>o.diveProduct.images.splice(t,1)}," 移除 ",8,j)])))),128)),o.diveProduct.images[o.diveProduct.images.length-1]||!o.diveProduct.images.length?((0,l.wg)(),(0,l.iD)("div",W,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[4]||(t[4]=e=>o.diveProduct.images.push(""))}," 新增其餘圖片網址 ")])):(0,l.kq)("",!0),o.diveProduct.images?((0,l.wg)(),(0,l.j4)(n,{key:1,class:"d-block w-100 h-25",modules:o.modules,"slides-per-view":1,"space-between":50,navigation:"",pagination:{clickable:!0},scrollbar:{draggable:!0}},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.diveProduct.images,((e,t)=>((0,l.wg)(),(0,l.j4)(d,{key:t},{default:(0,l.w5)((()=>[(0,l._)("img",{src:e,id:e,class:"d-block img-fluid",alt:"..."},null,8,H)])),_:2},1024)))),128))])),_:1},8,["modules"])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)]),(0,l._)("div",Y,[(0,l._)("div",N,[(0,l._)("div",S,[(0,l._)("label",O,[(0,l.Uk)("*產品名稱"),(0,l.wy)((0,l._)("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入名稱","onUpdate:modelValue":t[5]||(t[5]=e=>o.diveProduct.title=e)},null,512),[[f.nr,o.diveProduct.title]])]),(0,l._)("label",A,[(0,l.Uk)("英文名稱"),(0,l.wy)((0,l._)("input",{id:"engtitle",type:"text",class:"form-control",placeholder:"請輸入名稱","onUpdate:modelValue":t[6]||(t[6]=e=>o.diveProduct.engtitle=e)},null,512),[[f.nr,o.diveProduct.engtitle]])])]),(0,l._)("div",B,[(0,l._)("label",E,[(0,l.Uk)("*分類"),(0,l.wy)((0,l._)("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":t[7]||(t[7]=e=>o.diveProduct.category=e)},null,512),[[f.nr,o.diveProduct.category]])])])]),(0,l._)("div",G,[(0,l._)("div",J,[(0,l._)("label",Q,[(0,l.Uk)("*原價"),(0,l.wy)((0,l._)("input",{id:"origin_price",type:"number",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":t[8]||(t[8]=e=>o.diveProduct.origin_price=e)},null,512),[[f.nr,o.diveProduct.origin_price]])])]),(0,l._)("div",R,[(0,l._)("label",T,[(0,l.Uk)("*優惠價"),(0,l.wy)((0,l._)("input",{id:"price",type:"number",class:"form-control",placeholder:"請輸入優惠價","onUpdate:modelValue":t[9]||(t[9]=e=>o.diveProduct.price=e)},null,512),[[f.nr,o.diveProduct.price]])])])]),X,(0,l._)("div",ee,[(0,l._)("div",te,[(0,l._)("label",ae,[(0,l.Uk)("課程描述 "),(0,l.wy)((0,l._)("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入描述","onUpdate:modelValue":t[10]||(t[10]=e=>o.diveProduct.description=e)},null,512),[[f.nr,o.diveProduct.description]])])])]),(0,l._)("div",le,[(0,l._)("div",ie,[(0,l._)("label",oe,[(0,l.Uk)("課程內容 "),(0,l.wy)((0,l._)("textarea",{id:"content",type:"text",class:"form-control",placeholder:"請輸入課程內容","onUpdate:modelValue":t[11]||(t[11]=e=>o.diveProduct.content=e)},null,512),[[f.nr,o.diveProduct.content]])])])]),(0,l._)("div",se,[(0,l._)("div",de,[(0,l._)("label",ne,[(0,l.Uk)("注意事項 "),(0,l.wy)((0,l._)("textarea",{id:"precautions",type:"text",class:"form-control",placeholder:"請輸入注意事項","onUpdate:modelValue":t[12]||(t[12]=e=>o.diveProduct.precautions=e)},null,512),[[f.nr,o.diveProduct.precautions]])])])])])]),(0,l._)("div",ce,[(0,l._)("div",re,[(0,l._)("label",ue,[(0,l.Uk)(" 是否開放 "),(0,l.wy)((0,l._)("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[13]||(t[13]=e=>o.diveProduct.is_enabled=e)},null,512),[[f.e8,o.diveProduct.is_enabled]])])])])]),(0,l._)("div",pe,[me,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:t[14]||(t[14]=t=>e.$emit("update-product",o.diveProduct))}," 確認 ")])])])],512)}var ve=a(3618),he=a(5032),_e=a(3390),be={data(){return{modal:{},diveProduct:{},modules:[_e.W_,_e.tl,_e.LW,_e.s5]}},components:{Swiper:he.tq,SwiperSlide:he.o5},props:{product:{type:Object},default(){return{}}},watch:{product(){this.diveProduct=this.product,this.diveProduct.images||(this.diveProduct.images=[])}},methods:{uploadFile(){const e=this.$refs.fileInput.files[0],t=new FormData;t.append("file-to-upload",e);const a="https://vue3-course-api.hexschool.io/api/waynechendive-api/admin/upload";this.$http.post(a,t).then((e=>{console.log(e.data),e.data.success&&(this.diveProduct.imageUrl=e.data.imageUrl)}))},uploadFiles(){const e=this.$refs.fileInputs.files[0],t=new FormData;t.append("file-to-upload",e);const a="https://vue3-course-api.hexschool.io/api/waynechendive-api/admin/upload";this.axios.post(a,t).then((e=>{e.data.success&&this.diveProduct.images.push(e.data.imageUrl)}))}},mixins:[ve.Z]},fe=a(89);const we=(0,fe.Z)(be,[["render",ge]]);var ye=we,Pe=a(7064),ke=a(8636),De={data(){return{diveProducts:[],pagination:[],diveProduct:{},isNew:!1,isLoading:!1}},components:{DiveModal:ye,DeleteModal:Pe.Z,DivePagination:ke.Z},methods:{openModal(e,t){e?(this.diveProduct={},this.diveProduct.unit="人"):this.diveProduct={...t},this.isNew=e;const a=this.$refs.DiveModal;a.showModal()},deleteModal(e){this.diveProduct={...e};const t=this.$refs.DeleteModal;t.showModal()},delitem(e){this.isLoading=!0,this.diveProduct=e;const t=`https://vue3-course-api.hexschool.io/api/waynechendive-api/admin/product/${e.id}`;this.$http.delete(t).then((e=>{this.isLoading=!1;const t=this.$refs.DeleteModal;this.getDiveProducts(),t.hideModal(),this.$emitter.emit("push-msg",{style:"danger",title:e.data.message,content:e.data.message})})).catch((e=>{console.log(e)}))},updateProduct(e){this.isLoading=!0,this.diveProduct=e;const t=this.$refs.DiveModal;let a="https://vue3-course-api.hexschool.io/api/waynechendive-api/admin/product",l="post";this.isNew||(a=`https://vue3-course-api.hexschool.io/api/waynechendive-api/admin/product/${e.id}`,l="put"),t.hideModal(),this.$http[l](a,{data:this.diveProduct}).then((e=>{this.isLoading=!1,e.data.success?(this.getDiveProducts(),this.$emitter.emit("push-msg",{style:"success",title:e.data.message,content:e.data.message})):this.$emitter.emit("push-msg",{style:"warning",title:"更新失敗",content:e.data.message.join(",")})}))},getDiveProducts(e=1){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/waynechendive-api/admin/products/?page=${e}`;this.$http.get(t).then((e=>{this.diveProducts=e.data.products,this.pagination=e.data.pagination,this.isLoading=!1})).catch((e=>{console.log(e)}))}},created(){this.getDiveProducts()}};const xe=(0,fe.Z)(De,[["render",b],["__scopeId","data-v-77c2c516"]]);var Ue=xe}}]);
//# sourceMappingURL=381.dd306765.js.map