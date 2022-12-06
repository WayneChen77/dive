(function(){"use strict";var e={3436:function(e,t,a){var s=a(9242),n=a(70),i=a(6423),o=a(6216),l=a(1373),r=a(5708),c=a(3990),d=a(579),u=a(2389),p=a(6905),m=a.n(p),h=a(2578);function v(e){const t=parseInt(e,10);return`${t.toFixed(0).replace(/./g,((e,t,a)=>t&&"."!==e&&(a.length-t)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function f(e){const t=new Date(1e3*e);return t.toLocaleDateString()}var g=a(3396);const b={class:"main"};function _(e,t,a,s,n,i){const o=(0,g.up)("NavBar"),l=(0,g.up)("router-view"),r=(0,g.up)("Footer");return(0,g.wg)(),(0,g.iD)(g.HY,null,[(0,g.Wm)(o,{class:"nav"}),(0,g._)("div",b,[(0,g.Wm)(l)]),(0,g.Wm)(r)],64)}const w=e=>((0,g.dD)("data-v-1309039a"),e=e(),(0,g.Cn)(),e),y={class:"nav"},k={class:"container pt-2"},x={class:"navbar navbar-expand-lg"},D=w((()=>(0,g._)("i",{class:"bi bi-tsunami fs-1"},null,-1))),C={ref:"navbarBtn",class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},W=w((()=>(0,g._)("span",{class:"navbar-toggler-icon"},null,-1))),P=[W],E={class:"collapse navbar-collapse",id:"navbarNav"},O={class:"navbar-nav",ref:"navbarUl"},S={class:"nav-item"},j={class:"nav-item"},$={class:"nav-item"},T={class:"nav-item"},U={class:"nav-item"},L=w((()=>(0,g._)("i",{class:"bi bi-gear fs-3"},null,-1)));function N(e,t,a,s,n,i){const o=(0,g.up)("router-link");return(0,g.wg)(),(0,g.iD)("div",y,[(0,g._)("div",k,[(0,g._)("nav",x,[(0,g.Wm)(o,{class:"text-dark",to:"/home"},{default:(0,g.w5)((()=>[D])),_:1}),(0,g._)("button",C,P,512),(0,g._)("div",E,[(0,g._)("ul",O,[(0,g._)("li",S,[(0,g.Wm)(o,{class:"nav-link",to:"/about"},{default:(0,g.w5)((()=>[(0,g.Uk)("關於我們")])),_:1})]),(0,g._)("li",j,[(0,g.Wm)(o,{class:"nav-link",to:"/userProducts"},{default:(0,g.w5)((()=>[(0,g.Uk)("產品介紹")])),_:1})]),(0,g._)("li",$,[(0,g.Wm)(o,{class:"nav-link",to:"/searchorder"},{default:(0,g.w5)((()=>[(0,g.Uk)("訂單查詢")])),_:1})]),(0,g._)("li",T,[(0,g.Wm)(o,{class:"nav-link",to:"/userCarts"},{default:(0,g.w5)((()=>[(0,g.Uk)("購物車")])),_:1})]),(0,g._)("li",U,[(0,g.Wm)(o,{class:"nav-link phoneRwd",to:"/login"},{default:(0,g.w5)((()=>[(0,g.Uk)("管理員登入")])),_:1})]),(0,g.Wm)(o,{class:"nav-link text-end position-absolute end-0 me-4 rwd",to:"/login"},{default:(0,g.w5)((()=>[L])),_:1})],512)])])])])}var V={mounted(){this.$refs.navbarUl.addEventListener("click",(()=>{document.body.offsetWidth<992&&this.$refs.navbarBtn.click()}))},watch:{}},q=a(89);const B=(0,q.Z)(V,[["render",N],["__scopeId","data-v-1309039a"]]);var I=B,Z=a(7139);const z=e=>((0,g.dD)("data-v-2d6fed1a"),e=e(),(0,g.Cn)(),e),A={class:"footer bg-titleblue py-3"},M={class:"text-white d-flex justify-content-center g-3"},F={class:"mb-3"},K=["disabled"],H={class:"copyright"},R=z((()=>(0,g._)("p",{class:"text-center text-white"},"Copyright © 2022 Wayne Dives. All Rights Reserved.",-1))),Y={class:"addressLink"},J=z((()=>(0,g._)("li",null,[(0,g._)("a",{href:"https://www.pexels.com/zh-tw/",target:"_blank"}," 本網站照片來源")],-1)));function Q(e,t,a,s,n,i){const o=(0,g.up)("FieldView"),l=(0,g.up)("ErrorMessage"),r=(0,g.up)("FormView"),c=(0,g.up)("router-link");return(0,g.wg)(),(0,g.iD)("footer",A,[(0,g._)("div",M,[(0,g.Wm)(r,{onSubmit:i.createSub},{default:(0,g.w5)((({errors:e})=>[(0,g._)("div",F,[(0,g.Wm)(o,{id:"email",name:"email",type:"email",class:(0,Z.C_)(["rounded",{"is-invalid":e["email"],"is-valid":!e[0]&&""!=n.form.user.email}]),placeholder:"Email訂閱取得優惠碼",rules:"email|required",modelValue:n.form.user.email,"onUpdate:modelValue":t[0]||(t[0]=e=>n.form.user.email=e)},null,8,["class","modelValue"]),(0,g._)("button",{class:"btn btn-sm btn-danger ms-3",disabled:""===n.form.user.email}," 訂閱 ",8,K),(0,g.Wm)(l,{name:"email",class:"invalid-feedback d-block"})])])),_:1},8,["onSubmit"])]),(0,g._)("div",H,[R,(0,g._)("ul",Y,[(0,g._)("li",null,[(0,g.Wm)(c,{class:"nav-link",to:"/about"},{default:(0,g.w5)((()=>[(0,g.Uk)("關於我們")])),_:1})]),(0,g._)("li",null,[(0,g.Wm)(c,{class:"nav-link",to:"/contact"},{default:(0,g.w5)((()=>[(0,g.Uk)("連絡我們")])),_:1})]),(0,g._)("li",null,[(0,g.Wm)(c,{class:"nav-link",to:"/userProducts"},{default:(0,g.w5)((()=>[(0,g.Uk)("產品介紹")])),_:1})]),J])])])}a(7658);var G=a(3495),X=a.n(G),ee={data(){return{form:{user:{email:""}}}},methods:{createSub(){X()({title:"恭喜獲得優惠碼!",text:"godive!",icon:"success",buttons:["取消!","馬上去買!"]}).then((e=>{e&&this.$router.push("userProducts"),this.form.user.email=""}))}}};const te=(0,q.Z)(ee,[["render",Q],["__scopeId","data-v-2d6fed1a"]]);var ae=te,se={components:{NavBar:I,Footer:ae}};const ne=(0,q.Z)(se,[["render",_]]);var ie=ne,oe=a(2483),le=a.p+"img/icons8-cargo-ship-64.cbc5ac9c.svg",re=a.p+"img/icons8-dive-64.b3ae557d.svg",ce=a.p+"img/icons8-palm-tree-50.3f365129.svg",de=a.p+"img/icons8-real-estate-50.9486f734.svg";const ue=e=>((0,g.dD)("data-v-2f490356"),e=e(),(0,g.Cn)(),e),pe={class:"home"},me={class:"titleup",style:{"background-image":"url(https://images.pexels.com/photos/2397653/pexels-photo-2397653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"}},he={class:"txt","data-aos":"zoom-in"},ve=ue((()=>(0,g._)("h1",null,"韋恩潛旅",-1))),fe=ue((()=>(0,g._)("p",null,"一起探索世界潛水景點，以及水下的神秘世界！",-1))),ge={class:"titleup",style:{"background-image":"url(https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg)"}},be={class:"txt","data-aos":"zoom-in"},_e=ue((()=>(0,g._)("h3",null,"潛入您的生活",-1))),we=ue((()=>(0,g._)("p",null,"向陸地請個假，下來吧！來海底！",-1))),ye={class:"titleup",style:{"background-image":"url(https://images.pexels.com/photos/762103/pexels-photo-762103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"}},ke={class:"txt","data-aos":"zoom-in"},xe=ue((()=>(0,g._)("h3",null,"挑戰你的極限",-1))),De=ue((()=>(0,g._)("p",null,"馬上展開您的冒險，韋恩潛旅給您最大的折扣！",-1))),Ce=ue((()=>(0,g._)("div",{class:"titledown"},null,-1))),We={class:"container dive"},Pe={class:"row align-items-center justify-content-center textItem"},Ee=(0,g.uE)('<div class="col-12 col-md-6 p-3" data-aos="fade-right" data-v-2f490356><img class="img-fluid" src="https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" alt="dive.pic" title="自由潛水" data-v-2f490356></div><div class="col-12 col-md-6 p-3 text text1" data-aos="fade-left" data-v-2f490356><div data-v-2f490356><h4 data-v-2f490356>自由潛水</h4><p data-v-2f490356> 自由潛水是最古老、最原始的潛水形式。例如，早在石器時代，人們就透過自由潛水就收集貝殼、海綿和珍珠。 日本的「あま」、 韓國的「해녀」（皆為海女的一種）和馬來群島的巴瑤族（英語：Bajau）今天仍然以這種方式潛水。 自由潛水是一種休閒活動同時也是一種潛水競技運動，甚至也是一種極限運動。 休閒活動的重點是探索海底世界，並在與水肺潛水類似的環境條件下潛水。 自由潛水也有一些瑜伽元素，例如深呼吸、有意識的呼吸和意識練習。 </p></div></div><div class="imgtop col-0 col-md-6 text text2" data-aos="fade-right" data-v-2f490356></div><div class="col-12 col-md-6 p-3" data-aos="fade-left" data-v-2f490356><img class="img-fluid" src="https://images.pexels.com/photos/37530/divers-scuba-divers-diving-underwater-37530.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" alt="dive.pic" title="水肺潛水" data-v-2f490356></div>',4),Oe=["data-aos"],Se=ue((()=>(0,g._)("div",null,[(0,g._)("h4",null,"水肺潛水"),(0,g._)("p",null," 水肺是一種輔助潛水者在水中呼吸的器具。水肺是在1943年，由雅克-伊夫·庫斯托和埃米爾·加尼昂共同發明的。 現代的水肺系統最少由四個部分組成，包括：浮力調節裝置、呼吸調節器、 潛水氣瓶和配重系統。調節器以活栓操控，將壓縮氣體由高壓狀態，轉化成可供人體正常呼吸的壓力。 潛水員所使用的氣瓶不稱為氧氣筒。氧氣筒(100%氧氣)是屬於醫療級的氣體。水肺使用的稱之為氣瓶(79%氮氣+21%氧氣)，氣瓶裡裝的是壓縮後的空氣，並非純氧氣。 ")],-1))),je=[Se],$e=(0,g.uE)('<div class="midAbout my-3 text-titleblue" data-aos="zoom-in" data-v-2f490356><div class="container text-center p-3" data-v-2f490356><h3 class="m-3" data-v-2f490356>韋恩潛旅，超值服務</h3><div class="row" data-v-2f490356><div class="col-12 col-md-3" data-v-2f490356><img src="'+le+'" alt="ship.pic" style="width:64px;" data-v-2f490356><h4 data-v-2f490356>遊艇</h4><p data-v-2f490356> 引進墾丁52人座遊艇，讓您體驗富豪般的海上生活，不需遠赴國外即可與朋友們一同在船上享受墾丁美麗的碧海藍天，開派對、跳水、浮潛、水上活動、烤肉，把您的假期花在值得的事情上吧! </p></div><div class="col-12 col-md-3" data-v-2f490356><img src="'+re+'" alt="dive.pic" style="width:64px;" data-v-2f490356><h4 data-v-2f490356>潛水</h4><p data-v-2f490356> 我們的教練以專業、認真與熱忱，提供給您最佳的潛水教學與服務。全世界有海洋面積約占地球表面積71%，沒有去過這71%你不算去過全世界！ </p></div><div class="col-12 col-md-3" data-v-2f490356><img src="'+ce+'" alt="tree.pic" style="width:64px;" data-v-2f490356><h4 data-v-2f490356>渡假</h4><p data-v-2f490356> 多樣客製化服務，絕對是您的休閒首選，遊艇烤肉BBQ、專人交通接送、多樣水上活動，您還在等什麼! </p></div><div class="col-12 col-md-3" data-v-2f490356><img src="'+de+'" alt="house.pic" style="width:64px;" data-v-2f490356><h4 data-v-2f490356>住宿</h4><p data-v-2f490356> 清靜優雅的庭園獨棟渡假小屋，提供您舒適優雅的度假環境。寬敞的四人空間，限量超值豪華套房， 室內為兩房一廳的大空間，將休憩區和睡眠區區分開， 提升睡眠品質，好好享受您的愉快渡假。 </p></div></div></div></div>',1),Te={class:"container"},Ue=ue((()=>(0,g._)("div",{class:"a123 p-5 m-2 text-white"},[(0,g._)("h4",null,"每年3次，出團潛入世界"),(0,g._)("p",null," 拿到海洋入場券後，想要到國外看不同的生物，但又不知道如何安排嗎？ 結業的學生們不用擔心，一年會舉行三次的國外潛旅等著你們！ ")],-1))),Le=ue((()=>(0,g._)("h4",{class:"text-center"},"F R E E D I V I N G C O U R S E S",-1))),Ne=ue((()=>(0,g._)("h4",{class:"text-center"},"潛水課程",-1))),Ve={class:"row"},qe={class:"col-12 col-md-4"},Be={class:"wrap"},Ie=ue((()=>(0,g._)("img",{class:"rounded-circle",src:"https://images.pexels.com/photos/3046637/pexels-photo-3046637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:""},null,-1))),Ze={class:"overlay rounded-circle"},ze=ue((()=>(0,g._)("div",{class:"text-center py-5 text-white"},"了解更多",-1))),Ae=ue((()=>(0,g._)("div",{class:"text-center"},[(0,g._)("h4",{class:"my-3"},"水肺潛水"),(0,g._)("p",null,"任何人都可以嘗試，以最簡單的方式下潛到水深12米以內，欣賞海底世界的奇幻與美妙。")],-1))),Me={class:"col-12 col-md-4"},Fe={class:"wrap"},Ke=ue((()=>(0,g._)("img",{class:"rounded-circle",src:"https://images.pexels.com/photos/8059795/pexels-photo-8059795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11",alt:""},null,-1))),He={class:"overlay rounded-circle"},Re=ue((()=>(0,g._)("div",{class:"text-center py-5 text-white"},"了解更多",-1))),Ye=ue((()=>(0,g._)("div",{class:"text-center"},[(0,g._)("h4",{class:"my-3"},"自由潛水"),(0,g._)("p",null," 基礎課程可以讓你在短時間裡面進入自由潛水的世界，並憑著自己一口氣開始做有深度的自由潛水探索。 ")],-1))),Je={class:"col-12 col-md-4"},Qe={class:"wrap"},Ge=ue((()=>(0,g._)("img",{class:"rounded-circle",src:"https://images.pexels.com/photos/2403840/pexels-photo-2403840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:""},null,-1))),Xe={class:"overlay rounded-circle"},et=ue((()=>(0,g._)("div",{class:"text-center py-5 text-white"},"了解更多",-1))),tt=ue((()=>(0,g._)("div",{class:"text-center"},[(0,g._)("h4",{class:"my-3"},"水上活動"),(0,g._)("p",null," 雖然在任何水域戴上潛水鏡和呼吸管都可以稱為是浮潛，但是一般浮潛是在礁石、沉船或者其它水下物體附近進行的。 ")],-1)));function at(e,t,a,s,n,i){const o=(0,g.up)("router-link"),l=(0,g.up)("swiper-slide"),r=(0,g.up)("swiper");return(0,g.wg)(),(0,g.iD)("div",pe,[(0,g.Wm)(r,{class:"",modules:n.modules,"slides-per-view":1,"space-between":50,loop:!0,navigation:{nextEl:".qqqqq"},effect:"fade",pagination:{clickable:!0},autoplay:{delay:5e3,disableOnInteraction:!1},ref:"ss"},{default:(0,g.w5)((()=>[(0,g.Wm)(l,null,{default:(0,g.w5)((()=>[(0,g._)("div",me,[(0,g._)("div",he,[ve,fe,(0,g.Wm)(o,{to:"/userProducts",class:"btn-animation pulse"},{default:(0,g.w5)((()=>[(0,g.Uk)("來去看看")])),_:1})])])])),_:1}),(0,g.Wm)(l,null,{default:(0,g.w5)((()=>[(0,g._)("div",ge,[(0,g._)("div",be,[_e,we,(0,g.Wm)(o,{to:"/userProducts",class:"btn-animation pulse"},{default:(0,g.w5)((()=>[(0,g.Uk)("來去看看")])),_:1})])])])),_:1}),(0,g.Wm)(l,null,{default:(0,g.w5)((()=>[(0,g._)("div",ye,[(0,g._)("div",ke,[xe,De,(0,g.Wm)(o,{to:"/userProducts",class:"btn-animation pulse"},{default:(0,g.w5)((()=>[(0,g.Uk)("來去看看")])),_:1})])])])),_:1}),Ce])),_:1},8,["modules","navigation"]),(0,g._)("div",We,[(0,g._)("div",Pe,[Ee,n.isMounted?((0,g.wg)(),(0,g.j4)(g.lR,{key:0,to:".imgtop",disabled:n.isDisabled},[(0,g._)("div",{class:"p-3 txtrwd","data-aos":[n.isDisabled?"fade-right":"none"]},je,8,Oe)],8,["disabled"])):(0,g.kq)("",!0)])]),$e,(0,g._)("div",Te,[Ue,(0,g._)("div",null,[Le,Ne,(0,g._)("div",Ve,[(0,g._)("div",qe,[(0,g._)("div",Be,[Ie,(0,g._)("div",Ze,[(0,g.Wm)(o,{to:"/userProducts"},{default:(0,g.w5)((()=>[ze])),_:1})])]),Ae]),(0,g._)("div",Me,[(0,g._)("div",Fe,[Ke,(0,g._)("div",He,[(0,g.Wm)(o,{to:"/userProducts"},{default:(0,g.w5)((()=>[Re])),_:1})])]),Ye]),(0,g._)("div",Je,[(0,g._)("div",Qe,[Ge,(0,g._)("div",Xe,[(0,g.Wm)(o,{to:"/userProducts"},{default:(0,g.w5)((()=>[et])),_:1})])]),tt])])])])])}var st=a(5032),nt=a(4191),it={name:"HomeView",data(){return{isMounted:!1,isDisabled:!1,modules:[nt.W_,nt.tl,nt.LW,nt.pt,nt.xW]}},mounted(){this.isMounted=!0,window.innerWidth<430&&(this.isDisabled=!0),window.addEventListener("resize",(()=>{console.log(window.screen.width),window.innerWidth<430?this.isDisabled=!0:this.isDisabled=!1}))},methods:{swiper(){this.$refs.ss.$el.swiper.slidePrev(),console.log(this.$refs.ss),console.log(this.$refs.ss.$el.swiper)}},components:{Swiper:st.tq,SwiperSlide:st.o5}};const ot=(0,q.Z)(it,[["render",at],["__scopeId","data-v-2f490356"]]);var lt=ot;const rt={class:"diveBoard"};function ct(e,t,a,s,n,i){const o=(0,g.up)("router-view"),l=(0,g.up)("ToastMessages"),r=(0,g.up)("CartIcons");return(0,g.wg)(),(0,g.iD)(g.HY,null,[(0,g._)("div",rt,[(0,g.Wm)(o)]),(0,g.Wm)(l),(0,g.Wm)(r)],64)}var dt=a(3594);const ut=e=>((0,g.dD)("data-v-47e68cdc"),e=e(),(0,g.Cn)(),e),pt={class:"p-2 rounded-2 fixbtn"},mt={"data-bs-toggle":"collapse",href:"#collapseExample",role:"button","aria-expanded":"false","aria-controls":"collapseExample"},ht={class:"bi bi-heart fs-3",type:"button"},vt={key:0,class:"badge rounded-pill cartnum"},ft=ut((()=>(0,g._)("span",{class:"visually-hidden"},"unread messages",-1))),gt={class:"collapse",id:"collapseExample"},bt={class:"card card-body cartBlock"},_t=ut((()=>(0,g._)("div",{class:"position-relative"},[(0,g._)("h3",{class:"col-12 text-center"},"關注中"),(0,g._)("button",{type:"button","data-bs-toggle":"collapse","aria-label":"Close",href:"#collapseExample",class:"position-absolute end-0 top-0 btn-close"})],-1))),wt={key:0},yt=["onKeyup"],kt=ut((()=>(0,g._)("i",{class:"bi bi-trash"},null,-1))),xt=[kt],Dt={class:"col-4"},Ct=["src","alt"],Wt={class:"col-4"},Pt=["onClick","onKeyup"],Et=ut((()=>(0,g._)("i",{class:"bi bi-cart-plus"},null,-1))),Ot=[Et],St=ut((()=>(0,g._)("hr",null,null,-1))),jt={key:1,class:""},$t=ut((()=>(0,g._)("div",{class:"text-center"},[(0,g._)("i",{class:"bi bi-cart4 display-1 fw-bold text-dark"}),(0,g._)("h6",{class:"p-3"},"目前沒有商品唷")],-1))),Tt=[$t],Ut={class:"bi bi-cart-fill position-relative d-block fs-3"},Lt={class:"badge rounded-pill cartnum"},Nt=ut((()=>(0,g._)("span",{class:"visually-hidden"},"unread messages",-1)));function Vt(e,t,a,n,i,o){const l=(0,g.up)("router-link");return(0,g.wg)(),(0,g.iD)("div",pt,[(0,g._)("a",mt,[(0,g._)("i",ht,[i.likedData?((0,g.wg)(),(0,g.iD)("span",vt,(0,Z.zw)(i.likedData.length),1)):(0,g.kq)("",!0),ft])]),(0,g._)("div",gt,[(0,g._)("div",bt,[_t,i.likedStore.length>0?((0,g.wg)(),(0,g.iD)("div",wt,[((0,g.wg)(!0),(0,g.iD)(g.HY,null,(0,g.Ko)(i.likedStore,(e=>((0,g.wg)(),(0,g.iD)("div",{class:"row justify-content-center col-12 g-3",key:e.title},[(0,g._)("span",{class:"col-2 fs-3 btn",onClick:t[0]||(t[0]=(...e)=>o.deleLike&&o.deleLike(...e)),onKeyup:t=>o.deleLike(e)},xt,40,yt),(0,g._)("div",Dt,[(0,g._)("img",{src:e.imageUrl,alt:e.engtitle},null,8,Ct)]),(0,g._)("span",Wt,(0,Z.zw)(e.title),1),(0,g._)("span",{class:"col-2 fs-3 btn",onClick:t=>o.updateCart(e),onKeyup:t=>o.updateCart(e)},Ot,40,Pt),St])))),128))])):((0,g.wg)(),(0,g.iD)("div",jt,Tt))])]),(0,g.Wm)(l,{to:"/UserCarts"},{default:(0,g.w5)((()=>[(0,g._)("i",Ut,[(0,g._)("span",Lt,[(0,g.Uk)((0,Z.zw)(i.cartNum),1),Nt])])])),_:1}),(0,g._)("i",{class:"bi bi-arrow-up-square d-block fs-3",type:"button",onClick:t[1]||(t[1]=(...e)=>o.toTop&&o.toTop(...e)),onKeyup:t[2]||(t[2]=(0,s.D2)(((...e)=>o.toTop&&o.toTop(...e)),["enter"]))},null,32)])}var qt={data(){return{carts:[],products:[],likedData:[],likedStore:[],cartNum:0}},mounted(){this.$emitter.on("push-cart",(()=>{this.getusercarts()})),this.$emitter.on("push-like",(()=>{this.getLikes()}))},methods:{toTop(){window.scrollTo({top:0})},deleLike(e){const t=this.likedData.indexOf(e.id);this.likedData.splice(t,1),localStorage.setItem("liked",JSON.stringify(this.likedData)),this.$emitter.emit("push-like",{style:"success",title:"關注",content:"已更新最愛標籤"})},updateCart(e){this.isLoading=!0;const t={product_id:e.id,qty:1},a="https://vue3-course-api.hexschool.io/api/waynechendive-api/cart";this.$http.post(a,{data:t}).then((e=>{this.$emitter.emit("push-cart",{style:"success",title:e.data.message,content:e.data.message}),this.isLoading=!1})).catch((e=>{console.log(e)}))},getLikes(){this.likedData=JSON.parse(localStorage.getItem("liked"));const e=this.likedData.length,t=this.products,a=[];for(let s=0;s<e;s+=1){const e=t.filter((e=>e.id===this.likedData[s]));a.push(e[0])}this.likedStore=a},getusercarts(){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/waynechendive-api/cart";this.$http.get(e).then((e=>{this.cartNum=0,this.carts=e.data.data.carts,this.isLoading=!1})).then((()=>{for(let e=0;e<this.carts.length;e+=1)this.cartNum+=this.carts[e].qty})).catch((e=>{console.log(e)}))},getproducts(){const e="https://vue3-course-api.hexschool.io/api/waynechendive-api/products/all";this.$http.get(e).then((e=>{this.products=e.data.products,this.getLikes()})).catch((e=>{console.log(e)}))}},computed:{},created(){this.getusercarts(),this.getproducts()}};const Bt=(0,q.Z)(qt,[["render",Vt],["__scopeId","data-v-47e68cdc"]]);var It=Bt,Zt={components:{ToastMessages:dt.Z,CartIcons:It},created(){this.$router.push("/home")}};const zt=(0,q.Z)(Zt,[["render",ct]]);var At=zt;const Mt=[{path:"/",name:"DiveBoard",component:At,meta:{title:"Wayne's Dive"},children:[{path:"home",name:"home",component:lt,meta:{title:"Wayne's Dive"}},{path:"userProducts",name:"UserProducts",component:()=>a.e(533).then(a.bind(a,7533))},{path:"userSelect/:id",name:"UserSelect",component:()=>a.e(172).then(a.bind(a,7172))},{path:"userCarts",name:"UserCarts",component:()=>a.e(819).then(a.bind(a,8819))},{path:"about",name:"AboutView",component:()=>a.e(486).then(a.bind(a,4486))},{path:"Contact",name:"ContactView",component:()=>a.e(446).then(a.bind(a,2446))},{path:"searchorder",name:"searchorder",component:()=>a.e(593).then(a.bind(a,9593))},{path:"Know",name:"Know",component:()=>Promise.all([a.e(618),a.e(48)]).then(a.bind(a,2048))},{path:"Order",name:"OrderView",component:()=>a.e(866).then(a.bind(a,1866)),children:[{path:"CheckOut/:id",name:"CheckOut",component:()=>a.e(918).then(a.bind(a,9918))},{path:"PayView/:id",name:"PayView",component:()=>a.e(788).then(a.bind(a,6788))}]}]},{path:"/login",name:"login",component:()=>a.e(794).then(a.bind(a,3794))},{path:"/dashboard",name:"dashboard",component:()=>a.e(578).then(a.bind(a,578)),children:[{path:"adminProduct",name:"adminProduct",component:()=>Promise.all([a.e(618),a.e(57)]).then(a.bind(a,4057))},{path:"CouponView",name:"CouponView",component:()=>Promise.all([a.e(618),a.e(283)]).then(a.bind(a,8283))},{path:"Orders",name:"OrdersView",component:()=>Promise.all([a.e(618),a.e(723)]).then(a.bind(a,3723))}]}],Ft=(0,oe.p7)({history:(0,oe.r5)(),routes:Mt,linkActiveClass:"active",scrollBehavior(){return{top:0}}});var Kt=Ft;const Ht=(0,h.WB)();Object.keys(c.ZP).forEach((e=>{(0,r.aH)(e,c.ZP[e])})),(0,r.jQ)({generateMessage:(0,d.NC)({zh_TW:u}),validateOnInput:!0}),(0,d.i_)("zh_TW");const Rt=(0,l.Z)();Kt.beforeEach(((e,t,a)=>{e.meta.title&&(document.title=e.meta.title),a()}));const Yt=(0,s.ri)(ie);Yt.use(Ht),Yt.config.globalProperties.$emitter=Rt,Yt.config.globalProperties.$filters={currency:v,date:f},m().init({offset:120,delay:0,duration:800,easing:"ease-inout-sine",once:!1,mirror:!1,anchorPlacement:"top-bottom"}),Yt.component("FormView",r.l0),Yt.component("FieldView",r.gN),Yt.component("ErrorMessage",r.Bc),Yt.component("LoadingView",o.Z),Yt.use(i.Z,n.ZP),Yt.use(Kt),Yt.mount("#app")},3594:function(e,t,a){a.d(t,{Z:function(){return k}});var s=a(3396);function n(e,t,a,n,i,o){const l=(0,s.up)("ToastView");return(0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.messages,((e,t)=>((0,s.wg)(),(0,s.j4)(l,{key:t,msg:e},null,8,["msg"])))),128)}a(7658);var i=a(7139);const o=e=>((0,s.dD)("data-v-25a88704"),e=e(),(0,s.Cn)(),e),l={class:"toast-container position-fixed pe-3 end-0","data-aos":"fade-left"},r={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},c={key:0,class:"toast-header"},d={class:"me-auto"},u=o((()=>(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1))),p={key:1,class:"toast-body"};function m(e,t,a,n,o,m){return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",r,[a.msg.style?((0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("span",{class:(0,i.C_)([`bg-${a.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,s._)("strong",d,(0,i.zw)(a.msg.title),1),u])):(0,s.kq)("",!0),a.msg.content?((0,s.wg)(),(0,s.iD)("div",p,(0,i.zw)(a.msg.content),1)):(0,s.kq)("",!0)],512)])}var h=a(8803),v=a.n(h),f={name:"ToastView",props:["msg"],mounted(){const e=this.$refs.toast,t=new(v())(e,{delay:2e3});t.show()}},g=a(89);const b=(0,g.Z)(f,[["render",m],["__scopeId","data-v-25a88704"]]);var _=b,w={components:{ToastView:_},data(){return{messages:[]}},mounted(){this.$emitter.on("push-msg",(e=>{const{style:t="succes",title:a,content:s}=e;this.messages.push({style:t,title:a,content:s})})),this.$emitter.on("push-cart",(e=>{const{content:t}=e;this.messages.push({content:t})})),this.$emitter.on("push-like",(e=>{const{content:t}=e;this.messages.push({content:t})}))}};const y=(0,g.Z)(w,[["render",n]]);var k=y}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(t,s,n,i){if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],n=e[d][1],i=e[d][2];for(var l=!0,r=0;r<s.length;r++)(!1&i||o>=i)&&Object.keys(a.O).every((function(e){return a.O[e](s[r])}))?s.splice(r--,1):(l=!1,i<o&&(o=i));if(l){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[s,n,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,s){return a.f[s](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{48:"0e5c8fff",57:"4508869f",172:"2ccc17d8",283:"a5f80c5b",446:"f76da87c",486:"b6c5404f",533:"967dfe16",578:"6c469f21",593:"586a7cf5",618:"b6dd9639",723:"d5be02cd",788:"c918717a",794:"25a4d55e",819:"4fc04eab",866:"37945dbf",918:"e67e3d79"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+e+"."+{48:"cc10f696",57:"4f42b538",172:"1403c2b7",446:"cbf1c5ec",486:"5dfdf4eb",533:"f08f254e",593:"11468ffb",723:"fcd9494b",819:"f568f12b",866:"b0447fa3"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="Dive:";a.l=function(s,n,i,o){if(e[s])e[s].push(n);else{var l,r;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==s||u.getAttribute("data-webpack")==t+i){l=u;break}}l||(r=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+i),l.src=s),e[s]=[n];var p=function(t,a){l.onerror=l.onload=null,clearTimeout(m);var n=e[s];if(delete e[s],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),r&&document.head.appendChild(l)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/dive/dist/"}(),function(){var e=function(e,t,a,s){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var i=function(i){if(n.onerror=n.onload=null,"load"===i.type)a();else{var o=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.href||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");r.code="CSS_CHUNK_LOAD_FAILED",r.type=o,r.request=l,n.parentNode.removeChild(n),s(r)}};return n.onerror=n.onload=i,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var n=a[s],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===e||i===t))return n}var o=document.getElementsByTagName("style");for(s=0;s<o.length;s++){n=o[s],i=n.getAttribute("data-href");if(i===e||i===t)return n}},s=function(s){return new Promise((function(n,i){var o=a.miniCssF(s),l=a.p+o;if(t(o,l))return n();e(s,l,n,i)}))},n={143:0};a.f.miniCss=function(e,t){var a={48:1,57:1,172:1,446:1,486:1,533:1,593:1,723:1,819:1,866:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=s(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={143:0};a.f.j=function(t,s){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)s.push(n[2]);else{var i=new Promise((function(a,s){n=e[t]=[a,s]}));s.push(n[2]=i);var o=a.p+a.u(t),l=new Error,r=function(s){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,n[1](l)}};a.l(o,r,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,i,o=s[0],l=s[1],r=s[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(r)var d=r(a)}for(t&&t(s);c<o.length;c++)i=o[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},s=self["webpackChunkDive"]=self["webpackChunkDive"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(3436)}));s=a.O(s)})();
//# sourceMappingURL=app.46815e9f.js.map