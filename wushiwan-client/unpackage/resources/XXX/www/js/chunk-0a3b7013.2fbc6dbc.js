(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a3b7013"],{"0b06":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column-view"},[i("div",{ref:"topBar"},[i("van-nav-bar",{attrs:{title:t.title,"left-text":"返回",fixed:"","left-arrow":""},on:{"click-left":t.onNavBarLeftPressed}})],1),i("div",{ref:"menuBar",staticClass:"under-nav"},[i("div",{staticClass:"orderBar"},t._l(t.orderType,function(e,s){return i("div",{key:s,on:{click:function(i){return t.onTopBarItemClick(e,s)}}},[i("span",{class:{"order-selected":t.topBarActiveIndex===s}},[t._v(t._s(e))])])}),0),i("div",{staticClass:"topBarBottomLine"})]),i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isRefreshing,callback:function(e){t.isRefreshing=e},expression:"isRefreshing"}},[i("van-list",{ref:"list",staticClass:" overflow-auto",style:t.listHeight,attrs:{offset:200,finished:t.isFinished,"finished-text":"没有更多了","error-text":"请求失败，点击重新加载",error:t.isError},on:{load:t.onListLoadMore,"update:error":function(e){t.isError=e}},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},t._l(t.tableData,function(e,s){return i("van-cell",{key:s,on:{click:function(i){return t.onListItemClick(e)}}},[i("div",{staticClass:"cell"},[i("div",[i("div",{staticClass:"top-line"},[i("span",{staticClass:"title"},[t._v(t._s(t.getMissionTypeName(e)))]),i("span",{staticClass:"description"},[t._v(t._s(e.title))])]),i("div",{staticClass:"bottom-line"},[i("span",[t._v("任务编号："+t._s(e.missionId))]),i("span",{staticClass:"price"},[t._v("单价："+t._s(e.price/100)+"元")])]),i("div",{staticClass:"bottom-line"},[i("span",[t._v("提交时间："+t._s(e.uploadTime))])]),i("div",{staticClass:"bottom-line"},[i("span",[t._v("提交者："+t._s(e.uploadUserName))])])])])])}),1)],1)],1)},a=[],n=(i("7f7f"),i("96cf"),i("3b8d")),r=i("f122"),o=i("a651"),c={name:"MyNeedReview",data:function(){return{missionId:null,title:"",orderType:["待审核","不合格","已完成"],topBarActiveIndex:0,tableData:[],isRefreshing:!1,isLoading:!1,isError:!1,isFinished:!1,pageNo:0,pageSize:10,listHeight:{height:"100%"}}},mounted:function(){this.missionId=this.$route.query.id,this.title=this.$route.query.title,this.listHeight.height=window.innerHeight-this.$refs.menuBar.offsetHeight-this.$refs.topBar.offsetHeight+"px"},methods:{onNavBarLeftPressed:function(){this.$router.back()},loadData:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=null,t.t0=this.topBarActiveIndex,t.next=0===t.t0?4:1===t.t0?6:2===t.t0?8:10;break;case 4:return e=22,t.abrupt("break",10);case 6:return e=23,t.abrupt("break",10);case 8:return e=24,t.abrupt("break",10);case 10:return t.next=12,this.httpPost(r["o"],{pageNo:this.pageNo,pageSize:this.pageSize,missionId:this.missionId,proceedPropertyId:e});case 12:i=t.sent,i.success?(1===i.data.current?this.tableData=i.data.records:this.tableData=this.tableData.concat(i.data.records),i.data.current!==i.data.pages&&0!==i.data.records.length||(this.isFinished=!0)):this.isError=!0,this.isRefreshing=!1,this.isLoading=!1;case 16:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onTopBarItemClick:function(t,e){this.topBarActiveIndex!==e&&(this.topBarActiveIndex=e,this.pageNo=0,this.isFinished=!1)},getMissionTypeName:function(t){var e=Object(o["b"])(t.typePropertyId);return e.name},getMissionProceedName:function(t){var e=Object(o["b"])(t.proceedPropertyId);return e.name},onListLoadMore:function(){this.pageNo++,this.loadData()},onListItemClick:function(t){this.$router.push({name:"MissionReview",query:{id:t.acceptId}})},onRefresh:function(){this.pageNo=1,this.loadData()}}},d=c,l=(i("8dc1"),i("2877")),u=Object(l["a"])(d,s,a,!1,null,"09a85d63",null);e["default"]=u.exports},"8dc1":function(t,e,i){"use strict";var s=i("aa40"),a=i.n(s);a.a},aa40:function(t,e,i){}}]);
//# sourceMappingURL=chunk-0a3b7013.2fbc6dbc.js.map