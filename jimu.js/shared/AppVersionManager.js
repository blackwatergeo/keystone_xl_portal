//>>built
define(["./BaseVersionManager"],function(e){function d(){this.versions=[{version:"1.0",description:"The version embedded in portal 10.3 final.",upgrader:function(a){return a},compatible:!0},{version:"1.1",description:"The version embedded in online3.6, and used in developer edition 1.0.",upgrader:function(a){a.widgetOnScreen&&(a.widgetOnScreen.panel&&"themes/FoldableTheme/panels/TitlePanel/Panel"===a.widgetOnScreen.panel.uri)&&(a.widgetOnScreen.panel.uri="jimu/PreloadWidgetIconPanel");return a},compatible:!0},
{version:"1.2",description:"The version embedded in online3.7.",upgrader:function(a){var b=0;if(a.widgetOnScreen&&a.widgetOnScreen.widgets){for(var c=!1,b=0;b<a.widgetOnScreen.widgets.length;b++)"widgets/Splash/Widget"===a.widgetOnScreen.widgets[b].uri&&(c=!0);c||a.widgetOnScreen.widgets.push({uri:"widgets/Splash/Widget",visible:!1,positionRelativeTo:"browser",version:"1.2"});c=!1;for(b=0;b<a.widgetOnScreen.widgets.length;b++)"widgets/TimeSlider/Widget"===a.widgetOnScreen.widgets[b].uri&&(c=!0);c||
a.widgetOnScreen.widgets.push({uri:"widgets/TimeSlider/Widget",visible:!1,position:{bottom:55,left:7},version:"1.2"});c=!1;for(b=0;b<a.widgetOnScreen.widgets.length;b++)"widgets/Swipe/Widget"===a.widgetOnScreen.widgets[b].uri&&(c=!0);c||a.widgetOnScreen.widgets.push({uri:"widgets/Swipe/Widget",visible:!1,position:{top:145,left:7},version:"1.2"})}return a},compatible:!0}];this.isCompatible=function(a,b){for(var c=this.getVersionIndex(a),d=this.getVersionIndex(b),c=c+1;c<=d;c++)if(!1===this.versions[c].compatible)return!1;
return!0}}d.prototype=new e;return d.prototype.constructor=d});