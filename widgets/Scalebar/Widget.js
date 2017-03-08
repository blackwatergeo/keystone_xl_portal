//>>built
require({cache:{"esri/dijit/Scalebar":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/query ../kernel ../lang ../domUtils ../units ../SpatialReference ../WKIDUnitConversion ../geometry/Point ../geometry/ScreenPoint ../geometry/Polyline ../geometry/geodesicUtils ../geometry/webMercatorUtils ../geometry/screenUtils ../geometry/normalizeUtils dojo/i18n!../nls/jsapi".split(" "),function(q,
h,l,b,m,n,u,r,v,g,H,w,x,y,z,s,A,B,C,D,t,E,F,G){return q(null,{declaredClass:"esri.dijit.Scalebar",map:null,mapUnit:null,scalebarUnit:null,unitsDictionary:[],domNode:null,screenPt1:null,screenPt2:null,localStrings:G.widgets.scalebar,constructor:function(a,d){this.metricScalebar=n.create("div",{innerHTML:"\x3cdiv class\x3d'esriScaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLine esriScalebarMetricLine'\x3e\x3c/div\x3e"});
this.englishScalebar=n.create("div",{innerHTML:"\x3cdiv class\x3d'esriScalebarLine esriScalebarEnglishLine'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e"});this.domNode=n.create("div");a=a||{};if(a.map){if(a.scalebarUnit){if("english"!==a.scalebarUnit&&"metric"!==a.scalebarUnit&&"dual"!==a.scalebarUnit){console.error("scalebar unit only accepts english or metric or dual");return}this.scalebarUnit=
a.scalebarUnit}else this.scalebarUnit="english";if(a.scalebarStyle){if("ruler"!==a.scalebarStyle&&"line"!==a.scalebarStyle){console.error("scalebar style must be ruler or line");return}this.scalebarStyle=a.scalebarStyle}else this.scalebarStyle="ruler";this.background=a.background;switch(this.scalebarUnit){case "english":"ruler"===this.scalebarStyle&&(this.englishScalebar.innerHTML="\x3cdiv class\x3d'esriScalebarRuler'\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_secondpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_secondpiece'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'scaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel' style\x3d'left: -3%'\x3e0\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarFirstNumber'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e");
this.domNode.appendChild(this.englishScalebar);break;case "metric":"ruler"===this.scalebarStyle&&(this.metricScalebar.innerHTML="\x3cdiv class\x3d'esriScalebarRuler'\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_secondpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_secondpiece'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'scaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel' style\x3d'left: -3%'\x3e0\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarFirstNumber'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e");
this.domNode.appendChild(this.metricScalebar);break;case "dual":this.domNode.appendChild(this.metricScalebar),this.domNode.appendChild(this.englishScalebar)}this.map=a.map;d?d.appendChild(this.domNode):(this.map.container.appendChild(this.domNode),a.attachTo?m.add(this.domNode,"scalebar_"+a.attachTo):m.add(this.domNode,"scalebar_bottom-left"));m.add(this.domNode,"esriScalebar");if(this.map.loaded)this._getDistance(this.map.extent),this._checkBingMaps();else var c=b.connect(this.map,"onLoad",this,
function(){b.disconnect(c);c=null;this._getDistance(this.map.extent);this._checkBingMaps()});this._mapOnPan=b.connect(this.map,"onPan",this,this._getDistance);this._mapOnExtentChange=b.connect(this.map,"onExtentChange",this,this._getDistance);l.forEach(this.map.layerIds,function(a,c){"esri.virtualearth.VETiledLayer"===this.map.getLayer(a).declaredClass&&b.connect(this.map.getLayer(a),"onVisibilityChange",h.hitch(this,function(a){this._checkBingMaps()}))},this);this._mapOnLayerAdd=b.connect(this.map,
"onLayerAdd",h.hitch(this,function(a){"esri.virtualearth.VETiledLayer"===a.declaredClass&&b.connect(a,"onVisibilityChange",h.hitch(this,function(a){this._checkBingMaps()}));this._checkBingMaps()}));this._mapOnLayerRemove=b.connect(this.map,"onLayerRemove",h.hitch(this,this._checkBingMaps))}else console.error("scalebar: unable to find the 'map' property in parameters")},hide:function(){this._hidden=!0;x.hide(this.domNode)},show:function(){this._hidden=!1;x.show(this.domNode)},destroy:function(){b.disconnect(this._mapOnPan);
b.disconnect(this._mapOnExtentChange);b.disconnect(this._mapOnLayerAdd);b.disconnect(this._mapOnLayerRemove);this.hide();this.map=null;n.destroy(this.domNode)},_checkBingMaps:function(){m.contains(this.domNode,"scalebar_bottom-left")&&(r.set(this.domNode,"left","25px"),l.forEach(this.map.layerIds,function(a,d){if("esri.virtualearth.VETiledLayer"===this.map.getLayer(a).declaredClass&&this.map.getLayer(a).visible){var c="95px";this.map._mapParams.nav&&(c="115px");r.set(this.domNode,"left",c)}},this))},
_getDistance:function(a){var d=u.position(this.domNode,!0).y-this.map.position.y,d=d>this.map.height?this.map.height:d,d=0>d?0:d,c=new B(0,d),d=new B(this.map.width,d),p,f;this.mapUnit="esriDecimalDegrees";var e=E.toMapPoint(a,this.map.width,this.map.height,c),k=E.toMapPoint(a,this.map.width,this.map.height,d),c=new A(a.xmin,(a.ymin+a.ymax)/2,this.map.spatialReference),d=new A(a.xmax,(a.ymin+a.ymax)/2,this.map.spatialReference);if(3857===this.map.spatialReference.wkid||102100===this.map.spatialReference.wkid||
102113===this.map.spatialReference.wkid||this.map.spatialReference.wkt&&-1!=this.map.spatialReference.wkt.indexOf("WGS_1984_Web_Mercator"))e=t.webMercatorToGeographic(e,!0),k=t.webMercatorToGeographic(k,!0),c=t.webMercatorToGeographic(c,!0),d=t.webMercatorToGeographic(d,!0);else if(w.isDefined(s[this.map.spatialReference.wkid])||this.map.spatialReference.wkt&&0===this.map.spatialReference.wkt.indexOf("PROJCS")){this.mapUnit="linearUnit";a=Math.abs(a.xmax-a.xmin);if(w.isDefined(s[this.map.spatialReference.wkid]))f=
s.values[s[this.map.spatialReference.wkid]];else{f=this.map.spatialReference.wkt;p=f.lastIndexOf(",")+1;var b=f.lastIndexOf("]]");f=parseFloat(f.substring(p,b))}a*=f;f=a/1609;p=a/1E3}"esriDecimalDegrees"===this.mapUnit&&(a=new C(new z({wkid:4326})),a.addPath([e,k]),e=F._straightLineDensify(a,10),a=D.geodesicLengths([e],y.KILOMETERS)[0],e=new C(new z({wkid:4326})),e.addPath([c,d]),c=F._straightLineDensify(e,10),D.geodesicLengths([c],y.KILOMETERS),f=a/1.609,p=a);"english"===this.scalebarUnit?this._getScaleBarLength(f,
"mi"):"metric"===this.scalebarUnit?this._getScaleBarLength(p,"km"):"dual"===this.scalebarUnit&&(this._getScaleBarLength(f,"mi"),this._getScaleBarLength(p,"km"))},_getScaleBarLength:function(a,d){var c=50*a/this.map.width,b=0,f=d;0.1>c&&("mi"===d?(c*=5280,f="ft"):"km"===d&&(c*=1E3,f="m"));for(;1<=c;)c/=10,b++;var e,k;0.5<c?(e=1,k=0.5):0.3<c?(e=0.5,k=0.3):0.2<c?(e=0.3,k=0.2):0.15<c?(e=0.2,k=0.15):0.1<=c&&(e=0.15,k=0.1);e=e/c>=c/k?k:e;c=50*(e/c);b=Math.pow(10,b)*e;this._drawScaleBar(c,b,f)},_drawScaleBar:function(a,
d,c){var b=2*Math.round(a),f,e;"mi"===c||"ft"===c?(this.englishScalebar.style.width=b+"px",a=g(".esriScalebarFirstNumber",this.englishScalebar),f=g(".esriScalebarSecondNumber",this.englishScalebar),e=g(".esriScalebarMetricLineBackground",this.englishScalebar)):(this.metricScalebar.style.width=b+"px",a=g(".esriScalebarFirstNumber",this.metricScalebar),f=g(".esriScalebarSecondNumber",this.metricScalebar),e=g(".esriScalebarMetricLineBackground",this.metricScalebar));l.forEach(e,function(a,c){a.style.width=
b-2+"px"},this);l.forEach(a,function(a,c){a.innerHTML=d},this);l.forEach(f,function(a,b){a.innerHTML="esriUnknown"!==this.mapUnit?2*d+this.localStrings[c]:2*d+"Unknown Unit"},this)}})})},"widgets/Scalebar/_build-generate_module":function(){define(["dojo/text!./css/style.css","dojo/i18n!./nls/strings","dojo/text!./config.json"],function(){})},"url:widgets/Scalebar/css/style.css":".esriScalebarSecondNumber{text-shadow: 0.1em 0.1em 0 white, -1px -1px white, 1px -1px white, -1px 1px white;}","url:widgets/Scalebar/config.json":'{\r\n  "scalebar": {\r\n    "scalebarStyle": "",\r\n    "scalebarUnit": ""\r\n  }\r\n}',
"*now":function(q){q(['dojo/i18n!*preload*widgets/Scalebar/nls/Widget*["ar","cs","da","de","en","el","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","vi","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/lang dojo/Deferred jimu/BaseWidget jimu/utils jimu/portalUtils jimu/dijit/Message esri/dijit/Scalebar dojo/dom-style dojo/query dojo/NodeList-dom".split(" "),function(q,h,l,b,m,n,u,r,v,g){return q([b],{name:"Scalebar",scalebar:null,startup:function(){this.inherited(arguments);var b=this.config.scalebar;b.map=this.map;this.position&&(void 0!==this.position.top&&void 0!==this.position.left?b.attachTo="top-left":void 0!==this.position.top&&void 0!==this.position.right?
b.attachTo="top-right":void 0!==this.position.bottom&&void 0!==this.position.left?b.attachTo="bottom-left":void 0!==this.position.bottom&&void 0!==this.position.right&&(b.attachTo="bottom-right"));this._processConfig(b).then(h.hitch(this,function(b){b.scalebarStyle||(b.scalebarStyle="line");this.scalebar=new r(b);this.scalebar.show();this.domNode.appendChild(this.scalebar.domNode);this._hackForhighlight();var g={left:"auto",right:"auto",top:"auto",bottom:"auto",width:"auto"};h.mixin(g,this.position);
v.set(this.scalebar.domNode,m.getPositionStyle(g));setTimeout(h.hitch(this,function(){v.set(this.scalebar.domNode,m.getPositionStyle(g))}),1E3)}),h.hitch(this,function(b){new u({message:b.message||b})}))},_processConfig:function(b){var g=new l;b.scalebarUnit?g.resolve(b):n.getUnits(this.appConfig.portalUrl).then(h.hitch(this,function(h){b.scalebarUnit="english"===h?"english":"metric";g.resolve(b)}));return g.promise},_hackForhighlight:function(){g(".esriScalebar",this.domNode).removeClass("esriScalebar")},
onClose:function(){this.scalebar.destroy()}})});