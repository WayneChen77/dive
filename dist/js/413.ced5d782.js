"use strict";(self["webpackChunkDive"]=self["webpackChunkDive"]||[]).push([[413],{413:function(t,e,a){a.r(e),a.d(e,{default:function(){return V}});var i=a(3396),s=a(9242),l=a(7139);const c=t=>((0,i.dD)("data-v-94ba83be"),t=t(),(0,i.Cn)(),t),r={class:"product"},o=c((()=>(0,i._)("div",{class:"position-relative"},[(0,i._)("div",{class:"position-absolute text-center text py-3",style:{width:"30%","min-height":"10vh",top:"30%",left:"18%"}},[(0,i._)("h4",null,"潛水假期"),(0,i._)("p",null,"馬上展開您的潛水假期")])],-1))),n={class:"container"},d={class:"title my-3 row"},u={class:"col-md-9 col-12"},h={"aria-label":"breadcrumb"},p={class:"breadcrumb"},m={class:"breadcrumb-item"},g=c((()=>(0,i._)("li",{class:"breadcrumb-item active","aria-current":"page"},"產品介紹",-1))),_={class:"col-md-3 col-12"},k={class:"d-flex"},v=c((()=>(0,i._)("hr",{class:"mt-3"},null,-1))),b={class:"main mb-3 d-flex flex-wrap justify-content-between"},f={class:"card-img-top cardImg"},w=["src"],x={class:"overlay card-img-top"},y=["onClick"],D=c((()=>(0,i._)("div",{class:"text-center p-5 text-bgblue"},"了解更多",-1))),L=[D],C=["onClick","onKeyup"],S={class:"card-body text-center"},$={class:"card-title text-truncate"},I={class:"card-text"},O=["onClick"],U=c((()=>(0,i._)("span",{class:"flexwrap"},null,-1))),J=c((()=>(0,i._)("span",{class:"flexwrap"},null,-1))),K=c((()=>(0,i._)("span",{class:"flexwrap"},null,-1)));function N(t,e,a,c,D,N){const z=(0,i.up)("LoadingView"),H=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(z,{active:D.isLoading},null,8,["active"]),(0,i._)("div",r,[o,(0,i._)("div",n,[(0,i._)("div",d,[(0,i._)("div",u,[(0,i._)("nav",h,[(0,i._)("ol",p,[(0,i._)("li",m,[(0,i.Wm)(H,{class:"text-decoration-none",to:"/home"},{default:(0,i.w5)((()=>[(0,i.Uk)("首頁")])),_:1})]),g])])]),(0,i._)("div",_,[(0,i._)("form",k,[(0,i.wy)((0,i._)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search","onUpdate:modelValue":e[0]||(e[0]=t=>D.search=t),onChange:e[1]||(e[1]=(...e)=>t.filterData&&t.filterData(...e))},null,544),[[s.nr,D.search]])])]),v]),(0,i._)("div",b,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(N.dataList,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{class:"card shadow border-0",key:e,"data-aos":"flip-left"},[(0,i._)("div",f,[(0,i._)("img",{src:t.imageUrl,alt:"i.engtitle"},null,8,w)]),(0,i._)("div",x,[(0,i._)("a",{href:"#",onClick:(0,s.iM)((e=>N.userproduct(t)),["prevent"])},L,8,y)]),(0,i._)("i",{class:(0,l.C_)(["bi position-absolute like",N.isLiked(t)?"bi-heart-fill":"bi-heart"]),onClick:e=>N.liked(t),onKeyup:e=>N.liked(t)},null,42,C),(0,i._)("div",S,[(0,i._)("h5",$,(0,l.zw)(t.title),1),(0,i._)("p",I,"$"+(0,l.zw)(this.$filters.currency(t.price)),1),(0,i._)("a",{href:"#",class:"btn btn-outline-titleblue",onClick:(0,s.iM)((e=>N.updateCart(t)),["prevent"])},"馬上上課",8,O)])])))),128)),U,J,K])])])],64)}a(7658);var z={name:"UserProducts",data(){return{products:[],isLoading:!1,search:"",likedData:[]}},mounted(){this.$emitter.on("push-like",(()=>{this.getLikes()}))},methods:{userproduct(t){this.$router.push(`/UserSelect/${t.id}`)},updateCart(t){this.isLoading=!0;const e={product_id:t.id,qty:1},a="https://vue3-course-api.hexschool.io/api/waynechendive-api/cart";this.$http.post(a,{data:e}).then((t=>{this.$emitter.emit("push-cart",{style:"success",title:t.data.message,content:t.data.message}),this.isLoading=!1})).catch((t=>{console.log(t)}))},getproducts(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/waynechendive-api/products/all";this.$http.get(t).then((t=>{this.products=t.data.products,this.isLoading=!1})).catch((t=>{console.log(t)}))},isLiked(t){return this.likedData.indexOf(t.id)>-1},getLikes(){this.likedData=JSON.parse(localStorage.getItem("liked"))||[]},liked(t){const e=localStorage.getItem("liked"),a=JSON.parse(e)??[],i=a.indexOf(t.id);i>-1?(a.splice(i,1),this.likedData=a):(a.push(t.id),this.likedData=a),localStorage.setItem("liked",JSON.stringify(this.likedData)),this.$emitter.emit("push-like",{style:"success",title:"關注",content:"已更新最愛標籤"})}},computed:{dataList(){return this.products.filter((t=>t.title.match(this.search)))}},created(){this.getproducts(),this.getLikes()}},H=a(89);const M=(0,H.Z)(z,[["render",N],["__scopeId","data-v-94ba83be"]]);var V=M}}]);
//# sourceMappingURL=413.ced5d782.js.map