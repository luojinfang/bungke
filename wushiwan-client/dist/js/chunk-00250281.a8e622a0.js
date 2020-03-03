(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00250281"],{"325c":function(t,i,e){},7141:function(t,i,e){"use strict";var s=e("325c"),n=e.n(s);n.a},c1b2:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"column-view"},[e("van-nav-bar",{ref:"topBar",attrs:{title:"提交任务","right-text":"任务详情","left-text":"返回",fixed:"","left-arrow":""},on:{"click-left":t.onNavBarLeftPressed,"click-right":t.onNavBarRightPressed}}),t.missionDetail?e("div",{staticClass:"under-nav flex1 flex-column height0 overflow-auto"},[e("div",{staticClass:"top-section"},[e("p",[t._v("标   题："+t._s(t.missionDetail.title))]),e("p",[t._v("编   号："+t._s(t.missionId))]),e("p",[t._v("单   价："+t._s(t.missionDetail.price/100)+"元")]),e("p",[t._v("发布方："+t._s(t.missionDetail.publishUserName))]),e("p",[t._v("支持设备："+t._s(t.getSupportDeviceName()))]),e("p",[t._v("截止时间："+t._s(t.missionDetail.deadlineTime))])]),e("div",{staticClass:"flex-column flex-align-center"},[e("div",{staticClass:"section sample-section"},[e("p",{staticClass:"section-title"},[t._v("上传样例")]),e("div",{staticStyle:{height:"1px","background-color":"#b3b3b3"}}),e("div",{staticClass:"img-div"},t._l(t.missionDetail.sampleImgList,function(i,s){return e("img",{key:s,attrs:{src:t.imgFullPath(i),alt:""},on:{click:function(i){return t.onSampleImgClick(s)}}})}),0)]),t.missionDetail.explainList&&t.missionDetail.explainList.length>0?e("div",{staticClass:"section explain-section"},[e("p",{staticClass:"section-title"},[t._v("操作说明")]),e("div",{staticStyle:{height:"1px","background-color":"#b3b3b3"}}),t._l(t.missionDetail.explainList,function(i,s){return e("div",{key:"explain"+s,staticClass:"flex-row flex-align-center explain"},[e("img",{attrs:{alt:"",src:t.imgFullPath(i.img)},on:{click:function(i){return t.onExplainImgClick(s)}}}),e("div",{staticClass:"flex-row flex-align-center info"},[e("div",{staticClass:"badge flex-row flex-center"},[e("div",{staticClass:"inner flex-row flex-center"},[e("span",[t._v(t._s(s+1))])])]),e("span",[t._v(t._s(i.text))])]),e("div",{staticClass:"dash-line"})])})],2):t._e(),e("div",{staticClass:"section other-section"},[e("p",{staticClass:"section-title"},[t._v("其他说明")]),e("div",{staticStyle:{height:"1px","background-color":"#b3b3b3"}}),e("p",{directives:[{name:"show",rawName:"v-show",value:t.missionDetail.url,expression:"missionDetail.url"}],staticClass:"flex-row"},[e("span",{staticStyle:{"flex-shrink":"0"}},[t._v("链       接：")]),e("span",{staticStyle:{cursor:"pointer","text-decoration":"underline",display:"inline-block","word-break":"break-all"},on:{click:function(i){return t.onUrlPressed(t.missionDetail.url)}}},[t._v("\n      "+t._s(t.missionDetail.url))])]),e("div",{staticClass:"dash-line"}),e("p",[t._v("文字验证："+t._s(t.missionDetail.textVerify))]),e("div",{staticClass:"dash-line"}),e("p",[t._v("备       注："+t._s(t.missionDetail.remark))])]),e("div",{staticClass:"section upload-section"},[e("p",{staticClass:"section-title"},[t._v("我的上传")]),e("div",{staticStyle:{height:"1px","background-color":"#b3b3b3"}}),e("div",{staticClass:"upload"},[e("p",[t._v("1、上传图片")]),e("div",{staticClass:"flex-row flex-align-center img-card-div"},[t._l(t.imgList,function(i,s){return e("div",{key:s,staticClass:"img-card",on:{click:function(i){return i.stopPropagation(),t.onImgItemClick(s)}}},[e("img-card",{attrs:{"add-size":40,"img-content":i.content},on:{onReadImg:t.onReadImg,onDeleteImg:function(i){return t.onDeleteImg(s)}}})],1)}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.imgList.length<t.maxImgLength,expression:"imgList.length < maxImgLength"}],staticClass:"img-card"},[e("img-card",{attrs:{"add-size":40},on:{onReadImg:t.onReadImg}})],1)],2),e("div",{directives:[{name:"show",rawName:"v-show",value:t.missionDetail.textVerify,expression:"missionDetail.textVerify"}]},[e("p",[t._v("2、文字验证")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textVerify,expression:"textVerify"}],staticClass:"text-verify-input",attrs:{placeholder:"请输入文字验证"},domProps:{value:t.textVerify},on:{input:function(i){i.target.composing||(t.textVerify=i.target.value)}}})]),e("div",{staticClass:"flex-row flex-justify-center"},[e("button",{on:{click:t.onFinishMissionButtonPressed}},[t._v("提 交")])])])])])]):t._e()],1)},n=[],a=e("5d73"),r=e.n(a),o=(e("4662"),e("28a2")),l=(e("7f7f"),e("96cf"),e("3b8d")),c=e("f122"),u=e("a651"),m=e("f905"),d=e("acc2"),h={name:"FinishMission",components:{ImgCard:m["a"]},data:function(){return{missionId:null,missionDetail:null,vanSwipeWidth:100,vanSwipeHeight:130,textVerify:"",imgList:[],maxImgLength:5}},mounted:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.missionId=this.$route.query.id,t.next=3,this.httpPost(c["u"],{id:this.missionId});case 3:i=t.sent,i.success&&(this.missionDetail=i.data);case 5:case"end":return t.stop()}},t,this)}));function i(){return t.apply(this,arguments)}return i}(),methods:{onNavBarLeftPressed:function(){this.$router.back()},onNavBarRightPressed:function(){this.$router.push({name:"MissionDetail",query:{id:this.missionId}})},getSupportDeviceName:function(){var t=Object(u["b"])(this.missionDetail.mobilePropertyId);return t.name},onFinishMissionButtonPressed:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.imgList&&0!==this.imgList.length){t.next=3;break}return this.toastFail("请添加验证图"),t.abrupt("return");case 3:if(!this.missionDetail.textVerify||this.textVerify){t.next=6;break}return this.toastFail("请添加文字验证"),t.abrupt("return");case 6:return this.showLoading(),t.next=9,Object(d["b"])(this.imgList,function(t){i.commitData(t)},function(){i.toastFail("图片上传失败，请重试")});case 9:case"end":return t.stop()}},t,this)}));function i(){return t.apply(this,arguments)}return i}(),commitData:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(i){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={missionId:this.missionId,textVerify:this.textVerify,key:i},t.next=3,this.httpPost(c["m"],e);case 3:s=t.sent,s.success&&(this.toastSuccess("任务上传完成，请等待审核"),this.$router.back());case 5:case"end":return t.stop()}},t,this)}));function i(i){return t.apply(this,arguments)}return i}(),onImgItemClick:function(t){Object(o["a"])({images:Object(d["a"])(this.imgList),startPosition:t})},onSampleImgClick:function(t){var i=[],e=!0,s=!1,n=void 0;try{for(var a,l=r()(this.missionDetail.sampleImgList);!(e=(a=l.next()).done);e=!0){var c=a.value;i.push(this.imgFullPath(c))}}catch(u){s=!0,n=u}finally{try{e||null==l.return||l.return()}finally{if(s)throw n}}Object(o["a"])({images:i,startPosition:t})},onExplainImgClick:function(t){if(this.missionDetail.explainList[t].img){var i=[this.imgFullPath(this.missionDetail.explainList[t].img)];Object(o["a"])({images:i})}},onReadImg:function(t,i){this.imgList.push(t)},onDeleteImg:function(t){this.imgList.splice(t,1)},onUrlPressed:function(t){this.isApp()?this.openUrl(t):window.open(t,"_blank")}}},p=h,v=(e("7141"),e("2877")),f=Object(v["a"])(p,s,n,!1,null,"07d96c31",null);i["default"]=f.exports}}]);