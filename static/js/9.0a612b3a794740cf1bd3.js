webpackJsonp([9,18],{81:function(e,l,i){var t,s,a={};i(82),t=i(83),s=i(84),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports.default);var c="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(c.template=s),c.computed||(c.computed={}),Object.keys(a).forEach(function(e){var l=a[e];c.computed[e]=function(){return l}})},82:function(e,l){},83:function(e,l,i){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(l,"__esModule",{value:!0});var s=i(14),a=t(s);l.default={data:function(){return{title:"个人资料",isIndex:!0,titleColor:"red"}},components:{Appheader:a.default},route:{activate:function(e){document.title=this.title,this.$root.$set("header",this.title),e.next()}}}},84:function(e,l){e.exports=' <div class=login> <appheader title=个人资料> <a href=javascript:history.back(); slot=left><i class=icon>&#xe60b;</i></a> </appheader> <div class=weui_cells> <div class=weui_cell> <p class=weui_cell_hd> <label class=weui_label style="width: 4.5em">message</label> </p> <p class="weui_cell_bd weui_cell_primary"> <input class=weui_input placeholder="I\'m placeholder" type=text> </p> </div> <div class=weui_cell> <p class=weui_cell_hd> <label class=weui_label style="width: 4.5em">ID</label> </p> <p class="weui_cell_bd weui_cell_primary"> <input class=weui_input placeholder="I\'m placeholder" type=text> </p> </div> <div class=weui_cell> <p class=weui_cell_hd> <label class=weui_label style="width: 4.5em">账号</label> </p> <p class="weui_cell_bd weui_cell_primary"> <input class=weui_input placeholder="I\'m placeholder" type=text> </p> </div> <div class=weui_cell> <p class=weui_cell_hd> <label class=weui_label style="width: 4.5em">昵称</label> </p> <p class="weui_cell_bd weui_cell_primary"> <input class=weui_input placeholder="I\'m placeholder" type=text> </p> </div> <div class=weui_cell> <p class=weui_cell_hd> <label class=weui_label style="width: 4.5em">手机号码</label> </p> <p class="weui_cell_bd weui_cell_primary"> <input class=weui_input placeholder="I\'m placeholder" type=text> </p> </div> <a class=weui_cell v-link="{ path: \'/center/addressList\' }"> <p class=weui_cell_hd> <label class=weui_label style="width: 4.5em">地址管理</label> </p> <p class="weui_cell_bd weui_cell_primary"> </p> <div class="weui_cell_ft with_arrow"></div> </a> </div> </div> '}});
//# sourceMappingURL=9.0a612b3a794740cf1bd3.js.map