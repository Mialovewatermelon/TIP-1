webpackJsonp([1],{"+708":function(e,t,a){"use strict";var i={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var e=this;a("JAHf"),this.$nextTick(function(){e.initParticleJS(e.color,e.particleOpacity,e.particlesNumber,e.shapeType,e.particleSize,e.linesColor,e.linesWidth,e.lineLinked,e.lineOpacity,e.linesDistance,e.moveSpeed,e.hoverEffect,e.hoverMode,e.clickEffect,e.clickMode)})},methods:{initParticleJS:function(e,t,a,i,n,o,r,l,s,c,u,p,d,m,f){particlesJS("particles-js",{particles:{number:{value:a,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:i,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:t,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:n,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:l,distance:c,color:o,opacity:s,width:r},move:{enable:!0,speed:u,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:p,mode:d},onclick:{enable:m,mode:f},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},n={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"particles-js",color:e.color,particleOpacity:e.particleOpacity,linesColor:e.linesColor,particlesNumber:e.particlesNumber,shapeType:e.shapeType,particleSize:e.particleSize,linesWidth:e.linesWidth,lineLinked:e.lineLinked,lineOpacity:e.lineOpacity,linesDistance:e.linesDistance,moveSpeed:e.moveSpeed,hoverEffect:e.hoverEffect,hoverMode:e.hoverMode,clickEffect:e.clickEffect,clickMode:e.clickMode}})},staticRenderFns:[]},o=a("VU/8")(i,n,!1,null,null,null);t.a=o.exports},0:function(e,t){},"5KlX":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},n,!1,function(e){a("ZJ/N")},null,null).exports,r=a("/ocq"),l={name:"Header",data:function(){return{logo:a("rNsI")}}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header-wrapper"},[t("div",{staticClass:"header"},[t("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:this.logo}})])])},staticRenderFns:[]};var c=a("VU/8")(l,s,!1,function(e){a("5KlX")},"data-v-37753487",null).exports,u={data:function(){return{input:"",productInfo:[{barcode:"",name:"",price:"",quantity:"",salesQuantity:"",supplier:""}],fileName:"",barcode:""}},name:"FirstPage",methods:{submitBarcode:function(){var e=this;console.log(">>>"+this.input),this.axios.get("http://127.0.0.1:8000/api/overview_item").then(function(t){var a=t.data;console.log(a),e.productInfo=a.productInfo})},handleUpload:function(e){console.log(e.name),this.fileName=e.name,this.input=this.fileName}},components:{Header:c}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header"),e._v(" "),a("div",{staticClass:"MainBox"},[e._m(0),e._v(" "),a("div",{staticClass:"UpdateBox"},[a("el-row",{attrs:{display:"margin-top:10px"}},[a("el-button",{attrs:{type:"danger",plain:""},on:{click:e.submitBarcode}},[e._v(" Update")])],1)],1),e._v(" "),a("div",{staticClass:"TableBox"},[a("el-row",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.productInfo,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"Product Name","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"Product Unit Price","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"quantity",label:"Existing Quantity","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"salesQuantity",label:"Sales Quantity","min-width":"100"}})],1)],1)],1)]),e._v(" "),a("div",{staticClass:"square"})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"Title"},[t("h3",[this._v(" Overview of Inventory and Sales ")])])}]};var d=a("VU/8")(u,p,!1,function(e){a("g03W")},"data-v-0345a386",null).exports,m={data:function(){return{form:{barcode:"",name:"",price:"",sup:""}}},name:"NewProduct",created:function(){console.log("hello!!!!!!!!!"),this.getParams()},methods:{getParams:function(){console.log(">>!!");var e=this.$route.query.barcode;console.log(e),this.form.barcode=e,console.log(">>!!")},onSubmit:function(){console.log("submit"),console.log(this.form)},goBack:function(){this.$router.push("/FirstPage")}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header"),e._v(" "),a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"Barcode Number"}},[a("el-input",{model:{value:e.form.barcode,callback:function(t){e.$set(e.form,"barcode",t)},expression:"form.barcode"}},[e._v(e._s(e.form.barcode))])],1),e._v(" "),a("el-form-item",{attrs:{label:"Product Name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Unit Price"}},[a("el-input",{model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Supplier Number"}},[a("el-switch",{model:{value:e.form.sup,callback:function(t){e.$set(e.form,"sup",t)},expression:"form.sup"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Create")]),e._v(" "),a("el-button",{on:{click:e.goBack}},[e._v("Cancel")])],1)],1)],1)},staticRenderFns:[]},v=a("VU/8")(m,f,!1,null,null,null).exports,h={data:function(){return{fileName:"",barcode:"",name:"",price:"",supplier:"",quantity:"",form:{barcode:"",name:"",price:"",supplier:"",quantity:""}}},components:{Header:c},methods:{handleUpload:function(e){console.log(e.name),this.fileName=e.name,this.barcode=this.fileName.split(".")[0]},clear:function(){this.$refs.pic.clearFiles(),this.barcode="",this.supplier="",this.price="",this.name="",this.quantity=""},searchBarcode:function(){var e=this;this.axios.get("http://127.0.0.1:8000/api/barcode_get_item?barcode="+this.barcode).then(function(t){var a=t.data;console.log(a),console.log(a.productInfo),e.form=a.productInfo,e.name=a.productInfo.name,e.price=a.productInfo.price,1===a.error_num?e.$message.error("We cannot find the information, please manully enter"):0===a.newItem?(e.supplier=a.productInfo.supplier,e.$message({message:"We found the product in the your Database",type:"success"})):e.$message({message:"This is a new product, Information get from barcode system",type:"warning"})})},onSubmit:function(){var e=this;this.axios.post("http://127.0.0.1:8000/api/update_info",{barcode:this.barcode,name:this.name,price:this.price,quantity:this.quantity,supplier:this.supplier}).then(function(t){console.log(t),console.log(t.data),e.$message({message:"Updated Successfully!",type:"success"}),e.clear()})}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header"),e._v(" "),a("div",{staticClass:"MainBox"},[a("div",{staticClass:"PictureBox"},[a("el-row",[a("el-upload",{ref:"pic",attrs:{action:"#","list-type":"picture-card","auto-upload":!1},scopedSlots:e._u([{key:"file",fn:function(t){var i=t.file;return a("div",{},[a("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:i.url,alt:""}}),e._v(" "),a("span",{staticClass:"el-upload-list__item-actions"},[e.disabled?e._e():a("span",{staticClass:"el-upload-list__item-delete",on:{click:function(t){return e.handleUpload(i)}}},[a("i",{staticClass:"el-icon-upload2"}),e._v(" "),a("p",{staticClass:"search"},[e._v("Search Barcode")])])])])}}])},[a("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)],1),e._v(" "),a("div",{staticClass:"ButtonBox"},[a("el-row",[a("el-button",{attrs:{type:"success",plain:""},on:{click:e.searchBarcode}},[e._v("Search Your Barcode")])],1)],1)]),e._v(" "),a("div",{staticClass:"FormBox"},[a("el-row",[a("el-form",{ref:"form",attrs:{"label-width":"120px",model:e.form,"label-position":e.left}},[a("el-form-item",{attrs:{label:"Barcode Number"}},[a("el-input",{model:{value:e.barcode,callback:function(t){e.barcode=t},expression:"barcode"}},[e._v(e._s(e.form.barcode))])],1),e._v(" "),a("el-form-item",{attrs:{label:"Product Name"}},[a("el-input",{model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Unit Price"}},[a("el-input",{model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Supplier Details"}},[a("el-input",{model:{value:e.supplier,callback:function(t){e.supplier=t},expression:"supplier"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Quantity"}},[a("el-input-number",{model:{value:e.quantity,callback:function(t){e.quantity=t},expression:"quantity"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Create")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var y=a("VU/8")(h,b,!1,function(e){a("Y90j")},"data-v-040d9d39",null).exports,_={name:"home",data:function(){return{logo:a("rNsI")}},methods:{goScan:function(){this.$router.push("/scan")},goOverview:function(){this.$router.push("/FirstPage")}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"homePage"},[a("vue-particles",{staticStyle:{width:"100%",height:"100%",position:"absolute"},attrs:{color:"#dedede",particleOpacity:.7,particlesNumber:80,shapeType:"circle",particleSize:4,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}}),e._v(" "),a("div",{staticClass:"FirstPage"},[a("el-row",{staticStyle:{type:"flex"}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:e.logo,alt:""}})])]),e._v(" "),a("el-row",{staticStyle:{type:"flex","margin-top":"20px"}},[a("div",{staticStyle:{"text-align":"center"}},[a("el-button",{on:{click:e.goScan}},[e._v("Barcode Scanning Page")])],1)]),e._v(" "),a("el-row",{staticStyle:{type:"flex","margin-top":"20px"}},[a("div",{staticStyle:{"text-align":"center"}},[a("el-button",{on:{click:e.goOverview}},[e._v("Overview Page")])],1)])],1)],1)},staticRenderFns:[]};var x=a("VU/8")(_,g,!1,function(e){a("e6fD")},"data-v-0d95020e",null).exports;i.default.use(r.a);var S=new r.a({routes:[{path:"/FirstPage",name:"FirstPage",component:d},{path:"/NewProduct",name:"NewProduct",component:v},{path:"/Header",name:"Header",component:c},{path:"/scan",name:"scan",component:y},{path:"/",name:"home",component:x}]}),k=a("zL8q"),w=a.n(k),N=(a("tvR6"),a("mtWM")),C=a.n(N),P=a("mM94"),B=a("8+8L");i.default.use(P.a),i.default.use(B.a),i.default.config.productionTip=!1,i.default.use(w.a),i.default.config.productionTip=!1,i.default.prototype.axios=C.a,new i.default({el:"#app",router:S,components:{App:o},template:"<App/>"})},Y90j:function(e,t){},"ZJ/N":function(e,t){},e6fD:function(e,t){},g03W:function(e,t){},rNsI:function(e,t,a){e.exports=a.p+"static/img/Logo_NBG.814e8e3.png"},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.0e9e209177c173e42912.js.map