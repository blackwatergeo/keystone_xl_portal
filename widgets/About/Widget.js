//>>built
require({
    cache: {
        "widgets/About/_build-generate_module": function () {
            define(["dojo/text!./Widget.html", "dojo/text!./css/style.css", "dojo/i18n!./nls/strings", "dojo/text!./config.json"], function () {})
        },
        "url:widgets/About/Widget.html": '\x3cdiv\x3e\r\n  \x3cdiv class\x3d"about-envelope" data-dojo-attach-point\x3d"envelopeNode"\x3e\r\n    \x3cdiv class\x3d"about-container" data-dojo-attach-point\x3d"splashContainerNode"\x3e\r\n      \x3cdiv class\x3d"about-content" data-dojo-attach-point\x3d"customContentNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
        "url:widgets/About/css/style.css": ".jimu-widget-about{width: 100%; height: 100%;}.jimu-widget-about-desktop .about-envelope{min-height: 300px; max-height: 500px; min-width: 350px; max-width: 800px; position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;}.jimu-widget-about-desktop .about-container{min-width: 350px; max-width: 800px; position: absolute; display: inline-block; background-color: #485566; box-shadow: 0 0 4px rgba(160, 160, 160, 0.4);}.jimu-widget-about-desktop .about-content{width: 560px; margin: 20px 40px; overflow: auto; color: #fff; max-height: 388px;}",
        "url:widgets/About/config.json": '{\r\n  "about": {\r\n    "aboutContent":   <h1 style="color:blue;">This is a Blue Heading</h1>  }\r\n}',
        "*now": function (b) {
            b(['dojo/i18n!*preload*widgets/About/nls/Widget*["ar","cs","da","de","en","el","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","vi","ROOT"]'])
        }
    }
});
define(["dojo/_base/declare", "dojo/_base/html", "dojo/query", "dijit/_WidgetsInTemplateMixin", "jimu/BaseWidget"], function (b, c, e, f, g) {
    return b([g, f], {
        baseClass: "jimu-widget-about",
        _hasContent: null,
        postCreate: function () {
            this.inherited(arguments);
            this._hasContent = this.config.about && this.config.about.aboutContent
        },
        startup: function () {
            this.inherited(arguments);
            this.resize()
        },
        resize: function () {
            this._resizeContentImg()
        },
        _resizeContentImg: function () {
            var b = c.getContentBox(this.customContentNode);
            if (this._hasContent) {
                c.empty(this.customContentNode);
                var a = c.toDom(this.config.about.aboutContent);
                if (a.nodeType && (11 === a.nodeType || 1 === a.nodeType)) {
                    var d = e("img", a);
                    d && d.length ? d.style({
                        maxWidth: b.w - 20 + "px"
                    }) : "IMG" === a.nodeName.toUpperCase() && c.setStyle(a, "maxWidth", b.w - 20 + "px")
                }
                c.place(a, this.customContentNode)
            }
        }
    })
});