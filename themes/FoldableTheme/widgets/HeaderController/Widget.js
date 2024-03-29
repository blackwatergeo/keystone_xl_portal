//>>built
require({
    cache: {
        "themes/FoldableTheme/widgets/HeaderController/PopupTileNodes": function () {
            define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/dom-construct dojo/query dijit/_WidgetBase dijit/_TemplatedMixin jimu/dijit/ViewStack".split(" "), function (q, e, g, c, k, m, p, s, r) {
                return q([p, s], {
                    baseClass: "jimu-header-more-popup",
                    templateString: '\x3cdiv\x3e\x3cdiv class\x3d"pages" data-dojo-attach-point\x3d"pagesNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"points"\x3e\x3cdiv class\x3d"points-inner"data-dojo-attach-point\x3d"pointsNode"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
                    margin: 4,
                    postCreate: function () {
                        this.nodes = [];
                        this.pages = [];
                        this.createCloseBtn()
                    },
                    startup: function () {
                        this.viewStack = new r({
                            views: [],
                            viewType: "dom"
                        }, this.pagesNode);
                        this.viewStack.startup();
                        this.createPages();
                        0 < this.viewStack.views.length && this._selectPage(0);
                        this.resize()
                    },
                    resize: function () {
                        this.nodeWidth = (g.getMarginBox(this.domNode).w - 2 * this.margin) / 3;
                        this.nodes.forEach(e.hitch(this, function (c, h) {
                            this.setItemNodePosition(c, h)
                        }))
                    },
                    setItemNodePosition: function (c, h) {
                        var d, f;
                        h++;
                        d = 1 === h % 3 ? 0 : 2;
                        f = 3 >=
                            h ? 0 : 2;
                        var e = {};
                        "number" === typeof this.nodeWidth && (e.width = this.nodeWidth + "px", e.height = this.nodeWidth + "px");
                        "number" === typeof d && (window.isRTL ? e.marginRight = d + "px" : e.marginLeft = d + "px");
                        "number" === typeof f && (e.marginTop = f + "px");
                        g.setStyle(c, e)
                    },
                    createPages: function () {
                        var n, h, d, f;
                        n = Math.ceil(this.items.length / 9);
                        for (h = 0; h < n; h++) d = this.createPageNode(h), this.createPageItems(h, d), this.viewStack.addView(d), 1 < n && (f = this.createPointNode(h), c(f, "click", e.hitch(this, this._onPageNodeClick, h))), this.pages.push({
                            pageNode: d,
                            pointNode: f
                        })
                    },
                    _onPageNodeClick: function (c) {
                        this._selectPage(c)
                    },
                    _selectPage: function (c) {
                        1 < this.pages.length && (m(".point", this.domNode).removeClass("point-selected"), g.addClass(this.pages[c].pointNode, "point-selected"));
                        this.viewStack.switchView(this.pages[c].pageNode)
                    },
                    createPageItems: function (c, e) {
                        var d, f, k, g;
                        d = this.items.length;
                        k = 9 * (c + 1);
                        g = k - d;
                        for (f = 9 * c; f < Math.min(k, d); f++) this.createItemNode(f, e);
                        for (f = d; f < d + g; f++) this.createEmptyItemNode(f, e)
                    },
                    createPageNode: function () {
                        return k.create("div", {
                            "class": "page"
                        })
                    },
                    createPointNode: function () {
                        return k.create("div", {
                            "class": "point"
                        }, this.pointsNode)
                    },
                    createItemNode: function (n, h) {
                        var d, f;
                        f = this.items[n];
                        d = k.create("div", {
                            "class": "icon-node jimu-float-leading",
                            title: f.label,
                            settingId: f.id
                        }, h);
                        k.create("img", {
                            src: f.icon
                        }, d);
                        k.create("div", {
                            "class": "node-label",
                            title: f.label,
                            innerHTML: f.label
                        }, d);
                        d.config = f;
                        this.setItemNodePosition(d, n);
                        c(d, "click", e.hitch(this, function () {
                            this.onNodeClicked(d)
                        }));
                        this.nodes.push(d)
                    },
                    createEmptyItemNode: function (c,
                        e) {
                        var d;
                        d = k.create("div", {
                            "class": "icon-node jimu-float-leading"
                        }, e);
                        this.setItemNodePosition(d, c);
                        this.nodes.push(d);
                        return d
                    },
                    createCloseBtn: function () {
                        var g;
                        g = k.create("div", {
                            "class": "close"
                        }, this.domNode);
                        k.create("div", {
                            "class": "close-inner"
                        }, g);
                        c(g, "click", e.hitch(this, function () {
                            this.hide()
                        }));
                        return g
                    },
                    hide: function () {
                        g.setStyle(this.domNode, "display", "none")
                    },
                    show: function () {
                        g.setStyle(this.domNode, "display", "block")
                    },
                    onNodeClicked: function (c) {
                        this.hide()
                    }
                })
            })
        },
        "themes/FoldableTheme/widgets/HeaderController/_build-generate_module": function () {
            define(["dojo/text!./Widget.html",
"dojo/text!./css/style.css", "dojo/i18n!./nls/strings", "dojo/text!./config.json"], function () {})
        },
        "url:themes/FoldableTheme/widgets/HeaderController/Widget.html": '\x3cdiv\x3e\r\n  \x3c!-- solve the bug of style delay loading --\x3e\r\n  \x3cdiv class\x3d"header-section jimu-float-leading" data-dojo-attach-point\x3d"headerNode"\x3e\r\n    \x3cimg class\x3d"logo jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"logoNode"\x3e\r\n    \x3cdiv class\x3d"titles jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"titlesNode"\x3e\r\n      \x3cdiv class\x3d"title jimu-float-leading" data-dojo-attach-point\x3d"titleNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"subtitle jimu-float-leading jimu-leading-margin5" data-dojo-attach-point\x3d"subtitleNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"links jimu-float-leading jimu-leading-margin25" data-dojo-attach-point\x3d"linksNode"\x3e\r\n      \x3cdiv class\x3d"dynamic-section jimu-float-leading" data-dojo-attach-point\x3d"dynamicLinksNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"about-section jimu-float-leading" data-dojo-attach-point\x3d"aboutSectionNode"\x3e\r\n        \x3ca class\x3d"link" href\x3d"#" data-dojo-attach-point\x3d"aboutNode" data-dojo-attach-event\x3d"onclick:_onAboutClick"\x3e${nls.about}\x3c/a\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"signin-section jimu-float-leading" data-dojo-attach-point\x3d"signInSectionNode"\x3e\r\n        \x3ca href\x3d"#" class\x3d"link" data-dojo-attach-event\x3d"onclick:_onSigninClick"\r\n        data-dojo-attach-point\x3d"signinLinkNode"\x3e${nls.signin}\x3c/a\x3e\r\n        \x3ca href\x3d"" target\x3d"_blank" class\x3d"link" data-dojo-attach-event\x3d"onclick:_onUserNameClick" data-dojo-attach-point\x3d"userNameLinkNode"\x3e\x3c/a\x3e\r\n        \x3ca href\x3d"#" class\x3d"link" data-dojo-attach-event\x3d"onclick:_onSignoutClick" data-dojo-attach-point\x3d"signoutLinkNode"\x3e${nls.signout}\x3c/a\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"container-section jimu-float-leading" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
        "url:themes/FoldableTheme/widgets/HeaderController/css/style.css": ".jimu-widget-header-controller{box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);}.jimu-widget-header-controller .header-section{height: 100%; overflow: hidden; font-size: 16px;}.jimu-widget-header-controller .container-section{height: 100%; min-width: 80px;}.jimu-widget-header-controller .logo{cursor: pointer;}.jimu-widget-header-controller .titles{height: 100%; overflow: hidden;}.jimu-widget-header-controller .title{color:#fff; text-align: center; height: 100%; font-size: 18px; font-weight: bold;}.jimu-widget-header-controller .subtitle{color:#6d7685; font-size: 12px; text-align: center; height: 100%; font-weight: bold;}.jimu-widget-header-controller .links{height: 100%; overflow: hidden;}.jimu-widget-header-controller .dynamic-section,.jimu-widget-header-controller .about-section,.jimu-widget-header-controller .signin-section{height: 100%;}.jimu-widget-header-controller .links .link{color:#6d7685; font-size: 14px; font-weight: bold; text-decoration: none; height: 100%;}.jimu-widget-header-controller .signin-section .link{color: #d9dde0;}.jimu-widget-header-controller .icon-node{cursor: pointer; opacity: 0.6; text-align: center; border-right: 1px solid #323e4f;}.jimu-widget-header-controller .icon-node img{height: 24px; width: 24px;}.jimu-widget-header-controller .icon-node:first-child{border: none;}.jimu-widget-header-controller .icon-node:hover{opacity: 1;}.jimu-widget-header-controller .icon-node.jimu-state-selected{background-color:#ccdbe2; opacity: 1; border: none; border-top: 2px solid #8491a1;}.jimu-widget-header-controller .drop-triangle{position: absolute; width: 0px; height: 0px; bottom: 1px; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 4px solid white;}.jimu-widget-header-controller .jimu-drop-menu{background-color: #363455; box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);}.jimu-widget-header-controller .jimu-drop-menu .menu-item{overflow: hidden; border-top: 1px solid #435063;}.jimu-widget-header-controller .jimu-drop-menu .menu-item:hover{background-color: #485566;}.jimu-widget-header-controller .jimu-drop-menu .menu-item img{width: 24px; height: 24px; cursor: pointer; margin: 8px;}.jimu-widget-header-controller .jimu-drop-menu .menu-item .label{cursor: pointer; margin-top: 12px; font-size: 14px; color: white; min-width: 50px; text-align: center;}.popup-links .popup-title{}.popup-links .logo{*/ height: 30px;}.popup-links .title{color:#fff; text-align: center; font-size: 16px; */ width: 71.42857142857143%; overflow: hidden; white-space: nowrap; height: 100%;}.popup-links .line{width: 100%; height: 4px; border-bottom: 1px solid #393c40;}.popup-links .link-section{width: 100%; height: 66px;}.popup-links a{color: #fff; margin-left: 20px; font-size: 14px; height: 100%; width: 95%; overflow: hidden; display: inline-block;}.popup-links .link-section.signin a{color: #d9dde0;}.jimu-header-more-popup{position: absolute; border-radius: 2px; z-index: 200; background-color: #516070;}.jimu-header-more-popup .pages{position: relative; overflow: hidden; padding: 2px;}.jimu-header-more-popup .points{position: absolute; overflow: hidden; bottom: -18px; left: 0px; right: 0px; text-align: center;}.jimu-header-more-popup .points-inner{display: inline-block; overflow: hidden;}.jimu-header-more-popup .point{float: left; width: 8px; height: 8px; margin-left: 5px; border-radius: 4px; background-color: #f2f6f9; cursor: pointer;}.jimu-header-more-popup .point-selected{background-color: #485566;}.jimu-header-more-popup .page{position: relative; overflow: hidden;}.jimu-header-more-popup .close{position: absolute; width: 08.92857142857143%; height: 08.92857142857143%; top: -04.46428571428571%; right: -04.46428571428571%; border-radius: 50%; background-color: #697a8c; cursor: pointer;}.jimu-rtl .jimu-header-more-popup .close{left: -04.46428571428571%; right: auto;}.jimu-header-more-popup .close-inner{width: 80%; height: 80%; margin-left: 10%; margin-top: 10%; border-radius: 50%; background: #1d2123 url(images/close.png) no-repeat center center;}.jimu-header-more-popup .icon-node{background-color: #286f6d; cursor: pointer;}.jimu-header-more-popup .icon-node.jimu-state-selected{background-color: red;}.jimu-header-more-popup img{width: 48px; height: 48px; margin: auto; margin-top: 25%; display: block;}.jimu-header-more-popup .node-label{width: 100%; text-align: center; font-size: 16px; margin-top: 5px; color: white; overflow: hidden; white-space: pre-line; text-overflow: ellipsis; display: inline-block;}@media screen and (max-width:600px){.jimu-header-more-popup .node-label{font-size: 14px;}}.jimu-more-icon-cover{z-index: 199; position: absolute; left: 0; top: 0; width: 100%; height: 100%;}",
        "url:themes/FoldableTheme/widgets/HeaderController/config.json": '{\r\n  "groupSetting": [\r\n    {\r\n      "label": "AttributeTable",\r\n      "type": "dropDown"\r\n    }\r\n  ]\r\n}',
        "*now": function (q) {
            q(['dojo/i18n!*preload*themes/FoldableTheme/widgets/HeaderController/nls/Widget*["ar","cs","da","de","en","el","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","vi","ROOT"]'])
        }
    }
});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/aspect dojo/query dojo/on dojo/mouse dojo/dom-construct dojo/dom-geometry jimu/BaseWidget jimu/PoolControllerMixin jimu/tokenUtils jimu/portalUtils jimu/portalUrlUtils jimu/utils jimu/dijit/Message ./PopupTileNodes".split(" "), function (q, e, g, c, k, m, p, s, r, n, h, d, f, v, u, t, w, x) {
    return q([h, d], {
        baseClass: "jimu-widget-header-controller jimu-main-bgcolor",
        maxIconCount: -1,
        createMoreIcon: !1,
        switchableElements: {},
        height: 40,
        openedId: "",
        _lastOpenId: "",
        postCreate: function () {
            this.inherited(arguments);
            this._processGroupSetting();
            this.switchableElements.title = this.titleNode;
            this.switchableElements.links = this.linksNode;
            this.switchableElements.subtitle = this.subtitleNode;
            this.position && this.position.height && (this.height = this.position.height);
            c.setStyle(this.signInSectionNode, "display", "none");
            c.setAttr(this.logoNode, "src", this.appConfig.logo ? this.appConfig.logo : this.folderUrl + "images/app-logo.png");
            this.switchableElements.title.innerHTML =
                this.appConfig.title ? this.appConfig.title : "";
            this.switchableElements.subtitle.innerHTML = this.appConfig.subtitle ? this.appConfig.subtitle : "";
            this._createDynamicLinks(this.appConfig.links);
            this.appConfig.about ? (c.setStyle(this.aboutNode, "display", ""), this.aboutNode.visible = !0) : (c.setStyle(this.aboutNode, "display", "none"), this.aboutNode.visible = !1);
            this._setElementsSize();
            this.own(p(this.domNode, s.enter, e.hitch(this, function () {
                var a = "",
                    b = u.getServerByUrl(this.appConfig && this.appConfig.portalUrl || "");
                u.isArcGIScom(b) && (b = "ArcGIS.com");
                b && (a = this.nls.signInTo + " " + b);
                this.signinLinkNode.title = a
            })))
        },
        startup: function () {
            this.inherited(arguments);
            this.resize()
        },
        onAction: function (a, b) {
            if ("highLight" === a && b) {
                var c = m('div[settingid\x3d"' + b.widgetId + '"]')[0];
                this._highLight(c)
            }
            "removeHighLight" === a && this._removeHighLight()
        },
        onSignIn: function (a) {
            this.inherited(arguments);
            c.setStyle(this.signinLinkNode, "display", "none");
            c.setStyle(this.userNameLinkNode, "display", "");
            c.setStyle(this.signoutLinkNode, "display",
                "");
            this.userNameLinkNode.innerHTML = a.userId;
            c.setAttr(this.userNameLinkNode, "href", this.appConfig.portalUrl + "home/user.html");
            this.popupLinkNode && (c.setStyle(this.popupSigninNode, "display", "none"), c.setStyle(this.popupUserNameNode, "display", ""), c.setStyle(this.popupSignoutNode, "display", ""), m("a", this.popupUserNameNode).html(a.userId).attr("href", this.appConfig.portalUrl + "home/user.html"));
            this.resize()
        },
        onSignOut: function () {
            this.inherited(arguments);
            this._onSignOut(this.nls.signin);
            v.getPortal(this.appConfig.portalUrl).loadSelfInfo().then(e.hitch(this,
                function (a) {
                    this._onSignOut(this.nls.signInTo + " " + a.name)
                }), e.hitch(this, function (a) {
                console.error(a)
            }))
        },
        _onSignOut: function (a) {
            c.setStyle(this.signinLinkNode, "display", "");
            c.setAttr(this.signinLinkNode, "innerHTML", a);
            c.setStyle(this.userNameLinkNode, "display", "none");
            c.setStyle(this.signoutLinkNode, "display", "none");
            this.userNameLinkNode.innerHTML = "";
            this.popupLinkNode && (c.setStyle(this.popupSigninNode, "display", ""), c.setAttr(this.popupSigninNode, "innerHTML", a), c.setStyle(this.popupUserNameNode,
                "display", "none"), c.setStyle(this.popupSignoutNode, "display", "none"), m("a", this.popupUserNameNode).html(""));
            this.resize()
        },
        resize: function () {
            var a = c.getStyle(this.headerNode, "float"),
                b = c.getStyle(this.logoNode, "float"),
                l = c.getStyle(this.titlesNode, "float"),
                d = c.getStyle(this.linksNode, "float");
            a && "none" !== a && b && "none" !== b && l && "none" !== l && d && "none" !== d ? this._resize() : setTimeout(e.hitch(this, this.resize), 200)
        },
        _resize: function () {
            var a = c.getContentBox(this.domNode);
            this._showSwitchableElements(["title",
"links", "subtitle"]);
            this._createIconNodes(a);
            this.morePane && (c.setStyle(this.morePane.domNode, t.getPositionStyle(this._getMorePanelSize())), this.morePane.resize());
            this.popupLinkNode && c.setStyle(jimuConfig.layoutId, {
                left: c.getContentBox(this.popupLinkNode).w + "px"
            })
        },
        destroy: function () {
            this.timeoutHandle && (clearTimeout(this.timeoutHandle), this.timeoutHandle = null);
            this.morePane && this.morePane.destroy();
            this.moreIconPaneCoverNode && (c.destroy(this.moreIconPaneCoverNode), this.moreIconPaneCoverNode = null);
            this.popupLinkNode && this.popupLinksVisible && this._hidePopupLink();
            c.destroy(this.popupLinkNode);
            this.inherited(arguments)
        },
        onAppConfigChanged: function (a, b, c) {
            switch (b) {
            case "attributeChange":
                this._onAttributeChange(a, c);
                break;
            default:
                return
            }
            this.resize()
        },
        getOpenedIds: function () {
            this.inherited(arguments);
            return "" === this.openedId ? [] : [this.openedId]
        },
        setOpenedIds: function (a) {
            0 !== a.length && (this.openedId = a[0], (a = this.getConfigById(this.openedId)) && (a.widgets && "openAll" === a.openType ? this._showIconContent(a) :
                a.widgets || this._showIconContent(a)))
        },
        _highLight: function (a) {
            this.hlDiv && this._removeHighLight();
            if (a) {
                var b = n.getMarginBox(a);
                this.hlDiv = r.create("div", {
                    style: {
                        position: "absolute",
                        left: b.l + "px",
                        top: b.t + "px",
                        width: b.w + "px",
                        height: b.h + "px"
                    },
                    "class": "icon-highlight"
                }, a, "before")
            }
        },
        _removeHighLight: function () {
            this.hlDiv && (r.destroy(this.hlDiv), this.hlDiv = null)
        },
        _onAttributeChange: function (a, b) {
            void 0 !== b.title && b.title !== this.appConfig.title && (this.titleNode.innerHTML = b.title);
            void 0 !== b.subtitle &&
                b.subtitle !== this.appConfig.subtitle && (this.subtitleNode.innerHTML = b.subtitle);
            b.logo && c.setAttr(this.logoNode, "src", b.logo);
            b.links && this._createDynamicLinks(b.links)
        },
        _setElementsSize: function () {
            c.setStyle(this.logoNode, {
                height: "0px",
                width: "60%",
                marginTop: (this.height - 30) / 2 + "px"
            });
            c.setStyle(this.titleNode, {
                lineHeight: this.height + "px"
            });
            c.setStyle(this.subtitleNode, {
                lineHeight: this.height + "px"
            });
            m(".link", this.domNode).style({
                lineHeight: this.height + "px"
            })
        },
        _processGroupSetting: function () {
            g.forEach(this.appConfig.widgetPool.groups,
                function (a) {
                    var b;
                    a: {
                        for (b = 0; b < this.config.groupSetting.length; b++)
                            if (this.config.groupSetting[b].label === a.label) {
                                b = this.config.groupSetting[b].type;
                                break a
                            }
                        b = "openAll"
                    }
                    a.openType = b
                }, this)
        },
        _createDynamicLinks: function (a) {
            if (window.isRTL) {
                var b = [];
                g.forEach(a, function (a) {
                    b.unshift(a)
                });
                a = b
            }
            c.empty(this.dynamicLinksNode);
            g.forEach(a, function (a) {
                    c.create("a", {
                        href: a.url,
                        target: "_blank",
                        innerHTML: a.label,
                        "class": "link jimu-align-leading jimu-leading-margin1",
                        style: {
                            lineHeight: this.height + "px"
                        }
                    }, this.dynamicLinksNode)
                },
                this)
        },
        _showSwitchableElements: function (a) {
            var b = this.switchableElements,
                l;
            for (l in b) b.hasOwnProperty(l) && (-1 < a.indexOf(l) ? (c.setStyle(b[l], "display", "block"), b[l].visible = !0) : (c.setStyle(b[l], "display", "none"), b[l].visible = !1));
            this.logoClickHandle && this.logoClickHandle.remove();
            0 > a.indexOf("links") ? this.logoClickHandle = p(this.logoNode, "click", e.hitch(this, this._onLogoClick)) : (this.popupLinksVisible && this._hidePopupLink(), c.setStyle(this.logoNode, {
                cursor: "default"
            }))
        },
        _switchSignin: function () {
            var a =
                f.getPortalCredential(this.appConfig.portalUrl);
            if (a) this.onSignIn(a);
            else this.onSignOut()
        },
        _onLogoClick: function () {
            this.popupLinkNode && c.destroy(this.popupLinkNode);
            this.popupLinkNode = this._createPopupLinkNode();
            this.popupLinksVisible ? this._hidePopupLink() : this._showPopupLink()
        },
        _hidePopupLink: function () {
            c.setStyle(this.popupLinkNode, "display", "none");
            window.isRTL ? c.setStyle(jimuConfig.layoutId, {
                right: 0
            }) : c.setStyle(jimuConfig.layoutId, {
                left: 0
            });
            this.popupLinksVisible = !1
        },
        _showPopupLink: function () {
            c.setStyle(this.popupLinkNode,
                "display", "");
            window.isRTL ? c.setStyle(jimuConfig.layoutId, {
                right: c.getContentBox(this.popupLinkNode).w + "px"
            }) : c.setStyle(jimuConfig.layoutId, {
                left: c.getContentBox(this.popupLinkNode).w + "px"
            });
            this.popupLinksVisible = !0
        },
        _createPopupLinkNode: function () {
            var a, b;
            c.getContentBox(jimuConfig.mainPageId);
            a = c.create("div", {
                "class": "popup-links jimu-main-bgcolor",
                style: {
                    position: "absolute",
                    zIndex: 100,
                    top: 0,
                    bottom: 0
                }
            }, jimuConfig.mainPageId);
            window.isRTL ? c.setStyle(a, {
                right: 0,
                left: "50px"
            }) : c.setStyle(a, {
                left: 0,
                right: "50px"
            });
            b = c.create("div", {
                "class": "popup-title",
                style: {
                    height: this.height + "px",
                    width: "100%"
                }
            }, a);
            c.create("img", {
                "class": "logo jimu-float-leading jimu-leading-margin1",
                src: this.appConfig.logo ? this.appConfig.logo : this.folderUrl + "images/app-logo.png",
                style: {
                    width: "30px",
                    height: "30px",
                    marginTop: (this.height - 30) / 2 + "px"
                }
            }, b);
            c.create("div", {
                "class": "title jimu-float-leading jimu-leading-margin1",
                innerHTML: this.appConfig.title,
                style: {
                    lineHeight: this.height + "px"
                }
            }, b);
            g.forEach(this.appConfig.links,
                function (b) {
                    this._createLinkNode(a, b, !1)
                }, this);
            this._createLinkNode(a, {
                label: "",
                url: "#"
            }, !1);
            return a
        },
        _createLinkNode: function (a, b, l) {
            a = c.place('\x3cdiv class\x3d"link"\x3e\x3c/div\x3e', a);
            c.place('\x3cdiv class\x3d"line"\x3e\x3c/div\x3e', a);
            l = c.place('\x3cdiv class\x3d"' + (l ? "link-section signin" : "link-section") + '"\x3e\x3c/div\x3e', a);
            c.create("a", {
                href: b.url,
                "class": "jimu-ellipsis",
                target: "_blank",
                innerHTML: b.label,
                title: b.label,
                style: {
                    lineHeight: "66px"
                }
            }, l);
            return a
        },
        _onSigninClick: function () {
            f.signInPortal(this.appConfig.portalUrl,
                this.appConfig.appId)
        },
        _onSignoutClick: function () {
            this.appConfig.mode ? new w({
                message: this.nls.cantSignOutTip
            }) : f.signOutAll()
        },
        _onAboutClick: function () {
            this.widgetManager.loadWidget({
                id: this.appConfig.about + "_1",
                uri: this.appConfig.about,
                label: "About"
            }).then(e.hitch(this, function (a) {
                c.place(a.domNode, jimuConfig.mainPageId);
                a.startup()
            }))
        },
        _onUserNameClick: function () {},
        _getHeaderSectionWidth: function () {
            return c.getMarginBox(this.headerNode).w
        },
        _getContainerWidth: function (a) {
            var b = this._getHeaderSectionWidth();
            return a.w - b - this._getEmptyWidth(a)
        },
        _calcContainerAndEmptyWidth: function (a) {
            var b = this._getContainerWidth(a),
                c = this._getEmptyWidth(a);
            b < 2 * this.iconWidth && (this.switchableElements.subtitle.visible ? (this._showSwitchableElements(["title", "links"]), b = this._getContainerWidth(a), b < 2 * this.iconWidth && (this._showSwitchableElements(["title"]), b = this._getContainerWidth(a), b < 2 * this.iconWidth && (this._showSwitchableElements([]), b = this._getContainerWidth(a), b < 2 * this.iconWidth && (c -= 2 * this.iconWidth - b, b = 2 * this.iconWidth,
                this._getContainerWidth(a))))) : (this._showSwitchableElements([]), b = this._getContainerWidth(a), b < 2 * this.iconWidth && (c -= 2 * this.iconWidth - b, b = 2 * this.iconWidth)));
            return {
                containerWidth: b,
                emptyWidth: c
            }
        },
        _getEmptyWidth: function (a) {
            return 0.1 * a.w
        },
        _createIconNodes: function (a) {
            c.empty(this.containerNode);
            this._closeDropMenu();
            var b, d = this.getAllConfigs();
            this.iconWidth = a.h;
            a = this._calcContainerAndEmptyWidth(a);
            b = {
                width: a.containerWidth + "px"
            };
            b[window.isRTL ? "marginRight" : "marginLeft"] = a.emptyWidth - 5 + "px";
            c.setStyle(this.containerNode, b);
            this.maxIconCount = Math.floor(a.containerWidth / this.iconWidth);
            this.maxIconCount >= d.length ? (this.headerIconCount = d.length, this.createMoreIcon = !1) : (this.headerIconCount = this.maxIconCount - 1, this.createMoreIcon = !0);
            this.createMoreIcon && this._createIconNode({
                label: "more"
            });
            var e;
            for (a = this.headerIconCount - 1; 0 <= a; a--) {
                b = d[a];
                var f = this._createIconNode(b);
                b.openAtStart && (e = f)
            }
            e && !this.openAtStartWidget && (this._onIconClick(e), this.openAtStartWidget = e.config.name, this.openedId =
                e.config.id)
        },
        _createIconNode: function (a) {
            var b, d;
            d = "more" === a.label ? this.folderUrl + "images/more_icon.png" : a.icon;
            b = c.create("div", {
                "class": "icon-node jimu-float-trailing",
                title: a.label,
                settingId: a.id,
                style: {
                    width: this.height + "px",
                    height: this.height + "px"
                }
            }, this.containerNode);
            c.create("img", {
                src: d,
                style: {
                    marginTop: (this.height - 24) / 2 + "px"
                }
            }, b);
            "more" === a.label ? p(b, "click", e.hitch(this, this._showMorePane, a)) : p(b, "click", e.hitch(this, function () {
                this._onIconClick(b)
            }));
            b.config = a;
            b.config.widgets && (1 <
                b.config.widgets.length && "dropDown" === b.config.openType) && this._createDropTriangle(b);
            this.openedId === a.id && (c.addClass(b, "jimu-state-selected"), b.config.widgets && (1 < b.config.widgets.length && "dropDown" === b.config.openType) && this._openDropMenu(b));
            return b
        },
        _createDropTriangle: function (a) {
            var b = c.getMarginBox(a);
            c.create("div", {
                "class": "drop-triangle",
                style: {
                    left: b.l + b.w / 2 - 4 + "px"
                }
            }, a)
        },
        _onIconClick: function (a) {
            this.openedId && (this._lastOpenId = this.openedId);
            !a.config.widgets || 1 === a.config.widgets.length ||
                "openAll" === a.config.openType ? this.openedId && this.openedId === a.config.id ? this._switchNodeToClose(this._lastOpenId) : this.openedId ? this._switchNodeToClose(this.openedId).then(e.hitch(this, function () {
                    this._closeDropMenu();
                    this._switchNodeToOpen(a.config.id)
                })) : this._switchNodeToOpen(a.config.id) : this.openedId && this.openedId === a.config.id ? (this.openedId = "", this._closeDropMenu()) : (this.openedId = a.config.id, this._closeDropMenu(), this._openDropMenu(a))
        },
        _closeDropMenu: function () {
            this.dropMenuNode && (c.destroy(this.dropMenuNode),
                this.dropMenuNode = null)
        },
        _openDropMenu: function (a) {
            this.dropMenuNode = c.create("div", {
                "class": "jimu-drop-menu",
                title: a.config.label,
                style: {
                    position: "absolute",
                    zIndex: "101"
                }
            });
            c.place(this.dropMenuNode, this.containerNode);
            this._setDropMenuPosition(a);
            g.forEach(a.config.widgets, function (a) {
                this._createDropMenuItem(a)
            }, this);
            this.morePane && this.morePane.hide()
        },
        _createDropMenuItem: function (a) {
            var b = c.create("div", {
                "class": "menu-item",
                title: a.label,
                style: {
                    height: this.height + "px"
                }
            }, this.dropMenuNode);
            c.create("img", {
                "class": "jimu-float-leading",
                src: a.icon
            }, b);
            c.create("div", {
                "class": "label jimu-float-leading",
                innerHTML: a.label
            }, b);
            this.own(p(b, "click", e.hitch(this, function () {
                this._closeDropMenu();
                this._switchNodeToClose(this._lastOpenId).then(e.hitch(this, function () {
                    this._showIconContent(b.config)
                }))
            })));
            b.config = a;
            return b
        },
        _setDropMenuPosition: function (a) {
            var b = {};
            a = c.getMarginBox(a);
            var d = c.getMarginBox(this.domNode),
                e = d.w - a.l - a.w;
            b.top = this.height + 1;
            b.right = window.isRTL ? d.w - e - a.w : e;
            c.setStyle(this.dropMenuNode,
                t.getPositionStyle(b))
        },
        _switchNodeToOpen: function (a) {
            a = this._getIconNodeById(a);
            m(".icon-node", this.domNode).removeClass("jimu-state-selected");
            c.addClass(a, "jimu-state-selected");
            this._showIconContent(a.config)
        },
        _switchNodeToClose: function (a) {
            m(".icon-node", this.domNode).removeClass("jimu-state-selected");
            return this.panelManager.closePanel(a + "_panel")
        },
        _getIconNodeById: function (a) {
            a = m('.icon-node[settingId\x3d"' + a + '"]', this.domNode);
            if (0 !== a.length) return a[0]
        },
        _onPanelClose: function (a) {
            m('.icon-node[settingId\x3d"' +
                a + '"]', this.domNode).removeClass("jimu-state-selected");
            this.openedId = ""
        },
        _showIconContent: function (a) {
            this.panelManager.showPanel(a).then(e.hitch(this, function (b) {
                this.openedId = a.id;
                this.own(k.after(b, "onClose", e.hitch(this, function () {
                    this._onPanelClose(a.id)
                })))
            }))
        },
        _showMorePane: function () {
            var a, b, d = [],
                f = this.getAllConfigs();
            for (a = this.headerIconCount; a < f.length; a++) b = f[a], d.push(b);
            this.morePane && this.morePane.destroy();
            this.moreIconPaneCoverNode && c.destroy(this.moreIconPaneCoverNode);
            this._closeDropMenu();
            this.morePane = new x({
                openedId: this.openedId,
                items: d
            });
            this._createCoverNode();
            c.place(this.morePane.domNode, jimuConfig.mapId);
            c.setStyle(this.morePane.domNode, t.getPositionStyle(this._getMorePanelSize()));
            this.morePane.startup();
            k.after(this.morePane, "onNodeClicked", e.hitch(this, function (a) {
                this._moveConfigToHeader(a.config);
                this._createIconNodes(c.getContentBox(this.domNode));
                this._onIconClick(this._getIconNodeById(a.config.id))
            }), !0);
            k.after(this.morePane, "hide", e.hitch(this, function () {
                c.destroy(this.moreIconPaneCoverNode)
            }), !0)
        },
        _moveConfigToHeader: function (a) {
            var b = this.getAllConfigs(),
                c = a.index;
            a.index = b[this.headerIconCount - 1].index;
            b[this.headerIconCount - 1].index = c
        },
        _createCoverNode: function () {
            this.moreIconPaneCoverNode = c.create("div", {
                "class": "jimu-more-icon-cover"
            }, jimuConfig.layoutId)
        },
        _getMorePanelSize: function () {
            var a;
            a = c.getContentBox(jimuConfig.mapId);
            return 600 > Math.min(a.w, a.h) ? a.w < a.h ? {
                left: 20,
                right: 20,
                top: (a.h - (a.w - 40)) / 2,
                height: a.w - 40,
                width: "",
                bottom: ""
            } : {
                top: 20,
                bottom: 20,
                left: (a.w - (a.h - 40)) / 2,
                width: a.h -
                    40,
                height: "",
                right: ""
            } : {
                top: (a.h - 560) / 2,
                left: (a.w - 560) / 2,
                width: 560,
                height: 560,
                right: "",
                bottom: ""
            }
        }
    })
});