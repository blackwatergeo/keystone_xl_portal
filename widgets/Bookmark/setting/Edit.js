//>>built
require({cache:{"url:widgets/Bookmark/setting/Edit.html":'\x3cdiv style\x3d"width: 100%"\x3e\r\n  \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd title\x3d"${nls.title}" class\x3d"first"\x3e*${nls.title}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-point\x3d"name" \r\n            required\x3d"true" placeHolder\x3d${nls.title} data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd title\x3d"${nls.thumbnail}" class\x3d"first"\x3e${nls.thumbnail}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"imageChooserBase"\x3e\x3c/div\x3e\r\n            \x3cimg class\x3d"thumbnail-img" src\x3d"" data-dojo-attach-point\x3d"showImageChooser"\x3e\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;(${nls.thumbnailHint})\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e                                                                  \r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e \r\n    \x3cdiv class\x3d"extent-chooser" style\x3d"height: 400px" data-dojo-attach-point\x3d"extentChooserNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/dom-attr dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting esri/geometry/Extent jimu/dijit/ImageChooser jimu/dijit/ExtentChooser jimu/utils dojo/text!./Edit.html".split(" "),function(g,c,b,d,h,k,l,m,n,e,p,q){return g([l,k],{baseClass:"jimu-Bookmark-Edit",ImageChooser:null,templateString:q,extent:{},portalUrl:null,itemId:null,postCreate:function(){this.inherited(arguments);this.imageChooser=new n({displayImg:this.showImageChooser,
goldenWidth:100,goldenHeight:60});this.own(d(this.name,"Change",c.hitch(this,"_onNameChange")));b.addClass(this.imageChooser.domNode,"img-chooser");b.place(this.imageChooser.domNode,this.imageChooserBase,"replace");h.set(this.showImageChooser,"src",this.folderUrl+"images/thumbnail_default.png")},setConfig:function(a){a.name&&this.name.set("value",a.name);if(a.thumbnail){var f=p.processUrlInWidgetConfig(a.thumbnail,this.folderUrl);b.setAttr(this.showImageChooser,"src",f);this.imageChooser.imageData=
f}this.extentChooser=a.extent?new e({portalUrl:this.portalUrl,itemId:this.itemId,initExtent:new m(a.extent)},this.extentChooserNode):new e({portalUrl:this.portalUrl,itemId:this.itemId},this.extentChooserNode);this.own(d(this.extentChooser,"extentChange",c.hitch(this,this._onExtentChange)))},getConfig:function(){return{name:this.name.get("value"),extent:this.extentChooser.getExtent(),thumbnail:this.imageChooser.imageData}},_onNameChange:function(){this._checkRequiredField()},_onExtentChange:function(a){this.currentExtent=
a},_checkRequiredField:function(){this.name.get("value")?this.popup&&this.popup.enableButton(0):this.popup&&this.popup.disableButton(0)}})});