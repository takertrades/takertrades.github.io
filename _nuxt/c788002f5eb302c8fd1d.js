(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{150:function(t,e,o){var content=o(178);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("6759f5ab",content,!0,{sourceMap:!1})},177:function(t,e,o){"use strict";var r=o(150);o.n(r).a},178:function(t,e,o){(e=o(39)(!1)).push([t.i,"body{color:#efefef;background:#13161c}.container{width:800px;max-width:100%}.wrap-flow{font-size:12px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;padding:15px 12px 0;-webkit-box-pack:justify;justify-content:space-between}.center-data{margin:10px}.total-flow{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;font-size:12px;padding:10px;border-top:1px solid rgba(130,138,152,.15);-webkit-box-pack:justify;justify-content:space-between}.wrap-flow .out-flow .data{font-size:14px;font-weight:bolder;padding:6px 0 15px;color:#e50170}.wrap-flow .in-flow .data{font-size:14px;font-weight:bolder;padding:6px 0 15px;color:#00c088}.total-flow .flow-total-in{color:#00c088;font-weight:700!important;font-size:14px}.total-flow .flow-total-out{color:#e50170;font-weight:700!important;font-size:14px}.wrap-flow i{display:inline-block;height:12px;width:12px;margin-right:4px}.wrap-flow .green1{background:#22ddae}.wrap-flow .green2{background:#00c087}.wrap-flow .green3{background:#00a373}.wrap-flow .red1{background:#f467ae}.wrap-flow .red2{background:#ea0070}.wrap-flow .red3{background:#d10064}.total-flow label{margin-right:10px}.led-box{margin:-2px 0 0;float:right;height:auto;-webkit-transform:scale(.35);transform:scale(.35)}.led-box p{font-size:12px;text-align:center;margin:1em}.led-red{margin:0 auto;width:24px;height:24px;background-color:red;border-radius:50%;box-shadow:0 -1px 7px 1px rgba(0,0,0,.2),inset 0 -1px 9px #441313,0 2px 12px rgba(255,0,0,.5);-webkit-animation:blinkRed .5s infinite;animation:blinkRed .5s infinite}@-webkit-keyframes blinkRed{0%{background-color:red}50%{background-color:#a00;box-shadow:0 -1px 7px 1px rgba(0,0,0,.2),inset 0 -1px 9px #441313,0 2px 0 rgba(255,0,0,.5)}to{background-color:red}}@keyframes blinkRed{0%{background-color:red}50%{background-color:#a00;box-shadow:0 -1px 7px 1px rgba(0,0,0,.2),inset 0 -1px 9px #441313,0 2px 0 rgba(255,0,0,.5)}to{background-color:red}}.led-yellow{margin:0 auto;width:24px;height:24px;background-color:#ff0;border-radius:50%;box-shadow:0 -1px 7px 1px rgba(0,0,0,.2),inset 0 -1px 9px #808002,0 2px 12px #ff0;-webkit-animation:blinkYellow 1s infinite;animation:blinkYellow 1s infinite}@-webkit-keyframes blinkYellow{0%{background-color:#ff0}50%{background-color:#aa0;box-shadow:0 -1px 7px 1px rgba(0,0,0,.2),inset 0 -1px 9px #808002,0 2px 0 #ff0}to{background-color:#ff0}}@keyframes blinkYellow{0%{background-color:#ff0}50%{background-color:#aa0;box-shadow:0 -1px 7px 1px rgba(0,0,0,.2),inset 0 -1px 9px #808002,0 2px 0 #ff0}to{background-color:#ff0}}.led-green{background-color:#abff00;box-shadow:0 -1px 7px 1px rgba(0,0,0,.2),inset 0 -1px 9px #304701,0 2px 12px #89ff00}.led-blue,.led-green{margin:0 auto;width:24px;height:24px;border-radius:50%}.led-blue{background-color:#24e0ff;box-shadow:0 -1px 7px 1px rgba(0,0,0,.2),inset 0 -1px 9px #006,0 2px 14px #3f8cff}",""]),t.exports=e},179:function(t,e,o){"use strict";o.r(e);o(38);var r,n=o(5),l=o(159),c={asyncData:(r=Object(n.a)(regeneratorRuntime.mark((function t(){var e,data,o,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.get("https://raw.githubusercontent.com/takertrades/takertrades.github.io/master/output.json");case 2:return e=t.sent,data=e.data,o=data.centerData,r=data.bars,n=data.lines,t.abrupt("return",{centerData:o,barData:r,lineData:n});case 8:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)})},d=(o(177),o(23)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container mt-4 ml-auto mr-auto"},[t._m(0),t._v(" "),o("div",{staticClass:"flex mb-4 mt-2"},[o("div",{staticClass:"w-full"},[o("div",{domProps:{innerHTML:t._s(t.centerData)}}),t._v(" "),o("div",{domProps:{innerHTML:t._s(t.barData)}}),t._v(" "),o("div",{domProps:{innerHTML:t._s(t.lineData)}})])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex"},[e("div",{staticClass:"w-full mb-2"},[e("div",[e("h2",{staticClass:"font-bold text-xl"},[this._v("BTC/USDT Live Taker Trader Info")]),this._v(" "),e("span",{staticClass:"text-sm"},[this._v("Tracks market buy/ sell activity for the past 15 minutes.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex mb-2"},[e("div",{staticClass:"w-full"},[e("div",{staticClass:"float-left pl-4"},[e("span",{staticClass:"text-gray-700 text-xs"},[this._v("Powered by "),e("a",{attrs:{href:"https://binance.com/en/register?ref=BZTRY0A9"}},[this._v("Binance.")])])]),this._v(" "),e("div",{staticClass:"led-box pr-4"},[e("div",{staticClass:"led-red"})]),this._v(" "),e("div",{staticClass:"float-right"},[e("p",{staticClass:"text-gray-700 text-xs italic"},[this._v("\n          Checks for updates every 15 seconds.\n        ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex mb-4 border-solid border-t border-gray-800"},[e("div",{staticClass:"w-full text-center mt-2"},[e("span",{staticClass:"text-gray-500 text-base"},[e("a",{attrs:{href:"https://ftx.com/#a=1689414"}},[this._v("FTX - Trade altcoin contracts using leverage with high liquidity.")])])])])}],!1,null,null,null);e.default=component.exports}}]);