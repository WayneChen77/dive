(function(){"use strict";var e={6817:function(e,t,a){var s=a(9242),n=a(70),i=a(6423),o=a(6216),l=a(1373),r=a(5708),c=a(3990),d=a(579),u=a(2389),p=a(6905),m=a.n(p),h=a(3323);function v(e){const t=parseInt(e,10);return`${t.toFixed(0).replace(/./g,((e,t,a)=>t&&"."!==e&&(a.length-t)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function g(e){const t=new Date(1e3*e);return t.toLocaleDateString()}var f=a(3396);const b={class:"main"};function _(e,t,a,s,n,i){const o=(0,f.up)("NavBar"),l=(0,f.up)("router-view"),r=(0,f.up)("Footer");return(0,f.wg)(),(0,f.iD)(f.HY,null,[(0,f.Wm)(o,{class:"nav"}),(0,f._)("div",b,[(0,f.Wm)(l)]),(0,f.Wm)(r)],64)}const w=e=>((0,f.dD)("data-v-59b416d8"),e=e(),(0,f.Cn)(),e),y={class:"nav"},k={class:"container pt-2"},x={class:"navbar navbar-expand-lg"},D=w((()=>(0,f._)("i",{class:"bi bi-tsunami fs-1"},null,-1))),C={ref:"navbarBtn",class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},L=w((()=>(0,f._)("span",{class:"navbar-toggler-icon"},null,-1))),W=[L],E={class:"collapse navbar-collapse",id:"navbarNav"},P={class:"navbar-nav",ref:"navbarUl"},S={class:"nav-item"},O={class:"nav-item"},Z={class:"nav-item"},j={class:"nav-item"},N={class:"nav-item"},T=w((()=>(0,f._)("i",{class:"bi bi-gear fs-3"},null,-1)));function U(e,t,a,s,n,i){const o=(0,f.up)("router-link");return(0,f.wg)(),(0,f.iD)("div",y,[(0,f._)("div",k,[(0,f._)("nav",x,[(0,f.Wm)(o,{class:"text-titleblue",to:"/home"},{default:(0,f.w5)((()=>[D])),_:1}),(0,f._)("button",C,W,512),(0,f._)("div",E,[(0,f._)("ul",P,[(0,f._)("li",S,[(0,f.Wm)(o,{class:"nav-link",to:"/about"},{default:(0,f.w5)((()=>[(0,f.Uk)("關於我們")])),_:1})]),(0,f._)("li",O,[(0,f.Wm)(o,{class:"nav-link",to:"/userProducts"},{default:(0,f.w5)((()=>[(0,f.Uk)("產品介紹")])),_:1})]),(0,f._)("li",Z,[(0,f.Wm)(o,{class:"nav-link",to:"/searchorder"},{default:(0,f.w5)((()=>[(0,f.Uk)("訂單查詢")])),_:1})]),(0,f._)("li",j,[(0,f.Wm)(o,{class:"nav-link",to:"/userCarts"},{default:(0,f.w5)((()=>[(0,f.Uk)("購物車")])),_:1})]),(0,f._)("li",N,[(0,f.Wm)(o,{class:"nav-link phoneRwd",to:"/login"},{default:(0,f.w5)((()=>[(0,f.Uk)("管理員登入")])),_:1})]),(0,f.Wm)(o,{class:"nav-link text-end position-absolute end-0 me-4 rwd",to:"/login"},{default:(0,f.w5)((()=>[T])),_:1})],512)])])])])}var M=a(4870),V={setup(){const e=(0,M.iH)(null),t=(0,M.iH)(null);return(0,f.bv)((()=>{t.value.addEventListener("click",(()=>{document.body.offsetWidth<992&&e.value.click()}))})),{navbarUl:t,navbarBtn:e}}},B=a(89);const I=(0,B.Z)(V,[["render",U],["__scopeId","data-v-59b416d8"]]);var q=I,z=a(7139);const H=e=>((0,f.dD)("data-v-75c326ca"),e=e(),(0,f.Cn)(),e),A={class:"footer bg-titleblue py-3"},F={class:"d-flex justify-content-center g-3"},$={class:"text-white subWidth container"},K={class:"input-group mb-3"},J=["disabled"],R={class:"copyright"},Q=H((()=>(0,f._)("p",{class:"text-center text-white"},"Copyright © 2022 Wayne Dives. All Rights Reserved.",-1))),Y=H((()=>(0,f._)("li",null,[(0,f._)("a",{href:"https://www.pexels.com/zh-tw/",target:"_blank"}," 照片來源")],-1)));function G(e,t,a,s,n,i){const o=(0,f.up)("FieldView"),l=(0,f.up)("ErrorMessage"),r=(0,f.up)("FormView"),c=(0,f.up)("router-link");return(0,f.wg)(),(0,f.iD)("footer",A,[(0,f._)("div",F,[(0,f._)("div",$,[(0,f.Wm)(r,null,{default:(0,f.w5)((({errors:e})=>[(0,f._)("div",K,[(0,f.Wm)(o,{id:"userEmail",name:"userEmail",type:"text",class:(0,z.C_)(["form-control border-titleblue text-titleblue",{"is-invalid":e["userEmail"],"is-valid":!e[0]&&""!=s.userEmail}]),placeholder:"Email訂閱取得優惠碼","aria-label":"Email訂閱取得優惠碼",rules:"email|required","aria-describedby":"button-addon2",modelValue:s.userEmail,"onUpdate:modelValue":t[0]||(t[0]=e=>s.userEmail=e)},null,8,["class","modelValue"]),(0,f._)("button",{class:"btn btn-danger",type:"button",id:"button-addon2",onClick:t[1]||(t[1]=(...e)=>s.createSub&&s.createSub(...e)),disabled:""===s.userEmail}," 訂閱 ",8,J),(0,f.Wm)(l,{name:"userEmail",class:"invalid-feedback d-block"})])])),_:1})])]),(0,f._)("div",R,[Q,(0,f._)("ul",null,[(0,f._)("li",null,[(0,f.Wm)(c,{to:"/about"},{default:(0,f.w5)((()=>[(0,f.Uk)("關於我們")])),_:1})]),(0,f._)("li",null,[(0,f.Wm)(c,{to:"/contact"},{default:(0,f.w5)((()=>[(0,f.Uk)("連絡我們")])),_:1})]),(0,f._)("li",null,[(0,f.Wm)(c,{to:"/userProducts"},{default:(0,f.w5)((()=>[(0,f.Uk)("產品介紹")])),_:1})]),Y])])])}a(7658);var X=a(3495),ee=a.n(X),te=a(2483),ae={setup(){const e=(0,te.tv)(),t=(0,M.iH)(""),a=()=>{ee()({title:"恭喜獲得優惠碼!",text:"godive!",icon:"success",buttons:["取消!","馬上去買!"]}).then((a=>{a&&e.push("/userProducts"),t.value=""}))};return{userEmail:t,createSub:a}}};const se=(0,B.Z)(ae,[["render",G],["__scopeId","data-v-75c326ca"]]);var ne=se,ie={components:{NavBar:q,Footer:ne}};const oe=(0,B.Z)(ie,[["render",_]]);var le=oe,re=a.p+"img/icons8-cargo-ship-64.cbc5ac9c.svg",ce=a.p+"img/icons8-dive-64.b3ae557d.svg",de=a.p+"img/icons8-palm-tree-50.3f365129.svg",ue=a.p+"img/icons8-real-estate-50.9486f734.svg";const pe=e=>((0,f.dD)("data-v-71200a65"),e=e(),(0,f.Cn)(),e),me={class:"home"},he={class:"sliderBlock",style:{"background-image":"url(https://images.pexels.com/photos/2397653/pexels-photo-2397653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"}},ve={class:"txt","data-aos":"zoom-in"},ge=pe((()=>(0,f._)("h1",null,"韋恩潛旅",-1))),fe=pe((()=>(0,f._)("p",null,"一起探索世界潛水景點，以及水下的神秘世界！",-1))),be={class:"sliderBlock",style:{"background-image":"url(https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg)"}},_e={class:"txt","data-aos":"zoom-in"},we=pe((()=>(0,f._)("h3",null,"潛入您的生活",-1))),ye=pe((()=>(0,f._)("p",null,"向陸地請個假，下來吧！來海底！",-1))),ke={class:"sliderBlock",style:{"background-image":"url(https://images.pexels.com/photos/762103/pexels-photo-762103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"}},xe={class:"txt","data-aos":"zoom-in"},De=pe((()=>(0,f._)("h3",null,"挑戰你的極限",-1))),Ce=pe((()=>(0,f._)("p",null,"馬上展開您的冒險，韋恩潛旅給您最大的折扣！",-1))),Le=pe((()=>(0,f._)("div",{class:"sliderDown"},null,-1))),We={class:"container mainTop"},Ee={class:"row align-items-center justify-content-center textItem"},Pe=(0,f.uE)('<div class="col-12 col-md-6 p-3" data-aos="fade-right" data-v-71200a65><img class="img-fluid" src="https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" alt="dive.pic" title="自由潛水" data-v-71200a65></div><div class="col-12 col-md-6 p-3 text text1" data-aos="fade-left" data-v-71200a65><div data-v-71200a65><h4 data-v-71200a65>自由潛水</h4><p data-v-71200a65> 自由潛水是最古老、最原始的潛水形式。例如，早在石器時代，人們就透過自由潛水就收集貝殼、海綿和珍珠。 日本的「あま」、 韓國的「해녀」（皆為海女的一種）和馬來群島的巴瑤族（英語：Bajau）今天仍然以這種方式潛水。 自由潛水是一種休閒活動同時也是一種潛水競技運動，甚至也是一種極限運動。 休閒活動的重點是探索海底世界，並在與水肺潛水類似的環境條件下潛水。 自由潛水也有一些瑜伽元素，例如深呼吸、有意識的呼吸和意識練習。 </p></div></div><div class="imgtop col-0 col-md-6 text text2" data-aos="fade-right" data-v-71200a65></div><div class="col-12 col-md-6 p-3" data-aos="fade-left" data-v-71200a65><img class="img-fluid" src="https://images.pexels.com/photos/37530/divers-scuba-divers-diving-underwater-37530.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" alt="dive.pic" title="水肺潛水" data-v-71200a65></div>',4),Se=["data-aos"],Oe=pe((()=>(0,f._)("div",null,[(0,f._)("h4",null,"水肺潛水"),(0,f._)("p",null," 水肺是一種輔助潛水者在水中呼吸的器具。水肺是在1943年，由雅克-伊夫·庫斯托和埃米爾·加尼昂共同發明的。 現代的水肺系統最少由四個部分組成，包括：浮力調節裝置、呼吸調節器、 潛水氣瓶和配重系統。調節器以活栓操控，將壓縮氣體由高壓狀態，轉化成可供人體正常呼吸的壓力。 潛水員所使用的氣瓶不稱為氧氣筒。氧氣筒(100%氧氣)是屬於醫療級的氣體。水肺使用的稱之為氣瓶(79%氮氣+21%氧氣)，氣瓶裡裝的是壓縮後的空氣，並非純氧氣。 ")],-1))),Ze=[Oe],je=(0,f.uE)('<div class="mainMid my-3 text-titleblue" data-aos="zoom-in" data-v-71200a65><div class="container text-center p-3" data-v-71200a65><h3 class="m-3" data-v-71200a65>韋恩潛旅，超值服務</h3><div class="row" data-v-71200a65><div class="col-12 col-md-3" data-v-71200a65><img src="'+re+'" alt="ship.pic" style="width:64px;" data-v-71200a65><h4 data-v-71200a65>遊艇</h4><p data-v-71200a65> 引進墾丁52人座遊艇，讓您體驗富豪般的海上生活，不需遠赴國外即可與朋友們一同在船上享受墾丁美麗的碧海藍天，開派對、跳水、浮潛、水上活動、烤肉，把您的假期花在值得的事情上吧! </p></div><div class="col-12 col-md-3" data-v-71200a65><img src="'+ce+'" alt="dive.pic" style="width:64px;" data-v-71200a65><h4 data-v-71200a65>潛水</h4><p data-v-71200a65> 我們的教練以專業、認真與熱忱，提供給您最佳的潛水教學與服務。全世界有海洋面積約占地球表面積71%，沒有去過這71%你不算去過全世界！ </p></div><div class="col-12 col-md-3" data-v-71200a65><img src="'+de+'" alt="tree.pic" style="width:64px;" data-v-71200a65><h4 data-v-71200a65>渡假</h4><p data-v-71200a65> 多樣客製化服務，絕對是您的休閒首選，遊艇烤肉BBQ、專人交通接送、多樣水上活動，您還在等什麼! </p></div><div class="col-12 col-md-3" data-v-71200a65><img src="'+ue+'" alt="house.pic" style="width:64px;" data-v-71200a65><h4 data-v-71200a65>住宿</h4><p data-v-71200a65> 清靜優雅的庭園獨棟渡假小屋，提供您舒適優雅的度假環境。寬敞的四人空間，限量超值豪華套房， 室內為兩房一廳的大空間，將休憩區和睡眠區區分開， 提升睡眠品質，好好享受您的愉快渡假。 </p></div></div></div></div>',1),Ne={class:"container"},Te=pe((()=>(0,f._)("div",{class:"attachBack p-5 m-2 text-white"},[(0,f._)("h4",null,"每年3次，出團潛入世界"),(0,f._)("p",null," 拿到海洋入場券後，想要到國外看不同的生物，但又不知道如何安排嗎？ 結業的學生們不用擔心，一年會舉行三次的國外潛旅等著你們！ ")],-1))),Ue=pe((()=>(0,f._)("h4",{class:"text-center"},"F R E E D I V I N G C O U R S E S",-1))),Me=pe((()=>(0,f._)("h4",{class:"text-center"},"潛水課程",-1))),Ve={class:"row"},Be={class:"col-12 col-md-4"},Ie={class:"wrap"},qe=pe((()=>(0,f._)("img",{class:"rounded-circle",src:"https://images.pexels.com/photos/3046637/pexels-photo-3046637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:""},null,-1))),ze={class:"overlay rounded-circle"},He=pe((()=>(0,f._)("div",{class:"text-center py-5 text-white"},"了解更多",-1))),Ae=pe((()=>(0,f._)("div",{class:"text-center"},[(0,f._)("h4",{class:"my-3"},"水肺潛水"),(0,f._)("p",null,"任何人都可以嘗試，以最簡單的方式下潛到水深12米以內，欣賞海底世界的奇幻與美妙。")],-1))),Fe={class:"col-12 col-md-4"},$e={class:"wrap"},Ke=pe((()=>(0,f._)("img",{class:"rounded-circle",src:"https://images.pexels.com/photos/8059795/pexels-photo-8059795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11",alt:""},null,-1))),Je={class:"overlay rounded-circle"},Re=pe((()=>(0,f._)("div",{class:"text-center py-5 text-white"},"了解更多",-1))),Qe=pe((()=>(0,f._)("div",{class:"text-center"},[(0,f._)("h4",{class:"my-3"},"自由潛水"),(0,f._)("p",null," 基礎課程可以讓你在短時間裡面進入自由潛水的世界，並憑著自己一口氣開始做有深度的自由潛水探索。 ")],-1))),Ye={class:"col-12 col-md-4"},Ge={class:"wrap"},Xe=pe((()=>(0,f._)("img",{class:"rounded-circle",src:"https://images.pexels.com/photos/2403840/pexels-photo-2403840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:""},null,-1))),et={class:"overlay rounded-circle"},tt=pe((()=>(0,f._)("div",{class:"text-center py-5 text-white"},"了解更多",-1))),at=pe((()=>(0,f._)("div",{class:"text-center"},[(0,f._)("h4",{class:"my-3"},"水上活動"),(0,f._)("p",null," 雖然在任何水域戴上潛水鏡和呼吸管都可以稱為是浮潛，但是一般浮潛是在礁石、沉船或者其它水下物體附近進行的。 ")],-1)));function st(e,t,a,s,n,i){const o=(0,f.up)("router-link"),l=(0,f.up)("swiper-slide"),r=(0,f.up)("swiper");return(0,f.wg)(),(0,f.iD)("div",me,[(0,f.Wm)(r,{modules:s.modules,"slides-per-view":1,"space-between":50,loop:!0,effect:"fade",pagination:{clickable:!0},autoplay:{delay:5e3,disableOnInteraction:!1}},{default:(0,f.w5)((()=>[(0,f.Wm)(l,null,{default:(0,f.w5)((()=>[(0,f._)("div",he,[(0,f._)("div",ve,[ge,fe,(0,f.Wm)(o,{to:"/userProducts",class:"btn-animation pulse"},{default:(0,f.w5)((()=>[(0,f.Uk)("來去看看")])),_:1})])])])),_:1}),(0,f.Wm)(l,null,{default:(0,f.w5)((()=>[(0,f._)("div",be,[(0,f._)("div",_e,[we,ye,(0,f.Wm)(o,{to:"/userProducts",class:"btn-animation pulse"},{default:(0,f.w5)((()=>[(0,f.Uk)("來去看看")])),_:1})])])])),_:1}),(0,f.Wm)(l,null,{default:(0,f.w5)((()=>[(0,f._)("div",ke,[(0,f._)("div",xe,[De,Ce,(0,f.Wm)(o,{to:"/userProducts",class:"btn-animation pulse"},{default:(0,f.w5)((()=>[(0,f.Uk)("來去看看")])),_:1})])])])),_:1}),Le])),_:1},8,["modules"]),(0,f._)("div",We,[(0,f._)("div",Ee,[Pe,s.isMounted?((0,f.wg)(),(0,f.j4)(f.lR,{key:0,to:".imgtop",disabled:s.isDisabled},[(0,f._)("div",{class:"p-3 txtrwd","data-aos":[s.isDisabled?"fade-right":"none"]},Ze,8,Se)],8,["disabled"])):(0,f.kq)("",!0)])]),je,(0,f._)("div",Ne,[Te,(0,f._)("div",null,[Ue,Me,(0,f._)("div",Ve,[(0,f._)("div",Be,[(0,f._)("div",Ie,[qe,(0,f._)("div",ze,[(0,f.Wm)(o,{to:"/userProducts"},{default:(0,f.w5)((()=>[He])),_:1})])]),Ae]),(0,f._)("div",Fe,[(0,f._)("div",$e,[Ke,(0,f._)("div",Je,[(0,f.Wm)(o,{to:"/userProducts"},{default:(0,f.w5)((()=>[Re])),_:1})])]),Qe]),(0,f._)("div",Ye,[(0,f._)("div",Ge,[Xe,(0,f._)("div",et,[(0,f.Wm)(o,{to:"/userProducts"},{default:(0,f.w5)((()=>[tt])),_:1})])]),at])])])])])}var nt=a(5032),it=a(4191),ot={name:"HomeView",setup(){const e=(0,M.iH)(!1),t=(0,M.iH)(!1),a=(0,M.qj)([it.tl,it.LW,it.pt,it.xW]);return(0,f.bv)((()=>{e.value=!0,window.innerWidth<430&&(t.value=!0),window.addEventListener("resize",(()=>{console.log(window.screen.width),window.innerWidth<430?t.value=!0:t.value=!1}))})),{isDisabled:t,isMounted:e,modules:a}},components:{Swiper:nt.tq,SwiperSlide:nt.o5}};const lt=(0,B.Z)(ot,[["render",st],["__scopeId","data-v-71200a65"]]);var rt=lt;const ct={class:"diveBoard"};function dt(e,t,a,s,n,i){const o=(0,f.up)("router-view"),l=(0,f.up)("LoadingView"),r=(0,f.up)("ToastMessages"),c=(0,f.up)("CartIcons");return(0,f.wg)(),(0,f.iD)(f.HY,null,[(0,f._)("div",ct,[(0,f.Wm)(o)]),(0,f.Wm)(l,{active:s.isLoading},null,8,["active"]),(0,f.Wm)(r),(0,f.Wm)(c)],64)}var ut=a(6294),pt=a(2578),mt=a(4055);const ht=e=>((0,f.dD)("data-v-6025b3e9"),e=e(),(0,f.Cn)(),e),vt={class:"p-2 rounded-2 fixbtn"},gt={"data-bs-toggle":"collapse",href:"#collapseExample",role:"button","aria-expanded":"false","aria-controls":"collapseExample"},ft={class:"bi bi-heart fs-3 text-titleblue",type:"button"},bt={key:0,class:"badge rounded-pill cartnum"},_t=ht((()=>(0,f._)("span",{class:"visually-hidden"},"unread messages",-1))),wt={class:"collapse",id:"collapseExample"},yt={class:"card card-body cartBlock"},kt=ht((()=>(0,f._)("div",{class:"position-relative"},[(0,f._)("h3",{class:"col-12 text-center"},"關注中"),(0,f._)("button",{type:"button","data-bs-toggle":"collapse","aria-label":"Close",href:"#collapseExample",class:"position-absolute end-0 top-0 btn-close"})],-1))),xt={key:0},Dt=["onKeyup"],Ct=ht((()=>(0,f._)("i",{class:"bi bi-trash"},null,-1))),Lt=[Ct],Wt={class:"col-4"},Et=["src","alt"],Pt={class:"col-4"},St=["onClick","onKeyup"],Ot=ht((()=>(0,f._)("i",{class:"bi bi-cart-plus"},null,-1))),Zt=[Ot],jt=ht((()=>(0,f._)("hr",null,null,-1))),Nt={key:1,class:""},Tt=ht((()=>(0,f._)("div",{class:"text-center"},[(0,f._)("i",{class:"bi bi-cart4 display-1 fw-bold text-dark"}),(0,f._)("h6",{class:"p-3"},"目前沒有商品唷")],-1))),Ut=[Tt],Mt={class:"bi bi-cart-fill position-relative d-block fs-3 text-titleblue"},Vt={class:"badge rounded-pill cartnum"},Bt=ht((()=>(0,f._)("span",{class:"visually-hidden"},"unread messages",-1)));function It(e,t,a,n,i,o){const l=(0,f.up)("router-link");return(0,f.wg)(),(0,f.iD)("div",vt,[(0,f._)("a",gt,[(0,f._)("i",ft,[n.likedData?((0,f.wg)(),(0,f.iD)("span",bt,(0,z.zw)(n.likedData.length),1)):(0,f.kq)("",!0),_t])]),(0,f._)("div",wt,[(0,f._)("div",yt,[kt,n.likedStore.length>0?((0,f.wg)(),(0,f.iD)("div",xt,[((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)(n.likedStore,(e=>((0,f.wg)(),(0,f.iD)("div",{class:"row justify-content-center col-12 g-3",key:e},[(0,f._)("span",{class:"col-2 fs-3 btn",onClick:t[0]||(t[0]=(...e)=>n.deleLike&&n.deleLike(...e)),onKeyup:t=>n.deleLike(e)},Lt,40,Dt),(0,f._)("div",Wt,[(0,f._)("img",{src:e.imageUrl,alt:e.engtitle},null,8,Et)]),(0,f._)("span",Pt,(0,z.zw)(e.title),1),(0,f._)("span",{class:"col-2 fs-3 btn",onClick:t=>n.updateCart(e),onKeyup:t=>n.updateCart(e)},Zt,40,St),jt])))),128))])):((0,f.wg)(),(0,f.iD)("div",Nt,Ut))])]),(0,f.Wm)(l,{to:"/UserCarts"},{default:(0,f.w5)((()=>[(0,f._)("i",Mt,[(0,f._)("span",Vt,[(0,f.Uk)((0,z.zw)(n.cartNum),1),Bt])])])),_:1}),(0,f._)("i",{class:"bi bi-arrow-up-square d-block fs-3 text-titleblue",type:"button",onClick:t[1]||(t[1]=(...e)=>n.toTop&&n.toTop(...e)),onKeyup:t[2]||(t[2]=(0,s.D2)(((...e)=>n.toTop&&n.toTop(...e)),["enter"]))},null,32)])}var qt=a(6774),zt={setup(){const e=(0,qt.Z)(),{likedData:t,likedStore:a,cartNum:s}=(0,pt.Jk)(e),{updateCart:n,getLikeData:i,deleLike:o}=e;e.getproducts(),e.getusercarts(),e.getLikes();const l=()=>{window.scrollTo({top:0})};return{likedData:t,likedStore:a,cartNum:s,toTop:l,updateCart:n,getLikeData:i,deleLike:o}}};const Ht=(0,B.Z)(zt,[["render",It],["__scopeId","data-v-6025b3e9"]]);var At=Ht,Ft={setup(){const e=(0,ut.Z)(),{isLoading:t}=(0,pt.Jk)(e);return{isLoading:t}},components:{ToastMessages:mt.Z,CartIcons:At}};const $t=(0,B.Z)(Ft,[["render",dt]]);var Kt=$t;const Jt=[{path:"/",name:"DiveBoard",component:Kt,meta:{title:"Wayne's Dive"},children:[{path:"home",name:"home",component:rt,meta:{title:"Wayne's Dive"}},{path:"userProducts",name:"UserProducts",component:()=>a.e(978).then(a.bind(a,2978))},{path:"userSelect/:id",name:"UserSelect",component:()=>a.e(488).then(a.bind(a,2488))},{path:"userCarts",name:"UserCarts",component:()=>a.e(995).then(a.bind(a,995))},{path:"about",name:"AboutView",component:()=>a.e(509).then(a.bind(a,4509))},{path:"Contact",name:"ContactView",component:()=>a.e(446).then(a.bind(a,2446))},{path:"searchorder",name:"searchorder",component:()=>a.e(466).then(a.bind(a,466))},{path:"Order",name:"OrderView",component:()=>a.e(421).then(a.bind(a,5421)),children:[{path:"CheckOut/:id",name:"CheckOut",component:()=>a.e(227).then(a.bind(a,5227))},{path:"PayView/:id",name:"PayView",component:()=>a.e(507).then(a.bind(a,8507))}]}]},{path:"/login",name:"login",component:()=>a.e(794).then(a.bind(a,3794))},{path:"/dashboard",name:"dashboard",component:()=>a.e(578).then(a.bind(a,578)),children:[{path:"adminProduct",name:"adminProduct",component:()=>Promise.all([a.e(24),a.e(57)]).then(a.bind(a,4057))},{path:"CouponView",name:"CouponView",component:()=>Promise.all([a.e(24),a.e(283)]).then(a.bind(a,8283))},{path:"Orders",name:"OrdersView",component:()=>Promise.all([a.e(24),a.e(723)]).then(a.bind(a,3723))}]}],Rt=(0,te.p7)({history:(0,te.r5)(),routes:Jt,linkActiveClass:"active",scrollBehavior(){return{top:0}}});var Qt=Rt;Object.keys(c.ZP).forEach((e=>{(0,r.aH)(e,c.ZP[e])})),(0,r.jQ)({generateMessage:(0,d.NC)({zh_TW:u}),validateOnInput:!0}),(0,d.i_)("zh_TW");const Yt=(0,l.Z)();Qt.beforeEach(((e,t,a)=>{e.meta.title&&(document.title=e.meta.title),a()}));const Gt=(0,s.ri)(le);Gt.use(h.Z),Gt.config.globalProperties.$emitter=Yt,Gt.config.globalProperties.$filters={currency:v,date:g},m().init({offset:120,delay:0,duration:800,easing:"ease-inout-sine",once:!1,mirror:!1,anchorPlacement:"top-bottom"}),Gt.component("FormView",r.l0),Gt.component("FieldView",r.gN),Gt.component("ErrorMessage",r.Bc),Gt.component("LoadingView",o.Z),Gt.use(i.Z,n.ZP),Gt.use(Qt),Gt.mount("#app")},6294:function(e,t,a){a(7658);var s=a(2578);t["Z"]=(0,s.Q_)("StatusStore",{state:()=>({isLoading:!1,itemLoad:"",messages:[]}),actions:{pushMessage(e){const{style:t,title:a,content:s}=e;this.messages.push({style:t,title:a,content:s})}}})},3323:function(e,t,a){var s=a(2578);const n=(0,s.WB)();t["Z"]=n},6774:function(e,t,a){a(7658);var s=a(2578),n=a(70),i=a(6294),o=a(3323);const l=(0,i.Z)(o.Z);t["Z"]=(0,s.Q_)("UserProductsStore",{state:()=>({products:[],search:"",cartNum:0,carts:[],price:0,coupon_code:"",likedData:[1,2],likedStore:[],likenum:0}),getters:{dataList:e=>e.products.filter((t=>t.title.match(e.search)))},actions:{updateCart(e,t=1){l.isLoading=!0;const a={product_id:e.id,qty:t},s="https://vue3-course-api.hexschool.io/api/waynechendive-api/cart";n.ZP.post(s,{data:a}).then((e=>{const t={content:e.data.message};l.pushMessage(t),l.isLoading=!1,this.getusercarts()})).catch((e=>{console.log(e)}))},getproducts(){l.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/waynechendive-api/products/all";n.ZP.get(e).then((e=>{this.products=e.data.products,l.isLoading=!1})).catch((e=>{console.log(e)}))},getusercarts(){const e="https://vue3-course-api.hexschool.io/api/waynechendive-api/cart";n.ZP.get(e).then((e=>{this.cartNum=0,this.carts=e.data.data.carts,this.price=e.data.data})).then((()=>{const e=this.carts.map((e=>e.qty)).reduce(((e,t)=>e+t),0);this.cartNum=e})).catch((e=>{console.log(e)}))},reduceCart(e){l.isLoad=!0;const t=`https://vue3-course-api.hexschool.io/api/waynechendive-api/cart/${e.id}`,a={product_id:e.product_id,qty:e.qty-1};n.ZP.put(t,{data:a}).then((e=>{const t={style:"warning",title:e.data.message,content:e.data.message};l.isLoad=!1,this.getusercarts(),l.pushMessage(t)}))},addCart(e){l.isLoad=!0;const t=`https://vue3-course-api.hexschool.io/api/waynechendive-api/cart/${e.id}`,a={product_id:e.product_id,qty:e.qty+1};n.ZP.put(t,{data:a}).then((e=>{const t={style:"success",title:e.data.message,content:e.data.message};l.isLoad=!1,this.getusercarts(),l.pushMessage(t)}))},adjCart(e){l.isLoad=!0;const t=`https://vue3-course-api.hexschool.io/api/waynechendive-api/cart/${e.id}`,a={product_id:e.product_id,qty:e.qty};n.ZP.put(t,{data:a}).then((e=>{const t={content:e.data.message};l.isLoad=!1,this.getusercarts(),l.pushMessage(t)}))},removeCartItem(e){const t=`https://vue3-course-api.hexschool.io/api/waynechendive-api/cart/${e}`;n.ZP["delete"](t).then((e=>{const t={content:e.data.message};this.getusercarts(),l.pushMessage(t)}))},deleteCart(){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/waynechendive-api/carts";n.ZP["delete"](e).then((e=>{this.isLoading=!1;const t={content:e.data.message};this.getusercarts(),l.pushMessage(t)}))},isLiked(e){return this.likedData.indexOf(e.id)>-1},liked(e){const t=localStorage.getItem("liked"),a=JSON.parse(t)??[],s=a.indexOf(e.id);s>-1?(a.splice(s,1),this.likedData=a):(a.push(e.id),this.likedData=a),this.getLikeData(),localStorage.setItem("liked",JSON.stringify(this.likedData));const n={content:"已更新最愛標籤"};l.pushMessage(n)},deleLike(e){const t=this.likedData.indexOf(e.id);this.likedData.splice(t,1),localStorage.setItem("liked",JSON.stringify(this.likedData));const a={content:"已更新最愛標籤"};l.pushMessage(a),this.getLikeData()},getLikes(){this.likedData=JSON.parse(localStorage.getItem("liked"))||[],setTimeout((()=>{this.getLikeData()}),2e3)},getLikeData(){this.likenum=this.likedData.length;const e=this.products,t=[];for(let a=0;a<this.likenum;a+=1){const s=e.filter((e=>e.id===this.likedData[a]));t.push(s[0])}this.likedStore=t}}})},4055:function(e,t,a){a.d(t,{Z:function(){return L}});var s=a(3396);function n(e,t,a,n,i,o){const l=(0,s.up)("ToastView");return(0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.messages,((e,t)=>((0,s.wg)(),(0,s.j4)(l,{key:t,msg:e},null,8,["msg"])))),128)}a(7658);var i=a(7139);const o=e=>((0,s.dD)("data-v-f652b216"),e=e(),(0,s.Cn)(),e),l={class:"toast-container position-fixed pe-3 end-0","data-aos":"fade-left"},r={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toastEl"},c={key:0,class:"toast-header"},d={class:"me-auto"},u=o((()=>(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1))),p={key:1,class:"toast-body"};function m(e,t,a,n,o,m){return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",r,[a.msg.style?((0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("span",{class:(0,i.C_)([`bg-${a.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,s._)("strong",d,(0,i.zw)(a.msg.title),1),u])):(0,s.kq)("",!0),a.msg.content?((0,s.wg)(),(0,s.iD)("div",p,(0,i.zw)(a.msg.content),1)):(0,s.kq)("",!0)],512)])}var h=a(8803),v=a.n(h),g=a(4870),f={name:"ToastView",props:["msg"],setup(){const e=(0,g.iH)(null);return(0,s.bv)((()=>{const t=new(v())(e.value,{delay:2e3});t.show()})),{toastEl:e}}},b=a(89);const _=(0,b.Z)(f,[["render",m],["__scopeId","data-v-f652b216"]]);var w=_,y=a(6294),k=a(2578),x=a(1373),D={components:{ToastView:w},setup(){const e=(0,y.Z)(),{messages:t}=(0,k.Jk)(e),a=(0,x.Z)();return(0,s.bv)((()=>{a.on("push-msg",(e=>{const{style:a="succes",title:s,content:n}=e;t.push({style:a,title:s,content:n}),console.log(t)}))})),{messages:t}},mounted(){this.$emitter.on("push-msg",(e=>{const{style:t="succes",title:a,content:s}=e;this.messages.push({style:t,title:a,content:s})}))}};const C=(0,b.Z)(D,[["render",n]]);var L=C}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(t,s,n,i){if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],n=e[d][1],i=e[d][2];for(var l=!0,r=0;r<s.length;r++)(!1&i||o>=i)&&Object.keys(a.O).every((function(e){return a.O[e](s[r])}))?s.splice(r--,1):(l=!1,i<o&&(o=i));if(l){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[s,n,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,s){return a.f[s](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{24:"052efb19",57:"5784868a",227:"2ae75fc1",283:"f18a6716",421:"5262ba05",446:"f76da87c",466:"eb37b91f",488:"fc46a73c",507:"de968052",509:"5a9c45b5",578:"d0c30344",723:"93a3c968",794:"c1237bd0",978:"618cf899",995:"cc46f2c2"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+e+"."+{57:"4f42b538",421:"8fd4412a",446:"cbf1c5ec",466:"e376b1fe",488:"6acbbc06",509:"0f655aaf",723:"fcd9494b",978:"570ac302",995:"0e1d628a"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="Dive:";a.l=function(s,n,i,o){if(e[s])e[s].push(n);else{var l,r;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==s||u.getAttribute("data-webpack")==t+i){l=u;break}}l||(r=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+i),l.src=s),e[s]=[n];var p=function(t,a){l.onerror=l.onload=null,clearTimeout(m);var n=e[s];if(delete e[s],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),r&&document.head.appendChild(l)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/dive/dist/"}(),function(){var e=function(e,t,a,s){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var i=function(i){if(n.onerror=n.onload=null,"load"===i.type)a();else{var o=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.href||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");r.code="CSS_CHUNK_LOAD_FAILED",r.type=o,r.request=l,n.parentNode.removeChild(n),s(r)}};return n.onerror=n.onload=i,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var n=a[s],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===e||i===t))return n}var o=document.getElementsByTagName("style");for(s=0;s<o.length;s++){n=o[s],i=n.getAttribute("data-href");if(i===e||i===t)return n}},s=function(s){return new Promise((function(n,i){var o=a.miniCssF(s),l=a.p+o;if(t(o,l))return n();e(s,l,n,i)}))},n={143:0};a.f.miniCss=function(e,t){var a={57:1,421:1,446:1,466:1,488:1,509:1,723:1,978:1,995:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=s(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={143:0};a.f.j=function(t,s){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)s.push(n[2]);else{var i=new Promise((function(a,s){n=e[t]=[a,s]}));s.push(n[2]=i);var o=a.p+a.u(t),l=new Error,r=function(s){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,n[1](l)}};a.l(o,r,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,i,o=s[0],l=s[1],r=s[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(r)var d=r(a)}for(t&&t(s);c<o.length;c++)i=o[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},s=self["webpackChunkDive"]=self["webpackChunkDive"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(6817)}));s=a.O(s)})();
//# sourceMappingURL=app.6ea31262.js.map