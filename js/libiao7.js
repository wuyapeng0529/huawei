"use strict";var _createClass=function(){function o(t,a){for(var e=0;e<a.length;e++){var o=a[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,a,e){return a&&o(t.prototype,a),e&&o(t,e),t}}();function _classCallCheck(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}var data=[{img:"../img/img13/4.png",price:"￥1999起",name:"华为畅享20pro",title:"4800万高感光夜拍",pwd:"立即购买",goodsId:"123asd"},{img:"../img/img13/5.png",price:"￥1799起",name:"华为畅享20pro",pwd:"立即购买",title:"4800万高感光夜拍",goodsId:"ajgjgj"}],Laptop_top=document.querySelector(".Laptop-top"),GoodsNum=function(){function e(t,a){_classCallCheck(this,e),this.data=t,this.Laptop_top=a}return _createClass(e,[{key:"init",value:function(){for(var t="",a=0;a<this.data.length;a++)t+='\t<div class="Laptop_top_2" index="'+this.data[a].goodsId+'">\n\t                            <img src="'+this.data[a].img+'">\n\t                                <h3>'+this.data[a].name+"</h3>\n\t                                <h4>"+this.data[a].title+"</h4>\n\t                                <h5>"+this.data[a].price+"</h5>\n\t\t\t\t\t\t\t\t\t<span>"+this.data[a].pwd+"</span>\n\t                            \n\t\t\t\t</div>";this.Laptop_top.innerHTML=t}},{key:"addEvent",value:function(){var o=this;this.Laptop_top.onclick=function(t){var a=t||window.event,e=a.target||a.srcElement;"add"===e.className&&(o.goodsId=e.parentNode.getAttribute("index"),o.setData())}}},{key:"setData",value:function(){var t=localStorage.getItem("goodsMsg");if(null===t)t=[{goodsId:this.goodsId,num:1,msg:this.getData(this.goodsId)}];else{t=JSON.parse(t);for(var a=0,e=0;e<t.length;e++)if(t[e].goodsId===this.goodsId){t[e].num++,a=1;break}0==a&&t.push({goodsId:this.goodsId,num:1,msg:this.getData(this.goodsId)})}localStorage.setItem("goodsMsg",JSON.stringify(t))}},{key:"getData",value:function(t){for(var a=0;a<this.data.length;a++)if(this.data[a].goodsId===t)return this.data[a];return{}}}]),e}(),gl=new GoodsNum(data,Laptop_top);gl.init(),gl.addEvent();