window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AppConst: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6d5052hszhIVolygHp34ihN", "AppConst");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AppConst = void 0;
    var AppConst = {
      GAME_NAME: "\u76f8\u7389\u6709\u94b1",
      VERSION: "1.6.17",
      REMOTE_VERSION: "1.6.17",
      CVERSION: 1,
      AdUnitId: "adunit-8624a61c0cdd3756",
      AdUnitId_Inter: "adunit-e80d0c15f5fb38ff",
      HTTP_API: "http://39.98.74.164:8080",
      RES_URL: "https://xyyq-update.oss-cn-hangzhou.aliyuncs.com",
      WEBSOCK_IP: "39.98.33.4",
      WEBSOCK_PORT: "3110",
      TEST_WEBSOCK_IP: "39.98.74.164",
      TEST_WEBSOCK_PORT: "3110",
      USE_WEBSOCKET: true,
      RECONNECTINTERVAL: 3e3,
      RECONNECTCOUNT: 3,
      TIMEOUTINTERVAL: 2e3,
      LOGIN_CODE: "10021",
      UI_PATH: "ui/",
      ISGM: false,
      ISTEST: false,
      ISWX_Review: false,
      IsForSH: false,
      HRW: 2,
      VIDEO_MAX: 30,
      ShowKF: false,
      NewAskDes: false,
      KFWX: "jpc5777",
      KFURL: "https://chat8.live800.com/live800/chatClient/chatbox.jsp?companyID=1424633&configID=153959&jid=3496469749&s=1",
      Open30: false,
      NOTICE: "\u516c\u544a",
      loadUrl: "",
      ANDROID_CONF: "http://meetrich.leyouapp.cn/android.json",
      IOS_CONF: "http://meetrich.leyouapp.cn/ios.json"
    };
    exports.AppConst = AppConst;
    cc._RF.pop();
  }, {} ],
  AppUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cc8dbOlYklGM58ked0GGKhp", "AppUtil");
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function _typeof(obj) {
        return typeof obj;
      } : function _typeof(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var wxapi = _interopRequireWildcard(require("../platform/wx"));
    var _ManagerCenter = _interopRequireDefault(require("../common/ManagerCenter"));
    var _NoticeCenter = require("../common/NoticeCenter");
    var _UIconst = require("../define/UIconst");
    var _AppConst = require("../define/AppConst");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== _typeof(obj) && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var AppUtil = function() {
      function AppUtil() {
        _classCallCheck(this, AppUtil);
      }
      _createClass(AppUtil, null, [ {
        key: "getParent",
        value: function getParent() {
          return cc.find("Canvas");
        }
      }, {
        key: "getTopLayer",
        value: function getTopLayer() {
          return cc.find("Canvas/top_layer");
        }
      }, {
        key: "loadScene",
        value: function loadScene(sceneName, params) {
          var cb = function cb() {
            var Canvas = cc.director.getScene().getChildByName("Canvas");
            cc.log(Canvas);
            var script = Canvas.getComponent("loadScene");
            script && script.loadScene(sceneName, params);
          };
          cc.director.loadScene("scene/loadScene", cb);
        }
      }, {
        key: "loadGameScene",
        value: function loadGameScene(sceneName, params) {
          var cb = function cb() {
            var Canvas = cc.director.getScene().getChildByName("Canvas");
            cc.log(Canvas);
            var script = Canvas.getComponent("loadGameScene");
            script && script.loadScene(sceneName, params);
          };
          cc.director.loadScene("scene/loadGameScene", cb);
        }
      }, {
        key: "preloadScene",
        value: function preloadScene(sceneName) {
          var params = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
          cc.director.preloadScene(sceneName, function(count, tatal, item) {}, function(err, scene) {
            if (err) {
              console.log(err.message);
              return;
            }
            cc.director.loadScene(sceneName, function() {
              _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.load_scene_success, params);
            });
          });
        }
      }, {
        key: "loadSceneTimer",
        value: function loadSceneTimer(sceneName, params) {}
      }, {
        key: "showMessage",
        value: function showMessage(message) {
          console.log(message);
          cc.sys.platform === cc.sys.WECHAT_GAME ? wxapi.show_toast(message, "none") : this.showTips(message);
        }
      }, {
        key: "showLoading",
        value: function showLoading(title) {
          cc.sys.platform === cc.sys.WECHAT_GAME ? wxapi.show_loading(title, true) : _ManagerCenter["default"].getUIManager().show(_UIconst.UIconst.loading, title, false);
        }
      }, {
        key: "hideLoading",
        value: function hideLoading() {
          cc.sys.platform === cc.sys.WECHAT_GAME ? wxapi.hide_loading() : _ManagerCenter["default"].getUIManager().hide(_UIconst.UIconst.loading);
        }
      }, {
        key: "showModal",
        value: function showModal(info, ok, cancle) {
          var type = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
          cc.sys.platform === cc.sys.WECHAT_GAME ? wxapi.show_modal("\u63d0\u793a", info, "\u786e\u5b9a", true, function(res) {
            res.confirm ? ok() : res.cancel && cancle && cancle();
          }) : _ManagerCenter["default"].getUIManager().show(_UIconst.UIconst.model_tips, {
            info: info,
            ok_callback: ok,
            cancel_callback: cancle,
            type: type
          });
        }
      }, {
        key: "loadHeadImg",
        value: function loadHeadImg(url, img) {
          if ("string" != typeof url || "" == url) return;
          cc.loader.load({
            url: url,
            type: "png"
          }, function(err, tex) {
            if (err) {
              console.log(err.message);
              return;
            }
            img && img.node && img.spriteFrame && img.node.isValid && (img.spriteFrame = new cc.SpriteFrame(tex));
          });
        }
      }, {
        key: "setBtnTitle",
        value: function setBtnTitle(title, btn) {
          if (btn instanceof cc.Button) {
            var label = cc.find("Background/Label", btn.node);
            label && (label.getComponent(cc.Label).string = title);
          }
        }
      }, {
        key: "setBtnSprite",
        value: function setBtnSprite(btn, spritePath) {
          cc.loader.loadRes(spritePath, cc.SpriteFrame, function(err, frame) {
            var bg = cc.find("Background", btn.node);
            err ? cc.error(err) : bg.getComponent(cc.Sprite).spriteFrame = frame;
          });
        }
      }, {
        key: "loadResImg",
        value: function loadResImg(url, img) {
          var callback = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
          cc.loader.loadRes(url, cc.SpriteFrame, function(err, spriteFrame) {
            if (err) cc.log(err); else {
              img && img.node && img.node.isValid && (img.spriteFrame = spriteFrame);
              callback && callback(spriteFrame);
            }
          });
        }
      }, {
        key: "loadImage",
        value: function loadImage(path, sp) {
          var _this = this;
          var node = sp.node;
          if (node && node.isValid) {
            var getShowSize = function getShowSize(width, height) {
              var w = node.width;
              var h = node.height;
              var r = width / height / (node.width / node.height);
              r > 1 ? h /= r : w *= r;
              return cc.size(w, h);
            };
            cc.loader.load(path, function(err, tex) {
              if (err) {
                cc.log(err);
                _this.showMessage("\u52a0\u8f7d\u6570\u636e\u5931\u8d252");
                return;
              }
              if (node && node.isValid) {
                var showSize = getShowSize(tex.width, tex.height);
                node.width = showSize.width;
                node.height = showSize.height;
                sp.spriteFrame = new cc.SpriteFrame(tex);
              }
            });
          }
        }
      }, {
        key: "createImg",
        value: function createImg(path, parent, callback) {
          cc.loader.loadRes(path, cc.SpriteFrame, function(err, tex) {
            if (err) {
              cc.log(err);
              return;
            }
            var node = new cc.Node("ding");
            node.parent = parent;
            var sp = node.addComponent(cc.Sprite);
            sp.spriteFrame = tex;
            callback && callback(node);
            return node;
          });
        }
      }, {
        key: "loadText",
        value: function loadText(path, callback) {
          var _this2 = this;
          this.showLoading("\u52a0\u8f7d\u4e2d");
          cc.loader.load(path, function(err, text) {
            if (err) {
              cc.log(err);
              _this2.showMessage("\u52a0\u8f7d\u6570\u636e\u5931\u8d251");
              return;
            }
            callback && callback(text);
            _this2.hideLoading();
          });
        }
      }, {
        key: "createFlyPig",
        value: function createFlyPig(params) {
          var _this3 = this;
          cc.loader.loadRes("ui/flypig", cc.Prefab, function(err, prefab) {
            if (err) console.log(err.message); else {
              var pig = cc.instantiate(prefab);
              pig.name = "pig";
              var top = _this3.getTopLayer();
              if (!top) return;
              var old = top.getChildByName("pig");
              if (old) return;
              pig.x = 450, pig.y = 0, pig.parent = _this3.getTopLayer();
              var script = pig.getComponent("flypig");
              script && script.init && script.init(params);
            }
          });
        }
      }, {
        key: "createGuide",
        value: function createGuide(parent, callback) {
          cc.loader.loadRes("ui/guide", cc.Prefab, function(err, prefab) {
            if (err) {
              cc.log(err);
              return false;
            }
            var finger = cc.instantiate(prefab);
            finger.parent = parent;
            callback && callback(finger);
            return finger;
          });
        }
      }, {
        key: "playGoldAction",
        value: function playGoldAction(fromNode) {
          var mtype = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          var toNode = 1 == mtype ? cc.find("Canvas/ui_node/left_top/userinfo/gold/icon") : cc.find("Canvas/ui_node/left_top/userinfo/diamond/icon");
          var res = 1 == mtype ? "ui/gold" : "ui/diamond";
          if (3 == mtype) {
            toNode = cc.find("Canvas/ui_node/left_top/userinfo/power/icon");
            res = "ui/power";
          }
          var top = this.getTopLayer();
          var from = top.convertToNodeSpaceAR(fromNode.parent.convertToWorldSpaceAR(fromNode.getPosition()));
          var to = top.convertToNodeSpaceAR(toNode.parent.convertToWorldSpaceAR(toNode.getPosition()));
          cc.loader.loadRes(res, cc.SpriteFrame, function(err, sp) {
            if (err) ; else {
              var count = 10;
              var _n = 0;
              var action = function action() {
                _n++;
                var _node = new cc.Node("gold");
                var gold = _node.addComponent(cc.Sprite);
                gold.spriteFrame = sp;
                _node.parent = top;
                _node.x = from.x + 100 * Math.random() - 50;
                _node.y = from.y + 100 * Math.random() - 50;
                var offset = 50 + 200 * Math.random();
                var d = to.sub(from).div(3);
                var b1 = from.add(d).add(cc.v2(offset, offset));
                var b2 = to.sub(d).add(cc.v2(-offset, -offset));
                if (_n % 2 == 0) {
                  b1 = from.add(d).add(cc.v2(-offset, -offset));
                  b2 = to.sub(d).add(cc.v2(offset, offset));
                }
                var a1 = cc.bezierTo(.7, [ b1, b2, to ]);
                var a2 = cc.scaleTo(.1, 1.5);
                var a3 = cc.scaleTo(.1, 1);
                var a4 = cc.callFunc(function() {
                  _node.destroy();
                });
                _node.runAction(cc.sequence(a1, a2, a3, a4));
              };
              cc.director.getScheduler().schedule(action, top, .03, count, 0, false);
              _ManagerCenter["default"].getSoundManager().playGoldEffect();
            }
          });
        }
      }, {
        key: "playBezier",
        value: function playBezier(node, toPos) {
          var callback = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
          var from = node.position;
          var to = toPos;
          var offset = 50 + 200 * Math.random();
          var d = to.sub(from).div(3);
          var b1 = from.add(d).add(cc.v2(offset, offset));
          var b2 = to.sub(d).add(cc.v2(offset, offset));
          if (Math.random() > .5) {
            b1 = from.add(d).add(cc.v2(-offset, -offset));
            b2 = to.sub(d).add(cc.v2(-offset, -offset));
          }
          var a1 = cc.bezierTo(.7, [ b1, b2, to ]);
          var a11 = cc.scaleTo(.7, .5);
          var a2 = cc.scaleTo(.1, 2);
          var a3 = cc.scaleTo(.1, .4);
          var a4 = cc.callFunc(function() {
            node.destroy();
            callback && callback();
          });
          node.runAction(cc.sequence(cc.spawn(a1.easing(cc.easeInOut(2)), a11), a2, a3, a4));
        }
      }, {
        key: "showTips",
        value: function showTips(msg) {
          var _this4 = this;
          if ("string" != typeof msg) return;
          cc.loader.loadRes("ui/tips", cc.Prefab, function(err, prefab) {
            if (err) console.log(err.message); else {
              var tips = cc.instantiate(prefab);
              tips.parent = _this4.getParent();
              var script = tips.getComponent("tips");
              script && script.init && script.init({
                msg: msg,
                type: 1
              });
            }
          });
        }
      }, {
        key: "showDM",
        value: function showDM(msg) {
          var _this5 = this;
          cc.loader.loadRes("ui/tips", cc.Prefab, function(err, prefab) {
            if (err) console.log(err.message); else {
              var tips = cc.instantiate(prefab);
              tips.parent = _this5.getParent();
              var script = tips.getComponent("tips");
              script && script.init && script.init({
                msg: msg,
                type: 2
              });
            }
          });
        }
      }, {
        key: "addRedPoint",
        value: function addRedPoint(node) {
          var scale = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          var w = node.width;
          var h = node.height;
          cc.loader.loadRes("image/ding", cc.SpriteFrame, function(err, img) {
            if (err) {
              console.error(err.message);
              return;
            }
            var _node = new cc.Node("red_point");
            var sp = _node.addComponent(cc.Sprite);
            sp.spriteFrame = img;
            var p = cc.find("Background", node);
            if (p) {
              _node.parent = p;
              _node.scale = scale;
              _node.x = w / 2 * .7;
              _node.y = h / 2 * .8;
            }
          });
        }
      }, {
        key: "removeRedPoint",
        value: function removeRedPoint(node) {
          var red = cc.find("Background/red_point", node);
          red && red.destroy();
        }
      }, {
        key: "getBrotherNode",
        value: function getBrotherNode(node, name) {
          var p = node.parent;
          return p.getChildByName(name);
        }
      }, {
        key: "getWinHeightWeightRatio",
        value: function getWinHeightWeightRatio() {
          var winSize = cc.view.getFrameSize();
          return winSize.height / winSize.width;
        }
      }, {
        key: "getWinScale",
        value: function getWinScale() {
          var ratio = this.getWinHeightWeightRatio();
          return 2 / ratio;
        }
      }, {
        key: "getNodeScale",
        value: function getNodeScale() {
          var winSize = cc.view.getFrameSize();
          var desSize = cc.view.getDesignResolutionSize();
          var xScale = desSize.height / desSize.width / (winSize.height / winSize.width);
          var yScale = 1;
          return cc.v2(xScale, yScale);
        }
      }, {
        key: "loadDragonBones",
        value: function loadDragonBones(node, path, armatureName, newAnimation, completeCallback) {
          var playTimes = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
          var animationDisplay = node.getComponent(dragonBones.ArmatureDisplay);
          if (!animationDisplay) {
            node.addComponent(dragonBones.ArmatureDisplay);
            animationDisplay = node.getComponent(dragonBones.ArmatureDisplay);
          }
          cc.loader.loadResDir(path, function(err, assets) {
            if (err) {
              console.log(err.message);
              return;
            }
            if (assets.length <= 0) {
              console.log("floder is empty:", path);
              return;
            }
            assets.forEach(function(asset) {
              asset instanceof dragonBones.DragonBonesAsset && (animationDisplay.dragonAsset = asset);
              asset instanceof dragonBones.DragonBonesAtlasAsset && (animationDisplay.dragonAtlasAsset = asset);
              animationDisplay.armatureName = armatureName;
              animationDisplay.playAnimation(newAnimation, playTimes);
              cc.log(animationDisplay.getArmatureNames());
              cc.log(animationDisplay.getAnimationNames(armatureName));
              completeCallback && "function" == typeof completeCallback && animationDisplay.addEventListener(dragonBones.EventObject.COMPLETE, completeCallback);
            });
          });
        }
      }, {
        key: "showBroadcast",
        value: function showBroadcast(str) {
          var _this6 = this;
          cc.loader.loadRes("ui/broadcast", cc.Prefab, function(err, prefab) {
            if (err) {
              cc.log(err.message);
              return;
            }
            var node = cc.instantiate(prefab);
            node.parent = _this6.getTopLayer();
            var script = node.getComponent("broadcast");
            script && script.init(str);
          });
        }
      }, {
        key: "showRedpack",
        value: function showRedpack(value) {
          var _this7 = this;
          cc.loader.loadRes("ui/redpack", cc.Prefab, function(err, prefab) {
            if (err) {
              cc.log(err.message);
              return;
            }
            var node = cc.instantiate(prefab);
            node.parent = _this7.getTopLayer();
            var script = node.getComponent("redpack");
            script && script.init(value);
          });
        }
      }, {
        key: "showFlowLabel",
        value: function showFlowLabel(str) {
          var pos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cc.v2(0, 0);
          var parent = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
          var showtime = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
          var color = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : cc.Color.GREEN;
          var size = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 42;
          var node = new cc.Node("flow_label");
          var label = node.addComponent(cc.Label);
          node.parent = parent || this.getParent();
          label.overflow = cc.Label.Overflow.NONE;
          label.string = str;
          label.fontSize = size;
          node.color = color;
          node.position = pos;
          var showTime = showtime;
          var _y = pos.y;
          node.stopAllActions();
          node.opacity = 255;
          var a1 = cc.fadeOut(showTime);
          var a2 = cc.moveBy(showTime, cc.v2(0, 100));
          var callback = cc.callFunc(function() {
            node.destroy();
          });
          var action = cc.sequence(cc.spawn(a1, a2), callback);
          node.runAction(action);
        }
      }, {
        key: "setBtnTrans",
        value: function setBtnTrans(btn) {
          if (!(btn instanceof cc.Button)) return;
          btn.interactable ? btn.transition = cc.Button.Transition.SCALE : btn.transition = cc.Button.Transition.SPRITE;
        }
      }, {
        key: "capture",
        value: function capture() {
          var camera = cc.find("Canvas/Main Camera").getComponent(cc.Camera);
          var texture = new cc.RenderTexture();
          texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height);
          camera.targetTexture = texture;
          this.texture = texture;
          var width = this.texture.width;
          var height = this.texture.height;
          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");
          canvas.width = width;
          canvas.height = height;
          camera.render();
          var data = this.texture.readPixels();
          var rowBytes = 4 * width;
          for (var row = 0; row < height; row++) {
            var srow = height - 1 - row;
            var imageData = ctx.createImageData(width, 1);
            var start = srow * width * 4;
            for (var i = 0; i < rowBytes; i++) imageData.data[i] = data[start + i];
            ctx.putImageData(imageData, 0, row);
          }
          var dataURL = canvas.toDataURL("image/jpeg");
          var img = document.createElement("img");
          img.src = dataURL;
          return img;
        }
      }, {
        key: "loadParticle",
        value: function loadParticle(name, parent, pos, callback) {
          cc.loader.loadRes("particle/" + name, cc.SpriteFrame, function(err, spriteFram) {
            if (err) {
              console.err(err);
              return;
            }
            cc.loader.loadRes("particle/" + name, cc.ParticleAsset, function(err, resParticleAsset) {
              if (err) {
                console.err(err);
                return;
              }
              var particleNode = new cc.Node();
              particleNode.position = pos;
              var particleCom = particleNode.addComponent(cc.ParticleSystem);
              particleCom.file = resParticleAsset;
              setTimeout(function() {
                particleCom.custom = true;
                particleCom.spriteFrame = spriteFram;
                parent.addChild(particleNode);
                callback && callback(particleNode);
              }, 1);
            });
          });
        }
      } ]);
      return AppUtil;
    }();
    exports["default"] = AppUtil;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../common/ManagerCenter": "ManagerCenter",
    "../common/NoticeCenter": "NoticeCenter",
    "../define/AppConst": "AppConst",
    "../define/UIconst": "UIconst",
    "../platform/wx": "wx"
  } ],
  AudioVolume: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c13ddoTC7hNro8nv/YsEHUI", "AudioVolume");
    "use strict";
    cc.Class({
      extends: cc.Component,
      start: function start() {
        var slider = this.getComponent(cc.Slider);
        slider ? this.updateVolume(slider) : cc.warn("AudioVolume\u7ec4\u4ef6\u9700\u8981\u914d\u5408Slider\u7ec4\u4ef6\u4f7f\u7528");
      },
      updateVolume: function updateVolume(sender) {
        cc.audioEngine.setAllVolume(sender.progress);
      }
    });
    cc._RF.pop();
  }, {} ],
  BroadcastManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9872eh/GEpI07p8JBvpnYST", "BroadcastManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _AppUtil = _interopRequireDefault(require("../utility/AppUtil"));
    var _NoticeCenter = require("../common/NoticeCenter");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var dmList = [ "\u91d1\u5e01\u4e0d\u591f\u770b\u89c6\u9891", "\u5411\u4e0b\u5f00\u77ff\u5b9d\u77f3\u591a", "\u4e0a\u7ebf\u8bb0\u5f97\u5f00\u5b9d\u7bb1", "\u89c6\u9891\u52a0\u901f\u91d1\u5e01\u591a", "\u4e2a\u4eba\u5206\u7ea2\u9694\u5929\u9886", "\u56e2\u961f\u4eba\u591a\u7ea2\u5305\u591a" ];
    var BroadcastManager = function() {
      _createClass(BroadcastManager, null, [ {
        key: "getInstance",
        value: function getInstance() {
          BroadcastManager.shared || (BroadcastManager.shared = new BroadcastManager());
          return BroadcastManager.shared;
        }
      } ]);
      function BroadcastManager() {
        _classCallCheck(this, BroadcastManager);
        this._msg = [];
        this._isPlay = false;
        cc.systemEvent.on(_NoticeCenter.EventName.broad_cast_over, this.onBroadcastOver, this);
      }
      _createClass(BroadcastManager, [ {
        key: "showBroadcast",
        value: function showBroadcast(msg) {
          "string" == typeof msg && this._msg.push(msg);
          if (!this._isPlay && this._msg.length > 0) {
            var _msg = this._msg.shift();
            _AppUtil["default"].showBroadcast(_msg);
            this._isPlay = true;
          }
        }
      }, {
        key: "onBroadcastOver",
        value: function onBroadcastOver() {
          var _this = this;
          this._isPlay = false;
          this.st && clearTimeout(this.st);
          this.st = setTimeout(function() {
            _this.showBroadcast();
          }, 1e3);
        }
      }, {
        key: "showDM",
        value: function showDM() {
          if (this.dmPlan) return;
          var index = 0;
          this.dmPlan = setInterval(function() {
            dmList[index] ? _AppUtil["default"].showDM(dmList[index]) : 8 == index && (index = 0);
            index++;
          }, 5e3);
        }
      }, {
        key: "closeDM",
        value: function closeDM() {
          if (this.dmPlan) {
            clearInterval(this.dmPlan);
            this.dmPlan = null;
          }
        }
      } ]);
      return BroadcastManager;
    }();
    exports["default"] = BroadcastManager;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../common/NoticeCenter": "NoticeCenter",
    "../utility/AppUtil": "AppUtil"
  } ],
  CQRCode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0d05ZRCzhMVqJsNW4cpzLo", "CQRCode");
    "use strict";
    function QR8bitByte(data) {
      this.mode = QRMode.MODE_8BIT_BYTE;
      this.data = data;
    }
    QR8bitByte.prototype = {
      getLength: function getLength(buffer) {
        return this.data.length;
      },
      write: function write(buffer) {
        for (var i = 0; i < this.data.length; i++) buffer.put(this.data.charCodeAt(i), 8);
      }
    };
    var QRCode = function QRCode(typeNumber, errorCorrectLevel) {
      this.typeNumber = typeNumber;
      this.errorCorrectLevel = errorCorrectLevel;
      this.modules = null;
      this.moduleCount = 0;
      this.dataCache = null;
      this.dataList = new Array();
    };
    QRCode.prototype = {
      addData: function addData(data) {
        var newData = new QR8bitByte(data);
        this.dataList.push(newData);
        this.dataCache = null;
      },
      isDark: function isDark(row, col) {
        if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) throw new Error(row + "," + col);
        return this.modules[row][col];
      },
      getModuleCount: function getModuleCount() {
        return this.moduleCount;
      },
      make: function make() {
        if (this.typeNumber < 1) {
          var typeNumber = 1;
          for (typeNumber = 1; typeNumber < 40; typeNumber++) {
            var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);
            var buffer = new QRBitBuffer();
            var totalDataCount = 0;
            for (var i = 0; i < rsBlocks.length; i++) totalDataCount += rsBlocks[i].dataCount;
            for (var _i = 0; _i < this.dataList.length; _i++) {
              var data = this.dataList[_i];
              buffer.put(data.mode, 4);
              buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
              data.write(buffer);
            }
            if (buffer.getLengthInBits() <= 8 * totalDataCount) break;
          }
          this.typeNumber = typeNumber;
        }
        this.makeImpl(false, this.getBestMaskPattern());
      },
      makeImpl: function makeImpl(test, maskPattern) {
        this.moduleCount = 4 * this.typeNumber + 17;
        this.modules = new Array(this.moduleCount);
        for (var row = 0; row < this.moduleCount; row++) {
          this.modules[row] = new Array(this.moduleCount);
          for (var col = 0; col < this.moduleCount; col++) this.modules[row][col] = null;
        }
        this.setupPositionProbePattern(0, 0);
        this.setupPositionProbePattern(this.moduleCount - 7, 0);
        this.setupPositionProbePattern(0, this.moduleCount - 7);
        this.setupPositionAdjustPattern();
        this.setupTimingPattern();
        this.setupTypeInfo(test, maskPattern);
        this.typeNumber >= 7 && this.setupTypeNumber(test);
        null == this.dataCache && (this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList));
        this.mapData(this.dataCache, maskPattern);
      },
      setupPositionProbePattern: function setupPositionProbePattern(row, col) {
        for (var r = -1; r <= 7; r++) {
          if (row + r <= -1 || this.moduleCount <= row + r) continue;
          for (var c = -1; c <= 7; c++) {
            if (col + c <= -1 || this.moduleCount <= col + c) continue;
            this.modules[row + r][col + c] = 0 <= r && r <= 6 && (0 == c || 6 == c) || 0 <= c && c <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= c && c <= 4;
          }
        }
      },
      getBestMaskPattern: function getBestMaskPattern() {
        var minLostPoint = 0;
        var pattern = 0;
        for (var i = 0; i < 8; i++) {
          this.makeImpl(true, i);
          var lostPoint = QRUtil.getLostPoint(this);
          if (0 == i || minLostPoint > lostPoint) {
            minLostPoint = lostPoint;
            pattern = i;
          }
        }
        return pattern;
      },
      createMovieClip: function createMovieClip(target_mc, instance_name, depth) {
        var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
        var cs = 1;
        this.make();
        for (var row = 0; row < this.modules.length; row++) {
          var y = row * cs;
          for (var col = 0; col < this.modules[row].length; col++) {
            var x = col * cs;
            var dark = this.modules[row][col];
            if (dark) {
              qr_mc.beginFill(0, 100);
              qr_mc.moveTo(x, y);
              qr_mc.lineTo(x + cs, y);
              qr_mc.lineTo(x + cs, y + cs);
              qr_mc.lineTo(x, y + cs);
              qr_mc.endFill();
            }
          }
        }
        return qr_mc;
      },
      setupTimingPattern: function setupTimingPattern() {
        for (var r = 8; r < this.moduleCount - 8; r++) {
          if (null != this.modules[r][6]) continue;
          this.modules[r][6] = r % 2 == 0;
        }
        for (var c = 8; c < this.moduleCount - 8; c++) {
          if (null != this.modules[6][c]) continue;
          this.modules[6][c] = c % 2 == 0;
        }
      },
      setupPositionAdjustPattern: function setupPositionAdjustPattern() {
        var pos = QRUtil.getPatternPosition(this.typeNumber);
        for (var i = 0; i < pos.length; i++) for (var j = 0; j < pos.length; j++) {
          var row = pos[i];
          var col = pos[j];
          if (null != this.modules[row][col]) continue;
          for (var r = -2; r <= 2; r++) for (var c = -2; c <= 2; c++) this.modules[row + r][col + c] = -2 == r || 2 == r || -2 == c || 2 == c || 0 == r && 0 == c;
        }
      },
      setupTypeNumber: function setupTypeNumber(test) {
        var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
        for (var i = 0; i < 18; i++) {
          var mod = !test && 1 == (bits >> i & 1);
          this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
        }
        for (var _i2 = 0; _i2 < 18; _i2++) {
          var _mod = !test && 1 == (bits >> _i2 & 1);
          this.modules[_i2 % 3 + this.moduleCount - 8 - 3][Math.floor(_i2 / 3)] = _mod;
        }
      },
      setupTypeInfo: function setupTypeInfo(test, maskPattern) {
        var data = this.errorCorrectLevel << 3 | maskPattern;
        var bits = QRUtil.getBCHTypeInfo(data);
        for (var i = 0; i < 15; i++) {
          var mod = !test && 1 == (bits >> i & 1);
          i < 6 ? this.modules[i][8] = mod : i < 8 ? this.modules[i + 1][8] = mod : this.modules[this.moduleCount - 15 + i][8] = mod;
        }
        for (var _i3 = 0; _i3 < 15; _i3++) {
          var _mod2 = !test && 1 == (bits >> _i3 & 1);
          _i3 < 8 ? this.modules[8][this.moduleCount - _i3 - 1] = _mod2 : _i3 < 9 ? this.modules[8][15 - _i3 - 1 + 1] = _mod2 : this.modules[8][15 - _i3 - 1] = _mod2;
        }
        this.modules[this.moduleCount - 8][8] = !test;
      },
      mapData: function mapData(data, maskPattern) {
        var inc = -1;
        var row = this.moduleCount - 1;
        var bitIndex = 7;
        var byteIndex = 0;
        for (var col = this.moduleCount - 1; col > 0; col -= 2) {
          6 == col && col--;
          while (true) {
            for (var c = 0; c < 2; c++) if (null == this.modules[row][col - c]) {
              var dark = false;
              byteIndex < data.length && (dark = 1 == (data[byteIndex] >>> bitIndex & 1));
              var mask = QRUtil.getMask(maskPattern, row, col - c);
              mask && (dark = !dark);
              this.modules[row][col - c] = dark;
              bitIndex--;
              if (-1 == bitIndex) {
                byteIndex++;
                bitIndex = 7;
              }
            }
            row += inc;
            if (row < 0 || this.moduleCount <= row) {
              row -= inc;
              inc = -inc;
              break;
            }
          }
        }
      }
    };
    QRCode.PAD0 = 236;
    QRCode.PAD1 = 17;
    QRCode.createData = function(typeNumber, errorCorrectLevel, dataList) {
      var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
      var buffer = new QRBitBuffer();
      for (var i = 0; i < dataList.length; i++) {
        var data = dataList[i];
        buffer.put(data.mode, 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
        data.write(buffer);
      }
      var totalDataCount = 0;
      for (var _i4 = 0; _i4 < rsBlocks.length; _i4++) totalDataCount += rsBlocks[_i4].dataCount;
      if (buffer.getLengthInBits() > 8 * totalDataCount) throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + 8 * totalDataCount + ")");
      buffer.getLengthInBits() + 4 <= 8 * totalDataCount && buffer.put(0, 4);
      while (buffer.getLengthInBits() % 8 != 0) buffer.putBit(false);
      while (true) {
        if (buffer.getLengthInBits() >= 8 * totalDataCount) break;
        buffer.put(QRCode.PAD0, 8);
        if (buffer.getLengthInBits() >= 8 * totalDataCount) break;
        buffer.put(QRCode.PAD1, 8);
      }
      return QRCode.createBytes(buffer, rsBlocks);
    };
    QRCode.createBytes = function(buffer, rsBlocks) {
      var offset = 0;
      var maxDcCount = 0;
      var maxEcCount = 0;
      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);
      for (var r = 0; r < rsBlocks.length; r++) {
        var dcCount = rsBlocks[r].dataCount;
        var ecCount = rsBlocks[r].totalCount - dcCount;
        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);
        dcdata[r] = new Array(dcCount);
        for (var i = 0; i < dcdata[r].length; i++) dcdata[r][i] = 255 & buffer.buffer[i + offset];
        offset += dcCount;
        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (var _i5 = 0; _i5 < ecdata[r].length; _i5++) {
          var modIndex = _i5 + modPoly.getLength() - ecdata[r].length;
          ecdata[r][_i5] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
        }
      }
      var totalCodeCount = 0;
      for (var _i6 = 0; _i6 < rsBlocks.length; _i6++) totalCodeCount += rsBlocks[_i6].totalCount;
      var data = new Array(totalCodeCount);
      var index = 0;
      for (var _i7 = 0; _i7 < maxDcCount; _i7++) for (var _r = 0; _r < rsBlocks.length; _r++) _i7 < dcdata[_r].length && (data[index++] = dcdata[_r][_i7]);
      for (var _i8 = 0; _i8 < maxEcCount; _i8++) for (var _r2 = 0; _r2 < rsBlocks.length; _r2++) _i8 < ecdata[_r2].length && (data[index++] = ecdata[_r2][_i8]);
      return data;
    };
    var QRMode = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8
    };
    var QRErrorCorrectLevel = {
      L: 1,
      M: 0,
      Q: 3,
      H: 2
    };
    var QRMaskPattern = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var QRUtil = {
      PATTERN_POSITION_TABLE: [ [], [ 6, 18 ], [ 6, 22 ], [ 6, 26 ], [ 6, 30 ], [ 6, 34 ], [ 6, 22, 38 ], [ 6, 24, 42 ], [ 6, 26, 46 ], [ 6, 28, 50 ], [ 6, 30, 54 ], [ 6, 32, 58 ], [ 6, 34, 62 ], [ 6, 26, 46, 66 ], [ 6, 26, 48, 70 ], [ 6, 26, 50, 74 ], [ 6, 30, 54, 78 ], [ 6, 30, 56, 82 ], [ 6, 30, 58, 86 ], [ 6, 34, 62, 90 ], [ 6, 28, 50, 72, 94 ], [ 6, 26, 50, 74, 98 ], [ 6, 30, 54, 78, 102 ], [ 6, 28, 54, 80, 106 ], [ 6, 32, 58, 84, 110 ], [ 6, 30, 58, 86, 114 ], [ 6, 34, 62, 90, 118 ], [ 6, 26, 50, 74, 98, 122 ], [ 6, 30, 54, 78, 102, 126 ], [ 6, 26, 52, 78, 104, 130 ], [ 6, 30, 56, 82, 108, 134 ], [ 6, 34, 60, 86, 112, 138 ], [ 6, 30, 58, 86, 114, 142 ], [ 6, 34, 62, 90, 118, 146 ], [ 6, 30, 54, 78, 102, 126, 150 ], [ 6, 24, 50, 76, 102, 128, 154 ], [ 6, 28, 54, 80, 106, 132, 158 ], [ 6, 32, 58, 84, 110, 136, 162 ], [ 6, 26, 54, 82, 110, 138, 166 ], [ 6, 30, 58, 86, 114, 142, 170 ] ],
      G15: 1335,
      G18: 7973,
      G15_MASK: 21522,
      getBCHTypeInfo: function getBCHTypeInfo(data) {
        var d = data << 10;
        while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
        return (data << 10 | d) ^ QRUtil.G15_MASK;
      },
      getBCHTypeNumber: function getBCHTypeNumber(data) {
        var d = data << 12;
        while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
        return data << 12 | d;
      },
      getBCHDigit: function getBCHDigit(data) {
        var digit = 0;
        while (0 != data) {
          digit++;
          data >>>= 1;
        }
        return digit;
      },
      getPatternPosition: function getPatternPosition(typeNumber) {
        return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
      },
      getMask: function getMask(maskPattern, i, j) {
        switch (maskPattern) {
         case QRMaskPattern.PATTERN000:
          return (i + j) % 2 == 0;

         case QRMaskPattern.PATTERN001:
          return i % 2 == 0;

         case QRMaskPattern.PATTERN010:
          return j % 3 == 0;

         case QRMaskPattern.PATTERN011:
          return (i + j) % 3 == 0;

         case QRMaskPattern.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;

         case QRMaskPattern.PATTERN101:
          return i * j % 2 + i * j % 3 == 0;

         case QRMaskPattern.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 == 0;

         case QRMaskPattern.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 == 0;

         default:
          throw new Error("bad maskPattern:" + maskPattern);
        }
      },
      getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
        var a = new QRPolynomial([ 1 ], 0);
        for (var i = 0; i < errorCorrectLength; i++) a = a.multiply(new QRPolynomial([ 1, QRMath.gexp(i) ], 0));
        return a;
      },
      getLengthInBits: function getLengthInBits(mode, type) {
        if (1 <= type && type < 10) switch (mode) {
         case QRMode.MODE_NUMBER:
          return 10;

         case QRMode.MODE_ALPHA_NUM:
          return 9;

         case QRMode.MODE_8BIT_BYTE:
         case QRMode.MODE_KANJI:
          return 8;

         default:
          throw new Error("mode:" + mode);
        } else if (type < 27) switch (mode) {
         case QRMode.MODE_NUMBER:
          return 12;

         case QRMode.MODE_ALPHA_NUM:
          return 11;

         case QRMode.MODE_8BIT_BYTE:
          return 16;

         case QRMode.MODE_KANJI:
          return 10;

         default:
          throw new Error("mode:" + mode);
        } else {
          if (!(type < 41)) throw new Error("type:" + type);
          switch (mode) {
           case QRMode.MODE_NUMBER:
            return 14;

           case QRMode.MODE_ALPHA_NUM:
            return 13;

           case QRMode.MODE_8BIT_BYTE:
            return 16;

           case QRMode.MODE_KANJI:
            return 12;

           default:
            throw new Error("mode:" + mode);
          }
        }
      },
      getLostPoint: function getLostPoint(qrCode) {
        var moduleCount = qrCode.getModuleCount();
        var lostPoint = 0;
        for (var row = 0; row < moduleCount; row++) for (var col = 0; col < moduleCount; col++) {
          var sameCount = 0;
          var dark = qrCode.isDark(row, col);
          for (var r = -1; r <= 1; r++) {
            if (row + r < 0 || moduleCount <= row + r) continue;
            for (var c = -1; c <= 1; c++) {
              if (col + c < 0 || moduleCount <= col + c) continue;
              if (0 == r && 0 == c) continue;
              dark == qrCode.isDark(row + r, col + c) && sameCount++;
            }
          }
          sameCount > 5 && (lostPoint += 3 + sameCount - 5);
        }
        for (var _row = 0; _row < moduleCount - 1; _row++) for (var _col = 0; _col < moduleCount - 1; _col++) {
          var count = 0;
          qrCode.isDark(_row, _col) && count++;
          qrCode.isDark(_row + 1, _col) && count++;
          qrCode.isDark(_row, _col + 1) && count++;
          qrCode.isDark(_row + 1, _col + 1) && count++;
          0 != count && 4 != count || (lostPoint += 3);
        }
        for (var _row2 = 0; _row2 < moduleCount; _row2++) for (var _col2 = 0; _col2 < moduleCount - 6; _col2++) qrCode.isDark(_row2, _col2) && !qrCode.isDark(_row2, _col2 + 1) && qrCode.isDark(_row2, _col2 + 2) && qrCode.isDark(_row2, _col2 + 3) && qrCode.isDark(_row2, _col2 + 4) && !qrCode.isDark(_row2, _col2 + 5) && qrCode.isDark(_row2, _col2 + 6) && (lostPoint += 40);
        for (var _col3 = 0; _col3 < moduleCount; _col3++) for (var _row3 = 0; _row3 < moduleCount - 6; _row3++) qrCode.isDark(_row3, _col3) && !qrCode.isDark(_row3 + 1, _col3) && qrCode.isDark(_row3 + 2, _col3) && qrCode.isDark(_row3 + 3, _col3) && qrCode.isDark(_row3 + 4, _col3) && !qrCode.isDark(_row3 + 5, _col3) && qrCode.isDark(_row3 + 6, _col3) && (lostPoint += 40);
        var darkCount = 0;
        for (var _col4 = 0; _col4 < moduleCount; _col4++) for (var _row4 = 0; _row4 < moduleCount; _row4++) qrCode.isDark(_row4, _col4) && darkCount++;
        var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
        lostPoint += 10 * ratio;
        return lostPoint;
      }
    };
    var QRMath = {
      glog: function glog(n) {
        if (n < 1) throw new Error("glog(" + n + ")");
        return QRMath.LOG_TABLE[n];
      },
      gexp: function gexp(n) {
        while (n < 0) n += 255;
        while (n >= 256) n -= 255;
        return QRMath.EXP_TABLE[n];
      },
      EXP_TABLE: new Array(256),
      LOG_TABLE: new Array(256)
    };
    for (var i = 0; i < 8; i++) QRMath.EXP_TABLE[i] = 1 << i;
    for (var _i9 = 8; _i9 < 256; _i9++) QRMath.EXP_TABLE[_i9] = QRMath.EXP_TABLE[_i9 - 4] ^ QRMath.EXP_TABLE[_i9 - 5] ^ QRMath.EXP_TABLE[_i9 - 6] ^ QRMath.EXP_TABLE[_i9 - 8];
    for (var _i10 = 0; _i10 < 255; _i10++) QRMath.LOG_TABLE[QRMath.EXP_TABLE[_i10]] = _i10;
    function QRPolynomial(num, shift) {
      if (void 0 == num.length) throw new Error(num.length + "/" + shift);
      var offset = 0;
      while (offset < num.length && 0 == num[offset]) offset++;
      this.num = new Array(num.length - offset + shift);
      for (var _i11 = 0; _i11 < num.length - offset; _i11++) this.num[_i11] = num[_i11 + offset];
    }
    QRPolynomial.prototype = {
      get: function get(index) {
        return this.num[index];
      },
      getLength: function getLength() {
        return this.num.length;
      },
      multiply: function multiply(e) {
        var num = new Array(this.getLength() + e.getLength() - 1);
        for (var _i12 = 0; _i12 < this.getLength(); _i12++) for (var j = 0; j < e.getLength(); j++) num[_i12 + j] ^= QRMath.gexp(QRMath.glog(this.get(_i12)) + QRMath.glog(e.get(j)));
        return new QRPolynomial(num, 0);
      },
      mod: function mod(e) {
        if (this.getLength() - e.getLength() < 0) return this;
        var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
        var num = new Array(this.getLength());
        for (var _i13 = 0; _i13 < this.getLength(); _i13++) num[_i13] = this.get(_i13);
        for (var _i14 = 0; _i14 < e.getLength(); _i14++) num[_i14] ^= QRMath.gexp(QRMath.glog(e.get(_i14)) + ratio);
        return new QRPolynomial(num, 0).mod(e);
      }
    };
    function QRRSBlock(totalCount, dataCount) {
      this.totalCount = totalCount;
      this.dataCount = dataCount;
    }
    QRRSBlock.RS_BLOCK_TABLE = [ [ 1, 26, 19 ], [ 1, 26, 16 ], [ 1, 26, 13 ], [ 1, 26, 9 ], [ 1, 44, 34 ], [ 1, 44, 28 ], [ 1, 44, 22 ], [ 1, 44, 16 ], [ 1, 70, 55 ], [ 1, 70, 44 ], [ 2, 35, 17 ], [ 2, 35, 13 ], [ 1, 100, 80 ], [ 2, 50, 32 ], [ 2, 50, 24 ], [ 4, 25, 9 ], [ 1, 134, 108 ], [ 2, 67, 43 ], [ 2, 33, 15, 2, 34, 16 ], [ 2, 33, 11, 2, 34, 12 ], [ 2, 86, 68 ], [ 4, 43, 27 ], [ 4, 43, 19 ], [ 4, 43, 15 ], [ 2, 98, 78 ], [ 4, 49, 31 ], [ 2, 32, 14, 4, 33, 15 ], [ 4, 39, 13, 1, 40, 14 ], [ 2, 121, 97 ], [ 2, 60, 38, 2, 61, 39 ], [ 4, 40, 18, 2, 41, 19 ], [ 4, 40, 14, 2, 41, 15 ], [ 2, 146, 116 ], [ 3, 58, 36, 2, 59, 37 ], [ 4, 36, 16, 4, 37, 17 ], [ 4, 36, 12, 4, 37, 13 ], [ 2, 86, 68, 2, 87, 69 ], [ 4, 69, 43, 1, 70, 44 ], [ 6, 43, 19, 2, 44, 20 ], [ 6, 43, 15, 2, 44, 16 ], [ 4, 101, 81 ], [ 1, 80, 50, 4, 81, 51 ], [ 4, 50, 22, 4, 51, 23 ], [ 3, 36, 12, 8, 37, 13 ], [ 2, 116, 92, 2, 117, 93 ], [ 6, 58, 36, 2, 59, 37 ], [ 4, 46, 20, 6, 47, 21 ], [ 7, 42, 14, 4, 43, 15 ], [ 4, 133, 107 ], [ 8, 59, 37, 1, 60, 38 ], [ 8, 44, 20, 4, 45, 21 ], [ 12, 33, 11, 4, 34, 12 ], [ 3, 145, 115, 1, 146, 116 ], [ 4, 64, 40, 5, 65, 41 ], [ 11, 36, 16, 5, 37, 17 ], [ 11, 36, 12, 5, 37, 13 ], [ 5, 109, 87, 1, 110, 88 ], [ 5, 65, 41, 5, 66, 42 ], [ 5, 54, 24, 7, 55, 25 ], [ 11, 36, 12 ], [ 5, 122, 98, 1, 123, 99 ], [ 7, 73, 45, 3, 74, 46 ], [ 15, 43, 19, 2, 44, 20 ], [ 3, 45, 15, 13, 46, 16 ], [ 1, 135, 107, 5, 136, 108 ], [ 10, 74, 46, 1, 75, 47 ], [ 1, 50, 22, 15, 51, 23 ], [ 2, 42, 14, 17, 43, 15 ], [ 5, 150, 120, 1, 151, 121 ], [ 9, 69, 43, 4, 70, 44 ], [ 17, 50, 22, 1, 51, 23 ], [ 2, 42, 14, 19, 43, 15 ], [ 3, 141, 113, 4, 142, 114 ], [ 3, 70, 44, 11, 71, 45 ], [ 17, 47, 21, 4, 48, 22 ], [ 9, 39, 13, 16, 40, 14 ], [ 3, 135, 107, 5, 136, 108 ], [ 3, 67, 41, 13, 68, 42 ], [ 15, 54, 24, 5, 55, 25 ], [ 15, 43, 15, 10, 44, 16 ], [ 4, 144, 116, 4, 145, 117 ], [ 17, 68, 42 ], [ 17, 50, 22, 6, 51, 23 ], [ 19, 46, 16, 6, 47, 17 ], [ 2, 139, 111, 7, 140, 112 ], [ 17, 74, 46 ], [ 7, 54, 24, 16, 55, 25 ], [ 34, 37, 13 ], [ 4, 151, 121, 5, 152, 122 ], [ 4, 75, 47, 14, 76, 48 ], [ 11, 54, 24, 14, 55, 25 ], [ 16, 45, 15, 14, 46, 16 ], [ 6, 147, 117, 4, 148, 118 ], [ 6, 73, 45, 14, 74, 46 ], [ 11, 54, 24, 16, 55, 25 ], [ 30, 46, 16, 2, 47, 17 ], [ 8, 132, 106, 4, 133, 107 ], [ 8, 75, 47, 13, 76, 48 ], [ 7, 54, 24, 22, 55, 25 ], [ 22, 45, 15, 13, 46, 16 ], [ 10, 142, 114, 2, 143, 115 ], [ 19, 74, 46, 4, 75, 47 ], [ 28, 50, 22, 6, 51, 23 ], [ 33, 46, 16, 4, 47, 17 ], [ 8, 152, 122, 4, 153, 123 ], [ 22, 73, 45, 3, 74, 46 ], [ 8, 53, 23, 26, 54, 24 ], [ 12, 45, 15, 28, 46, 16 ], [ 3, 147, 117, 10, 148, 118 ], [ 3, 73, 45, 23, 74, 46 ], [ 4, 54, 24, 31, 55, 25 ], [ 11, 45, 15, 31, 46, 16 ], [ 7, 146, 116, 7, 147, 117 ], [ 21, 73, 45, 7, 74, 46 ], [ 1, 53, 23, 37, 54, 24 ], [ 19, 45, 15, 26, 46, 16 ], [ 5, 145, 115, 10, 146, 116 ], [ 19, 75, 47, 10, 76, 48 ], [ 15, 54, 24, 25, 55, 25 ], [ 23, 45, 15, 25, 46, 16 ], [ 13, 145, 115, 3, 146, 116 ], [ 2, 74, 46, 29, 75, 47 ], [ 42, 54, 24, 1, 55, 25 ], [ 23, 45, 15, 28, 46, 16 ], [ 17, 145, 115 ], [ 10, 74, 46, 23, 75, 47 ], [ 10, 54, 24, 35, 55, 25 ], [ 19, 45, 15, 35, 46, 16 ], [ 17, 145, 115, 1, 146, 116 ], [ 14, 74, 46, 21, 75, 47 ], [ 29, 54, 24, 19, 55, 25 ], [ 11, 45, 15, 46, 46, 16 ], [ 13, 145, 115, 6, 146, 116 ], [ 14, 74, 46, 23, 75, 47 ], [ 44, 54, 24, 7, 55, 25 ], [ 59, 46, 16, 1, 47, 17 ], [ 12, 151, 121, 7, 152, 122 ], [ 12, 75, 47, 26, 76, 48 ], [ 39, 54, 24, 14, 55, 25 ], [ 22, 45, 15, 41, 46, 16 ], [ 6, 151, 121, 14, 152, 122 ], [ 6, 75, 47, 34, 76, 48 ], [ 46, 54, 24, 10, 55, 25 ], [ 2, 45, 15, 64, 46, 16 ], [ 17, 152, 122, 4, 153, 123 ], [ 29, 74, 46, 14, 75, 47 ], [ 49, 54, 24, 10, 55, 25 ], [ 24, 45, 15, 46, 46, 16 ], [ 4, 152, 122, 18, 153, 123 ], [ 13, 74, 46, 32, 75, 47 ], [ 48, 54, 24, 14, 55, 25 ], [ 42, 45, 15, 32, 46, 16 ], [ 20, 147, 117, 4, 148, 118 ], [ 40, 75, 47, 7, 76, 48 ], [ 43, 54, 24, 22, 55, 25 ], [ 10, 45, 15, 67, 46, 16 ], [ 19, 148, 118, 6, 149, 119 ], [ 18, 75, 47, 31, 76, 48 ], [ 34, 54, 24, 34, 55, 25 ], [ 20, 45, 15, 61, 46, 16 ] ];
    QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
      var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
      if (void 0 == rsBlock) throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
      var length = rsBlock.length / 3;
      var list = new Array();
      for (var _i15 = 0; _i15 < length; _i15++) {
        var count = rsBlock[3 * _i15 + 0];
        var totalCount = rsBlock[3 * _i15 + 1];
        var dataCount = rsBlock[3 * _i15 + 2];
        for (var j = 0; j < count; j++) list.push(new QRRSBlock(totalCount, dataCount));
      }
      return list;
    };
    QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {
      switch (errorCorrectLevel) {
       case QRErrorCorrectLevel.L:
        return QRRSBlock.RS_BLOCK_TABLE[4 * (typeNumber - 1) + 0];

       case QRErrorCorrectLevel.M:
        return QRRSBlock.RS_BLOCK_TABLE[4 * (typeNumber - 1) + 1];

       case QRErrorCorrectLevel.Q:
        return QRRSBlock.RS_BLOCK_TABLE[4 * (typeNumber - 1) + 2];

       case QRErrorCorrectLevel.H:
        return QRRSBlock.RS_BLOCK_TABLE[4 * (typeNumber - 1) + 3];

       default:
        return;
      }
    };
    function QRBitBuffer() {
      this.buffer = new Array();
      this.length = 0;
    }
    QRBitBuffer.prototype = {
      get: function get(index) {
        var bufIndex = Math.floor(index / 8);
        return 1 == (this.buffer[bufIndex] >>> 7 - index % 8 & 1);
      },
      put: function put(num, length) {
        for (var _i16 = 0; _i16 < length; _i16++) this.putBit(1 == (num >>> length - _i16 - 1 & 1));
      },
      getLengthInBits: function getLengthInBits() {
        return this.length;
      },
      putBit: function putBit(bit) {
        var bufIndex = Math.floor(this.length / 8);
        this.buffer.length <= bufIndex && this.buffer.push(0);
        bit && (this.buffer[bufIndex] |= 128 >>> this.length % 8);
        this.length++;
      }
    };
    var CQRCode = cc.Class({
      extends: cc.Graphics,
      properties: {
        string: {
          default: "Hello World!",
          notify: function notify(oldValue) {
            if (this.string === oldValue) return;
            this.setContent();
          }
        },
        backColor: {
          type: cc.Color,
          default: cc.Color.WHITE,
          notify: function notify() {
            this.setContent();
          }
        },
        foreColor: {
          type: cc.Color,
          default: cc.Color.BLACK,
          notify: function notify(old) {
            this.node.color = this.foreColor;
            this.setContent();
          }
        },
        margin: {
          type: cc.Float,
          default: 10,
          notify: function notify(old) {
            if (old === this.margin) return;
            this.setContent();
          }
        },
        _size: 200,
        size: {
          type: cc.Float,
          get: function get() {
            return this._size;
          },
          set: function set(value) {
            if (this._size === value) return;
            this.node.setContentSize(value, value);
            this.setContent();
            this._size = value;
          }
        }
      },
      onLoad: function onLoad() {
        this.node.setContentSize(this._size, this._size);
        this.setContent();
      },
      setContent: function setContent() {
        this.clear();
        this.fillColor = this.backColor;
        var width = this.node.width;
        var offsetX = -width * this.node.anchorX;
        var offsetY = -width * this.node.anchorY;
        this.rect(offsetX, offsetY, width, width);
        this.fill();
        this.close();
        var qrcode = new QRCode(-1, 2);
        qrcode.addData(this.string);
        qrcode.make();
        this.fillColor = this.foreColor;
        var size = width - 2 * this.margin;
        var num = qrcode.getModuleCount();
        var tileW = size / num;
        var tileH = size / num;
        var w = Math.ceil(tileW);
        var h = Math.ceil(tileH);
        for (var row = 0; row < num; row++) for (var col = 0; col < num; col++) if (qrcode.isDark(row, col)) {
          this.rect(offsetX + this.margin + col * tileW, offsetX + size - tileH - Math.round(row * tileH) + this.margin, w, h);
          this.fill();
        }
      }
    });
    cc.Class.Attr.setClassAttr(CQRCode, "lineWidth", "visible", false);
    cc.Class.Attr.setClassAttr(CQRCode, "lineJoin", "visible", false);
    cc.Class.Attr.setClassAttr(CQRCode, "lineCap", "visible", false);
    cc.Class.Attr.setClassAttr(CQRCode, "strokeColor", "visible", false);
    cc.Class.Attr.setClassAttr(CQRCode, "miterLimit", "visible", false);
    cc.Class.Attr.setClassAttr(CQRCode, "fillColor", "visible", false);
    module.exports = CQRCode;
    cc._RF.pop();
  }, {} ],
  ColorIndex: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "62e3cqW1KBDbIHA17XBVMp0", "ColorIndex");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        clickable: true,
        _index: 0,
        index: {
          type: cc.Integer,
          get: function get() {
            return this._index;
          },
          set: function set(value) {
            if (value === this._index || value > this.colors.length) return;
            this._index = value % this.colors.length;
            this.node.color = this.colors[this._index];
          }
        },
        colors: [ cc.Color ]
      },
      onLoad: function onLoad() {
        this.clickable && this.node.on(cc.Node.EventType.TOUCH_END, this.next, this);
      },
      next: function next() {
        this.index++;
      }
    });
    cc._RF.pop();
  }, {} ],
  ConfUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "88089Tgcn9D/JrTDc5eoxYj", "ConfUtil");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var ConfUtil = function() {
      function ConfUtil() {
        _classCallCheck(this, ConfUtil);
      }
      _createClass(ConfUtil, null, [ {
        key: "GetCityInfoById",
        value: function GetCityInfoById(cityId) {
          return conf.City[cityId] || null;
        }
      }, {
        key: "GetCarInfoByTypeId",
        value: function GetCarInfoByTypeId(typeId) {
          return conf.Car[typeId] || null;
        }
      } ]);
      return ConfUtil;
    }();
    exports["default"] = ConfUtil;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  DataManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "52dedr/1MxJt5xWu4ryglj8", "DataManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _NoticeCenter = require("../common/NoticeCenter");
    var _comFunc = require("../common/comFunc");
    var _AppConst = require("../define/AppConst");
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    window.headUrl = "https://wx.qlogo.cn/mmopen/vi_32/pBIaptYeKRuWSedSzxicvVhB8rJOEUQeLXLhUpWGFZkTvco5icLtg7gWMibbHGdV9QfhvArgW3cjA6TlQk4iadpTng/132";
    var _ = require("../common/lodash");
    var DataManager = function() {
      _createClass(DataManager, null, [ {
        key: "getInstance",
        value: function getInstance() {
          DataManager.shared || (DataManager.shared = new DataManager());
          return DataManager.shared;
        }
      } ]);
      function DataManager() {
        _classCallCheck(this, DataManager);
        this.wx_userInfo = {
          uid: _AppConst.AppConst.LOGIN_CODE,
          nickname: "\u795e\u79d8\u77ff\u5de5",
          avatar: headUrl,
          gender: 1,
          city: "taiyuan",
          province: "shanxi",
          union_id: "133333"
        };
        this.userInfo = {};
        this.parent_id = "";
        this.balance = 0;
        this.jewel = 0;
        this.coins = 0;
        this.title = "";
        this.per_sec_product = "";
        this.per_sec_offline = "";
        this.coins_add_type = "normal";
        this.remainTime = 0;
        this.luck_draw_num = 0;
        this.total_income = 0;
        this.today_money = 0;
        this.yesterday_income = 0;
        this.levelInfo = [];
        this.mineOpenCoins = [];
        this.is_effect_user = false;
        this.current_level = 0;
        this.apprentice_num = 0;
        this.disciple_num = 0;
        this.first_withdraw = true;
        this.second_withdraw = true;
        this.red_packet_level = 1;
        this.red_packet_income = 0;
        this.ordinary_treasure_num = 0;
        this.superior_treasure_num = 0;
        this.reward_jewel = 0;
        this.invite_id = "";
        this.phone = "";
        this.join_plan = true;
        this.join_advanced = true;
        this.total_thousand_income = 0;
        this.yesterday_thousand_income = 0;
        this.advanced_yesterday_income = 0;
        this.advanced_total_income = 0;
        this.is_effect_user = false;
        this.video_num = 0;
        this.is_first_chest = true;
        this.diffTime = 0;
        this.isLogin = false;
        this.rankInfo = {};
        this.loginInfo = {};
        this.guideStep = -1;
        this.wxShareImgs = [];
      }
      _createClass(DataManager, [ {
        key: "getWXUserInfo",
        value: function getWXUserInfo() {
          return this.wx_userInfo;
        }
      }, {
        key: "setWXUserInfo",
        value: function setWXUserInfo(info) {
          this.wx_userInfo.uid = info.openid || info.uid;
          this.wx_userInfo.nickname = info.nickname;
          this.wx_userInfo.avatar = info.headimgurl || info.avatar;
          this.wx_userInfo.gender = info.sex || info.gender;
          this.wx_userInfo.city = info.city;
          this.wx_userInfo.province = info.province;
          this.wx_userInfo.union_id = info.union_id || info.unionid;
          _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.get_wx_userInfo);
        }
      }, {
        key: "setUserInfo",
        value: function setUserInfo(key, value) {
          this.userInfo.hasOwnProperty(key) ? this.userInfo[key] = value : cc.error("error key in setUserInfo", key);
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo(key) {
          if (this.userInfo.hasOwnProperty(key)) return this.userInfo[key];
          cc.error("error key in setUserInfo", key);
        }
      }, {
        key: "openMine",
        value: function openMine(data) {
          this.levelInfo.push(data);
        }
      }, {
        key: "updateMine",
        value: function updateMine(data, index) {
          this.levelInfo[index] && (this.levelInfo[index] = data);
        }
      }, {
        key: "setDiffTime",
        value: function setDiffTime(serverTime) {
          this.diffTime = Date.now() - serverTime;
        }
      }, {
        key: "getWxShareImgs",
        value: function getWxShareImgs() {
          return this.wxShareImgs;
        }
      }, {
        key: "setWxShareImgs",
        value: function setWxShareImgs(imgs) {
          this.wxShareImgs = imgs;
        }
      }, {
        key: "setSceneTag",
        value: function setSceneTag(scene) {
          this.scene = scene;
        }
      }, {
        key: "getSceneTag",
        value: function getSceneTag() {
          return this.scene;
        }
      }, {
        key: "getGuideStep",
        value: function getGuideStep() {
          return this.guideStep;
        }
      }, {
        key: "setGuideStep",
        value: function setGuideStep(step) {
          this.guideStep = step;
        }
      }, {
        key: "onLogin",
        value: function onLogin(data) {
          var attr = data;
          this.setWXUserInfo(data);
          this.setInfo("balance", attr.balance);
          this.setInfo("jewel", attr.jewel);
          this.setInfo("is_effect_user", attr.is_effect_user);
          this.setInfo("current_level", attr.current_level);
          this.setInfo("title", attr.title);
          this.setInfo("apprentice_num", attr.apprentice_num);
          this.setInfo("disciple_num", attr.disciple_num);
          this.setInfo("first_withdraw", attr.first_withdraw);
          this.setInfo("red_packet_level", attr.red_packet_level);
          this.setInfo("red_packet_income", attr.red_packet_income);
          this.setInfo("ordinary_treasure_num", attr.ordinary_treasure_num);
          this.setInfo("superior_treasure_num", attr.superior_treasure_num);
          this.setInfo("reward_jewel", attr.reward_jewel);
          this.setInfo("yesterday_income", Number(attr.yesterday_income).toFixed(2));
          this.setInfo("luck_draw_num", attr.luck_draw_num);
          this.setInfo("total_income", Number(attr.total_income).toFixed(2));
          this.setInfo("invite_id", attr.invite_id);
          this.setInfo("phone", attr.phone);
          this.setInfo("join_plan", attr.join_plan);
          this.setInfo("join_advanced", attr.join_advanced);
          this.setInfo("total_thousand_income", attr.total_thousand_income);
          this.setInfo("yesterday_thousand_income", attr.yesterday_thousand_income);
          this.setInfo("advanced_yesterday_income", attr.advanced_yesterday_income);
          this.setInfo("advanced_total_income", attr.advanced_total_income);
          this.setInfo("is_effect_user", attr.is_effect_user);
          this.setInfo("first_withdraw", attr.first_withdraw);
          this.setInfo("second_withdraw", attr.second_withdraw);
          this.setInfo("video_num", attr.video_num);
          this.setInfo("is_first_chest", attr.is_first_chest);
          attr.isDouble ? this.setInfo("coins_add_type", "double") : this.setInfo("coins_add_type", "normal");
          this.isLogin = true;
        }
      }, {
        key: "setFloorInfo",
        value: function setFloorInfo(data) {
          this.setInfo("coins", data.coins);
          this.setInfo("per_sec_product", data.per_sec_product);
          this.setInfo("per_sec_offline", data.per_sec_offline || 0);
          this.setInfo("remainTime", data.remainTime);
          this.setInfo("levelInfo", data.levelInfo);
        }
      }, {
        key: "getID",
        value: function getID() {
          return this.userInfo.uid;
        }
      }, {
        key: "getLoginState",
        value: function getLoginState() {
          return this.isLogin;
        }
      }, {
        key: "setLoginInfo",
        value: function setLoginInfo(data) {
          this.loginInfo = data;
        }
      }, {
        key: "getLoginInfo",
        value: function getLoginInfo() {
          return this.loginInfo;
        }
      }, {
        key: "setInfo",
        value: function setInfo(item, info) {
          var isChange = info != this[item];
          this[item] = info;
          switch (item) {
           case "per_sec_product":
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.per_sec_product);
            break;

           case "coins_add_type":
            isChange && _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.coin_add_speed_change);
            break;

           case "coins":
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.update_coins);
            break;

           case "luck_draw_num":
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.luck_draw_num_update);
            break;

           case "jewel":
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.update_jewel);
            break;

           case "yesterday_income":
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.update_yesterday_income);
            break;

           case "video_num":
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.video_count_update);
            break;

           case "balance":
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.update_balance);
          }
        }
      }, {
        key: "getInfo",
        value: function getInfo(item) {
          if (this.hasOwnProperty(item)) return this[item];
        }
      }, {
        key: "addInfo",
        value: function addInfo(item, value) {
          if (this.hasOwnProperty(item) && "number" == typeof this[item]) {
            this[item] = this[item] + value;
            "money" == item && _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.update_coins);
          } else console.log("invalid data item", item);
        }
      }, {
        key: "checkGold",
        value: function checkGold(needGold) {
          if (_comFunc.comFunc.compareBigNum(this.coins, needGold)) return true;
          return false;
        }
      }, {
        key: "localSetItem",
        value: function localSetItem(key, value) {
          cc.sys.localStorage.setItem(key, value);
        }
      }, {
        key: "localGetItem",
        value: function localGetItem(key) {
          var value = cc.sys.localStorage.getItem(key);
          if (!value) return null;
          console.log(value);
          "true" == value ? value = true : "false" == value ? value = false : isNaN(value) || (value = Number(value));
          return value;
        }
      }, {
        key: "localRemoveItem",
        value: function localRemoveItem(key) {
          cc.sys.localStorage.removeItem(key);
        }
      } ]);
      return DataManager;
    }();
    exports["default"] = DataManager;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../common/NoticeCenter": "NoticeCenter",
    "../common/comFunc": "comFunc",
    "../common/lodash": "lodash",
    "../define/AppConst": "AppConst"
  } ],
  DragToTarget: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e8b6NW6MxCDqAbosgqAfqs", "DragToTarget");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        target: cc.Node
      },
      onLoad: function onLoad() {
        this._oldPosition = this.node.position;
        this._oldParent = this.node.parent;
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
      },
      _onTouchStart: function _onTouchStart(touchEvent) {
        var location = touchEvent.getLocation();
        this._offset = this.node.convertToNodeSpaceAR(location);
        if (this.node.parent === this._oldParent) return;
        var point = this._oldParent.convertToNodeSpaceAR(location);
        this.node.parent = this._oldParent;
        this.node.position = point.sub(this._offset);
      },
      _onTouchMove: function _onTouchMove(touchEvent) {
        var location = touchEvent.getLocation();
        this.node.position = this.node.parent.convertToNodeSpaceAR(location).sub(this._offset);
        cc.log(this.node.position);
      },
      _checkOnTarget: function _checkOnTarget(location) {
        var rect = this.target.getBoundingBox();
        var point = this.target.parent.convertToNodeSpaceAR(location);
        return !!rect.contains(point);
      },
      _onTouchEnd: function _onTouchEnd(touchEvent) {
        if (!this.target) return;
        var location = touchEvent.getLocation();
        if (this._checkOnTarget(location)) {
          var point = this.target.convertToNodeSpaceAR(location);
          this.node.position = point;
          this.node.parent = this.target;
          return;
        }
        this.node.position = this._oldPosition;
      }
    });
    cc._RF.pop();
  }, {} ],
  Dragable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea6e3IP1jdPq7D53UHHoRh9", "Dragable");
    "use strict";
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        cc.log("onload");
      },
      start: function start() {
        cc.log("start");
      },
      onEnable: function onEnable() {
        cc.log("enable");
      },
      _onTouchMove: function _onTouchMove(touchEvent) {
        var location = touchEvent.getLocation();
        this.node.position = this.node.parent.convertToNodeSpaceAR(location);
      }
    });
    cc._RF.pop();
  }, {} ],
  HotUpdate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9cdd7WiJwJJlLmp79G72GZN", "HotUpdate");
    "use strict";
    var _AppUtil = _interopRequireDefault(require("../utility/AppUtil"));
    var _AppConst = require("../define/AppConst");
    var _comFunc = require("../common/comFunc");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        info: cc.Label,
        manifestUrl: {
          type: cc.Asset,
          default: null
        },
        updateUI: cc.Node,
        _updating: false,
        _canRetry: false,
        _storagePath: ""
      },
      checkCb: function checkCb(event) {
        cc.log("Code: " + event.getEventCode());
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          this.info.string = "No local manifest file found, hot update skipped.";
          break;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
          this.info.string = "Fail to download manifest file, hot update skipped.";
          break;

         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
          this.info.string = "\u60a8\u5df2\u7ecf\u662f\u6700\u65b0\u7684\u7248\u672c\u4e86";
          break;

         case jsb.EventAssetsManager.NEW_VERSION_FOUND:
          this.info.string = "\u6709\u65b0\u7684\u7248\u672c\u9700\u8981\u66f4\u65b0";
          this.show();
          break;

         default:
          return;
        }
        this._am.setEventCallback(null);
        this._checkListener = null;
        this._updating = false;
      },
      updateCb: function updateCb(event) {
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          this.info.string = "No local manifest file found, hot update skipped.";
          failed = true;
          break;

         case jsb.EventAssetsManager.UPDATE_PROGRESSION:
          this.info.string = "\u6587\u4ef6\u66f4\u65b0:" + event.getDownloadedFiles() + " / " + event.getTotalFiles();
          var msg = event.getMessage();
          msg;
          break;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
          this.info.string = "Fail to download manifest file, hot update skipped.";
          failed = true;
          break;

         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
          this.info.string = "\u60a8\u5df2\u7ecf\u662f\u6700\u65b0\u7684\u7248\u672c\u4e86";
          this.node.active = false;
          failed = true;
          break;

         case jsb.EventAssetsManager.UPDATE_FINISHED:
          this.info.string = "\u66f4\u65b0\u5b8c\u6210\uff0c\u91cd\u65b0\u542f\u52a8" + event.getMessage();
          needRestart = true;
          break;

         case jsb.EventAssetsManager.UPDATE_FAILED:
          this.info.string = "\u66f4\u65b0\u5931\u8d25. " + event.getMessage();
          this._updating = false;
          this._canRetry = true;
          break;

         case jsb.EventAssetsManager.ERROR_UPDATING:
          this.info.string = "Asset update error: " + event.getAssetId() + ", " + event.getMessage();
          break;

         case jsb.EventAssetsManager.ERROR_DECOMPRESS:
          this.info.string = event.getMessage();
        }
        if (failed) {
          this._am.setEventCallback(null);
          this._updateListener = null;
          this._updating = false;
          _AppUtil["default"].showMessage("\u66f4\u65b0\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u4e0b\u8f7d\u6700\u65b0\u5b89\u88c5\u5305\uff01");
          setTimeout(function() {
            cc.sys.openURL(_AppConst.AppConst.loadUrl);
            cc.game.end();
          }, 2e3);
        }
        if (needRestart) {
          setTimeout(function() {
            cc.game.restart();
          }, 500);
          this._am.setEventCallback(null);
          this._updateListener = null;
          var searchPaths = jsb.fileUtils.getSearchPaths();
          var newPaths = this._am.getLocalManifest().getSearchPaths();
          console.log(JSON.stringify(newPaths));
          Array.prototype.unshift.apply(searchPaths, newPaths);
          cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(searchPaths));
          console.log("searchPaths", searchPaths);
          jsb.fileUtils.setSearchPaths(searchPaths);
          this.setVersion();
          cc.audioEngine.stopAll();
        }
      },
      loadCustomManifest: function loadCustomManifest() {
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
          var manifest = new jsb.Manifest(customManifestStr, this._storagePath);
          this._am.loadLocalManifest(manifest, this._storagePath);
          this.info.string = "Using custom manifest";
        }
      },
      retry: function retry() {
        if (!this._updating && this._canRetry) {
          this._canRetry = false;
          this.info.string = "Retry failed Assets...";
          this._am.downloadFailedAssets();
        }
      },
      checkUpdate: function checkUpdate() {
        if (this._updating) {
          this.info.string = "Checking or updating ...";
          return;
        }
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
          var url = this.manifestUrl.nativeUrl;
          cc.loader.md5Pipe && (url = cc.loader.md5Pipe.transformURL(url));
          this._am.loadLocalManifest(url);
        }
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
          this.info.string = "Failed to load local manifest ...";
          return;
        }
        this._am.setEventCallback(this.checkCb.bind(this));
        this.setVersion();
        this._am.checkUpdate();
        this._updating = true;
      },
      setVersion: function setVersion() {
        var version = this._am.getLocalManifest().getVersion();
        cc.sys.localStorage.setItem("currentVersion", version);
        console.log("/////=======>>>>>\u5f53\u524d\u7248\u672c\u53f7\uff1a", version);
        var v = _comFunc.comFunc.compareVersion(_AppConst.AppConst.REMOTE_VERSION, version);
        v > 1 && _AppUtil["default"].showModal("\u6709\u65b0\u7684\u7248\u672c\u9700\u8981\u66f4\u65b0", function() {
          cc.sys.localStorage.removeItem("currentVersion");
          cc.sys.openURL(download_url);
          cc.game.end();
        }, null, 1);
      },
      hotUpdate: function hotUpdate() {
        if (this._am && !this._updating) {
          this._am.setEventCallback(this.updateCb.bind(this));
          if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            var url = this.manifestUrl.nativeUrl;
            cc.loader.md5Pipe && (url = cc.loader.md5Pipe.transformURL(url));
            this._am.loadLocalManifest(url);
          }
          this._failCount = 0;
          this._am.update();
          this._updating = true;
        }
      },
      show: function show() {
        false === this.updateUI.active && (this.updateUI.active = true);
      },
      changeScene: function changeScene() {
        cc.director.loadScene("loginScene");
      },
      onLoad: function onLoad() {
        cc.log("\u70ed\u66f4\u65b0\u521d\u59cb\u5316");
        if (!cc.sys.isNative) return;
        this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "blackjack-remote-asset";
        cc.log("Storage path for remote asset : " + this._storagePath);
        this.versionCompareHandle = function(versionA, versionB) {
          cc.log("JS Custom Version Compare: version A is " + versionA + ", version B is " + versionB);
          var vA = versionA.split(".");
          var vB = versionB.split(".");
          for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i] || 0);
            if (a === b) continue;
            return a - b;
          }
          return vB.length > vA.length ? -1 : 0;
        };
        this._am = new jsb.AssetsManager("", this._storagePath, this.versionCompareHandle);
        var panel = this.info;
        this._am.setVerifyCallback(function(path, asset) {
          var compressed = asset.compressed;
          var expectedMD5 = asset.md5;
          var relativePath = asset.path;
          var size = asset.size;
          if (compressed) {
            panel.string = "Verification passed : " + relativePath;
            return true;
          }
          panel.string = "Verification passed : " + relativePath + " (" + expectedMD5 + ")";
          return true;
        });
        this.info.string = "Hot update is ready, please check or directly update.";
        if (cc.sys.os === cc.sys.OS_ANDROID) {
          this._am.setMaxConcurrentTask(2);
          this.info.string = "Max concurrent tasks count have been limited to 2";
        }
        this.checkUpdate();
      },
      onDestroy: function onDestroy() {
        if (this._updateListener) {
          this._am.setEventCallback(null);
          this._updateListener = null;
        }
      },
      onClickCancel: function onClickCancel() {
        cc.game.end();
      }
    });
    cc._RF.pop();
  }, {
    "../common/comFunc": "comFunc",
    "../define/AppConst": "AppConst",
    "../utility/AppUtil": "AppUtil"
  } ],
  HttpClient: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d2d2yVeR9H9Kys/72ba5DJ", "HttpClient");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _AppUtil = _interopRequireDefault(require("../utility/AppUtil"));
    var _AppConst = require("../define/AppConst");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var CommandVo = function CommandVo(action, params) {
      _classCallCheck(this, CommandVo);
      this.action = "";
      this.data = "";
      this.action = action;
      this.data = JSON.stringify(params);
    };
    var HttpClient = function() {
      function HttpClient() {
        _classCallCheck(this, HttpClient);
      }
      _createClass(HttpClient, null, [ {
        key: "send",
        value: function send(url, data, callBack, target) {
          var js = JSON.stringify(data);
          var request = cc.loader.getXMLHttpRequest();
          request.timeout = 1e4;
          var URL = _AppConst.AppConst.HTTP_API;
          url && (URL = url);
          request.open("POST", URL, true);
          request.addEventListener("error", onError);
          request.addEventListener("abort", onError);
          request.setRequestHeader("Content-Type", "application/json");
          request.onreadystatechange = function() {
            if (4 === request.readyState && request.status >= 200 && request.status < 300) {
              console.log("http res(" + request.responseText.length + "):" + request.responseText);
              try {
                onComplete(request.responseText);
              } catch (e) {
                console.log("err:" + e);
              }
            }
          };
          request.ontimeout = function(e) {
            console.log(action, "\u8bf7\u6c42\u8d85\u65f6");
          };
          request.send(js);
          function onComplete(responseText) {
            var data = JSON.parse(responseText);
            var code = data["errcode"];
            code || null != callBack && callBack.call(target, data);
          }
          function onError(evt) {
            _AppUtil["default"].showMessage("\u8bf7\u6c42\u63a5\u53e3\u5931\u8d25\uff1aonError");
          }
        }
      }, {
        key: "Get",
        value: function Get(url, callBack, target) {
          console.log("HTTP GET:", url);
          var request = cc.loader.getXMLHttpRequest();
          request.timeout = 1e4;
          request.open("GET", url, true);
          request.addEventListener("error", onError);
          request.addEventListener("abort", onError);
          request.setRequestHeader("Content-Type", "application/json");
          request.onreadystatechange = function() {
            if (4 === request.readyState && request.status >= 200 && request.status < 300) {
              console.log("http res(" + request.responseText.length + "):" + request.responseText);
              try {
                onComplete(request.responseText);
              } catch (e) {
                console.log("err:" + e);
              }
            }
          };
          request.ontimeout = function(e) {
            null != callBack && callBack.call(target, {
              error: true
            });
            console.log(action, "\u8bf7\u6c42\u8d85\u65f6");
          };
          request.send(null);
          function onComplete(responseText) {
            var data = JSON.parse(responseText);
            var code = data["errcode"];
            code || null != callBack && callBack.call(target, data);
          }
          function onError(evt) {
            _AppUtil["default"].showMessage("\u8bf7\u6c42\u63a5\u53e3\u5931\u8d25\uff1aonError" + JSON.stringify(evt));
            null != callBack && callBack.call(target, {
              error: true
            });
          }
        }
      }, {
        key: "sendLogin",
        value: function sendLogin(login, user, sysinfo) {
          var data = {
            code: login.code,
            nickname: user.nickName,
            gender: user.gender,
            language: user.language,
            city: user.city,
            province: user.province,
            avatarUrl: user.avatarUrl,
            brand: sysinfo.brand,
            model: sysinfo.model,
            version: sysinfo.version,
            system: sysinfo.system,
            platform: sysinfo.platform
          };
          HttpClient.send("user", "login", data, onData);
          function onData(newdata) {}
        }
      } ]);
      return HttpClient;
    }();
    exports["default"] = HttpClient;
    HttpClient.cookie = "";
    HttpClient.REQUEST_TIMEOUT = 1;
    HttpClient._timerId = 1;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../define/AppConst": "AppConst",
    "../utility/AppUtil": "AppUtil"
  } ],
  LinkURL: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "43b9fvYtTVO6ZYwW4gZT7+u", "LinkURL");
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function _typeof(obj) {
        return typeof obj;
      } : function _typeof(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      return _typeof(obj);
    }
    var MapType = cc.Class({
      name: "MapType",
      properties: {
        key: "",
        value: ""
      }
    });
    cc.Class({
      extends: cc.Component,
      properties: {
        url: "",
        params: [ MapType ]
      },
      open: function open(sender) {
        var url;
        "string" === typeof sender ? url = sender : "object" === _typeof(sender) && (url = sender.string || this.url);
        if (!url) {
          cc.warn("url is empty");
          return;
        }
        window.location.href = url;
      }
    });
    cc._RF.pop();
  }, {} ],
  ListItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc041bjrptJ/qKMh2s7xzwB", "ListItem");
    "use strict";
    var SelectedType = cc.Enum({
      NONE: 0,
      TOGGLE: 1,
      SWITCH: 2
    });
    cc.Class({
      editor: {
        disallowMultiple: false,
        menu: "\u81ea\u5b9a\u4e49\u7ec4\u4ef6/List Item",
        executionOrder: -5001
      },
      extends: cc.Component,
      properties: {
        icon: {
          default: null,
          type: cc.Sprite
        },
        title: cc.Node,
        selectedMode: {
          default: SelectedType.NONE,
          type: SelectedType,
          tooltip: false
        },
        selectedFlag: {
          default: null,
          type: cc.Node,
          visible: function visible() {
            var bool = this.selectedMode > 0;
            bool || (this.selectedFlag = null);
            return bool;
          }
        },
        selectedSpriteFrame: {
          default: null,
          type: cc.SpriteFrame,
          visible: function visible() {
            var bool = this.selectedMode == SelectedType.SWITCH;
            bool || (this.selectedSpriteFrame = null);
            return bool;
          }
        },
        adaptiveSize: {
          default: false,
          tooltip: false
        },
        _selected: false,
        selected: {
          visible: false,
          get: function get() {
            return this._selected;
          },
          set: function set(val) {
            this._selected = val;
            if (!this.selectedFlag) return;
            switch (this.selectedMode) {
             case SelectedType.TOGGLE:
              this.selectedFlag.active = val;
              break;

             case SelectedType.SWITCH:
              this.selectedFlag.spriteFrame = val ? this.selectedSpriteFrame : this._unselectedSpriteFrame;
            }
          }
        },
        _btnCom: null,
        btnCom: {
          visible: false,
          get: function get() {
            this._btnCom || (this._btnCom = this.node.getComponent(cc.Button));
            return this._btnCom;
          }
        }
      },
      onLoad: function onLoad() {
        if (this.title) {
          var com = this.title.getComponent(cc.Label);
          com || (com = this.title.getComponent(cc.RichText));
          this.title = com;
        }
        if (this.selectedMode == SelectedType.SWITCH) {
          var _com = this.selectedFlag.getComponent(cc.Sprite);
          this.selectedFlag = _com;
          this._unselectedSpriteFrame = _com.spriteFrame;
        }
      },
      onDestroy: function onDestroy() {
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
      },
      _registerEvent: function _registerEvent() {
        if (!this.eventReg) {
          this.btnCom && this._list.selectedMode > 0 && this.btnCom.clickEvents.unshift(this.createEvt(this, "onClickThis"));
          this.adaptiveSize && this.node.on(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
          this.eventReg = true;
        }
      },
      _onSizeChange: function _onSizeChange() {
        this._list._onItemAdaptive(this.node);
      },
      createEvt: function createEvt(component, handlerName, node) {
        if (!component.isValid) return;
        component.comName = component.comName || component.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, "");
        var evt = new cc.Component.EventHandler();
        evt.target = node || component.node;
        evt.component = component.comName;
        evt.handler = handlerName;
        return evt;
      },
      showAni: function showAni(aniType, callFunc, del) {
        var _this = this;
        var acts;
        switch (aniType) {
         case 0:
          acts = [ new cc.scaleTo(.2, .7), new cc.moveBy(.3, 0, 2 * this.node.height) ];
          break;

         case 1:
          acts = [ new cc.scaleTo(.2, .7), new cc.moveBy(.3, 2 * this.node.width, 0) ];
          break;

         case 2:
          acts = [ new cc.scaleTo(.2, .7), new cc.moveBy(.3, 0, -2 * this.node.height) ];
          break;

         case 3:
          acts = [ new cc.scaleTo(.2, .7), new cc.moveBy(.3, -2 * this.node.width, 0) ];
          break;

         default:
          acts = [ new cc.scaleTo(.3, .1) ];
        }
        (callFunc || del) && acts.push(new cc.CallFunc(function() {
          if (del) {
            _this._list._delSingleItem(_this.node);
            for (var n = _this._list.displayData.length - 1; n >= 0; n--) if (_this._list.displayData[n].listId == _this.node._listId) {
              _this._list.displayData.splice(n, 1);
              break;
            }
          }
          callFunc();
        }));
        this.node.runAction(new cc.Sequence(acts));
      },
      onClickThis: function onClickThis() {
        this._list.selectedId = this.node._listId;
      }
    });
    cc._RF.pop();
  }, {} ],
  List: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9c21O6GDpGhJScDrfdtd4i", "List");
    "use strict";
    var TemplateType = cc.Enum({
      NODE: 1,
      PREFAB: 2
    });
    var SlideType = cc.Enum({
      NORMAL: 1,
      ADHERING: 2,
      PAGE: 3
    });
    var SelectedType = cc.Enum({
      NONE: 0,
      SINGLE: 1,
      MULT: 2
    });
    var ListItem = require("ListItem");
    cc.Class({
      extends: cc.Component,
      editor: {
        disallowMultiple: false,
        menu: "\u81ea\u5b9a\u4e49\u7ec4\u4ef6/List",
        requireComponent: cc.ScrollView,
        executionOrder: -5e3
      },
      properties: {
        templateType: {
          default: TemplateType.NODE,
          type: TemplateType
        },
        tmpNode: {
          default: null,
          type: cc.Node,
          tooltip: false,
          visible: function visible() {
            var bool = this.templateType == TemplateType.NODE;
            bool || (this.tmpNode = null);
            return bool;
          }
        },
        tmpPrefab: {
          default: null,
          type: cc.Prefab,
          tooltip: false,
          visible: function visible() {
            var bool = this.templateType == TemplateType.PREFAB;
            bool || (this.tmpPrefab = null);
            return bool;
          }
        },
        _slideMode: 1,
        slideMode: {
          type: SlideType,
          tooltip: false,
          get: function get() {
            return this._slideMode;
          },
          set: function set(val) {
            null != val && (this._slideMode = val);
          }
        },
        pageDistance: {
          default: .3,
          type: cc.Float,
          range: [ 0, 1, .1 ],
          tooltip: false,
          slide: true,
          visible: function visible() {
            return this._slideMode == SlideType.PAGE;
          }
        },
        pageChangeEvent: {
          default: null,
          type: cc.Component.EventHandler,
          tooltip: false,
          visible: function visible() {
            var bool = this._slideMode == SlideType.PAGE;
            bool || (this.pageChangeEvent = null);
            return bool;
          }
        },
        _virtual: true,
        virtual: {
          tooltip: false,
          get: function get() {
            return this._virtual;
          },
          set: function set(val) {
            null != val && (this._virtual = val);
            (true, 0 != this._numItems) && this._onScrolling();
          }
        },
        cyclic: {
          default: false,
          tooltip: false,
          visible: function visible() {
            var val = this.virtual && this.slideMode == SlideType.NORMAL;
            val || (this.cyclic = false);
            return val;
          }
        },
        lackCenter: {
          default: false,
          tooltip: false,
          visible: function visible() {
            return this.virtual;
          }
        },
        lackSlide: {
          default: false,
          tooltip: false,
          visible: function visible() {
            var val = this.virtual && !this.lackCenter;
            val || (this.lackSlide = false);
            return val;
          }
        },
        _updateRate: 0,
        updateRate: {
          type: cc.Integer,
          range: [ 0, 6, 1 ],
          tooltip: false,
          slide: true,
          get: function get() {
            return this._updateRate;
          },
          set: function set(val) {
            val >= 0 && val <= 6 && (this._updateRate = val);
          }
        },
        frameByFrameRenderNum: {
          default: 0,
          type: cc.Integer,
          range: [ 0, 12, 1 ],
          tooltip: false,
          slide: true
        },
        renderEvent: {
          default: null,
          type: cc.Component.EventHandler,
          tooltip: false
        },
        selectedMode: {
          default: SelectedType.NONE,
          type: SelectedType,
          tooltip: false
        },
        repeatEventSingle: {
          default: false,
          tooltip: false,
          visible: function visible() {
            return this.selectedMode == SelectedType.SINGLE;
          }
        },
        selectedEvent: {
          default: null,
          type: cc.Component.EventHandler,
          tooltip: false,
          visible: function visible() {
            var bool = this.selectedMode > 0;
            bool || (this.selectedEvent = null);
            return bool;
          }
        },
        _selectedId: -1,
        selectedId: {
          visible: false,
          get: function get() {
            return this._selectedId;
          },
          set: function set(val) {
            var t = this;
            var item;
            switch (t.selectedMode) {
             case SelectedType.SINGLE:
              if (!t.repeatEventSingle && val == t._selectedId) return;
              item = t.getItemByListId(val);
              t._selectedId >= 0 ? t._lastSelectedId = t._selectedId : t._lastSelectedId = null;
              t._selectedId = val;
              item && (item.listItem.selected = true);
              if (t._lastSelectedId >= 0 && t._lastSelectedId != t._selectedId) {
                var lastItem = t.getItemByListId(t._lastSelectedId);
                lastItem && (lastItem.listItem.selected = false);
              }
              t.selectedEvent && cc.Component.EventHandler.emitEvents([ t.selectedEvent ], item, val % this._actualNumItems, null == t._lastSelectedId ? null : t._lastSelectedId % this._actualNumItems);
              break;

             case SelectedType.MULT:
              item = t.getItemByListId(val);
              if (!item) return;
              t._selectedId >= 0 && (t._lastSelectedId = t._selectedId);
              t._selectedId = val;
              var bool = !item.listItem.selected;
              item.listItem.selected = bool;
              var sub = t.multSelected.indexOf(val);
              bool && sub < 0 ? t.multSelected.push(val) : !bool && sub >= 0 && t.multSelected.splice(sub, 1);
              t.selectedEvent && cc.Component.EventHandler.emitEvents([ t.selectedEvent ], item, val % this._actualNumItems, null == t._lastSelectedId ? null : t._lastSelectedId % this._actualNumItems, bool);
            }
          }
        },
        _numItems: {
          default: 0,
          serializable: false
        },
        numItems: {
          visible: false,
          get: function get() {
            return this._actualNumItems;
          },
          set: function set(val) {
            var t = this;
            if (!t.checkInited()) return;
            if (null == val || val < 0) {
              cc.error("numItems set the wrong::", val);
              return;
            }
            t._actualNumItems = t._numItems = val;
            t._forceUpdate = true;
            if (t._virtual) {
              t._resizeContent();
              t.cyclic && (t._numItems = t._cyclicNum * t._numItems);
              t._onScrolling();
              t.frameByFrameRenderNum || t.slideMode != SlideType.PAGE || (t.curPageNum = t.nearestListId);
            } else {
              var layout = t.content.getComponent(cc.Layout);
              layout && (layout.enabled = true);
              t._delRedundantItem();
              t.firstListId = 0;
              if (t.frameByFrameRenderNum > 0) {
                var len = t.frameByFrameRenderNum > t._numItems ? t._numItems : t.frameByFrameRenderNum;
                for (var n = 0; n < len; n++) t._createOrUpdateItem2(n);
                if (t.frameByFrameRenderNum < t._numItems) {
                  t._updateCounter = t.frameByFrameRenderNum;
                  t._updateDone = false;
                }
              } else {
                for (var _n = 0; _n < val; _n++) t._createOrUpdateItem2(_n);
                t.displayItemNum = val;
              }
            }
          }
        }
      },
      onLoad: function onLoad() {
        this._init();
      },
      onDestroy: function onDestroy() {
        var t = this;
        t._itemTmp && t._itemTmp.isValid && t._itemTmp.destroy();
        t.tmpNode && t.tmpNode.isValid && t.tmpNode.destroy();
        while (t._pool.size()) {
          var node = t._pool.get();
          node.destroy();
        }
      },
      onEnable: function onEnable() {
        this._registerEvent();
        this._init();
      },
      onDisable: function onDisable() {
        this._unregisterEvent();
      },
      _registerEvent: function _registerEvent() {
        var t = this;
        t.node.on(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, true);
        t.node.on("touch-up", t._onTouchUp, t, true);
        t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, true);
        t.node.on("scroll-began", t._onScrollBegan, t, true);
        t.node.on("scroll-ended", t._onScrollEnded, t, true);
        t.node.on("scrolling", t._onScrolling, t, true);
        t.node.on(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
      },
      _unregisterEvent: function _unregisterEvent() {
        var t = this;
        t.node.off(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, true);
        t.node.off("touch-up", t._onTouchUp, t, true);
        t.node.off(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, true);
        t.node.off("scroll-began", t._onScrollBegan, t, true);
        t.node.off("scroll-ended", t._onScrollEnded, t, true);
        t.node.off("scrolling", t._onScrolling, t, true);
        t.node.off(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
      },
      _init: function _init() {
        var t = this;
        if (t._inited) return;
        t._scrollView = t.node.getComponent(cc.ScrollView);
        t.content = t._scrollView.content;
        if (!t.content) {
          cc.error(t.node.name + "'s cc.ScrollView unset content!");
          return;
        }
        t._layout = t.content.getComponent(cc.Layout);
        t._align = t._layout.type;
        t._resizeMode = t._layout.resizeMode;
        t._startAxis = t._layout.startAxis;
        t._topGap = t._layout.paddingTop;
        t._rightGap = t._layout.paddingRight;
        t._bottomGap = t._layout.paddingBottom;
        t._leftGap = t._layout.paddingLeft;
        t._columnGap = t._layout.spacingX;
        t._lineGap = t._layout.spacingY;
        t._colLineNum;
        t._verticalDir = t._layout.verticalDirection;
        t._horizontalDir = t._layout.horizontalDirection;
        t.setTemplateItem(cc.instantiate(t.templateType == TemplateType.PREFAB ? t.tmpPrefab : t.tmpNode));
        if (t._slideMode == SlideType.ADHERING || t._slideMode == SlideType.PAGE) {
          t._scrollView.inertia = false;
          t._scrollView._onMouseWheel = function() {
            return;
          };
        }
        t.virtual || (t.lackCenter = false);
        t._lastDisplayData = [];
        t.displayData = [];
        t._pool = new cc.NodePool();
        t._forceUpdate = false;
        t._updateCounter = 0;
        t._updateDone = true;
        t.curPageNum = 0;
        if (t.cyclic) {
          t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t);
          t._scrollView._startBounceBackIfNeeded = function() {
            return false;
          };
        }
        switch (t._align) {
         case cc.Layout.Type.HORIZONTAL:
          switch (t._horizontalDir) {
           case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
            t._alignCalcType = 1;
            break;

           case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
            t._alignCalcType = 2;
          }
          break;

         case cc.Layout.Type.VERTICAL:
          switch (t._verticalDir) {
           case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
            t._alignCalcType = 3;
            break;

           case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
            t._alignCalcType = 4;
          }
          break;

         case cc.Layout.Type.GRID:
          switch (t._startAxis) {
           case cc.Layout.AxisDirection.HORIZONTAL:
            switch (t._verticalDir) {
             case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
              t._alignCalcType = 3;
              break;

             case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
              t._alignCalcType = 4;
            }
            break;

           case cc.Layout.AxisDirection.VERTICAL:
            switch (t._horizontalDir) {
             case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
              t._alignCalcType = 1;
              break;

             case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
              t._alignCalcType = 2;
            }
          }
        }
        t.content.removeAllChildren();
        t._inited = true;
      },
      _processAutoScrolling: function _processAutoScrolling(dt) {
        var brakingFactor = 1;
        this._scrollView._autoScrollAccumulatedTime += dt * (1 / brakingFactor);
        var percentage = Math.min(1, this._scrollView._autoScrollAccumulatedTime / this._scrollView._autoScrollTotalTime);
        if (this._scrollView._autoScrollAttenuate) {
          var time = percentage - 1;
          percentage = time * time * time * time * time + 1;
        }
        var newPosition = this._scrollView._autoScrollStartPosition.add(this._scrollView._autoScrollTargetDelta.mul(percentage));
        var EPSILON = this._scrollView.getScrollEndedEventTiming();
        var reachedEnd = Math.abs(percentage - 1) <= EPSILON;
        var fireEvent = Math.abs(percentage - 1) <= this._scrollView.getScrollEndedEventTiming();
        if (fireEvent && !this._scrollView._isScrollEndedWithThresholdEventFired) {
          this._scrollView._dispatchEvent("scroll-ended-with-threshold");
          this._scrollView._isScrollEndedWithThresholdEventFired = true;
        }
        reachedEnd && (this._scrollView._autoScrolling = false);
        var deltaMove = newPosition.sub(this._scrollView.getContentPosition());
        this._scrollView._moveContent(this._scrollView._clampDelta(deltaMove), reachedEnd);
        this._scrollView._dispatchEvent("scrolling");
        if (!this._scrollView._autoScrolling) {
          this._scrollView._isBouncing = false;
          this._scrollView._scrolling = false;
          this._scrollView._dispatchEvent("scroll-ended");
        }
      },
      setTemplateItem: function setTemplateItem(item) {
        if (!item) return;
        var t = this;
        t._itemTmp = item;
        t._resizeMode == cc.Layout.ResizeMode.CHILDREN ? t._itemSize = t._layout.cellSize : t._itemSize = new cc.size(item.width, item.height);
        var com = item.getComponent(ListItem);
        var remove = false;
        com || (remove = true);
        remove && (t.selectedMode = SelectedType.NONE);
        com = item.getComponent(cc.Widget);
        com && com.enabled && (t._needUpdateWidget = true);
        t.selectedMode == SelectedType.MULT && (t.multSelected = []);
        switch (t._align) {
         case cc.Layout.Type.HORIZONTAL:
          t._colLineNum = 1;
          t._sizeType = false;
          break;

         case cc.Layout.Type.VERTICAL:
          t._colLineNum = 1;
          t._sizeType = true;
          break;

         case cc.Layout.Type.GRID:
          switch (t._startAxis) {
           case cc.Layout.AxisDirection.HORIZONTAL:
            var trimW = t.content.width - t._leftGap - t._rightGap;
            t._colLineNum = Math.floor((trimW + t._columnGap) / (t._itemSize.width + t._columnGap));
            t._sizeType = true;
            break;

           case cc.Layout.AxisDirection.VERTICAL:
            var trimH = t.content.height - t._topGap - t._bottomGap;
            t._colLineNum = Math.floor((trimH + t._lineGap) / (t._itemSize.height + t._lineGap));
            t._sizeType = false;
          }
        }
      },
      checkInited: function checkInited(printLog) {
        printLog = null == printLog || printLog;
        if (!this._inited) {
          printLog && cc.error("List initialization not completed!");
          return false;
        }
        return true;
      },
      _resizeContent: function _resizeContent() {
        var t = this;
        var result;
        switch (t._align) {
         case cc.Layout.Type.HORIZONTAL:
          if (t._customSize) {
            var fixed = t._getFixedSize();
            result = t._leftGap + fixed.val + t._itemSize.width * (t._numItems - fixed.count) + t._columnGap * (t._numItems - 1) + t._rightGap;
          } else result = t._leftGap + t._itemSize.width * t._numItems + t._columnGap * (t._numItems - 1) + t._rightGap;
          break;

         case cc.Layout.Type.VERTICAL:
          if (t._customSize) {
            var _fixed = t._getFixedSize();
            result = t._topGap + _fixed.val + t._itemSize.height * (t._numItems - _fixed.count) + t._lineGap * (t._numItems - 1) + t._bottomGap;
          } else result = t._topGap + t._itemSize.height * t._numItems + t._lineGap * (t._numItems - 1) + t._bottomGap;
          break;

         case cc.Layout.Type.GRID:
          t.lackCenter && (t.lackCenter = false);
          switch (t._startAxis) {
           case cc.Layout.AxisDirection.HORIZONTAL:
            var lineNum = Math.ceil(t._numItems / t._colLineNum);
            result = t._topGap + t._itemSize.height * lineNum + t._lineGap * (lineNum - 1) + t._bottomGap;
            break;

           case cc.Layout.AxisDirection.VERTICAL:
            var colNum = Math.ceil(t._numItems / t._colLineNum);
            result = t._leftGap + t._itemSize.width * colNum + t._columnGap * (colNum - 1) + t._rightGap;
          }
        }
        var layout = t.content.getComponent(cc.Layout);
        layout && (layout.enabled = false);
        t._allItemSize = result;
        t._allItemSizeNoEdge = t._allItemSize - (t._sizeType ? t._topGap + t._bottomGap : t._leftGap + t._rightGap);
        if (t.cyclic) {
          var totalSize = t._sizeType ? t.node.height : t.node.width;
          t._cyclicPos1 = 0;
          totalSize -= t._cyclicPos1;
          t._cyclicNum = Math.ceil(totalSize / t._allItemSizeNoEdge) + 1;
          var spacing = t._sizeType ? t._lineGap : t._columnGap;
          t._cyclicPos2 = t._cyclicPos1 + t._allItemSizeNoEdge + spacing;
          t._cyclicAllItemSize = t._allItemSize + t._allItemSizeNoEdge * (t._cyclicNum - 1) + spacing * (t._cyclicNum - 1);
          t._cycilcAllItemSizeNoEdge = t._allItemSizeNoEdge * t._cyclicNum;
          t._cycilcAllItemSizeNoEdge += spacing * (t._cyclicNum - 1);
        }
        t._lack = !t.cyclic && t._allItemSize < (t._sizeType ? t.node.height : t.node.width);
        var slideOffset = t._lack && t.lackCenter || !t.lackSlide ? .1 : 0;
        var targetWH = t._lack ? (t._sizeType ? t.node.height : t.node.width) - slideOffset : t.cyclic ? t._cyclicAllItemSize : t._allItemSize;
        targetWH < 0 && (targetWH = 0);
        t._sizeType ? t.content.height = targetWH : t.content.width = targetWH;
      },
      _onScrolling: function _onScrolling(ev) {
        null == this.frameCount && (this.frameCount = this._updateRate);
        if (!this._forceUpdate && ev && "scroll-ended" != ev.type && this.frameCount > 0) {
          this.frameCount--;
          return;
        }
        this.frameCount = this._updateRate;
        if (this._aniDelRuning) return;
        if (this.cyclic) {
          var scrollPos = this.content.getPosition();
          scrollPos = this._sizeType ? scrollPos.y : scrollPos.x;
          var addVal = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap);
          var add = this._sizeType ? cc.v2(0, addVal) : cc.v2(addVal, 0);
          switch (this._alignCalcType) {
           case 1:
            if (scrollPos > -this._cyclicPos1) {
              this.content.x = -this._cyclicPos2;
              this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(add));
            } else if (scrollPos < -this._cyclicPos2) {
              this.content.x = -this._cyclicPos1;
              this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(add));
            }
            break;

           case 2:
            if (scrollPos < this._cyclicPos1) {
              this.content.x = this._cyclicPos2;
              this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(add));
            } else if (scrollPos > this._cyclicPos2) {
              this.content.x = this._cyclicPos1;
              this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(add));
            }
            break;

           case 3:
            if (scrollPos < this._cyclicPos1) {
              this.content.y = this._cyclicPos2;
              this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(add));
            } else if (scrollPos > this._cyclicPos2) {
              this.content.y = this._cyclicPos1;
              this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(add));
            }
            break;

           case 4:
            if (scrollPos > -this._cyclicPos1) {
              this.content.y = -this._cyclicPos2;
              this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(add));
            } else if (scrollPos < -this._cyclicPos2) {
              this.content.y = -this._cyclicPos1;
              this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(add));
            }
          }
        }
        this._calcViewPos();
        var vTop, vRight, vBottom, vLeft;
        if (this._sizeType) {
          vTop = this.viewTop;
          vBottom = this.viewBottom;
        } else {
          vRight = this.viewRight;
          vLeft = this.viewLeft;
        }
        if (this._virtual) {
          this.displayData = [];
          var itemPos;
          var curId = 0;
          var endId = this._numItems - 1;
          if (this._customSize) {
            var breakFor = false;
            for (;curId <= endId && !breakFor; curId++) {
              itemPos = this._calcItemPos(curId);
              switch (this._align) {
               case cc.Layout.Type.HORIZONTAL:
                itemPos.right >= vLeft && itemPos.left <= vRight ? this.displayData.push(itemPos) : 0 != curId && this.displayData.length > 0 && (breakFor = true);
                break;

               case cc.Layout.Type.VERTICAL:
                itemPos.bottom <= vTop && itemPos.top >= vBottom ? this.displayData.push(itemPos) : 0 != curId && this.displayData.length > 0 && (breakFor = true);
                break;

               case cc.Layout.Type.GRID:
                switch (this._startAxis) {
                 case cc.Layout.AxisDirection.HORIZONTAL:
                  itemPos.bottom <= vTop && itemPos.top >= vBottom ? this.displayData.push(itemPos) : 0 != curId && this.displayData.length > 0 && (breakFor = true);
                  break;

                 case cc.Layout.AxisDirection.VERTICAL:
                  itemPos.right >= vLeft && itemPos.left <= vRight ? this.displayData.push(itemPos) : 0 != curId && this.displayData.length > 0 && (breakFor = true);
                }
              }
            }
          } else {
            var ww = this._itemSize.width + this._columnGap;
            var hh = this._itemSize.height + this._lineGap;
            switch (this._alignCalcType) {
             case 1:
              curId = (vLeft + this._leftGap) / ww;
              endId = (vRight + this._rightGap) / ww;
              break;

             case 2:
              curId = (-vRight - this._rightGap) / ww;
              endId = (-vLeft - this._leftGap) / ww;
              break;

             case 3:
              curId = (-vTop - this._topGap) / hh;
              endId = (-vBottom - this._bottomGap) / hh;
              break;

             case 4:
              curId = (vBottom + this._bottomGap) / hh;
              endId = (vTop + this._topGap) / hh;
            }
            curId = Math.floor(curId) * this._colLineNum;
            endId = Math.ceil(endId) * this._colLineNum;
            endId--;
            curId < 0 && (curId = 0);
            endId >= this._numItems && (endId = this._numItems - 1);
            for (;curId <= endId; curId++) this.displayData.push(this._calcItemPos(curId));
          }
          this._delRedundantItem();
          if (this.displayData.length <= 0 || !this._numItems) {
            this._lastDisplayData = [];
            return;
          }
          this.firstListId = this.displayData[0].id;
          this.displayItemNum = this.displayData.length;
          var len = this._lastDisplayData.length;
          var haveDataChange = this.displayItemNum != len;
          if (haveDataChange) {
            this.frameByFrameRenderNum > 0 && this._lastDisplayData.sort(function(a, b) {
              return a - b;
            });
            haveDataChange = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[len - 1];
          }
          if (this._forceUpdate || haveDataChange) if (this.frameByFrameRenderNum > 0) if (this._numItems > 0) {
            this._updateDone ? this._updateCounter = 0 : this._doneAfterUpdate = true;
            this._updateDone = false;
          } else {
            this._updateCounter = 0;
            this._updateDone = true;
          } else {
            this._lastDisplayData = [];
            for (var c = 0; c < this.displayItemNum; c++) this._createOrUpdateItem(this.displayData[c]);
            this._forceUpdate = false;
          }
          this._calcNearestItem();
        }
      },
      _calcViewPos: function _calcViewPos() {
        var scrollPos = this.content.getPosition();
        switch (this._alignCalcType) {
         case 1:
          this.elasticLeft = scrollPos.x > 0 ? scrollPos.x : 0;
          this.viewLeft = (scrollPos.x < 0 ? -scrollPos.x : 0) - this.elasticLeft;
          this.viewRight = this.viewLeft + this.node.width;
          this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
          this.viewRight += this.elasticRight;
          break;

         case 2:
          this.elasticRight = scrollPos.x < 0 ? -scrollPos.x : 0;
          this.viewRight = (scrollPos.x > 0 ? -scrollPos.x : 0) + this.elasticRight;
          this.viewLeft = this.viewRight - this.node.width;
          this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
          this.viewLeft -= this.elasticLeft;
          break;

         case 3:
          this.elasticTop = scrollPos.y < 0 ? Math.abs(scrollPos.y) : 0;
          this.viewTop = (scrollPos.y > 0 ? -scrollPos.y : 0) + this.elasticTop;
          this.viewBottom = this.viewTop - this.node.height;
          this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
          this.viewBottom += this.elasticBottom;
          break;

         case 4:
          this.elasticBottom = scrollPos.y > 0 ? Math.abs(scrollPos.y) : 0;
          this.viewBottom = (scrollPos.y < 0 ? -scrollPos.y : 0) - this.elasticBottom;
          this.viewTop = this.viewBottom + this.node.height;
          this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0;
          this.viewTop -= this.elasticTop;
        }
      },
      _calcItemPos: function _calcItemPos(id) {
        var width, height, top, bottom, left, right, itemX, itemY;
        switch (this._align) {
         case cc.Layout.Type.HORIZONTAL:
          switch (this._horizontalDir) {
           case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
            if (this._customSize) {
              var fixed = this._getFixedSize(id);
              left = this._leftGap + (this._itemSize.width + this._columnGap) * (id - fixed.count) + (fixed.val + this._columnGap * fixed.count);
              var cs = this._customSize[id];
              width = cs > 0 ? cs : this._itemSize.width;
            } else {
              left = this._leftGap + (this._itemSize.width + this._columnGap) * id;
              width = this._itemSize.width;
            }
            right = left + width;
            if (this.lackCenter) {
              var offset = this.content.width / 2 - this._allItemSizeNoEdge / 2;
              left += offset;
              right += offset;
            }
            return {
              id: id,
              left: left,
              right: right,
              x: left + this._itemTmp.anchorX * width,
              y: this._itemTmp.y
            };

           case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
            if (this._customSize) {
              var _fixed2 = this._getFixedSize(id);
              right = -this._rightGap - (this._itemSize.width + this._columnGap) * (id - _fixed2.count) - (_fixed2.val + this._columnGap * _fixed2.count);
              var _cs = this._customSize[id];
              width = _cs > 0 ? _cs : this._itemSize.width;
            } else {
              right = -this._rightGap - (this._itemSize.width + this._columnGap) * id;
              width = this._itemSize.width;
            }
            left = right - width;
            if (this.lackCenter) {
              var _offset = this.content.width / 2 - this._allItemSizeNoEdge / 2;
              left -= _offset;
              right -= _offset;
            }
            return {
              id: id,
              right: right,
              left: left,
              x: left + this._itemTmp.anchorX * width,
              y: this._itemTmp.y
            };
          }
          break;

         case cc.Layout.Type.VERTICAL:
          switch (this._verticalDir) {
           case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
            if (this._customSize) {
              var _fixed3 = this._getFixedSize(id);
              top = -this._topGap - (this._itemSize.height + this._lineGap) * (id - _fixed3.count) - (_fixed3.val + this._lineGap * _fixed3.count);
              var _cs2 = this._customSize[id];
              height = _cs2 > 0 ? _cs2 : this._itemSize.height;
              bottom = top - height;
            } else {
              top = -this._topGap - (this._itemSize.height + this._lineGap) * id;
              height = this._itemSize.height;
            }
            bottom = top - height;
            if (this.lackCenter) {
              var _offset2 = this.content.height / 2 - this._allItemSizeNoEdge / 2;
              top -= _offset2;
              bottom -= _offset2;
            }
            return {
              id: id,
              top: top,
              bottom: bottom,
              x: this._itemTmp.x,
              y: bottom + this._itemTmp.anchorY * height
            };

           case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
            if (this._customSize) {
              var _fixed4 = this._getFixedSize(id);
              bottom = this._bottomGap + (this._itemSize.height + this._lineGap) * (id - _fixed4.count) + (_fixed4.val + this._lineGap * _fixed4.count);
              var _cs3 = this._customSize[id];
              height = _cs3 > 0 ? _cs3 : this._itemSize.height;
            } else {
              bottom = this._bottomGap + (this._itemSize.height + this._lineGap) * id;
              height = this._itemSize.height;
            }
            top = bottom + height;
            if (this.lackCenter) {
              var _offset3 = this.content.height / 2 - this._allItemSizeNoEdge / 2;
              top += _offset3;
              bottom += _offset3;
            }
            return {
              id: id,
              top: top,
              bottom: bottom,
              x: this._itemTmp.x,
              y: bottom + this._itemTmp.anchorY * height
            };
          }

         case cc.Layout.Type.GRID:
          var colLine = Math.floor(id / this._colLineNum);
          switch (this._startAxis) {
           case cc.Layout.AxisDirection.HORIZONTAL:
            switch (this._verticalDir) {
             case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
              top = -this._topGap - (this._itemSize.height + this._lineGap) * colLine;
              bottom = top - this._itemSize.height;
              itemY = bottom + this._itemTmp.anchorY * this._itemSize.height;
              break;

             case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
              bottom = this._bottomGap + (this._itemSize.height + this._lineGap) * colLine;
              top = bottom + this._itemSize.height;
              itemY = bottom + this._itemTmp.anchorY * this._itemSize.height;
            }
            itemX = this._leftGap + id % this._colLineNum * (this._itemSize.width + this._columnGap);
            switch (this._horizontalDir) {
             case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
              itemX += this._itemTmp.anchorX * this._itemSize.width;
              itemX -= this.content.anchorX * this.content.width;
              break;

             case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
              itemX += (1 - this._itemTmp.anchorX) * this._itemSize.width;
              itemX -= (1 - this.content.anchorX) * this.content.width;
              itemX *= -1;
            }
            return {
              id: id,
              top: top,
              bottom: bottom,
              x: itemX,
              y: itemY
            };

           case cc.Layout.AxisDirection.VERTICAL:
            switch (this._horizontalDir) {
             case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
              left = this._leftGap + (this._itemSize.width + this._columnGap) * colLine;
              right = left + this._itemSize.width;
              itemX = left + this._itemTmp.anchorX * this._itemSize.width;
              itemX -= this.content.anchorX * this.content.width;
              break;

             case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
              right = -this._rightGap - (this._itemSize.width + this._columnGap) * colLine;
              left = right - this._itemSize.width;
              itemX = left + this._itemTmp.anchorX * this._itemSize.width;
              itemX += (1 - this.content.anchorX) * this.content.width;
            }
            itemY = -this._topGap - id % this._colLineNum * (this._itemSize.height + this._lineGap);
            switch (this._verticalDir) {
             case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
              itemY -= (1 - this._itemTmp.anchorY) * this._itemSize.height;
              itemY += (1 - this.content.anchorY) * this.content.height;
              break;

             case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
              itemY -= this._itemTmp.anchorY * this._itemSize.height;
              itemY += this.content.anchorY * this.content.height;
              itemY *= -1;
            }
            return {
              id: id,
              left: left,
              right: right,
              x: itemX,
              y: itemY
            };
          }
        }
      },
      _calcExistItemPos: function _calcExistItemPos(id) {
        var item = this.getItemByListId(id);
        if (!item) return null;
        var data = {
          id: id,
          x: item.x,
          y: item.y
        };
        if (this._sizeType) {
          data.top = item.y + item.height * (1 - item.anchorY);
          data.bottom = item.y - item.height * item.anchorY;
        } else {
          data.left = item.x - item.width * item.anchorX;
          data.right = item.x + item.width * (1 - item.anchorX);
        }
        return data;
      },
      getItemPos: function getItemPos(id) {
        return this._virtual ? this._calcItemPos(id) : this.frameByFrameRenderNum ? this._calcItemPos(id) : this._calcExistItemPos(id);
      },
      _getFixedSize: function _getFixedSize(listId) {
        if (!this._customSize) return null;
        null == listId && (listId = this._numItems);
        var fixed = 0;
        var count = 0;
        for (var id in this._customSize) if (parseInt(id) < listId) {
          fixed += this._customSize[id];
          count++;
        }
        return {
          val: fixed,
          count: count
        };
      },
      _onScrollBegan: function _onScrollBegan() {
        this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
      },
      _onScrollEnded: function _onScrollEnded() {
        var t = this;
        if (null != t.scrollToListId) {
          var item = t.getItemByListId(t.scrollToListId);
          t.scrollToListId = null;
          item && item.runAction(new cc.sequence(new cc.scaleTo(.1, 1.06), new cc.scaleTo(.1, 1)));
        }
        t._onScrolling();
        t._slideMode != SlideType.ADHERING || t.adhering ? t._slideMode == SlideType.PAGE && (null != t._beganPos ? this._pageAdhere() : t.adhere()) : t.adhere();
      },
      _onTouchStart: function _onTouchStart(ev, captureListeners) {
        if (this._scrollView._hasNestedViewGroup(ev, captureListeners)) return;
        var isMe = ev.eventPhase === cc.Event.AT_TARGET && ev.target === this.node;
        if (!isMe) {
          var itemNode = ev.target;
          while (null == itemNode._listId && itemNode.parent) itemNode = itemNode.parent;
          this._scrollItem = null != itemNode._listId ? itemNode : ev.target;
        }
      },
      _onTouchUp: function _onTouchUp() {
        var t = this;
        t._scrollPos = null;
        if (t._slideMode == SlideType.ADHERING) {
          t.adhering && (t._adheringBarrier = true);
          t.adhere();
        } else t._slideMode == SlideType.PAGE && (null != t._beganPos ? t._pageAdhere() : t.adhere());
        this._scrollItem = null;
      },
      _onTouchCancelled: function _onTouchCancelled(ev, captureListeners) {
        var t = this;
        if (t._scrollView._hasNestedViewGroup(ev, captureListeners) || ev.simulate) return;
        t._scrollPos = null;
        if (t._slideMode == SlideType.ADHERING) {
          t.adhering && (t._adheringBarrier = true);
          t.adhere();
        } else t._slideMode == SlideType.PAGE && (null != t._beganPos ? t._pageAdhere() : t.adhere());
        this._scrollItem = null;
      },
      _onSizeChanged: function _onSizeChanged() {
        this.checkInited(false) && this._onScrolling();
      },
      _onItemAdaptive: function _onItemAdaptive(item) {
        if (!this._sizeType && item.width != this._itemSize.width || this._sizeType && item.height != this._itemSize.height) {
          this._customSize || (this._customSize = {});
          var val = this._sizeType ? item.height : item.width;
          if (this._customSize[item._listId] != val) {
            this._customSize[item._listId] = val;
            this._resizeContent();
            this.updateAll();
            if (null != this._scrollToListId) {
              this._scrollPos = null;
              this.unschedule(this._scrollToSo);
              this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - new Date().getTime() / 1e3));
            }
          }
        }
      },
      _pageAdhere: function _pageAdhere() {
        var t = this;
        if (!t.cyclic && (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) return;
        var curPos = t._sizeType ? t.viewTop : t.viewLeft;
        var dis = (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;
        var canSkip = Math.abs(t._beganPos - curPos) > dis;
        if (canSkip) {
          var timeInSecond = .5;
          switch (t._alignCalcType) {
           case 1:
           case 4:
            t._beganPos > curPos ? t.prePage(timeInSecond) : t.nextPage(timeInSecond);
            break;

           case 2:
           case 3:
            t._beganPos < curPos ? t.prePage(timeInSecond) : t.nextPage(timeInSecond);
          }
        } else t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0 && t.adhere();
        t._beganPos = null;
      },
      adhere: function adhere() {
        var t = this;
        if (!t.checkInited()) return;
        if (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0) return;
        t.adhering = true;
        t._calcNearestItem();
        var offset = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t.node.height : t.node.width);
        var timeInSecond = .7;
        t.scrollTo(t.nearestListId, timeInSecond, offset);
      },
      update: function update() {
        if (this.frameByFrameRenderNum <= 0 || this._updateDone) return;
        if (this._virtual) {
          var len = this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum ? this.displayItemNum : this._updateCounter + this.frameByFrameRenderNum;
          for (var n = this._updateCounter; n < len; n++) {
            var data = this.displayData[n];
            data && this._createOrUpdateItem(data);
          }
          if (this._updateCounter >= this.displayItemNum - 1) if (this._doneAfterUpdate) {
            this._updateCounter = 0;
            this._updateDone = false;
            this._doneAfterUpdate = false;
          } else {
            this._updateDone = true;
            this._delRedundantItem();
            this._forceUpdate = false;
            this._calcNearestItem();
            this.slideMode == SlideType.PAGE && (this.curPageNum = this.nearestListId);
          } else this._updateCounter += this.frameByFrameRenderNum;
        } else if (this._updateCounter < this._numItems) {
          var _len = this._updateCounter + this.frameByFrameRenderNum > this._numItems ? this._numItems : this._updateCounter + this.frameByFrameRenderNum;
          for (var _n2 = this._updateCounter; _n2 < _len; _n2++) this._createOrUpdateItem2(_n2);
          this._updateCounter += this.frameByFrameRenderNum;
        } else {
          this._updateDone = true;
          this._calcNearestItem();
          this.slideMode == SlideType.PAGE && (this.curPageNum = this.nearestListId);
        }
      },
      _createOrUpdateItem: function _createOrUpdateItem(data) {
        var item = this.getItemByListId(data.id);
        if (item) {
          if (this._forceUpdate && this.renderEvent) {
            item.setPosition(new cc.v2(data.x, data.y));
            this._resetItemSize(item);
            this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], item, data.id % this._actualNumItems);
          }
        } else {
          var canGet = this._pool.size() > 0;
          item = canGet ? this._pool.get() : cc.instantiate(this._itemTmp);
          if (item._listId != data.id) {
            item._listId = data.id;
            item.setContentSize(this._itemSize);
          }
          item.setPosition(new cc.v2(data.x, data.y));
          this._resetItemSize(item);
          this.content.addChild(item);
          if (canGet && this._needUpdateWidget) {
            var widget = item.getComponent(cc.Widget);
            widget && widget.updateAlignment();
          }
          item.setSiblingIndex(this.content.childrenCount - 1);
          var listItem = item.getComponent(ListItem);
          item.listItem = listItem;
          if (listItem) {
            listItem._list = this;
            listItem._registerEvent();
          }
          this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], item, data.id % this._actualNumItems);
        }
        this._resetItemSize(item);
        this._updateListItem(item.listItem);
        this._lastDisplayData.indexOf(data.id) < 0 && this._lastDisplayData.push(data.id);
      },
      _createOrUpdateItem2: function _createOrUpdateItem2(listId) {
        var item = this.content.children[listId];
        if (item) {
          if (this._forceUpdate && this.renderEvent) {
            item._listId = listId;
            this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], item, listId);
          }
        } else {
          item = cc.instantiate(this._itemTmp);
          item._listId = listId;
          this.content.addChild(item);
          var listItem = item.getComponent(ListItem);
          item.listItem = listItem;
          if (listItem) {
            listItem._list = this;
            listItem._registerEvent();
          }
          this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], item, listId);
        }
        this._updateListItem(item.listItem);
        this._lastDisplayData.indexOf(listId) < 0 && this._lastDisplayData.push(listId);
      },
      _updateListItem: function _updateListItem(listItem) {
        if (!listItem) return;
        if (this.selectedMode > SelectedType.NONE) switch (this.selectedMode) {
         case SelectedType.SINGLE:
          listItem.selected = this.selectedId == listItem.node._listId;
          break;

         case SelectedType.MULT:
          listItem.selected = this.multSelected.indexOf(listItem.node._listId) >= 0;
        }
      },
      _resetItemSize: function _resetItemSize(item) {
        return;
        var size;
      },
      _updateItemPos: function _updateItemPos(listIdOrItem) {
        var item = isNaN(listIdOrItem) ? listIdOrItem : this.getItemByListId(listIdOrItem);
        var pos = this.getItemPos(item._listId);
        item.setPosition(pos.x, pos.y);
      },
      setMultSelected: function setMultSelected(args, bool) {
        var t = this;
        if (!t.checkInited()) return;
        Array.isArray(args) || (args = [ args ]);
        if (null == bool) t.multSelected = args; else {
          var listId, sub;
          if (bool) for (var n = args.length - 1; n >= 0; n--) {
            listId = args[n];
            sub = t.multSelected.indexOf(listId);
            sub < 0 && t.multSelected.push(listId);
          } else for (var _n3 = args.length - 1; _n3 >= 0; _n3--) {
            listId = args[_n3];
            sub = t.multSelected.indexOf(listId);
            sub >= 0 && t.multSelected.splice(sub, 1);
          }
        }
        t._forceUpdate = true;
        t._onScrolling();
      },
      updateItem: function updateItem(args) {
        if (!this.checkInited()) return;
        Array.isArray(args) || (args = [ args ]);
        for (var n = 0, len = args.length; n < len; n++) {
          var listId = args[n];
          var item = this.getItemByListId(listId);
          item && cc.Component.EventHandler.emitEvents([ this.renderEvent ], item, listId % this._actualNumItems);
        }
      },
      updateAll: function updateAll() {
        if (!this.checkInited()) return;
        this.numItems = this.numItems;
      },
      getItemByListId: function getItemByListId(listId) {
        for (var n = this.content.childrenCount - 1; n >= 0; n--) if (this.content.children[n]._listId == listId) return this.content.children[n];
      },
      _getOutsideItem: function _getOutsideItem() {
        var item;
        var result = [];
        for (var n = this.content.childrenCount - 1; n >= 0; n--) {
          item = this.content.children[n];
          this.displayData.find(function(d) {
            return d.id == item._listId;
          }) || result.push(item);
        }
        return result;
      },
      _delRedundantItem: function _delRedundantItem() {
        if (this._virtual) {
          var arr = this._getOutsideItem();
          for (var n = arr.length - 1; n >= 0; n--) {
            var item = arr[n];
            if (this._scrollItem && item._listId == this._scrollItem._listId) continue;
            this._pool.put(item);
            for (var m = this._lastDisplayData.length - 1; m >= 0; m--) if (this._lastDisplayData[m] == item._listId) {
              this._lastDisplayData.splice(m, 1);
              break;
            }
          }
        } else while (this.content.childrenCount > this._numItems) this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
      },
      _delSingleItem: function _delSingleItem(item) {
        item.removeFromParent();
        item.destroy && item.destroy();
        item = null;
      },
      aniDelItem: function aniDelItem(listId, callFunc, aniType) {
        var t = this;
        if (!t.checkInited() || t.cyclic || !t._virtual) return cc.error("This function is not allowed to be called!");
        if (t._aniDelRuning) return cc.warn("Please wait for the current deletion to finish!");
        var item = t.getItemByListId(listId);
        if (!item) {
          callFunc(listId);
          return;
        }
        t._aniDelRuning = true;
        var curLastId = t.displayData[t.displayData.length - 1].id;
        var resetSelectedId = item.listItem.selected;
        item.listItem.showAni(aniType, function() {
          var newId;
          curLastId < t._numItems - 2 && (newId = curLastId + 1);
          if (null != newId) {
            var newData = t._calcItemPos(newId);
            t.displayData.push(newData);
            t._virtual ? t._createOrUpdateItem(newData) : t._createOrUpdateItem2(newId);
          } else t._numItems--;
          if (t.selectedMode == SelectedType.SINGLE) resetSelectedId ? t._selectedId = -1 : t._selectedId - 1 >= 0 && t._selectedId--; else if (t.selectedMode == SelectedType.MULT && t.multSelected.length) {
            var sub = t.multSelected.indexOf(listId);
            sub >= 0 && t.multSelected.splice(sub, 1);
            for (var n = t.multSelected.length - 1; n >= 0; n--) {
              var id = t.multSelected[n];
              id >= listId && t.multSelected[n]--;
            }
          }
          if (t._customSize) {
            t._customSize[listId] && delete t._customSize[listId];
            var newCustomSize = {};
            var size;
            for (var _id in t._customSize) {
              size = t._customSize[_id];
              _id = parseInt(_id);
              newCustomSize[_id - (_id >= listId ? 1 : 0)] = size;
            }
            t._customSize = newCustomSize;
          }
          var sec = .2333;
          var acts, haveCB;
          for (var _n4 = null != newId ? newId : curLastId; _n4 >= listId + 1; _n4--) {
            item = t.getItemByListId(_n4);
            if (item) {
              var posData = t._calcItemPos(_n4 - 1);
              acts = [ new cc.moveTo(sec, new cc.v2(posData.x, posData.y)) ];
              if (_n4 <= listId + 1) {
                haveCB = true;
                acts.push(new cc.CallFunc(function() {
                  t._aniDelRuning = false;
                  callFunc(listId);
                }));
              }
              acts.length > 1 ? item.runAction(new cc.Sequence(acts)) : item.runAction(acts[0]);
            }
          }
          if (!haveCB) {
            t._aniDelRuning = false;
            callFunc(listId);
          }
        }, true);
      },
      scrollTo: function scrollTo(listId, timeInSecond, offset, overStress) {
        var t = this;
        if (!t.checkInited()) return;
        null == timeInSecond ? timeInSecond = .5 : timeInSecond < 0 && (timeInSecond = 0);
        listId < 0 ? listId = 0 : listId >= t._numItems && (listId = t._numItems - 1);
        !t._virtual && t._layout && t._layout.enabled && t._layout.updateLayout();
        var pos = t.getItemPos(listId);
        var targetX, targetY;
        switch (t._alignCalcType) {
         case 1:
          targetX = pos.left;
          targetX -= null != offset ? t.node.width * offset : t._leftGap;
          pos = new cc.v2(targetX, 0);
          break;

         case 2:
          targetX = pos.right - t.node.width;
          targetX += null != offset ? t.node.width * offset : t._rightGap;
          pos = new cc.v2(targetX + t.content.width, 0);
          break;

         case 3:
          targetY = pos.top;
          targetY += null != offset ? t.node.height * offset : t._topGap;
          pos = new cc.v2(0, -targetY);
          break;

         case 4:
          targetY = pos.bottom + t.node.height;
          targetY -= null != offset ? t.node.height * offset : t._bottomGap;
          pos = new cc.v2(0, -targetY + t.content.height);
        }
        var viewPos = t.content.getPosition();
        viewPos = Math.abs(t._sizeType ? viewPos.y : viewPos.x);
        var comparePos = t._sizeType ? pos.y : pos.x;
        var runScroll = Math.abs((null != t._scrollPos ? t._scrollPos : viewPos) - comparePos) > .5;
        if (runScroll) {
          t._scrollPos = comparePos;
          t._scrollToListId = listId;
          t._scrollToEndTime = new Date().getTime() / 1e3 + timeInSecond;
          t._scrollView.scrollToOffset(pos, timeInSecond);
          t._scrollToSo = t.scheduleOnce(function() {
            t._adheringBarrier || (t.adhering = t._adheringBarrier = false);
            t._scrollPos = t._scrollToListId = t._scrollToEndTime = t._scrollToSo = null;
            if (overStress) {
              var item = t.getItemByListId(listId);
              item && item.runAction(new cc.sequence(new cc.scaleTo(.1, 1.05), new cc.scaleTo(.1, 1)));
            }
          }, timeInSecond + .1);
          timeInSecond <= 0 && t._onScrolling();
        }
      },
      _calcNearestItem: function _calcNearestItem() {
        var t = this;
        t.nearestListId = null;
        var data, center;
        t._virtual && t._calcViewPos();
        var vTop, vRight, vBottom, vLeft;
        vTop = t.viewTop;
        vRight = t.viewRight;
        vBottom = t.viewBottom;
        vLeft = t.viewLeft;
        var breakFor = false;
        for (var n = 0; n < t.content.childrenCount && !breakFor; n += t._colLineNum) {
          data = this._virtual ? this.displayData[n] : this._calcExistItemPos(n);
          if (data) {
            center = this._sizeType ? (data.top + data.bottom) / 2 : center = (data.left + data.right) / 2;
            switch (this._alignCalcType) {
             case 1:
              if (data.right >= vLeft) {
                this.nearestListId = data.id;
                vLeft > center && (this.nearestListId += this._colLineNum);
                breakFor = true;
              }
              break;

             case 2:
              if (data.left <= vRight) {
                this.nearestListId = data.id;
                vRight < center && (this.nearestListId += this._colLineNum);
                breakFor = true;
              }
              break;

             case 3:
              if (data.bottom <= vTop) {
                this.nearestListId = data.id;
                vTop < center && (this.nearestListId += this._colLineNum);
                breakFor = true;
              }
              break;

             case 4:
              if (data.top >= vBottom) {
                this.nearestListId = data.id;
                vBottom > center && (this.nearestListId += this._colLineNum);
                breakFor = true;
              }
            }
          }
        }
        data = this._virtual ? this.displayData[this.displayItemNum - 1] : this._calcExistItemPos(this._numItems - 1);
        if (data && data.id == t._numItems - 1) {
          center = t._sizeType ? (data.top + data.bottom) / 2 : center = (data.left + data.right) / 2;
          switch (t._alignCalcType) {
           case 1:
            vRight > center && (t.nearestListId = data.id);
            break;

           case 2:
            vLeft < center && (t.nearestListId = data.id);
            break;

           case 3:
            vBottom < center && (t.nearestListId = data.id);
            break;

           case 4:
            vTop > center && (t.nearestListId = data.id);
          }
        }
      },
      prePage: function prePage(timeInSecond) {
        if (!this.checkInited()) return;
        null == timeInSecond && (timeInSecond = .5);
        this.skipPage(this.curPageNum - 1, timeInSecond);
      },
      nextPage: function nextPage(timeInSecond) {
        if (!this.checkInited()) return;
        null == timeInSecond && (timeInSecond = .5);
        this.skipPage(this.curPageNum + 1, timeInSecond);
      },
      skipPage: function skipPage(pageNum, timeInSecond) {
        var t = this;
        if (!t.checkInited()) return;
        if (t._slideMode != SlideType.PAGE) return cc.error("This function is not allowed to be called, Must SlideMode = PAGE!");
        if (pageNum < 0 || pageNum >= t._numItems) return;
        if (t.curPageNum == pageNum) return;
        t.curPageNum = pageNum;
        t.pageChangeEvent && cc.Component.EventHandler.emitEvents([ t.pageChangeEvent ], pageNum);
        t.scrollTo(pageNum, timeInSecond);
      },
      calcCustomSize: function calcCustomSize(numItems) {
        var t = this;
        if (!t.checkInited()) return;
        if (!t._itemTmp) return cc.error("Unset template item!");
        if (!t.renderEvent) return cc.error("Unset Render-Event!");
        t._customSize = {};
        var temp = cc.instantiate(t._itemTmp);
        t.content.addChild(temp);
        for (var n = 0; n < numItems; n++) {
          cc.Component.EventHandler.emitEvents([ t.renderEvent ], temp, n);
          temp.height == t._itemSize.height && temp.width == t._itemSize.width || (t._customSize[n] = t._sizeType ? temp.height : temp.width);
        }
        Object.keys(t._customSize).length || (t._customSize = null);
        temp.removeFromParent();
        temp.destroy && temp.destroy();
        return t._customSize;
      }
    });
    cc._RF.pop();
  }, {
    ListItem: "ListItem"
  } ],
  LoadPrefab: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ba5eeVQ1URNl51ehTr5kZ6V", "LoadPrefab");
    "use strict";
    cc.Class({
      editor: {
        executeInEditMode: true
      },
      extends: cc.Component,
      properties: {
        PREFAB: cc.Prefab,
        parent: cc.Node,
        autoLoad: false
      },
      onLoad: function onLoad() {
        this.autoLoad && this.loadPrefab();
      },
      loadPrefab: function loadPrefab() {
        try {
          var node = cc.instantiate(this.PREFAB);
          node._objFlags = cc.Object.Flags.DontSave;
          node.parent = this.parent || this.node;
        } catch (error) {
          cc.error(this.PREFAB);
          cc.error(error);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  ManagerCenter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2b049H1lwxOBI78I6Y9xb+4", "ManagerCenter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _SoundManager = _interopRequireDefault(require("../managers/SoundManager"));
    var _ResourceManager = _interopRequireDefault(require("../managers/ResourceManager"));
    var _NetworkManager = _interopRequireDefault(require("../managers/NetworkManager"));
    var _DataManager = _interopRequireDefault(require("../managers/DataManager"));
    var _UIManager = _interopRequireDefault(require("../managers/UIManager"));
    var _BroadcastManager = _interopRequireDefault(require("../managers/BroadcastManager"));
    var _WxManager = _interopRequireDefault(require("../platform/WxManager"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var ManagerCenter = function() {
      function ManagerCenter() {
        _classCallCheck(this, ManagerCenter);
      }
      _createClass(ManagerCenter, null, [ {
        key: "getSoundManager",
        value: function getSoundManager() {
          return _SoundManager["default"].getInstance();
        }
      }, {
        key: "getResourceManager",
        value: function getResourceManager() {
          return _ResourceManager["default"].getInstance();
        }
      }, {
        key: "getNetworkManager",
        value: function getNetworkManager() {
          return _NetworkManager["default"].getInstance();
        }
      }, {
        key: "getDataManager",
        value: function getDataManager() {
          return _DataManager["default"].getInstance();
        }
      }, {
        key: "getUIManager",
        value: function getUIManager() {
          return _UIManager["default"].getInstance();
        }
      }, {
        key: "getBroadcastManager",
        value: function getBroadcastManager() {
          return _BroadcastManager["default"].getInstance();
        }
      }, {
        key: "getWxManager",
        value: function getWxManager() {
          return _WxManager["default"].getInstance();
        }
      } ]);
      return ManagerCenter;
    }();
    exports["default"] = ManagerCenter;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../managers/BroadcastManager": "BroadcastManager",
    "../managers/DataManager": "DataManager",
    "../managers/NetworkManager": "NetworkManager",
    "../managers/ResourceManager": "ResourceManager",
    "../managers/SoundManager": "SoundManager",
    "../managers/UIManager": "UIManager",
    "../platform/WxManager": "WxManager"
  } ],
  MatchLines: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "14478AlZZRNXoiBJupZ9pMh", "MatchLines");
    "use strict";
    var TouchGraphics = require("TouchGraphics");
    var _ = require("../../../common/lodash");
    var MatchingItem = cc.Class({
      name: "MatchingItem",
      properties: {
        item1: cc.Node,
        item2: cc.Node
      }
    });
    cc.Class({
      extends: TouchGraphics,
      properties: {
        audioYES: {
          type: cc.AudioClip,
          default: null
        },
        audioNO: {
          type: cc.AudioClip,
          default: null
        },
        LINE_PREFAB: cc.Prefab,
        items: [ MatchingItem ]
      },
      _checkInOne: function _checkInOne(item, p) {
        var pt = item.item1.parent.convertToNodeSpaceAR(p);
        var rect = item.item1.getBoundingBox();
        if (rect.contains(pt)) return item.item1;
        pt = item.item2.parent.convertToNodeSpaceAR(p);
        rect = item.item2.getBoundingBox();
        if (rect.contains(pt)) return item.item2;
      },
      check: function check(item, p1, p2) {
        var item1 = this._checkInOne(item, p1);
        var item2 = this._checkInOne(item, p2);
        return item1 && item2 && item1 !== item2;
      },
      _onTouchStart: function _onTouchStart(event) {
        var _this = this;
        var point = event.getLocation();
        var item = _.find(this.items, function(item) {
          return _this._checkInOne(item, point);
        });
        item && this._super(event);
      },
      _onTouchEnd: function _onTouchEnd(event) {
        var _this2 = this;
        var first = event.getStartLocation();
        var last = event.getLocation();
        var item = this.items.find(function(item) {
          return _this2.check(item, first, last);
        });
        this.clear();
        var p1 = this.node.convertToNodeSpaceAR(first);
        var p2 = this.node.convertToNodeSpaceAR(last);
        item ? this.drawLineYes(item.item1.position, item.item2.position) : this.drawLineNo(p1, p2);
      },
      drawLineNo: function drawLineNo(p1, p2) {
        if (!this.LINE_PREFAB) return;
        var line = cc.instantiate(this.LINE_PREFAB);
        this._setLine(line, p1, p2);
        cc.audioEngine.playEffect(this.audioNO);
        this.scheduleOnce(function() {
          line.removeFromParent();
        }, 1);
      },
      drawLineYes: function drawLineYes(p1, p2) {
        if (!this.LINE_PREFAB) return;
        var line = cc.instantiate(this.LINE_PREFAB);
        this._setLine(line, p1, p2);
        cc.audioEngine.playEffect(this.audioYES);
      },
      _setLine: function _setLine(line, p1, p2) {
        line.parent = this.node;
        line.position = p1;
        var dt = p1.sub(p2);
        var radian = Math.atan2(dt.x, dt.y);
        var rotation = (180 * radian / Math.PI + 90) % 360;
        line.rotation = rotation;
        line.width = dt.mag();
      }
    });
    cc._RF.pop();
  }, {
    "../../../common/lodash": "lodash",
    TouchGraphics: "TouchGraphics"
  } ],
  NetworkManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ab52fjaIYlHY5kUNohSioTc", "NetworkManager");
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function _typeof(obj) {
        return typeof obj;
      } : function _typeof(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _AppConst = require("../define/AppConst");
    var _WebsocketClient = _interopRequireDefault(require("../netWork/WebsocketClient"));
    var _HttpClient = _interopRequireDefault(require("../netWork/HttpClient"));
    var _netlib = require("../lib/netlib");
    var _NoticeCenter = require("../common/NoticeCenter");
    var _AppUtil = _interopRequireDefault(require("../utility/AppUtil"));
    var wx_api = _interopRequireWildcard(require("../platform/wx"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== _typeof(obj) && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var NetworkManager = function() {
      _createClass(NetworkManager, null, [ {
        key: "getInstance",
        value: function getInstance() {
          NetworkManager.shared || (NetworkManager.shared = new NetworkManager());
          return NetworkManager.shared;
        }
      } ]);
      function NetworkManager() {
        _classCallCheck(this, NetworkManager);
        this.forcedClose = false;
        this.timedOut = false;
        this.state = 0;
        this._heartCD = 0;
        this._reconnectCount = 0;
        _AppConst.AppConst.ISTEST && (_AppConst.AppConst.WEBSOCK_API = _AppConst.AppConst.TEST_WEBSOCK_API);
        this.state = WebSocket.CONNECTING;
        this.addListenEvent();
        this._updateId && clearInterval(this._updateId);
        this._updateId = setInterval(this.update.bind(this), 3e3);
        this._reconnectId = null;
        this.init();
      }
      _createClass(NetworkManager, [ {
        key: "addListenEvent",
        value: function addListenEvent() {
          cc.systemEvent.on(_NoticeCenter.EventName.net_open, this.onOpen, this);
          cc.systemEvent.on(_NoticeCenter.EventName.net_close, this.onClose, this);
          cc.systemEvent.on(_NoticeCenter.EventName.net_error, this.onError, this);
          cc.systemEvent.on(_NoticeCenter.EventName.net_message, this.onMessage, this);
        }
      }, {
        key: "init",
        value: function init() {
          console.log("\u8fde\u63a5\u7f51\u7edc...");
          if (!_AppConst.AppConst.USE_WEBSOCKET) return;
          this.socketClient && cc.log("this.socketClient.readyState", this.socketClient.ws.readyState);
          if (!this.socketClient || this.socketClient.ws.readyState != WebSocket.OPEN) {
            this.socketClient = new _WebsocketClient["default"]();
            this.socketClient.init();
          }
        }
      }, {
        key: "sendData",
        value: function sendData(data) {
          if (!_AppConst.AppConst.USE_WEBSOCKET) {
            console.log("net error1", _AppConst.AppConst.USE_WEBSOCKET);
            return;
          }
          if (!this.socketClient) {
            this.init();
            return;
          }
          if (this.socketClient.ws.readyState != WebSocket.OPEN) {
            cc.log("\u7f51\u7edc\u6ca1\u6709\u51c6\u5907\u597d");
            this.onClose();
            return;
          }
          this.socketClient.sendData(data);
        }
      }, {
        key: "onOpen",
        value: function onOpen(evt) {
          console.log("ws onOpen");
          this._reconnectId && clearInterval(this._reconnectId);
          this._reconnectCount = 0;
          this._heartCD = 0;
          this.forcedClose = false;
          _netlib.netlib.getInstance().doReLogin();
          _AppUtil["default"].hideLoading();
          _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.web_socket_success);
        }
      }, {
        key: "onError",
        value: function onError(evt) {
          console.log("ws onerror", evt);
        }
      }, {
        key: "onMessage",
        value: function onMessage(evt) {
          var netdata = evt.data;
          if (netdata.RetMsg) {
            var code = netdata.RetMsg.code;
            var errmsg = netdata.RetMsg.errormsg;
            var cmd = netdata.RetMsg.cmd;
            var data = netdata.RetMsg.data;
            "" != errmsg && _AppUtil["default"].showMessage(errmsg);
            if (-1 == code) return;
            "s2c_heart_beat" == cmd ? this.reciveHeartBeat() : _netlib.protocal[cmd] ? _netlib.netlib.getInstance()[_netlib.protocal[cmd]](data) : console.log("\u672a\u5b9a\u4e49\u534f\u8bae\uff1a" + cmd);
          }
        }
      }, {
        key: "onClose",
        value: function onClose(evt) {
          var _this = this;
          console.log("ws onClose", evt, this.forcedClose);
          if (this.forcedClose) this.state = WebSocket.CLOSED; else {
            console.log("state1", this.socketClient.ws.readyState);
            if (this.socketClient.ws.readyState == WebSocket.CONNECTING || this.socketClient.ws.readyState == WebSocket.OPEN) return;
            this._reconnectId && clearInterval(this._reconnectId);
            console.log("state2", this.socketClient.ws.readyState, _AppConst.AppConst.RECONNECTINTERVAL);
            var reconnect = function reconnect() {
              console.log("\u65ad\u7ebf\u91cd\u8fde...", _this._reconnectCount, _AppConst.AppConst.RECONNECTCOUNT);
              CC_WECHATGAME ? _AppUtil["default"].showLoading("\u8fde\u63a5\u4e2d") : _AppUtil["default"].showMessage("\u65ad\u7ebf\u91cd\u8fde\u4e2d...");
              if (_this._reconnectCount < _AppConst.AppConst.RECONNECTCOUNT) {
                _this._reconnectCount++;
                _this.init();
              } else {
                console.log("\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668");
                clearInterval(_this._reconnectId);
                _this.close();
                if (CC_WECHATGAME) {
                  _AppUtil["default"].showMessage("\u670d\u52a1\u5668\u5df2\u65ad\u5f00,\u6e38\u620f\u5c06\u9000\u51fa");
                  setTimeout(function() {
                    wx_api.exit_game();
                  }, 1500);
                } else _AppUtil["default"].showMessage("\u670d\u52a1\u5668\u5df2\u65ad\u5f00...");
              }
            };
            reconnect();
            this._reconnectId = setInterval(function() {
              console.log("state3", _this.socketClient.ws.readyState);
              _this.socketClient.ws.readyState != WebSocket.OPEN ? reconnect() : clearInterval(_this._reconnectId);
            }, _AppConst.AppConst.RECONNECTINTERVAL);
          }
        }
      }, {
        key: "sendHeartBeat",
        value: function sendHeartBeat() {
          this._heartCD++;
          this.sendData({
            LoginMsg: {
              Cmd: "heartBeat"
            }
          });
        }
      }, {
        key: "reciveHeartBeat",
        value: function reciveHeartBeat(data) {
          this._heartCD = 0;
        }
      }, {
        key: "update",
        value: function update() {
          this.socketClient && this.socketClient.ws.readyState == WebSocket.OPEN && this.sendHeartBeat();
          this._heartCD >= 2 && this.onClose();
        }
      }, {
        key: "sendHttpRequest",
        value: function sendHttpRequest(action, method, data, callback) {
          _HttpClient["default"].send(action, method, data, callback);
        }
      }, {
        key: "close",
        value: function close() {
          this.forcedClose = true;
          this.socketClient.close();
          this.state = WebSocket.CLOSING;
        }
      } ]);
      return NetworkManager;
    }();
    exports["default"] = NetworkManager;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../common/NoticeCenter": "NoticeCenter",
    "../define/AppConst": "AppConst",
    "../lib/netlib": "netlib",
    "../netWork/HttpClient": "HttpClient",
    "../netWork/WebsocketClient": "WebsocketClient",
    "../platform/wx": "wx",
    "../utility/AppUtil": "AppUtil"
  } ],
  NoticeCenter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "48491K19d9NzbTS15qRKJJq", "NoticeCenter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NoticeCenter = exports.EventName = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var EventName = {
      net_open: "net_open",
      net_close: "net_close",
      net_error: "net_error",
      net_message: "net_message",
      user_login: "user_login",
      user_register: "user_register",
      web_socket_success: "web_socket_success",
      net_get_rank_list: "net_get_rank_list",
      broad_cast_over: "broad_cast_over",
      tab_index: "tab_index",
      load_scene_success: "load_scene_success",
      show_ui_success: "show_ui_success",
      sub_view_ui: "sub_view_ui",
      video_complete: "video_complete",
      luck_draw_num_update: "luck_draw_num_update",
      open_kuang_ceng: "open_kuang_ceng",
      net_update_chest: "net_update_chest",
      update_coins: "update_coins",
      update_jewel: "update_jewel",
      update_balance: "update_balance",
      per_sec_product: "per_sec_product",
      get_wx_userInfo: "get_wx_userInfo",
      helpDetails: "helpDetails",
      feedbackDetails: "feedbackDetails",
      s2c_chest_increase: "s2c_chest_increase",
      coin_add_speed_change: "coin_add_speed_change",
      guide_step: "guide_step",
      update_yesterday_income: "update_yesterday_income",
      video_count_update: "video_count_update",
      incomeUpdate: "incomeUpdate",
      myUpdate: "myUpdate"
    };
    exports.EventName = EventName;
    var NoticeCenter = function() {
      function NoticeCenter() {
        _classCallCheck(this, NoticeCenter);
      }
      _createClass(NoticeCenter, null, [ {
        key: "sendEvent",
        value: function sendEvent(evtName, data) {
          if (EventName[evtName]) {
            var evt = new cc.Event.EventCustom(evtName, true);
            evt["data"] = data;
            cc.systemEvent.dispatchEvent(evt);
          } else cc.error("\u672a\u5b9a\u4e49\u4e8b\u4ef6:", evtName);
        }
      } ]);
      return NoticeCenter;
    }();
    exports.NoticeCenter = NoticeCenter;
    cc._RF.pop();
  }, {} ],
  PersistRootNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "280c9RLkFJFAJ1WjtOp/R6S", "PersistRootNode");
    "use strict";
    cc.Class({
      extends: cc.Component,
      start: function start() {
        cc.game.isPersistRootNode(this.node) || cc.game.addPersistRootNode(this.node);
      }
    });
    cc._RF.pop();
  }, {} ],
  PhysicsColliderNotification: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "be797mwp1JG7LQWFYe90qpR", "PhysicsColliderNotification");
    "use strict";
    cc.Class({
      editor: false,
      extends: cc.Component,
      properties: {
        notificationName: "",
        _p0: null,
        _p1: null
      },
      start: function start() {
        cc.log(this.node.name);
        var rigidBody = this.getComponent(cc.RigidBody);
        rigidBody.enabledContactListener = true;
      },
      onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
        cc.log(otherCollider.node.name);
        this._p0 = otherCollider.node.position;
      },
      onEndContact: function onEndContact(contact, selfCollider, otherCollider) {
        this._p1 = otherCollider.node.position;
        this.notificationName && cc.director.emit(this.notificationName, contact, this._p0, this._p1);
      }
    });
    cc._RF.pop();
  }, {} ],
  PhysicsManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8784mu5l9KLKS+n8blKNQb", "PhysicsManager");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        active: {
          default: true,
          tooltip: "\u662f\u5426\u542f\u7528\u7269\u7406\u5f15\u64ce"
        },
        aabb: {
          default: true,
          tooltip: "\u662f\u5426\u663e\u793a\u5305\u56f4\u76d2"
        },
        pair: {
          default: true,
          tooltip: "\u6211\u4e5f\u4e0d\u77e5\u9053\u662f\u4ec0\u4e48\u7528:-("
        },
        centerOfMass: {
          default: true,
          tooltip: "\u662f\u5426\u663e\u793a\u4e2d\u5fc3\u70b9"
        },
        joint: {
          default: true,
          tooltip: "\u662f\u5426\u663e\u793a\u5173\u8282\u8fde\u63a5\u7ebf"
        },
        shape: {
          default: true,
          tooltip: "\u662f\u5426\u586b\u5145\u5f62\u72b6"
        },
        mouseJoint: {
          default: false,
          tooltip: "\u662f\u5426\u5f00\u542f\u9f20\u6807\u5173\u8282\uff0c\u53ef\u4ee5\u62d6\u52a8\u52a8\u6001\u521a\u4f53"
        }
      },
      onEnable: function onEnable() {
        var physicsManager = cc.director.getPhysicsManager();
        physicsManager.enabled && this.active && cc.warn("The physical system is enabled\uff01");
        physicsManager.enabled = this.active;
        if (!this.active) return;
        var drawBits = cc.PhysicsManager.DrawBits;
        false;
        physicsManager.debugDrawFlags = 0;
        this._setMouseJoint();
      },
      _setMouseJoint: function _setMouseJoint() {
        if (this.mouseJoint && this.active) {
          var node = this.node;
          var rigidBody = node.getComponent(cc.RigidBody);
          rigidBody || (rigidBody = node.addComponent(cc.RigidBody));
          var mouseJoint = node.getComponent(cc.MouseJoint);
          mouseJoint || (mouseJoint = node.addComponent(cc.MouseJoint));
          rigidBody.type = cc.RigidBodyType.Static;
          mouseJoint.mouseRegion = node;
        }
      },
      onDisable: function onDisable() {
        var physicsManager = cc.director.getPhysicsManager();
        physicsManager.debugDrawFlags = 0;
        physicsManager.enabled = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  PhysicsVelocity: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dfbd7x8QkhMGIN2Vda6mYnA", "PhysicsVelocity");
    "use strict";
    cc.Class({
      editor: false,
      extends: cc.Component,
      properties: {
        linearVelocity: cc.Vec2,
        angularVelocity: 0
      },
      start: function start() {
        this._rigidBody = this.getComponent(cc.RigidBody);
      },
      force: function force() {
        var v2 = this._rigidBody.linearVelocity;
        v2.y = this.linearVelocity.y;
        v2.x = this.linearVelocity.x * (this.node.x > 0 ? 1 : -1);
        this._rigidBody.linearVelocity = v2;
        this.angularVelocity && (this._rigidBody.angularVelocity = this.angularVelocity);
      }
    });
    cc._RF.pop();
  }, {} ],
  ResourceManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f1be96PZn5DmZtErmcsXGZq", "ResourceManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var ResourceManager = function() {
      _createClass(ResourceManager, null, [ {
        key: "getInstance",
        value: function getInstance() {
          ResourceManager.shared || (ResourceManager.shared = new ResourceManager());
          return ResourceManager.shared;
        }
      } ]);
      function ResourceManager() {
        _classCallCheck(this, ResourceManager);
      }
      _createClass(ResourceManager, [ {
        key: "loadAsset",
        value: function loadAsset(path, cc_type, callback) {
          cc.loader.loadRes(path, cc_type, function(err, res) {
            err ? console.log(err.message) : callback(res);
          });
        }
      } ]);
      return ResourceManager;
    }();
    exports["default"] = ResourceManager;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  ScoreNotificationHandle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4105aKHZK1Iz5ouj46jItss", "ScoreNotificationHandle");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        notificationName: "",
        label: cc.Label,
        step: 1,
        score: {
          type: cc.Integer,
          default: 0,
          notify: function notify() {
            this.label.string = this.score.toString();
          }
        }
      },
      onLoad: function onLoad() {
        this.label.string = this.score.toString();
        this.notificationName && cc.director.on(this.notificationName, this.notificationHandle, this);
      },
      notificationHandle: function notificationHandle() {
        this.score += this.step;
      }
    });
    cc._RF.pop();
  }, {} ],
  ScoreVerifyNotificationHandle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "33772MFI35FqKS0avbvdsha", "ScoreVerifyNotificationHandle");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        notificationName: "",
        topToDown: {
          default: false,
          tooltip: "\u4ece\u4e0a\u5411\u4e0b\u78b0\u649e\u6709\u6548",
          notify: function notify() {
            this.topToDown && (this.downToTop = false);
          }
        },
        downToTop: {
          default: false,
          tooltip: "\u4ece\u4e0b\u5f80\u4e0a\u78b0\u649e\u6709\u6548",
          notify: function notify() {
            this.downToTop && (this.topToDown = false);
          }
        },
        leftToRight: {
          default: false,
          tooltip: "\u4ece\u5de6\u5230\u53f3\u78b0\u649e\u6709\u6548",
          notify: function notify() {
            this.leftToRight && (this.rightToLeft = false);
          }
        },
        rightToLeft: {
          default: false,
          tooltip: "\u4ece\u53f3\u5230\u5de6\u78b0\u649e\u6709\u6548",
          notify: function notify() {
            this.rightToLeft && (this.leftToRight = false);
          }
        },
        label: cc.Label,
        step: 1,
        score: {
          type: cc.Integer,
          default: 0,
          notify: function notify() {
            this.label.string = this.score.toString();
          }
        }
      },
      onLoad: function onLoad() {
        this.label.string = this.score.toString();
        this.notificationName && cc.director.on(this.notificationName, this.notificationHandle, this);
      },
      notificationHandle: function notificationHandle(contact, p0, p1) {
        var dx = p1.x - p0.x;
        var dy = p1.y - p0.y;
        var flag = true;
        this.topToDown && (flag = dy < 0);
        this.downToTop && (flag = dy > 0);
        flag && (this.leftToRight ? flag = dx > 0 : this.rightToLeft && (flag = dx < 0));
        flag && (this.score += this.step);
      }
    });
    cc._RF.pop();
  }, {} ],
  SoftKey: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eed01UB1WlD7qxWW6tHeTIO", "SoftKey");
    "use strict";
    var SoftKey = cc.Class({
      extends: cc.Component,
      properties: {
        string: "",
        deleteKey: false,
        targets: [ cc.Component ]
      },
      start: function start() {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.submit();
        });
      },
      submit: function submit() {
        var _this2 = this;
        this.targets.forEach(function(target) {
          if (!target || void 0 == target.string) return;
          if (_this2.deleteKey) {
            var string = target.string;
            string && (target.string = string.substr(0, string.length - 1));
          } else target.string += _this2.string;
        });
      }
    });
    cc.Class.Attr.setClassAttr(SoftKey, "string", "visible", function() {
      return !this.deleteKey;
    });
    cc._RF.pop();
  }, {} ],
  SoundManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58f9eGQt0hBoaB89VdcYiAI", "SoundManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _ManagerCenter = _interopRequireDefault(require("../common/ManagerCenter"));
    var _NoticeCenter = require("../common/NoticeCenter");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var SoundManager = function() {
      _createClass(SoundManager, null, [ {
        key: "getInstance",
        value: function getInstance() {
          SoundManager.shared || (SoundManager.shared = new SoundManager());
          return SoundManager.shared;
        }
      } ]);
      function SoundManager() {
        _classCallCheck(this, SoundManager);
        this.isOpen = true;
        this.bg_value = .5;
        this.eff_value = 1;
        this.music = {
          blackground_music: "music/bg_music",
          button_audio: "music/btn_clip",
          ui_audio: "music/ui_clip",
          reward: "music/reward_clip"
        };
        this.resMgr = _ManagerCenter["default"].getResourceManager();
        this.init();
      }
      _createClass(SoundManager, [ {
        key: "init",
        value: function init() {
          this.isOpen = !_ManagerCenter["default"].getDataManager().localGetItem("offsound");
          cc.log("sound====>>>", this.isOpen);
          this.setBgMusicVolume(this.bg_value);
          this.setEffectVolume(this.eff_value);
        }
      }, {
        key: "getOpen",
        value: function getOpen() {
          return this.isOpen;
        }
      }, {
        key: "playBgMusic",
        value: function playBgMusic() {
          var _this = this;
          if (!this.isOpen) return;
          this.stopAll();
          this.resMgr.loadAsset(this.music.blackground_music, cc.AudioClip, function(res) {
            _this.bgMusicId = cc.audioEngine.playMusic(res, true);
            console.log("play main game music!!", _this.bgMusicId);
          });
        }
      }, {
        key: "playBtnEffect",
        value: function playBtnEffect() {
          if (!this.isOpen) return;
          this.resMgr.loadAsset(this.music.button_audio, cc.AudioClip, function(res) {
            cc.audioEngine.playEffect(res, false);
          });
        }
      }, {
        key: "playUIEffect",
        value: function playUIEffect() {
          if (!this.isOpen) return;
          this.resMgr.loadAsset(this.music.ui_audio, cc.AudioClip, function(res) {
            cc.audioEngine.playEffect(res, false);
          });
        }
      }, {
        key: "playRewardEffect",
        value: function playRewardEffect() {
          this.playEffect(this.music.reward);
        }
      }, {
        key: "playEffect",
        value: function playEffect(path) {
          if (!this.isOpen) return;
          this.resMgr.loadAsset(path, cc.AudioClip, function(res) {
            cc.audioEngine.playEffect(res, false);
          });
        }
      }, {
        key: "stopBgMusic",
        value: function stopBgMusic() {
          cc.audioEngine.stop(this.bgMusicId);
        }
      }, {
        key: "stopAll",
        value: function stopAll() {
          cc.audioEngine.stopAll();
        }
      }, {
        key: "setStop",
        value: function setStop() {
          this.isOpen = false;
          _ManagerCenter["default"].getDataManager().localSetItem("offsound", true);
          this.stopAll();
        }
      }, {
        key: "setPlay",
        value: function setPlay() {
          cc.log("sound////===>>>", "setPlay", this.bgMusicId);
          this.isOpen = true;
          _ManagerCenter["default"].getDataManager().localSetItem("offsound", false);
          this.playBgMusic();
        }
      }, {
        key: "setBgMusicVolume",
        value: function setBgMusicVolume(v) {
          this.bg_value = v;
          null != this.bgMusicId && cc.audioEngine.setVolume(this.bgMusicId, v);
        }
      }, {
        key: "setEffectVolume",
        value: function setEffectVolume(v) {
          this.eff_value = v;
          cc.audioEngine.setEffectsVolume(v);
        }
      } ]);
      return SoundManager;
    }();
    exports["default"] = SoundManager;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../common/ManagerCenter": "ManagerCenter",
    "../common/NoticeCenter": "NoticeCenter"
  } ],
  SpriteEx: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6cbe6Ud4ctAXqUcH2g1JtCA", "SpriteEx");
    "use strict";
    var SpriteEx = cc.Class({
      extends: cc.Sprite,
      properties: {
        spriteFrames: [ cc.SpriteFrame ],
        _index: 0,
        index: {
          type: cc.Integer,
          set: function set(value) {
            if (value < 0) return;
            this._index = value % this.spriteFrames.length;
            this.spriteFrame = this.spriteFrames[this._index];
          },
          get: function get() {
            return this._index;
          }
        }
      },
      next: function next() {
        this.index++;
      }
    });
    cc.Class.Attr.setClassAttr(SpriteEx, "spriteFrame", "visible", false);
    cc.Class.Attr.setClassAttr(SpriteEx, "_atlas", "visible", false);
    cc.Class.Attr.setClassAttr(SpriteEx, "fillType", "visible", function() {
      return this._type === cc.Sprite.Type.FILLED;
    });
    cc.Class.Attr.setClassAttr(SpriteEx, "fillCenter", "visible", function() {
      return this._type === cc.Sprite.Type.FILLED;
    });
    cc.Class.Attr.setClassAttr(SpriteEx, "fillStart", "visible", function() {
      return this._type === cc.Sprite.Type.FILLED;
    });
    cc.Class.Attr.setClassAttr(SpriteEx, "fillEnd", "visible", function() {
      return this._type === cc.Sprite.Type.FILLED;
    });
    cc.Class.Attr.setClassAttr(SpriteEx, "fillRange", "visible", function() {
      return this._type === cc.Sprite.Type.FILLED;
    });
    cc.Class.Attr.setClassAttr(SpriteEx, "srcBlendFactor", "visible", function() {
      return this._type === cc.Sprite.Type.FILLED;
    });
    cc.Class.Attr.setClassAttr(SpriteEx, "dstBlendFactor", "visible", function() {
      return this._type === cc.Sprite.Type.FILLED;
    });
    cc._RF.pop();
  }, {} ],
  SpriteIndex: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "78a02ETwQFEBZ3KBcEdWmEz", "SpriteIndex");
    "use strict";
    cc.Class({
      extends: cc.Component,
      editor: false,
      properties: {
        spriteFrames: [ cc.SpriteFrame ],
        _index: 0,
        index: {
          type: cc.Integer,
          set: function set(value) {
            if (value < 0) return;
            this._index = value % this.spriteFrames.length;
            var sprite = this.node.getComponent(cc.Sprite);
            sprite.spriteFrame = this.spriteFrames[this._index];
          },
          get: function get() {
            return this._index;
          }
        }
      },
      next: function next() {
        this.index++;
      }
    });
    cc._RF.pop();
  }, {} ],
  StringConf: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6a6b07GEZdG+7LU/2JunNCK", "StringConf");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StringConf = void 0;
    var _StringConf;
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    var StringConf = (_StringConf = {
      firstTitle: "\u9996\u9875",
      incomeTitle: "\u6536\u76ca",
      myInfoTitle: "\u6211\u7684",
      questTitle: "\u4efb\u52a1",
      minerMechine: "\u77ff\u673a",
      active: "\u6d3b\u52a8",
      directions: "\u8bf4\u660e",
      wheel: "\u5927\u8f6c\u76d8",
      tupu: "\u56fe\u8c31",
      gonggao: "\u516c\u544a",
      shenyin: "\u58f0\u97f3",
      helpView: "\u5e2e\u52a9\u4e0e\u53cd\u9988",
      fhbss: "\u5206\u7ea2\u77f3{0}",
      getMoney: "\u83b7\u5f97{0}\u5143",
      yuan: "\u5143",
      hongbaolv: "{0}\u7ea7\u7ea2\u5305",
      kkcs: "\u9700\u8981\u91c7\u77ff\u5230{0}\u5c42",
      tdss: "\u9700\u8981\u62db\u52df{0}\u4e2a\u5f92\u5f1f",
      tsss: "\u9700\u8981\u62db\u52df{0}\u4e2a\u5f92\u5b59",
      sycs: "\u5269\u4f59{0}\u6b21",
      kqkc: "\u5f00\u542f\u7b2c{0}\u5c42\u9700\u8981",
      sjcg: "\u5347\u7ea7\u6210\u529f",
      zwfh: "\u6682\u65e0\u5206\u7ea2",
      zwlq: "\u6682\u672a\u9886\u53d6",
      kqqtkc: "\u8bf7\u5148\u5f00\u542f\u5176\u4ed6\u77ff\u5c42",
      gjbx: "\u9ad8\u7ea7\u5b9d\u7bb1",
      ptbx: "\u666e\u901a\u5b9d\u7bb1",
      login: "\u767b\u5f55\u4e2d",
      login_fail: "\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u9000\u51fa\u91cd\u65b0\u767b\u5f55",
      openBXView: "\u5f00\u5b9d\u7bb1",
      shuomingView: "\u8bf4\u660e",
      noticeListView: "\u901a\u77e5",
      cashWithdrawalRecordView: "\u63d0\u73b0\u8bb0\u5f55",
      myTeamView: "\u6211\u7684\u56e2\u961f",
      profitDetailedView: "\u6536\u76ca\u660e\u7ec6",
      helpAndShareView: "\u5e2e\u52a9\u4e0e\u53cd\u9988"
    }, _defineProperty(_StringConf, "helpView", "\u8be6\u7ec6\u5e2e\u52a9"), _defineProperty(_StringConf, "feedbackView", "\u8be6\u7ec6\u53cd\u9988"), 
    _defineProperty(_StringConf, "sharePosterView", "\u5206\u4eab\u6d77\u62a5"), _defineProperty(_StringConf, "writeFeedbackView", "\u586b\u5199\u53cd\u9988"), 
    _defineProperty(_StringConf, "aBonusView", "\u5206\u7ea2"), _defineProperty(_StringConf, "bonusGemExplainView", "\u5206\u7ea2\u5b9d\u77f3\u8bf4\u660e"), 
    _defineProperty(_StringConf, "gemGetRecordView", "\u5b9d\u77f3\u83b7\u53d6\u8bb0\u5f55"), 
    _defineProperty(_StringConf, "waitActivationView", "\u5f85\u6fc0\u6d3b"), _defineProperty(_StringConf, "MinerCreatView", "\u5206\u7ea2\u77f3\u660e\u7ec6"), 
    _defineProperty(_StringConf, "MinerIncomeView", "\u6536\u5165\u660e\u7ec6"), _defineProperty(_StringConf, "seniorPartnerProcessView", "\u9ad8\u7ea7\u5408\u4f19\u4eba\u6536\u76ca"), 
    _defineProperty(_StringConf, "thousandPersonsView", "\u5343\u4eba\u5408\u4f19\u4eba\u6536\u76ca"), 
    _defineProperty(_StringConf, "taskActiveAsk", "\u5f92\u5f1f{0}\u4eba\uff0c\u5f92\u5f1f\u5f92\u5b59\u5171{1}\u4eba"), 
    _defineProperty(_StringConf, "taskActiveDes", "<color=#A1A1A1>\u5f92\u5f1f\u5f92\u5b59<color=#C7862A>{0}</c>\u4eba\u4ee5\u4e0a\u770b\u5b8c\u89c6\u9891{1}\u6b21</c>"), 
    _defineProperty(_StringConf, "taskActiveDes1", "<color=#A1A1A1>\u8fd8\u5dee<color=#C7862A>{0}</c>\u4eba\u4ee5\u4e0a\u770b\u5b8c\u89c6\u9891{1}\u6b21</c>"), 
    _defineProperty(_StringConf, "taskActiveTitle", "{0}\u7ea7\u56e2\u957f"), _defineProperty(_StringConf, "receiveBornsDes", "\u60a8\u5f53\u524d\u6ca1\u6709\u5206\u7ea2\u8d44\u683c\uff0c\u8bf7\u5148\u9080\u8bf7\u597d\u53cb"), 
    _defineProperty(_StringConf, "receiveBornsDes1", "\u60a8\u7684\u5206\u7ea2\u8d44\u683c\u8fd8\u5269\uff1a"), 
    _defineProperty(_StringConf, "askDes", "\u6bcf\u65e5\u9080\u8bf7\u524d3\u540d\u597d\u53cb\u53ef\u4eab0.03\u4e2a\u5206\u7ea2\u77f3"), 
    _defineProperty(_StringConf, "askDes1", "\u6bcf\u9080\u8bf71\u540d\u5f92\u5f1f\uff0c\u968f\u673a\u83b7\u5f97\u5206\u7ea2\u77f3"), 
    _StringConf);
    exports.StringConf = StringConf;
    cc._RF.pop();
  }, {} ],
  TouchGraphics: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3b7e4fsW5J3bJDTRbisyD8", "TouchGraphics");
    "use strict";
    var TouchGraphics = cc.Class({
      extends: cc.Graphics,
      properties: {
        _points: null
      },
      onLoad: function onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
      },
      _onTouchStart: function _onTouchStart(event) {
        this._points = [];
        var location = event.getLocation();
        this._drawGraphics(location);
      },
      drawGraphics: function drawGraphics(location) {
        this._drawGraphics(location);
      },
      _onTouchMove: function _onTouchMove(event) {
        var location = event.getLocation();
        this._drawGraphics(location);
      },
      _onTouchEnd: function _onTouchEnd(event) {
        var location = event.getLocation();
        this._drawGraphics(location);
        this.node.emit("draw-end", this);
      },
      getTrailPoints: function getTrailPoints() {
        return this._points;
      },
      _drawGraphics: function _drawGraphics(location) {
        var point = this.node.convertToNodeSpaceAR(location);
        var rect = this.node.getBoundingBox();
        rect.origin = cc.v2(0, 0);
        if (!rect.contains(this.node.convertToNodeSpace(location))) return;
        if (0 === this._points.length) {
          this.moveTo(point.x, point.y);
          this._points.push(point);
          this.node.emit("draw-start", this);
          return;
        }
        if (0 === point.x && 0 === point.y) return;
        var last = this._points[this._points.length - 1];
        if (last && last.sub(point).mag() < 4) return;
        this._points.push(point);
        this.lineTo(point.x, point.y);
        this.stroke();
        this.node.emit("draw-move", this);
      }
    });
    cc.Class.Attr.setClassAttr(TouchGraphics, "miterLimit", "visible", false);
    module.exports = TouchGraphics;
    cc._RF.pop();
  }, {} ],
  TouchRotation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7c655pHjJpEEoFr1IpZpyX4", "TouchRotation");
    "use strict";
    cc.pRotation = function(startPoint, endPoint) {
      var x = endPoint.x - startPoint.x;
      var y = endPoint.y - startPoint.y;
      var radian = Math.atan2(x, y);
      var rotation = 180 * radian / Math.PI;
      rotation < 0 && (rotation = 360 + rotation);
      return rotation;
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        justNodes: [ cc.Node ]
      },
      start: function start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
      },
      _getRotation: function _getRotation(event) {
        var location = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        var rotation = parseInt(cc.pRotation(this.node.position, location), 10);
        return rotation;
      },
      _onTouchStart: function _onTouchStart(event) {
        this.rotation = this._getRotation(event);
      },
      _onTouchMove: function _onTouchMove(event) {
        var rotation = this._getRotation(event);
        var delta = rotation - this.rotation;
        this.rotation = rotation;
        this.node.rotation += delta;
        this._handleJustNodes();
      },
      _handleJustNodes: function _handleJustNodes() {
        var _this = this;
        this.justNodes.forEach(function(node) {
          node.rotation = -_this.node.rotation;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  UIManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4b467zQ2gxNHKJmFuq0CIZl", "UIManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _ManagerCenter = _interopRequireDefault(require("../common/ManagerCenter"));
    var _AppConst = require("../define/AppConst");
    var _UIconst = require("../define/UIconst");
    var _comFunc = require("../common/comFunc");
    var _NoticeCenter = require("../common/NoticeCenter");
    var _netlib = require("../lib/netlib");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var UIManager = function() {
      _createClass(UIManager, null, [ {
        key: "getInstance",
        value: function getInstance() {
          UIManager.shared || (UIManager.shared = new UIManager());
          return UIManager.shared;
        }
      } ]);
      function UIManager() {
        _classCallCheck(this, UIManager);
        this._uiIndex = 0;
        this.showList = {};
        this.scheduleFunc = {};
        this.subView = null;
        cc.systemEvent.on(_NoticeCenter.EventName.load_scene_success, this.sceneChange, this);
      }
      _createClass(UIManager, [ {
        key: "getParent",
        value: function getParent() {
          return cc.find("Canvas/ui_Layer", cc.director.getScene());
        }
      }, {
        key: "getSubView",
        value: function getSubView() {
          return cc.find("Canvas/ui_node/subView", cc.director.getScene());
        }
      }, {
        key: "show",
        value: function show(name, params) {
          var _this = this;
          var action = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (this.showList[name]) return;
          var cb = function cb() {
            action && _this.runShowAction(_this.showList[name], name);
          };
          this._createUI(name, params, cb, action);
        }
      }, {
        key: "_createUI",
        value: function _createUI(name, param) {
          var _this2 = this;
          var callback = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
          var action = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          cc.log(name, param);
          var path = _AppConst.AppConst.UI_PATH + name;
          _ManagerCenter["default"].getResourceManager().loadAsset(path, cc.Prefab, function(prefab) {
            var ui = cc.instantiate(prefab);
            _this2.getParent().active = true;
            if (_this2.getParent().getComponent("ui_Layer")) {
              _this2.getParent().getComponent("ui_Layer").setInfoPos(ui);
              _this2.getParent().getComponent("ui_Layer").setCanClose(false);
            }
            ui.parent = _this2.getParent().getChildByName("layer");
            ui._uiIndex = _this2._uiIndex;
            _this2._uiIndex++;
            _this2.showList[name] = ui;
            action ? ui.setScale(.5) : _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.show_ui_success, name);
            var script = ui.getComponent(name);
            script && "function" == typeof script.init && script.init(param);
            console.log("create " + path + " success");
            "function" == typeof callback && callback();
          });
        }
      }, {
        key: "hide",
        value: function hide(name) {
          var isClear = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (this.showList[name] && this.showList[name].isValid) {
            if (isClear) {
              this.showList[name].destroy();
              console.log("destory ui ", name);
              delete this.showList[name];
            } else this.showList[name].active = false;
            if (0 == Object.keys(this.showList).length) {
              this.getParent().getChildByName("layer").removeAllChildren();
              this.getParent().active = false;
            }
          }
        }
      }, {
        key: "openSubView",
        value: function openSubView(name, param) {
          var _this3 = this;
          this.removeAllUI();
          this.closeSubView();
          var path = _AppConst.AppConst.UI_PATH + name;
          _ManagerCenter["default"].getResourceManager().loadAsset(path, cc.Prefab, function(prefab) {
            var ui = cc.instantiate(prefab);
            _this3.getSubView().active = true;
            ui.parent = _this3.getSubView();
            _this3.subView = ui;
            var script = ui.getComponent(name);
            script && "function" == typeof script.init && script.init(param);
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.sub_view_ui, name);
          });
        }
      }, {
        key: "closeSubView",
        value: function closeSubView() {
          if (this.subView && this.subView.isValid) {
            this.subView.destroy();
            this.subView = null;
            this.getSubView().active = false;
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.sub_view_ui);
          }
        }
      }, {
        key: "removeAllUI",
        value: function removeAllUI() {
          cc.log("remove all ui");
          for (var ui in this.showList) ui != _UIconst.UIconst.rewardView && this.hide(ui);
        }
      }, {
        key: "removeTopUI",
        value: function removeTopUI() {
          var topUI = "";
          var max = -1;
          for (var ui in this.showList) {
            var uiIndex = this.showList[ui]._uiIndex;
            if (uiIndex > max) {
              max = uiIndex;
              topUI = ui;
            }
          }
          topUI && topUI != _UIconst.UIconst.rewardView && this.hide(topUI);
        }
      }, {
        key: "getListLength",
        value: function getListLength() {
          return Object.keys(this.showList).length;
        }
      }, {
        key: "sceneChange",
        value: function sceneChange() {
          console.log("//////sceneChange");
          this.showList = {};
          this.unSchedule();
        }
      }, {
        key: "runShowAction",
        value: function runShowAction(node, name) {
          var a1 = cc.scaleTo(.15, 1);
          var a2 = cc.callFunc(function() {
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.show_ui_success, name);
          });
          node.runAction(cc.sequence(a1, a2));
        }
      }, {
        key: "setCountDown",
        value: function setCountDown(name, time, label, callback, target, prestr) {
          var _this4 = this;
          time = Math.floor(time);
          prestr = prestr || "";
          this.unSchedule(name);
          var cb = function cb() {
            if (time > 0) {
              time--;
              label.string = prestr + _comFunc.comFunc.getHHMMSSTime(time);
              if (time <= 0 && "function" == typeof callback) {
                callback.apply(target);
                _this4.unSchedule(name);
              }
            } else _this4.unSchedule(name);
          };
          this.scheduleFunc[name] = {
            func: cb,
            tar: target
          };
          label.string = prestr + _comFunc.comFunc.getHHMMSSTime(time);
          cc.director.getScheduler().schedule(cb, target, 1, time, 0, false);
        }
      }, {
        key: "checkUIOpen",
        value: function checkUIOpen(uiName) {
          if (this.showList[uiName]) return true;
          return false;
        }
      }, {
        key: "unSchedule",
        value: function unSchedule(name) {
          if (name) {
            for (var _key in this.scheduleFunc) if (_key == name) {
              cc.log("\u6ce8\u9500\u8ba1\u65f6\u5668", _key);
              var _obj = this.scheduleFunc[_key];
              cc.director.getScheduler().unschedule(_obj.func, _obj.tar);
              delete this.scheduleFunc[name];
            }
          } else {
            for (var key in this.scheduleFunc) {
              cc.log("\u6ce8\u9500\u8ba1\u65f6\u5668", key);
              var obj = this.scheduleFunc[key];
              cc.director.getScheduler().unschedule(obj.func, obj.tar);
            }
            this.scheduleFunc = {};
          }
        }
      } ]);
      return UIManager;
    }();
    exports["default"] = UIManager;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../common/ManagerCenter": "ManagerCenter",
    "../common/NoticeCenter": "NoticeCenter",
    "../common/comFunc": "comFunc",
    "../define/AppConst": "AppConst",
    "../define/UIconst": "UIconst",
    "../lib/netlib": "netlib"
  } ],
  UIconst: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9ede4UZfmlDGYXwHHS2oUjA", "UIconst");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UIconst = void 0;
    var UIconst = {
      loading: "loading",
      pop_window: "pop_window",
      tab_window: "tab_window",
      tips_window: "tips_window",
      model_tips: "model_tips",
      userNameView: "userNameView",
      fastGetABonusGem: "fastGetABonusGem",
      cashWithdrawalView: "cashWithdrawalView",
      cashWithdrawalRecordView: "cashWithdrawalRecordView",
      cashWithdrawalTipView: "cashWithdrawalTipView",
      helpAndShareView: "helpAndShareView",
      writeFeedbackView: "writeFeedbackView",
      helpView: "helpView",
      feedbackView: "feedbackView",
      myTeamView: "myTeamView",
      profitDetailedView: "profitDetailedView",
      sharePosterView: "sharePosterView",
      aBonusView: "aBonusView",
      bonusGemExplainView: "bonusGemExplainView",
      gemGetRecordView: "gemGetRecordView",
      waitActivationView: "waitActivationView",
      minerView: "minerView",
      bonusGemView: "bonusGemView",
      hongbaoView: "hongbaoView",
      myLevelView: "myLevelView",
      rankView: "rankView",
      rewardView: "rewardView",
      tupuView: "tupuView",
      wheelView: "wheelView",
      wheelRewardView: "wheelRewardView",
      offLineView: "offLineView",
      openBXView: "openBXView",
      shuomingView: "shuomingView",
      getCoinsView: "getCoinsView",
      getChestView: "getChestView",
      activeView: "activeView",
      noticeListView: "noticeListView",
      teachView: "teachView",
      MinerCreatView: "MinerCreatView",
      MinerIncomeView: "MinerIncomeView",
      seniorPartnerProcessView: "seniorPartnerProcessView",
      thousandPersonsView: "thousandPersonsView"
    };
    exports.UIconst = UIconst;
    cc._RF.pop();
  }, {} ],
  UpdateRotation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8239oSEKtBGbsrrkjSGxlC", "UpdateRotation");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        step: {
          type: cc.Float,
          default: 1
        }
      },
      update: function update() {
        this.node.rotation += this.step;
      }
    });
    cc._RF.pop();
  }, {} ],
  VersionLabel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49669TGpPVAYbR31bAWoHj7", "VersionLabel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      editor: false,
      properties: {
        default: "???",
        moduleName: {
          default: "",
          notify: function notify(oldValue) {
            if (false, oldValue === this.moduleName) return;
            this._updateContent();
          }
        }
      },
      start: function start() {
        this.label = this.getComponent(cc.Label);
        this._updateContent();
      },
      _updateContent: function _updateContent() {
        var _this = this;
        if (cc.sys.isNative) {
          var remoteAssets = cc.path.join(jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/", "remote-assets");
          var _url = cc.path.join(remoteAssets, this.moduleName, "-project.manifest");
          var content = jsb.fileUtils.getStringFromFile(_url);
          if (content) {
            this._setVersion(content);
            return;
          }
        }
        var url = "manifest/".concat(this.moduleName, "-project");
        this._getManifestContent(url, function(content) {
          _this._setVersion(content);
        });
      },
      _getManifestContent: function _getManifestContent(url, cb) {
        cc.loader.loadRes(url, cc.Asset, null, function(error, asset) {
          if (error) {
            cb(null);
            return;
          }
          var content = cc.loader.getRes(asset.nativeUrl);
          cb(content);
        });
      },
      _setVersion: function _setVersion(content) {
        var data;
        try {
          data = JSON.parse(content);
          this.label.string = data.version;
        } catch (e) {
          cc.warn(e);
          this.label.string = this["default"];
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  WebsocketClient: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "44189WWq1JAW7Wqb14P9Zo6", "WebsocketClient");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _AppConst = require("../define/AppConst");
    var _NoticeCenter = require("../common/NoticeCenter");
    function _typeof(obj) {
      "@babel/helpers - typeof";
      _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function _typeof(obj) {
        return typeof obj;
      } : function _typeof(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      return _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var WebsocketClient = function() {
      function WebsocketClient() {
        _classCallCheck(this, WebsocketClient);
      }
      _createClass(WebsocketClient, [ {
        key: "init",
        value: function init() {
          var _this = this;
          console.log("\u8fde\u63a5\u4e2d...", _AppConst.AppConst.WEBSOCK_API);
          this.ws = new WebSocket(_AppConst.AppConst.WEBSOCK_API);
          this.ws.onopen = function(event) {
            _this.ws.binaryType = "arraybuffer";
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.net_open, event);
          };
          this.ws.onerror = function(event) {
            cc.log(event);
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.net_error, event);
          };
          this.ws.onmessage = function(event) {
            var ay = new Uint8Array(event.data);
            function uintToString(uintArray) {
              var encodedString = String.fromCharCode.apply(null, uintArray), decodedString = decodeURIComponent(escape(encodedString));
              return decodedString;
            }
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.net_message, _this.decode(uintToString(ay)));
          };
          this.ws.onclose = function(event) {
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.net_close, event);
          };
        }
      }, {
        key: "sendData",
        value: function sendData(data) {
          null != this.ws && this.ws.readyState == WebSocket.OPEN && this.ws.send(this.encode(data));
        }
      }, {
        key: "decode",
        value: function decode(data) {
          try {
            data = JSON.parse(data);
          } catch (e) {}
          return data;
        }
      }, {
        key: "encode",
        value: function encode(data) {
          "object" === _typeof(data) && (data = JSON.stringify(data));
          return data;
        }
      }, {
        key: "close",
        value: function close() {
          null != this.ws && this.ws.close();
        }
      } ]);
      return WebsocketClient;
    }();
    exports["default"] = WebsocketClient;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../common/NoticeCenter": "NoticeCenter",
    "../define/AppConst": "AppConst"
  } ],
  WxManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "094ddxoF+tGa6i8rVDXKMqM", "WxManager");
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function _typeof(obj) {
        return typeof obj;
      } : function _typeof(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var wx_api = _interopRequireWildcard(require("./wx"));
    var _AppConst = require("../define/AppConst");
    var _netlib = require("../lib/netlib");
    var _ManagerCenter = _interopRequireDefault(require("../common/ManagerCenter"));
    var _AppUtil = _interopRequireDefault(require("../utility/AppUtil"));
    var _comFunc = require("../common/comFunc");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== _typeof(obj) && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var shareMsg = [ "\u793c\u7269\u4e0d\u8bf7\u81ea\u6765\uff0c\u723d\u5feb\u7545\u73a9\uff0c\u91cd\u56de\u7f8e\u4e3d\u3002", "\u51cf\u80a5\u6ca1\u6709\u52a8\u529b\uff1f\u548c\u670b\u53cb\u4e00\u8d77\uff0c\u53d8\u56de\u7f8e\u4e3d\u7684\u81ea\u5df1\u3002", "\u4ece\u80d6\u599e\u5230\u5973\u795e\uff0c\u6211\u53ea\u7528\u4e867\u5929\uff01", "\u5b81\u8981\u7626\u7684\u96f7\u540c\uff0c\u4e5f\u4e0d\u80d6\u7684\u7cbe\u81f4\u3002", "\u73a9\u4e00\u73a9\u5c31\u7626\u5c31\u7f8e\uff0c\u4e0d\u997f\u4e0d\u7d2f\u8fd8\u51cf\u80a5\u3002" ];
    var WxManager = function() {
      _createClass(WxManager, null, [ {
        key: "getInstance",
        value: function getInstance() {
          WxManager.shared || (WxManager.shared = new WxManager());
          return WxManager.shared;
        }
      } ]);
      function WxManager() {
        _classCallCheck(this, WxManager);
        this.share_time = 0;
        this.share_time_array = [];
        this.share_count = 0;
        this.reward_call_back = null;
        this.shareImgId = 0;
        this.initerAd_last_show_time = 0;
        this.init();
      }
      _createClass(WxManager, [ {
        key: "init",
        value: function init() {
          var _this = this;
          this.data_mgr = _ManagerCenter["default"].getDataManager();
          this.ui_mgr = _ManagerCenter["default"].getUIManager();
          wx_api.on_show();
          wx_sdk.on_show_callback = function(res) {
            _this.doShareResult();
          };
          this.getLunchInfo();
        }
      }, {
        key: "initAd",
        value: function initAd() {
          if (this.ad || this.InterAd) return;
          this.ad = wx_api.create_video_ad_impl(_AppConst.AppConst.AdUnitId);
          this.InterAd = wx_api.create_Interstitial_ad_impl(_AppConst.AppConst.AdUnitId_Inter);
        }
      }, {
        key: "share",
        value: function share(reward_call_back, title) {
          cc.log("weixin share");
          if (!CC_WECHATGAME) {
            reward_call_back && reward_call_back();
            return;
          }
          this.shareImgId = 0;
          this.reward_call_back = reward_call_back;
          this.share_time = Date.now();
          this.share_count++;
          var shareImg = this.getShareImg();
          wx_api.share_app_message(shareImg.text, shareImg.url, "name=zhhf&id=123", shareImg.id);
        }
      }, {
        key: "shareImg",
        value: function shareImg(imgId, reward_call_back) {
          cc.log("weixin shareImg");
          if (!CC_WECHATGAME) {
            reward_call_back && reward_call_back();
            return;
          }
          if (reward_call_back) {
            this.reward_call_back = reward_call_back;
            this.share_time = Date.now();
            this.share_count++;
          }
          this.shareImgId = imgId;
          var text = "\u6765\u8003\u8003\u4f60\u7684\u773c\u529b,\u8d85\u7ea7\u4f11\u95f2\u7684\u62fc\u56fe\u6e38\u620f\uff01";
          var url = _AppConst.AppConst.RES_URL + "/imgData/img/" + imgId + ".jpg";
          wx_api.share_app_message(text, url, "", null);
        }
      }, {
        key: "shareForInvite",
        value: function shareForInvite() {
          var title = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _AppConst.AppConst.GAME_NAME;
          var reason = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          var index = Math.ceil(Math.random() * shareMsg.length) - 1;
          shareMsg[index] && (title = shareMsg[index]);
          var shareImg = this.getShareImg();
          wx_api.share_app_message(title, shareImg.url, "uid=" + this.data_mgr.getID() + "&reason=" + reason, shareImg.id);
        }
      }, {
        key: "doShareResult",
        value: function doShareResult() {
          var _this2 = this;
          if (0 == this.share_time) return;
          var diff_time = Date.now() - this.share_time;
          if (this.checkShareSuccess(diff_time)) {
            console.log("\u5206\u4eab\u6210\u529f");
            this.reward_call_back && this.reward_call_back();
            this.reward_call_back = null;
          } else wx_api.show_modal("\u5206\u4eab\u5931\u8d25", "\u8bf7\u5206\u4eab\u5230\u4e0d\u540c\u7684\u7fa4", "\u91cd\u65b0\u5206\u4eab", true, function(res) {
            res.confirm && (_this2.shareImgId && _this2.shareImgId > 0 ? _this2.shareImg(_this2.shareImgId, _this2.reward_call_back) : _this2.share(_this2.reward_call_back));
            res.cancel && (_this2.reward_call_back = null);
          });
          this.share_time = 0;
        }
      }, {
        key: "checkShareSuccess",
        value: function checkShareSuccess(time) {
          if (this.share_count >= 2) return true;
          if (time < 2e3) return false;
          var len = this.share_time_array.length;
          if (len > 0) {
            var result = this.share_time_array.some(function(t) {
              var diff = Math.abs(time - t);
              return diff < 500;
            });
            if (result) return false;
          }
          this.share_time_array.push(time);
          this.share_count = 0;
          return true;
        }
      }, {
        key: "getLunchInfo",
        value: function getLunchInfo() {
          var info = wx_api.get_launch_options_sync();
          console.log("--------lunch info---------");
          console.log(info);
        }
      }, {
        key: "setSharMenu",
        value: function setSharMenu() {
          var shareImg = this.getShareImg();
          wx_api.show_share_menu(true);
          wx_api.on_share_app_message(shareImg.text, shareImg.url, "", shareImg.id);
        }
      }, {
        key: "setOpenData",
        value: function setOpenData(value, star) {
          var key = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "puzzle";
          var vobj = {
            wxgame: {
              score: value,
              star: star,
              update_time: Date.now()
            }
          };
          wx_api.set_open_data([ {
            key: key,
            value: JSON.stringify(vobj)
          } ]);
        }
      }, {
        key: "showVideoAd",
        value: function showVideoAd(reward_call_back) {
          var _this3 = this;
          var isForce = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          var imgId = arguments.length > 2 ? arguments[2] : void 0;
          console.log("showVideoAd", imgId);
          if (!CC_WECHATGAME) {
            reward_call_back();
            return;
          }
          var isAd = true;
          Math.random() < .5 && (isAd = false);
          if (!isAd) {
            console.log("do share", imgId);
            imgId ? this.shareImg(imgId, reward_call_back) : this.share(reward_call_back);
            return;
          }
          wx_sdk.close_video_callback = reward_call_back;
          wx_sdk.error_video_callback = function() {
            _AppConst.AppConst.ISWX_Review ? _AppUtil["default"].showMessage("\u6b64\u529f\u80fd\u6682\u672a\u5f00\u653e") : imgId ? _this3.shareImg(imgId, reward_call_back) : _this3.share(reward_call_back);
          };
          this.ad && this.ad.show()["catch"](function(err) {
            console.log("\u6fc0\u52b1\u5e7f\u544a \u663e\u793a\u5931\u8d25");
            isForce ? _AppUtil["default"].showMessage("\u5e7f\u544a\u8fd8\u6ca1\u6709\u51c6\u5907\u597d...") : wx_sdk.error_video_callback();
          }).then(function() {
            console.log("\u6fc0\u52b1\u5e7f\u544a \u663e\u793a\u6210\u529f");
          });
        }
      }, {
        key: "showInterAd",
        value: function showInterAd() {
          if (!CC_WECHATGAME) return;
          if (_comFunc.comFunc.getNow() - this.initerAd_last_show_time < 120) return;
          this.initerAd_last_show_time = _comFunc.comFunc.getNow();
          this.InterAd.show()["catch"](function(err) {
            console.log(err);
            console.log("\u63d2\u5c4f\u5e7f\u544a \u663e\u793a\u5931\u8d25");
          }).then(function() {
            console.log("\u63d2\u5c4f\u5e7f\u544a \u663e\u793a\u6210\u529f");
          });
        }
      }, {
        key: "getShareImg",
        value: function getShareImg() {
          var imgs = this.data_mgr.getWxShareImgs();
          var index = Math.ceil(Math.random() * imgs.length) - 1;
          if (imgs[index]) return imgs[index];
          return "";
        }
      }, {
        key: "openKeFu",
        value: function openKeFu() {
          wx_api.open_ke_fu();
        }
      }, {
        key: "shake",
        value: function shake() {
          wx_api.vibrateLong();
        }
      }, {
        key: "postMessage",
        value: function postMessage(data) {
          wx_api.post_message(data);
        }
      }, {
        key: "login",
        value: function login() {
          CC_WECHATGAME && wx_api.wx_login();
        }
      }, {
        key: "openOtherMiniPro",
        value: function openOtherMiniPro(appId) {
          wx_api.open_other_miniPro(appId);
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo() {
          if (!CC_WECHATGAME) return;
          window.wx.getSetting({
            success: function success(res) {
              var authSetting = res.authSetting;
              if (true === authSetting["scope.userInfo"]) ; else if (false === authSetting["scope.userInfo"]) ; else {
                wx_sdk.get_user_info_callback = function(userInfo) {
                  console.log(userInfo);
                  _netlib.netlib.getInstance().updateUserInfo({
                    NickName: userInfo.nickName,
                    AvatarUrl: userInfo.avatarUrl
                  });
                };
                wx_api.create_user_info_btn();
              }
            },
            fail: function fail(res) {
              console.log("wx getSetting fail:" + res);
            }
          });
        }
      } ]);
      return WxManager;
    }();
    exports["default"] = WxManager;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../common/ManagerCenter": "ManagerCenter",
    "../common/comFunc": "comFunc",
    "../define/AppConst": "AppConst",
    "../lib/netlib": "netlib",
    "../utility/AppUtil": "AppUtil",
    "./wx": "wx"
  } ],
  ZIndex: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aa58dfQtP5KKpDO50SZNQos", "ZIndex");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        zIndex: {
          type: cc.Integer,
          default: 0
        }
      },
      onLoad: function onLoad() {
        this.node.zIndex = this.zIndex;
      }
    });
    cc._RF.pop();
  }, {} ],
  base64: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0a31426RX1Gr5GBc1KOh1St", "base64");
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function _typeof(obj) {
        return typeof obj;
      } : function _typeof(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      return _typeof(obj);
    }
    (function() {
      var id = "base64", m = {}, b64e = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/", "=" ], b64d = {
        A: 0,
        B: 1,
        C: 2,
        D: 3,
        E: 4,
        F: 5,
        G: 6,
        H: 7,
        I: 8,
        J: 9,
        K: 10,
        L: 11,
        M: 12,
        N: 13,
        O: 14,
        P: 15,
        Q: 16,
        R: 17,
        S: 18,
        T: 19,
        U: 20,
        V: 21,
        W: 22,
        X: 23,
        Y: 24,
        Z: 25,
        a: 26,
        b: 27,
        c: 28,
        d: 29,
        e: 30,
        f: 31,
        g: 32,
        h: 33,
        i: 34,
        j: 35,
        k: 36,
        l: 37,
        m: 38,
        n: 39,
        o: 40,
        p: 41,
        q: 42,
        r: 43,
        s: 44,
        t: 45,
        u: 46,
        v: 47,
        w: 48,
        x: 49,
        y: 50,
        z: 51,
        0: 52,
        1: 53,
        2: 54,
        3: 55,
        4: 56,
        5: 57,
        6: 58,
        7: 59,
        8: 60,
        9: 61,
        "+": 62,
        "/": 63
      };
      m.encode = function() {
        if (window.btoa) return function(str) {
          return window.btoa(unescape(encodeURIComponent(str)));
        };
        return function(str) {
          var i = 0, j = 0, len, a1, a2, a3, b1, b2, b3, b4, value = [];
          str = unescape(encodeURIComponent(str));
          len = str.length;
          while (i < len) {
            a1 = str.charCodeAt(i++) || 0;
            a2 = str.charCodeAt(i++) || 0;
            a3 = str.charCodeAt(i++) || 0;
            b1 = a1 >> 2 & 63;
            b2 = (3 & a1) << 4 | a2 >> 4 & 15;
            b3 = (15 & a2) << 2 | a3 >> 6 & 3;
            b4 = 63 & a3;
            if (!a3) {
              b4 = 64;
              a2 || (b3 = 64);
            }
            value[j++] = b64e[b1];
            value[j++] = b64e[b2];
            value[j++] = b64e[b3];
            value[j++] = b64e[b4];
          }
          return value.join("");
        };
      }();
      m.decode = function() {
        if (window.atob) return function(str) {
          return decodeURIComponent(escape(window.atob(str)));
        };
        return function(str) {
          var i = 0, j = 0, len, b1, b2, b3, b4, a1, a2, a3, value = [];
          str = str.replace(/\=+$/, "").split("");
          len = str.length;
          while (i < len) {
            b1 = b64d[str[i++]] || "";
            b2 = b64d[str[i++]] || "";
            b3 = b64d[str[i++]] || "";
            b4 = b64d[str[i++]] || "";
            a1 = (63 & b1) << 2 | b2 >> 4 & 3;
            a2 = (15 & b2) << 4 | b3 >> 2 & 15;
            a3 = (3 & b3) << 6 | 63 & b4;
            value[j++] = String.fromCharCode(a1);
            if (a2) {
              value[j++] = String.fromCharCode(a2);
              a3 && (value[j++] = String.fromCharCode(a3));
            }
          }
          return decodeURIComponent(escape(value.join("")));
        };
      }();
      m.encodeSafe = function(str) {
        return m.encode(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, ".");
      };
      m.decodeSafe = function(str) {
        return m.decode(str.replace(/-/g, "+").replace(/_/g, "/").replace(/\./g, "="));
      };
      "object" === ("undefined" === typeof lego ? "undefined" : _typeof(lego)) && lego.define ? lego.define(id, [], function(require, exports, module) {
        module.exports = m;
      }) : "object" === ("undefined" === typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = m : window[id] = m;
    })();
    cc._RF.pop();
  }, {} ],
  broadcast: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68d65jHEYZB8Yj1tjHUC1Wj", "broadcast");
    "use strict";
    var _NoticeCenter = require("../common/NoticeCenter");
    cc.Class({
      extends: cc.Component,
      properties: {
        msg: cc.Label,
        rich: cc.RichText,
        mask: cc.Node,
        bg: cc.Node,
        _useRich: false,
        useRich: {
          tooltip: "\u662f\u5426\u4f7f\u7528\u5bcc\u6587\u672c",
          set: function set(value) {
            this._useRich = value;
            if (value) {
              this.msg.node.active = false;
              this.rich.node.active = true;
            } else {
              this.msg.node.active = true;
              this.rich.node.active = false;
            }
          },
          get: function get() {
            return this._useRich;
          }
        }
      },
      onLoad: function onLoad() {
        this.speed = 100;
        this.node.y = -300;
      },
      start: function start() {
        this.useRich ? this.rich.node.x = this.bg.width / 2 : this.msg.node.x = this.bg.width / 2;
      },
      init: function init(str) {
        if (this.useRich) {
          this.rich.string = str;
          var rect = this.rich.node.getContentSize();
          cc.log("///////", rect.width);
          this.playMove(this.rich.node, rect);
        } else {
          this.msg.string = str;
          this.msg._forceUpdateRenderData(true);
          var _rect = this.msg.node.getContentSize();
          this.playMove(this.msg.node, _rect);
        }
      },
      playMove: function playMove(node, rect) {
        var _this = this;
        var len = rect.width + this.mask.width;
        var to = cc.v2(this.rich.node.x - len, this.rich.node.y);
        cc.tween(node).to(len / this.speed, {
          position: to
        }).call(function() {
          _this.node.destroy();
          _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.broad_cast_over);
        }).start();
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {
    "../common/NoticeCenter": "NoticeCenter"
  } ],
  comFunc: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a4574KFfXNMRb2ah73RVnoU", "comFunc");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.comFunc = void 0;
    var _ManagerCenter = _interopRequireDefault(require("./ManagerCenter"));
    var _HttpClient = _interopRequireDefault(require("../netWork/HttpClient"));
    var _AppConst = require("../define/AppConst");
    var _AppUtil = _interopRequireDefault(require("../utility/AppUtil"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var comFunc = {
      getHHMMSSTime: function getHHMMSSTime(time) {
        time < 0 && (time = 0);
        time = Math.floor(time);
        var hour = Math.floor(time / 3600);
        time -= 3600 * hour;
        var minute = Math.floor(time / 60);
        time -= 60 * minute;
        var second = time;
        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + Math.floor(second) : Math.floor(second);
        return "".concat(hour, ":").concat(minute, ":").concat(second);
      },
      getTBMKNumber: function getTBMKNumber(num) {
        var k = 1e3;
        var m = 1e3 * k;
        var b = 1e3 * m;
        var t = 1e3 * b;
        return num > t ? (num / t).toFixed(1) + "T" : num > b ? (num / b).toFixed(1) + "B" : num > m ? (num / m).toFixed(1) + "M" : num > k ? (num / k).toFixed(1) + "K" : num;
      },
      formatString: function formatString(str) {
        var params = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        if (!params) return str;
        for (var i = 0; i < params.length; i++) str = str.replace("{" + i + "}", params[i]);
        return str;
      },
      getNow: function getNow() {
        return Math.floor(Date.now() / 1e3);
      },
      getSNow: function getSNow() {
        var diff = _ManagerCenter["default"].getDataManager().getDiffTime();
        var now = Date.now() - diff;
        return Math.floor(now / 1e3);
      },
      getSNowNano: function getSNowNano() {
        var diff = _ManagerCenter["default"].getDataManager().getDiffTime();
        var now = Date.now() - diff;
        return now;
      },
      DateFormat: function DateFormat(fmt, time) {
        var date = new Date(time);
        var o = {
          "M+": date.getMonth() + 1,
          "d+": date.getDate(),
          "h+": date.getHours(),
          "m+": date.getMinutes(),
          "s+": date.getSeconds(),
          "q+": Math.floor((date.getMonth() + 3) / 3),
          S: date.getMilliseconds()
        };
        /(y+)/.test(fmt) && (fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var k in o) new RegExp("(" + k + ")").test(fmt) && (fmt = fmt.replace(RegExp.$1, 1 == RegExp.$1.length ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
      },
      getRangeRandom: function getRangeRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
      getShortStr: function getShortStr(str, length) {
        if (!str) return "";
        if (str.length <= length) return str;
        str = str.substr(0, length) + "\xb7\xb7\xb7";
        return str;
      },
      toFixed: function toFixed(num, count) {
        num = Number(num);
        return num ? num.toFixed(count) : 0;
      },
      Clamp: function Clamp(value, min, max) {
        if (value < min) return min;
        if (value > max) return max;
        return value;
      },
      shuffle: function shuffle(arr) {
        var i = arr.length;
        while (i) {
          var j = Math.floor(Math.random() * i--);
          var _ref = [ arr[i], arr[j] ];
          arr[j] = _ref[0];
          arr[i] = _ref[1];
        }
      },
      tableToArray: function tableToArray(t) {
        var arr = [];
        for (var i in t) arr.push(t[i]);
        return arr;
      },
      rearrange: function rearrange(arr, ind) {
        var i, j, buf, temp;
        for (j = 0; j < ind.length; j++) if (ind[j] >= 0) {
          i = ind[j];
          buf = arr[j];
          while (i !== j) {
            var _ref2 = [ arr[i], buf ];
            buf = _ref2[0];
            arr[i] = _ref2[1];
            ind[i] = -ind[i] - 1;
            i = -ind[i] - 1;
          }
          arr[j] = buf;
        } else ind[j] = -ind[j] - 1;
      },
      getNumberInNormalDistribution: function getNumberInNormalDistribution(mean, std_dev) {
        return mean + Math.ceil(this.uniform2NormalDistribution() * std_dev);
      },
      randomNormalDistribution: function randomNormalDistribution() {
        var u = 0, v = 0, w = 0, c = 0;
        do {
          u = 2 * Math.random() - 1;
          v = 2 * Math.random() - 1;
          w = u * u + v * v;
        } while (0 == w || w >= 1);
        c = Math.sqrt(-2 * Math.log(w) / w);
        return u * c;
      },
      uniform2NormalDistribution: function uniform2NormalDistribution() {
        var sum = 0;
        for (var i = 0; i < 12; i++) sum += Math.random();
        return sum - 6;
      },
      compareUnit: function compareUnit(a, b) {
        var u = {
          K: 1,
          M: 2,
          G: 3,
          T: 4
        };
        return u[a] && u[b] ? u[a] > u[b] : !u[a] && (!!u[b] || a > b);
      },
      compareBigNum: function compareBigNum(num_str1, num_str2) {
        num_str1 = num_str1.toString();
        num_str2 = num_str2.toString();
        var m1 = num_str1.match(/[a-zA-Z]+/);
        var m2 = num_str2.match(/[a-zA-Z]+/);
        if (m1 && m2) {
          var unit1 = m1[0];
          var number1 = num_str1.substring(0, m1.index);
          var unit2 = m2[0];
          var number2 = num_str2.substring(0, m2.index);
          return unit1 == unit2 ? parseFloat(number1) > parseFloat(number2) : this.compareUnit(unit1, unit2);
        }
        return !!m1 || !m2 && parseFloat(num_str1) > parseFloat(num_str2);
      },
      compareVersion: function compareVersion() {
        var v1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1.0.0";
        var v2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "1.0.0";
        if (v1 == v2) return 0;
        var a1 = v1.split(".");
        var a2 = v2.split(".");
        if (parseInt(a1[0]) > parseInt(a2[0])) return 3;
        if (parseInt(a1[0]) < parseInt(a2[0])) return -1;
        if (parseInt(a1[1]) > parseInt(a2[1])) return 2;
        if (parseInt(a1[1]) < parseInt(a2[1])) return -1;
        if (parseInt(a1[2]) > parseInt(a2[2])) return 1;
        if (parseInt(a1[2]) < parseInt(a2[2])) return -1;
      },
      forEach2v: function forEach2v(array, callback) {
        array.forEach(function(arr) {
          Array.isArray(arr) && arr.forEach(function(item) {
            item && callback(item);
          });
        });
      },
      checkServerVersion: function checkServerVersion(callback0, callback1, callback2, errorCall) {
        console.log("////===checkServerVersion===>>>>");
        var oss_url = _AppConst.AppConst.ANDROID_CONF;
        cc.sys.os == cc.sys.OS_IOS && (oss_url = _AppConst.AppConst.IOS_CONF);
        _HttpClient["default"].Get(oss_url + "?_=" + Date.now(), function(data) {
          console.log("////===oss_url===>>>>", oss_url);
          if (data.error) {
            callback0 && callback0();
            return;
          }
          _AppConst.AppConst.WEBSOCK_IP = data.WEBSOCK_IP;
          _AppConst.AppConst.WEBSOCK_PORT = data.WEBSOCK_PORT;
          _AppConst.AppConst.TEST_WEBSOCK_IP = data.TEST_WEBSOCK_IP;
          _AppConst.AppConst.TEST_WEBSOCK_PORT = data.TEST_WEBSOCK_PORT;
          _AppConst.AppConst.ShowKF = data.ShowKF;
          _AppConst.AppConst.KFURL = data.KFURL;
          _AppConst.AppConst.KFWX = data.KFWX;
          _AppConst.AppConst.VIDEO_MAX = data.VIDEO_MAX;
          _AppConst.AppConst.NOTICE = data.notice;
          _AppConst.AppConst.REMOTE_VERSION = data.version;
          _AppConst.AppConst.NewAskDes = data.NewAskDes || false;
          _AppConst.AppConst.ISGM && (data.status = 1);
          if (1 == data.status) {
            var download_url = data.url;
            _AppConst.AppConst.loadUrl = download_url;
            var local_version = cc.sys.localStorage.getItem("currentVersion");
            local_version && comFunc.compareVersion(local_version, _AppConst.AppConst.VERSION) > 0 && (_AppConst.AppConst.VERSION = local_version);
            console.log("////==local_version=>>>>>", local_version, _AppConst.AppConst.VERSION);
            var updateType = comFunc.compareVersion(_AppConst.AppConst.REMOTE_VERSION, _AppConst.AppConst.VERSION);
            if (updateType > 1) {
              if (cc.sys.isNative) {
                var storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "blackjack-remote-asset/";
                console.log("////storagePath ", storagePath);
                if (jsb.fileUtils.isDirectoryExist(storagePath)) {
                  console.log("////storagePath1 ", storagePath);
                  jsb.fileUtils.removeDirectory(storagePath);
                }
              }
              callback2 && callback2();
            } else 1 == updateType ? callback1 && callback1() : callback0 && callback0();
          } else 2 == data.status ? _AppUtil["default"].showModal({
            title: "\u505c\u673a\u7ef4\u62a4\u4e2d",
            message: data.message
          }, function() {
            cc.game.end();
          }, null, 1) : _AppUtil["default"].showMessage("\u670d\u52a1\u5668\u72b6\u6001\u5f02\u5e38");
        }, this);
      },
      checkNewVersion: function checkNewVersion() {
        var oss_url = _AppConst.AppConst.ANDROID_CONF;
        cc.sys.os == cc.sys.OS_IOS && (oss_url = _AppConst.AppConst.IOS_CONF);
        _HttpClient["default"].Get(oss_url, function(data) {
          if (!data.error) {
            var remote_version = data.version;
            var local_version = cc.sys.localStorage.getItem("currentVersion");
            local_version && comFunc.compareVersion(local_version, _AppConst.AppConst.VERSION) > 0 && (_AppConst.AppConst.VERSION = local_version);
            var updateType = comFunc.compareVersion(remote_version, _AppConst.AppConst.VERSION);
            console.log("////==checkNewVersion=>>>>>", remote_version, _AppConst.AppConst.VERSION, updateType);
            updateType > 0 && _AppUtil["default"].showModal("\u6709\u65b0\u7684\u7248\u672c\u9700\u8981\u66f4\u65b0\uff0c\u8bf7\u9000\u51fa\u91cd\u65b0\u767b\u5f55", function() {
              cc.game.end();
            }, null, 1);
          }
        });
      }
    };
    exports.comFunc = comFunc;
    cc._RF.pop();
  }, {
    "../define/AppConst": "AppConst",
    "../netWork/HttpClient": "HttpClient",
    "../utility/AppUtil": "AppUtil",
    "./ManagerCenter": "ManagerCenter"
  } ],
  enumConf: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "840265UHeVIwZ7634nWQgRP", "enumConf");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _StringConf = require("./StringConf");
    var _subView;
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    var enumConf = {
      subView: (_subView = {
        helpView: {
          title: _StringConf.StringConf.helpView
        },
        cashWithdrawalRecordView: {
          title: _StringConf.StringConf.cashWithdrawalRecordView
        },
        openBXView: {
          title: _StringConf.StringConf.openBXView
        },
        shuomingView: {
          title: _StringConf.StringConf.shuomingView
        },
        MinerIncomeView: {
          title: _StringConf.StringConf.MinerIncomeView
        },
        MinerCreatView: {
          title: _StringConf.StringConf.MinerCreatView
        },
        myTeamView: {
          title: _StringConf.StringConf.myTeamView
        },
        profitDetailedView: {
          title: _StringConf.StringConf.profitDetailedView
        },
        helpAndShareView: {
          title: _StringConf.StringConf.helpAndShareView
        }
      }, _defineProperty(_subView, "helpView", {
        title: _StringConf.StringConf.helpView
      }), _defineProperty(_subView, "feedbackView", {
        title: _StringConf.StringConf.feedbackView
      }), _defineProperty(_subView, "sharePosterView", {
        title: _StringConf.StringConf.sharePosterView
      }), _defineProperty(_subView, "writeFeedbackView", {
        title: _StringConf.StringConf.writeFeedbackView
      }), _defineProperty(_subView, "aBonusView", {
        title: _StringConf.StringConf.aBonusView
      }), _defineProperty(_subView, "bonusGemExplainView", {
        title: _StringConf.StringConf.bonusGemExplainView
      }), _defineProperty(_subView, "gemGetRecordView", {
        title: _StringConf.StringConf.gemGetRecordView
      }), _defineProperty(_subView, "seniorPartnerProcessView", {
        title: _StringConf.StringConf.seniorPartnerProcessView
      }), _defineProperty(_subView, "thousandPersonsView", {
        title: _StringConf.StringConf.thousandPersonsView
      }), _defineProperty(_subView, "waitActivationView", {
        title: _StringConf.StringConf.waitActivationView
      }), _defineProperty(_subView, "noticeListView", {
        title: _StringConf.StringConf.noticeListView
      }), _subView),
      adRcode: {
        getConis: 1,
        offLineReward: 2,
        bxCD: 3,
        wheelCount: 4,
        bxUpgrade: 5,
        flybx: 6,
        double: 7,
        floorUp: 8,
        openMiner: 9
      }
    };
    var _default = enumConf;
    exports["default"] = _default;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "./StringConf": "StringConf"
  } ],
  gm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "daf916NegNCVaIxdpUxr3fz", "gm");
    "use strict";
    var _netlib = require("../lib/netlib");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.edbox = this.getComponent(cc.EditBox);
        this.edbox.maxLength = 300;
        this.node.on("editing-did-ended", this.sendComond, this);
        this.node.y = this.node.y + 200;
      },
      sendComond: function sendComond() {
        var str = this.edbox.string;
        var arr = str.split(/[,\uff0c]/g);
        var cmd = {};
        cmd.c = arr.shift();
        cmd.p = arr;
        var safecmd = this.safeCommond(cmd);
        cc.log(safecmd);
        _netlib.netlib.getInstance().sendGMCommond(safecmd);
        this.node.active = false;
      },
      safeCommond: function safeCommond(cmd) {
        var safe = {};
        safe.c = cmd.c.toString();
        safe.p = cmd.p.map(function(a) {
          return parseInt(a);
        });
        return safe;
      },
      start: function start() {
        cc.log("gm open");
      }
    });
    cc._RF.pop();
  }, {
    "../lib/netlib": "netlib"
  } ],
  httplib: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a84fHw1dhNL5cTz4wUArsX", "httplib");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _HttpClient = _interopRequireDefault(require("../netWork/HttpClient"));
    var _NoticeCenter = require("../common/NoticeCenter");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var httplib = function() {
      function httplib() {
        _classCallCheck(this, httplib);
      }
      _createClass(httplib, null, [ {
        key: "sendLogin",
        value: function sendLogin(code) {
          var data = {};
          data.code = code;
          _HttpClient["default"].send("c2s_login", data, function(data) {
            cc.log("c2s_login", data);
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.user_login, data);
          });
        }
      } ]);
      return httplib;
    }();
    exports["default"] = httplib;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../common/NoticeCenter": "NoticeCenter",
    "../netWork/HttpClient": "HttpClient"
  } ],
  loadGameScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "00548t0orNAQJrciFcW/b5n", "loadGameScene");
    "use strict";
    var _NoticeCenter = require("../common/NoticeCenter");
    var _ManagerCenter = _interopRequireDefault(require("../common/ManagerCenter"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        bar: cc.ProgressBar,
        label: cc.Label,
        feiji: cc.Node
      },
      onLoad: function onLoad() {
        this.bar.progress = 0;
        this.times = 0;
        this.guanqia = 1;
        this.mapId = 1;
        this.enterCall = null;
        this.label.string = "\u8fdb\u5165\u6316\u6398\u573a0%";
        this.feiji.x = -this.bar.node.width / 2;
        _ManagerCenter["default"].getUIManager().sceneChange();
      },
      onDestroy: function onDestroy() {},
      start: function start() {
        cc.director.getScheduler().schedule(this.updateProcess, this, .015, 100, 0, false);
      },
      updateProcess: function updateProcess() {
        this.times++;
        this.bar.progress = this.times / 100;
        this.feiji.x = -this.bar.node.width / 2 + this.bar.node.width * this.bar.progress - 10;
        var progress = Math.ceil(1e3 * this.bar.progress) / 10;
        progress > 100 && (progress = 100);
        this.label.string = "\u6b63\u5728\u8fdb\u5165\u7b2c" + this.mapId + "-" + this.guanqia + "\u5173" + progress + "%";
        this.times >= 100 && this.enterCall && this.enterCall();
      },
      loadScene: function loadScene(sceneName) {
        var _this = this;
        var params = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        if (params.guanqia) {
          this.mapId = params.mapId;
          this.guanqia = params.guanqia;
          this.label.string = "\u6b63\u5728\u8fdb\u5165\u7b2c" + this.mapId + "-" + this.guanqia + "\u51730%";
        }
        cc.director.preloadScene(sceneName, function(count, tatal, item) {}, function(err, scene) {
          if (err) {
            console.log(err.message);
            return;
          }
          _this.times >= 100 ? cc.director.loadScene(sceneName, function() {
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.load_scene_success, params);
          }) : _this.enterCall = function() {
            cc.director.loadScene(sceneName, function() {
              _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.load_scene_success, params);
            });
          };
        });
      }
    });
    cc._RF.pop();
  }, {
    "../common/ManagerCenter": "ManagerCenter",
    "../common/NoticeCenter": "NoticeCenter"
  } ],
  loadJOSN: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "06e82gI6stEsqYoLFPwUZDA", "loadJOSN");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.loadRemoteJson = exports.loadJSON = exports.loadAll = void 0;
    function _typeof(obj) {
      "@babel/helpers - typeof";
      _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function _typeof(obj) {
        return typeof obj;
      } : function _typeof(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      return _typeof(obj);
    }
    var conf = {};
    var jsonList = [ "tupuConf" ];
    var loadSuccess = 0;
    var loadJSON = function loadJSON(path, callback) {
      var isAll = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      cc.loader.loadRes("conf/" + path, cc.JsonAsset, function(err, jsonAsset) {
        if (err) {
          console.log("load json err:" + path + ",err:" + err);
          return;
        }
        "object" == _typeof(jsonAsset.json) && jsonAsset.json._exp && delete jsonAsset.json._exp;
        if (jsonAsset.json instanceof Array && jsonAsset.json[0]._exp) {
          var arr = jsonAsset.json.shift();
          cc.log(arr);
        }
        if (jsonAsset.json instanceof Array) {
          var toObject = {};
          jsonAsset.json.forEach(function(item, idx) {
            toObject[idx] = item;
          });
          jsonAsset.json = toObject;
        }
        conf[path] = jsonAsset.json;
        if (isAll) {
          loadSuccess++;
          if (loadSuccess == jsonList.length) {
            console.log("\u52a0\u8f7d\u914d\u7f6e\u8868\u5b8c\u6210...", path);
            window.conf = conf;
            cc.log(conf);
            "function" == typeof callback && callback();
          }
        } else {
          console.log("\u52a0\u8f7d\u914d\u7f6e\u8868\u5b8c\u6210...", path);
          window.conf = conf;
          "function" == typeof callback && callback();
        }
      });
    };
    exports.loadJSON = loadJSON;
    var loadRemoteJson = function loadRemoteJson(path, callback) {
      if (!CC_WECHATGAME) {
        loadJSON(path, callback, false);
        return;
      }
      var remote_url = "https://jigsaw-1257643903.cos.ap-beijing.myqcloud.com/";
      var url = remote_url + path + ".json";
      cc.loader.load(url, function(err, results) {
        if (err) {
          console.log("load json error,", path);
          loadJSON(path, callback, false);
          return;
        }
        console.log("loadRemoteJson", path);
        conf[path] = results;
        window.conf = conf;
        callback && callback();
      });
    };
    exports.loadRemoteJson = loadRemoteJson;
    var loadAll = function loadAll() {
      var callback = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
      if (jsonList.length > 0) for (var i = 0; i < jsonList.length; i++) loadJSON(jsonList[i], callback, true); else callback();
    };
    exports.loadAll = loadAll;
    cc._RF.pop();
  }, {} ],
  loadScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9fa20JcxaJDYoMuG7rBjB95", "loadScene");
    "use strict";
    var _loadJOSN = require("../common/loadJOSN");
    var _NoticeCenter = require("../common/NoticeCenter");
    var _ManagerCenter = _interopRequireDefault(require("../common/ManagerCenter"));
    var _AppConst = require("../define/AppConst");
    var _enumConf = _interopRequireDefault(require("../define/enumConf"));
    var _netlib = require("../lib/netlib");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    window.loadFirstScene = false;
    cc.Class({
      extends: cc.Component,
      properties: {
        bar: cc.ProgressBar,
        label: cc.Label,
        btn: cc.Button,
        version: cc.Label
      },
      onLoad: function onLoad() {
        this.netCache = [];
        this.socketOpen = false;
        this.bar.progress = 0;
        this.label.string = "0%";
        _ManagerCenter["default"].getUIManager().sceneChange();
        this.btn.node.active = false;
        this.btn.node.on("click", this.onClickStart, this);
        this.data_mgr = _ManagerCenter["default"].getDataManager();
        this.wx_mgr = _ManagerCenter["default"].getWxManager();
        _ManagerCenter["default"].getSoundManager();
        _ManagerCenter["default"].getNetworkManager();
        cc.systemEvent.on(_NoticeCenter.EventName.user_login, this.onLogin, this);
        cc.systemEvent.on(_NoticeCenter.EventName.web_socket_success, this.socketSuccess, this);
      },
      onDestroy: function onDestroy() {
        cc.systemEvent.off(_NoticeCenter.EventName.user_login, this.onLogin, this);
        cc.systemEvent.off(_NoticeCenter.EventName.web_socket_success, this.socketSuccess, this);
      },
      onLogin: function onLogin(event) {
        cc.director.loadScene("mainScene", function() {
          _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.load_scene_success);
        });
      },
      socketSuccess: function socketSuccess() {
        this.socketOpen = true;
        if (this.netCache.length > 0) for (var i = 0; i < this.netCache.length; i++) this.netCache[i]();
      },
      onClickStart: function onClickStart() {
        this.startGame();
      },
      startGame: function startGame() {
        var _this = this;
        var obj;
        false;
        wx_sdk.login_callback = function(data) {
          var obj = {};
          obj.code = data.code;
          obj.type = 1;
          _this.socketOpen ? _netlib.netlib.getInstance().sendLogin(obj) : _this.netCache.push(function() {
            _netlib.netlib.getInstance().sendLogin(obj);
          });
        };
        this.wx_mgr.login();
      },
      start: function start() {
        var _this2 = this;
        if (!loadFirstScene) {
          var cb = function cb() {
            _this2.loadScene("mainScene");
          };
          (0, _loadJOSN.loadAll)(cb);
        }
        this.version.string = "v" + _AppConst.AppConst.VERSION;
        this.data_mgr.setSceneTag(_enumConf["default"].scene.Loading);
      },
      loadScene: function loadScene(sceneName) {
        var _this3 = this;
        var params = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        cc.director.preloadScene(sceneName, function(count, tatal, item) {
          _this3.bar.progress = count / tatal;
          _this3.label.string = Math.ceil(1e3 * _this3.bar.progress) / 10 + "%";
        }, function(err, scene) {
          if (err) {
            console.log(err.message);
            return;
          }
          if ("mainScene" != sceneName || loadFirstScene) cc.director.loadScene(sceneName, function() {
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.load_scene_success, params);
          }); else {
            window.loadFirstScene = true;
            _this3.startGame();
          }
        });
      }
    });
    cc._RF.pop();
  }, {
    "../common/ManagerCenter": "ManagerCenter",
    "../common/NoticeCenter": "NoticeCenter",
    "../common/loadJOSN": "loadJOSN",
    "../define/AppConst": "AppConst",
    "../define/enumConf": "enumConf",
    "../lib/netlib": "netlib"
  } ],
  loading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71ff7BVY31Dl4SZiHb143TT", "loading");
    "use strict";
    var _AppUtil = _interopRequireDefault(require("../utility/AppUtil"));
    var _StringConf = require("../define/StringConf");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        title: cc.Label
      },
      onDestroy: function onDestroy() {
        if (this._tout) {
          clearTimeout(this._tout);
          this._tout = null;
        }
      },
      start: function start() {
        var _this = this;
        this._tout = setTimeout(function() {
          if (_this.title.string == _StringConf.StringConf.login) {
            _AppUtil["default"].showMessage(_StringConf.StringConf.login_fail);
            setTimeout(function() {
              cc.game.end();
            }, 2e3);
          }
          _AppUtil["default"].hideLoading();
        }, 3e4);
      },
      init: function init(data) {
        data && (this.title.string = data);
      }
    });
    cc._RF.pop();
  }, {
    "../define/StringConf": "StringConf",
    "../utility/AppUtil": "AppUtil"
  } ],
  lodash: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      cc._RF.push(module, "bc1c57qPydLqbm2cnO4NA/p", "lodash");
      "use strict";
      function _typeof(obj) {
        "@babel/helpers - typeof";
        _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function _typeof(obj) {
          return typeof obj;
        } : function _typeof(obj) {
          return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        return _typeof(obj);
      }
      (function() {
        function n(n, t, r) {
          switch (r.length) {
           case 0:
            return n.call(t);

           case 1:
            return n.call(t, r[0]);

           case 2:
            return n.call(t, r[0], r[1]);

           case 3:
            return n.call(t, r[0], r[1], r[2]);
          }
          return n.apply(t, r);
        }
        function t(n, t, r, e) {
          for (var u = -1, i = null == n ? 0 : n.length; ++u < i; ) {
            var o = n[u];
            t(e, o, r(o), n);
          }
          return e;
        }
        function r(n, t) {
          for (var r = -1, e = null == n ? 0 : n.length; ++r < e && false !== t(n[r], r, n); ) ;
          return n;
        }
        function e(n, t) {
          for (var r = null == n ? 0 : n.length; r-- && false !== t(n[r], r, n); ) ;
          return n;
        }
        function u(n, t) {
          for (var r = -1, e = null == n ? 0 : n.length; ++r < e; ) if (!t(n[r], r, n)) return false;
          return true;
        }
        function i(n, t) {
          for (var r = -1, e = null == n ? 0 : n.length, u = 0, i = []; ++r < e; ) {
            var o = n[r];
            t(o, r, n) && (i[u++] = o);
          }
          return i;
        }
        function o(n, t) {
          return !(null == n || !n.length) && -1 < v(n, t, 0);
        }
        function f(n, t, r) {
          for (var e = -1, u = null == n ? 0 : n.length; ++e < u; ) if (r(t, n[e])) return true;
          return false;
        }
        function c(n, t) {
          for (var r = -1, e = null == n ? 0 : n.length, u = Array(e); ++r < e; ) u[r] = t(n[r], r, n);
          return u;
        }
        function a(n, t) {
          for (var r = -1, e = t.length, u = n.length; ++r < e; ) n[u + r] = t[r];
          return n;
        }
        function l(n, t, r, e) {
          var u = -1, i = null == n ? 0 : n.length;
          for (e && i && (r = n[++u]); ++u < i; ) r = t(r, n[u], u, n);
          return r;
        }
        function s(n, t, r, e) {
          var u = null == n ? 0 : n.length;
          for (e && u && (r = n[--u]); u--; ) r = t(r, n[u], u, n);
          return r;
        }
        function h(n, t) {
          for (var r = -1, e = null == n ? 0 : n.length; ++r < e; ) if (t(n[r], r, n)) return true;
          return false;
        }
        function p(n, t, r) {
          var e;
          return r(n, function(n, r, u) {
            if (t(n, r, u)) return e = r, false;
          }), e;
        }
        function _(n, t, r, e) {
          var u = n.length;
          for (r += e ? 1 : -1; e ? r-- : ++r < u; ) if (t(n[r], r, n)) return r;
          return -1;
        }
        function v(n, t, r) {
          if (t === t) n: {
            --r;
            for (var e = n.length; ++r < e; ) if (n[r] === t) {
              n = r;
              break n;
            }
            n = -1;
          } else n = _(n, d, r);
          return n;
        }
        function g(n, t, r, e) {
          --r;
          for (var u = n.length; ++r < u; ) if (e(n[r], t)) return r;
          return -1;
        }
        function d(n) {
          return n !== n;
        }
        function y(n, t) {
          var r = null == n ? 0 : n.length;
          return r ? m(n, t) / r : F;
        }
        function b(n) {
          return function(t) {
            return null == t ? T : t[n];
          };
        }
        function x(n) {
          return function(t) {
            return null == n ? T : n[t];
          };
        }
        function j(n, t, r, e, u) {
          return u(n, function(n, u, i) {
            r = e ? (e = false, n) : t(r, n, u, i);
          }), r;
        }
        function w(n, t) {
          var r = n.length;
          for (n.sort(t); r--; ) n[r] = n[r].c;
          return n;
        }
        function m(n, t) {
          for (var r, e = -1, u = n.length; ++e < u; ) {
            var i = t(n[e]);
            i !== T && (r = r === T ? i : r + i);
          }
          return r;
        }
        function A(n, t) {
          for (var r = -1, e = Array(n); ++r < n; ) e[r] = t(r);
          return e;
        }
        function k(n, t) {
          return c(t, function(t) {
            return [ t, n[t] ];
          });
        }
        function E(n) {
          return function(t) {
            return n(t);
          };
        }
        function S(n, t) {
          return c(t, function(t) {
            return n[t];
          });
        }
        function O(n, t) {
          return n.has(t);
        }
        function I(n, t) {
          for (var r = -1, e = n.length; ++r < e && -1 < v(t, n[r], 0); ) ;
          return r;
        }
        function R(n, t) {
          for (var r = n.length; r-- && -1 < v(t, n[r], 0); ) ;
          return r;
        }
        function z(n) {
          return "\\" + Ln[n];
        }
        function W(n) {
          var t = -1, r = Array(n.size);
          return n.forEach(function(n, e) {
            r[++t] = [ e, n ];
          }), r;
        }
        function U(n, t) {
          return function(r) {
            return n(t(r));
          };
        }
        function B(n, t) {
          for (var r = -1, e = n.length, u = 0, i = []; ++r < e; ) {
            var o = n[r];
            o !== t && "__lodash_placeholder__" !== o || (n[r] = "__lodash_placeholder__", i[u++] = r);
          }
          return i;
        }
        function L(n) {
          var t = -1, r = Array(n.size);
          return n.forEach(function(n) {
            r[++t] = n;
          }), r;
        }
        function C(n) {
          var t = -1, r = Array(n.size);
          return n.forEach(function(n) {
            r[++t] = [ n, n ];
          }), r;
        }
        function D(n) {
          if (Rn.test(n)) {
            for (var t = On.lastIndex = 0; On.test(n); ) ++t;
            n = t;
          } else n = Qn(n);
          return n;
        }
        function M(n) {
          return Rn.test(n) ? n.match(On) || [] : n.split("");
        }
        var T, $ = 1 / 0, F = NaN, N = [ [ "ary", 128 ], [ "bind", 1 ], [ "bindKey", 2 ], [ "curry", 8 ], [ "curryRight", 16 ], [ "flip", 512 ], [ "partial", 32 ], [ "partialRight", 64 ], [ "rearg", 256 ] ], P = /\b__p\+='';/g, Z = /\b(__p\+=)''\+/g, q = /(__e\(.*?\)|\b__t\))\+'';/g, V = /&(?:amp|lt|gt|quot|#39);/g, K = /[&<>"']/g, G = RegExp(V.source), H = RegExp(K.source), J = /<%-([\s\S]+?)%>/g, Y = /<%([\s\S]+?)%>/g, Q = /<%=([\s\S]+?)%>/g, X = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, nn = /^\w*$/, tn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, rn = /[\\^$.*+?()[\]{}|]/g, en = RegExp(rn.source), un = /^\s+|\s+$/g, on = /^\s+/, fn = /\s+$/, cn = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, an = /\{\n\/\* \[wrapped with (.+)\] \*/, ln = /,? & /, sn = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, hn = /\\(\\)?/g, pn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, _n = /\w*$/, vn = /^[-+]0x[0-9a-f]+$/i, gn = /^0b[01]+$/i, dn = /^\[object .+?Constructor\]$/, yn = /^0o[0-7]+$/i, bn = /^(?:0|[1-9]\d*)$/, xn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, jn = /($^)/, wn = /['\n\r\u2028\u2029\\]/g, mn = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*", An = "(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])" + mn, kn = "(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])", En = RegExp("['\u2019]", "g"), Sn = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g"), On = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + kn + mn, "g"), In = RegExp([ "[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+", An ].join("|"), "g"), Rn = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"), zn = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Wn = "Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "), Un = {};
        Un["[object Float32Array]"] = Un["[object Float64Array]"] = Un["[object Int8Array]"] = Un["[object Int16Array]"] = Un["[object Int32Array]"] = Un["[object Uint8Array]"] = Un["[object Uint8ClampedArray]"] = Un["[object Uint16Array]"] = Un["[object Uint32Array]"] = true, 
        Un["[object Arguments]"] = Un["[object Array]"] = Un["[object ArrayBuffer]"] = Un["[object Boolean]"] = Un["[object DataView]"] = Un["[object Date]"] = Un["[object Error]"] = Un["[object Function]"] = Un["[object Map]"] = Un["[object Number]"] = Un["[object Object]"] = Un["[object RegExp]"] = Un["[object Set]"] = Un["[object String]"] = Un["[object WeakMap]"] = false;
        var Bn = {};
        Bn["[object Arguments]"] = Bn["[object Array]"] = Bn["[object ArrayBuffer]"] = Bn["[object DataView]"] = Bn["[object Boolean]"] = Bn["[object Date]"] = Bn["[object Float32Array]"] = Bn["[object Float64Array]"] = Bn["[object Int8Array]"] = Bn["[object Int16Array]"] = Bn["[object Int32Array]"] = Bn["[object Map]"] = Bn["[object Number]"] = Bn["[object Object]"] = Bn["[object RegExp]"] = Bn["[object Set]"] = Bn["[object String]"] = Bn["[object Symbol]"] = Bn["[object Uint8Array]"] = Bn["[object Uint8ClampedArray]"] = Bn["[object Uint16Array]"] = Bn["[object Uint32Array]"] = true, 
        Bn["[object Error]"] = Bn["[object Function]"] = Bn["[object WeakMap]"] = false;
        var Ln = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029"
        }, Cn = parseFloat, Dn = parseInt, Mn = "object" == ("undefined" === typeof global ? "undefined" : _typeof(global)) && global && global.Object === Object && global, Tn = "object" == ("undefined" === typeof self ? "undefined" : _typeof(self)) && self && self.Object === Object && self, $n = Mn || Tn || Function("return this")(), Fn = "object" == ("undefined" === typeof exports ? "undefined" : _typeof(exports)) && exports && !exports.nodeType && exports, Nn = Fn && "object" == ("undefined" === typeof module ? "undefined" : _typeof(module)) && module && !module.nodeType && module, Pn = Nn && Nn.exports === Fn, Zn = Pn && Mn.process, qn = function() {
          try {
            var n = Nn && Nn.require && Nn.require("util").types;
            return n || Zn && Zn.binding && Zn.binding("util");
          } catch (n) {}
        }(), Vn = qn && qn.isArrayBuffer, Kn = qn && qn.isDate, Gn = qn && qn.isMap, Hn = qn && qn.isRegExp, Jn = qn && qn.isSet, Yn = qn && qn.isTypedArray, Qn = b("length"), Xn = x({
          "\xc0": "A",
          "\xc1": "A",
          "\xc2": "A",
          "\xc3": "A",
          "\xc4": "A",
          "\xc5": "A",
          "\xe0": "a",
          "\xe1": "a",
          "\xe2": "a",
          "\xe3": "a",
          "\xe4": "a",
          "\xe5": "a",
          "\xc7": "C",
          "\xe7": "c",
          "\xd0": "D",
          "\xf0": "d",
          "\xc8": "E",
          "\xc9": "E",
          "\xca": "E",
          "\xcb": "E",
          "\xe8": "e",
          "\xe9": "e",
          "\xea": "e",
          "\xeb": "e",
          "\xcc": "I",
          "\xcd": "I",
          "\xce": "I",
          "\xcf": "I",
          "\xec": "i",
          "\xed": "i",
          "\xee": "i",
          "\xef": "i",
          "\xd1": "N",
          "\xf1": "n",
          "\xd2": "O",
          "\xd3": "O",
          "\xd4": "O",
          "\xd5": "O",
          "\xd6": "O",
          "\xd8": "O",
          "\xf2": "o",
          "\xf3": "o",
          "\xf4": "o",
          "\xf5": "o",
          "\xf6": "o",
          "\xf8": "o",
          "\xd9": "U",
          "\xda": "U",
          "\xdb": "U",
          "\xdc": "U",
          "\xf9": "u",
          "\xfa": "u",
          "\xfb": "u",
          "\xfc": "u",
          "\xdd": "Y",
          "\xfd": "y",
          "\xff": "y",
          "\xc6": "Ae",
          "\xe6": "ae",
          "\xde": "Th",
          "\xfe": "th",
          "\xdf": "ss",
          "\u0100": "A",
          "\u0102": "A",
          "\u0104": "A",
          "\u0101": "a",
          "\u0103": "a",
          "\u0105": "a",
          "\u0106": "C",
          "\u0108": "C",
          "\u010a": "C",
          "\u010c": "C",
          "\u0107": "c",
          "\u0109": "c",
          "\u010b": "c",
          "\u010d": "c",
          "\u010e": "D",
          "\u0110": "D",
          "\u010f": "d",
          "\u0111": "d",
          "\u0112": "E",
          "\u0114": "E",
          "\u0116": "E",
          "\u0118": "E",
          "\u011a": "E",
          "\u0113": "e",
          "\u0115": "e",
          "\u0117": "e",
          "\u0119": "e",
          "\u011b": "e",
          "\u011c": "G",
          "\u011e": "G",
          "\u0120": "G",
          "\u0122": "G",
          "\u011d": "g",
          "\u011f": "g",
          "\u0121": "g",
          "\u0123": "g",
          "\u0124": "H",
          "\u0126": "H",
          "\u0125": "h",
          "\u0127": "h",
          "\u0128": "I",
          "\u012a": "I",
          "\u012c": "I",
          "\u012e": "I",
          "\u0130": "I",
          "\u0129": "i",
          "\u012b": "i",
          "\u012d": "i",
          "\u012f": "i",
          "\u0131": "i",
          "\u0134": "J",
          "\u0135": "j",
          "\u0136": "K",
          "\u0137": "k",
          "\u0138": "k",
          "\u0139": "L",
          "\u013b": "L",
          "\u013d": "L",
          "\u013f": "L",
          "\u0141": "L",
          "\u013a": "l",
          "\u013c": "l",
          "\u013e": "l",
          "\u0140": "l",
          "\u0142": "l",
          "\u0143": "N",
          "\u0145": "N",
          "\u0147": "N",
          "\u014a": "N",
          "\u0144": "n",
          "\u0146": "n",
          "\u0148": "n",
          "\u014b": "n",
          "\u014c": "O",
          "\u014e": "O",
          "\u0150": "O",
          "\u014d": "o",
          "\u014f": "o",
          "\u0151": "o",
          "\u0154": "R",
          "\u0156": "R",
          "\u0158": "R",
          "\u0155": "r",
          "\u0157": "r",
          "\u0159": "r",
          "\u015a": "S",
          "\u015c": "S",
          "\u015e": "S",
          "\u0160": "S",
          "\u015b": "s",
          "\u015d": "s",
          "\u015f": "s",
          "\u0161": "s",
          "\u0162": "T",
          "\u0164": "T",
          "\u0166": "T",
          "\u0163": "t",
          "\u0165": "t",
          "\u0167": "t",
          "\u0168": "U",
          "\u016a": "U",
          "\u016c": "U",
          "\u016e": "U",
          "\u0170": "U",
          "\u0172": "U",
          "\u0169": "u",
          "\u016b": "u",
          "\u016d": "u",
          "\u016f": "u",
          "\u0171": "u",
          "\u0173": "u",
          "\u0174": "W",
          "\u0175": "w",
          "\u0176": "Y",
          "\u0177": "y",
          "\u0178": "Y",
          "\u0179": "Z",
          "\u017b": "Z",
          "\u017d": "Z",
          "\u017a": "z",
          "\u017c": "z",
          "\u017e": "z",
          "\u0132": "IJ",
          "\u0133": "ij",
          "\u0152": "Oe",
          "\u0153": "oe",
          "\u0149": "'n",
          "\u017f": "s"
        }), nt = x({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        }), tt = x({
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'"
        }), rt = function x(mn) {
          function An(n) {
            if (yu(n) && !ff(n) && !(n instanceof Ln)) {
              if (n instanceof On) return n;
              if (oi.call(n, "__wrapped__")) return Fe(n);
            }
            return new On(n);
          }
          function kn() {}
          function On(n, t) {
            this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, 
            this.__values__ = T;
          }
          function Ln(n) {
            this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, 
            this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [];
          }
          function Mn(n) {
            var t = -1, r = null == n ? 0 : n.length;
            for (this.clear(); ++t < r; ) {
              var e = n[t];
              this.set(e[0], e[1]);
            }
          }
          function Tn(n) {
            var t = -1, r = null == n ? 0 : n.length;
            for (this.clear(); ++t < r; ) {
              var e = n[t];
              this.set(e[0], e[1]);
            }
          }
          function Fn(n) {
            var t = -1, r = null == n ? 0 : n.length;
            for (this.clear(); ++t < r; ) {
              var e = n[t];
              this.set(e[0], e[1]);
            }
          }
          function Nn(n) {
            var t = -1, r = null == n ? 0 : n.length;
            for (this.__data__ = new Fn(); ++t < r; ) this.add(n[t]);
          }
          function Zn(n) {
            this.size = (this.__data__ = new Tn(n)).size;
          }
          function qn(n, t) {
            var r, e = ff(n), u = !e && of(n), i = !e && !u && af(n), o = !e && !u && !i && _f(n), u = (e = e || u || i || o) ? A(n.length, ni) : [], f = u.length;
            for (r in n) !t && !oi.call(n, r) || e && ("length" == r || i && ("offset" == r || "parent" == r) || o && ("buffer" == r || "byteLength" == r || "byteOffset" == r) || Se(r, f)) || u.push(r);
            return u;
          }
          function Qn(n) {
            var t = n.length;
            return t ? n[ir(0, t - 1)] : T;
          }
          function et(n, t) {
            return De(Lr(n), pt(t, 0, n.length));
          }
          function ut(n) {
            return De(Lr(n));
          }
          function it(n, t, r) {
            (r === T || lu(n[t], r)) && (r !== T || t in n) || st(n, t, r);
          }
          function ot(n, t, r) {
            var e = n[t];
            oi.call(n, t) && lu(e, r) && (r !== T || t in n) || st(n, t, r);
          }
          function ft(n, t) {
            for (var r = n.length; r--; ) if (lu(n[r][0], t)) return r;
            return -1;
          }
          function ct(n, t, r, e) {
            return uo(n, function(n, u, i) {
              t(e, n, r(n), i);
            }), e;
          }
          function at(n, t) {
            return n && Cr(t, Wu(t), n);
          }
          function lt(n, t) {
            return n && Cr(t, Uu(t), n);
          }
          function st(n, t, r) {
            "__proto__" == t && Ai ? Ai(n, t, {
              configurable: true,
              enumerable: true,
              value: r,
              writable: true
            }) : n[t] = r;
          }
          function ht(n, t) {
            for (var r = -1, e = t.length, u = Ku(e), i = null == n; ++r < e; ) u[r] = i ? T : Ru(n, t[r]);
            return u;
          }
          function pt(n, t, r) {
            return n === n && (r !== T && (n = n <= r ? n : r), t !== T && (n = n >= t ? n : t)), 
            n;
          }
          function _t(n, t, e, u, i, o) {
            var f, c = 1 & t, a = 2 & t, l = 4 & t;
            if (e && (f = i ? e(n, u, i, o) : e(n)), f !== T) return f;
            if (!du(n)) return n;
            if (u = ff(n)) {
              if (f = me(n), !c) return Lr(n, f);
            } else {
              var s = vo(n), h = "[object Function]" == s || "[object GeneratorFunction]" == s;
              if (af(n)) return Ir(n, c);
              if ("[object Object]" == s || "[object Arguments]" == s || h && !i) {
                if (f = a || h ? {} : Ae(n), !c) return a ? Mr(n, lt(f, n)) : Dr(n, at(f, n));
              } else {
                if (!Bn[s]) return i ? n : {};
                f = ke(n, s, c);
              }
            }
            if (o || (o = new Zn()), i = o.get(n)) return i;
            if (o.set(n, f), pf(n)) return n.forEach(function(r) {
              f.add(_t(r, t, e, r, n, o));
            }), f;
            if (sf(n)) return n.forEach(function(r, u) {
              f.set(u, _t(r, t, e, u, n, o));
            }), f;
            var a = l ? a ? ve : _e : a ? Uu : Wu, p = u ? T : a(n);
            return r(p || n, function(r, u) {
              p && (u = r, r = n[u]), ot(f, u, _t(r, t, e, u, n, o));
            }), f;
          }
          function vt(n) {
            var t = Wu(n);
            return function(r) {
              return gt(r, n, t);
            };
          }
          function gt(n, t, r) {
            var e = r.length;
            if (null == n) return !e;
            for (n = Qu(n); e--; ) {
              var u = r[e], i = t[u], o = n[u];
              if (o === T && !(u in n) || !i(o)) return false;
            }
            return true;
          }
          function dt(n, t, r) {
            if ("function" != typeof n) throw new ti("Expected a function");
            return bo(function() {
              n.apply(T, r);
            }, t);
          }
          function yt(n, t, r, e) {
            var u = -1, i = o, a = true, l = n.length, s = [], h = t.length;
            if (!l) return s;
            r && (t = c(t, E(r))), e ? (i = f, a = false) : 200 <= t.length && (i = O, a = false, 
            t = new Nn(t));
            n: for (;++u < l; ) {
              var p = n[u], _ = null == r ? p : r(p), p = e || 0 !== p ? p : 0;
              if (a && _ === _) {
                for (var v = h; v--; ) if (t[v] === _) continue n;
                s.push(p);
              } else i(t, _, e) || s.push(p);
            }
            return s;
          }
          function bt(n, t) {
            var r = true;
            return uo(n, function(n, e, u) {
              return r = !!t(n, e, u);
            }), r;
          }
          function xt(n, t, r) {
            for (var e = -1, u = n.length; ++e < u; ) {
              var i = n[e], o = t(i);
              if (null != o && (f === T ? o === o && !wu(o) : r(o, f))) var f = o, c = i;
            }
            return c;
          }
          function jt(n, t) {
            var r = [];
            return uo(n, function(n, e, u) {
              t(n, e, u) && r.push(n);
            }), r;
          }
          function wt(n, t, r, e, u) {
            var i = -1, o = n.length;
            for (r || (r = Ee), u || (u = []); ++i < o; ) {
              var f = n[i];
              0 < t && r(f) ? 1 < t ? wt(f, t - 1, r, e, u) : a(u, f) : e || (u[u.length] = f);
            }
            return u;
          }
          function mt(n, t) {
            return n && oo(n, t, Wu);
          }
          function At(n, t) {
            return n && fo(n, t, Wu);
          }
          function kt(n, t) {
            return i(t, function(t) {
              return _u(n[t]);
            });
          }
          function Et(n, t) {
            t = Sr(t, n);
            for (var r = 0, e = t.length; null != n && r < e; ) n = n[Me(t[r++])];
            return r && r == e ? n : T;
          }
          function St(n, t, r) {
            return t = t(n), ff(n) ? t : a(t, r(n));
          }
          function Ot(n) {
            if (null == n) return n === T ? "[object Undefined]" : "[object Null]";
            if (mi && mi in Qu(n)) {
              var t = oi.call(n, mi), r = n[mi];
              try {
                n[mi] = T;
                var e = true;
              } catch (n) {}
              var u = ai.call(n);
              e && (t ? n[mi] = r : delete n[mi]), n = u;
            } else n = ai.call(n);
            return n;
          }
          function It(n, t) {
            return n > t;
          }
          function Rt(n, t) {
            return null != n && oi.call(n, t);
          }
          function zt(n, t) {
            return null != n && t in Qu(n);
          }
          function Wt(n, t, r) {
            for (var e = r ? f : o, u = n[0].length, i = n.length, a = i, l = Ku(i), s = 1 / 0, h = []; a--; ) {
              var p = n[a];
              a && t && (p = c(p, E(t))), s = Ci(p.length, s), l[a] = !r && (t || 120 <= u && 120 <= p.length) ? new Nn(a && p) : T;
            }
            var p = n[0], _ = -1, v = l[0];
            n: for (;++_ < u && h.length < s; ) {
              var g = p[_], d = t ? t(g) : g, g = r || 0 !== g ? g : 0;
              if (v ? !O(v, d) : !e(h, d, r)) {
                for (a = i; --a; ) {
                  var y = l[a];
                  if (y ? !O(y, d) : !e(n[a], d, r)) continue n;
                }
                v && v.push(d), h.push(g);
              }
            }
            return h;
          }
          function Ut(n, t, r, e) {
            return mt(n, function(n, u, i) {
              t(e, r(n), u, i);
            }), e;
          }
          function Bt(t, r, e) {
            return r = Sr(r, t), t = 2 > r.length ? t : Et(t, hr(r, 0, -1)), r = null == t ? t : t[Me(Ve(r))], 
            null == r ? T : n(r, t, e);
          }
          function Lt(n) {
            return yu(n) && "[object Arguments]" == Ot(n);
          }
          function Ct(n) {
            return yu(n) && "[object ArrayBuffer]" == Ot(n);
          }
          function Dt(n) {
            return yu(n) && "[object Date]" == Ot(n);
          }
          function Mt(n, t, r, e, u) {
            if (n === t) return true;
            if (null == n || null == t || !yu(n) && !yu(t)) return n !== n && t !== t;
            n: {
              var i = ff(n), o = ff(t), f = i ? "[object Array]" : vo(n), c = o ? "[object Array]" : vo(t), f = "[object Arguments]" == f ? "[object Object]" : f, c = "[object Arguments]" == c ? "[object Object]" : c, a = "[object Object]" == f, o = "[object Object]" == c;
              if ((c = f == c) && af(n)) {
                if (!af(t)) {
                  t = false;
                  break n;
                }
                i = true, a = false;
              }
              if (c && !a) u || (u = new Zn()), t = i || _f(n) ? se(n, t, r, e, Mt, u) : he(n, t, f, r, e, Mt, u); else {
                if (!(1 & r) && (i = a && oi.call(n, "__wrapped__"), f = o && oi.call(t, "__wrapped__"), 
                i || f)) {
                  n = i ? n.value() : n, t = f ? t.value() : t, u || (u = new Zn()), t = Mt(n, t, r, e, u);
                  break n;
                }
                if (c) t: if (u || (u = new Zn()), i = 1 & r, f = _e(n), o = f.length, c = _e(t).length, 
                o == c || i) {
                  for (a = o; a--; ) {
                    var l = f[a];
                    if (!(i ? l in t : oi.call(t, l))) {
                      t = false;
                      break t;
                    }
                  }
                  if ((c = u.get(n)) && u.get(t)) t = c == t; else {
                    c = true, u.set(n, t), u.set(t, n);
                    for (var s = i; ++a < o; ) {
                      var l = f[a], h = n[l], p = t[l];
                      if (e) var _ = i ? e(p, h, l, t, n, u) : e(h, p, l, n, t, u);
                      if (_ === T ? h !== p && !Mt(h, p, r, e, u) : !_) {
                        c = false;
                        break;
                      }
                      s || (s = "constructor" == l);
                    }
                    c && !s && (r = n.constructor, e = t.constructor, r != e && "constructor" in n && "constructor" in t && !("function" == typeof r && r instanceof r && "function" == typeof e && e instanceof e) && (c = false)), 
                    u["delete"](n), u["delete"](t), t = c;
                  }
                } else t = false; else t = false;
              }
            }
            return t;
          }
          function Tt(n) {
            return yu(n) && "[object Map]" == vo(n);
          }
          function $t(n, t, r, e) {
            var u = r.length, i = u, o = !e;
            if (null == n) return !i;
            for (n = Qu(n); u--; ) {
              var f = r[u];
              if (o && f[2] ? f[1] !== n[f[0]] : !(f[0] in n)) return false;
            }
            for (;++u < i; ) {
              var f = r[u], c = f[0], a = n[c], l = f[1];
              if (o && f[2]) {
                if (a === T && !(c in n)) return false;
              } else {
                if (f = new Zn(), e) var s = e(a, l, c, n, t, f);
                if (s === T ? !Mt(l, a, 3, e, f) : !s) return false;
              }
            }
            return true;
          }
          function Ft(n) {
            return !(!du(n) || ci && ci in n) && (_u(n) ? hi : dn).test(Te(n));
          }
          function Nt(n) {
            return yu(n) && "[object RegExp]" == Ot(n);
          }
          function Pt(n) {
            return yu(n) && "[object Set]" == vo(n);
          }
          function Zt(n) {
            return yu(n) && gu(n.length) && !!Un[Ot(n)];
          }
          function qt(n) {
            return "function" == typeof n ? n : null == n ? $u : "object" == _typeof(n) ? ff(n) ? Jt(n[0], n[1]) : Ht(n) : Zu(n);
          }
          function Vt(n) {
            if (!ze(n)) return Bi(n);
            var t, r = [];
            for (t in Qu(n)) oi.call(n, t) && "constructor" != t && r.push(t);
            return r;
          }
          function Kt(n, t) {
            return n < t;
          }
          function Gt(n, t) {
            var r = -1, e = su(n) ? Ku(n.length) : [];
            return uo(n, function(n, u, i) {
              e[++r] = t(n, u, i);
            }), e;
          }
          function Ht(n) {
            var t = xe(n);
            return 1 == t.length && t[0][2] ? We(t[0][0], t[0][1]) : function(r) {
              return r === n || $t(r, n, t);
            };
          }
          function Jt(n, t) {
            return Ie(n) && t === t && !du(t) ? We(Me(n), t) : function(r) {
              var e = Ru(r, n);
              return e === T && e === t ? zu(r, n) : Mt(t, e, 3);
            };
          }
          function Yt(n, t, r, e, u) {
            n !== t && oo(t, function(i, o) {
              if (du(i)) {
                u || (u = new Zn());
                var f = u, c = Be(n, o), a = Be(t, o), l = f.get(a);
                if (!l) {
                  var l = e ? e(c, a, o + "", n, t, f) : T, s = l === T;
                  if (s) {
                    var h = ff(a), p = !h && af(a), _ = !h && !p && _f(a), l = a;
                    h || p || _ ? ff(c) ? l = c : hu(c) ? l = Lr(c) : p ? (s = false, l = Ir(a, true)) : _ ? (s = false, 
                    l = zr(a, true)) : l = [] : xu(a) || of(a) ? (l = c, of(c) ? l = Ou(c) : du(c) && !_u(c) || (l = Ae(a))) : s = false;
                  }
                  s && (f.set(a, l), Yt(l, a, r, e, f), f["delete"](a));
                }
                it(n, o, l);
              } else f = e ? e(Be(n, o), i, o + "", n, t, u) : T, f === T && (f = i), it(n, o, f);
            }, Uu);
          }
          function Qt(n, t) {
            var r = n.length;
            if (r) return t += 0 > t ? r : 0, Se(t, r) ? n[t] : T;
          }
          function Xt(n, t, r) {
            var e = -1;
            return t = c(t.length ? t : [ $u ], E(ye())), n = Gt(n, function(n, r, u) {
              return {
                a: c(t, function(t) {
                  return t(n);
                }),
                b: ++e,
                c: n
              };
            }), w(n, function(n, t) {
              var e;
              n: {
                e = -1;
                for (var u = n.a, i = t.a, o = u.length, f = r.length; ++e < o; ) {
                  var c = Wr(u[e], i[e]);
                  if (c) {
                    if (e >= f) {
                      e = c;
                      break n;
                    }
                    e = c * ("desc" == r[e] ? -1 : 1);
                    break n;
                  }
                }
                e = n.b - t.b;
              }
              return e;
            });
          }
          function nr(n, t) {
            return tr(n, t, function(t, r) {
              return zu(n, r);
            });
          }
          function tr(n, t, r) {
            for (var e = -1, u = t.length, i = {}; ++e < u; ) {
              var o = t[e], f = Et(n, o);
              r(f, o) && lr(i, Sr(o, n), f);
            }
            return i;
          }
          function rr(n) {
            return function(t) {
              return Et(t, n);
            };
          }
          function er(n, t, r, e) {
            var u = e ? g : v, i = -1, o = t.length, f = n;
            for (n === t && (t = Lr(t)), r && (f = c(n, E(r))); ++i < o; ) for (var a = 0, l = t[i], l = r ? r(l) : l; -1 < (a = u(f, l, a, e)); ) f !== n && xi.call(f, a, 1), 
            xi.call(n, a, 1);
            return n;
          }
          function ur(n, t) {
            for (var r = n ? t.length : 0, e = r - 1; r--; ) {
              var u = t[r];
              if (r == e || u !== i) {
                var i = u;
                Se(u) ? xi.call(n, u, 1) : xr(n, u);
              }
            }
            return n;
          }
          function ir(n, t) {
            return n + Ii(Ti() * (t - n + 1));
          }
          function or(n, t) {
            var r = "";
            if (!n || 1 > t || 9007199254740991 < t) return r;
            do {
              t % 2 && (r += n), (t = Ii(t / 2)) && (n += n);
            } while (t);
            return r;
          }
          function fr(n, t) {
            return xo(Ue(n, t, $u), n + "");
          }
          function cr(n) {
            return Qn(Lu(n));
          }
          function ar(n, t) {
            var r = Lu(n);
            return De(r, pt(t, 0, r.length));
          }
          function lr(n, t, r, e) {
            if (!du(n)) return n;
            t = Sr(t, n);
            for (var u = -1, i = t.length, o = i - 1, f = n; null != f && ++u < i; ) {
              var c = Me(t[u]), a = r;
              if (u != o) {
                var l = f[c], a = e ? e(l, c, f) : T;
                a === T && (a = du(l) ? l : Se(t[u + 1]) ? [] : {});
              }
              ot(f, c, a), f = f[c];
            }
            return n;
          }
          function sr(n) {
            return De(Lu(n));
          }
          function hr(n, t, r) {
            var e = -1, u = n.length;
            for (0 > t && (t = -t > u ? 0 : u + t), r = r > u ? u : r, 0 > r && (r += u), u = t > r ? 0 : r - t >>> 0, 
            t >>>= 0, r = Ku(u); ++e < u; ) r[e] = n[e + t];
            return r;
          }
          function pr(n, t) {
            var r;
            return uo(n, function(n, e, u) {
              return r = t(n, e, u), !r;
            }), !!r;
          }
          function _r(n, t, r) {
            var e = 0, u = null == n ? e : n.length;
            if ("number" == typeof t && t === t && 2147483647 >= u) {
              for (;e < u; ) {
                var i = e + u >>> 1, o = n[i];
                null !== o && !wu(o) && (r ? o <= t : o < t) ? e = i + 1 : u = i;
              }
              return u;
            }
            return vr(n, t, $u, r);
          }
          function vr(n, t, r, e) {
            t = r(t);
            for (var u = 0, i = null == n ? 0 : n.length, o = t !== t, f = null === t, c = wu(t), a = t === T; u < i; ) {
              var l = Ii((u + i) / 2), s = r(n[l]), h = s !== T, p = null === s, _ = s === s, v = wu(s);
              (o ? e || _ : a ? _ && (e || h) : f ? _ && h && (e || !p) : c ? _ && h && !p && (e || !v) : p || v ? 0 : e ? s <= t : s < t) ? u = l + 1 : i = l;
            }
            return Ci(i, 4294967294);
          }
          function gr(n, t) {
            for (var r = -1, e = n.length, u = 0, i = []; ++r < e; ) {
              var o = n[r], f = t ? t(o) : o;
              if (!r || !lu(f, c)) {
                var c = f;
                i[u++] = 0 === o ? 0 : o;
              }
            }
            return i;
          }
          function dr(n) {
            return "number" == typeof n ? n : wu(n) ? F : +n;
          }
          function yr(n) {
            if ("string" == typeof n) return n;
            if (ff(n)) return c(n, yr) + "";
            if (wu(n)) return ro ? ro.call(n) : "";
            var t = n + "";
            return "0" == t && 1 / n == -$ ? "-0" : t;
          }
          function br(n, t, r) {
            var e = -1, u = o, i = n.length, c = true, a = [], l = a;
            if (r) c = false, u = f; else if (200 <= i) {
              if (u = t ? null : so(n)) return L(u);
              c = false, u = O, l = new Nn();
            } else l = t ? [] : a;
            n: for (;++e < i; ) {
              var s = n[e], h = t ? t(s) : s, s = r || 0 !== s ? s : 0;
              if (c && h === h) {
                for (var p = l.length; p--; ) if (l[p] === h) continue n;
                t && l.push(h), a.push(s);
              } else u(l, h, r) || (l !== a && l.push(h), a.push(s));
            }
            return a;
          }
          function xr(n, t) {
            return t = Sr(t, n), n = 2 > t.length ? n : Et(n, hr(t, 0, -1)), null == n || delete n[Me(Ve(t))];
          }
          function jr(n, t, r, e) {
            for (var u = n.length, i = e ? u : -1; (e ? i-- : ++i < u) && t(n[i], i, n); ) ;
            return r ? hr(n, e ? 0 : i, e ? i + 1 : u) : hr(n, e ? i + 1 : 0, e ? u : i);
          }
          function wr(n, t) {
            var r = n;
            return r instanceof Ln && (r = r.value()), l(t, function(n, t) {
              return t.func.apply(t.thisArg, a([ n ], t.args));
            }, r);
          }
          function mr(n, t, r) {
            var e = n.length;
            if (2 > e) return e ? br(n[0]) : [];
            for (var u = -1, i = Ku(e); ++u < e; ) for (var o = n[u], f = -1; ++f < e; ) f != u && (i[u] = yt(i[u] || o, n[f], t, r));
            return br(wt(i, 1), t, r);
          }
          function Ar(n, t, r) {
            for (var e = -1, u = n.length, i = t.length, o = {}; ++e < u; ) r(o, n[e], e < i ? t[e] : T);
            return o;
          }
          function kr(n) {
            return hu(n) ? n : [];
          }
          function Er(n) {
            return "function" == typeof n ? n : $u;
          }
          function Sr(n, t) {
            return ff(n) ? n : Ie(n, t) ? [ n ] : jo(Iu(n));
          }
          function Or(n, t, r) {
            var e = n.length;
            return r = r === T ? e : r, !t && r >= e ? n : hr(n, t, r);
          }
          function Ir(n, t) {
            if (t) return n.slice();
            var r = n.length, r = gi ? gi(r) : new n.constructor(r);
            return n.copy(r), r;
          }
          function Rr(n) {
            var t = new n.constructor(n.byteLength);
            return new vi(t).set(new vi(n)), t;
          }
          function zr(n, t) {
            return new n.constructor(t ? Rr(n.buffer) : n.buffer, n.byteOffset, n.length);
          }
          function Wr(n, t) {
            if (n !== t) {
              var r = n !== T, e = null === n, u = n === n, i = wu(n), o = t !== T, f = null === t, c = t === t, a = wu(t);
              if (!f && !a && !i && n > t || i && o && c && !f && !a || e && o && c || !r && c || !u) return 1;
              if (!e && !i && !a && n < t || a && r && u && !e && !i || f && r && u || !o && u || !c) return -1;
            }
            return 0;
          }
          function Ur(n, t, r, e) {
            var u = -1, i = n.length, o = r.length, f = -1, c = t.length, a = Li(i - o, 0), l = Ku(c + a);
            for (e = !e; ++f < c; ) l[f] = t[f];
            for (;++u < o; ) (e || u < i) && (l[r[u]] = n[u]);
            for (;a--; ) l[f++] = n[u++];
            return l;
          }
          function Br(n, t, r, e) {
            var u = -1, i = n.length, o = -1, f = r.length, c = -1, a = t.length, l = Li(i - f, 0), s = Ku(l + a);
            for (e = !e; ++u < l; ) s[u] = n[u];
            for (l = u; ++c < a; ) s[l + c] = t[c];
            for (;++o < f; ) (e || u < i) && (s[l + r[o]] = n[u++]);
            return s;
          }
          function Lr(n, t) {
            var r = -1, e = n.length;
            for (t || (t = Ku(e)); ++r < e; ) t[r] = n[r];
            return t;
          }
          function Cr(n, t, r, e) {
            var u = !r;
            r || (r = {});
            for (var i = -1, o = t.length; ++i < o; ) {
              var f = t[i], c = e ? e(r[f], n[f], f, r, n) : T;
              c === T && (c = n[f]), u ? st(r, f, c) : ot(r, f, c);
            }
            return r;
          }
          function Dr(n, t) {
            return Cr(n, po(n), t);
          }
          function Mr(n, t) {
            return Cr(n, _o(n), t);
          }
          function Tr(n, r) {
            return function(e, u) {
              var i = ff(e) ? t : ct, o = r ? r() : {};
              return i(e, n, ye(u, 2), o);
            };
          }
          function $r(n) {
            return fr(function(t, r) {
              var e = -1, u = r.length, i = 1 < u ? r[u - 1] : T, o = 2 < u ? r[2] : T, i = 3 < n.length && "function" == typeof i ? (u--, 
              i) : T;
              for (o && Oe(r[0], r[1], o) && (i = 3 > u ? T : i, u = 1), t = Qu(t); ++e < u; ) (o = r[e]) && n(t, o, e, i);
              return t;
            });
          }
          function Fr(n, t) {
            return function(r, e) {
              if (null == r) return r;
              if (!su(r)) return n(r, e);
              for (var u = r.length, i = t ? u : -1, o = Qu(r); (t ? i-- : ++i < u) && false !== e(o[i], i, o); ) ;
              return r;
            };
          }
          function Nr(n) {
            return function(t, r, e) {
              var u = -1, i = Qu(t);
              e = e(t);
              for (var o = e.length; o--; ) {
                var f = e[n ? o : ++u];
                if (false === r(i[f], f, i)) break;
              }
              return t;
            };
          }
          function Pr(n, t, r) {
            function e() {
              return (this && this !== $n && this instanceof e ? i : n).apply(u ? r : this, arguments);
            }
            var u = 1 & t, i = Vr(n);
            return e;
          }
          function Zr(n) {
            return function(t) {
              t = Iu(t);
              var r = Rn.test(t) ? M(t) : T, e = r ? r[0] : t.charAt(0);
              return t = r ? Or(r, 1).join("") : t.slice(1), e[n]() + t;
            };
          }
          function qr(n) {
            return function(t) {
              return l(Mu(Du(t).replace(En, "")), n, "");
            };
          }
          function Vr(n) {
            return function() {
              var t = arguments;
              switch (t.length) {
               case 0:
                return new n();

               case 1:
                return new n(t[0]);

               case 2:
                return new n(t[0], t[1]);

               case 3:
                return new n(t[0], t[1], t[2]);

               case 4:
                return new n(t[0], t[1], t[2], t[3]);

               case 5:
                return new n(t[0], t[1], t[2], t[3], t[4]);

               case 6:
                return new n(t[0], t[1], t[2], t[3], t[4], t[5]);

               case 7:
                return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
              }
              var r = eo(n.prototype), t = n.apply(r, t);
              return du(t) ? t : r;
            };
          }
          function Kr(t, r, e) {
            function u() {
              for (var o = arguments.length, f = Ku(o), c = o, a = de(u); c--; ) f[c] = arguments[c];
              return c = 3 > o && f[0] !== a && f[o - 1] !== a ? [] : B(f, a), o -= c.length, 
              o < e ? ue(t, r, Jr, u.placeholder, T, f, c, T, T, e - o) : n(this && this !== $n && this instanceof u ? i : t, this, f);
            }
            var i = Vr(t);
            return u;
          }
          function Gr(n) {
            return function(t, r, e) {
              var u = Qu(t);
              if (!su(t)) {
                var i = ye(r, 3);
                t = Wu(t), r = function r(n) {
                  return i(u[n], n, u);
                };
              }
              return r = n(t, r, e), -1 < r ? u[i ? t[r] : r] : T;
            };
          }
          function Hr(n) {
            return pe(function(t) {
              var r = t.length, e = r, u = On.prototype.thru;
              for (n && t.reverse(); e--; ) {
                var i = t[e];
                if ("function" != typeof i) throw new ti("Expected a function");
                if (u && !o && "wrapper" == ge(i)) var o = new On([], true);
              }
              for (e = o ? e : r; ++e < r; ) var i = t[e], u = ge(i), f = "wrapper" == u ? ho(i) : T, o = f && Re(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? o[ge(f[0])].apply(o, f[3]) : 1 == i.length && Re(i) ? o[u]() : o.thru(i);
              return function() {
                var n = arguments, e = n[0];
                if (o && 1 == n.length && ff(e)) return o.plant(e).value();
                for (var u = 0, n = r ? t[u].apply(this, n) : e; ++u < r; ) n = t[u].call(this, n);
                return n;
              };
            });
          }
          function Jr(n, t, r, e, u, i, o, f, c, a) {
            function l() {
              for (var d = arguments.length, y = Ku(d), b = d; b--; ) y[b] = arguments[b];
              if (_) {
                var x, j = de(l), b = y.length;
                for (x = 0; b--; ) y[b] === j && ++x;
              }
              if (e && (y = Ur(y, e, u, _)), i && (y = Br(y, i, o, _)), d -= x, _ && d < a) return j = B(y, j), 
              ue(n, t, Jr, l.placeholder, r, y, j, f, c, a - d);
              if (j = h ? r : this, b = p ? j[n] : n, d = y.length, f) {
                x = y.length;
                for (var w = Ci(f.length, x), m = Lr(y); w--; ) {
                  var A = f[w];
                  y[w] = Se(A, x) ? m[A] : T;
                }
              } else v && 1 < d && y.reverse();
              return s && c < d && (y.length = c), this && this !== $n && this instanceof l && (b = g || Vr(b)), 
              b.apply(j, y);
            }
            var s = 128 & t, h = 1 & t, p = 2 & t, _ = 24 & t, v = 512 & t, g = p ? T : Vr(n);
            return l;
          }
          function Yr(n, t) {
            return function(r, e) {
              return Ut(r, n, t(e), {});
            };
          }
          function Qr(n, t) {
            return function(r, e) {
              var u;
              if (r === T && e === T) return t;
              if (r !== T && (u = r), e !== T) {
                if (u === T) return e;
                "string" == typeof r || "string" == typeof e ? (r = yr(r), e = yr(e)) : (r = dr(r), 
                e = dr(e)), u = n(r, e);
              }
              return u;
            };
          }
          function Xr(t) {
            return pe(function(r) {
              return r = c(r, E(ye())), fr(function(e) {
                var u = this;
                return t(r, function(t) {
                  return n(t, u, e);
                });
              });
            });
          }
          function ne(n, t) {
            t = t === T ? " " : yr(t);
            var r = t.length;
            return 2 > r ? r ? or(t, n) : t : (r = or(t, Oi(n / D(t))), Rn.test(t) ? Or(M(r), 0, n).join("") : r.slice(0, n));
          }
          function te(t, r, e, u) {
            function i() {
              for (var r = -1, c = arguments.length, a = -1, l = u.length, s = Ku(l + c), h = this && this !== $n && this instanceof i ? f : t; ++a < l; ) s[a] = u[a];
              for (;c--; ) s[a++] = arguments[++r];
              return n(h, o ? e : this, s);
            }
            var o = 1 & r, f = Vr(t);
            return i;
          }
          function re(n) {
            return function(t, r, e) {
              e && "number" != typeof e && Oe(t, r, e) && (r = e = T), t = Au(t), r === T ? (r = t, 
              t = 0) : r = Au(r), e = e === T ? t < r ? 1 : -1 : Au(e);
              var u = -1;
              r = Li(Oi((r - t) / (e || 1)), 0);
              for (var i = Ku(r); r--; ) i[n ? r : ++u] = t, t += e;
              return i;
            };
          }
          function ee(n) {
            return function(t, r) {
              return "string" == typeof t && "string" == typeof r || (t = Su(t), r = Su(r)), n(t, r);
            };
          }
          function ue(n, t, r, e, u, i, o, f, c, a) {
            var l = 8 & t, s = l ? o : T;
            o = l ? T : o;
            var h = l ? i : T;
            return i = l ? T : i, t = (t | (l ? 32 : 64)) & ~(l ? 64 : 32), 4 & t || (t &= -4), 
            u = [ n, t, u, h, s, i, o, f, c, a ], r = r.apply(T, u), Re(n) && yo(r, u), r.placeholder = e, 
            Le(r, n, t);
          }
          function ie(n) {
            var t = Yu[n];
            return function(n, r) {
              if (n = Su(n), r = null == r ? 0 : Ci(ku(r), 292)) {
                var e = (Iu(n) + "e").split("e"), e = t(e[0] + "e" + (+e[1] + r)), e = (Iu(e) + "e").split("e");
                return +(e[0] + "e" + (+e[1] - r));
              }
              return t(n);
            };
          }
          function oe(n) {
            return function(t) {
              var r = vo(t);
              return "[object Map]" == r ? W(t) : "[object Set]" == r ? C(t) : k(t, n(t));
            };
          }
          function fe(n, t, r, e, u, i, o, f) {
            var c = 2 & t;
            if (!c && "function" != typeof n) throw new ti("Expected a function");
            var a = e ? e.length : 0;
            if (a || (t &= -97, e = u = T), o = o === T ? o : Li(ku(o), 0), f = f === T ? f : ku(f), 
            a -= u ? u.length : 0, 64 & t) {
              var l = e, s = u;
              e = u = T;
            }
            var h = c ? T : ho(n);
            return i = [ n, t, r, e, u, l, s, i, o, f ], h && (r = i[1], n = h[1], t = r | n, 
            e = 128 == n && 8 == r || 128 == n && 256 == r && i[7].length <= h[8] || 384 == n && h[7].length <= h[8] && 8 == r, 
            131 > t || e) && (1 & n && (i[2] = h[2], t |= 1 & r ? 0 : 4), (r = h[3]) && (e = i[3], 
            i[3] = e ? Ur(e, r, h[4]) : r, i[4] = e ? B(i[3], "__lodash_placeholder__") : h[4]), 
            (r = h[5]) && (e = i[5], i[5] = e ? Br(e, r, h[6]) : r, i[6] = e ? B(i[5], "__lodash_placeholder__") : h[6]), 
            (r = h[7]) && (i[7] = r), 128 & n && (i[8] = null == i[8] ? h[8] : Ci(i[8], h[8])), 
            null == i[9] && (i[9] = h[9]), i[0] = h[0], i[1] = t), n = i[0], t = i[1], r = i[2], 
            e = i[3], u = i[4], f = i[9] = i[9] === T ? c ? 0 : n.length : Li(i[9] - a, 0), 
            !f && 24 & t && (t &= -25), c = t && 1 != t ? 8 == t || 16 == t ? Kr(n, t, f) : 32 != t && 33 != t || u.length ? Jr.apply(T, i) : te(n, t, r, e) : Pr(n, t, r), 
            Le((h ? co : yo)(c, i), n, t);
          }
          function ce(n, t, r, e) {
            return n === T || lu(n, ei[r]) && !oi.call(e, r) ? t : n;
          }
          function ae(n, t, r, e, u, i) {
            return du(n) && du(t) && (i.set(t, n), Yt(n, t, T, ae, i), i["delete"](t)), n;
          }
          function le(n) {
            return xu(n) ? T : n;
          }
          function se(n, t, r, e, u, i) {
            var o = 1 & r, f = n.length, c = t.length;
            if (f != c && !(o && c > f)) return false;
            if ((c = i.get(n)) && i.get(t)) return c == t;
            var c = -1, a = true, l = 2 & r ? new Nn() : T;
            for (i.set(n, t), i.set(t, n); ++c < f; ) {
              var s = n[c], p = t[c];
              if (e) var _ = o ? e(p, s, c, t, n, i) : e(s, p, c, n, t, i);
              if (_ !== T) {
                if (_) continue;
                a = false;
                break;
              }
              if (l) {
                if (!h(t, function(n, t) {
                  if (!O(l, t) && (s === n || u(s, n, r, e, i))) return l.push(t);
                })) {
                  a = false;
                  break;
                }
              } else if (s !== p && !u(s, p, r, e, i)) {
                a = false;
                break;
              }
            }
            return i["delete"](n), i["delete"](t), a;
          }
          function he(n, t, r, e, u, i, o) {
            switch (r) {
             case "[object DataView]":
              if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset) break;
              n = n.buffer, t = t.buffer;

             case "[object ArrayBuffer]":
              if (n.byteLength != t.byteLength || !i(new vi(n), new vi(t))) break;
              return true;

             case "[object Boolean]":
             case "[object Date]":
             case "[object Number]":
              return lu(+n, +t);

             case "[object Error]":
              return n.name == t.name && n.message == t.message;

             case "[object RegExp]":
             case "[object String]":
              return n == t + "";

             case "[object Map]":
              var f = W;

             case "[object Set]":
              if (f || (f = L), n.size != t.size && !(1 & e)) break;
              return (r = o.get(n)) ? r == t : (e |= 2, o.set(n, t), t = se(f(n), f(t), e, u, i, o), 
              o["delete"](n), t);

             case "[object Symbol]":
              if (to) return to.call(n) == to.call(t);
            }
            return false;
          }
          function pe(n) {
            return xo(Ue(n, T, Ze), n + "");
          }
          function _e(n) {
            return St(n, Wu, po);
          }
          function ve(n) {
            return St(n, Uu, _o);
          }
          function ge(n) {
            for (var t = n.name + "", r = Gi[t], e = oi.call(Gi, t) ? r.length : 0; e--; ) {
              var u = r[e], i = u.func;
              if (null == i || i == n) return u.name;
            }
            return t;
          }
          function de(n) {
            return (oi.call(An, "placeholder") ? An : n).placeholder;
          }
          function ye() {
            var n = An.iteratee || Fu, n = n === Fu ? qt : n;
            return arguments.length ? n(arguments[0], arguments[1]) : n;
          }
          function be(n, t) {
            var r = n.__data__, e = _typeof(t);
            return ("string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
          }
          function xe(n) {
            for (var t = Wu(n), r = t.length; r--; ) {
              var e = t[r], u = n[e];
              t[r] = [ e, u, u === u && !du(u) ];
            }
            return t;
          }
          function je(n, t) {
            var r = null == n ? T : n[t];
            return Ft(r) ? r : T;
          }
          function we(n, t, r) {
            t = Sr(t, n);
            for (var e = -1, u = t.length, i = false; ++e < u; ) {
              var o = Me(t[e]);
              if (!(i = null != n && r(n, o))) break;
              n = n[o];
            }
            return i || ++e != u ? i : (u = null == n ? 0 : n.length, !!u && gu(u) && Se(o, u) && (ff(n) || of(n)));
          }
          function me(n) {
            var t = n.length, r = new n.constructor(t);
            return t && "string" == typeof n[0] && oi.call(n, "index") && (r.index = n.index, 
            r.input = n.input), r;
          }
          function Ae(n) {
            return "function" != typeof n.constructor || ze(n) ? {} : eo(di(n));
          }
          function ke(n, t, r) {
            var e = n.constructor;
            switch (t) {
             case "[object ArrayBuffer]":
              return Rr(n);

             case "[object Boolean]":
             case "[object Date]":
              return new e(+n);

             case "[object DataView]":
              return t = r ? Rr(n.buffer) : n.buffer, new n.constructor(t, n.byteOffset, n.byteLength);

             case "[object Float32Array]":
             case "[object Float64Array]":
             case "[object Int8Array]":
             case "[object Int16Array]":
             case "[object Int32Array]":
             case "[object Uint8Array]":
             case "[object Uint8ClampedArray]":
             case "[object Uint16Array]":
             case "[object Uint32Array]":
              return zr(n, r);

             case "[object Map]":
              return new e();

             case "[object Number]":
             case "[object String]":
              return new e(n);

             case "[object RegExp]":
              return t = new n.constructor(n.source, _n.exec(n)), t.lastIndex = n.lastIndex, t;

             case "[object Set]":
              return new e();

             case "[object Symbol]":
              return to ? Qu(to.call(n)) : {};
            }
          }
          function Ee(n) {
            return ff(n) || of(n) || !!(ji && n && n[ji]);
          }
          function Se(n, t) {
            var r = _typeof(n);
            return t = null == t ? 9007199254740991 : t, !!t && ("number" == r || "symbol" != r && bn.test(n)) && -1 < n && 0 == n % 1 && n < t;
          }
          function Oe(n, t, r) {
            if (!du(r)) return false;
            var e = _typeof(t);
            return !!("number" == e ? su(r) && Se(t, r.length) : "string" == e && t in r) && lu(r[t], n);
          }
          function Ie(n, t) {
            if (ff(n)) return false;
            var r = _typeof(n);
            return !("number" != r && "symbol" != r && "boolean" != r && null != n && !wu(n)) || nn.test(n) || !X.test(n) || null != t && n in Qu(t);
          }
          function Re(n) {
            var t = ge(n), r = An[t];
            return "function" == typeof r && t in Ln.prototype && (n === r || (t = ho(r), !!t && n === t[0]));
          }
          function ze(n) {
            var t = n && n.constructor;
            return n === ("function" == typeof t && t.prototype || ei);
          }
          function We(n, t) {
            return function(r) {
              return null != r && r[n] === t && (t !== T || n in Qu(r));
            };
          }
          function Ue(t, r, e) {
            return r = Li(r === T ? t.length - 1 : r, 0), function() {
              for (var u = arguments, i = -1, o = Li(u.length - r, 0), f = Ku(o); ++i < o; ) f[i] = u[r + i];
              for (i = -1, o = Ku(r + 1); ++i < r; ) o[i] = u[i];
              return o[r] = e(f), n(t, this, o);
            };
          }
          function Be(n, t) {
            if ("__proto__" != t) return n[t];
          }
          function Le(n, t, r) {
            var e = t + "";
            t = xo;
            var u, i = $e;
            return u = (u = e.match(an)) ? u[1].split(ln) : [], r = i(u, r), (i = r.length) && (u = i - 1, 
            r[u] = (1 < i ? "& " : "") + r[u], r = r.join(2 < i ? ", " : " "), e = e.replace(cn, "{\n/* [wrapped with " + r + "] */\n")), 
            t(n, e);
          }
          function Ce(n) {
            var t = 0, r = 0;
            return function() {
              var e = Di(), u = 16 - (e - r);
              if (r = e, 0 < u) {
                if (800 <= ++t) return arguments[0];
              } else t = 0;
              return n.apply(T, arguments);
            };
          }
          function De(n, t) {
            var r = -1, e = n.length, u = e - 1;
            for (t = t === T ? e : t; ++r < t; ) {
              var e = ir(r, u), i = n[e];
              n[e] = n[r], n[r] = i;
            }
            return n.length = t, n;
          }
          function Me(n) {
            if ("string" == typeof n || wu(n)) return n;
            var t = n + "";
            return "0" == t && 1 / n == -$ ? "-0" : t;
          }
          function Te(n) {
            if (null != n) {
              try {
                return ii.call(n);
              } catch (n) {}
              return n + "";
            }
            return "";
          }
          function $e(n, t) {
            return r(N, function(r) {
              var e = "_." + r[0];
              t & r[1] && !o(n, e) && n.push(e);
            }), n.sort();
          }
          function Fe(n) {
            if (n instanceof Ln) return n.clone();
            var t = new On(n.__wrapped__, n.__chain__);
            return t.__actions__ = Lr(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, 
            t;
          }
          function Ne(n, t, r) {
            var e = null == n ? 0 : n.length;
            return e ? (r = null == r ? 0 : ku(r), 0 > r && (r = Li(e + r, 0)), _(n, ye(t, 3), r)) : -1;
          }
          function Pe(n, t, r) {
            var e = null == n ? 0 : n.length;
            if (!e) return -1;
            var u = e - 1;
            return r !== T && (u = ku(r), u = 0 > r ? Li(e + u, 0) : Ci(u, e - 1)), _(n, ye(t, 3), u, true);
          }
          function Ze(n) {
            return (null == n ? 0 : n.length) ? wt(n, 1) : [];
          }
          function qe(n) {
            return n && n.length ? n[0] : T;
          }
          function Ve(n) {
            var t = null == n ? 0 : n.length;
            return t ? n[t - 1] : T;
          }
          function Ke(n, t) {
            return n && n.length && t && t.length ? er(n, t) : n;
          }
          function Ge(n) {
            return null == n ? n : $i.call(n);
          }
          function He(n) {
            if (!n || !n.length) return [];
            var t = 0;
            return n = i(n, function(n) {
              if (hu(n)) return t = Li(n.length, t), true;
            }), A(t, function(t) {
              return c(n, b(t));
            });
          }
          function Je(t, r) {
            if (!t || !t.length) return [];
            var e = He(t);
            return null == r ? e : c(e, function(t) {
              return n(r, T, t);
            });
          }
          function Ye(n) {
            return n = An(n), n.__chain__ = true, n;
          }
          function Qe(n, t) {
            return t(n);
          }
          function Xe() {
            return this;
          }
          function nu(n, t) {
            return (ff(n) ? r : uo)(n, ye(t, 3));
          }
          function tu(n, t) {
            return (ff(n) ? e : io)(n, ye(t, 3));
          }
          function ru(n, t) {
            return (ff(n) ? c : Gt)(n, ye(t, 3));
          }
          function eu(n, t, r) {
            return t = r ? T : t, t = n && null == t ? n.length : t, fe(n, 128, T, T, T, T, t);
          }
          function uu(n, t) {
            var r;
            if ("function" != typeof t) throw new ti("Expected a function");
            return n = ku(n), function() {
              return 0 < --n && (r = t.apply(this, arguments)), 1 >= n && (t = T), r;
            };
          }
          function iu(n, t, r) {
            return t = r ? T : t, n = fe(n, 8, T, T, T, T, T, t), n.placeholder = iu.placeholder, 
            n;
          }
          function ou(n, t, r) {
            return t = r ? T : t, n = fe(n, 16, T, T, T, T, T, t), n.placeholder = ou.placeholder, 
            n;
          }
          function fu(n, t, r) {
            function e(t) {
              var r = c, e = a;
              return c = a = T, _ = t, s = n.apply(e, r);
            }
            function u(n) {
              var r = n - p;
              return n -= _, p === T || r >= t || 0 > r || g && n >= l;
            }
            function i() {
              var n = Go();
              if (u(n)) return o(n);
              var r, e = bo;
              r = n - _, n = t - (n - p), r = g ? Ci(n, l - r) : n, h = e(i, r);
            }
            function o(n) {
              return h = T, d && c ? e(n) : (c = a = T, s);
            }
            function f() {
              var n = Go(), r = u(n);
              if (c = arguments, a = this, p = n, r) {
                if (h === T) return _ = n = p, h = bo(i, t), v ? e(n) : s;
                if (g) return h = bo(i, t), e(p);
              }
              return h === T && (h = bo(i, t)), s;
            }
            var c, a, l, s, h, p, _ = 0, v = false, g = false, d = true;
            if ("function" != typeof n) throw new ti("Expected a function");
            return t = Su(t) || 0, du(r) && (v = !!r.leading, l = (g = "maxWait" in r) ? Li(Su(r.maxWait) || 0, t) : l, 
            d = "trailing" in r ? !!r.trailing : d), f.cancel = function() {
              h !== T && lo(h), _ = 0, c = p = a = h = T;
            }, f.flush = function() {
              return h === T ? s : o(Go());
            }, f;
          }
          function cu(n, t) {
            if ("function" != typeof n || null != t && "function" != typeof t) throw new ti("Expected a function");
            var r = function r() {
              var e = arguments, u = t ? t.apply(this, e) : e[0], i = r.cache;
              return i.has(u) ? i.get(u) : (e = n.apply(this, e), r.cache = i.set(u, e) || i, 
              e);
            };
            return r.cache = new (cu.Cache || Fn)(), r;
          }
          function au(n) {
            if ("function" != typeof n) throw new ti("Expected a function");
            return function() {
              var t = arguments;
              switch (t.length) {
               case 0:
                return !n.call(this);

               case 1:
                return !n.call(this, t[0]);

               case 2:
                return !n.call(this, t[0], t[1]);

               case 3:
                return !n.call(this, t[0], t[1], t[2]);
              }
              return !n.apply(this, t);
            };
          }
          function lu(n, t) {
            return n === t || n !== n && t !== t;
          }
          function su(n) {
            return null != n && gu(n.length) && !_u(n);
          }
          function hu(n) {
            return yu(n) && su(n);
          }
          function pu(n) {
            if (!yu(n)) return false;
            var t = Ot(n);
            return "[object Error]" == t || "[object DOMException]" == t || "string" == typeof n.message && "string" == typeof n.name && !xu(n);
          }
          function _u(n) {
            return !!du(n) && (n = Ot(n), "[object Function]" == n || "[object GeneratorFunction]" == n || "[object AsyncFunction]" == n || "[object Proxy]" == n);
          }
          function vu(n) {
            return "number" == typeof n && n == ku(n);
          }
          function gu(n) {
            return "number" == typeof n && -1 < n && 0 == n % 1 && 9007199254740991 >= n;
          }
          function du(n) {
            var t = _typeof(n);
            return null != n && ("object" == t || "function" == t);
          }
          function yu(n) {
            return null != n && "object" == _typeof(n);
          }
          function bu(n) {
            return "number" == typeof n || yu(n) && "[object Number]" == Ot(n);
          }
          function xu(n) {
            return !(!yu(n) || "[object Object]" != Ot(n)) && (n = di(n), null === n || (n = oi.call(n, "constructor") && n.constructor, 
            "function" == typeof n && n instanceof n && ii.call(n) == li));
          }
          function ju(n) {
            return "string" == typeof n || !ff(n) && yu(n) && "[object String]" == Ot(n);
          }
          function wu(n) {
            return "symbol" == _typeof(n) || yu(n) && "[object Symbol]" == Ot(n);
          }
          function mu(n) {
            if (!n) return [];
            if (su(n)) return ju(n) ? M(n) : Lr(n);
            if (wi && n[wi]) {
              n = n[wi]();
              for (var t, r = []; !(t = n.next()).done; ) r.push(t.value);
              return r;
            }
            return t = vo(n), ("[object Map]" == t ? W : "[object Set]" == t ? L : Lu)(n);
          }
          function Au(n) {
            return n ? (n = Su(n), n === $ || n === -$ ? 1.7976931348623157e308 * (0 > n ? -1 : 1) : n === n ? n : 0) : 0 === n ? n : 0;
          }
          function ku(n) {
            n = Au(n);
            var t = n % 1;
            return n === n ? t ? n - t : n : 0;
          }
          function Eu(n) {
            return n ? pt(ku(n), 0, 4294967295) : 0;
          }
          function Su(n) {
            if ("number" == typeof n) return n;
            if (wu(n)) return F;
            if (du(n) && (n = "function" == typeof n.valueOf ? n.valueOf() : n, n = du(n) ? n + "" : n), 
            "string" != typeof n) return 0 === n ? n : +n;
            n = n.replace(un, "");
            var t = gn.test(n);
            return t || yn.test(n) ? Dn(n.slice(2), t ? 2 : 8) : vn.test(n) ? F : +n;
          }
          function Ou(n) {
            return Cr(n, Uu(n));
          }
          function Iu(n) {
            return null == n ? "" : yr(n);
          }
          function Ru(n, t, r) {
            return n = null == n ? T : Et(n, t), n === T ? r : n;
          }
          function zu(n, t) {
            return null != n && we(n, t, zt);
          }
          function Wu(n) {
            return su(n) ? qn(n) : Vt(n);
          }
          function Uu(n) {
            if (su(n)) n = qn(n, true); else if (du(n)) {
              var t, r = ze(n), e = [];
              for (t in n) ("constructor" != t || !r && oi.call(n, t)) && e.push(t);
              n = e;
            } else {
              if (t = [], null != n) for (r in Qu(n)) t.push(r);
              n = t;
            }
            return n;
          }
          function Bu(n, t) {
            if (null == n) return {};
            var r = c(ve(n), function(n) {
              return [ n ];
            });
            return t = ye(t), tr(n, r, function(n, r) {
              return t(n, r[0]);
            });
          }
          function Lu(n) {
            return null == n ? [] : S(n, Wu(n));
          }
          function Cu(n) {
            return $f(Iu(n).toLowerCase());
          }
          function Du(n) {
            return (n = Iu(n)) && n.replace(xn, Xn).replace(Sn, "");
          }
          function Mu(n, t, r) {
            return n = Iu(n), t = r ? T : t, t === T ? zn.test(n) ? n.match(In) || [] : n.match(sn) || [] : n.match(t) || [];
          }
          function Tu(n) {
            return function() {
              return n;
            };
          }
          function $u(n) {
            return n;
          }
          function Fu(n) {
            return qt("function" == typeof n ? n : _t(n, 1));
          }
          function Nu(n, t, e) {
            var u = Wu(t), i = kt(t, u);
            null != e || du(t) && (i.length || !u.length) || (e = t, t = n, n = this, i = kt(t, Wu(t)));
            var o = !(du(e) && "chain" in e && !e.chain), f = _u(n);
            return r(i, function(r) {
              var e = t[r];
              n[r] = e, f && (n.prototype[r] = function() {
                var t = this.__chain__;
                if (o || t) {
                  var r = n(this.__wrapped__);
                  return (r.__actions__ = Lr(this.__actions__)).push({
                    func: e,
                    args: arguments,
                    thisArg: n
                  }), r.__chain__ = t, r;
                }
                return e.apply(n, a([ this.value() ], arguments));
              });
            }), n;
          }
          function Pu() {}
          function Zu(n) {
            return Ie(n) ? b(Me(n)) : rr(n);
          }
          function qu() {
            return [];
          }
          function Vu() {
            return false;
          }
          mn = null == mn ? $n : rt.defaults($n.Object(), mn, rt.pick($n, Wn));
          var Ku = mn.Array, Gu = mn.Date, Hu = mn.Error, Ju = mn.Function, Yu = mn.Math, Qu = mn.Object, Xu = mn.RegExp, ni = mn.String, ti = mn.TypeError, ri = Ku.prototype, ei = Qu.prototype, ui = mn["__core-js_shared__"], ii = Ju.prototype.toString, oi = ei.hasOwnProperty, fi = 0, ci = function() {
            var n = /[^.]+$/.exec(ui && ui.keys && ui.keys.IE_PROTO || "");
            return n ? "Symbol(src)_1." + n : "";
          }(), ai = ei.toString, li = ii.call(Qu), si = $n._, hi = Xu("^" + ii.call(oi).replace(rn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), pi = Pn ? mn.Buffer : T, _i = mn.Symbol, vi = mn.Uint8Array, gi = pi ? pi.allocUnsafe : T, di = U(Qu.getPrototypeOf, Qu), yi = Qu.create, bi = ei.propertyIsEnumerable, xi = ri.splice, ji = _i ? _i.isConcatSpreadable : T, wi = _i ? _i.iterator : T, mi = _i ? _i.toStringTag : T, Ai = function() {
            try {
              var n = je(Qu, "defineProperty");
              return n({}, "", {}), n;
            } catch (n) {}
          }(), ki = mn.clearTimeout !== $n.clearTimeout && mn.clearTimeout, Ei = Gu && Gu.now !== $n.Date.now && Gu.now, Si = mn.setTimeout !== $n.setTimeout && mn.setTimeout, Oi = Yu.ceil, Ii = Yu.floor, Ri = Qu.getOwnPropertySymbols, zi = pi ? pi.isBuffer : T, Wi = mn.isFinite, Ui = ri.join, Bi = U(Qu.keys, Qu), Li = Yu.max, Ci = Yu.min, Di = Gu.now, Mi = mn.parseInt, Ti = Yu.random, $i = ri.reverse, Fi = je(mn, "DataView"), Ni = je(mn, "Map"), Pi = je(mn, "Promise"), Zi = je(mn, "Set"), qi = je(mn, "WeakMap"), Vi = je(Qu, "create"), Ki = qi && new qi(), Gi = {}, Hi = Te(Fi), Ji = Te(Ni), Yi = Te(Pi), Qi = Te(Zi), Xi = Te(qi), no = _i ? _i.prototype : T, to = no ? no.valueOf : T, ro = no ? no.toString : T, eo = function() {
            function n() {}
            return function(t) {
              return du(t) ? yi ? yi(t) : (n.prototype = t, t = new n(), n.prototype = T, t) : {};
            };
          }();
          An.templateSettings = {
            escape: J,
            evaluate: Y,
            interpolate: Q,
            variable: "",
            imports: {
              _: An
            }
          }, An.prototype = kn.prototype, An.prototype.constructor = An, On.prototype = eo(kn.prototype), 
          On.prototype.constructor = On, Ln.prototype = eo(kn.prototype), Ln.prototype.constructor = Ln, 
          Mn.prototype.clear = function() {
            this.__data__ = Vi ? Vi(null) : {}, this.size = 0;
          }, Mn.prototype["delete"] = function(n) {
            return n = this.has(n) && delete this.__data__[n], this.size -= n ? 1 : 0, n;
          }, Mn.prototype.get = function(n) {
            var t = this.__data__;
            return Vi ? (n = t[n], "__lodash_hash_undefined__" === n ? T : n) : oi.call(t, n) ? t[n] : T;
          }, Mn.prototype.has = function(n) {
            var t = this.__data__;
            return Vi ? t[n] !== T : oi.call(t, n);
          }, Mn.prototype.set = function(n, t) {
            var r = this.__data__;
            return this.size += this.has(n) ? 0 : 1, r[n] = Vi && t === T ? "__lodash_hash_undefined__" : t, 
            this;
          }, Tn.prototype.clear = function() {
            this.__data__ = [], this.size = 0;
          }, Tn.prototype["delete"] = function(n) {
            var t = this.__data__;
            return n = ft(t, n), !(0 > n) && (n == t.length - 1 ? t.pop() : xi.call(t, n, 1), 
            --this.size, true);
          }, Tn.prototype.get = function(n) {
            var t = this.__data__;
            return n = ft(t, n), 0 > n ? T : t[n][1];
          }, Tn.prototype.has = function(n) {
            return -1 < ft(this.__data__, n);
          }, Tn.prototype.set = function(n, t) {
            var r = this.__data__, e = ft(r, n);
            return 0 > e ? (++this.size, r.push([ n, t ])) : r[e][1] = t, this;
          }, Fn.prototype.clear = function() {
            this.size = 0, this.__data__ = {
              hash: new Mn(),
              map: new (Ni || Tn)(),
              string: new Mn()
            };
          }, Fn.prototype["delete"] = function(n) {
            return n = be(this, n)["delete"](n), this.size -= n ? 1 : 0, n;
          }, Fn.prototype.get = function(n) {
            return be(this, n).get(n);
          }, Fn.prototype.has = function(n) {
            return be(this, n).has(n);
          }, Fn.prototype.set = function(n, t) {
            var r = be(this, n), e = r.size;
            return r.set(n, t), this.size += r.size == e ? 0 : 1, this;
          }, Nn.prototype.add = Nn.prototype.push = function(n) {
            return this.__data__.set(n, "__lodash_hash_undefined__"), this;
          }, Nn.prototype.has = function(n) {
            return this.__data__.has(n);
          }, Zn.prototype.clear = function() {
            this.__data__ = new Tn(), this.size = 0;
          }, Zn.prototype["delete"] = function(n) {
            var t = this.__data__;
            return n = t["delete"](n), this.size = t.size, n;
          }, Zn.prototype.get = function(n) {
            return this.__data__.get(n);
          }, Zn.prototype.has = function(n) {
            return this.__data__.has(n);
          }, Zn.prototype.set = function(n, t) {
            var r = this.__data__;
            if (r instanceof Tn) {
              var e = r.__data__;
              if (!Ni || 199 > e.length) return e.push([ n, t ]), this.size = ++r.size, this;
              r = this.__data__ = new Fn(e);
            }
            return r.set(n, t), this.size = r.size, this;
          };
          var uo = Fr(mt), io = Fr(At, true), oo = Nr(), fo = Nr(true), co = Ki ? function(n, t) {
            return Ki.set(n, t), n;
          } : $u, ao = Ai ? function(n, t) {
            return Ai(n, "toString", {
              configurable: true,
              enumerable: false,
              value: Tu(t),
              writable: true
            });
          } : $u, lo = ki || function(n) {
            return $n.clearTimeout(n);
          }, so = Zi && 1 / L(new Zi([ , -0 ]))[1] == $ ? function(n) {
            return new Zi(n);
          } : Pu, ho = Ki ? function(n) {
            return Ki.get(n);
          } : Pu, po = Ri ? function(n) {
            return null == n ? [] : (n = Qu(n), i(Ri(n), function(t) {
              return bi.call(n, t);
            }));
          } : qu, _o = Ri ? function(n) {
            for (var t = []; n; ) a(t, po(n)), n = di(n);
            return t;
          } : qu, vo = Ot;
          (Fi && "[object DataView]" != vo(new Fi(new ArrayBuffer(1))) || Ni && "[object Map]" != vo(new Ni()) || Pi && "[object Promise]" != vo(Pi.resolve()) || Zi && "[object Set]" != vo(new Zi()) || qi && "[object WeakMap]" != vo(new qi())) && (vo = function vo(n) {
            var t = Ot(n);
            if (n = (n = "[object Object]" == t ? n.constructor : T) ? Te(n) : "") switch (n) {
             case Hi:
              return "[object DataView]";

             case Ji:
              return "[object Map]";

             case Yi:
              return "[object Promise]";

             case Qi:
              return "[object Set]";

             case Xi:
              return "[object WeakMap]";
            }
            return t;
          });
          var go = ui ? _u : Vu, yo = Ce(co), bo = Si || function(n, t) {
            return $n.setTimeout(n, t);
          }, xo = Ce(ao), jo = function(n) {
            n = cu(n, function(n) {
              return 500 === t.size && t.clear(), n;
            });
            var t = n.cache;
            return n;
          }(function(n) {
            var t = [];
            return 46 === n.charCodeAt(0) && t.push(""), n.replace(tn, function(n, r, e, u) {
              t.push(e ? u.replace(hn, "$1") : r || n);
            }), t;
          }), wo = fr(function(n, t) {
            return hu(n) ? yt(n, wt(t, 1, hu, true)) : [];
          }), mo = fr(function(n, t) {
            var r = Ve(t);
            return hu(r) && (r = T), hu(n) ? yt(n, wt(t, 1, hu, true), ye(r, 2)) : [];
          }), Ao = fr(function(n, t) {
            var r = Ve(t);
            return hu(r) && (r = T), hu(n) ? yt(n, wt(t, 1, hu, true), T, r) : [];
          }), ko = fr(function(n) {
            var t = c(n, kr);
            return t.length && t[0] === n[0] ? Wt(t) : [];
          }), Eo = fr(function(n) {
            var t = Ve(n), r = c(n, kr);
            return t === Ve(r) ? t = T : r.pop(), r.length && r[0] === n[0] ? Wt(r, ye(t, 2)) : [];
          }), So = fr(function(n) {
            var t = Ve(n), r = c(n, kr);
            return (t = "function" == typeof t ? t : T) && r.pop(), r.length && r[0] === n[0] ? Wt(r, T, t) : [];
          }), Oo = fr(Ke), Io = pe(function(n, t) {
            var r = null == n ? 0 : n.length, e = ht(n, t);
            return ur(n, c(t, function(n) {
              return Se(n, r) ? +n : n;
            }).sort(Wr)), e;
          }), Ro = fr(function(n) {
            return br(wt(n, 1, hu, true));
          }), zo = fr(function(n) {
            var t = Ve(n);
            return hu(t) && (t = T), br(wt(n, 1, hu, true), ye(t, 2));
          }), Wo = fr(function(n) {
            var t = Ve(n), t = "function" == typeof t ? t : T;
            return br(wt(n, 1, hu, true), T, t);
          }), Uo = fr(function(n, t) {
            return hu(n) ? yt(n, t) : [];
          }), Bo = fr(function(n) {
            return mr(i(n, hu));
          }), Lo = fr(function(n) {
            var t = Ve(n);
            return hu(t) && (t = T), mr(i(n, hu), ye(t, 2));
          }), Co = fr(function(n) {
            var t = Ve(n), t = "function" == typeof t ? t : T;
            return mr(i(n, hu), T, t);
          }), Do = fr(He), Mo = fr(function(n) {
            var t = n.length, t = 1 < t ? n[t - 1] : T, t = "function" == typeof t ? (n.pop(), 
            t) : T;
            return Je(n, t);
          }), To = pe(function(n) {
            var t = n.length, r = t ? n[0] : 0, e = this.__wrapped__, u = function u(t) {
              return ht(t, n);
            };
            return !(1 < t || this.__actions__.length) && e instanceof Ln && Se(r) ? (e = e.slice(r, +r + (t ? 1 : 0)), 
            e.__actions__.push({
              func: Qe,
              args: [ u ],
              thisArg: T
            }), new On(e, this.__chain__).thru(function(n) {
              return t && !n.length && n.push(T), n;
            })) : this.thru(u);
          }), $o = Tr(function(n, t, r) {
            oi.call(n, r) ? ++n[r] : st(n, r, 1);
          }), Fo = Gr(Ne), No = Gr(Pe), Po = Tr(function(n, t, r) {
            oi.call(n, r) ? n[r].push(t) : st(n, r, [ t ]);
          }), Zo = fr(function(t, r, e) {
            var u = -1, i = "function" == typeof r, o = su(t) ? Ku(t.length) : [];
            return uo(t, function(t) {
              o[++u] = i ? n(r, t, e) : Bt(t, r, e);
            }), o;
          }), qo = Tr(function(n, t, r) {
            st(n, r, t);
          }), Vo = Tr(function(n, t, r) {
            n[r ? 0 : 1].push(t);
          }, function() {
            return [ [], [] ];
          }), Ko = fr(function(n, t) {
            if (null == n) return [];
            var r = t.length;
            return 1 < r && Oe(n, t[0], t[1]) ? t = [] : 2 < r && Oe(t[0], t[1], t[2]) && (t = [ t[0] ]), 
            Xt(n, wt(t, 1), []);
          }), Go = Ei || function() {
            return $n.Date.now();
          }, Ho = fr(function(n, t, r) {
            var e = 1;
            if (r.length) var u = B(r, de(Ho)), e = 32 | e;
            return fe(n, e, t, r, u);
          }), Jo = fr(function(n, t, r) {
            var e = 3;
            if (r.length) var u = B(r, de(Jo)), e = 32 | e;
            return fe(t, e, n, r, u);
          }), Yo = fr(function(n, t) {
            return dt(n, 1, t);
          }), Qo = fr(function(n, t, r) {
            return dt(n, Su(t) || 0, r);
          });
          cu.Cache = Fn;
          var Xo = fr(function(t, r) {
            r = 1 == r.length && ff(r[0]) ? c(r[0], E(ye())) : c(wt(r, 1), E(ye()));
            var e = r.length;
            return fr(function(u) {
              for (var i = -1, o = Ci(u.length, e); ++i < o; ) u[i] = r[i].call(this, u[i]);
              return n(t, this, u);
            });
          }), nf = fr(function(n, t) {
            return fe(n, 32, T, t, B(t, de(nf)));
          }), tf = fr(function(n, t) {
            return fe(n, 64, T, t, B(t, de(tf)));
          }), rf = pe(function(n, t) {
            return fe(n, 256, T, T, T, t);
          }), ef = ee(It), uf = ee(function(n, t) {
            return n >= t;
          }), of = Lt(function() {
            return arguments;
          }()) ? Lt : function(n) {
            return yu(n) && oi.call(n, "callee") && !bi.call(n, "callee");
          }, ff = Ku.isArray, cf = Vn ? E(Vn) : Ct, af = zi || Vu, lf = Kn ? E(Kn) : Dt, sf = Gn ? E(Gn) : Tt, hf = Hn ? E(Hn) : Nt, pf = Jn ? E(Jn) : Pt, _f = Yn ? E(Yn) : Zt, vf = ee(Kt), gf = ee(function(n, t) {
            return n <= t;
          }), df = $r(function(n, t) {
            if (ze(t) || su(t)) Cr(t, Wu(t), n); else for (var r in t) oi.call(t, r) && ot(n, r, t[r]);
          }), yf = $r(function(n, t) {
            Cr(t, Uu(t), n);
          }), bf = $r(function(n, t, r, e) {
            Cr(t, Uu(t), n, e);
          }), xf = $r(function(n, t, r, e) {
            Cr(t, Wu(t), n, e);
          }), jf = pe(ht), wf = fr(function(n, t) {
            n = Qu(n);
            var r = -1, e = t.length, u = 2 < e ? t[2] : T;
            for (u && Oe(t[0], t[1], u) && (e = 1); ++r < e; ) for (var u = t[r], i = Uu(u), o = -1, f = i.length; ++o < f; ) {
              var c = i[o], a = n[c];
              (a === T || lu(a, ei[c]) && !oi.call(n, c)) && (n[c] = u[c]);
            }
            return n;
          }), mf = fr(function(t) {
            return t.push(T, ae), n(Of, T, t);
          }), Af = Yr(function(n, t, r) {
            null != t && "function" != typeof t.toString && (t = ai.call(t)), n[t] = r;
          }, Tu($u)), kf = Yr(function(n, t, r) {
            null != t && "function" != typeof t.toString && (t = ai.call(t)), oi.call(n, t) ? n[t].push(r) : n[t] = [ r ];
          }, ye), Ef = fr(Bt), Sf = $r(function(n, t, r) {
            Yt(n, t, r);
          }), Of = $r(function(n, t, r, e) {
            Yt(n, t, r, e);
          }), If = pe(function(n, t) {
            var r = {};
            if (null == n) return r;
            var e = false;
            t = c(t, function(t) {
              return t = Sr(t, n), e || (e = 1 < t.length), t;
            }), Cr(n, ve(n), r), e && (r = _t(r, 7, le));
            for (var u = t.length; u--; ) xr(r, t[u]);
            return r;
          }), Rf = pe(function(n, t) {
            return null == n ? {} : nr(n, t);
          }), zf = oe(Wu), Wf = oe(Uu), Uf = qr(function(n, t, r) {
            return t = t.toLowerCase(), n + (r ? Cu(t) : t);
          }), Bf = qr(function(n, t, r) {
            return n + (r ? "-" : "") + t.toLowerCase();
          }), Lf = qr(function(n, t, r) {
            return n + (r ? " " : "") + t.toLowerCase();
          }), Cf = Zr("toLowerCase"), Df = qr(function(n, t, r) {
            return n + (r ? "_" : "") + t.toLowerCase();
          }), Mf = qr(function(n, t, r) {
            return n + (r ? " " : "") + $f(t);
          }), Tf = qr(function(n, t, r) {
            return n + (r ? " " : "") + t.toUpperCase();
          }), $f = Zr("toUpperCase"), Ff = fr(function(t, r) {
            try {
              return n(t, T, r);
            } catch (n) {
              return pu(n) ? n : new Hu(n);
            }
          }), Nf = pe(function(n, t) {
            return r(t, function(t) {
              t = Me(t), st(n, t, Ho(n[t], n));
            }), n;
          }), Pf = Hr(), Zf = Hr(true), qf = fr(function(n, t) {
            return function(r) {
              return Bt(r, n, t);
            };
          }), Vf = fr(function(n, t) {
            return function(r) {
              return Bt(n, r, t);
            };
          }), Kf = Xr(c), Gf = Xr(u), Hf = Xr(h), Jf = re(), Yf = re(true), Qf = Qr(function(n, t) {
            return n + t;
          }, 0), Xf = ie("ceil"), nc = Qr(function(n, t) {
            return n / t;
          }, 1), tc = ie("floor"), rc = Qr(function(n, t) {
            return n * t;
          }, 1), ec = ie("round"), uc = Qr(function(n, t) {
            return n - t;
          }, 0);
          return An.after = function(n, t) {
            if ("function" != typeof t) throw new ti("Expected a function");
            return n = ku(n), function() {
              if (1 > --n) return t.apply(this, arguments);
            };
          }, An.ary = eu, An.assign = df, An.assignIn = yf, An.assignInWith = bf, An.assignWith = xf, 
          An.at = jf, An.before = uu, An.bind = Ho, An.bindAll = Nf, An.bindKey = Jo, An.castArray = function() {
            if (!arguments.length) return [];
            var n = arguments[0];
            return ff(n) ? n : [ n ];
          }, An.chain = Ye, An.chunk = function(n, t, r) {
            if (t = (r ? Oe(n, t, r) : t === T) ? 1 : Li(ku(t), 0), r = null == n ? 0 : n.length, 
            !r || 1 > t) return [];
            for (var e = 0, u = 0, i = Ku(Oi(r / t)); e < r; ) i[u++] = hr(n, e, e += t);
            return i;
          }, An.compact = function(n) {
            for (var t = -1, r = null == n ? 0 : n.length, e = 0, u = []; ++t < r; ) {
              var i = n[t];
              i && (u[e++] = i);
            }
            return u;
          }, An.concat = function() {
            var n = arguments.length;
            if (!n) return [];
            for (var t = Ku(n - 1), r = arguments[0]; n--; ) t[n - 1] = arguments[n];
            return a(ff(r) ? Lr(r) : [ r ], wt(t, 1));
          }, An.cond = function(t) {
            var r = null == t ? 0 : t.length, e = ye();
            return t = r ? c(t, function(n) {
              if ("function" != typeof n[1]) throw new ti("Expected a function");
              return [ e(n[0]), n[1] ];
            }) : [], fr(function(e) {
              for (var u = -1; ++u < r; ) {
                var i = t[u];
                if (n(i[0], this, e)) return n(i[1], this, e);
              }
            });
          }, An.conforms = function(n) {
            return vt(_t(n, 1));
          }, An.constant = Tu, An.countBy = $o, An.create = function(n, t) {
            var r = eo(n);
            return null == t ? r : at(r, t);
          }, An.curry = iu, An.curryRight = ou, An.debounce = fu, An.defaults = wf, An.defaultsDeep = mf, 
          An.defer = Yo, An.delay = Qo, An.difference = wo, An.differenceBy = mo, An.differenceWith = Ao, 
          An.drop = function(n, t, r) {
            var e = null == n ? 0 : n.length;
            return e ? (t = r || t === T ? 1 : ku(t), hr(n, 0 > t ? 0 : t, e)) : [];
          }, An.dropRight = function(n, t, r) {
            var e = null == n ? 0 : n.length;
            return e ? (t = r || t === T ? 1 : ku(t), t = e - t, hr(n, 0, 0 > t ? 0 : t)) : [];
          }, An.dropRightWhile = function(n, t) {
            return n && n.length ? jr(n, ye(t, 3), true, true) : [];
          }, An.dropWhile = function(n, t) {
            return n && n.length ? jr(n, ye(t, 3), true) : [];
          }, An.fill = function(n, t, r, e) {
            var u = null == n ? 0 : n.length;
            if (!u) return [];
            for (r && "number" != typeof r && Oe(n, t, r) && (r = 0, e = u), u = n.length, r = ku(r), 
            0 > r && (r = -r > u ? 0 : u + r), e = e === T || e > u ? u : ku(e), 0 > e && (e += u), 
            e = r > e ? 0 : Eu(e); r < e; ) n[r++] = t;
            return n;
          }, An.filter = function(n, t) {
            return (ff(n) ? i : jt)(n, ye(t, 3));
          }, An.flatMap = function(n, t) {
            return wt(ru(n, t), 1);
          }, An.flatMapDeep = function(n, t) {
            return wt(ru(n, t), $);
          }, An.flatMapDepth = function(n, t, r) {
            return r = r === T ? 1 : ku(r), wt(ru(n, t), r);
          }, An.flatten = Ze, An.flattenDeep = function(n) {
            return (null == n ? 0 : n.length) ? wt(n, $) : [];
          }, An.flattenDepth = function(n, t) {
            return null != n && n.length ? (t = t === T ? 1 : ku(t), wt(n, t)) : [];
          }, An.flip = function(n) {
            return fe(n, 512);
          }, An.flow = Pf, An.flowRight = Zf, An.fromPairs = function(n) {
            for (var t = -1, r = null == n ? 0 : n.length, e = {}; ++t < r; ) {
              var u = n[t];
              e[u[0]] = u[1];
            }
            return e;
          }, An.functions = function(n) {
            return null == n ? [] : kt(n, Wu(n));
          }, An.functionsIn = function(n) {
            return null == n ? [] : kt(n, Uu(n));
          }, An.groupBy = Po, An.initial = function(n) {
            return (null == n ? 0 : n.length) ? hr(n, 0, -1) : [];
          }, An.intersection = ko, An.intersectionBy = Eo, An.intersectionWith = So, An.invert = Af, 
          An.invertBy = kf, An.invokeMap = Zo, An.iteratee = Fu, An.keyBy = qo, An.keys = Wu, 
          An.keysIn = Uu, An.map = ru, An.mapKeys = function(n, t) {
            var r = {};
            return t = ye(t, 3), mt(n, function(n, e, u) {
              st(r, t(n, e, u), n);
            }), r;
          }, An.mapValues = function(n, t) {
            var r = {};
            return t = ye(t, 3), mt(n, function(n, e, u) {
              st(r, e, t(n, e, u));
            }), r;
          }, An.matches = function(n) {
            return Ht(_t(n, 1));
          }, An.matchesProperty = function(n, t) {
            return Jt(n, _t(t, 1));
          }, An.memoize = cu, An.merge = Sf, An.mergeWith = Of, An.method = qf, An.methodOf = Vf, 
          An.mixin = Nu, An.negate = au, An.nthArg = function(n) {
            return n = ku(n), fr(function(t) {
              return Qt(t, n);
            });
          }, An.omit = If, An.omitBy = function(n, t) {
            return Bu(n, au(ye(t)));
          }, An.once = function(n) {
            return uu(2, n);
          }, An.orderBy = function(n, t, r, e) {
            return null == n ? [] : (ff(t) || (t = null == t ? [] : [ t ]), r = e ? T : r, ff(r) || (r = null == r ? [] : [ r ]), 
            Xt(n, t, r));
          }, An.over = Kf, An.overArgs = Xo, An.overEvery = Gf, An.overSome = Hf, An.partial = nf, 
          An.partialRight = tf, An.partition = Vo, An.pick = Rf, An.pickBy = Bu, An.property = Zu, 
          An.propertyOf = function(n) {
            return function(t) {
              return null == n ? T : Et(n, t);
            };
          }, An.pull = Oo, An.pullAll = Ke, An.pullAllBy = function(n, t, r) {
            return n && n.length && t && t.length ? er(n, t, ye(r, 2)) : n;
          }, An.pullAllWith = function(n, t, r) {
            return n && n.length && t && t.length ? er(n, t, T, r) : n;
          }, An.pullAt = Io, An.range = Jf, An.rangeRight = Yf, An.rearg = rf, An.reject = function(n, t) {
            return (ff(n) ? i : jt)(n, au(ye(t, 3)));
          }, An.remove = function(n, t) {
            var r = [];
            if (!n || !n.length) return r;
            var e = -1, u = [], i = n.length;
            for (t = ye(t, 3); ++e < i; ) {
              var o = n[e];
              t(o, e, n) && (r.push(o), u.push(e));
            }
            return ur(n, u), r;
          }, An.rest = function(n, t) {
            if ("function" != typeof n) throw new ti("Expected a function");
            return t = t === T ? t : ku(t), fr(n, t);
          }, An.reverse = Ge, An.sampleSize = function(n, t, r) {
            return t = (r ? Oe(n, t, r) : t === T) ? 1 : ku(t), (ff(n) ? et : ar)(n, t);
          }, An.set = function(n, t, r) {
            return null == n ? n : lr(n, t, r);
          }, An.setWith = function(n, t, r, e) {
            return e = "function" == typeof e ? e : T, null == n ? n : lr(n, t, r, e);
          }, An.shuffle = function(n) {
            return (ff(n) ? ut : sr)(n);
          }, An.slice = function(n, t, r) {
            var e = null == n ? 0 : n.length;
            return e ? (r && "number" != typeof r && Oe(n, t, r) ? (t = 0, r = e) : (t = null == t ? 0 : ku(t), 
            r = r === T ? e : ku(r)), hr(n, t, r)) : [];
          }, An.sortBy = Ko, An.sortedUniq = function(n) {
            return n && n.length ? gr(n) : [];
          }, An.sortedUniqBy = function(n, t) {
            return n && n.length ? gr(n, ye(t, 2)) : [];
          }, An.split = function(n, t, r) {
            return r && "number" != typeof r && Oe(n, t, r) && (t = r = T), r = r === T ? 4294967295 : r >>> 0, 
            r ? (n = Iu(n)) && ("string" == typeof t || null != t && !hf(t)) && (t = yr(t), 
            !t && Rn.test(n)) ? Or(M(n), 0, r) : n.split(t, r) : [];
          }, An.spread = function(t, r) {
            if ("function" != typeof t) throw new ti("Expected a function");
            return r = null == r ? 0 : Li(ku(r), 0), fr(function(e) {
              var u = e[r];
              return e = Or(e, 0, r), u && a(e, u), n(t, this, e);
            });
          }, An.tail = function(n) {
            var t = null == n ? 0 : n.length;
            return t ? hr(n, 1, t) : [];
          }, An.take = function(n, t, r) {
            return n && n.length ? (t = r || t === T ? 1 : ku(t), hr(n, 0, 0 > t ? 0 : t)) : [];
          }, An.takeRight = function(n, t, r) {
            var e = null == n ? 0 : n.length;
            return e ? (t = r || t === T ? 1 : ku(t), t = e - t, hr(n, 0 > t ? 0 : t, e)) : [];
          }, An.takeRightWhile = function(n, t) {
            return n && n.length ? jr(n, ye(t, 3), false, true) : [];
          }, An.takeWhile = function(n, t) {
            return n && n.length ? jr(n, ye(t, 3)) : [];
          }, An.tap = function(n, t) {
            return t(n), n;
          }, An.throttle = function(n, t, r) {
            var e = true, u = true;
            if ("function" != typeof n) throw new ti("Expected a function");
            return du(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), 
            fu(n, t, {
              leading: e,
              maxWait: t,
              trailing: u
            });
          }, An.thru = Qe, An.toArray = mu, An.toPairs = zf, An.toPairsIn = Wf, An.toPath = function(n) {
            return ff(n) ? c(n, Me) : wu(n) ? [ n ] : Lr(jo(Iu(n)));
          }, An.toPlainObject = Ou, An.transform = function(n, t, e) {
            var u = ff(n), i = u || af(n) || _f(n);
            if (t = ye(t, 4), null == e) {
              var o = n && n.constructor;
              e = i ? u ? new o() : [] : du(n) && _u(o) ? eo(di(n)) : {};
            }
            return (i ? r : mt)(n, function(n, r, u) {
              return t(e, n, r, u);
            }), e;
          }, An.unary = function(n) {
            return eu(n, 1);
          }, An.union = Ro, An.unionBy = zo, An.unionWith = Wo, An.uniq = function(n) {
            return n && n.length ? br(n) : [];
          }, An.uniqBy = function(n, t) {
            return n && n.length ? br(n, ye(t, 2)) : [];
          }, An.uniqWith = function(n, t) {
            return t = "function" == typeof t ? t : T, n && n.length ? br(n, T, t) : [];
          }, An.unset = function(n, t) {
            return null == n || xr(n, t);
          }, An.unzip = He, An.unzipWith = Je, An.update = function(n, t, r) {
            return null != n && (r = Er(r), n = lr(n, t, r(Et(n, t)), void 0)), n;
          }, An.updateWith = function(n, t, r, e) {
            return e = "function" == typeof e ? e : T, null != n && (r = Er(r), n = lr(n, t, r(Et(n, t)), e)), 
            n;
          }, An.values = Lu, An.valuesIn = function(n) {
            return null == n ? [] : S(n, Uu(n));
          }, An.without = Uo, An.words = Mu, An.wrap = function(n, t) {
            return nf(Er(t), n);
          }, An.xor = Bo, An.xorBy = Lo, An.xorWith = Co, An.zip = Do, An.zipObject = function(n, t) {
            return Ar(n || [], t || [], ot);
          }, An.zipObjectDeep = function(n, t) {
            return Ar(n || [], t || [], lr);
          }, An.zipWith = Mo, An.entries = zf, An.entriesIn = Wf, An.extend = yf, An.extendWith = bf, 
          Nu(An, An), An.add = Qf, An.attempt = Ff, An.camelCase = Uf, An.capitalize = Cu, 
          An.ceil = Xf, An.clamp = function(n, t, r) {
            return r === T && (r = t, t = T), r !== T && (r = Su(r), r = r === r ? r : 0), t !== T && (t = Su(t), 
            t = t === t ? t : 0), pt(Su(n), t, r);
          }, An.clone = function(n) {
            return _t(n, 4);
          }, An.cloneDeep = function(n) {
            return _t(n, 5);
          }, An.cloneDeepWith = function(n, t) {
            return t = "function" == typeof t ? t : T, _t(n, 5, t);
          }, An.cloneWith = function(n, t) {
            return t = "function" == typeof t ? t : T, _t(n, 4, t);
          }, An.conformsTo = function(n, t) {
            return null == t || gt(n, t, Wu(t));
          }, An.deburr = Du, An.defaultTo = function(n, t) {
            return null == n || n !== n ? t : n;
          }, An.divide = nc, An.endsWith = function(n, t, r) {
            n = Iu(n), t = yr(t);
            var e = n.length, e = r = r === T ? e : pt(ku(r), 0, e);
            return r -= t.length, 0 <= r && n.slice(r, e) == t;
          }, An.eq = lu, An.escape = function(n) {
            return (n = Iu(n)) && H.test(n) ? n.replace(K, nt) : n;
          }, An.escapeRegExp = function(n) {
            return (n = Iu(n)) && en.test(n) ? n.replace(rn, "\\$&") : n;
          }, An.every = function(n, t, r) {
            var e = ff(n) ? u : bt;
            return r && Oe(n, t, r) && (t = T), e(n, ye(t, 3));
          }, An.find = Fo, An.findIndex = Ne, An.findKey = function(n, t) {
            return p(n, ye(t, 3), mt);
          }, An.findLast = No, An.findLastIndex = Pe, An.findLastKey = function(n, t) {
            return p(n, ye(t, 3), At);
          }, An.floor = tc, An.forEach = nu, An.forEachRight = tu, An.forIn = function(n, t) {
            return null == n ? n : oo(n, ye(t, 3), Uu);
          }, An.forInRight = function(n, t) {
            return null == n ? n : fo(n, ye(t, 3), Uu);
          }, An.forOwn = function(n, t) {
            return n && mt(n, ye(t, 3));
          }, An.forOwnRight = function(n, t) {
            return n && At(n, ye(t, 3));
          }, An.get = Ru, An.gt = ef, An.gte = uf, An.has = function(n, t) {
            return null != n && we(n, t, Rt);
          }, An.hasIn = zu, An.head = qe, An.identity = $u, An.includes = function(n, t, r, e) {
            return n = su(n) ? n : Lu(n), r = r && !e ? ku(r) : 0, e = n.length, 0 > r && (r = Li(e + r, 0)), 
            ju(n) ? r <= e && -1 < n.indexOf(t, r) : !!e && -1 < v(n, t, r);
          }, An.indexOf = function(n, t, r) {
            var e = null == n ? 0 : n.length;
            return e ? (r = null == r ? 0 : ku(r), 0 > r && (r = Li(e + r, 0)), v(n, t, r)) : -1;
          }, An.inRange = function(n, t, r) {
            return t = Au(t), r === T ? (r = t, t = 0) : r = Au(r), n = Su(n), n >= Ci(t, r) && n < Li(t, r);
          }, An.invoke = Ef, An.isArguments = of, An.isArray = ff, An.isArrayBuffer = cf, 
          An.isArrayLike = su, An.isArrayLikeObject = hu, An.isBoolean = function(n) {
            return true === n || false === n || yu(n) && "[object Boolean]" == Ot(n);
          }, An.isBuffer = af, An.isDate = lf, An.isElement = function(n) {
            return yu(n) && 1 === n.nodeType && !xu(n);
          }, An.isEmpty = function(n) {
            if (null == n) return true;
            if (su(n) && (ff(n) || "string" == typeof n || "function" == typeof n.splice || af(n) || _f(n) || of(n))) return !n.length;
            var t = vo(n);
            if ("[object Map]" == t || "[object Set]" == t) return !n.size;
            if (ze(n)) return !Vt(n).length;
            for (var r in n) if (oi.call(n, r)) return false;
            return true;
          }, An.isEqual = function(n, t) {
            return Mt(n, t);
          }, An.isEqualWith = function(n, t, r) {
            var e = (r = "function" == typeof r ? r : T) ? r(n, t) : T;
            return e === T ? Mt(n, t, T, r) : !!e;
          }, An.isError = pu, An.isFinite = function(n) {
            return "number" == typeof n && Wi(n);
          }, An.isFunction = _u, An.isInteger = vu, An.isLength = gu, An.isMap = sf, An.isMatch = function(n, t) {
            return n === t || $t(n, t, xe(t));
          }, An.isMatchWith = function(n, t, r) {
            return r = "function" == typeof r ? r : T, $t(n, t, xe(t), r);
          }, An.isNaN = function(n) {
            return bu(n) && n != +n;
          }, An.isNative = function(n) {
            if (go(n)) throw new Hu("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
            return Ft(n);
          }, An.isNil = function(n) {
            return null == n;
          }, An.isNull = function(n) {
            return null === n;
          }, An.isNumber = bu, An.isObject = du, An.isObjectLike = yu, An.isPlainObject = xu, 
          An.isRegExp = hf, An.isSafeInteger = function(n) {
            return vu(n) && -9007199254740991 <= n && 9007199254740991 >= n;
          }, An.isSet = pf, An.isString = ju, An.isSymbol = wu, An.isTypedArray = _f, An.isUndefined = function(n) {
            return n === T;
          }, An.isWeakMap = function(n) {
            return yu(n) && "[object WeakMap]" == vo(n);
          }, An.isWeakSet = function(n) {
            return yu(n) && "[object WeakSet]" == Ot(n);
          }, An.join = function(n, t) {
            return null == n ? "" : Ui.call(n, t);
          }, An.kebabCase = Bf, An.last = Ve, An.lastIndexOf = function(n, t, r) {
            var e = null == n ? 0 : n.length;
            if (!e) return -1;
            var u = e;
            if (r !== T && (u = ku(r), u = 0 > u ? Li(e + u, 0) : Ci(u, e - 1)), t === t) n: {
              for (r = u + 1; r--; ) if (n[r] === t) {
                n = r;
                break n;
              }
              n = r;
            } else n = _(n, d, u, true);
            return n;
          }, An.lowerCase = Lf, An.lowerFirst = Cf, An.lt = vf, An.lte = gf, An.max = function(n) {
            return n && n.length ? xt(n, $u, It) : T;
          }, An.maxBy = function(n, t) {
            return n && n.length ? xt(n, ye(t, 2), It) : T;
          }, An.mean = function(n) {
            return y(n, $u);
          }, An.meanBy = function(n, t) {
            return y(n, ye(t, 2));
          }, An.min = function(n) {
            return n && n.length ? xt(n, $u, Kt) : T;
          }, An.minBy = function(n, t) {
            return n && n.length ? xt(n, ye(t, 2), Kt) : T;
          }, An.stubArray = qu, An.stubFalse = Vu, An.stubObject = function() {
            return {};
          }, An.stubString = function() {
            return "";
          }, An.stubTrue = function() {
            return true;
          }, An.multiply = rc, An.nth = function(n, t) {
            return n && n.length ? Qt(n, ku(t)) : T;
          }, An.noConflict = function() {
            return $n._ === this && ($n._ = si), this;
          }, An.noop = Pu, An.now = Go, An.pad = function(n, t, r) {
            n = Iu(n);
            var e = (t = ku(t)) ? D(n) : 0;
            return !t || e >= t ? n : (t = (t - e) / 2, ne(Ii(t), r) + n + ne(Oi(t), r));
          }, An.padEnd = function(n, t, r) {
            n = Iu(n);
            var e = (t = ku(t)) ? D(n) : 0;
            return t && e < t ? n + ne(t - e, r) : n;
          }, An.padStart = function(n, t, r) {
            n = Iu(n);
            var e = (t = ku(t)) ? D(n) : 0;
            return t && e < t ? ne(t - e, r) + n : n;
          }, An.parseInt = function(n, t, r) {
            return r || null == t ? t = 0 : t && (t = +t), Mi(Iu(n).replace(on, ""), t || 0);
          }, An.random = function(n, t, r) {
            if (r && "boolean" != typeof r && Oe(n, t, r) && (t = r = T), r === T && ("boolean" == typeof t ? (r = t, 
            t = T) : "boolean" == typeof n && (r = n, n = T)), n === T && t === T ? (n = 0, 
            t = 1) : (n = Au(n), t === T ? (t = n, n = 0) : t = Au(t)), n > t) {
              var e = n;
              n = t, t = e;
            }
            return r || n % 1 || t % 1 ? (r = Ti(), Ci(n + r * (t - n + Cn("1e-" + ((r + "").length - 1))), t)) : ir(n, t);
          }, An.reduce = function(n, t, r) {
            var e = ff(n) ? l : j, u = 3 > arguments.length;
            return e(n, ye(t, 4), r, u, uo);
          }, An.reduceRight = function(n, t, r) {
            var e = ff(n) ? s : j, u = 3 > arguments.length;
            return e(n, ye(t, 4), r, u, io);
          }, An.repeat = function(n, t, r) {
            return t = (r ? Oe(n, t, r) : t === T) ? 1 : ku(t), or(Iu(n), t);
          }, An.replace = function() {
            var n = arguments, t = Iu(n[0]);
            return 3 > n.length ? t : t.replace(n[1], n[2]);
          }, An.result = function(n, t, r) {
            t = Sr(t, n);
            var e = -1, u = t.length;
            for (u || (u = 1, n = T); ++e < u; ) {
              var i = null == n ? T : n[Me(t[e])];
              i === T && (e = u, i = r), n = _u(i) ? i.call(n) : i;
            }
            return n;
          }, An.round = ec, An.runInContext = x, An.sample = function(n) {
            return (ff(n) ? Qn : cr)(n);
          }, An.size = function(n) {
            if (null == n) return 0;
            if (su(n)) return ju(n) ? D(n) : n.length;
            var t = vo(n);
            return "[object Map]" == t || "[object Set]" == t ? n.size : Vt(n).length;
          }, An.snakeCase = Df, An.some = function(n, t, r) {
            var e = ff(n) ? h : pr;
            return r && Oe(n, t, r) && (t = T), e(n, ye(t, 3));
          }, An.sortedIndex = function(n, t) {
            return _r(n, t);
          }, An.sortedIndexBy = function(n, t, r) {
            return vr(n, t, ye(r, 2));
          }, An.sortedIndexOf = function(n, t) {
            var r = null == n ? 0 : n.length;
            if (r) {
              var e = _r(n, t);
              if (e < r && lu(n[e], t)) return e;
            }
            return -1;
          }, An.sortedLastIndex = function(n, t) {
            return _r(n, t, true);
          }, An.sortedLastIndexBy = function(n, t, r) {
            return vr(n, t, ye(r, 2), true);
          }, An.sortedLastIndexOf = function(n, t) {
            if (null == n ? 0 : n.length) {
              var r = _r(n, t, true) - 1;
              if (lu(n[r], t)) return r;
            }
            return -1;
          }, An.startCase = Mf, An.startsWith = function(n, t, r) {
            return n = Iu(n), r = null == r ? 0 : pt(ku(r), 0, n.length), t = yr(t), n.slice(r, r + t.length) == t;
          }, An.subtract = uc, An.sum = function(n) {
            return n && n.length ? m(n, $u) : 0;
          }, An.sumBy = function(n, t) {
            return n && n.length ? m(n, ye(t, 2)) : 0;
          }, An.template = function(n, t, r) {
            var e = An.templateSettings;
            r && Oe(n, t, r) && (t = T), n = Iu(n), t = bf({}, t, e, ce), r = bf({}, t.imports, e.imports, ce);
            var u, i, o = Wu(r), f = S(r, o), c = 0;
            r = t.interpolate || jn;
            var a = "__p+='";
            r = Xu((t.escape || jn).source + "|" + r.source + "|" + (r === Q ? pn : jn).source + "|" + (t.evaluate || jn).source + "|$", "g");
            var l = "sourceURL" in t ? "//# sourceURL=" + t.sourceURL + "\n" : "";
            if (n.replace(r, function(t, r, e, o, f, l) {
              return e || (e = o), a += n.slice(c, l).replace(wn, z), r && (u = true, a += "'+__e(" + r + ")+'"), 
              f && (i = true, a += "';" + f + ";\n__p+='"), e && (a += "'+((__t=(" + e + "))==null?'':__t)+'"), 
              c = l + t.length, t;
            }), a += "';", (t = t.variable) || (a = "with(obj){" + a + "}"), a = (i ? a.replace(P, "") : a).replace(Z, "$1").replace(q, "$1;"), 
            a = "function(" + (t || "obj") + "){" + (t ? "" : "obj||(obj={});") + "var __t,__p=''" + (u ? ",__e=_.escape" : "") + (i ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + a + "return __p}", 
            t = Ff(function() {
              return Ju(o, l + "return " + a).apply(T, f);
            }), t.source = a, pu(t)) throw t;
            return t;
          }, An.times = function(n, t) {
            if (n = ku(n), 1 > n || 9007199254740991 < n) return [];
            var r = 4294967295, e = Ci(n, 4294967295);
            for (t = ye(t), n -= 4294967295, e = A(e, t); ++r < n; ) t(r);
            return e;
          }, An.toFinite = Au, An.toInteger = ku, An.toLength = Eu, An.toLower = function(n) {
            return Iu(n).toLowerCase();
          }, An.toNumber = Su, An.toSafeInteger = function(n) {
            return n ? pt(ku(n), -9007199254740991, 9007199254740991) : 0 === n ? n : 0;
          }, An.toString = Iu, An.toUpper = function(n) {
            return Iu(n).toUpperCase();
          }, An.trim = function(n, t, r) {
            return (n = Iu(n)) && (r || t === T) ? n.replace(un, "") : n && (t = yr(t)) ? (n = M(n), 
            r = M(t), t = I(n, r), r = R(n, r) + 1, Or(n, t, r).join("")) : n;
          }, An.trimEnd = function(n, t, r) {
            return (n = Iu(n)) && (r || t === T) ? n.replace(fn, "") : n && (t = yr(t)) ? (n = M(n), 
            t = R(n, M(t)) + 1, Or(n, 0, t).join("")) : n;
          }, An.trimStart = function(n, t, r) {
            return (n = Iu(n)) && (r || t === T) ? n.replace(on, "") : n && (t = yr(t)) ? (n = M(n), 
            t = I(n, M(t)), Or(n, t).join("")) : n;
          }, An.truncate = function(n, t) {
            var r = 30, e = "...";
            if (du(t)) var u = "separator" in t ? t.separator : u, r = "length" in t ? ku(t.length) : r, e = "omission" in t ? yr(t.omission) : e;
            n = Iu(n);
            var i = n.length;
            if (Rn.test(n)) var o = M(n), i = o.length;
            if (r >= i) return n;
            if (i = r - D(e), 1 > i) return e;
            if (r = o ? Or(o, 0, i).join("") : n.slice(0, i), u === T) return r + e;
            if (o && (i += r.length - i), hf(u)) {
              if (n.slice(i).search(u)) {
                var f = r;
                for (u.global || (u = Xu(u.source, Iu(_n.exec(u)) + "g")), u.lastIndex = 0; o = u.exec(f); ) var c = o.index;
                r = r.slice(0, c === T ? i : c);
              }
            } else n.indexOf(yr(u), i) != i && (u = r.lastIndexOf(u), -1 < u && (r = r.slice(0, u)));
            return r + e;
          }, An.unescape = function(n) {
            return (n = Iu(n)) && G.test(n) ? n.replace(V, tt) : n;
          }, An.uniqueId = function(n) {
            var t = ++fi;
            return Iu(n) + t;
          }, An.upperCase = Tf, An.upperFirst = $f, An.each = nu, An.eachRight = tu, An.first = qe, 
          Nu(An, function() {
            var n = {};
            return mt(An, function(t, r) {
              oi.call(An.prototype, r) || (n[r] = t);
            }), n;
          }(), {
            chain: false
          }), An.VERSION = "4.17.11", r("bind bindKey curry curryRight partial partialRight".split(" "), function(n) {
            An[n].placeholder = An;
          }), r([ "drop", "take" ], function(n, t) {
            Ln.prototype[n] = function(r) {
              r = r === T ? 1 : Li(ku(r), 0);
              var e = this.__filtered__ && !t ? new Ln(this) : this.clone();
              return e.__filtered__ ? e.__takeCount__ = Ci(r, e.__takeCount__) : e.__views__.push({
                size: Ci(r, 4294967295),
                type: n + (0 > e.__dir__ ? "Right" : "")
              }), e;
            }, Ln.prototype[n + "Right"] = function(t) {
              return this.reverse()[n](t).reverse();
            };
          }), r([ "filter", "map", "takeWhile" ], function(n, t) {
            var r = t + 1, e = 1 == r || 3 == r;
            Ln.prototype[n] = function(n) {
              var t = this.clone();
              return t.__iteratees__.push({
                iteratee: ye(n, 3),
                type: r
              }), t.__filtered__ = t.__filtered__ || e, t;
            };
          }), r([ "head", "last" ], function(n, t) {
            var r = "take" + (t ? "Right" : "");
            Ln.prototype[n] = function() {
              return this[r](1).value()[0];
            };
          }), r([ "initial", "tail" ], function(n, t) {
            var r = "drop" + (t ? "" : "Right");
            Ln.prototype[n] = function() {
              return this.__filtered__ ? new Ln(this) : this[r](1);
            };
          }), Ln.prototype.compact = function() {
            return this.filter($u);
          }, Ln.prototype.find = function(n) {
            return this.filter(n).head();
          }, Ln.prototype.findLast = function(n) {
            return this.reverse().find(n);
          }, Ln.prototype.invokeMap = fr(function(n, t) {
            return "function" == typeof n ? new Ln(this) : this.map(function(r) {
              return Bt(r, n, t);
            });
          }), Ln.prototype.reject = function(n) {
            return this.filter(au(ye(n)));
          }, Ln.prototype.slice = function(n, t) {
            n = ku(n);
            var r = this;
            return r.__filtered__ && (0 < n || 0 > t) ? new Ln(r) : (0 > n ? r = r.takeRight(-n) : n && (r = r.drop(n)), 
            t !== T && (t = ku(t), r = 0 > t ? r.dropRight(-t) : r.take(t - n)), r);
          }, Ln.prototype.takeRightWhile = function(n) {
            return this.reverse().takeWhile(n).reverse();
          }, Ln.prototype.toArray = function() {
            return this.take(4294967295);
          }, mt(Ln.prototype, function(n, t) {
            var r = /^(?:filter|find|map|reject)|While$/.test(t), e = /^(?:head|last)$/.test(t), u = An[e ? "take" + ("last" == t ? "Right" : "") : t], i = e || /^find/.test(t);
            u && (An.prototype[t] = function() {
              var t = this.__wrapped__, o = e ? [ 1 ] : arguments, f = t instanceof Ln, c = o[0], l = f || ff(t), s = function s(n) {
                return n = u.apply(An, a([ n ], o)), e && h ? n[0] : n;
              };
              l && r && "function" == typeof c && 1 != c.length && (f = l = false);
              var h = this.__chain__, p = !!this.__actions__.length, c = i && !h, f = f && !p;
              return !i && l ? (t = f ? t : new Ln(this), t = n.apply(t, o), t.__actions__.push({
                func: Qe,
                args: [ s ],
                thisArg: T
              }), new On(t, h)) : c && f ? n.apply(this, o) : (t = this.thru(s), c ? e ? t.value()[0] : t.value() : t);
            });
          }), r("pop push shift sort splice unshift".split(" "), function(n) {
            var t = ri[n], r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", e = /^(?:pop|shift)$/.test(n);
            An.prototype[n] = function() {
              var n = arguments;
              if (e && !this.__chain__) {
                var u = this.value();
                return t.apply(ff(u) ? u : [], n);
              }
              return this[r](function(r) {
                return t.apply(ff(r) ? r : [], n);
              });
            };
          }), mt(Ln.prototype, function(n, t) {
            var r = An[t];
            if (r) {
              var e = r.name + "";
              (Gi[e] || (Gi[e] = [])).push({
                name: t,
                func: r
              });
            }
          }), Gi[Jr(T, 2).name] = [ {
            name: "wrapper",
            func: T
          } ], Ln.prototype.clone = function() {
            var n = new Ln(this.__wrapped__);
            return n.__actions__ = Lr(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, 
            n.__iteratees__ = Lr(this.__iteratees__), n.__takeCount__ = this.__takeCount__, 
            n.__views__ = Lr(this.__views__), n;
          }, Ln.prototype.reverse = function() {
            if (this.__filtered__) {
              var n = new Ln(this);
              n.__dir__ = -1, n.__filtered__ = true;
            } else n = this.clone(), n.__dir__ *= -1;
            return n;
          }, Ln.prototype.value = function() {
            var n, t = this.__wrapped__.value(), r = this.__dir__, e = ff(t), u = 0 > r, i = e ? t.length : 0;
            n = 0;
            for (var o = i, f = this.__views__, c = -1, a = f.length; ++c < a; ) {
              var l = f[c], s = l.size;
              switch (l.type) {
               case "drop":
                n += s;
                break;

               case "dropRight":
                o -= s;
                break;

               case "take":
                o = Ci(o, n + s);
                break;

               case "takeRight":
                n = Li(n, o - s);
              }
            }
            if (n = {
              start: n,
              end: o
            }, o = n.start, f = n.end, n = f - o, o = u ? f : o - 1, f = this.__iteratees__, 
            c = f.length, a = 0, l = Ci(n, this.__takeCount__), !e || !u && i == n && l == n) return wr(t, this.__actions__);
            e = [];
            n: for (;n-- && a < l; ) {
              for (o += r, u = -1, i = t[o]; ++u < c; ) {
                var h = f[u], s = h.type, h = (0, h.iteratee)(i);
                if (2 == s) i = h; else if (!h) {
                  if (1 == s) continue n;
                  break n;
                }
              }
              e[a++] = i;
            }
            return e;
          }, An.prototype.at = To, An.prototype.chain = function() {
            return Ye(this);
          }, An.prototype.commit = function() {
            return new On(this.value(), this.__chain__);
          }, An.prototype.next = function() {
            this.__values__ === T && (this.__values__ = mu(this.value()));
            var n = this.__index__ >= this.__values__.length;
            return {
              done: n,
              value: n ? T : this.__values__[this.__index__++]
            };
          }, An.prototype.plant = function(n) {
            for (var t, r = this; r instanceof kn; ) {
              var e = Fe(r);
              e.__index__ = 0, e.__values__ = T, t ? u.__wrapped__ = e : t = e;
              var u = e, r = r.__wrapped__;
            }
            return u.__wrapped__ = n, t;
          }, An.prototype.reverse = function() {
            var n = this.__wrapped__;
            return n instanceof Ln ? (this.__actions__.length && (n = new Ln(this)), n = n.reverse(), 
            n.__actions__.push({
              func: Qe,
              args: [ Ge ],
              thisArg: T
            }), new On(n, this.__chain__)) : this.thru(Ge);
          }, An.prototype.toJSON = An.prototype.valueOf = An.prototype.value = function() {
            return wr(this.__wrapped__, this.__actions__);
          }, An.prototype.first = An.prototype.head, wi && (An.prototype[wi] = Xe), An;
        }();
        "function" == typeof define && "object" == _typeof(define.amd) && define.amd ? ($n._ = rt, 
        define(function() {
          return rt;
        })) : Nn ? ((Nn.exports = rt)._ = rt, Fn._ = rt) : $n._ = rt;
      }).call(void 0);
      cc._RF.pop();
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {} ],
  login_ui: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "726d1Nt9n9Erqqr+gOmrmlJ", "login_ui");
    "use strict";
    var _AppUtil = _interopRequireDefault(require("../utility/AppUtil"));
    var _AppConst = require("../define/AppConst");
    var _NoticeCenter = require("../common/NoticeCenter");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        ed_box: cc.EditBox,
        btn: cc.Button
      },
      onLoad: function onLoad() {
        this.btn.node.on("click", this.onClickLogin, this);
      },
      start: function start() {},
      onClickLogin: function onClickLogin() {
        var code = this.ed_box.string;
        if ("" == code) {
          _AppUtil["default"].showMessage("\u65e0\u6548\u7684\u8d26\u53f7");
          return;
        }
        _AppConst.AppConst.LOGIN_CODE = code;
        _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.login_code_update);
        this.node.destroy();
      }
    });
    cc._RF.pop();
  }, {
    "../common/NoticeCenter": "NoticeCenter",
    "../define/AppConst": "AppConst",
    "../utility/AppUtil": "AppUtil"
  } ],
  logoScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16854VfyApA5YjJez4gtU47", "logoScene");
    "use strict";
    var _AppUtil = _interopRequireDefault(require("../utility/AppUtil"));
    var _ManagerCenter = _interopRequireDefault(require("../common/ManagerCenter"));
    var _NoticeCenter = require("../common/NoticeCenter");
    var _AppConst = require("../define/AppConst");
    var _netlib = require("../lib/netlib");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      onDestroy: function onDestroy() {},
      startGame: function startGame() {
        var _this = this;
        if (CC_WECHATGAME) {
          wx_sdk.login_callback = function(data) {
            var obj = {};
            obj.code = data.code;
            obj.type = 1;
            _this.socketOpen ? _netlib.netlib.getInstance().sendLogin(obj) : _this.netCache.push(function() {
              _netlib.netlib.getInstance().sendLogin(obj);
            });
          };
          _ManagerCenter["default"].getWxManager().login();
        } else {
          var obj = {
            code: _AppConst.AppConst.LOGIN_CODE,
            type: 2
          };
          _ManagerCenter["default"].getDataManager().setLoginInfo(obj);
          this.socketOpen ? _netlib.netlib.getInstance().sendLogin(obj) : this.netCache.push(function() {
            _netlib.netlib.getInstance().sendLogin(obj);
          });
        }
      },
      start: function start() {
        this.gotoLoading();
      },
      gotoLoading: function gotoLoading() {
        this.node.runAction(cc.sequence(cc.delayTime(2), cc.fadeTo(1, 100), cc.callFunc(function() {
          cc.director.loadScene("loadScene");
        })));
        cc.director.preloadScene("loadScene", null, function(err, asset) {});
      }
    });
    cc._RF.pop();
  }, {
    "../common/ManagerCenter": "ManagerCenter",
    "../common/NoticeCenter": "NoticeCenter",
    "../define/AppConst": "AppConst",
    "../lib/netlib": "netlib",
    "../utility/AppUtil": "AppUtil"
  } ],
  mainScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ffc4wea6lGxqbH3B7kTDo2", "mainScene");
    "use strict";
    var _HttpClient = _interopRequireDefault(require("./fromwork/netWork/HttpClient"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        hand: cc.Node,
        wheel: cc.Node,
        startBtn: cc.Button
      },
      onLoad: function onLoad() {
        this.prize_index = 1;
        this.speed = 0;
        this.time = 0;
        this.addSpeed = .5;
        this.maxSpeed = false;
        this.item_count = 6;
        this.rv = 360 / this.item_count;
        this.startBtn.node.on("click", this.onClickStart, this);
        if (cc.sys.platform === cc.sys.DESKTOP_BROWSER) {
          cc.view.enableAutoFullScreen = false;
          cc.view.setFrameSize(400, 800);
        }
      },
      runWheel: function runWheel(value) {
        this.speed = 1;
        this.result_r = this.rv * (this.item_count - value);
      },
      stopWheel: function stopWheel() {
        this.speed = 0;
        this.time = 0;
        this.maxSpeed = false;
        this.hand.active = true;
        this.startBtn.interactable = true;
        cc.tween(this.wheel).by(120, {
          angle: -360
        }).start();
      },
      onClickStart: function onClickStart() {
        this.hand.active = false;
        this.startBtn.interactable = false;
        this.wheel.stopAllActions();
        this.runWheel(1);
      },
      start: function start() {
        cc.tween(this.wheel).by(120, {
          angle: -360
        }).start();
      },
      update: function update(dt) {
        if (this.speed > 0) {
          if (this.speed < 40 && !this.maxSpeed) this.speed = this.speed + this.addSpeed; else {
            this.maxSpeed = true;
            this.time++;
          }
          this.wheel.angle = (this.wheel.angle - this.speed) % 360;
          this.time > 10 && (this.speed > 3 ? this.speed = this.speed - this.addSpeed : Math.abs(this.wheel.angle + this.result_r) < 5 && this.stopWheel());
        }
      }
    });
    cc._RF.pop();
  }, {
    "./fromwork/netWork/HttpClient": "HttpClient"
  } ],
  md5: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5e51byXL3ZLW4bEt8oc4pOv", "md5");
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function _typeof(obj) {
        return typeof obj;
      } : function _typeof(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      return _typeof(obj);
    }
    (function(factory) {
      if ("object" === ("undefined" === typeof exports ? "undefined" : _typeof(exports))) module.exports = factory(); else if ("function" === typeof define && define.amd) define(factory); else {
        var glob;
        try {
          glob = window;
        } catch (e) {
          glob = self;
        }
        glob.SparkMD5 = factory();
      }
    })(function(undefined) {
      var add32 = function add32(a, b) {
        return a + b & 4294967295;
      }, hex_chr = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
      function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b);
      }
      function md5cycle(x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }
      function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        return md5blks;
      }
      function md5blk_array(a) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        return md5blks;
      }
      function md51(s) {
        var n = s.length, state = [ 1732584193, -271733879, -1732584194, 271733878 ], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) md5cycle(state, md5blk(s.substring(i - 64, i)));
        s = s.substring(i - 64);
        length = s.length;
        tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        for (i = 0; i < length; i += 1) tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) tail[i] = 0;
        }
        tmp = 8 * n;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function md51_array(a) {
        var n = a.length, state = [ 1732584193, -271733879, -1732584194, 271733878 ], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        for (i = 0; i < length; i += 1) tail[i >> 2] |= a[i] << (i % 4 << 3);
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) tail[i] = 0;
        }
        tmp = 8 * n;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function rhex(n) {
        var s = "", j;
        for (j = 0; j < 4; j += 1) s += hex_chr[n >> 8 * j + 4 & 15] + hex_chr[n >> 8 * j & 15];
        return s;
      }
      function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) x[i] = rhex(x[i]);
        return x.join("");
      }
      "5d41402abc4b2a76b9719d911017c592" !== hex(md51("hello")) && (add32 = function add32(x, y) {
        var lsw = (65535 & x) + (65535 & y), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | 65535 & lsw;
      });
      "undefined" === typeof ArrayBuffer || ArrayBuffer.prototype.slice || function() {
        function clamp(val, length) {
          val = 0 | val || 0;
          if (val < 0) return Math.max(val + length, 0);
          return Math.min(val, length);
        }
        ArrayBuffer.prototype.slice = function(from, to) {
          var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
          to !== undefined && (end = clamp(to, length));
          if (begin > end) return new ArrayBuffer(0);
          num = end - begin;
          target = new ArrayBuffer(num);
          targetArray = new Uint8Array(target);
          sourceArray = new Uint8Array(this, begin, num);
          targetArray.set(sourceArray);
          return target;
        };
      }();
      function toUtf8(str) {
        /[\u0080-\uFFFF]/.test(str) && (str = unescape(encodeURIComponent(str)));
        return str;
      }
      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for (i = 0; i < length; i += 1) arr[i] = str.charCodeAt(i);
        return returnUInt8Array ? arr : buff;
      }
      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }
      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }
      function hexToBinaryString(hex) {
        var bytes = [], length = hex.length, x;
        for (x = 0; x < length - 1; x += 2) bytes.push(parseInt(hex.substr(x, 2), 16));
        return String.fromCharCode.apply(String, bytes);
      }
      function SparkMD5() {
        this.reset();
      }
      SparkMD5.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this;
      };
      SparkMD5.prototype.appendBinary = function(contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length, i;
        for (i = 64; i <= length; i += 64) md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        this._buff = this._buff.substring(i - 64);
        return this;
      };
      SparkMD5.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, i, tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], ret;
        for (i = 0; i < length; i += 1) tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        this._finish(tail, length);
        ret = hex(this._hash);
        raw && (ret = hexToBinaryString(ret));
        this.reset();
        return ret;
      };
      SparkMD5.prototype.reset = function() {
        this._buff = "";
        this._length = 0;
        this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ];
        return this;
      };
      SparkMD5.prototype.getState = function() {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };
      SparkMD5.prototype.setState = function(state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };
      SparkMD5.prototype.destroy = function() {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };
      SparkMD5.prototype._finish = function(tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(this._hash, tail);
          for (i = 0; i < 16; i += 1) tail[i] = 0;
        }
        tmp = 8 * this._length;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };
      SparkMD5.hash = function(str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };
      SparkMD5.hashBinary = function(content, raw) {
        var hash = md51(content), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      SparkMD5.ArrayBuffer = function() {
        this.reset();
      };
      SparkMD5.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i;
        this._length += arr.byteLength;
        for (i = 64; i <= length; i += 64) md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], i, ret;
        for (i = 0; i < length; i += 1) tail[i >> 2] |= buff[i] << (i % 4 << 3);
        this._finish(tail, length);
        ret = hex(this._hash);
        raw && (ret = hexToBinaryString(ret));
        this.reset();
        return ret;
      };
      SparkMD5.ArrayBuffer.prototype.reset = function() {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ];
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };
      SparkMD5.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };
      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
      SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      return SparkMD5;
    });
    cc._RF.pop();
  }, {} ],
  model_tips: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "34ae0GXjStOK4W7zSWd9FGb", "model_tips");
    "use strict";
    var _ManagerCenter = _interopRequireDefault(require("../common/ManagerCenter"));
    var _UIconst = require("../define/UIconst");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function _typeof(obj) {
        return typeof obj;
      } : function _typeof(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      return _typeof(obj);
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        btn_ok: cc.Button,
        btn_cancel: cc.Button,
        info: cc.Label,
        title: cc.Label
      },
      onLoad: function onLoad() {
        this.normalOp = false;
        this.ui_mgr = _ManagerCenter["default"].getUIManager();
        this.ok_callback = null;
        this.cancel_callback = null;
        this._setTimeOutId = null;
        this.btn_ok.node.on("click", this.onClickOK, this);
        this.btn_cancel.node.on("click", this.onClickCancel, this);
        this.btn_ok.node.active = false;
        this.btn_cancel.node.active = false;
      },
      init: function init(data) {
        var _this = this;
        if ("object" === _typeof(data.info)) {
          this.title.string = data.info.title;
          this.info.string = data.info.message;
        } else {
          this.title.node.active = false;
          this.info.string = data.info;
        }
        if (data.ok_callback) {
          this.ok_callback = data.ok_callback;
          1 == data.type && (this.cancel_callback = data.ok_callback);
        }
        data.cancel_callback && (this.cancel_callback = data.cancel_callback);
        if (1 == data.type) {
          this.btn_ok.node.removeComponent(cc.Widget);
          this.btn_ok.node.x = 0;
          this.btn_cancel.node.active = false;
          this.btn_ok.node.active = true;
        } else {
          this.btn_cancel.node.active = true;
          this.btn_ok.node.active = true;
        }
        data.time_out && (this._setTimeOutId = setTimeout(function() {
          _this.onClickOK();
        }, 1e3 * data.time_out));
      },
      onClickOK: function onClickOK() {
        this.normalOp = true;
        this.ui_mgr && this.ui_mgr.hide(_UIconst.UIconst.model_tips);
        this.ok_callback && this.ok_callback();
      },
      onClickCancel: function onClickCancel() {
        this.normalOp = true;
        this.ui_mgr.hide(_UIconst.UIconst.model_tips);
        if (this.cancel_callback) {
          this.cancel_callback();
          this.cancel_callback = null;
        }
      },
      start: function start() {},
      onDestroy: function onDestroy() {
        this._setTimeOutId && clearTimeout(this._setTimeOutId);
        this.normalOp || this.onClickCancel();
      }
    });
    cc._RF.pop();
  }, {
    "../common/ManagerCenter": "ManagerCenter",
    "../define/UIconst": "UIconst"
  } ],
  navigateComp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eaac2n9ebNB4pQLG2kD5j6h", "navigateComp");
    "use strict";
    var _ManagerCenter = _interopRequireDefault(require("../common/ManagerCenter"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var miniProgram = cc.Class({
      name: "Character",
      properties: {
        appId: cc.String,
        icon: cc.SpriteFrame
      },
      ctor: function ctor() {
        this.appId = "";
        this.icon = null;
      }
    });
    cc.Class({
      extends: cc.Component,
      properties: {
        _miniPorgrams: [ miniProgram ],
        miniProgramList: {
          get: function get() {
            return this._miniPorgrams;
          },
          set: function set(value) {
            this._miniPorgrams = value;
          },
          type: [ miniProgram ]
        },
        bg: cc.Node,
        arrow: cc.Node,
        icon: cc.Node
      },
      onLoad: function onLoad() {
        this.icon_w = this.icon.width;
        this.offset_w_l = 30;
        this.offset_w_r = 30;
        this.padding = 10;
        this.listNode = this.icon.parent;
        this.arrow.parent.on("touchstart", this.clickArrow, this);
        this.init();
      },
      init: function init() {
        this.typeId = 1;
        this.setProgram();
      },
      clickArrow: function clickArrow() {
        this.typeId = 1 == this.typeId ? 2 : 1;
        this.arrow.angle = 0 == this.arrow.angle ? 180 : 0;
        this.setProgram();
      },
      setProgram: function setProgram() {
        var _this = this;
        this.listNode.removeAllChildren(true);
        var count = this.miniProgramList.length;
        if (count > 0) {
          1 == this.typeId && (count = 1);
          var _loop = function _loop(i) {
            var node = cc.instantiate(_this.icon);
            var sp = node.getComponent(cc.Sprite);
            sp.spriteFrame = _this.miniProgramList[i].icon;
            node.parent = _this.listNode;
            node.x = -(_this.offset_w_r + _this.padding * (i + 1) + i * _this.icon_w);
            node.on("touchstart", function() {
              cc.log(_this.miniProgramList[i].appId);
              _ManagerCenter["default"].getWxManager().openOtherMiniPro(_this.miniProgramList[i].appId);
            }, _this);
          };
          for (var i = 0; i < count; i++) _loop(i);
          this.bg.width = this.offset_w_l + this.offset_w_r + this.padding * (count + 1) + count * this.icon_w;
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    "../common/ManagerCenter": "ManagerCenter"
  } ],
  netlib: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "57243jtStxGzpNo04qlGfkZ", "netlib");
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function _typeof(obj) {
        return typeof obj;
      } : function _typeof(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.protocal = exports.netlib = void 0;
    var _ManagerCenter = _interopRequireDefault(require("../common/ManagerCenter"));
    var _NoticeCenter = require("../common/NoticeCenter");
    var wx_api = _interopRequireWildcard(require("../platform/wx"));
    var _AppConst = require("../define/AppConst");
    var _comFunc = require("../common/comFunc");
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== _typeof(obj) && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var netlib = function() {
      _createClass(netlib, null, [ {
        key: "getInstance",
        value: function getInstance() {
          netlib.shared || (netlib.shared = new netlib());
          return netlib.shared;
        }
      } ]);
      function netlib() {
        _classCallCheck(this, netlib);
        this.net_mgr = _ManagerCenter["default"].getNetworkManager();
        this.data_mgr = _ManagerCenter["default"].getDataManager();
      }
      _createClass(netlib, [ {
        key: "sendGetServerTime",
        value: function sendGetServerTime() {
          var obj = {
            GameMsg: {
              Cmd: "OnServerTime"
            }
          };
          this.net_mgr.sendData(obj);
        }
      }, {
        key: "onReceiveServerTime",
        value: function onReceiveServerTime(data) {
          this.data_mgr.setDiffTime(data);
        }
      }, {
        key: "sendLogin",
        value: function sendLogin(data) {
          console.log("send login!!", data);
          var obj = {
            LoginMsg: {
              Cmd: "C2sLogin",
              Req: data
            }
          };
          this.net_mgr.sendData(obj);
        }
      }, {
        key: "onReceiveLogin",
        value: function onReceiveLogin(data) {
          console.log("onReceiveLogin", data);
          this.data_mgr.onLogin(data);
          _AppConst.AppConst.ISWX_Review = data.check;
          _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.user_login, data);
        }
      }, {
        key: "updateUserInfo",
        value: function updateUserInfo(data) {
          var obj = {
            GameMsg: {
              Cmd: "C2sUpdateUser",
              Req: data
            }
          };
          this.net_mgr.sendData(obj);
        }
      }, {
        key: "onReceiveUpdateAttr",
        value: function onReceiveUpdateAttr(data) {
          this.data_mgr.setInfo(data.AttrName, data.Value);
        }
      }, {
        key: "doReLogin",
        value: function doReLogin() {
          var _this = this;
          var isLogin = this.data_mgr.getLoginState();
          if (isLogin) {
            cc.log("\u65ad\u7ebf\u91cd\u8fde\u767b\u5f55...");
            if (CC_WECHATGAME) {
              wx_api.wx_login();
              wx_sdk.login_callback = function(res) {
                var obj = {
                  code: res.code,
                  type: 1
                };
                _this.data_mgr.setLoginInfo(obj);
                netlib.getInstance().sendLogin(obj);
              };
            } else {
              var loginInfo = this.data_mgr.getLoginInfo();
              this.sendLogin(loginInfo);
            }
          }
        }
      }, {
        key: "sendAddMoney",
        value: function sendAddMoney(value) {
          var obj = {
            GameMsg: {
              Cmd: "C2sAddMoney",
              Req: value
            }
          };
          this.net_mgr.sendData(obj);
        }
      }, {
        key: "onReceiveUpdateMoney",
        value: function onReceiveUpdateMoney(data) {
          this.data_mgr.setInfo("money", data);
        }
      }, {
        key: "sendEnterScene",
        value: function sendEnterScene(sceneID) {
          var obj = {
            GameMsg: {
              Cmd: "OnChangeScene",
              Req: sceneID
            }
          };
          this.net_mgr.sendData(obj);
        }
      }, {
        key: "sendGMCommond",
        value: function sendGMCommond(data) {
          if (!_AppConst.AppConst.ISGM) return;
          var obj = {
            GameMsg: {
              Cmd: "OnGMCommond",
              Req: {
                Commond: data.c,
                Params: data.p
              }
            }
          };
          this.net_mgr.sendData(obj);
        }
      }, {
        key: "onReceiveGMFlag",
        value: function onReceiveGMFlag(flag) {}
      }, {
        key: "sendGuideStep",
        value: function sendGuideStep(data) {
          var obj = {
            GameMsg: {
              Cmd: "OnSetGuideStep",
              Req: data
            }
          };
          this.net_mgr.sendData(obj);
        }
      }, {
        key: "onReceiveGuideInfo",
        value: function onReceiveGuideInfo(data) {
          this.data_mgr.setGuideStep(data);
          console.log("onReceiveGuideInfo", data);
        }
      }, {
        key: "onReceiveVersion",
        value: function onReceiveVersion(data) {
          cc.log("onReceiveVersion", data);
          if (CC_WECHATGAME && _AppConst.AppConst.VERSION != data) {
            _AppConst.AppConst.ISWX_Review && (_AppConst.AppConst.ISWX_Review = false);
            wx.clearStorage();
          }
        }
      }, {
        key: "onReceiveWxShareImgs",
        value: function onReceiveWxShareImgs(data) {
          cc.log("onReceiveWxShareImgs", data);
          this.data_mgr.setWxShareImgs(data);
          _ManagerCenter["default"].getWxManager().setSharMenu();
        }
      } ]);
      return netlib;
    }();
    exports.netlib = netlib;
    var protocal = {
      s2c_gm_flag: "onReceiveGMFlag",
      s2c_guide_info: "onReceiveGuideInfo",
      s2c_version: "onReceiveVersion",
      s2c_wx_share_imgs: "onReceiveWxShareImgs",
      s2c_server_time: "onReceiveServerTime",
      s2c_login: "onReceiveLogin",
      s2c_rank_list: "onReceiveRankList",
      s2c_update_money: "onReceiveUpdateMoney"
    };
    exports.protocal = protocal;
    cc._RF.pop();
  }, {
    "../common/ManagerCenter": "ManagerCenter",
    "../common/NoticeCenter": "NoticeCenter",
    "../common/comFunc": "comFunc",
    "../define/AppConst": "AppConst",
    "../platform/wx": "wx"
  } ],
  page: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9f7f0I91SBHp668G1xyfzkP", "page");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        preBtn: cc.Button,
        nextBtn: cc.Button,
        pageNum: cc.Label,
        itemCount: cc.Integer,
        maxPage: {
          visible: false,
          default: 1,
          type: cc.Integer
        },
        requstEvent: cc.Component.EventHandler
      },
      onLoad: function onLoad() {
        this._currPage = 0;
        this.maxPage = 1e3;
        this._last_click_time = 0;
        this.preBtn.node.on("click", this.onClickPre, this);
        this.nextBtn.node.on("click", this.onClickNext, this);
      },
      reset: function reset() {
        cc.log("///====>>>page reset");
        this._currPage = 1;
        this.maxPage = 1e3;
        this.setPage();
      },
      checkCanClick: function checkCanClick() {
        var now = Date.now();
        if (0 == this._last_click_time || now - this._last_click_time > 1e3) {
          this._last_click_time = now;
          return true;
        }
        return false;
      },
      onClickPre: function onClickPre() {
        if (this.checkCanClick()) {
          this._currPage--;
          cc.Component.EventHandler.emitEvents([ this.requstEvent ], this._currPage, this.itemCount);
          this.setPage();
        }
      },
      onClickNext: function onClickNext() {
        if (this.checkCanClick()) {
          this._currPage++;
          cc.Component.EventHandler.emitEvents([ this.requstEvent ], this._currPage, this.itemCount);
          this.setPage();
        }
      },
      start: function start() {
        cc.log("maxpage", this.maxPage);
        this.onClickNext();
      },
      setPage: function setPage() {
        cc.log("////setPage", this._currPage, this.maxPage);
        this.pageNum.string = "\u7b2c".concat(this._currPage, "\u9875");
        1 == this._currPage ? this.preBtn.interactable = false : this.preBtn.interactable = true;
        this._currPage >= this.maxPage ? this.nextBtn.interactable = false : this.nextBtn.interactable = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  pomelolib: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef25cDfNPpMmrHbXIOzgzKz", "pomelolib");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.pomelolib = void 0;
    var _ManagerCenter = _interopRequireDefault(require("../common/ManagerCenter"));
    var _NoticeCenter = require("../common/NoticeCenter");
    var _AppUtil = _interopRequireDefault(require("../utility/AppUtil"));
    var _UIconst = require("../define/UIconst");
    var _AppConst = require("../define/AppConst");
    var _comFunc = require("../common/comFunc");
    var _StringConf = require("../define/StringConf");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var _ReHost = "";
    var _RePort = "";
    var _ReWs = "";
    var pomelolib = function() {
      _createClass(pomelolib, null, [ {
        key: "getInstance",
        value: function getInstance() {
          pomelolib.shared || (pomelolib.shared = new pomelolib());
          return pomelolib.shared;
        }
      } ]);
      function pomelolib() {
        _classCallCheck(this, pomelolib);
        this.cache_net = [];
        this.netInit();
      }
      _createClass(pomelolib, [ {
        key: "netInit",
        value: function netInit() {
          var _this = this;
          var HOST = _AppConst.AppConst.WEBSOCK_IP;
          var PORT = _AppConst.AppConst.WEBSOCK_PORT;
          if (_AppConst.AppConst.ISTEST) {
            HOST = _AppConst.AppConst.TEST_WEBSOCK_IP;
            PORT = _AppConst.AppConst.TEST_WEBSOCK_PORT;
          }
          pomelo.init({
            host: HOST,
            port: PORT
          }, function() {
            var wx_user_info = _ManagerCenter["default"].getDataManager().getWXUserInfo();
            var route = "gate.gateHandler.entry";
            _AppUtil["default"].showLoading(_StringConf.StringConf.login);
            pomelo.request(route, {
              uid: wx_user_info.uid
            }, function(data) {
              cc.log("/////====ws data====>>>>>>>", data);
              _ReHost = data.host;
              _RePort = data.port;
              _ReWs = "ws://" + _ReHost + ":" + _RePort;
              pomelo.disconnect(function() {
                _this.serverInit(data.host, data.port);
              });
            });
          });
        }
      }, {
        key: "serverInit",
        value: function serverInit(IP, PORT) {
          var _this2 = this;
          var wx_user_info = _ManagerCenter["default"].getDataManager().getWXUserInfo();
          pomelo.init({
            host: IP,
            port: PORT,
            reconnect: true,
            log: true
          }, function(data) {
            pomelo.request("connector.entryHandler.entry", wx_user_info, function(data) {
              _this2.login();
            });
            pomelolib.hasListen || _this2.Listeners();
          });
        }
      }, {
        key: "call_cache_net",
        value: function call_cache_net() {
          console.log("//////call_cache_net", this.cache_net.length);
          if (this.cache_net.length > 0) {
            for (var i = 0; i < this.cache_net.length; i++) {
              console.log("//////call_cache_net", i);
              this.cache_net[i]();
            }
            this.cache_net = [];
          }
        }
      }, {
        key: "push_cache_net",
        value: function push_cache_net(net) {
          console.log("//////push_cache_net", JSON.stringify(net));
          this.cache_net.push(net);
        }
      }, {
        key: "disconnect",
        value: function disconnect() {
          pomelolib.shared = null;
          pomelo.disconnect();
        }
      }, {
        key: "reconnect",
        value: function reconnect() {
          var _this3 = this;
          if (!pomelo.msocket()) {
            _AppUtil["default"].showLoading(_StringConf.StringConf.login);
            pomelo.disconnect(function() {
              _this3.serverInit(_ReHost, _RePort);
            });
          }
        }
      }, {
        key: "c2sGetMyViewInfo",
        value: function c2sGetMyViewInfo(msg, cb) {
          pomelo.request("area.userHandler.c2sGetUserInfo", msg, function(data) {
            cb(data);
          });
        }
      }, {
        key: "c2sCashWithdrawal",
        value: function c2sCashWithdrawal(msg, cb) {
          pomelo.request("area.userHandler.c2sWithdraw", msg, function(data) {
            cb(data);
          });
        }
      }, {
        key: "c2sGetCashWithdrawalRecordViewInfo",
        value: function c2sGetCashWithdrawalRecordViewInfo(msg, cb) {
          pomelo.request("area.userHandler.c2sWithdrawLog", msg, function(data) {
            cb(data);
          });
        }
      }, {
        key: "c2sGetABonusViewInfo",
        value: function c2sGetABonusViewInfo(msg, cb) {
          pomelo.request("area.moneyHandler.dividends", msg, function(data) {
            200 == data.code ? cb(data.data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sGetHelpListInfo",
        value: function c2sGetHelpListInfo(msg, cb) {
          pomelo.request("area.helpHandler.helpList", msg, function(data) {
            cb(data);
          });
        }
      }, {
        key: "c2sGetHelpDetailsInfo",
        value: function c2sGetHelpDetailsInfo(msg, cb) {
          pomelo.request("area.helpHandler.helpInfo", msg, function(data) {
            cb(data);
          });
        }
      }, {
        key: "c2sGetFeedbackListInfo",
        value: function c2sGetFeedbackListInfo(msg, cb) {
          pomelo.request("area.helpHandler.getFeedList", msg, function(data) {
            cb(data);
          });
        }
      }, {
        key: "c2sGetFeedbackDetailsInfo",
        value: function c2sGetFeedbackDetailsInfo(msg, cb) {
          pomelo.request("area.helpHandler.getFeedInfo", msg, function(data) {
            cb(data);
          });
        }
      }, {
        key: "c2sWriteFeedback",
        value: function c2sWriteFeedback(msg, cb) {
          pomelo.request("area.helpHandler.feedback", msg, function(data) {
            cb(data);
          });
        }
      }, {
        key: "c2sGetGemGetRecord",
        value: function c2sGetGemGetRecord(msg, cb) {
          pomelo.request("area.moneyHandler.getJewelDetail", msg, function(data) {
            cb(data);
          });
        }
      }, {
        key: "c2sGetThousandPersonsViewInfo",
        value: function c2sGetThousandPersonsViewInfo(msg, cb) {
          pomelo.request("area.moneyHandler.getThousandIncomeDetail", msg, function(data) {
            cb(data);
          });
        }
      }, {
        key: "c2sGetSeniorPartnerProcessViewInfo",
        value: function c2sGetSeniorPartnerProcessViewInfo(msg, cb) {
          pomelo.request("area.moneyHandler.getAdvancedIncomeDetail", msg, function(data) {
            cb(data);
          });
        }
      }, {
        key: "c2sGetProfitViewInfo",
        value: function c2sGetProfitViewInfo(msg, cb) {
          pomelo.request("area.moneyHandler.income", msg, function(data) {
            cb(data);
          });
        }
      }, {
        key: "c2sGetMyTeamViewInfo",
        value: function c2sGetMyTeamViewInfo(msg, cb) {
          pomelo.request("area.inventHandler.getInventList", msg, function(data) {
            cb(data);
          });
        }
      }, {
        key: "c2sGetABonusRecordViewInfo",
        value: function c2sGetABonusRecordViewInfo(msg, cb) {
          pomelo.request("area.moneyHandler.getBonusDetail", msg, function(data) {
            cb(data);
          });
        }
      }, {
        key: "c2sGetProfitStatistics",
        value: function c2sGetProfitStatistics(msg, cb) {
          pomelo.request("area.moneyHandler.getIncomeDetail", msg, function(data) {
            cb(data);
          });
        }
      }, {
        key: "c2sDailyMissionInfo",
        value: function c2sDailyMissionInfo(msg, cb) {
          pomelo.request("area.missionHandler.c2sDailyMissionInfo", msg, function(data) {
            200 == data.code ? cb(data.data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sReceiveDailyBonus",
        value: function c2sReceiveDailyBonus(msg, cb) {
          pomelo.request("area.missionHandler.c2sReceiveDailyBonus", msg, function(data) {
            200 == data.code ? cb(data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sReceiveDailyInvite",
        value: function c2sReceiveDailyInvite(msg, cb) {
          pomelo.request("area.missionHandler.c2sReceiveDailyInvite", msg, function(data) {
            200 == data.code ? cb(data.data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sReceiveFriendsVideo",
        value: function c2sReceiveFriendsVideo(msg, cb) {
          pomelo.request("area.missionHandler.c2sReceiveFriendsVideo", msg, function(data) {
            200 == data.code ? cb(data.data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sGetSharePosterViewInfo",
        value: function c2sGetSharePosterViewInfo(msg, cb) {
          pomelo.request("area.userHandler.s2cWithdrawLog", msg, function(data) {
            cb(data);
          });
        }
      }, {
        key: "c2sGetUserInfo",
        value: function c2sGetUserInfo(msg, cb) {
          pomelo.request("area.userHandler.c2sGetUserInfo", msg, function(data) {
            200 == data.code && cb(data.data);
          });
        }
      }, {
        key: "c2sGetrankInfo",
        value: function c2sGetrankInfo(msg, cb) {
          pomelo.request("area.userHandler.c2sGetrankInfo", msg, function(data) {
            cb(data);
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this4 = this;
          var wx_user_info = _ManagerCenter["default"].getDataManager().getWXUserInfo();
          pomelo.request("login.loginHandler.login", {
            uid: wx_user_info.uid
          }, function(data) {
            console.log("///////login", data);
            if (200 == data.code) {
              _ManagerCenter["default"].getDataManager().onLogin(data.userInfo);
              cc.sys.localStorage.setItem("uid", wx_user_info.uid);
              _this4.c2sServerRoleInt({}, function(data) {
                _AppUtil["default"].hideLoading();
                _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.user_login);
              });
              _comFunc.comFunc.checkNewVersion();
            } else if (400 == data.code) {
              _AppUtil["default"].hideLoading();
              _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.user_register);
            } else {
              _AppUtil["default"].hideLoading();
              data.msg && _AppUtil["default"].showMessage(data.msg);
            }
          });
        }
      }, {
        key: "register",
        value: function register(phoneNum, captcha, invite_id, cb) {
          var _this5 = this;
          var wx_user_info = _ManagerCenter["default"].getDataManager().getWXUserInfo();
          var msg = {};
          Object.assign(msg, wx_user_info);
          msg.phone = phoneNum;
          msg.code = captcha;
          msg.invite_id = invite_id;
          pomelo.request("login.loginHandler.register", msg, function(data) {
            console.log("///////////register", data.code);
            _AppUtil["default"].hideLoading();
            if (200 == data.code) {
              _ManagerCenter["default"].getDataManager().onLogin(data.userInfo);
              _this5.c2sServerRoleInt({}, function() {
                _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.user_login);
                cb(data);
              });
            } else _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sServerRoleInt",
        value: function c2sServerRoleInt(msg, cb) {
          pomelo.request("login.loginHandler.setInfo", msg, function(data) {
            if (200 == data.code) {
              cc.log("///===>>setInfo", data);
              cb(data);
            }
          });
        }
      }, {
        key: "c2sWithdraw",
        value: function c2sWithdraw(msg, cb) {
          pomelo.request("area.userHandler.c2sWithdraw", msg, function(data) {
            cb(data.data);
          });
        }
      }, {
        key: "c2sGetTodayMoney",
        value: function c2sGetTodayMoney(msg, cb) {
          pomelo.request("login.loginHandler.getMoney", msg, function(data) {
            cb(data.date);
          });
        }
      }, {
        key: "c2sGetLevelInfo",
        value: function c2sGetLevelInfo(msg, cb) {
          pomelo.request("login.loginHandler.getLevelInfo", msg, function(data) {
            if (200 == data.code) {
              cc.log("///===c2sGetLevelInfo===>>>", data);
              cb(data.date);
            } else _AppUtil["default"].showMessage("\u83b7\u53d6\u6570\u636e\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u6253\u5f00");
          });
        }
      }, {
        key: "c2sOpenFloor",
        value: function c2sOpenFloor(msg, cb) {
          pomelo.request("area.mapHandler.c2sOpenFloor", msg, function(data) {
            200 == data.code && cb(data.data);
          });
        }
      }, {
        key: "c2sUpgradeFloor",
        value: function c2sUpgradeFloor(msg, cb) {
          pomelo.request("area.mapHandler.c2sUpgradeFloor", msg, function(data) {
            cc.log(data);
            200 == data.code ? cb(data.data) : data.msg && _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sGetOpenCoins",
        value: function c2sGetOpenCoins(msg, cb) {
          pomelo.request("area.mapHandler.c2sGetOpenCoins", msg, function(data) {
            200 == data.code && cb(data.data);
          });
        }
      }, {
        key: "c2sRankList",
        value: function c2sRankList(msg, cb) {
          pomelo.request("area.rankHandler.c2sRankList", msg, function(data) {
            200 == data.code && cb(data.data);
          });
        }
      }, {
        key: "c2sGetOfflineReward",
        value: function c2sGetOfflineReward(msg, cb) {
          pomelo.request("area.userHandler.c2sGetOfflineReward", msg, function(data) {
            cc.log("////==c2sGetOfflineReward==>>>>", data);
            200 == data.code ? cb(data.data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sTakeOfflineReward",
        value: function c2sTakeOfflineReward(msg, cb) {
          pomelo.request("area.userHandler.c2sTakeOfflineReward", msg, function(data) {
            200 == data.code ? cb(data.data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "getRedPacketInfor",
        value: function getRedPacketInfor(msg, cb) {
          pomelo.request("login.loginHandler.getRedPacketInfo", msg, function(data) {
            200 == data.code && cb(data.redPacketInfo);
          });
        }
      }, {
        key: "redPacketReceive",
        value: function redPacketReceive(msg, cb) {
          pomelo.request("area.redPacketHandler.receive", msg, function(data) {
            200 == data.code ? cb(data.reward) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "getChestList",
        value: function getChestList(msg, cb) {
          pomelo.request("area.openChestHandler.getList", msg, function(data) {
            200 == data.code && cb(data.data);
          });
        }
      }, {
        key: "putChest",
        value: function putChest(msg, cb) {
          pomelo.request("area.openChestHandler.putChest", msg, function(data) {
            cc.log("///////putChest", data);
            200 == data.code && cb(data);
          });
        }
      }, {
        key: "openChest",
        value: function openChest(msg, cb) {
          pomelo.request("area.openChestHandler.receive", msg, function(data) {
            200 == data.code && cb(data);
          });
        }
      }, {
        key: "c2sMakeMoneyByVideo",
        value: function c2sMakeMoneyByVideo(msg, cb) {
          pomelo.request("area.userHandler.c2sMakeMoneyByVideo", msg, function(data) {
            200 == data.code ? cb(data.data) : 500 == data.code && _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sTakeChest",
        value: function c2sTakeChest(msg, cb) {
          pomelo.request("area.userHandler.c2sTakeChest", msg, function(data) {
            cc.log("/////////c2sTakeChest>>>>>", data);
            200 == data.code ? cb(data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "reduceTime",
        value: function reduceTime(msg, cb) {
          pomelo.request("area.openChestHandler.reduceTime", msg, function(data) {
            200 == data.code ? cb(data) : 500 == data.code && _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sDrawLottery",
        value: function c2sDrawLottery(msg, cb) {
          pomelo.request("area.lotteryHandler.c2sDrawLottery", msg, function(data) {
            200 == data.code ? cb(data.data) : _AppUtil["default"].showMessage(msg);
          });
        }
      }, {
        key: "c2sIncreaseLotteryByVideo",
        value: function c2sIncreaseLotteryByVideo(msg, cb) {
          pomelo.request("area.userHandler.c2sIncreaseLotteryByVideo", msg, function(data) {
            200 == data.code ? cb(data.data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "getJewelInfo",
        value: function getJewelInfo(msg, cb) {
          pomelo.request("area.moneyHandler.getJewelInfo", msg, function(data) {
            200 == data.code && cb(data.data);
          });
        }
      }, {
        key: "c2sSharePoster",
        value: function c2sSharePoster(msg, cb) {
          pomelo.request("area.userHandler.c2sSharePoster", msg, function(data) {
            console.log(data);
            200 == data.code && cb(data.data);
          });
        }
      }, {
        key: "c2sOpenDoubleEarning",
        value: function c2sOpenDoubleEarning(msg, cb) {
          pomelo.request("area.userHandler.c2sOpenDoubleEarning", msg, function(data) {
            cc.log("c2sOpenDoubleEarning", data);
            200 == data.code ? cb(data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sGetActiveMessage",
        value: function c2sGetActiveMessage(msg, cb) {
          pomelo.request("area.userHandler.c2sGetActiveMessage", msg, function(data) {
            cc.log("c2sGetActiveMessage", data);
            200 == data.code ? cb(data.data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sHowMuchGetByVideo",
        value: function c2sHowMuchGetByVideo(msg, cb) {
          pomelo.request("area.userHandler.c2sHowMuchGetByVideo", msg, function(data) {
            cc.log("c2sHowMuchGetByVideo", data);
            200 == data.code ? cb(data.data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sGetIntroduceMessage",
        value: function c2sGetIntroduceMessage(msg, cb) {
          pomelo.request("area.userHandler.c2sGetIntroduceMessage", msg, function(data) {
            cc.log("c2sGetIntroduceMessage", data);
            200 == data.code ? cb(data.data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sMachineInfo",
        value: function c2sMachineInfo(msg, cb) {
          pomelo.request("area.machineHandler.c2sMachineInfo", msg, function(data) {
            cc.log("c2sMachineInfo", data);
            200 == data.code ? cb(data.data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sReceiveJade",
        value: function c2sReceiveJade(msg, cb) {
          pomelo.request("area.machineHandler.c2sReceiveJade", msg, function(data) {
            cc.log("c2sReceiveJade", data);
            200 == data.code ? cb(data.data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sMoveToBalance",
        value: function c2sMoveToBalance(msg, cb) {
          pomelo.request("area.machineHandler.c2sMoveToBalance", msg, function(data) {
            cc.log("c2sMoveToBalance", data);
            200 == data.code ? cb(data.data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sCommanderMission",
        value: function c2sCommanderMission(msg, cb) {
          pomelo.request("area.missionHandler.c2sCommanderMission", msg, function(data) {
            cc.log("c2sCommanderMission", data);
            200 == data.code ? cb(data.data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sReceiveCommander",
        value: function c2sReceiveCommander(msg, cb) {
          pomelo.request("area.missionHandler.c2sReceiveCommander", msg, function(data) {
            cc.log("c2sReceiveCommander", data);
            200 == data.code ? cb(data.data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "c2sBonusReduceTime",
        value: function c2sBonusReduceTime(msg, cb) {
          pomelo.request("area.missionHandler.c2sBonusReduceTime", msg, function(data) {
            cc.log("c2sBonusReduceTime", data);
            200 == data.code ? cb(data.data) : _AppUtil["default"].showMessage(data.msg);
          });
        }
      }, {
        key: "Listeners",
        value: function Listeners() {
          pomelolib.hasListen = true;
          pomelo.on("onOpenChestChange", function(data) {
            cc.log(data);
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.net_update_chest, data);
          }), pomelo.on("s2c_balance_increase", function(data) {
            cc.log("////===s2c_balance_increase===>>>>", data);
            _ManagerCenter["default"].getDataManager().setInfo("balance", parseFloat(data.current));
          }), pomelo.on("s2c_balance_reduce", function(data) {
            _ManagerCenter["default"].getDataManager().setInfo("balance", parseFloat(data.current));
          }), pomelo.on("s2c_coins_increase", function(data) {
            _ManagerCenter["default"].getDataManager().setInfo("coins", data.current);
          }), pomelo.on("s2c_coins_reduce", function(data) {
            _ManagerCenter["default"].getDataManager().setInfo("coins", data.current);
          }), pomelo.on("s2c_jewel_reduce", function(data) {
            _ManagerCenter["default"].getDataManager().setInfo("jewel", data.current);
          }), pomelo.on("onJewelAdd", function(data) {
            _ManagerCenter["default"].getUIManager().show(_UIconst.UIconst.wheelRewardView, {
              rtype: "bs",
              value: data.increase
            });
            _ManagerCenter["default"].getDataManager().setInfo("jewel", parseFloat(data.current));
          }), pomelo.on("s2c_product_coins_change", function(data) {
            cc.log("///////////s2c_product_coins_change", data);
            _ManagerCenter["default"].getDataManager().setInfo("per_sec_product", data.product);
            _ManagerCenter["default"].getDataManager().setInfo("per_sec_offline", data.offline);
            _ManagerCenter["default"].getDataManager().setInfo("coins_add_type", data.type);
          }), pomelo.on("s2c_chest_increase", function(data) {
            cc.log("///////////s2c_chest_increase", data);
            _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.s2c_chest_increase, data);
          });
          pomelo.on("s2c_lottery_ticket_change", function(data) {
            _ManagerCenter["default"].getDataManager().setInfo("luck_draw_num", data.current);
          });
          pomelo.on("onMoneyAdd", function(data) {
            cc.log("////onMoneyAdd====>>>>", data);
            _ManagerCenter["default"].getDataManager().setInfo("balance", parseFloat(data.current));
            _AppUtil["default"].showMessage(_comFunc.comFunc.formatString(_StringConf.StringConf.getMoney, [ data.increase ]));
          });
          pomelo.on("onIncomeAdd", function(data) {
            cc.log("////onIncomeAdd====>>>>", data);
            _ManagerCenter["default"].getDataManager().setInfo("yesterday_income", data.increase);
          });
          pomelo.on("onCoinsAdd", function(data) {
            cc.log("////onCoinsAdd====>>>>", data);
            _ManagerCenter["default"].getUIManager().show(_UIconst.UIconst.wheelRewardView, {
              rtype: "gold",
              value: data.increase
            });
          });
          pomelo.on("s2c_video_num_increase", function(data) {
            _ManagerCenter["default"].getDataManager().setInfo("video_num", data.current);
          });
        }
      } ]);
      return pomelolib;
    }();
    exports.pomelolib = pomelolib;
    cc._RF.pop();
  }, {
    "../common/ManagerCenter": "ManagerCenter",
    "../common/NoticeCenter": "NoticeCenter",
    "../common/comFunc": "comFunc",
    "../define/AppConst": "AppConst",
    "../define/StringConf": "StringConf",
    "../define/UIconst": "UIconst",
    "../utility/AppUtil": "AppUtil"
  } ],
  screenshoot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8462FlHfxMopyAZS5PL4T/", "screenshoot");
    "use strict";
    cc._RF.pop();
  }, {} ],
  scrollview: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5a516Dk/31Hurkh1c3A25kr", "scrollview");
    "use strict";
    var _ManagerCenter = _interopRequireDefault(require("../common/ManagerCenter"));
    var _enumConf = _interopRequireDefault(require("../define/enumConf"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        scrollV: cc.ScrollView,
        scrollH: cc.ScrollView
      },
      onLoad: function onLoad() {
        this._content = this.scrollV.content;
        this._view = this.scrollV.content.parent;
        this.scrollH && (this._contentH = this.scrollH.content);
        this._intervalH = 5;
        this.showMax = 8;
        this.res_mgr = _ManagerCenter["default"].getResourceManager();
        this.itemList = [];
        this.showData = [];
        this.updateInterval = .1;
        this.addUpdateInterval = 2;
        this.updateTimer = 0;
        this.lastContentY = this._content.y;
      },
      start: function start() {
        var p = this.scrollV.node.getPosition();
      },
      hideScroll: function hideScroll() {
        this.scrollV.node.active = false;
        this.scrollH && (this.scrollH.node.active = false);
      },
      showScroll: function showScroll() {
        this.scrollV.node.active = true;
        this.scrollH && (this.scrollH.node.active = true);
      },
      init: function init(data, item, direction) {
        this.data = data;
        if (direction) {
          if (direction == _enumConf["default"].scorllView.HORIZONTAL) {
            this.scrollH && (this.scrollH.node.active = true);
            this.scrollV.node.active = false;
            this.showMax = 10;
          }
        } else {
          this.scrollH && (this.scrollH.node.active = false);
          this.scrollV.node.active = true;
        }
        this.item = item;
        this._itemW = this.item.data.width;
        this._itemH = this.item.data.height;
        this.bufferZone = this.showMax * (this._itemH + this._intervalH) / 2;
        this._count = 0;
        this.scrollH && this._contentH.destroyAllChildren();
        this._content.destroyAllChildren();
        this.itemList = [];
        this.showData = [];
        var len = data.length;
        this.allCount = len;
        this.setContentSize(len);
        var show = len <= this.showMax ? len : this.showMax;
        for (var i = 0; i < show; i++) this.showData.push(data[i]);
      },
      setContentSize: function setContentSize(item_count) {
        this.scrollV.node.active && (this._content.height = item_count * (this._itemH + this._intervalH));
        this.scrollH && this.scrollH.node.active && (this._contentH.width = item_count * (this._itemW + this._intervalH));
      },
      addItem: function addItem(data) {
        var item = cc.instantiate(this.item);
        if (this.scrollV.node.active) {
          item.y = -(this._itemH + this._intervalH) * this._count - 10;
          item.parent = this._content;
        }
        if (this.scrollH && this.scrollH.node.active) {
          item.x = (this._itemW + this._intervalH) * (this._count + .5);
          item.parent = this._contentH;
        }
        var item_script = item.getComponent(this.item.name);
        item_script && item_script.init(data);
        item._itemId = this._count;
        this._count++;
        this.itemList.push(item);
      },
      updateItem: function updateItem(item, data) {
        var item_script = item.getComponent(this.item.name);
        item_script && item_script.init(data);
      },
      pushBackItem: function pushBackItem(item, newY) {
        var newId = item._itemId + this.showMax;
        if (newId > this.allCount) return;
        item._itemId = newId;
        if (this.data[newId]) {
          this.updateItem(item, this.data[newId]);
          item.y = newY;
        }
      },
      pushFrontItem: function pushFrontItem(item, newY) {
        var newId = item._itemId - this.showMax;
        if (newId < 0) return;
        item._itemId = newId;
        if (this.data[newId]) {
          item.y = newY;
          this.updateItem(item, this.data[newId]);
        }
      },
      removeItem: function removeItem() {},
      clear: function clear() {
        this._contentH.destroyAllChildren();
        this._content.destroyAllChildren();
      },
      update: function update(dt) {
        if (this.showData.length > 0) {
          var data = this.showData.shift();
          data && this.addItem(data);
        }
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return;
        this.updateTimer = 0;
        if (this.allCount > this.showMax) {
          var isDown = this._content.y < this.lastContentY;
          var offset = this.showMax * (this._itemH + this._intervalH);
          var newY = 0;
          for (var i = 0; i < this.showMax; i++) {
            var item = this.itemList[i];
            if (item && item.position) {
              var word_p = this._content.convertToWorldSpaceAR(item.position);
              var view_p = this._view.convertToNodeSpaceAR(word_p);
              if (isDown) {
                newY = item.y + offset;
                view_p.y < -this.bufferZone && newY < 0 && this.pushFrontItem(item, newY);
              } else {
                newY = item.y - offset;
                view_p.y > this.bufferZone && newY > -this._content.height && this.pushBackItem(item, newY);
              }
            }
          }
          this.lastContentY = this._content.y;
        }
      }
    });
    cc._RF.pop();
  }, {
    "../common/ManagerCenter": "ManagerCenter",
    "../define/enumConf": "enumConf"
  } ],
  tabview: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a59b2nD985LVYnrjuloIB23", "tabview");
    "use strict";
    var _NoticeCenter = require("../common/NoticeCenter");
    var _AppUtil = _interopRequireDefault(require("../utility/AppUtil"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        tabsName: "",
        btns: {
          default: [],
          type: [ cc.Button ]
        }
      },
      onLoad: function onLoad() {
        this.currIndex = 0;
        this.preIndex = 0;
        for (var i = 0; i < this.btns.length; i++) {
          var clickEventHandler = new cc.Component.EventHandler();
          clickEventHandler.target = this.node;
          clickEventHandler.component = "tabview";
          clickEventHandler.handler = "onBtnClick";
          clickEventHandler.customEventData = i;
          this.btns[i].clickEvents.push(clickEventHandler);
          this.setTabShow(i);
        }
      },
      onBtnClick: function onBtnClick(event, data) {
        if (data != this.currIndex) {
          this.setTabShow(this.currIndex);
          this.setTabHide(data);
          this.currIndex = data;
          _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.tab_index, {
            name: this.tabsName,
            index: data
          });
        }
      },
      setTabShow: function setTabShow(index) {
        this.btns[index].interactable = true;
        if ("main" == this.tabsName) {
          var node = cc.find("Background/Label", this.btns[index].node);
          node.color = cc.color(173, 176, 186);
        }
      },
      setTabHide: function setTabHide(index) {
        this.btns[index].interactable = false;
        if ("main" == this.tabsName) {
          var node = cc.find("Background/Label", this.btns[index].node);
          node.color = node.color = cc.color(199, 134, 42);
        }
      },
      setTabName: function setTabName(names) {
        this.btns.forEach(function(item, i) {
          _AppUtil["default"].setBtnTitle(names[i], item);
        });
      },
      getTabIndex: function getTabIndex() {
        return this.currIndex;
      },
      start: function start() {
        _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.tab_index, {
          name: this.tabsName,
          index: this.currIndex
        });
        this.setTabHide(this.currIndex);
      }
    });
    cc._RF.pop();
  }, {
    "../common/NoticeCenter": "NoticeCenter",
    "../utility/AppUtil": "AppUtil"
  } ],
  tips: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "683179o2FxCToMrQVqSWByh", "tips");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bg: cc.Node,
        msg: cc.Label
      },
      onLoad: function onLoad() {
        this.time = 1;
        this.node.x = 0;
        this.node.y = 80;
      },
      hide: function hide() {
        this.node.destroy();
      },
      onDestroy: function onDestroy() {},
      init: function init(data) {
        var _this = this;
        var msg = data.msg;
        var type = data.type;
        this.msg.string = msg;
        this.msg._forceUpdateRenderData(true);
        var rect = this.msg.node.getContentSize();
        if (1 == type) {
          this.bg.height = rect.height + 20;
          this.bg.width = rect.width + 60;
          cc.tween(this.node).delay(2).parallel(cc.tween().to(this.time, {
            opacity: 0
          }), cc.tween().by(this.time, {
            position: cc.v2(0, 100)
          })).call(function() {
            _this.hide();
          }).start();
        } else {
          this.node.y = 260;
          this.bg.height = rect.height + 20;
          this.bg.width = rect.width + 120;
          cc.tween(this.node).delay(3).call(function() {
            _this.hide();
          }).start();
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  ui_Layer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93854y5yS9LZZf+H2BD1VaO", "ui_Layer");
    "use strict";
    var _ManagerCenter = _interopRequireDefault(require("../common/ManagerCenter"));
    var _NoticeCenter = require("../common/NoticeCenter");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.canClose = true;
        this.ui_mgr = _ManagerCenter["default"].getUIManager();
        this.node.on("touchstart", this.onClick, this);
        cc.systemEvent.on(_NoticeCenter.EventName.show_ui_success, this.openUISuceess, this);
      },
      onDestroy: function onDestroy() {
        cc.systemEvent.off(_NoticeCenter.EventName.show_ui_success, this.openUISuceess, this);
      },
      openUISuceess: function openUISuceess() {
        this.setCanClose(true);
      },
      onClick: function onClick() {
        this.canClose && this.ui_mgr.removeTopUI();
      },
      setInfoPos: function setInfoPos(uiNode) {
        var infoNode = this.node.getChildByName("info");
        if (infoNode) {
          infoNode.y = uiNode.y - uiNode.height / 2 - 200;
          infoNode.y < -700 && (infoNode.y = -700);
        }
        infoNode.active = false;
      },
      setCanClose: function setCanClose(can) {
        this.canClose = can;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    "../common/ManagerCenter": "ManagerCenter",
    "../common/NoticeCenter": "NoticeCenter"
  } ],
  userNameView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "381c2yZGXdA3LXciC80V3N2", "userNameView");
    "use strict";
    var _ManagerCenter = _interopRequireDefault(require("../common/ManagerCenter"));
    var _NoticeCenter = require("../common/NoticeCenter");
    var _UIconst = require("../define/UIconst");
    var _AppConst = require("../define/AppConst");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        userName: cc.EditBox,
        loginBtn: cc.Button,
        serverIP: cc.EditBox,
        serverPort: cc.EditBox
      },
      onLoad: function onLoad() {
        _AppConst.AppConst.ISTEST = false;
        this.loginBtn.node.on("click", this.onClickLogin, this);
      },
      onClickZSF: function onClickZSF() {
        _AppConst.AppConst.ISTEST = false;
      },
      onClickCSF: function onClickCSF() {
        _AppConst.AppConst.ISTEST = true;
      },
      onClickLogin: function onClickLogin() {
        var uid = this.userName.string;
        "" != uid && (_ManagerCenter["default"].getDataManager().getWXUserInfo().uid = uid);
        var ip = this.serverIP.string;
        var port = this.serverPort.string;
        if ("" != ip && "" != port) {
          _AppConst.AppConst.ISTEST = true;
          _AppConst.AppConst.TEST_WEBSOCK_IP = ip;
          _AppConst.AppConst.TEST_WEBSOCK_PORT = port;
        }
        _ManagerCenter["default"].getUIManager().hide(_UIconst.UIconst.userNameView);
      },
      onDestroy: function onDestroy() {
        _NoticeCenter.NoticeCenter.sendEvent(_NoticeCenter.EventName.get_wx_userInfo);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    "../common/ManagerCenter": "ManagerCenter",
    "../common/NoticeCenter": "NoticeCenter",
    "../define/AppConst": "AppConst",
    "../define/UIconst": "UIconst"
  } ],
  wx_sdk: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "005edGKiBdE1JUw4gTiSSt/", "wx_sdk");
    "use strict";
    window.wx_sdk = {
      config: {
        user_info_btn: {
          x: .4,
          y: .45,
          w: .2,
          h: .1
        }
      },
      no_update_callback: function no_update_callback() {
        console.log("no_update_callback:");
      },
      get_user_info_callback: function get_user_info_callback(user_info) {
        console.log("get_user_info_callback:", JSON.stringify(user_info));
      },
      first_time_get_user_info: function first_time_get_user_info(res) {
        console.log("first_time_get_user_info:", JSON.stringify(res));
      },
      load_account_success_callback: function load_account_success_callback(res) {
        console.log("load_account_success_callback:", JSON.stringify(res));
      },
      load_account_fail_callback: function load_account_fail_callback(res) {
        console.log("load_account_fail_callback:", JSON.stringify(res));
      },
      close_video_callback: function close_video_callback(res) {
        console.log("close_video_callback:", JSON.stringify(res));
      },
      interrupt_video_callback: function interrupt_video_callback(res) {
        console.log("interrupt_video_callback:", JSON.stringify(res));
      },
      error_video_callback: function error_video_callback(res) {
        console.log("error_video_callback:", JSON.stringify(res));
      },
      get_share_info_success: function get_share_info_success(res) {
        console.log("get_share_info_success:", JSON.stringify(res));
      },
      get_share_info_fail: function get_share_info_fail(res) {
        console.log("get_share_info_fail:", JSON.stringify(res));
      },
      on_show_callback: function on_show_callback(res) {
        console.log("on_show_callback:", JSON.stringify(res));
      }
    };
    cc._RF.pop();
  }, {} ],
  wx: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa02cFTN29FBa4aflAn5jsr", "wx");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.open_other_miniPro = exports.open_ke_fu = exports.check_session = exports.get_launch_options_sync = exports.on_hide = exports.on_show = exports.vibrateLong = exports.vibrateShort = exports.exit_game = exports.get_share_info = exports.share_app_message = exports.on_share_app_message = exports.show_share_menu = exports.create_Interstitial_ad_impl = exports.show_video_ad = exports.create_video_ad_impl = exports.update_game = exports.load_account = exports.save_account = exports.get_open_data = exports.remove_open_data = exports.set_open_data = exports.post_message = exports.login = exports.wx_authorize = exports.wx_login = exports.get_user_info = exports.create_user_info_btn = exports.show_banner_ad = exports.show_loading = exports.hide_loading = exports.show_modal = exports.show_toast = void 0;
    var show_toast = function show_toast(title) {
      var success = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
      var fail = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
      if (!CC_WECHATGAME) return;
      var obj = {
        title: title,
        icon: "none",
        mask: true
      };
      "function" == typeof success && (obj.success = success);
      "function" == typeof fail && (obj.fail = fail);
      window.wx.showToast(obj);
    };
    exports.show_toast = show_toast;
    var show_modal = function show_modal(title, content, confirmText, showCancel) {
      var success = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
      if (!CC_WECHATGAME) return;
      var obj = {
        title: title,
        content: content,
        confirmText: confirmText,
        showCancel: showCancel
      };
      "function" == typeof success && (obj.success = success);
      window.wx.showModal(obj);
    };
    exports.show_modal = show_modal;
    var hide_loading = function hide_loading() {
      wx.hideLoading({
        success: function success() {},
        fail: function fail() {}
      });
    };
    exports.hide_loading = hide_loading;
    var show_loading = function show_loading() {
      var title_str = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      var mask_flag = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      wx.showLoading({
        title: title_str,
        mask: mask_flag,
        success: function success() {},
        fail: function fail() {}
      });
    };
    exports.show_loading = show_loading;
    function create_banner_impl(adUnitId, style) {
      if (!CC_WECHATGAME) return;
      var bannerAd = window.wx.createBannerAd({
        adUnitId: adUnitId,
        style: style
      });
      bannerAd.onError(function(err) {
        console.log(err);
      });
      bannerAd.show()["catch"](function(err) {
        console.log(err);
        bannerAd.destroy();
      }).then(function() {
        console.log("banner \u5e7f\u544a\u663e\u793a\uff01");
      });
      bannerAd.onLoad(function() {
        console.log("banner \u52a0\u8f7d\u6210\u529f\uff01");
      });
    }
    var show_banner_ad = function show_banner_ad(adUnitId, left, top, width, height) {
      var style = {
        left: left,
        top: top,
        width: width,
        height: height
      };
      create_banner_impl(adUnitId, style);
    };
    exports.show_banner_ad = show_banner_ad;
    var create_user_info_btn = function create_user_info_btn() {
      var callback = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
      console.log("create_user_info_btn");
      if (!CC_WECHATGAME) return;
      var sysInfo = window.wx.getSystemInfoSync();
      var sdkVersion = sysInfo.SDKVersion;
      var width = sysInfo.screenWidth;
      var height = sysInfo.screenHeight;
      if (sdkVersion >= "2.0.1") {
        console.log("createUserInfoButton");
        var button = window.wx.createUserInfoButton({
          type: "text",
          text: "",
          style: {
            left: 0,
            top: 0,
            width: width,
            height: height,
            backgroundColor: "#00000000",
            color: "#ffffff",
            fontSize: 20,
            textAlign: "center",
            lineHeight: height
          }
        });
        button.onTap(function(res) {
          if (res.userInfo) {
            console.log("\u7528\u6237\u6388\u6743:", res);
            var userInfo = res.userInfo;
            button.destroy();
            wx_sdk.get_user_info_callback(userInfo);
            "function" == typeof callback && callback();
            console.log("createUserInfoButton onTap");
          } else console.log("\u62d2\u7edd\u6388\u6743");
        });
      } else get_user_info(callback);
    };
    exports.create_user_info_btn = create_user_info_btn;
    var get_user_info = function get_user_info() {
      var callback = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
      if (!CC_WECHATGAME) return;
      console.log("get_user_info");
      window.wx.getUserInfo({
        withCredentials: true,
        success: function success(res) {
          console.log("\u7528\u6237\u6388\u6743:", res);
          var userInfo = res.userInfo;
          wx_sdk.get_user_info_callback(userInfo);
          "function" == typeof callback && callback();
        },
        fail: function fail(res) {
          show_modal("\u53cb\u60c5\u63d0\u9192", "\u8bf7\u5141\u8bb8\u5fae\u4fe1\u83b7\u5f97\u6388\u6743!", "\u6388\u6743", false, function(res) {
            console.log("\u672a\u83b7\u5f97\u5fae\u4fe1\u6388\u6743\uff01");
          });
        }
      });
    };
    exports.get_user_info = get_user_info;
    var wx_login = function wx_login() {
      if (!CC_WECHATGAME) return;
      window.wx.login({
        success: function success(res) {
          wx_sdk.login_callback(res);
          save_account(res.code);
        }
      });
    };
    exports.wx_login = wx_login;
    var wx_authorize = function wx_authorize(field) {
      if (!CC_WECHATGAME) return;
      var field_str = "scope." + field;
      window.wx.authorize({
        scope: field_str,
        fail: function fail(res) {
          (res.errMsg.indexOf("auth deny") > -1 || res.errMsg.indexOf("auth denied") > -1) && console.log("\u7528\u6237\u62d2\u7edd\u4e86" + field + "\u7684\u6388\u6743\uff01");
        }
      });
    };
    exports.wx_authorize = wx_authorize;
    var login = function login() {
      if (!CC_WECHATGAME) return;
      window.wx.getSetting({
        success: function success(res) {
          var authSetting = res.authSetting;
          if (true === authSetting["scope.userInfo"]) {
            wx_sdk.first_time_get_user_info(res);
            get_user_info();
          } else if (false === authSetting["scope.userInfo"]) {
            console.log("\u7528\u6237\u62d2\u7edd\u4e86\u83b7\u53d6\u4fe1\u606f\u7684\u6388\u6743\uff01");
            show_toast("\u7528\u6237\u62d2\u7edd\u4e86\u83b7\u53d6\u4fe1\u606f\u7684\u6388\u6743\uff01", exit_game);
          } else {
            wx_sdk.first_time_get_user_info(res);
            create_user_info_btn();
          }
        },
        fail: function fail(res) {
          console.log("wx getSetting fail:" + res);
        }
      });
    };
    exports.login = login;
    var post_message = function post_message(msg) {
      if (!CC_WECHATGAME) return;
      var open_data = window.wx.getOpenDataContext();
      open_data.postMessage(msg);
      console.log("\u5411\u5b50\u57df\u53d1\u9001\u6d88\u606f\uff1a", msg);
    };
    exports.post_message = post_message;
    var set_open_data = function set_open_data(kvdata) {
      if (!CC_WECHATGAME) return;
      window.wx.setUserCloudStorage({
        KVDataList: kvdata,
        success: function success() {
          console.log("setUserCloudStorage success!");
        },
        fail: function fail(res) {
          console.log("setUserCloudStorage fail! msg:" + res.errMsg);
        }
      });
    };
    exports.set_open_data = set_open_data;
    var remove_open_data = function remove_open_data(kvdata) {
      if (!CC_WECHATGAME) return;
      window.wx.removeUserCloudStorage({
        KVDataList: kvdata,
        success: function success(res) {
          console.log("removeUserCloudStorage success!");
          wx_sdk.get_sub_info_success(res);
        },
        fail: function fail(res) {
          console.log("removeUserCloudStorage fail! msg:" + res.errMsg);
        }
      });
    };
    exports.remove_open_data = remove_open_data;
    var get_open_data = function get_open_data(keys) {
      window.wx.getUserCloudStorage({
        keyList: keys,
        success: function success() {
          console.log("removeUserCloudStorage success!");
        },
        fail: function fail(res) {
          console.log("removeUserCloudStorage fail! msg:" + res.errMsg);
        }
      });
    };
    exports.get_open_data = get_open_data;
    var save_account = function save_account(userdata) {
      if (!CC_WECHATGAME) return;
      window.wx.setStorage({
        key: "account",
        data: userdata,
        success: function success() {
          console.log("save account success!");
        },
        fail: function fail(err) {
          console.log("save account fail! res:" + JSON.stringify(err));
        }
      });
    };
    exports.save_account = save_account;
    var load_account = function load_account() {
      if (!CC_WECHATGAME) return;
      window.wx.getStorage({
        key: "account",
        success: function success(res) {
          wx_sdk.load_account_success_callback(res);
        },
        fail: function fail(res) {
          wx_sdk.load_account_fail_callback(res);
        }
      });
    };
    exports.load_account = load_account;
    var update_game = function update_game() {
      if (!CC_WECHATGAME) return;
      console.log("update_game");
      if ("function" === typeof window.wx.getUpdateManager) {
        var updateManager = window.wx.getUpdateManager();
        updateManager.onCheckForUpdate(function(res) {
          if (!res.hasUpdate) {
            wx_sdk.no_update_callback();
            login();
          }
        });
        updateManager.onUpdateReady(function() {
          updateManager.applyUpdate();
        });
        updateManager.onUpdateFailed(function() {
          console.log("onUpdateFail! ");
        });
      }
    };
    exports.update_game = update_game;
    var create_video_ad_impl = function create_video_ad_impl(adUnitId) {
      if (!CC_WECHATGAME) return;
      var videoAd = window.wx.createRewardedVideoAd({
        adUnitId: adUnitId
      });
      videoAd.offClose();
      videoAd.onLoad(function() {
        console.log("\u6fc0\u52b1\u89c6\u9891 \u52a0\u8f7d\u6210\u529f\uff01");
      });
      videoAd.onError(function(err) {
        console.log("\u6fc0\u52b1\u89c6\u9891 \u62c9\u53d6\u5931\u8d25");
        console.log(err);
      });
      videoAd.onClose(function(res) {
        if (res && res.isEnded || void 0 === res) {
          console.log("\u6fc0\u52b1\u89c6\u9891 \u6b63\u5e38\u9000\u51fa");
          wx_sdk.close_video_callback();
        } else wx_sdk.interrupt_video_callback();
      });
      return videoAd;
    };
    exports.create_video_ad_impl = create_video_ad_impl;
    var show_video_ad = function show_video_ad(adUnitId) {
      create_video_ad_impl(adUnitId);
    };
    exports.show_video_ad = show_video_ad;
    var create_Interstitial_ad_impl = function create_Interstitial_ad_impl(adUnitId) {
      if (!CC_WECHATGAME) return;
      var InterAd = window.wx.createInterstitialAd({
        adUnitId: adUnitId
      });
      InterAd.onLoad(function() {
        console.log("\u63d2\u5c4f\u5e7f\u544a \u52a0\u8f7d\u6210\u529f\uff01");
      });
      InterAd.onError(function(err) {
        console.log("\u63d2\u5c4f\u5e7f\u544a \u62c9\u53d6\u5931\u8d25");
        console.log(err);
      });
      InterAd.onClose(function(res) {
        console.log("\u63d2\u5c4f\u5e7f\u544a \u5173\u95ed");
      });
      return InterAd;
    };
    exports.create_Interstitial_ad_impl = create_Interstitial_ad_impl;
    var show_share_menu = function show_share_menu() {
      var withShareTicket = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      var success = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
      var fail = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
      if (!CC_WECHATGAME) return;
      var obj = {
        withShareTicket: withShareTicket
      };
      "function" == typeof success && (obj.success = success);
      "function" == typeof fail && (obj.fail = fail);
      window.wx.showShareMenu(obj);
    };
    exports.show_share_menu = show_share_menu;
    var on_share_app_message = function on_share_app_message() {
      var title = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
      var imageUrl = arguments.length > 1 ? arguments[1] : void 0;
      var query = arguments.length > 2 ? arguments[2] : void 0;
      var imageUrlId = arguments.length > 3 ? arguments[3] : void 0;
      var success = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
      var fail = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0;
      if (!CC_WECHATGAME) return;
      console.log("onShareAppMessage");
      var succ_func = function succ_func(res) {
        console.log("res:", res);
        "function" == typeof success && success(res);
      };
      var fail_func = function fail_func(res) {
        console.log("resErr\u5206\u4eab\u5931\u8d25:", res);
        "function" == typeof fail && fail(res);
      };
      var obj = {
        title: title,
        imageUrl: imageUrl,
        query: query,
        imageUrlId: imageUrlId
      };
      "string" == typeof title && (obj.title = title);
      window.wx.onShareAppMessage(function() {
        return obj;
      });
    };
    exports.on_share_app_message = on_share_app_message;
    var share_app_message = function share_app_message(title, imageUrl, query, imageUrlId) {
      if (!CC_WECHATGAME) return;
      console.log("shareAppMessage");
      var obj = {
        title: title,
        imageUrl: imageUrl,
        query: query,
        imageUrlId: imageUrlId
      };
      window.wx.shareAppMessage(obj);
    };
    exports.share_app_message = share_app_message;
    var get_share_info = function get_share_info() {
      var shareTicket = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if (!CC_WECHATGAME) return;
      var obj = {
        shareTicket: shareTicket,
        success: function success(res) {
          wx_sdk.get_share_info_success(res);
        },
        fail: function fail(res) {
          wx_sdk.get_share_info_fail(res);
        }
      };
      window.wx.getShareInfo(obj);
    };
    exports.get_share_info = get_share_info;
    var exit_game = function exit_game() {
      if (!CC_WECHATGAME) return;
      window.wx.exitMiniProgram({
        success: function success(res) {
          console.log("exit_mini_game success!");
        },
        fail: function fail(res) {
          console.log("exit_mini_game fail! res:", res);
        }
      });
    };
    exports.exit_game = exit_game;
    var vibrateShort = function vibrateShort() {
      if (!CC_WECHATGAME) return;
      window.wx.vibrateShort({
        success: function success() {
          console.log("vibrateShort");
        }
      });
    };
    exports.vibrateShort = vibrateShort;
    var vibrateLong = function vibrateLong() {
      if (!CC_WECHATGAME) return;
      window.wx.vibrateLong({
        success: function success() {
          console.log("vibrateLong");
        }
      });
    };
    exports.vibrateLong = vibrateLong;
    var on_show = function on_show() {
      if (!CC_WECHATGAME) return;
      window.wx.onShow(function(res) {
        wx_sdk.on_show_callback(res);
      });
    };
    exports.on_show = on_show;
    var on_hide = function on_hide() {
      if (!CC_WECHATGAME) return;
      window.wx.onHide(function(res) {
        wx_sdk.on_hide_callback(res);
      });
    };
    exports.on_hide = on_hide;
    var get_launch_options_sync = function get_launch_options_sync() {
      if (!CC_WECHATGAME) return;
      var res = window.wx.getLaunchOptionsSync();
      return res;
    };
    exports.get_launch_options_sync = get_launch_options_sync;
    var check_session = function check_session() {
      if (!CC_WECHATGAME) return;
      wx.checkSession({
        success: function success() {},
        fail: function fail() {
          login();
        }
      });
    };
    exports.check_session = check_session;
    var open_ke_fu = function open_ke_fu(sessionFrom, showMessageCard, sendMessageTitle, sendMessagePath, sendMessageImg) {
      if (!CC_WECHATGAME) return;
      wx.openCustomerServiceConversation({
        sessionFrom: sessionFrom,
        showMessageCard: showMessageCard,
        sendMessageTitle: sendMessageTitle,
        sendMessagePath: sendMessagePath,
        sendMessageImg: sendMessageImg,
        success: function success() {
          console.log("\u6253\u5f00\u5ba2\u670d\u6210\u529f");
        },
        fail: function fail(res) {
          console.log("\u6253\u5f00\u5ba2\u670d\u5931\u8d25");
          console.log(res);
        }
      });
    };
    exports.open_ke_fu = open_ke_fu;
    var open_other_miniPro = function open_other_miniPro(appId) {
      var path = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      var extraData = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
      if (!CC_WECHATGAME) return;
      wx.navigateToMiniProgram({
        appId: appId,
        path: path,
        extraData: extraData,
        success: function success() {
          console.log("open minipro success", appId);
        },
        fail: function fail() {
          console.log("open minipro fail", appId);
        }
      });
    };
    exports.open_other_miniPro = open_other_miniPro;
    cc._RF.pop();
  }, {} ]
}, {}, [ "ManagerCenter", "NoticeCenter", "base64", "comFunc", "loadJOSN", "lodash", "md5", "screenshoot", "HotUpdate", "List", "ListItem", "broadcast", "gm", "login_ui", "model_tips", "page", "scrollview", "tabview", "tips", "ui_Layer", "userNameView", "AudioVolume", "CQRCode", "ColorIndex", "DragToTarget", "Dragable", "LinkURL", "LoadPrefab", "MatchLines", "PersistRootNode", "SoftKey", "SpriteEx", "SpriteIndex", "TouchGraphics", "TouchRotation", "UpdateRotation", "VersionLabel", "ZIndex", "PhysicsColliderNotification", "PhysicsManager", "PhysicsVelocity", "ScoreNotificationHandle", "ScoreVerifyNotificationHandle", "AppConst", "StringConf", "UIconst", "enumConf", "httplib", "netlib", "pomelolib", "BroadcastManager", "DataManager", "NetworkManager", "ResourceManager", "SoundManager", "UIManager", "HttpClient", "WebsocketClient", "WxManager", "wx", "wx_sdk", "navigateComp", "AppUtil", "ConfUtil", "loadGameScene", "loadScene", "loading", "logoScene", "mainScene" ]);