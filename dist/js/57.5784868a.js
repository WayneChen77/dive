"use strict";(self["webpackChunkDive"]=self["webpackChunkDive"]||[]).push([[57],{8636:function(e,t,l){l.d(t,{Z:function(){return b}});var a=l(3396),i=l(7139),o=l(9242);const s={"aria-label":"Page navigation example"},d={class:"pagination justify-content-center"},n=(0,a._)("a",{class:"page-link",href:" ","aria-label":"Previous"},[(0,a._)("span",{"aria-hidden":"true"},"«")],-1),c=[n],r=["onClick","onKeyup"],u={class:"page-link",href:"#"},p=(0,a._)("a",{class:"page-link",href:"","aria-label":"Next"},[(0,a._)("span",{"aria-hidden":"true"},"»")],-1),m=[p];function g(e,t,l,n,p,g){return(0,a.wg)(),(0,a.iD)("nav",s,[(0,a._)("ul",d,[(0,a._)("li",{class:(0,i.C_)(["page-item",{disabled:!l.pages.has_pre}]),onClick:t[0]||(t[0]=(0,o.iM)((e=>g.clickPagination(l.pages.current_page-1)),["prevent"])),onKeyup:t[1]||(t[1]=(0,o.D2)((e=>g.clickPagination(l.pages.current_page-1)),["enter"]))},c,34),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pages.total_pages,(e=>((0,a.wg)(),(0,a.iD)("li",{class:(0,i.C_)(["page-item",{active:l.pages.current_page===e}]),key:"pages"+e,onClick:(0,o.iM)((t=>g.clickPagination(e)),["prevent"]),onKeyup:(0,o.D2)((t=>g.clickPagination(e)),["enter"])},[(0,a._)("a",u,(0,i.zw)(e),1)],42,r)))),128)),(0,a._)("li",{class:(0,i.C_)(["page-item",{disabled:!l.pages.has_next}]),onClick:t[2]||(t[2]=(0,o.iM)((e=>g.clickPagination(l.pages.current_page+1)),["prevent"])),onKeyup:t[3]||(t[3]=(0,o.D2)((e=>g.clickPagination(l.pages.current_page+1)),["enter"]))},m,34)])])}var h={props:["pages"],methods:{updatePage(){},clickPagination(e){this.$emit("change-pagination",e)}}},v=l(89);const _=(0,v.Z)(h,[["render",g]]);var b=_},4057:function(e,t,l){l.r(t),l.d(t,{default:function(){return Ue}});var a=l(3396),i=l(7139);const o=e=>((0,a.dD)("data-v-77c2c516"),e=e(),(0,a.Cn)(),e),s={class:"text-end"},d={class:"table mt-4 container diveProduct"},n=o((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{class:"rwd"},"分類"),(0,a._)("th",{class:"rwdname"},"名稱"),(0,a._)("th",{class:"rwd"},"原價"),(0,a._)("th",{class:"rwd"},"優惠價"),(0,a._)("th",null,"上架"),(0,a._)("th",null,"編輯")])],-1))),c={class:"rwd"},r={class:"rwdname"},u=o((()=>(0,a._)("br",null,null,-1))),p={class:"text-right"},m={class:"text-right rwd"},g={class:"text-success"},h={class:"btn-group"},v=["onClick"],_=["onClick"];function b(e,t,l,o,b,f){const P=(0,a.up)("LoadingView"),w=(0,a.up)("DivePagination"),y=(0,a.up)("DiveModal"),k=(0,a.up)("DeleteModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(P,{active:b.isLoading},null,8,["active"]),(0,a._)("div",s,[(0,a._)("button",{class:"btn btn-titleblue col-2",onClick:t[0]||(t[0]=e=>f.openModal(!0))},"新增課程")]),(0,a._)("table",d,[n,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(b.diveProducts,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",c,(0,i.zw)(t.category),1),(0,a._)("td",r,[(0,a.Uk)((0,i.zw)(t.title)+" ",1),u,(0,a.Uk)(" "+(0,i.zw)(`(${t.engtitle})`),1)]),(0,a._)("td",p,(0,i.zw)(e.$filters.currency(t.origin_price))+"原價",1),(0,a._)("td",m,(0,i.zw)(e.$filters.currency(t.price)),1),(0,a._)("td",null,[(0,a._)("span",g,(0,i.zw)(1===t.is_enabled?"(上架)":"(下架)"),1)]),(0,a._)("td",null,[(0,a._)("div",h,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>f.openModal(!1,t)}," 編輯 ",8,v),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>f.deleteModal(t)},"刪除",8,_)])])])))),128))])]),(0,a.Wm)(w,{pages:b.pagination,onChangePagination:f.getDiveProducts},null,8,["pages","onChangePagination"]),(0,a.Wm)(y,{product:b.diveProduct,onUpdateProduct:f.updateProduct,ref:"DiveModal"},null,8,["product","onUpdateProduct"]),(0,a.Wm)(k,{product:b.diveProduct,onDelItem:f.delitem,ref:"DeleteModal"},null,8,["product","onDelItem"])],64)}l(7658);var f=l(9242);const P={class:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},w={class:"modal-dialog modal-xl",role:"document"},y={class:"modal-content border-0"},k=(0,a._)("div",{class:"modal-header bg-dark text-white"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a._)("span",null,"新增產品")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),D={class:"modal-body"},x={class:"row"},U={class:"col-sm-4"},C={class:"mb-3"},M={for:"image",class:"form-label"},$={class:"mb-3"},V={for:"customFile",class:"form-label"},L=(0,a._)("i",{class:"fas fa-spinner fa-spin"},null,-1),F=["src"],K={key:0,class:"mt-5"},z={class:"mb-3"},I={for:"customFile",class:"form-label"},Z=(0,a._)("i",{class:"fas fa-spinner fa-spin"},null,-1),W=["onUpdate:modelValue"],j=["onClick"],H={key:0},Y=["src","id"],q={class:"col-sm-8"},N={class:"row gx-2"},S={class:"mb-3 col-md-6"},O={for:"title",class:"form-label"},A={for:"engtitle",class:"form-label"},B={class:"mb-3 col-md-6"},E={for:"category",class:"form-label"},G={class:"row gx-2"},J={class:"mb-3 col-md-6"},Q={for:"origin_price",class:"form-label"},R={class:"mb-3 col-md-6"},T={for:"price",class:"form-label"},X=(0,a._)("hr",null,null,-1),ee={class:"row gx-2"},te={class:"mb-3 col-md-12"},le={for:"description",class:"form-label d-block"},ae={class:"row gx-2"},ie={class:"mb-3 col-12"},oe={for:"content",class:"form-label d-block"},se={class:"row gx-2"},de={class:"mb-3 col-12"},ne={for:"precautions",class:"form-label d-block"},ce={class:"mb-3"},re={class:"form-check"},ue={class:"form-check-label mx-3",for:"is_enabled"},pe={class:"modal-footer"},me=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ge(e,t,l,i,o,s){const d=(0,a.up)("swiper-slide"),n=(0,a.up)("swiper");return(0,a.wg)(),(0,a.iD)("div",P,[(0,a._)("div",w,[(0,a._)("div",y,[k,(0,a._)("div",D,[(0,a._)("div",x,[(0,a._)("div",U,[(0,a._)("div",C,[(0,a._)("label",M,[(0,a.Uk)("輸入圖片網址 "),(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":t[0]||(t[0]=e=>o.diveProduct.imageUrl=e)},null,512),[[f.nr,o.diveProduct.imageUrl]])]),(0,a._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t[1]||(t[1]=e=>o.diveProduct.imageUrl="")}," 移除 ")]),(0,a._)("div",$,[(0,a._)("label",V,[(0,a.Uk)("或 上傳圖片 "),L,(0,a._)("input",{type:"file",class:"form-control",ref:"fileInput",onChange:t[2]||(t[2]=(...e)=>s.uploadFile&&s.uploadFile(...e))},null,544)]),(0,a._)("div",null,[(0,a._)("img",{class:"w-100",src:o.diveProduct.imageUrl,alt:""},null,8,F)])]),o.diveProduct.images?((0,a.wg)(),(0,a.iD)("div",K,[(0,a._)("div",z,[(0,a._)("label",I,[(0,a.Uk)("新增 其餘圖片 "),(0,a._)("input",{id:"customFile",type:"file",class:"form-control",ref:"fileInputs",onChange:t[3]||(t[3]=t=>s.uploadFiles(e.key)),multiple:""},null,544),Z])]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.diveProduct.images,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"mb-3 input-group",key:t},[(0,a.wy)((0,a._)("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":e=>o.diveProduct.images[t]=e,placeholder:"請輸入連結"},null,8,W),[[f.nr,o.diveProduct.images[t]]]),(0,a._)("button",{type:"button",class:"btn btn-outline-danger",onClick:e=>o.diveProduct.images.splice(t,1)}," 移除 ",8,j)])))),128)),o.diveProduct.images[o.diveProduct.images.length-1]||!o.diveProduct.images.length?((0,a.wg)(),(0,a.iD)("div",H,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[4]||(t[4]=e=>o.diveProduct.images.push(""))}," 新增其餘圖片網址 ")])):(0,a.kq)("",!0),o.diveProduct.images?((0,a.wg)(),(0,a.j4)(n,{key:1,class:"d-block w-100 h-25",modules:o.modules,"slides-per-view":1,"space-between":50,navigation:"",pagination:{clickable:!0},scrollbar:{draggable:!0}},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.diveProduct.images,((e,t)=>((0,a.wg)(),(0,a.j4)(d,{key:t},{default:(0,a.w5)((()=>[(0,a._)("img",{src:e,id:e,class:"d-block img-fluid",alt:"..."},null,8,Y)])),_:2},1024)))),128))])),_:1},8,["modules"])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)]),(0,a._)("div",q,[(0,a._)("div",N,[(0,a._)("div",S,[(0,a._)("label",O,[(0,a.Uk)("*產品名稱"),(0,a.wy)((0,a._)("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入名稱","onUpdate:modelValue":t[5]||(t[5]=e=>o.diveProduct.title=e)},null,512),[[f.nr,o.diveProduct.title]])]),(0,a._)("label",A,[(0,a.Uk)("英文名稱"),(0,a.wy)((0,a._)("input",{id:"engtitle",type:"text",class:"form-control",placeholder:"請輸入名稱","onUpdate:modelValue":t[6]||(t[6]=e=>o.diveProduct.engtitle=e)},null,512),[[f.nr,o.diveProduct.engtitle]])])]),(0,a._)("div",B,[(0,a._)("label",E,[(0,a.Uk)("*分類"),(0,a.wy)((0,a._)("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":t[7]||(t[7]=e=>o.diveProduct.category=e)},null,512),[[f.nr,o.diveProduct.category]])])])]),(0,a._)("div",G,[(0,a._)("div",J,[(0,a._)("label",Q,[(0,a.Uk)("*原價"),(0,a.wy)((0,a._)("input",{id:"origin_price",type:"number",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":t[8]||(t[8]=e=>o.diveProduct.origin_price=e)},null,512),[[f.nr,o.diveProduct.origin_price]])])]),(0,a._)("div",R,[(0,a._)("label",T,[(0,a.Uk)("*優惠價"),(0,a.wy)((0,a._)("input",{id:"price",type:"number",class:"form-control",placeholder:"請輸入優惠價","onUpdate:modelValue":t[9]||(t[9]=e=>o.diveProduct.price=e)},null,512),[[f.nr,o.diveProduct.price]])])])]),X,(0,a._)("div",ee,[(0,a._)("div",te,[(0,a._)("label",le,[(0,a.Uk)("課程描述 "),(0,a.wy)((0,a._)("textarea",{id:"description",type:"text",class:"form-control",style:{"min-height":"5rem"},placeholder:"請輸入描述","onUpdate:modelValue":t[10]||(t[10]=e=>o.diveProduct.description=e)},null,512),[[f.nr,o.diveProduct.description]])])])]),(0,a._)("div",ae,[(0,a._)("div",ie,[(0,a._)("label",oe,[(0,a.Uk)("課程內容 "),(0,a.wy)((0,a._)("textarea",{id:"content",type:"text",class:"form-control",style:{"min-height":"5rem"},placeholder:"請輸入課程內容","onUpdate:modelValue":t[11]||(t[11]=e=>o.diveProduct.content=e)},null,512),[[f.nr,o.diveProduct.content]])])])]),(0,a._)("div",se,[(0,a._)("div",de,[(0,a._)("label",ne,[(0,a.Uk)("注意事項 "),(0,a.wy)((0,a._)("textarea",{id:"precautions",type:"text",class:"form-control",style:{"min-height":"5rem"},placeholder:"請輸入注意事項","onUpdate:modelValue":t[12]||(t[12]=e=>o.diveProduct.precautions=e)},null,512),[[f.nr,o.diveProduct.precautions]])])])])])]),(0,a._)("div",ce,[(0,a._)("div",re,[(0,a._)("label",ue,[(0,a.Uk)(" 是否開放 "),(0,a.wy)((0,a._)("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[13]||(t[13]=e=>o.diveProduct.is_enabled=e)},null,512),[[f.e8,o.diveProduct.is_enabled]])])])])]),(0,a._)("div",pe,[me,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[14]||(t[14]=t=>e.$emit("update-product",o.diveProduct))}," 確認 ")])])])],512)}var he=l(3618),ve=l(5032),_e=l(4191),be={data(){return{modal:{},diveProduct:{},modules:[_e.W_,_e.tl,_e.LW,_e.s5]}},components:{Swiper:ve.tq,SwiperSlide:ve.o5},props:{product:{type:Object},default(){return{}}},watch:{product(){this.diveProduct=this.product,this.diveProduct.images||(this.diveProduct.images=[])}},methods:{uploadFile(){const e=this.$refs.fileInput.files[0],t=new FormData;t.append("file-to-upload",e);const l="https://vue3-course-api.hexschool.io/api/waynechendive-api/admin/upload";this.$http.post(l,t).then((e=>{console.log(e.data),e.data.success&&(this.diveProduct.imageUrl=e.data.imageUrl)}))},uploadFiles(){const e=this.$refs.fileInputs.files[0],t=new FormData;t.append("file-to-upload",e);const l="https://vue3-course-api.hexschool.io/api/waynechendive-api/admin/upload";this.axios.post(l,t).then((e=>{e.data.success&&this.diveProduct.images.push(e.data.imageUrl)}))}},mixins:[he.Z]},fe=l(89);const Pe=(0,fe.Z)(be,[["render",ge]]);var we=Pe,ye=l(4024),ke=l(8636),De={data(){return{diveProducts:[],pagination:[],diveProduct:{},isNew:!1,isLoading:!1}},components:{DiveModal:we,DeleteModal:ye.Z,DivePagination:ke.Z},methods:{openModal(e,t){e?(this.diveProduct={},this.diveProduct.unit="人"):this.diveProduct={...t},this.isNew=e;const l=this.$refs.DiveModal;l.showModal()},deleteModal(e){this.diveProduct={...e};const t=this.$refs.DeleteModal;t.showModal()},delitem(e){this.isLoading=!0,this.diveProduct=e;const t=`https://vue3-course-api.hexschool.io/api/waynechendive-api/admin/product/${e.id}`;this.$http.delete(t).then((e=>{this.isLoading=!1;const t=this.$refs.DeleteModal;this.getDiveProducts(),t.hideModal(),this.$emitter.emit("push-msg",{style:"danger",title:e.data.message,content:e.data.message})})).catch((e=>{console.log(e)}))},updateProduct(e){this.isLoading=!0,this.diveProduct=e;const t=this.$refs.DiveModal;let l="https://vue3-course-api.hexschool.io/api/waynechendive-api/admin/product",a="post";this.isNew||(l=`https://vue3-course-api.hexschool.io/api/waynechendive-api/admin/product/${e.id}`,a="put"),t.hideModal(),this.$http[a](l,{data:this.diveProduct}).then((e=>{this.isLoading=!1,e.data.success?(this.getDiveProducts(),this.$emitter.emit("push-msg",{style:"success",title:e.data.message,content:e.data.message})):this.$emitter.emit("push-msg",{style:"warning",title:"更新失敗",content:e.data.message.join(",")})}))},getDiveProducts(e=1){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/waynechendive-api/admin/products/?page=${e}`;this.$http.get(t).then((e=>{this.diveProducts=e.data.products,this.pagination=e.data.pagination,this.isLoading=!1})).catch((e=>{console.log(e)}))}},created(){this.getDiveProducts()}};const xe=(0,fe.Z)(De,[["render",b],["__scopeId","data-v-77c2c516"]]);var Ue=xe}}]);
//# sourceMappingURL=57.5784868a.js.map