(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5db48b25"],{"2d1b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column-view"},[n("div",{ref:"topBar"},[n("van-nav-bar",{attrs:{title:"申诉","left-text":"返回",fixed:"","left-arrow":""},on:{"click-left":t.onNavBarLeftPressed}})],1),n("div",{staticClass:"under-nav fill"},[n("van-field",{staticClass:"text",attrs:{type:"textarea",placeholder:"请输入申诉内容，最多500字",size:"large",rows:"10",border:"",autosize:""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),n("van-button",{staticClass:"button",attrs:{type:"primary",round:"",size:"large"},on:{click:t.commitComplaint}},[t._v("提交")]),t._m(0)],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottomInfo"},[n("span",[t._v("申诉原则：")]),n("span",[t._v("1、沟通内容表述不清，使用不文明语言的将不予处理。")]),n("span",[t._v("2、平台将秉承公正立场予以裁定，但无法确保每次裁定均为客观正确，无论审核是否通过，您都需要接受终审裁定。")]),n("span",[t._v("3、频繁申诉者，被驳回的概率会增加。")]),n("span",[t._v("4、如果终审被驳回，此单将被释放，您还可以重新抢单。")])])}],i=(n("96cf"),n("3b8d")),r=(n("e17f"),n("2241")),c=n("f122"),o={name:"Complaint",data:function(){return{text:"",acceptId:null}},mounted:function(){this.acceptId=this.$route.query.id},methods:{onNavBarLeftPressed:function(){this.$router.back()},commitComplaint:function(){var t=this;this.text.length>500?this.toastMsg("申诉内容最多500个字"):0!==this.text.length?r["a"].confirm({message:"确认申诉吗？"}).then(function(){t.complaintRequest()}):this.toastMsg("请输入申诉内容")},complaintRequest:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.httpPostWithLoading(c["b"],{acceptId:this.acceptId,text:this.text});case 2:e=t.sent,e.success&&r["a"].alert({message:"成功提交，请耐心等待申诉结果"}).then(function(){n.onNavBarLeftPressed()});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},u=o,l=(n("53d0"),n("2877")),f=Object(l["a"])(u,a,s,!1,null,"3e36d799",null);e["default"]=f.exports},"53d0":function(t,e,n){"use strict";var a=n("e80f"),s=n.n(a);s.a},e80f:function(t,e,n){}}]);
//# sourceMappingURL=chunk-5db48b25.2c6a3477.js.map