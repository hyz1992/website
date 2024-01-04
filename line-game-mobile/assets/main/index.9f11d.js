System.register("chunks:///_virtual/audio_player.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './helper.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioClip, Node, AudioSource, sys, Component, _helper;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      Node = module.Node;
      AudioSource = module.AudioSource;
      sys = module.sys;
      Component = module.Component;
    }, function (module) {
      _helper = module._helper;
    }],
    execute: function () {
      exports('_audioPlayer', _audioPlayer);

      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

      cclegacy._RF.push({}, "cb3cbZcFDVJd5tailTlv/Or", "audio_player", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executeInEditMode = _decorator.executeInEditMode;
      var audio_player = (_dec = ccclass('audio_player'), _dec2 = executeInEditMode(), _dec3 = property(AudioClip), _dec4 = property(AudioClip), _dec5 = property(AudioClip), _dec6 = property([AudioClip]), _dec7 = property([AudioClip]), _dec8 = property([AudioClip]), _dec9 = property(AudioClip), _dec10 = property(AudioClip), _dec11 = property(AudioClip), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(audio_player, _Component);

        function audio_player() {
          var _this;

          _this = _Component.call(this) || this;

          _initializerDefineProperty(_this, "button", _descriptor, _assertThisInitialized(_this)); //按钮


          _initializerDefineProperty(_this, "level_init", _descriptor2, _assertThisInitialized(_this)); //关卡初始化


          _initializerDefineProperty(_this, "cameraShoot", _descriptor3, _assertThisInitialized(_this)); //照相机照相声音


          _initializerDefineProperty(_this, "bgs", _descriptor4, _assertThisInitialized(_this)); //背景音乐


          _initializerDefineProperty(_this, "lamp_blinks", _descriptor5, _assertThisInitialized(_this)); //关灯或者灭灯


          _initializerDefineProperty(_this, "roatates", _descriptor6, _assertThisInitialized(_this)); //旋转


          _initializerDefineProperty(_this, "nonRoatable", _descriptor7, _assertThisInitialized(_this)); //不可旋转


          _initializerDefineProperty(_this, "wifi_init", _descriptor8, _assertThisInitialized(_this)); //wifi被点亮


          _initializerDefineProperty(_this, "change_level", _descriptor9, _assertThisInitialized(_this)); //关卡改变时的音效

          /**背景音乐 */


          _this.as_bg = null;
          /**音效 */

          _this.as_effect = null;
          /**关闭背景音乐开关 */

          _this._isBgMute = false;
          /**关闭音效开关 */

          _this._isEffectMute = false;
          instance = _assertThisInitialized(_this);
          return _this;
        }

        var _proto = audio_player.prototype;

        _proto.onLoad = function onLoad() {
          var _node = this.node.getChildByName("as_bg");

          if (_node == null) {
            _node = new Node("as_bg");
            _node.parent = this.node;

            _node.addComponent(AudioSource);
          }

          this.as_bg = _node.getComponent(AudioSource);
          this.as_bg.playOnAwake = false;
          this.as_bg.loop = true;
          _node = this.node.getChildByName("as_effect");

          if (_node == null) {
            _node = new Node("as_effect");
            _node.parent = this.node;

            _node.addComponent(AudioSource);
          }

          this.as_effect = _node.getComponent(AudioSource);
          this.as_effect.playOnAwake = false;
          {
            this._isBgMute = sys.localStorage.getItem("_isBgMute") == "1";
            this._isEffectMute = sys.localStorage.getItem("_isEffectMute") == "1";
          }
        };

        _proto.setBgMute = function setBgMute(bool) {
          this._isBgMute = bool;
          {
            sys.localStorage.setItem("_isBgMute", (bool ? 1 : 0) + "");
          }

          if (this.as_bg) {
            if (bool && this.as_bg.playing) {
              this.as_bg.pause();
            } else if (!bool && !this.as_bg.playing) {
              this.as_bg.play();
            }
          }
        };

        _proto.setEffectMute = function setEffectMute(bool) {
          this._isEffectMute = bool;
          {
            sys.localStorage.setItem("_isEffectMute", (bool ? 1 : 0) + "");
          }

          if (this.as_effect) {
            if (bool) {
              this.as_effect.stop();
            }
          }
        };

        _proto.playBg = function playBg(idx, volume) {
          if (idx === void 0) {
            idx = 0;
          }

          if (volume === void 0) {
            volume = 0.5;
          }

          if (this._isBgMute) {
            return;
          }

          var clip = this.bgs[idx] || this.bgs[0];

          if (this.as_bg.clip == clip) {
            return;
          }

          this.as_bg.stop();
          this.as_bg.clip = clip;
          this.as_bg.loop = true;
          this.as_bg.volume = volume;
          this.as_bg.play();
        };

        _proto.playEffect = function playEffect(type, volume, loop) {
          if (volume === void 0) {
            volume = 0.5;
          }

          if (loop === void 0) {
            loop = false;
          }

          if (this._isEffectMute) {
            return;
          }

          var clip = null;

          if (type == _AudioCfg.button) {
            clip = this.button;
          } else if (type == _AudioCfg.level_init) {
            clip = this.level_init;
          } else if (type == _AudioCfg.cameraShoot) {
            clip = this.cameraShoot;
          } else if (type == _AudioCfg.lamp_blinks) {
            clip = _helper.randomOfArr(this.lamp_blinks);
          } else if (type == _AudioCfg.roatates) {
            clip = _helper.randomOfArr(this.roatates);
          } else if (type == _AudioCfg.nonRoatable) {
            clip = this.nonRoatable;
          } else if (type == _AudioCfg.wifi_init) {
            clip = this.wifi_init;
          } else if (type == _AudioCfg.change_level) {
            clip = this.change_level;
          }

          if (clip == null) {
            return;
          }

          this.as_effect.clip = clip;
          this.as_effect.loop = loop;
          this.as_effect.volume = volume;
          this.as_effect.play();
        };

        return audio_player;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "level_init", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cameraShoot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bgs", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lamp_blinks", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "roatates", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nonRoatable", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "wifi_init", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "change_level", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class);
      /**音效枚举 */

      var _AudioCfg = exports('_AudioCfg', /*#__PURE__*/function (_AudioCfg) {
        _AudioCfg[_AudioCfg["none"] = 0] = "none";
        _AudioCfg[_AudioCfg["button"] = 1] = "button";
        _AudioCfg[_AudioCfg["level_init"] = 2] = "level_init";
        _AudioCfg[_AudioCfg["cameraShoot"] = 3] = "cameraShoot";
        _AudioCfg[_AudioCfg["lamp_blinks"] = 4] = "lamp_blinks";
        _AudioCfg[_AudioCfg["roatates"] = 5] = "roatates";
        _AudioCfg[_AudioCfg["nonRoatable"] = 6] = "nonRoatable";
        _AudioCfg[_AudioCfg["wifi_init"] = 7] = "wifi_init";
        _AudioCfg[_AudioCfg["change_level"] = 8] = "change_level";
        return _AudioCfg;
      }({}));

      var instance = null;

      function _audioPlayer() {
        return instance;
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bg.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Material, ParticleSystem2D, Color, UITransform, view, color, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Material = module.Material;
      ParticleSystem2D = module.ParticleSystem2D;
      Color = module.Color;
      UITransform = module.UITransform;
      view = module.view;
      color = module.color;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "956d48SkY5DpYRdbgWocbEE", "bg", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executeInEditMode = _decorator.executeInEditMode;
      var Bg = exports('Bg', (_dec = ccclass('bg'), _dec2 = property(Material), _dec3 = property(ParticleSystem2D), _dec4 = property({
        type: Color
      }), _dec5 = property({
        type: Color
      }), _dec(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Bg, _Component);

        function Bg() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "material", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ps2d", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_color_1", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_color_2", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Bg.prototype;

        _proto.onLoad = function onLoad() {
          var size = this.getComponent(UITransform).contentSize;
          size = view.getVisibleSize();
          this.ps2d.posVar.x = size.width * 0.5;
          this.ps2d.posVar.y = size.height * 0.5;
        };

        _proto.update = function update(deltaTime) {};

        _proto.setColor = function setColor(color_1, color_2) {
          this.material.setProperty("color_1", color_1);
          this.material.setProperty("color_2", color_2);
          var mid = Color.lerp(color(), color_1, color_2, 0.5);
          this.ps2d.startColor.set(mid.r, mid.g, mid.b);
          this.ps2d.endColor.set(mid.r, mid.g, mid.b);
        };

        _createClass(Bg, [{
          key: "color_1",
          get: function get() {
            return this._color_1;
          },
          set: function set(val) {
            this._color_1 = val;
            this.setColor(this._color_1, this._color_2);
          }
        }, {
          key: "color_2",
          get: function get() {
            return this._color_2;
          },
          set: function set(val) {
            this._color_2 = val;
            this.setColor(this._color_1, this._color_2);
          }
        }]);

        return Bg;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "material", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ps2d", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_color_1", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return color(14, 3, 123);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "color_1", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "color_1"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_color_2", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return color(0, 174, 149);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "color_2", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "color_2"), _class2.prototype)), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/board.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './helper.ts', './tile.ts', './data.ts', './audio_player.ts', './flashAni.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Enum, CCInteger, CCBoolean, log, UITransform, v3, view, Vec3, Component, TileShape, TileType, _helper, Tile, data, _audioPlayer, _AudioCfg, _showFlash;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      CCInteger = module.CCInteger;
      CCBoolean = module.CCBoolean;
      log = module.log;
      UITransform = module.UITransform;
      v3 = module.v3;
      view = module.view;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      TileShape = module.TileShape;
      TileType = module.TileType;
      _helper = module._helper;
    }, function (module) {
      Tile = module.Tile;
    }, function (module) {
      data = module.data;
    }, function (module) {
      _audioPlayer = module._audioPlayer;
      _AudioCfg = module._AudioCfg;
    }, function (module) {
      _showFlash = module._showFlash;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2;

      cclegacy._RF.push({}, "fa977xIOnhBophChR1in19I", "board", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executeInEditMode = _decorator.executeInEditMode;
      var Board = exports('Board', (_dec = ccclass("board"), _dec2 = executeInEditMode(), _dec3 = property({
        type: Enum(TileShape),
        tooltip: "棋盘tile形状"
      }), _dec4 = property({
        type: CCInteger,
        step: 1
      }), _dec5 = property({
        type: CCInteger,
        step: 1
      }), _dec6 = property({
        type: CCBoolean
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Board, _Component);

        function Board() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.tileArr = [];
          _this._tileShape = TileShape.four;
          /**宽度，表示有多少列 */

          _this._boardWidth = 8;
          /**高度，表示有多少行 */

          _this._boardHeight = 10;
          /**第一竖行默认比第二行低半个half高度的，如果这个为true,则表示是高半个高度 */

          _this._bFirstHalfUp = false;
          /**已经点亮了的列表，key为tile在board的位置，每个列表的起点为电源或wifi */

          _this.littedLines = {};
          _this._bShowDebug = false;
          return _this;
        }

        var _proto = Board.prototype;

        _proto.onLoad = function onLoad() {};
        /**一个tile发生改变 */


        _proto.onChangleTileAngle = function onChangleTileAngle(curTile, evtName) {
          if (evtName == "event-start") {
            var _bAtLeastWifiOn = false; //是否存在至少一个WiFi被点亮了

            for (var _key2 in this.littedLines) {
              var idx = parseInt(_key2);
              var startTile = this.tileArr[idx];

              if (startTile.tileType != TileType.power) {
                continue;
              }

              var newLine = this._getLineWithStartTile(startTile);

              for (var _iterator = _createForOfIteratorHelperLoose(newLine), _step; !(_step = _iterator()).done;) {
                var tile2 = _step.value;

                if (tile2.tileType == TileType.wifi) {
                  _bAtLeastWifiOn = true;
                  break;
                }
              }

              if (_bAtLeastWifiOn) {
                break;
              }
            }
            /**处理wifi */


            for (var _key3 in this.littedLines) {
              var _idx = parseInt(_key3);

              var _startTile = this.tileArr[_idx];

              if (_startTile.tileType == TileType.wifi) {
                if (_bAtLeastWifiOn) {
                  if (!_startTile.isOnLight) {
                    _startTile["__tmp_isJustOn"] = true;
                  }
                } else {
                  if (_startTile.isOnLight) {
                    var hasPower = false;

                    for (var _iterator2 = _createForOfIteratorHelperLoose(this.littedLines[_idx]), _step2; !(_step2 = _iterator2()).done;) {
                      var _tile = _step2.value;

                      if (_tile.tileType == TileType.power) {
                        hasPower = true;
                        break;
                      }
                    }

                    if (hasPower) {
                      _startTile["__tmp__isJustOff"] = true;
                    } else {
                      for (var _iterator3 = _createForOfIteratorHelperLoose(this.littedLines[_idx]), _step3; !(_step3 = _iterator3()).done;) {
                        var tile = _step3.value;
                        tile["__tmp__isJustOff"] = true;
                      }
                    }

                    this.littedLines[_idx] = [];
                  }
                }
              }
            }
            /**标记所有点亮的tile */


            for (var _key4 in this.littedLines) {
              var _idx2 = parseInt(_key4);

              var _startTile2 = this.tileArr[_idx2];

              if (_startTile2.isWifi() && !_startTile2.isOnLight && !_startTile2["__tmp_isJustOn"] || _startTile2["__tmp__isJustOff"]) {
                continue;
              }

              var _newLine = this._getLineWithStartTile(_startTile2);

              for (var _iterator4 = _createForOfIteratorHelperLoose(_newLine), _step4; !(_step4 = _iterator4()).done;) {
                var _tile2 = _step4.value;
                _tile2["__temp_isOn"] = true;
              }
            }

            for (var _key5 in this.littedLines) {
              var _idx3 = parseInt(_key5);

              var _startTile3 = this.tileArr[_idx3];

              if (_startTile3.isWifi() && !_startTile3.isOnLight && !_startTile3["__tmp_isJustOn"] || _startTile3["__tmp__isJustOff"]) {
                continue;
              }

              var line = this.littedLines[_idx3];

              var _newLine2 = this._getLineWithStartTile(_startTile3, true);

              for (var _iterator5 = _createForOfIteratorHelperLoose(_newLine2), _step5; !(_step5 = _iterator5()).done;) {
                var _tile3 = _step5.value;

                if (line.indexOf(_tile3) < 0 && _tile3["__temp_isOn"]) {
                  //tile2是这一条线路新增的
                  if (_tile3.tileType == TileType.lamp || _tile3.tileType == TileType.normal) {
                    _tile3["__tmp_isJustOn"] = true;
                  }
                }
              }

              for (var _iterator6 = _createForOfIteratorHelperLoose(line), _step6; !(_step6 = _iterator6()).done;) {
                var tile1 = _step6.value;

                if (_newLine2.indexOf(tile1) < 0 && !tile1["__temp_isOn"]) {
                  //tile1是从这一条减少的,而且也不在其他线路上
                  if (tile1.tileType == TileType.lamp || tile1.tileType == TileType.normal) {
                    tile1["__tmp__isJustOff"] = true;
                  }
                }
              }

              this.littedLines[_idx3] = _newLine2;
            }
          } else if (evtName == "event-end") {
            for (var _key6 in this.littedLines) {
              var _idx4 = parseInt(_key6);

              var _startTile4 = this.tileArr[_idx4];

              if (_startTile4.isWifi() && !_startTile4.isOnLight && !_startTile4["__tmp_isJustOn"] || _startTile4["__tmp__isJustOff"]) {
                continue;
              }

              var _newLine3 = this.littedLines[_key6];
              var _oldNearestDeep = 0;

              for (var i = 0; i < _newLine3.length; i++) {
                var _tile4 = _newLine3[i];

                if (!_tile4["__tmp_isJustOn"]) {
                  _oldNearestDeep = _tile4["__tmp_lineDeep"];
                }
              }

              var _loop = function _loop() {
                var tile = _newLine3[_i];

                if (tile["__tmp_isJustOn"]) {
                  var deep = tile["__tmp_lineDeep"];
                  tile.scheduleOnce(function () {
                    tile.setIsOnWithAnim(true);
                  }, 0.02 * (deep - _oldNearestDeep - 1));

                  if (tile.tileType == TileType.lamp) {
                    var _audioPlayer2;

                    (_audioPlayer2 = _audioPlayer()) == null ? void 0 : _audioPlayer2.playEffect(_AudioCfg.lamp_blinks);
                  } else if (tile.tileType == TileType.wifi) {
                    var _audioPlayer3;

                    (_audioPlayer3 = _audioPlayer()) == null ? void 0 : _audioPlayer3.playEffect(_AudioCfg.wifi_init);
                  }
                }
              };

              for (var _i = 0; _i < _newLine3.length; _i++) {
                _loop();
              }
            }

            for (var _iterator7 = _createForOfIteratorHelperLoose(this.tileArr), _step7; !(_step7 = _iterator7()).done;) {
              var _tile5 = _step7.value;

              if (_tile5.value == 0) {
                continue;
              }

              if (_tile5["__tmp__isJustOff"]) {
                _tile5.setIsOnWithAnim(false);
              }
            }

            for (var _iterator8 = _createForOfIteratorHelperLoose(this.tileArr), _step8; !(_step8 = _iterator8()).done;) {
              var _tile6 = _step8.value;
              delete _tile6["__temp_isOn"];
              delete _tile6["__tmp__isJustOff"];
              delete _tile6["__tmp_isJustOn"];
              delete _tile6["__tmp_lineDeep"];
            }

            var isFinished = this.checkIsAllJoined();

            if (isFinished) {
              log("完成了");
              this.node.emit("onFinishLevel");
            }
          }
        };

        _proto._initShape = function _initShape() {
          this.clear();
          var tileHeight;

          if (this.tileShape == TileShape.four) {
            tileHeight = 256;
          } else if (this.tileShape == TileShape.six) {
            tileHeight = 220;
          }

          for (var i = 0; i < this._boardWidth; i++) {
            for (var j = 0; j < this._boardHeight; j++) {
              var idx = i * this._boardHeight + j;
              var tile = this.tileArr[idx];

              if (tile == null) {
                var node = data.getTileNode();
                this.tileArr[idx] = node.getComponent(Tile);
                tile = this.tileArr[idx];
                node.parent = this.node;
              }

              tile.clear();
              tile.tileShape = this.tileShape;
              tile.radius = tileHeight / 2;
              tile.node.off("onClickRoateEvent", this.onChangleTileAngle, this);
              tile.node.on("onClickRoateEvent", this.onChangleTileAngle, this);
              tile.__tileIdx = idx;

              var _trans = tile.node.getComponent(UITransform);

              if (this._tileShape == TileShape.six) {
                var x = (3 * i + 2) / (2 * 1.73205) * tileHeight;
                var y = (j + 0.5) * tileHeight + i % 2 * 0.5 * tileHeight;

                if (this._bFirstHalfUp) {
                  y = (j + 0.5) * tileHeight + (1 - i % 2) * 0.5 * tileHeight;
                }

                tile.node.position = v3(x, y, tile.node.position.z);
              } else {
                var _x = (i + 0.5) * tileHeight;

                var _y = (j + 0.5) * tileHeight;

                tile.node.position = v3(_x, _y, tile.node.position.z);
              }
            }
          }

          while (this.tileArr.length > this._boardWidth * this._boardHeight) {
            data.recyleTile(this.tileArr.pop());
          }

          var trans = this.node.getComponent(UITransform);

          if (this._tileShape == TileShape.six) {
            trans.width = (3 * this._boardWidth + 1) / (2 * 1.73205) * tileHeight;
            trans.height = (this._boardHeight + 0.5) * tileHeight;
          } else {
            trans.width = this._boardWidth * tileHeight;
            trans.height = this._boardHeight * tileHeight;
          }

          for (var _iterator9 = _createForOfIteratorHelperLoose(this.tileArr), _step9; !(_step9 = _iterator9()).done;) {
            var _tile7 = _step9.value;
            _tile7.node.position = v3(_tile7.node.position.x - trans.width * trans.anchorX, _tile7.node.position.y - trans.height * trans.anchorY, _tile7.node.position.z);
          }

          var visibleSize = view.getVisibleSize();
          this.node.position = v3(trans.width * this.scale * (trans.anchorX - 0.5), this.node.position.y, this.node.position.z);
          var scaleX = visibleSize.width * 0.85 / trans.width;
          var scaleY = visibleSize.height * 0.75 / trans.height;
          var minScale = this._tileShape == TileShape.four ? 0.6 : 0.7;
          this.scale = Math.min(scaleX, scaleY, minScale);

          if (this.bShowDebug) {
            this.showDebug(true);
          }
        };

        _proto.showDebug = function showDebug(bool, color) {
          // log("showDebug",bool)
          for (var _iterator10 = _createForOfIteratorHelperLoose(this.tileArr), _step10; !(_step10 = _iterator10()).done;) {
            var tile = _step10.value;
            tile.showBorder = bool;
          }

          this._bShowDebug = bool;
        };

        _proto.initLevel = function initLevel() {}
        /**已经点亮了的列表 */
        ;

        _proto.getLittedLines = function getLittedLines() {
          return this.littedLines;
        };

        _proto.getCoord = function getCoord(tile) {
          var idx = this.tileArr.indexOf(tile); // let idx = i*this._boardHeight+j

          var i = Math.floor(idx / this._boardHeight);
          var j = idx - i * this._boardHeight;
          return {
            i: i,
            j: j
          };
        }
        /**对于tileB,找到其有线头的那一边，且线头相连的直接邻居 */
        ;

        _proto._getSideNearTiles = function _getSideNearTiles(tileB) {
          var _this2 = this;

          var _this$getCoord = this.getCoord(tileB),
              ib = _this$getCoord.i,
              jb = _this$getCoord.j;

          var kb = tileB.getStrValWithAngle();
          var arr = []; //dirB:此时A在B的方向

          var _func = function _func(ia, ja, dirB) {
            if (ia < 0 || ia >= _this2._boardWidth || ja < 0 || jb >= _this2._boardHeight) {
              return;
            }

            if (kb[dirB] != "1") {
              return;
            }
            /**B在A的方向 */


            var dirA = _helper.getReverseDir(dirB, _this2.tileShape);

            var tileIdx = ia * _this2._boardHeight + ja;
            var tileA = _this2.tileArr[tileIdx];

            if (tileA == null) {
              return;
            }

            var ka = tileA.getStrValWithAngle();

            if (ka[dirA] != "1") {
              return;
            }

            arr.push(tileA);
          };

          if (this.tileShape == TileShape.four) {
            _func(ib, jb + 1, 0); //a在b上方


            _func(ib + 1, jb, 1); //a在b右边


            _func(ib, jb - 1, 2); //a在b下方


            _func(ib - 1, jb, 3); //a在b左边

          } else {
            if (ib % 2 == 1 && !this._bFirstHalfUp || ib % 2 == 0 && this._bFirstHalfUp) {
              //b在奇数行
              _func(ib, jb + 1, 0); //a在b上方


              _func(ib + 1, jb + 1, 1); //a在b右上


              _func(ib + 1, jb, 2); //a在b右下


              _func(ib, jb - 1, 3); //a在b下方


              _func(ib - 1, jb, 4); //a在b左下


              _func(ib - 1, jb + 1, 5); //a在b左上

            } else {
              //b在偶数行
              _func(ib, jb + 1, 0); //a在b上方


              _func(ib + 1, jb, 1); //a在b右上


              _func(ib + 1, jb - 1, 2); //a在b右下


              _func(ib, jb - 1, 3); //a在b下方


              _func(ib - 1, jb - 1, 4); //a在b左下


              _func(ib - 1, jb, 5); //a在b左上

            }
          }

          return arr;
        }
        /**获取以tile开头的，所有能与tile相连的节点列表 */
        ;

        _proto._getLineWithStartTile = function _getLineWithStartTile(tile, markDeep) {
          var _this3 = this;

          if (markDeep === void 0) {
            markDeep = false;
          }

          var outArr = [];
          outArr.push(tile);

          var _func2;

          _func2 = function _func(tileB, deep) {
            if (markDeep) {
              tileB["__tmp_lineDeep"] = deep;
            }

            deep = deep + 1;

            var arr = _this3._getSideNearTiles(tileB);

            if (arr.length == 0) {
              return;
            }

            var tmpArr = []; //存放没有被放进过ret的数据

            for (var _iterator11 = _createForOfIteratorHelperLoose(arr), _step11; !(_step11 = _iterator11()).done;) {
              var _tileA = _step11.value;

              if (outArr.indexOf(_tileA) < 0) {
                tmpArr.push(_tileA);
                outArr.push(_tileA); //广度遍历，由自身一圈一圈往外发散
              }
            }

            if (tmpArr.length == 0) {
              return;
            }

            for (var _i2 = 0, _tmpArr = tmpArr; _i2 < _tmpArr.length; _i2++) {
              var tileA = _tmpArr[_i2];

              _func2(tileA, deep);
            }
          };

          _func2(tile, 0);

          this._debugShowIdxsOfArr(outArr);

          return outArr;
        };

        _proto._debugShowIdxsOfArr = function _debugShowIdxsOfArr(arr) {
          if (arr === void 0) {
            arr = null;
          }

          if (arr == null) {
            arr = this.littedLines[0];

            if (arr == null) {
              return;
            }
          }

          {
            var aa = [];

            for (var i = 0; i < arr.length; i++) {
              aa.push(this._getIdx(arr[i]));
            } // log("line:",JSON.stringify(aa))


            return JSON.stringify(aa);
          }
        };

        _proto._getIdx = function _getIdx(tileB) {
          for (var i = 0; i < this.tileArr.length; i++) {
            if (this.tileArr[i] == tileB) {
              return i;
            }
          }
        }
        /**检查两个tile是否相连 */
        ;

        _proto.checkIsJoined = function checkIsJoined(tileB, tileA, cacheArr) {
          if (cacheArr === void 0) {
            cacheArr = [];
          }

          if (tileA == null || tileB == null) {
            return false;
          }

          if (tileA.value == 0 || tileB.value == 0) {
            return false;
          }

          if (cacheArr.indexOf(tileB) >= 0) {
            //已经地递归找过了
            return false;
          }

          var kb = tileB.getStrValWithAngle();

          var arr = this._getSideNearTiles(tileB);

          var idx = arr.indexOf(tileA);

          if (idx == -1) {
            //A不是B的邻居
            cacheArr.push(tileB);

            for (var i = 0; i < arr.length; i++) {
              //遍历B的所有邻居
              if (arr[i].value == 0) {
                continue;
              }

              var j = i >= 2 ? i - 2 : i + 2;

              if (this.tileShape == TileShape.six) {
                j = i >= 3 ? i - 3 : i + 3;
              }

              var kk = arr[i].getStrValWithAngle();

              if (kb[i] != "1" || kk[j] != "1") {
                //虽然是邻居，但是没有连线
                continue;
              }

              var ret = this.checkIsJoined(arr[i], tileA, cacheArr);

              if (ret) {
                return true;
              }
            }

            return false;
          } else {
            //是邻居，检查是否连线了
            var ka = tileA.getStrValWithAngle();
            var _i3 = idx;

            var _j = _i3 >= 2 ? _i3 - 2 : _i3 + 2;

            if (this.tileShape == TileShape.six) {
              _j = _i3 >= 3 ? _i3 - 3 : _i3 + 3;
            }

            return kb[_i3] == "1" && ka[_j] == "1";
          }
        }
        /**检查是否所有的都连在一起 */
        ;

        _proto.checkIsAllJoined = function checkIsAllJoined() {
          for (var i = 0; i < this.tileArr.length; i++) {
            var tileB = this.tileArr[i];

            if (tileB.value == 0) {
              //空的，没有图案
              continue;
            }

            var isInLine = false;

            for (var _key7 in this.littedLines) {
              var idx = parseInt(_key7);
              var startTile = this.tileArr[idx];
              var line = this.littedLines[idx];

              if (line.indexOf(tileB) >= 0) {
                isInLine = true;
              }
            }

            if (!isInLine) {
              return false;
            }
          }

          return true;
        }
        /**将当前的关卡配置，序列化成json文本 */
        ;

        _proto.getTileMapConfig = function getTileMapConfig() {
          var cfg = {};
          cfg.width = this._boardWidth;
          cfg.height = this._boardHeight;
          cfg.shape = this.tileShape;
          cfg.tiles = [];
          cfg.bFirstHalfUp = this._bFirstHalfUp ? 1 : 0;

          for (var i = 0; i < this.tileArr.length; i++) {
            var tile = this.tileArr[i];
            cfg.tiles[i] = {
              t: tile.tileType,
              v: tile.value,
              a: tile.angle,
              g: tile.gapIdx,
              fc: tile.forceCircle ? 1 : 0
            };
          }

          return cfg;
        }
        /**根据配置初始化游戏面板 */
        ;

        _proto.initWithTileMapConfig = function initWithTileMapConfig(cfgStr) {
          var cfg;

          if (typeof cfgStr == "string") {
            cfg = JSON.parse(cfgStr);
          } else {
            cfg = cfgStr;
          }

          if (cfg == null) {
            return;
          } // _term(cfg)


          this._boardWidth = cfg.width;
          this._boardHeight = cfg.height;
          this._bFirstHalfUp = cfg.bFirstHalfUp == 1;
          this._tileShape = cfg.shape;

          this._initShape();

          for (var i = 0; i < this.tileArr.length; i++) {
            var info = cfg.tiles[i];
            var tile = this.tileArr[i];

            if (info.v == 0) {
              info.t = 0;
            }

            tile.init({
              board: this,
              tileType: info.t,
              value: info.v,
              angle: info.a,
              gapIdx: info.g || 0,
              forceCircle: info.fc == 1
            });
          }

          var _bAtLeastWifiOn = false; //是否存在至少一个WiFi被点亮了

          this.littedLines = {};

          for (var _i4 = 0; _i4 < this.tileArr.length; _i4++) {
            var _tile8 = this.tileArr[_i4];

            if (_tile8.tileType == TileType.power) {
              this.littedLines[_i4] = this._getLineWithStartTile(_tile8);
            } else if (_tile8.tileType == TileType.wifi) {
              if (_tile8.isOnLight) {
                this.littedLines[_i4] = this._getLineWithStartTile(_tile8);
              } else {
                this.littedLines[_i4] = [];
              }
            } else {
              continue;
            }

            for (var _iterator12 = _createForOfIteratorHelperLoose(this.littedLines[_i4]), _step12; !(_step12 = _iterator12()).done;) {
              var _tile9 = _step12.value;

              if (_tile9.tileType == TileType.wifi) {
                _bAtLeastWifiOn = true;
              }

              _tile9.isOnLight = true;
            }
          }

          if (_bAtLeastWifiOn) {
            for (var _key8 in this.littedLines) {
              var idx = parseInt(_key8);
              var startTile = this.tileArr[idx];

              if (startTile.tileType != TileType.wifi) {
                continue;
              }

              this.littedLines[idx] = this._getLineWithStartTile(startTile);

              for (var _iterator13 = _createForOfIteratorHelperLoose(this.littedLines[idx]), _step13; !(_step13 = _iterator13()).done;) {
                var _tile10 = _step13.value;
                _tile10.isOnLight = true;
              }
            }
          }
        }
        /**
         * 过关时的电源和灯泡闪烁动画
         */
        ;

        _proto.showFlashAni = function showFlashAni() {
          var size = view.getVisibleSize();
          var pt = this.getComponent(UITransform).convertToNodeSpaceAR(v3(0, 0, 0));
          var radius = Vec3.len(v3(size.width, size.height)) + 100;

          for (var _key9 in this.littedLines) {
            var line = this.littedLines[_key9];

            var _loop2 = function _loop2() {
              var tile = line[i];

              if (tile.isPower()) {
                _showFlash(tile.node.position, radius, 0.45, tile.node.parent);
              } else if (tile.isLamp()) {
                tile.scheduleOnce(function () {
                  _showFlash(tile.node.position, 200, 0.2, tile.node.parent);
                }, i * 0.02);
              }
            };

            for (var i = 0; i < line.length; i++) {
              _loop2();
            }
          }
        };

        _proto.setOffColor = function setOffColor(color) {
          for (var i = 0; i < this.tileArr.length; i++) {
            var tile = this.tileArr[i];
            tile.offColor = color;
          }
        }
        /**打乱每个tile的顺序 */
        ;

        _proto.doDisrupt = function doDisrupt() {
          for (var i = 0; i < this.tileArr.length; i++) {
            var tile = this.tileArr[i];
            tile.doDisrupt();
          }
        };

        _proto.clear = function clear() {
          for (var i = 0; i < this.tileArr.length; i++) {
            var tile = this.tileArr[i];
            tile.node.destroy();
          }

          this.node.destroyAllChildren();
          this.tileArr = [];
        };

        _createClass(Board, [{
          key: "scale",
          get: function get() {
            return this.node.scale.x;
          },
          set: function set(val) {
            this.node.scale = v3(val, val, val);
          }
        }, {
          key: "tileShape",
          get: function get() {
            return this._tileShape;
          },
          set: function set(val) {
            this._tileShape = val; // if(this._tileShape==TileShape.six){
            //     this._boardWidth = 7;
            //     this._boardHeight = 9;
            // }

            this._initShape();
          }
        }, {
          key: "borderWidth",
          get: function get() {
            return this._boardWidth;
          },
          set: function set(val) {
            this._boardWidth = val;

            this._initShape();
          }
        }, {
          key: "boardHeight",
          get: function get() {
            return this._boardHeight;
          },
          set: function set(val) {
            this._boardHeight = val;

            this._initShape();
          }
        }, {
          key: "bShowDebug",
          get: function get() {
            return this._bShowDebug;
          },
          set: function set(val) {
            this._bShowDebug = val;
            this.showDebug(val);
          }
        }]);

        return Board;
      }(Component), (_applyDecoratedDescriptor(_class2.prototype, "tileShape", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "tileShape"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "borderWidth", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "borderWidth"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "boardHeight", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "boardHeight"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bShowDebug", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "bShowDebug"), _class2.prototype)), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/data.ts", ['cc', './tile.ts'], function (exports) {
  var cclegacy, NodePool, color, resources, JsonAsset, Node, Tile;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      NodePool = module.NodePool;
      color = module.color;
      resources = module.resources;
      JsonAsset = module.JsonAsset;
      Node = module.Node;
    }, function (module) {
      Tile = module.Tile;
    }],
    execute: function () {
      exports('data', void 0);

      cclegacy._RF.push({}, "63088AeDF5IE4+ODILHfp37", "data", undefined);

      var data;

      (function (_data) {
        /**当前关卡 */
        var _level = 0;
        /**当前关卡 */

        function getCurrentLevel() {
          return _level;
        }

        _data.getCurrentLevel = getCurrentLevel;

        function jumpLevel(level) {
          if (level) {
            _level = level;
          }

          if (_level < 0) {
            _level = 0;
          } else if (level >= _boardCfgs.length - 1) {
            _level = _boardCfgs.length - 1;
          }

          return _level;
        }

        _data.jumpLevel = jumpLevel;

        function nextLevel() {
          _level++;

          if (_level > _boardCfgs.length - 1) {
            _level = _boardCfgs.length - 1;
          }

          return _level;
        }

        _data.nextLevel = nextLevel;

        function previousLevel() {
          _level--;

          if (_level < 0) {
            _level = 0;
          }

          return _level;
        }

        _data.previousLevel = previousLevel;

        function getTheLastLevel() {
          return _boardCfgs.length - 1;
        }

        _data.getTheLastLevel = getTheLastLevel;

        function needDebug() {
          return _level <= 2;
        }

        _data.needDebug = needDebug;

        function getCurLevelData() {
          return _boardCfgs[_level] || generateLevelData();
        }

        _data.getCurLevelData = getCurLevelData;
        var _boardCfgs = [];

        function loadLevelCfgs() {
          resources.load("level_cfg", JsonAsset, function (err, txt) {
            if (err) {
              console.error(err);
              return;
            }

            _boardCfgs = txt.json;
          });
        }

        _data.loadLevelCfgs = loadLevelCfgs;

        var _pool = new NodePool(Tile);

        function recyleTile(tile) {
          _pool.put(tile.node);
        }

        _data.recyleTile = recyleTile;

        function getTileNode() {
          if (_pool.size() == 0) {
            var node = new Node();
            node.addComponent(Tile);
            return node;
          }

          return _pool.get();
        }

        _data.getTileNode = getTileNode;
        var _bgColorGroups = [[color(1, 10, 103), color(150, 27, 129), color(188, 108, 202)], [color(118, 4, 50), color(227, 139, 102), color(240, 195, 171)], [color(14, 3, 123), color(0, 174, 149), color(41, 197, 191)], [color(0, 53, 46), color(60, 164, 83), color(125, 193, 135)], [color(1, 86, 106), color(212, 179, 51), color(165, 225, 114)], [color(70, 23, 47), color(234, 111, 107), color(80, 8, 42)]];

        function getBgColorGroup(level) {
          if (level === void 0) {
            level = null;
          }

          var idx = level;

          if (idx == null || idx < 0) {
            idx = Math.floor(Math.random() * _bgColorGroups.length);
          } else if (idx >= _bgColorGroups.length) {
            idx = idx % _bgColorGroups.length;
          }

          return _bgColorGroups[idx];
        }

        _data.getBgColorGroup = getBgColorGroup;

        function _term(cfg) {
          var lineNum = 0; //右边

          for (var i = cfg.tiles.length - 1; i >= 0; i -= cfg.height) {
            var isLineEmpty = true;

            for (var j = 0; j < cfg.height; j++) {
              var idx = i - j;
              var info = cfg.tiles[idx];

              if (info == null || info.v > 0) {
                isLineEmpty = false;
                break;
              }
            }

            if (!isLineEmpty) {
              break;
            }

            lineNum++;
          }

          cfg.tiles.splice(cfg.tiles.length - lineNum * cfg.height, lineNum * cfg.height);
          cfg.width -= lineNum;
          lineNum = 0; //左边

          for (var _i = 0;; _i += cfg.height) {
            var _isLineEmpty = true;

            for (var _j = 0; _j < cfg.height; _j++) {
              var _idx = _i + _j;

              var _info = cfg.tiles[_idx];

              if (_info == null || _info.v > 0) {
                _isLineEmpty = false;
                break;
              }
            }

            if (!_isLineEmpty) {
              break;
            }

            lineNum++;
          }

          cfg.tiles.splice(0, lineNum * cfg.height);
          cfg.width -= lineNum;

          if (lineNum % 2 == 1) {
            cfg.bFirstHalfUp = 1;
          }

          lineNum = 0; //下边

          for (var _i2 = 0; _i2 < cfg.height; _i2 += 1) {
            var _isLineEmpty2 = true;

            for (var _j2 = 0; _j2 < cfg.width; _j2++) {
              var _idx2 = _i2 + _j2 * cfg.height;

              var _info2 = cfg.tiles[_idx2];

              if (_info2 == null || _info2.v > 0) {
                _isLineEmpty2 = false;
                break;
              }
            }

            if (!_isLineEmpty2) {
              break;
            }

            lineNum++;
          }

          for (var _i3 = cfg.width - 1; _i3 >= 0; _i3--) {
            var _idx3 = _i3 * cfg.height;

            cfg.tiles.splice(_idx3, lineNum);
          }

          cfg.height -= lineNum;
          lineNum = 0; //上边

          for (var _i4 = cfg.height - 1; _i4 >= 0; _i4 -= 1) {
            var _isLineEmpty3 = true;

            for (var _j3 = 0; _j3 < cfg.width; _j3++) {
              var _idx4 = _i4 + _j3 * cfg.height;

              var _info3 = cfg.tiles[_idx4];

              if (_info3 == null || _info3.v > 0) {
                _isLineEmpty3 = false;
                break;
              }
            }

            if (!_isLineEmpty3) {
              break;
            }

            lineNum++;
          }

          for (var _i5 = cfg.width - 1; _i5 >= 0; _i5--) {
            var _idx5 = (_i5 + 1) * cfg.height - lineNum;

            cfg.tiles.splice(_idx5, lineNum);
          }

          cfg.height -= lineNum;
        }

        _data._term = _term;
      })(data || (data = exports('data', {})));

      function generateLevelData() {
        return null;
      }

      data.loadLevelCfgs();

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Canvas, UITransform, instantiate, Label, Color, RichText, Toggle, Button, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      Color = module.Color;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);

        function DebugViewRuntimeControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));

          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }

        var _proto = DebugViewRuntimeControl.prototype;

        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);

          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }

          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
              y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
              height = 20; // new nodes

          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles'; // title

          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;

            var _labelComponent = newLabel.getComponent(Label);

            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }

          y -= height; // single

          var currentRow = 0;

          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }

            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }

          x += width; // buttons

          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent; // misc

          y -= 40;

          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);

            _newNode.setPosition(x, y - height * _i2, 0.0);

            _newNode.setScale(0.5, 0.5, 0.5);

            _newNode.parent = miscNode;

            var _textComponent = _newNode.getComponentInChildren(RichText);

            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;

            var toggleComponent = _newNode.getComponent(Toggle);

            toggleComponent.isChecked = _i2 ? true : false;

            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);

            this.miscModeToggleList[_i2] = _newNode;
          } // composite


          y -= 150;

          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;

            _newNode2.setPosition(x, y - height * _i3, 0.0);

            _newNode2.setScale(0.5, 0.5, 0.5);

            _newNode2.parent = this.compositeModeToggle.parent;

            var _textComponent2 = _newNode2.getComponentInChildren(RichText);

            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;

            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);

            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };

        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');

          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };

        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };

        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };

        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };

        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };

        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);

          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);

            _toggleComponent.isChecked = true;
          }

          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };

        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };

        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;

          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }

          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }

          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };

        _proto.onLoad = function onLoad() {};

        _proto.update = function update(deltaTime) {};

        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/flashAni.ts", ['cc', './tex_const.ts'], function (exports) {
  var cclegacy, Node, UITransform, size, Mask, tween, easing, Sprite, UIOpacity, getSplashFrame;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      UITransform = module.UITransform;
      size = module.size;
      Mask = module.Mask;
      tween = module.tween;
      easing = module.easing;
      Sprite = module.Sprite;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      getSplashFrame = module.getSplashFrame;
    }],
    execute: function () {
      exports('_showFlash', _showFlash);

      cclegacy._RF.push({}, "65946eusbhPDL+jES/eWMhl", "flashAni", undefined);
      /**显示波纹闪光 */


      function _showFlash(pt, maxRadius, time, parent) {
        var _node = new Node("_showFlash");

        var trans = _node.addComponent(UITransform);

        trans.setContentSize(size(100, 100));

        var mask = _node.addComponent(Mask);

        mask.type = Mask.Type.GRAPHICS_ELLIPSE;
        mask.segments = 64;
        _node.parent = parent;
        _node.position = pt;
        _node.active = true;
        tween(trans).to(time, {
          width: maxRadius * 2,
          height: maxRadius * 2
        }, {
          easing: easing.sineIn
        }).start();
        var spr = new Node("flash").addComponent(Sprite);
        spr.spriteFrame = getSplashFrame();
        spr.node.parent = _node;
        var opa = spr.addComponent(UIOpacity);
        opa.opacity = 120;
        tween(opa).to(time * 1.4, {
          opacity: 0
        }).call(function () {
          _node.destroy();
        }).start();
        trans = spr.addComponent(UITransform);
        tween(trans).to(time, {
          width: maxRadius * 2,
          height: maxRadius * 2
        }, {
          easing: easing.sineIn
        }).start();
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/game.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './bg.ts', './board.ts', './data.ts', './audio_player.ts', './plat_util.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, input, Input, js, UITransform, Size, Sprite, view, Tween, tween, easing, KeyCode, director, log, Component, Bg, Board, data, _audioPlayer, _AudioCfg, _plat;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      input = module.input;
      Input = module.Input;
      js = module.js;
      UITransform = module.UITransform;
      Size = module.Size;
      Sprite = module.Sprite;
      view = module.view;
      Tween = module.Tween;
      tween = module.tween;
      easing = module.easing;
      KeyCode = module.KeyCode;
      director = module.director;
      log = module.log;
      Component = module.Component;
    }, function (module) {
      Bg = module.Bg;
    }, function (module) {
      Board = module.Board;
    }, function (module) {
      data = module.data;
    }, function (module) {
      _audioPlayer = module._audioPlayer;
      _AudioCfg = module._AudioCfg;
    }, function (module) {
      _plat = module._plat;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "c23f4ejYmBPRJeYMiSy47/D", "game", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executeInEditMode = _decorator.executeInEditMode;
      var Game = exports('Game', (_dec = ccclass('game'), _dec2 = property(Board), _dec3 = property(Board), _dec4 = property(Bg), _dec5 = property(Label), _dec6 = property({
        tooltip: "调试关卡 ",
        step: 1,
        min: 0
      }), _dec(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Game, _Component);

        function Game() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "m_board", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mask_board", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_bg", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "text_level", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_debugLevel", _descriptor5, _assertThisInitialized(_this));

          _this._clickNum = 0;
          return _this;
        }

        var _proto = Game.prototype;

        _proto.onLoad = function onLoad() {
          input.on(Input.EventType.KEY_UP, this._onKeyUp, this);
          this.m_board.node.on("onFinishLevel", this._onFinishLevel, this);
          this.m_board.clear();
          this.m_board.node.destroyAllChildren();
          this.mask_board.node.parent.active = false;
          {
            var node_debug = this.node.getChildByName("node_debug");

            if (node_debug) {
              node_debug.active = false;
            }
          }
        };

        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.KEY_UP, this._onKeyUp, this);
        };

        _proto.start = function start() {
          var _audioPlayer2;

          _plat.closeNativeSplash();

          (_audioPlayer2 = _audioPlayer()) == null ? void 0 : _audioPlayer2.playBg();
          var cfg = window["_curDebugCfg"];

          if (cfg) {
            this.m_board.initWithTileMapConfig(cfg);
            this.m_board.showDebug(true);
            window["_curDebugCfg"] = null;
          } else {
            var _audioPlayer3;

            this.initBoardWithLevel(0);
            (_audioPlayer3 = _audioPlayer()) == null ? void 0 : _audioPlayer3.playEffect(_AudioCfg.level_init);
          }
        };

        _proto._onFinishLevel = function _onFinishLevel() {
          var _this2 = this;

          this.m_board.showFlashAni();
          this.scheduleOnce(function () {
            _this2.switchToLevel(data.nextLevel());
          }, 1.5);
        };

        _proto.initBoardWithLevel = function initBoardWithLevel(level, _board) {
          if (_board === void 0) {
            _board = null;
          }

          _board = _board || this.m_board;
          data.jumpLevel(level);
          var cfg = data.getCurLevelData(); // log("---cfg",cfg)

          _board.initWithTileMapConfig(cfg);

          var colors = data.getBgColorGroup(data.getCurrentLevel());

          _board.setOffColor(colors[2]);

          if (data.needDebug()) {
            _board.showDebug(true);
          } else {
            _board.showDebug(false);
          }

          if (_board == this.m_board) {
            this.m_bg.setColor(colors[0], colors[1]);
            this.text_level.color = colors[2];
            this.text_level.string = js.formatStr("level   %s", level);
          }
        };

        _proto.switchToLevel = function switchToLevel(level) {
          var _this3 = this;

          this.initBoardWithLevel(level, this.mask_board);
          this.mask_board.node.parent.active = true;
          var trans = this.mask_board.node.parent.getComponent(UITransform);
          trans.setContentSize(new Size(1, 1));
          var spr = trans.node.getChildByName("splash_spr").getComponent(Sprite);
          var colors = data.getBgColorGroup(data.getCurrentLevel());

          var _mat = spr.getSharedMaterial(0);

          _mat == null ? void 0 : _mat.setProperty("color_1", colors[0]);
          _mat == null ? void 0 : _mat.setProperty("color_2", colors[1]);
          var time = 0.5;
          var size = view.getVisibleSize();
          Tween.stopAllByTarget(trans);
          var radius = Math.sqrt(size.height * size.height + size.width * size.width);
          tween(trans).to(time, {
            width: radius,
            height: radius
          }, {
            easing: easing.sineIn
          }).call(function () {
            _this3.initBoardWithLevel(level, _this3.m_board);
          }).call(function () {
            _this3.mask_board.node.parent.active = false;
          }).start();

          _audioPlayer().playEffect(_AudioCfg.change_level, 1);
        };

        _proto._onKeyUp = function _onKeyUp(event) {
          if (event.keyCode == KeyCode.ESCAPE) {
            director.loadScene("editor");
          }

          if (event.keyCode == KeyCode.KEY_Q) {
            var tileA = this.m_board.tileArr[1];
            var ka = tileA.getStrValWithAngle();
            log("tileA.angle", tileA.angle, "ka", ka);
          } else if (event.keyCode == KeyCode.KEY_W) {
            this.m_board.showDebug(true);
          } else if (event.keyCode == KeyCode.KEY_E) {
            this.m_board.showDebug(false);
          } else if (event.keyCode == KeyCode.KEY_R) {
            this.m_board._getSideNearTiles(this.m_board.tileArr[14]);
          } else if (event.keyCode == KeyCode.KEY_A) {
            // this.m_board.doDisrupt()
            var str = "{\"width\":5,\"height\":8,\"shape\":6,\"tiles\":[{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-60,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-60,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-60,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-60,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":3,\"v\":32,\"a\":-300,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-240,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-240,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-600,\"g\":0,\"fc\":false},{\"t\":0,\"v\":40,\"a\":-120,\"g\":0,\"fc\":false},{\"t\":3,\"v\":32,\"a\":-60,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":1,\"v\":32,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":36,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":36,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":42,\"a\":-60,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":42,\"a\":0,\"g\":0,\"fc\":false},{\"t\":1,\"v\":32,\"a\":-180,\"g\":0,\"fc\":false},{\"t\":3,\"v\":32,\"a\":-60,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-60,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-60,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-60,\"g\":0,\"fc\":false},{\"t\":0,\"v\":40,\"a\":-120,\"g\":0,\"fc\":false},{\"t\":3,\"v\":32,\"a\":-300,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-240,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-240,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-240,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-240,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false}]}";
            this.m_board.initWithTileMapConfig(str);
            this.m_board.showDebug(true);
          } else if (event.keyCode == KeyCode.KEY_S) {
            this.initBoardWithLevel(40);
          } else if (event.keyCode == KeyCode.KEY_D) {
            this.initBoardWithLevel(17);
          } else if (event.keyCode == KeyCode.KEY_F) {
            this.m_board.doDisrupt();
          } else if (event.keyCode == KeyCode.KEY_Z) {
            this.switchToLevel(data.nextLevel());
          } else if (event.keyCode == KeyCode.KEY_X) {
            this.switchToLevel(data.previousLevel());
          } else if (event.keyCode == KeyCode.KEY_C) ;else if (event.keyCode == KeyCode.KEY_V) {
            this.onBtn_save();
          }
        };

        _proto.onBtn_save = function onBtn_save() {
          var cfg = this.m_board.getTileMapConfig();

          data._term(cfg);

          var str = JSON.stringify(cfg
          /**,null,"\t" */
          );

          _plat.copyTextToClipboard(str);
        };

        _proto.onBtn_clickDebug = function onBtn_clickDebug() {
          this._clickNum++;

          if (this._clickNum > 10) {
            var node_debug = this.node.getChildByName("node_debug");

            if (node_debug) {
              node_debug.active = !node_debug.active;
            }
          }
        };

        _proto.onBtn_paste = /*#__PURE__*/function () {
          var _onBtn_paste = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var str;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _plat.getClipboard();

                case 2:
                  str = _context.sent;
                  this.m_board.initWithTileMapConfig(str);
                  this.m_board.showDebug(true);

                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function onBtn_paste() {
            return _onBtn_paste.apply(this, arguments);
          }

          return onBtn_paste;
        }();

        _proto.onBtn_previous = function onBtn_previous() {
          this.switchToLevel(data.previousLevel());
        };

        _proto.onBtn_next = function onBtn_next() {
          this.switchToLevel(data.nextLevel());
        };

        _proto.onBtn_last_level = function onBtn_last_level() {
          this.switchToLevel(data.getTheLastLevel());
        };

        _proto.onBtn_jumpEditor = function onBtn_jumpEditor() {
          director.loadScene("editor");
        };

        _proto.onBtn_debugBorder = function onBtn_debugBorder() {
          this.m_board.showDebug(!this.m_board.bShowDebug);
        };

        _createClass(Game, [{
          key: "debugLevel",
          get: function get() {
            return this._debugLevel;
          },
          set: function set(val) {
            this._debugLevel = val;
            log("调试关卡：", val);
            var colors = data.getBgColorGroup(data.getCurrentLevel());
            this.m_bg.setColor(colors[0], colors[1]);
            this.m_board.setOffColor(colors[2]);
            this.text_level.color = colors[2];
            this.text_level.string = js.formatStr("level   %s", val);
          }
        }]);

        return Game;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_board", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mask_board", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "m_bg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "text_level", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_debugLevel", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "debugLevel", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "debugLevel"), _class2.prototype)), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/helper.ts", ['cc'], function (exports) {
  var cclegacy, v2, Vec2;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      v2 = module.v2;
      Vec2 = module.Vec2;
    }],
    execute: function () {
      exports('_helper', void 0);

      cclegacy._RF.push({}, "9bb51GQxBZAk70HerpMz42B", "helper", undefined);

      var TileShape = exports('TileShape', /*#__PURE__*/function (TileShape) {
        TileShape[TileShape["four"] = 4] = "four";
        TileShape[TileShape["six"] = 6] = "six";
        return TileShape;
      }({}));
      var TileType = exports('TileType', /*#__PURE__*/function (TileType) {
        TileType[TileType["normal"] = 0] = "normal";
        TileType[TileType["power"] = 1] = "power";
        TileType[TileType["wifi"] = 2] = "wifi";
        TileType[TileType["lamp"] = 3] = "lamp";
        return TileType;
      }({}));
      /**
       * 棋盘是先从下至上，然后从左至右依次排列
       */

      var _helper;

      (function (_helper2) {
        function getAngleDeltaByType(shape) {
          if (shape == TileShape.four) {
            return 90;
          } else if (shape == TileShape.six) {
            return 60;
          }
        }

        _helper2.getAngleDeltaByType = getAngleDeltaByType;

        function roatateStrVal(str, isRight, len) {
          if (len === void 0) {
            len = 1;
          }

          len = len % str.length;

          for (var i = 0; i < len; i++) {
            if (isRight) {
              str = str[str.length - 1] + str.substring(0, str.length - 1);
            } else {
              str = str.substring(1) + str[0];
            }
          }

          return str;
        }

        _helper2.roatateStrVal = roatateStrVal;

        function getMaxStrVal(str) {
          var len = str.length;
          var max = parseInt(str, 2);

          for (var i = 1; i < len; i++) {
            var val = parseInt(roatateStrVal(str, true, i), 2);
            max = Math.max(max, val);
          }

          str = new Number(max).toString(2);

          while (str.length < len) {
            str = "0" + str;
          }

          return str;
        }

        _helper2.getMaxStrVal = getMaxStrVal;

        function getReverseDir(dir, shape) {
          var ret = dir >= 2 ? dir - 2 : dir + 2;

          if (shape == TileShape.six) {
            ret = dir >= 3 ? dir - 3 : dir + 3;
          }

          return ret;
        }

        _helper2.getReverseDir = getReverseDir;

        function getStrValOfVlaue(val, borderNum) {
          var strVal = new Number(val).toString(2);

          while (strVal.length < borderNum) {
            strVal = "0" + strVal;
          }

          while (strVal.length > borderNum) {
            strVal = strVal.substring(0, strVal.length - 1);
          }

          return strVal;
        }

        _helper2.getStrValOfVlaue = getStrValOfVlaue;

        function randomOfArr(arr) {
          if (!arr || arr.length == 0) {
            return null;
          }

          var idx = Math.floor(Math.random() * arr.length);

          if (idx == arr.length) {
            idx = 0;
          }

          return arr[idx];
        }

        _helper2.randomOfArr = randomOfArr;

        function _pLineIntersect(p1, p2, p3, p4, retP) {
          // 第一条线段 y = A1*x + B1
          // 第2条线段 y = A2*x + B2
          var A1 = 0,
              B1 = 0,
              A2 = 0,
              B2 = 0;

          if (p1.x != p2.x) {
            A1 = (p1.y - p2.y) / (p1.x - p2.x); //线段1的斜率
          }

          if (p3.x != p4.x) {
            A2 = (p3.y - p4.y) / (p3.x - p4.x); //线段2的斜率
          }

          B1 = p1.y - A1 * p1.x;
          B2 = p3.y - A2 * p3.x;

          if (Math.abs(A1 - A2) < 0.01) {
            //斜率相等，平行
            return false;
          } //交点


          var x = (B2 - B1) / (A1 - A2);
          var y = A1 * x + B1;
          retP.x = x;
          retP.y = y;
          return true;
        }

        _helper2._pLineIntersect = _pLineIntersect;
        /**
         * 根据两个线段，画一段圆弧，圆弧以线段的交点为圆心，圆弧的起止点分别是两个线段的中点，默认是逆时针
         */

        function drawArcWith2Segments(p1, p2, p3, p4, bClockwise) {
          if (bClockwise === void 0) {
            bClockwise = false;
          }

          var intersectionPt = v2(); //两条边的交点,作为圆心

          var isIntersect = _pLineIntersect(p1, p2, p3, p4, intersectionPt);

          var centerPt1 = v2((p1.x + p2.x) * 0.5, (p1.y + p2.y) * 0.5); //线段的中点，也是圆弧的端点

          var centerPt2 = v2((p3.x + p4.x) * 0.5, (p3.y + p4.y) * 0.5); //线段的中点，也是圆弧的端点

          if (isIntersect) {
            var vec0 = v2(1, 0); //0度基准

            var vec1 = Vec2.subtract(v2(), centerPt1, intersectionPt);
            var vec2 = Vec2.subtract(v2(), centerPt2, intersectionPt);
            var radian1 = vec0.signAngle(vec1); //以交点为圆心，centerPt1所在的圆弧起点

            var radian2 = vec0.signAngle(vec2); //以交点为圆心，centerPt2所在的圆弧起点

            var startAngle = 0,
                endAngle = 0;
            var crossVal = Vec2.subtract(v2(), centerPt2, centerPt1).cross(Vec2.subtract(v2(), centerPt2, intersectionPt));

            if (!bClockwise) {
              if (crossVal > 0) {
                //圆心在向量右侧
                startAngle = radian2;
                endAngle = radian1;
              } else {
                startAngle = radian1;
                endAngle = radian2;
              }
            } else {
              if (crossVal < 0) {
                //圆心在向量左侧
                startAngle = radian2;
                endAngle = radian1;
              } else {
                startAngle = radian1;
                endAngle = radian2;
              }
            }

            var radius = Vec2.distance(intersectionPt, centerPt1);
            return {
              type: 0,
              center: intersectionPt,
              radius: radius,
              startAngle: startAngle,
              endAngle: endAngle,
              counterclockwise: !bClockwise
            };
          } else {
            return {
              type: 1,
              startPt: centerPt1,
              entPt: centerPt2
            };
          }
        }

        _helper2.drawArcWith2Segments = drawArcWith2Segments;
      })(_helper || (_helper = exports('_helper', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/long_screen_fit.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, UITransform, sys, Widget, view, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      UITransform = module.UITransform;
      sys = module.sys;
      Widget = module.Widget;
      view = module.view;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

      cclegacy._RF.push({}, "cac53JESd1IGZtgo5LJ/QZb", "long_screen_fit", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executeInEditMode = _decorator.executeInEditMode,
          disallowMultiple = _decorator.disallowMultiple,
          requireComponent = _decorator.requireComponent,
          menu = _decorator.menu;

      var _TypeV = exports('_TypeV', /*#__PURE__*/function (_TypeV) {
        _TypeV[_TypeV["none"] = 0] = "none";
        _TypeV[_TypeV["top"] = 1] = "top";
        _TypeV[_TypeV["bottom"] = 2] = "bottom";
        _TypeV[_TypeV["top_bottom"] = 3] = "top_bottom";
        _TypeV[_TypeV["height"] = 4] = "height";
        return _TypeV;
      }({}));

      var _TypeH = exports('_TypeH', /*#__PURE__*/function (_TypeH) {
        _TypeH[_TypeH["none"] = 0] = "none";
        _TypeH[_TypeH["left"] = 1] = "left";
        _TypeH[_TypeH["right"] = 2] = "right";
        _TypeH[_TypeH["left_right"] = 3] = "left_right";
        _TypeH[_TypeH["widgget"] = 4] = "widgget";
        return _TypeH;
      }({}));

      var long_screen_fit = exports('long_screen_fit', (_dec = menu("long_screen_fit"), _dec2 = property({
        tooltip: "垂直方向上的节点适配长屏偏移。通常配合Widget组件使用",
        type: Enum(_TypeV)
      }), _dec3 = property({
        visible: function visible() {
          return this.type_v == _TypeV.top || this.type_v == _TypeV.top_bottom;
        }
      }), _dec4 = property({
        tooltip: "是否top偏移只在有系统状态栏时有效",
        visible: function visible() {
          return this.type_v == _TypeV.top || this.type_v == _TypeV.top_bottom;
        }
      }), _dec5 = property({
        visible: function visible() {
          return this.type_v == _TypeV.bottom || this.type_v == _TypeV.top_bottom;
        }
      }), _dec6 = property({
        tooltip: "是否bottom偏移只在IOS虚拟home键时有效",
        visible: function visible() {
          return this.type_v == _TypeV.bottom || this.type_v == _TypeV.top_bottom;
        }
      }), _dec7 = property({
        visible: function visible() {
          return this.type_v == _TypeV.height;
        }
      }), _dec8 = property({
        tooltip: "是否高度增量只在有IOS虚拟键是有效",
        visible: function visible() {
          return this.type_v == _TypeV.height;
        }
      }), _dec9 = property({
        tooltip: "是否高度增量只在有状态栏有效",
        visible: function visible() {
          return this.type_v == _TypeV.height;
        }
      }), ccclass(_class = disallowMultiple(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(long_screen_fit, _Component);

        function long_screen_fit() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "type_v", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gapTop", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "topOnlyEffectStatusBar", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gapBottom", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bottomOnlyEffectVirtualHomeBtn", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "heightMore", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "heightOnlyEffectVirtualHomeBtn", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "heightOnlyEffectStatusBar", _descriptor8, _assertThisInitialized(_this));

          _this.isApplyed = false;
          return _this;
        }

        var _proto = long_screen_fit.prototype;

        _proto.onLoad = function onLoad() {
          this.apply();
        };

        _proto.apply = function apply() {
          if (this.isApplyed) {
            return;
          }

          if (!_isLongScreen()) {
            return;
          } // log("---------ccccc",this.node.name,this.node.y)


          var trans = this.node.getComponent(UITransform);

          if (this.type_v == _TypeV.height) {
            if (!this.heightOnlyEffectVirtualHomeBtn || _hasVirtualHomeBtn()) {
              trans.height += this.heightMore;
              this.isApplyed = true;
            }
          } else {
            var widget = this.node.getComponent(Widget);

            if (!this.bottomOnlyEffectVirtualHomeBtn || _hasVirtualHomeBtn()) {
              if (this.type_v == _TypeV.top_bottom || this.type_v == _TypeV.bottom) {
                this.isApplyed = true;

                if (widget && widget.isAlignBottom) {
                  widget.bottom += this.gapBottom; // log("------c")
                } else {
                  this.node.setPosition(this.node.position.x, this.node.position.y + this.gapBottom); // log("------d",this.node.y)
                }
              }
            }

            if (!this.topOnlyEffectStatusBar || _phoneHasBangs) {
              if (this.type_v == _TypeV.top_bottom || this.type_v == _TypeV.top) {
                this.isApplyed = true;

                if (widget && widget.isAlignTop) {
                  widget.top += this.gapTop; // log("------e")
                } else {
                  this.node.setPosition(this.node.position.x, this.node.position.y - this.gapTop); // log("------f",this.node.y)
                }
              }
            }
          }
        };

        return long_screen_fit;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type_v", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return _TypeV.none;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gapTop", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 45;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "topOnlyEffectStatusBar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gapBottom", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 35;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bottomOnlyEffectVirtualHomeBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "heightMore", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 45;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "heightOnlyEffectVirtualHomeBtn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "heightOnlyEffectStatusBar", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class) || _class));

      function _isLongScreen() {
        var getVisibleSize = view.getVisibleSize();
        var getDesignResolutionSize = view.getDesignResolutionSize();
        var gapHeight = Math.max(getVisibleSize.height - getDesignResolutionSize.height, 0);
        var aspectRatio = getVisibleSize.height / getVisibleSize.width;
        return aspectRatio >= 2.0 || gapHeight > 45;
      }
      /**
       * 是否存在头部刘海
       * * 此处本来应该调用原生，暂时偷懒认为只要长度足够就是有
      */


      function _phoneHasBangs() {
        return _isLongScreen();
      }
      /**
       * 是否有虚拟home键，用于上调底对齐的UI
       * * 此处本来应该调用原生，暂时偷懒认为只要长度足够就是有
       */


      function _hasVirtualHomeBtn() {
        return (sys.os == "iOS" || sys.os == "Windows") && _isLongScreen();
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './audio_player.ts', './data.ts', './tex_const.ts', './scene_debug.ts', './scene_editer.ts', './game.ts', './helper.ts', './long_screen_fit.ts', './node_tween_helper.ts', './plat_util.ts', './screen_shoot.ts', './bg.ts', './board.ts', './flashAni.ts', './shape.ts', './tile.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/node_tween_helper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, _inheritsLoose, _assertThisInitialized, cclegacy, NodeEventType, Tween, Node, isValid, UIOpacity, UITransform, Sprite;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      NodeEventType = module.NodeEventType;
      Tween = module.Tween;
      Node = module.Node;
      isValid = module.isValid;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bd2d4UUPzBEMawpaFwAAbXw", "node_tween_helper", undefined);

      var _map = new Map();

      function _checkGetTween(target, tag) {
        var map2 = _map.get(target);

        if (map2 != null) {
          var tw = map2.get(tag);

          if (tw != null) {
            return tw;
          }
        }

        return null;
      }

      function _checkRemove(target, tag) {
        var map2 = _map.get(target);

        if (map2 != null) {
          var tw = map2.get(tag);

          if (tw != null) {
            map2["delete"](tag);
          }

          if (map2.size == 0) {
            _map["delete"](target);
          }
        }
      }

      var _TWEEN = /*#__PURE__*/function (_Tween) {
        _inheritsLoose(_TWEEN, _Tween);

        function _TWEEN(tar, bClearWhenStop) {
          var _this;

          _this = _Tween.call(this, tar) || this;
          _this._node = null;
          _this._tweenHelper = null;
          _this.bClearWhenStop = false;
          _this.bIsRunning = false;
          _this._tweenHelper = _assertThisInitialized(_this)._target;
          _this._node = _this._tweenHelper.target;
          _this.bClearWhenStop = bClearWhenStop;
          return _this;
        }

        var _proto = _TWEEN.prototype;

        _proto.start = function start() {
          this.bIsRunning = true;

          if (this._node) {
            this._node.off(NodeEventType.NODE_DESTROYED, this._onNodeDestroy, this);

            this._node.on(NodeEventType.NODE_DESTROYED, this._onNodeDestroy, this);
          }

          var ret = _Tween.prototype.start.call(this);

          return ret;
        };

        _proto.stop = function stop(bClear) {
          if (bClear === void 0) {
            bClear = null;
          }

          var ret = _Tween.prototype.stop.call(this);

          this._node = this._target.target;
          var _tag = this._tag;

          if (bClear !== false && this.bClearWhenStop) {
            _checkRemove(this._node, _tag);
          }

          this.bIsRunning = false;
          return ret;
        };

        _proto.getIsRunning = function getIsRunning() {
          return this.bIsRunning;
        };

        _proto._onNodeDestroy = function _onNodeDestroy() {
          this._tweenHelper._onNodeDestroy(this._node);
        };

        return _TWEEN;
      }(Tween);

      var NodeTweenHelper = exports('NodeTweenHelper', /*#__PURE__*/function () {
        //停止的时候(node没有清理，node如果清理的话，就走到_onNodeDestroy了)，是否清理掉_map的缓存
        function NodeTweenHelper(node, tag, bClearWhenStop) {
          if (tag === void 0) {
            tag = 0;
          }

          if (bClearWhenStop === void 0) {
            bClearWhenStop = false;
          }

          this.target = null;
          this.tag = 0;
          this.bClearWhenStop = false;
          this._tw = null;

          if (node instanceof Node) {
            this.target = node;
          } else {
            this.target = node.node;
          }

          this.tag = tag;
          this.bClearWhenStop = bClearWhenStop;
        }

        NodeTweenHelper.getTweenByTag = function getTweenByTag(node, tag) {
          if (tag === void 0) {
            tag = 0;
          }

          var _node;

          if (node instanceof Node) {
            _node = node;
          } else {
            _node = node.node;
          }

          var tw = _checkGetTween(_node, tag);

          return tw;
        };

        NodeTweenHelper.create = function create(node, tag, bClearWhenStop) {
          if (tag === void 0) {
            tag = 0;
          }

          if (bClearWhenStop === void 0) {
            bClearWhenStop = false;
          }

          var _node;

          if (node instanceof Node) {
            _node = node;
          } else {
            _node = node.node;
          }

          var tw = _checkGetTween(_node, tag);

          if (tw) {
            tw.stop();
            tw._actions = [];
            tw._finalAction = null;
          }

          if (tw) {
            return tw._target;
          }

          return new NodeTweenHelper(_node, tag, bClearWhenStop);
        };

        var _proto2 = NodeTweenHelper.prototype;

        _proto2.stop = function stop() {
          if (this._tw == null) {
            return;
          }

          this._tw.stop();

          this._tw = null;

          _checkRemove(this.target, this.tag);

          return this;
        };

        _proto2._onNodeDestroy = function _onNodeDestroy(node) {
          this.stop();
        }; //show()、hide()用


        _proto2.getComponentsInChildren = function getComponentsInChildren(a) {
          return this.target.getComponentsInChildren(a);
        } //removeSelf()用
        ;

        _proto2.removeFromParent = function removeFromParent() {
          return this.target.removeFromParent();
        };

        _proto2.destroy = function destroy() {
          return this.target.destroy();
        };

        _proto2.getTween = function getTween() {
          var map2 = _map.get(this.target);

          if (map2 == null) {
            map2 = new Map();

            _map.set(this.target, map2);
          }

          var tw = map2.get(this.tag);

          if (tw == null) {
            tw = new _TWEEN(this, this.bClearWhenStop);
            map2.set(this.tag, tw);
          }

          this._tw = tw.tag(this.tag);
          return this._tw;
        };

        _proto2.fadeOut = function fadeOut(dur) {
          var tw = this.getTween();
          tw.by(dur, {
            opacity: 0
          });
        };

        _proto2.fadeIn = function fadeIn(dur) {
          var tw = this.getTween();
          tw.by(dur, {
            opacity: 255
          });
        };

        _createClass(NodeTweenHelper, [{
          key: "active",
          get: function get() {
            if (!isValid(this.target)) return false;
            return this.target.active;
          },
          set: function set(val) {
            if (!isValid(this.target)) return;
            this.target.active = val;
          }
        }, {
          key: "parent",
          get: function get() {
            if (!isValid(this.target)) return null;
            return this.target.parent;
          },
          set: function set(val) {
            if (!isValid(this.target)) return;
            this.target.parent = val;
          }
        }, {
          key: "position",
          get: function get() {
            if (!isValid(this.target)) return null;
            return this.target.position;
          },
          set: function set(val) {
            if (!isValid(this.target)) return;
            this.target.position = val;
          }
        }, {
          key: "x",
          get: function get() {
            if (!isValid(this.target)) return 0;
            return this.target.position.x;
          },
          set: function set(val) {
            if (!isValid(this.target)) return;
            this.target.setPosition(val, this.y, this.z);
          }
        }, {
          key: "y",
          get: function get() {
            if (!isValid(this.target)) return 0;
            return this.target.position.y;
          },
          set: function set(val) {
            if (!isValid(this.target)) return;
            this.target.setPosition(this.x, val, this.z);
          }
        }, {
          key: "z",
          get: function get() {
            if (!isValid(this.target)) return 0;
            return this.target.position.z;
          },
          set: function set(val) {
            if (!isValid(this.target)) return;
            this.target.setPosition(this.x, this.y, val);
          }
        }, {
          key: "opacity",
          get: function get() {
            if (!isValid(this.target)) return 0;

            var _opa = this.target.getComponent(UIOpacity);

            if (_opa == null) {
              _opa = this.target.addComponent(UIOpacity);
            }

            return _opa.opacity;
          },
          set: function set(val) {
            if (!isValid(this.target)) return;

            var _opa = this.target.getComponent(UIOpacity);

            if (_opa == null) {
              _opa = this.target.addComponent(UIOpacity);
            }

            _opa.opacity = val;
          }
        }, {
          key: "scale",
          get: function get() {
            if (!isValid(this.target)) return 0;
            return this.target.scale.x;
          },
          set: function set(val) {
            if (!isValid(this.target)) return;
            this.target.setScale(val, val, val);
          }
        }, {
          key: "scaleX",
          get: function get() {
            if (!isValid(this.target)) return 0;
            return this.target.scale.x;
          },
          set: function set(val) {
            if (!isValid(this.target)) return;
            this.target.setScale(val, this.target.scale.y, this.target.scale.z);
          }
        }, {
          key: "scaleY",
          get: function get() {
            if (!isValid(this.target)) return 0;
            return this.target.scale.y;
          },
          set: function set(val) {
            if (!isValid(this.target)) return;
            this.target.setScale(this.target.scale.x, val, this.target.scale.z);
          }
        }, {
          key: "anchorX",
          get: function get() {
            if (!isValid(this.target)) return 0;
            return this.target.getComponent(UITransform).anchorX;
          },
          set: function set(val) {
            if (!isValid(this.target)) return;
            this.target.getComponent(UITransform).anchorX = val;
          }
        }, {
          key: "anchorY",
          get: function get() {
            if (!isValid(this.target)) return 0;
            return this.target.getComponent(UITransform).anchorY;
          },
          set: function set(val) {
            if (!isValid(this.target)) return;
            this.target.getComponent(UITransform).anchorY = val;
          }
        }, {
          key: "width",
          get: function get() {
            if (!isValid(this.target)) return 0;
            return this.target.getComponent(UITransform).width;
          },
          set: function set(val) {
            if (!isValid(this.target)) return;
            this.target.getComponent(UITransform).width = val;
          }
        }, {
          key: "height",
          get: function get() {
            if (!isValid(this.target)) return 0;
            return this.target.getComponent(UITransform).height;
          },
          set: function set(val) {
            if (!isValid(this.target)) return;
            this.target.getComponent(UITransform).height = val;
          }
        }, {
          key: "spriteFrame",
          get: function get() {
            if (!isValid(this.target)) return null;
            return this.target.getComponent(Sprite).spriteFrame;
          },
          set: function set(val) {
            if (!isValid(this.target)) return;
            (this.target.getComponent(Sprite) || this.target.addComponent(Sprite)).spriteFrame = val;
          }
        }, {
          key: "angle",
          get: function get() {
            if (!isValid(this.target)) return 0;
            return this.target.angle;
          },
          set: function set(val) {
            if (!isValid(this.target)) return;
            this.target.angle = val;
          }
        }]);

        return NodeTweenHelper;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/plat_util.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, log, sys, native;

  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
      sys = module.sys;
      native = module.native;
    }],
    execute: function () {
      exports('_plat', void 0);

      cclegacy._RF.push({}, "a711f8PlM1ITI8sxk7mfyee", "plat_util", undefined);
      /**native平台调用 */


      var _plat;

      (function (_plat2) {
        /**
         * 调用native时注册的回调，
         * 返回true表示先不删除回调，可能会存在多次调用
         */
        var _idx = 0;

        var _handlerMap = new Map();

        function _bindCallback(callback) {
          _idx++;

          _handlerMap.set(_idx, callback);

          return _idx;
        }
        /**无返回值调用 */


        function _callNative_void(methodName, jsonStr) {}

        _plat2._callNative_void = _callNative_void;

        function _callNative_number(_x, _x2) {
          return _callNative_number2.apply(this, arguments);
        }

        function _callNative_number2() {
          _callNative_number2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(methodName, jsonStr) {
            var ret;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (jsonStr === void 0) {
                    jsonStr = null;
                  }

                  _context.next = 3;
                  return _callNativeWithAsyncReturn(methodName, jsonStr);

                case 3:
                  ret = _context.sent;
                  log("_callNative_number ret", ret);
                  return _context.abrupt("return", parseInt(ret));

                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return _callNative_number2.apply(this, arguments);
        }

        _plat2._callNative_number = _callNative_number;

        function _callNative_string(_x3, _x4) {
          return _callNative_string2.apply(this, arguments);
        }

        function _callNative_string2() {
          _callNative_string2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(methodName, jsonStr) {
            var ret;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (jsonStr === void 0) {
                    jsonStr = null;
                  }

                  _context2.next = 3;
                  return _callNativeWithAsyncReturn(methodName, jsonStr);

                case 3:
                  ret = _context2.sent;
                  return _context2.abrupt("return", ret);

                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          return _callNative_string2.apply(this, arguments);
        }

        _plat2._callNative_string = _callNative_string;

        function _callNative_bool(_x5, _x6) {
          return _callNative_bool2.apply(this, arguments);
        }

        function _callNative_bool2() {
          _callNative_bool2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(methodName, jsonStr) {
            var ret;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (jsonStr === void 0) {
                    jsonStr = null;
                  }

                  _context3.next = 3;
                  return _callNativeWithAsyncReturn(methodName, jsonStr);

                case 3:
                  ret = _context3.sent;
                  return _context3.abrupt("return", ret == "true");

                case 5:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          return _callNative_bool2.apply(this, arguments);
        }

        _plat2._callNative_bool = _callNative_bool;

        function _callNativeWithAsyncReturn(methodName, jsonStr) {
          if (jsonStr === void 0) {
            jsonStr = null;
          }

          if (typeof jsonStr == "object") {
            jsonStr = JSON.stringify(jsonStr);
          } else if (jsonStr == null) {
            jsonStr = "";
          }

          return new Promise(function (resolve, reject) {
            var callbackIdx = _bindCallback(function (str) {
              resolve(str);
              return false;
            });
          });
        }

        _plat2._callNativeWithAsyncReturn = _callNativeWithAsyncReturn;

        function _callNativeWithCallback(methodName, jsonStr, callback) {
          var callbackIdx = _bindCallback(function (str) {
            callback(str);
            return false;
          });
        }

        _plat2._callNativeWithCallback = _callNativeWithCallback;

        function _callNativeWithMultypleCallback(methodName, jsonStr, callback) {
          var callbackIdx = _bindCallback(function (str) {
            return callback(str);
          });

          return callbackIdx;
        }

        _plat2._callNativeWithMultypleCallback = _callNativeWithMultypleCallback;

        function cancelMultypleCallback(idx) {
          if (idx > 0) {
            _handlerMap["delete"](idx);
          }
        }

        _plat2.cancelMultypleCallback = cancelMultypleCallback;
        /**记录旧的剪贴板内容，用于判断是否有改变 */

        var _oldClipboardString = "";
        var _isClipboardStringChanged = false;

        function getClipboard() {
          return _getClipboard.apply(this, arguments);
        }

        function _getClipboard() {
          _getClipboard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var ret, old;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  ret = "";
                  return _context4.abrupt("return");

                case 3:
                  _context4.next = 5;
                  return _callNativeWithAsyncReturn();

                case 5:
                  ret = _context4.sent;
                  old = _oldClipboardString;

                  if (ret != old) {
                    _isClipboardStringChanged = true;
                    _oldClipboardString = ret;
                  } else {
                    _isClipboardStringChanged = false;
                  }

                  return _context4.abrupt("return", ret);

                case 9:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          return _getClipboard.apply(this, arguments);
        }

        _plat2.getClipboard = getClipboard;

        function isClipboardStringChanged() {
          return _isClipboardStringChanged;
        }

        _plat2.isClipboardStringChanged = isClipboardStringChanged;

        function copyTextToClipboard(str) {
          if (sys.isNative) {
            //原生自己实现
            native.copyTextToClipboard(str);
          } else if (sys.isBrowser) {
            var textarea = document.createElement("textarea");
            textarea.textContent = str;
            document.body.appendChild(textarea);
            textarea.readOnly = true;
            textarea.select();
            textarea.setSelectionRange(0, textarea.textContent.length);

            try {
              var flag = document.execCommand('copy');
              document.body.removeChild(textarea);

              if (flag) {
                log("已经复制到剪贴板");
                return true;
              } else {
                log("复制到剪贴板失败");
                return false;
              }
            } catch (err) {
              log("复制到剪贴板失败");
              return false;
            }
          }
        }

        _plat2.copyTextToClipboard = copyTextToClipboard;

        function shareMsgBySystem(param) {
          {
            return;
          }
        }

        _plat2.shareMsgBySystem = shareMsgBySystem;

        function vibrate(time) {}

        _plat2.vibrate = vibrate;

        function openAppStoreComment() {
          if (sys.os == sys.OS.IOS) ;else if (sys.os == sys.OS.ANDROID) {
            var packageName = this.getPackageInfo().packageName;

            var _url = "https://play.google.com/store/apps/details?id=" + packageName;

            sys.openURL(_url);
          } else ;
        }

        _plat2.openAppStoreComment = openAppStoreComment;

        function setKeepScreenOn(bool) {}

        _plat2.setKeepScreenOn = setKeepScreenOn;

        function closeNativeSplash() {}

        _plat2.closeNativeSplash = closeNativeSplash;
      })(_plat || (_plat = exports('_plat', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/scene_debug.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './shape.ts', './screen_shoot.ts', './helper.ts', './bg.ts', './data.ts', './plat_util.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Sprite, ScrollView, Node, input, Input, KeyCode, instantiate, Label, Component, Shape, screen_shoot, _helper, Bg, data, _plat;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      ScrollView = module.ScrollView;
      Node = module.Node;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      instantiate = module.instantiate;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      Shape = module.Shape;
    }, function (module) {
      screen_shoot = module.screen_shoot;
    }, function (module) {
      _helper = module._helper;
    }, function (module) {
      Bg = module.Bg;
    }, function (module) {
      data = module.data;
    }, function (module) {
      _plat = module._plat;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "4a9153kRkdOA7rvbBEN/x/V", "scene_debug", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executeInEditMode = _decorator.executeInEditMode;
      var scene_debug = exports('scene_debug', (_dec = ccclass('scene_debug'), _dec2 = property(Shape), _dec3 = property(Sprite), _dec4 = property(ScrollView), _dec5 = property(Node), _dec6 = property(Bg), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(scene_debug, _Component);

        function scene_debug() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "tempShape", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tempSpr", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "scroll", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tempItem", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_bg", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = scene_debug.prototype;

        _proto.onLoad = function onLoad() {
          this.tempShape.radius = 100;
          this.tempShape.lineWidth = 5;
          input.on(Input.EventType.KEY_UP, this._onKeyUp, this);
        };

        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.KEY_UP, this._onKeyUp, this);
        };

        _proto._onKeyUp = function _onKeyUp(event) {
          if (event.keyCode == KeyCode.KEY_Q) {
            this.downloadPng();
          } else if (event.keyCode == KeyCode.KEY_W) {
            screen_shoot.captureNodeToPng(this.tempShape.node, "111aaa.png");
          } else if (event.keyCode == KeyCode.KEY_A) {
            this.initAllShapes();
          } else if (event.keyCode == KeyCode.KEY_S) {
            this.tempShape.borderNum = 6;
          } else if (event.keyCode == KeyCode.KEY_D) {
            this.tempShape.forceCircle = !this.tempShape.forceCircle;
          }
        };

        _proto.start = function start() {
          _plat.closeNativeSplash();

          this.initAllShapes();
          var colors = data.getBgColorGroup(0);
          this.m_bg.setColor(colors[0], colors[1]);
        };

        _proto.downloadPng = /*#__PURE__*/function () {
          var _downloadPng = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var spr;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return screen_shoot.captureNodeToSpriteFrame(this.tempSpr.node);

                case 2:
                  spr = _context.sent;
                  this.tempSpr.spriteFrame = spr;
                // let obj = await captureNodeToTextureData(this.tempShape.node);
                // savePngForBrower(this.tempShape.strVal+".png",obj.picData)

                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function downloadPng() {
            return _downloadPng.apply(this, arguments);
          }

          return downloadPng;
        }();

        _proto.initAllShapes = function initAllShapes() {
          if (!this.scroll.node.active) {
            return;
          }

          this.scroll.content.destroyAllChildren();
          var arr = []; //记录strVal

          var borderNum = 6;
          var num = Math.pow(2, borderNum); //组合个数

          for (var i = 1; i < num; i++) {
            var val = new Number(i);
            var str = val.toString(2);

            while (str.length < borderNum) {
              str = "0" + str;
            }

            if (arr.indexOf(_helper.getMaxStrVal(str)) == -1) {
              arr.push(_helper.getMaxStrVal(str));
            } // arr.push(str)

          }

          console.log(JSON.stringify(arr));

          for (var _i = 0; _i < arr.length; _i++) {
            var strVal = arr[_i];

            var _node = instantiate(this.tempItem);

            _node.active = true;
            _node.parent = this.scroll.content;

            var text = _node.getChildByName("text").getComponent(Label);

            var shape = _node.getChildByName("shape").getComponent(Shape);

            text.string = strVal;
            shape.strVal = strVal;
          }
        };

        _proto.onClickTile = function onClickTile(evt) {
          var shape = evt.target.getComponent(Shape);
        };

        _proto.onBase64Test = function onBase64Test() {
          // let strImg = base64Header+base64_power;
          // let img = new Image();
          // img.src = strImg;
          // let tex = new Texture2D();
          // let frame = SpriteFrame.createWithImage(img)
          // this.tempSpr.spriteFrame = frame;
          var tex = this.tempSpr.spriteFrame.texture;
        };

        return scene_debug;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tempShape", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tempSpr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scroll", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tempItem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "m_bg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/scene_editer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './helper.ts', './data.ts', './board.ts', './tile.ts', './node_tween_helper.ts', './plat_util.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createForOfIteratorHelperLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Layout, input, Input, KeyCode, log, color, UITransform, Node, js, director, Component, TileType, TileShape, data, Board, Tile, NodeTweenHelper, _plat;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Layout = module.Layout;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      log = module.log;
      color = module.color;
      UITransform = module.UITransform;
      Node = module.Node;
      js = module.js;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      TileType = module.TileType;
      TileShape = module.TileShape;
    }, function (module) {
      data = module.data;
    }, function (module) {
      Board = module.Board;
    }, function (module) {
      Tile = module.Tile;
    }, function (module) {
      NodeTweenHelper = module.NodeTweenHelper;
    }, function (module) {
      _plat = module._plat;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "50196PF7PVLVqrA/kloY73R", "scene_editer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executeInEditMode = _decorator.executeInEditMode;
      var scene_editer = exports('scene_editer', (_dec = ccclass('scene_editer'), _dec2 = property(Board), _dec3 = property(Label), _dec4 = property(Tile), _dec5 = property(Label), _dec6 = property(Layout), _dec7 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(scene_editer, _Component);

        function scene_editer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "board", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "edit", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tmpTile", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "txtIdx", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "layout", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "text_gap", _descriptor6, _assertThisInitialized(_this));

          _this.lastTile = null;
          return _this;
        }

        var _proto = scene_editer.prototype;

        _proto.onLoad = function onLoad() {
          input.on(Input.EventType.KEY_UP, this._onKeyUp, this);
          this.board.node.destroyAllChildren();
        };

        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.KEY_UP, this._onKeyUp, this);
        };

        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            var _onDebugClick, _iterator, _step, child, tile;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.board._initShape();

                  this.board.showDebug(true, color(255, 255, 0));
                  this.scheduleOnce(function () {
                    _this2.board.tileShape = TileShape.six;

                    _this2.updateTempStr();

                    if (_cfgBeforeJump) {
                      _this2.board.initWithTileMapConfig(_cfgBeforeJump);
                    }
                  });

                  _onDebugClick = function _onDebugClick(evt) {
                    var _now = Date.now();

                    var isDoubleClick = evt.target._lastStramp && _now - evt.target._lastStramp < 200;
                    evt.target._lastStramp = _now;
                    var tile = evt.target.getComponent(Tile);

                    var _tw = NodeTweenHelper.create(tile._shapeNode).getTween().stop();

                    var tt = tile.tileType;
                    var shape = tile.tileShape;
                    var _name = tile.node.name;
                    var value = parseInt(_name, 2);

                    _this2.tmpTile.init({
                      board: _this2.board,
                      tileType: tt,
                      value: value,
                      // specialType : tile.specialType,
                      angle: 0,
                      gapIdx: tile.gapIdx,
                      forceCircle: false
                    });

                    _this2.tmpTile.tileShape = shape;
                    _this2.tmpTile.strVal = tile.strVal;
                    _this2.tmpTile.showBorder = true;

                    if (_this2.board.tileShape != shape) {
                      if (tt == TileType.normal) {
                        _this2.txtIdx.string = tile.value + "形状不符合!!";
                        _this2.txtIdx.color = color(255, 0, 0);
                        _this2.edit.string = tile.strVal;
                        return;
                      } else {
                        _this2.tmpTile.tileShape = _this2.board.tileShape;
                        _this2.tmpTile.strVal = tile.strVal;
                      }
                    }

                    _this2.txtIdx.color = color(0, 255, 0);
                    _this2.edit.string = tile.strVal;
                    _this2.txtIdx.string = tile.value + "";

                    _this2.updateTempStr();
                  };

                  for (_iterator = _createForOfIteratorHelperLoose(this.layout.node.children); !(_step = _iterator()).done;) {
                    child = _step.value;
                    tile = child && child.getComponent(Tile);

                    if (tile) {
                      tile.node.on(Node.EventType.TOUCH_END, _onDebugClick, this);
                    }
                  }

                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function start() {
            return _start.apply(this, arguments);
          }

          return start;
        }();

        _proto._onKeyUp = function _onKeyUp(event) {
          if (event.keyCode == KeyCode.KEY_Q) {
            this.board._initShape();
          } else if (event.keyCode == KeyCode.KEY_W) {
            this.board.showDebug(true);
          } else if (event.keyCode == KeyCode.KEY_E) {
            this.board.showDebug(false);
          } else if (event.keyCode == KeyCode.KEY_A) {
            data.jumpLevel(4);
            var cfg = data.getCurLevelData();
            this.board.initWithTileMapConfig(cfg);
          } else if (event.keyCode == KeyCode.KEY_S) {
            var str = "{\"height\":9,\"width\":7,\"shape\":6,\"tiles\":[{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":2,\"v\":32,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-120,\"g\":0,\"fc\":false},{\"t\":0,\"v\":40,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":40,\"a\":-60,\"g\":0,\"fc\":false},{\"t\":3,\"v\":32,\"a\":-120,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":3,\"v\":32,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":42,\"a\":-60,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-300,\"g\":0,\"fc\":false},{\"t\":3,\"v\":32,\"a\":-180,\"g\":0,\"fc\":false},{\"t\":0,\"v\":37,\"a\":-300,\"g\":1,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":1,\"v\":32,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":36,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":56,\"a\":-120,\"g\":3,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":40,\"a\":-300,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":3,\"v\":32,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":42,\"a\":-60,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":0,\"g\":0,\"fc\":false},{\"t\":3,\"v\":32,\"a\":-180,\"g\":0,\"fc\":false},{\"t\":0,\"v\":52,\"a\":-60,\"g\":3,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":3,\"v\":32,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-180,\"g\":0,\"fc\":false},{\"t\":0,\"v\":40,\"a\":-240,\"g\":0,\"fc\":false},{\"t\":0,\"v\":40,\"a\":-180,\"g\":0,\"fc\":false},{\"t\":2,\"v\":32,\"a\":-240,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false}]}";
            this.board.initWithTileMapConfig(str);
            this.board.showDebug(true);
          } else if (event.keyCode == KeyCode.KEY_D) {
            var _str = "{\"width\":5,\"height\":6,\"shape\":6,\"tiles\":[{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":2,\"v\":32,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-120,\"g\":0,\"fc\":false},{\"t\":0,\"v\":40,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":40,\"a\":-60,\"g\":0,\"fc\":false},{\"t\":3,\"v\":32,\"a\":-120,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":3,\"v\":32,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":42,\"a\":-60,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-300,\"g\":0,\"fc\":false},{\"t\":3,\"v\":32,\"a\":-180,\"g\":0,\"fc\":false},{\"t\":0,\"v\":37,\"a\":-300,\"g\":1,\"fc\":false},{\"t\":1,\"v\":32,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":36,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":56,\"a\":-120,\"g\":3,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":40,\"a\":-300,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":3,\"v\":32,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":42,\"a\":-60,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":0,\"g\":0,\"fc\":false},{\"t\":3,\"v\":32,\"a\":-180,\"g\":0,\"fc\":false},{\"t\":0,\"v\":52,\"a\":-60,\"g\":3,\"fc\":false},{\"t\":0,\"v\":0,\"a\":0,\"g\":0,\"fc\":false},{\"t\":3,\"v\":32,\"a\":0,\"g\":0,\"fc\":false},{\"t\":0,\"v\":48,\"a\":-180,\"g\":0,\"fc\":false},{\"t\":0,\"v\":40,\"a\":-240,\"g\":0,\"fc\":false},{\"t\":0,\"v\":40,\"a\":-180,\"g\":0,\"fc\":false},{\"t\":2,\"v\":32,\"a\":-240,\"g\":0,\"fc\":false}]}";
            this.board.initWithTileMapConfig(_str);
            this.board.showDebug(true);
          } else if (event.keyCode == KeyCode.KEY_F) {
            var aa = this.board.checkIsAllJoined();
            log(aa);
          } else if (event.keyCode == KeyCode.KEY_G) {
            var b = this.board.tileArr[9];
            var a = this.board.tileArr[11];
            var isJoined = this.board.checkIsJoined(b, a);
            log("isJoined", isJoined);
          } else if (event.keyCode == KeyCode.KEY_Z) {
            data.nextLevel();

            var _cfg = data.getCurLevelData();

            this.board.initWithTileMapConfig(_cfg);
          } else if (event.keyCode == KeyCode.KEY_X) {
            data.previousLevel();

            var _cfg2 = data.getCurLevelData();

            this.board.initWithTileMapConfig(_cfg2);
          }
        };

        _proto.onToggle = function onToggle(toggle) {
          var key = this.edit.string;
          var value = parseInt(key, 2);
          var tileType = TileType.normal;
          var node = toggle.node;

          if (node.name == "Toggle_shape") {
            this.board.clear();
            this.board.tileShape = toggle.isChecked ? TileShape.six : TileShape.four;
            this.board.showDebug(this.board.bShowDebug);
            this.updateTempStr();
          } else if (node.name == "Toggle_debug") {
            this.board.showDebug(toggle.isChecked);
          }

          this.tmpTile.init({
            board: this.board,
            tileType: tileType,
            value: value,
            angle: 0,
            gapIdx: this.tmpTile.gapIdx,
            forceCircle: this.tmpTile.forceCircle
          });
        };

        _proto.updateTempStr = function updateTempStr() {
          var key = this.edit.string;
          this.board.showDebug(true, color(0, 255, 255));
          var tileHeight, tileWidth;

          if (this.board.tileShape == TileShape.four) {
            tileHeight = 256, tileWidth = 256;
          } else if (this.board.tileShape == TileShape.six) {
            tileHeight = 220, tileWidth = 220 * (2 / 1.73205);
          }

          var trans = this.tmpTile.node.getComponent(UITransform);
          trans.width = tileWidth;
          trans.height = tileHeight;
          var arr = this.board.tileArr;

          for (var _iterator2 = _createForOfIteratorHelperLoose(arr), _step2; !(_step2 = _iterator2()).done;) {
            var tile = _step2.value;
            tile.offClick();
            tile.node.off(Node.EventType.TOUCH_START, this._onClickTileESTart, this);
            tile.node.on(Node.EventType.TOUCH_START, this._onClickTileESTart, this);
            tile.node.off(Node.EventType.TOUCH_END, this._onClickTileEnd, this);
            tile.node.on(Node.EventType.TOUCH_END, this._onClickTileEnd, this);
          }
        };

        _proto._onClickTileESTart = function _onClickTileESTart(evt) {
          evt.target._startTouchTime = Date.now();
        };

        _proto._onClickTileEnd = function _onClickTileEnd(evt) {
          var _this3 = this;

          var node = evt.target;
          var tile = node.getComponent(Tile);

          if (Date.now() - evt.target._startTouchTime > 2000) {
            tile.clear();
            return;
          }

          var _this$board$getCoord = this.board.getCoord(tile),
              i = _this$board$getCoord.i,
              j = _this$board$getCoord.j;

          if (this.board.tileShape != this.tmpTile.tileShape) {
            console.log("形状不匹配");
            return;
          }

          var value = this.tmpTile.value;
          var type = this.tmpTile.tileType;
          var shape = this.tmpTile.tileShape;
          var gapIdx = this.tmpTile.gapIdx;

          if (value == 0) {
            this.txtIdx.string = "temp为空!!";
            this.txtIdx.color = color(255, 0, 0);
            return;
          }

          var _now = Date.now();

          var isDoubleClick = evt.target._lastStramp && _now - evt.target._lastStramp < 200;

          if (isDoubleClick || tile.value == 0) {
            tile.init({
              board: this.board,
              tileType: type,
              value: value,
              // specialType : 0,
              angle: 0,
              gapIdx: gapIdx,
              forceCircle: this.tmpTile.forceCircle
            });
          } else {
            tile.doRoatate().then(function (angle) {
              if (tile.tileType == TileType.power) {
                tile.angle = angle;
              }

              var kkk = tile.getStrValWithAngle();

              _this3.board.onChangleTileAngle(tile, "event-end");

              log(js.formatStr("i:%s, j:%s, kkk:%s", i, j, kkk));
            });
          }

          this.lastTile = tile;
          evt.target._lastStramp = _now;
        };

        _proto.onBtnSave = function onBtnSave() {
          var cfg = this.board.getTileMapConfig();

          data._term(cfg);

          var str = JSON.stringify(cfg
          /**,null,"\t" */
          );

          _plat.copyTextToClipboard(str);
        } //打乱
        ;

        _proto.onBtnDisrupt = function onBtnDisrupt() {
          this.board.doDisrupt();
        };

        _proto.onBtnClearAll = function onBtnClearAll() {
          this.board.borderWidth = 8;
          this.board.boardHeight = 10;

          this.board._initShape();
        };

        _proto.onBtnJump = function onBtnJump() {
          var _cfgBeforeJump$tiles;

          var cfg = this.board.getTileMapConfig();
          _cfgBeforeJump = {
            height: cfg.height,
            width: cfg.width,
            shape: cfg.shape,
            tiles: []
          };

          (_cfgBeforeJump$tiles = _cfgBeforeJump.tiles).push.apply(_cfgBeforeJump$tiles, cfg.tiles);

          data._term(cfg);

          window["_curDebugCfg"] = cfg;
          director.loadScene("game");
        };

        _proto.onBtnGap = function onBtnGap() {
          this.tmpTile.gapIdx++;
          this.text_gap.string = "gap:" + this.tmpTile.gapIdx;
        };

        _proto.onBtnClear1 = function onBtnClear1() {
          if (this.lastTile) {
            this.lastTile.clear();
          }
        };

        _proto.onBtnMoveBoard = function onBtnMoveBoard(evt) {
          var name = evt.target.name;
          if (name.indexOf("up") >= 0) ;else if (name.indexOf("right") >= 0) ;else if (name.indexOf("down") >= 0) ;else if (name.indexOf("left") >= 0) ;
        };

        _proto.onBtnForceCircle = function onBtnForceCircle() {
          this.tmpTile.forceCircle = !this.tmpTile.forceCircle;
        };

        _proto.onBtnChangeType = function onBtnChangeType() {
          if (this.tmpTile.tileType < TileType.lamp) {
            this.tmpTile.tileType++;
          } else {
            this.tmpTile.tileType = TileType.normal;
          }
        };

        return scene_editer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "board", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "edit", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tmpTile", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txtIdx", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "layout", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "text_gap", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      var _cfgBeforeJump = null;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/screen_shoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, view, UITransform, director, Canvas, v3, RenderTexture, Layers, instantiate, Renderer, UIOpacity, RichText, LabelOutline, LabelShadow, VideoPlayer, Mask, UIMeshRenderer, TiledMap, TiledTile, RenderRoot2D, WebView, sys, Node, Camera, Color, screen, ImageAsset, Texture2D, SpriteFrame;

  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      view = module.view;
      UITransform = module.UITransform;
      director = module.director;
      Canvas = module.Canvas;
      v3 = module.v3;
      RenderTexture = module.RenderTexture;
      Layers = module.Layers;
      instantiate = module.instantiate;
      Renderer = module.Renderer;
      UIOpacity = module.UIOpacity;
      RichText = module.RichText;
      LabelOutline = module.LabelOutline;
      LabelShadow = module.LabelShadow;
      VideoPlayer = module.VideoPlayer;
      Mask = module.Mask;
      UIMeshRenderer = module.UIMeshRenderer;
      TiledMap = module.TiledMap;
      TiledTile = module.TiledTile;
      RenderRoot2D = module.RenderRoot2D;
      WebView = module.WebView;
      sys = module.sys;
      Node = module.Node;
      Camera = module.Camera;
      Color = module.Color;
      screen = module.screen;
      ImageAsset = module.ImageAsset;
      Texture2D = module.Texture2D;
      SpriteFrame = module.SpriteFrame;
    }],
    execute: function () {
      exports('captureNodeToTextureData', captureNodeToTextureData);

      cclegacy._RF.push({}, "82a00HlevtBo76IcvlrD5Ml", "screen_shoot", undefined);

      var screen_shoot = exports('screen_shoot', /*#__PURE__*/function () {
        function screen_shoot() {}
        /**截图某个节点，保存为图片 */


        screen_shoot.captureNodeToPng = /*#__PURE__*/function () {
          var _captureNodeToPng = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(targetNode, saveName) {
            var data, success;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (saveName === void 0) {
                    saveName = null;
                  }

                  return _context.abrupt("return", false);

                case 3:
                  _context.next = 5;
                  return captureNodeToTextureData(targetNode);

                case 5:
                  data = _context.sent;
                  _context.next = 8;
                  return this.saveFile(data.picData, data.width, data.height, saveName);

                case 8:
                  success = _context.sent;
                  return _context.abrupt("return", success);

                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function captureNodeToPng(_x, _x2) {
            return _captureNodeToPng.apply(this, arguments);
          }

          return captureNodeToPng;
        }()
        /**截图某个节点，然后返回精灵帧 */
        ;

        screen_shoot.captureNodeToSpriteFrame = /*#__PURE__*/function () {
          var _captureNodeToSpriteFrame = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(targetNode) {
            var data, img, tex, sf;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return captureNodeToTextureData(targetNode);

                case 2:
                  data = _context2.sent;
                  img = new ImageAsset();
                  img.reset({
                    _data: data.picData,
                    width: data.width,
                    height: data.height,
                    format: Texture2D.PixelFormat.RGBA8888,
                    _compressed: false
                  });
                  tex = new Texture2D();
                  tex.image = img;
                  sf = new SpriteFrame();
                  sf.texture = tex;
                  sf.packable = false;
                  return _context2.abrupt("return", sf);

                case 11:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));

          function captureNodeToSpriteFrame(_x3) {
            return _captureNodeToSpriteFrame.apply(this, arguments);
          }

          return captureNodeToSpriteFrame;
        }();

        screen_shoot.saveFile = /*#__PURE__*/function () {
          var _saveFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(picData, _width, _height, saveName) {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  {
                    _context3.next = 4;
                    break;
                  }

                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));

          function saveFile(_x4, _x5, _x6, _x7) {
            return _saveFile.apply(this, arguments);
          }

          return saveFile;
        }();

        return screen_shoot;
      }());

      function filpYImage(data, width, height) {
        // create the data array
        var picData = new Uint8Array(width * height * 4);
        var rowBytes = width * 4;

        for (var row = 0; row < height; row++) {
          var srow = height - 1 - row;
          var start = srow * width * 4;
          var reStart = row * width * 4; // save the piexls data

          for (var i = 0; i < rowBytes; i++) {
            picData[reStart + i] = data[start + i];
          }
        }

        return picData;
      }
      /**根据指定rect，剪裁图片数据 */


      function clipImgWithRect(data, oldWidth, rect) {
        rect = {
          x: Math.floor(rect.x),
          y: Math.floor(rect.y),
          width: Math.floor(rect.width),
          height: Math.floor(rect.height)
        };
        var len = rect.width * rect.height * 4;
        var picData = new Uint8Array(len);
        var rowBytes = rect.width * 4;
        var acc = 0;

        for (var row = rect.y + rect.height - 1; row >= rect.y; row--) {
          ///因为图片数据的上下是反的，所以从上面开始读
          var start = row * oldWidth * 4 + rect.x * 4; // save the piexls data

          for (var i = 0; i < rowBytes; i++) {
            picData[acc++] = data[start + i];
          }
        }

        return picData;
      }

      function getScreenShootCamera() {
        var camera = null;
        var name = "shoot_camera_node";
        var cameraNode = director.getScene().getChildByName(name);

        if (cameraNode == null) {
          var visibleRect = view.getVisibleSize();
          cameraNode = new Node(name);
          director.getScene().addChild(cameraNode);
          cameraNode.position = v3(visibleRect.width * 0.5, visibleRect.height * 0.5);
          camera = cameraNode.addComponent(Camera);
          camera.visibility = Layers.Enum.UI_2D;
          camera.clearColor = Color.TRANSPARENT;
          camera.projection = Camera.ProjectionType.ORTHO;
          camera.near = 0;
          camera.far = 2000;
          var size = screen.windowSize;
          var orthoHeight = size.height / view.getScaleY() / 2;
          camera.orthoHeight = orthoHeight;
        } else {
          camera = cameraNode.getComponent(Camera);
        }

        return camera;
      }
      /**截图某个节点，然后返回纹理数据 */


      function captureNodeToTextureData(_x8) {
        return _captureNodeToTextureData.apply(this, arguments);
      }

      function _captureNodeToTextureData() {
        _captureNodeToTextureData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(targetNode) {
          var visibleRect, trans, rect, canvasNode, oldPos, newPosition, pt, camera, texture, tempNode, targetLayer, qrArr1, qrArr2, i, qr1, qr2;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                visibleRect = view.getVisibleSize();
                trans = targetNode.getComponent(UITransform);
                rect = trans.getBoundingBox();
                canvasNode = director.getScene().getComponentInChildren(Canvas).node;
                oldPos = targetNode.position;
                newPosition = v3(targetNode.position.x, targetNode.position.y, targetNode.position.z);

                if (trans.node.parent) {
                  pt = trans.node.parent.getComponent(UITransform).convertToWorldSpaceAR(v3(rect.x, rect.y, 0));
                  rect.x = Math.floor(pt.x);
                  rect.y = Math.floor(pt.y); //校准坐标，避免出现0.5像素这种，不然剪裁会出现误差

                  newPosition.x = oldPos.x - (pt.x - rect.x);
                  newPosition.y = oldPos.y - (pt.y - rect.y);
                  newPosition = trans.node.parent.getComponent(UITransform).convertToWorldSpaceAR(newPosition);
                  newPosition = canvasNode.getComponent(UITransform).convertToNodeSpaceAR(newPosition);
                }

                rect.width = Math.floor(rect.width);
                rect.height = Math.floor(rect.height);
                camera = getScreenShootCamera();
                texture = new RenderTexture();
                texture.reset({
                  width: Math.floor(visibleRect.width),
                  height: Math.floor(visibleRect.height)
                });
                camera.targetTexture = texture;
                tempNode = null;
                targetLayer = Layers.Enum["camera_shoot"];

                if (targetLayer) {
                  //拷贝一个副本,跟截图摄像机使用同一个Layer,再UI不可见的范围内完成截图
                  tempNode = instantiate(targetNode);
                  tempNode.walk(function (target) {
                    //渲染以外的组件，全部去掉
                    for (var i = target.components.length - 1; i >= 0; i--) {
                      var comp = target.components[i];
                      if (comp instanceof Renderer || comp instanceof UITransform || comp instanceof UIOpacity || comp instanceof RichText || comp instanceof LabelOutline || comp instanceof LabelShadow || comp instanceof VideoPlayer || comp instanceof Mask || comp instanceof UIMeshRenderer || comp instanceof TiledMap || comp instanceof TiledTile || comp instanceof RenderRoot2D || comp instanceof WebView) ;else {
                        comp.destroy();
                      }
                    }

                    target.__old_layer = target.layer;
                    target.layer = targetLayer;
                  });
                  camera.visibility = targetLayer;
                  tempNode.position = newPosition;
                  tempNode.parent = canvasNode; //Graphics 组件 instantiate以后是空白的

                  if (window["_my_shape"]) {
                    qrArr1 = targetNode.getComponentsInChildren(window["_my_shape"]);
                    qrArr2 = tempNode.getComponentsInChildren(window["_my_shape"]);

                    if (qrArr1) {
                      for (i = 0; i < qrArr1.length; i++) {
                        qr1 = qrArr1[i];
                        qr2 = qrArr2[i];

                        if (qr2) {
                          qr2._borderNum = qr1._borderNum;
                          qr2._radius = qr1._radius;
                          qr2._strVal = qr1._strVal;
                          qr2._isClose = qr1._isClose;

                          qr2._paint();
                        }
                      }
                    }
                  }
                } else {
                  camera.visibility = Layers.Enum.UI_2D;
                }

                return _context5.abrupt("return", new Promise(function (resolve, reject) {
                  camera.scheduleOnce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                    var data, picData;
                    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                        case 0:
                          data = texture.readPixels();
                          picData = data;
                          picData = clipImgWithRect(data, texture.width, rect);

                          if (sys.os == sys.OS.IOS) {
                            picData = filpYImage(picData, rect.width, rect.height);
                          }

                          if (texture) {
                            texture.destroy();
                          }

                          if (tempNode) {
                            tempNode.destroy();
                          }

                          resolve({
                            picData: picData,
                            width: rect.width,
                            height: rect.height
                          });

                        case 7:
                        case "end":
                          return _context4.stop();
                      }
                    }, _callee4);
                  })));
                }));

              case 17:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }));
        return _captureNodeToTextureData.apply(this, arguments);
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/shape.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './helper.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, v2, UIOpacity, Graphics, _helper;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v2 = module.v2;
      UIOpacity = module.UIOpacity;
      Graphics = module.Graphics;
    }, function (module) {
      _helper = module._helper;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "a1d0f8wYYpEqIEyXkW30npP", "shape", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executeInEditMode = _decorator.executeInEditMode;
      var Shape = exports('Shape', (_dec = ccclass("shape"), _dec2 = executeInEditMode(), _dec3 = property({
        tooltip: "边框是正几边形",
        max: 20,
        min: 2,
        step: 1
      }), _dec4 = property({
        tooltip: "圆心到边的距离"
      }), _dec5 = property({
        tooltip: "是否显示边框"
      }), _dec6 = property({
        tooltip: "突触形状"
      }), _dec7 = property({
        tooltip: "缺口的idx,下标从1开始， 0表示没有缺口 ",
        step: 1,
        min: 0
      }), _dec8 = property({
        tooltip: "不使用常规的外框连线，而是如同普通灯泡一样，由所有突触指向中心的圆圈"
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Graphics) {
        _inheritsLoose(Shape, _Graphics);

        function Shape() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Graphics.call.apply(_Graphics, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_borderNum", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_radius", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_showBorder", _descriptor3, _assertThisInitialized(_this));
          /**突触形状 */


          _initializerDefineProperty(_this, "_strVal", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_gapIdx", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_forceCircle", _descriptor6, _assertThisInitialized(_this));

          _this._opacity = 0;
          /**顶点列表 */

          _this._vertexArr = [];
          return _this;
        }

        var _proto = Shape.prototype;

        _proto._paint = function _paint() {
          this.clear();

          this._paintBorder(this);

          this._paintShape(this);
        };

        _proto._paintBorder = function _paintBorder(_graphics) {
          this._vertexArr = [];
          if (this._borderNum < 3) ;else {
            var interval = 360 / this._borderNum;
            var realRadius = this._radius / Math.abs(Math.cos(interval / 2 / 180 * 3.14));
            var angle = 0;

            if (this._borderNum % 2 == 0) {
              angle = -interval / 2;
            }

            var angleArr = [angle];

            for (var i = 1; i < this._borderNum; i++) {
              angle += interval;
              angleArr.push(angle);
            }

            for (var _i = 0; _i < angleArr.length; _i++) {
              angle = angleArr[_i];
              this._vertexArr[_i] = v2(realRadius * Math.sin(angle / 180 * 3.14), realRadius * Math.cos(angle / 180 * 3.14));
            }
          }

          if (this._showBorder) {
            if (this._vertexArr.length == 0) {
              _graphics.arc(0, 0, this._radius, 0, Math.PI * 2, true);

              _graphics.stroke();
            } else {
              this._vertexArr.push(this._vertexArr[0]);

              for (var _i2 = 1; _i2 < this._vertexArr.length; _i2++) {
                var p1 = this._vertexArr[_i2 - 1];
                var p2 = this._vertexArr[_i2];
                var A1 = 0,
                    B1 = 0;

                if (p1.x != p2.x) {
                  A1 = (p1.y - p2.y) / (p1.x - p2.x); //斜率
                }

                B1 = p1.y - A1 * p1.x;
                var diffX = 5 * Math.cos(Math.atan(A1));

                if (p1.x > p2.x) {
                  diffX = -Math.abs(diffX);
                }

                var diffY = diffX * A1;
                var x1 = p1.x,
                    y1 = p1.y;
                var x2 = x1 + diffX,
                    y2 = y1 + diffY;

                while (p1.x < p2.x && x1 < p2.x && x2 < p2.x || p1.x > p2.x && x1 > p2.x && x2 > p2.x) {
                  _graphics.moveTo(x1, A1 * x1 + B1);

                  _graphics.lineTo(x2, A1 * x2 + B1);

                  x1 = x2 + diffX;
                  x2 = x1 + diffX;
                  y1 = y2 + diffY;
                  y2 = y1 + diffY;
                } // log("i:",i,js.formatStr(",p1:(%s,%s), p2:(%s,%s)",p1.x.toFixed(0),p1.y.toFixed(0),p2.x.toFixed(0),p2.y.toFixed(0)),",A1",A1.toFixed(2),",B1",B1.toFixed(2),",angle",angle.toFixed(0),",diffX",diffX.toFixed(0),"diffY",(diffX*A1).toFixed(0)) 


                _graphics.lineTo(p2.x, p2.y);
              }

              this._vertexArr.pop();

              _graphics.stroke();
            }
          }
        };

        _proto._paintShape = function _paintShape(_graphics) {
          if (this._borderNum < 3) {
            return;
          }
          /**记录有突触的边 */


          var sideArr = [];

          for (var i = 0; i < this._strVal.length; i++) {
            var c = this._strVal[i];

            if (c == "1") {
              sideArr.push(i);
            }
          }

          if (sideArr.length == 0) {
            return;
          } else if (sideArr.length == 1 || this.forceCircle) {
            for (var _i3 = 0; _i3 < sideArr.length; _i3++) {
              var idx1 = sideArr[_i3]; //边的索引

              var p1 = this._vertexArr[idx1];
              var p2 = this._vertexArr[idx1 + 1];

              if (idx1 == this._borderNum - 1) {
                p2 = this._vertexArr[0];
              }

              var centerPt1 = v2((p1.x + p2.x) * 0.5, (p1.y + p2.y) * 0.5); //线段的中点，也是圆弧的端点

              _graphics.moveTo(centerPt1.x, centerPt1.y);

              _graphics.lineTo(centerPt1.x * 0.42, centerPt1.y * 0.42);

              var radius = this._radius * 0.42;

              _graphics.arc(0, 0, radius, 0, Math.PI, true);

              _graphics.arc(0, 0, radius, 0, Math.PI, false);
            }

            _graphics.stroke();

            return;
          } else if (sideArr.length > 2) {
            sideArr.push(sideArr[0]);
          }
          /**突触点两两组合 */


          for (var _i4 = 1; _i4 < sideArr.length; _i4++) {
            if (_i4 == this._gapIdx) {
              continue;
            }

            var _idx = sideArr[_i4 - 1]; //边的索引

            var idx2 = sideArr[_i4]; //边的索引
            //突触点所在的边

            var _p = this._vertexArr[_idx];
            var _p2 = this._vertexArr[_idx + 1];

            if (_idx == this._borderNum - 1) {
              _p2 = this._vertexArr[0];
            } //突触点所在的边


            var p3 = this._vertexArr[idx2];
            var p4 = this._vertexArr[idx2 + 1];

            if (idx2 == this._borderNum - 1) {
              p4 = this._vertexArr[0];
            }

            var param = _helper.drawArcWith2Segments(_p, _p2, p3, p4);

            if (param.type == 0) {
              _graphics.arc(param.center.x, param.center.y, param.radius, param.startAngle, param.endAngle, param.counterclockwise);
            } else {
              _graphics.moveTo(param.startPt.x, param.startPt.y);

              _graphics.lineTo(param.entPt.x, param.entPt.y);
            }
          }

          _graphics.stroke();
        };

        _proto.start = function start() {
          this._paint();
        };

        _createClass(Shape, [{
          key: "borderNum",
          get: function get() {
            return this._borderNum;
          },
          set: function set(val) {
            this._borderNum = val;
            this.strVal = this.strVal;
          }
        }, {
          key: "radius",
          get: function get() {
            return this._radius;
          },
          set: function set(val) {
            this._radius = val;

            this._paint();
          }
        }, {
          key: "showBorder",
          get: function get() {
            return this._showBorder;
          },
          set: function set(val) {
            this._showBorder = val;

            this._paint();
          }
        }, {
          key: "strVal",
          get: function get() {
            return this._strVal;
          },
          set: function set(val) {
            while (val.length < this._borderNum) {
              val = "0" + val;
            }

            while (val.length > this._borderNum) {
              val = val.substring(0, val.length - 1);
            }

            this._strVal = val;

            this._paint();
          }
        }, {
          key: "gapIdx",
          get: //缺口下标从1开始， 0表示没有缺口 
          function get() {
            return this._gapIdx;
          },
          set: function set(val) {
            this._gapIdx = val;

            this._paint();
          }
        }, {
          key: "forceCircle",
          get: //不使用常规的外框连线，而是如同普通灯泡一样，由所有突触指向中心的圆圈
          function get() {
            return this._forceCircle;
          },
          set: function set(val) {
            this._forceCircle = val;

            this._paint();
          }
        }, {
          key: "opacity",
          get: function get() {
            return this._opacity;
          },
          set: function set(val) {
            this._opacity = val;
            var opa = this.getComponent(UIOpacity) || this.addComponent(UIOpacity);
            opa.opacity = val;
          }
        }]);

        return Shape;
      }(Graphics), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_borderNum", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "borderNum", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "borderNum"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_radius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_showBorder", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "showBorder", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "showBorder"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_strVal", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "000000";
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "strVal", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "strVal"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_gapIdx", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "gapIdx", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "gapIdx"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_forceCircle", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "forceCircle", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "forceCircle"), _class2.prototype)), _class2)) || _class) || _class));
      window["_my_shape"] = Shape;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tex_const.ts", ['cc', './helper.ts'], function (exports) {
  var cclegacy, ImageAsset, Texture2D, SpriteFrame, TileType;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      ImageAsset = module.ImageAsset;
      Texture2D = module.Texture2D;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      TileType = module.TileType;
    }],
    execute: function () {
      exports({
        getFrameExtra: getFrameExtra,
        getSplashFrame: getSplashFrame
      });

      cclegacy._RF.push({}, "d2572dHcWtC/q6f3YhLJ6Ra", "tex_const", undefined);

      var tex_splash = {
        picData: new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]),
        width: 2,
        height: 2
      };
      var tex_power = {
        picData: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 26, 26, 26, 47, 47, 47, 47, 17, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 103, 103, 103, 103, 99, 99, 99, 99, 24, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 92, 92, 92, 196, 196, 196, 196, 99, 99, 99, 99, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 70, 70, 70, 204, 204, 204, 204, 210, 210, 210, 210, 60, 60, 60, 60, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 52, 52, 52, 185, 185, 185, 185, 249, 249, 249, 249, 176, 176, 176, 176, 33, 33, 33, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 45, 45, 45, 170, 170, 170, 170, 245, 245, 245, 245, 252, 252, 252, 252, 126, 126, 126, 126, 16, 16, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 39, 39, 39, 160, 160, 160, 160, 242, 242, 242, 242, 255, 255, 255, 255, 236, 236, 236, 236, 73, 73, 73, 73, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 35, 35, 35, 150, 150, 150, 150, 240, 240, 240, 240, 255, 255, 255, 255, 255, 255, 255, 255, 208, 208, 208, 208, 39, 39, 39, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 31, 31, 31, 141, 141, 141, 141, 238, 238, 238, 238, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 160, 160, 160, 160, 24, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 26, 26, 26, 129, 129, 129, 129, 235, 235, 235, 235, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 251, 251, 251, 251, 99, 99, 99, 99, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 22, 22, 22, 119, 119, 119, 119, 232, 232, 232, 232, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 235, 235, 235, 235, 50, 50, 50, 50, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15, 15, 15, 105, 105, 105, 105, 226, 226, 226, 226, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 191, 191, 191, 191, 26, 26, 26, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 94, 94, 94, 94, 216, 216, 216, 216, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 253, 253, 253, 253, 131, 131, 131, 131, 15, 15, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 80, 80, 80, 80, 203, 203, 203, 203, 252, 252, 252, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 248, 248, 248, 248, 82, 82, 82, 82, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 67, 67, 67, 190, 190, 190, 190, 248, 248, 248, 248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 219, 219, 219, 219, 48, 48, 48, 48, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 56, 56, 56, 178, 178, 178, 178, 245, 245, 245, 245, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 253, 253, 253, 253, 174, 174, 174, 174, 22, 22, 22, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 48, 48, 170, 170, 170, 170, 241, 241, 241, 241, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 251, 251, 251, 251, 128, 128, 128, 128, 11, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 38, 38, 38, 160, 160, 160, 160, 240, 240, 240, 240, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 237, 237, 237, 237, 81, 81, 81, 81, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 32, 150, 150, 150, 150, 238, 238, 238, 238, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 253, 253, 253, 253, 208, 208, 208, 208, 35, 35, 35, 35, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 22, 22, 22, 139, 139, 139, 139, 235, 235, 235, 235, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 250, 250, 250, 250, 169, 169, 169, 169, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 16, 16, 16, 123, 123, 123, 123, 232, 232, 232, 232, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 245, 245, 245, 245, 118, 118, 118, 118, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 13, 13, 110, 110, 110, 110, 225, 225, 225, 225, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 232, 232, 232, 232, 57, 57, 57, 57, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 99, 99, 99, 99, 220, 220, 220, 220, 253, 253, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 253, 253, 253, 253, 204, 204, 204, 204, 16, 16, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 90, 90, 90, 90, 215, 215, 215, 215, 253, 253, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 247, 247, 247, 247, 151, 151, 151, 151, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 78, 78, 78, 78, 210, 210, 210, 210, 252, 252, 252, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 239, 239, 239, 239, 87, 87, 87, 87, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 69, 69, 69, 69, 200, 200, 200, 200, 252, 252, 252, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 227, 227, 227, 227, 35, 35, 35, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 60, 60, 60, 60, 193, 193, 193, 193, 250, 250, 250, 250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 250, 250, 250, 250, 181, 181, 181, 181, 12, 12, 12, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 48, 48, 178, 178, 178, 178, 248, 248, 248, 248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 243, 243, 243, 243, 146, 146, 146, 146, 33, 33, 33, 33, 31, 31, 31, 31, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 34, 34, 34, 34, 34, 34, 34, 21, 21, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 38, 38, 38, 162, 162, 162, 162, 243, 243, 243, 243, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 250, 250, 250, 250, 217, 217, 217, 217, 187, 187, 187, 187, 188, 188, 188, 188, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 188, 188, 188, 188, 190, 190, 190, 190, 198, 198, 198, 198, 173, 173, 173, 173, 56, 56, 56, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 28, 28, 28, 145, 145, 145, 145, 237, 237, 237, 237, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 252, 252, 252, 252, 249, 249, 249, 249, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 242, 242, 242, 242, 126, 126, 126, 126, 22, 22, 22, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 132, 132, 132, 132, 230, 230, 230, 230, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 246, 246, 246, 246, 146, 146, 146, 146, 32, 32, 32, 32, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 121, 121, 121, 121, 225, 225, 225, 225, 253, 253, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 248, 248, 248, 248, 161, 161, 161, 161, 39, 39, 39, 39, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 13, 13, 111, 111, 111, 111, 220, 220, 220, 220, 252, 252, 252, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 251, 251, 251, 251, 175, 175, 175, 175, 49, 49, 49, 49, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 99, 99, 99, 99, 215, 215, 215, 215, 252, 252, 252, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 188, 188, 188, 188, 61, 61, 61, 61, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 90, 90, 90, 90, 208, 208, 208, 208, 251, 251, 251, 251, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 202, 202, 202, 202, 76, 76, 76, 76, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 80, 80, 80, 80, 203, 203, 203, 203, 250, 250, 250, 250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 213, 213, 213, 213, 93, 93, 93, 93, 11, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 64, 64, 64, 193, 193, 193, 193, 249, 249, 249, 249, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 223, 223, 223, 223, 108, 108, 108, 108, 15, 15, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 56, 56, 56, 56, 187, 187, 187, 187, 247, 247, 247, 247, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 232, 232, 232, 232, 122, 122, 122, 122, 19, 19, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 52, 52, 52, 173, 173, 173, 173, 239, 239, 239, 239, 245, 245, 245, 245, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 243, 243, 243, 243, 244, 244, 244, 244, 251, 251, 251, 251, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 241, 241, 241, 241, 138, 138, 138, 138, 28, 28, 28, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 83, 83, 83, 159, 159, 159, 159, 162, 162, 162, 162, 159, 159, 159, 159, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 154, 154, 154, 154, 170, 170, 170, 170, 230, 230, 230, 230, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 247, 247, 247, 247, 151, 151, 151, 151, 37, 37, 37, 37, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 29, 29, 29, 37, 37, 37, 37, 34, 34, 34, 34, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 32, 32, 32, 32, 29, 29, 29, 29, 84, 84, 84, 84, 219, 219, 219, 219, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 252, 252, 252, 252, 170, 170, 170, 170, 46, 46, 46, 46, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 229, 229, 229, 229, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 185, 185, 185, 185, 54, 54, 54, 54, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 153, 153, 153, 153, 245, 245, 245, 245, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 199, 199, 199, 199, 63, 63, 63, 63, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 41, 41, 41, 207, 207, 207, 207, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 216, 216, 216, 216, 78, 78, 78, 78, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 87, 87, 87, 87, 232, 232, 232, 232, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 228, 228, 228, 228, 100, 100, 100, 100, 13, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 155, 155, 155, 155, 247, 247, 247, 247, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 236, 236, 236, 236, 117, 117, 117, 117, 20, 20, 20, 20, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 211, 211, 211, 211, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 241, 241, 241, 241, 132, 132, 132, 132, 24, 24, 24, 24, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 81, 81, 81, 81, 237, 237, 237, 237, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 244, 244, 244, 244, 147, 147, 147, 147, 30, 30, 30, 30, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 157, 157, 157, 157, 247, 247, 247, 247, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 246, 246, 246, 246, 159, 159, 159, 159, 37, 37, 37, 37, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 26, 26, 26, 26, 214, 214, 214, 214, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 250, 250, 250, 250, 172, 172, 172, 172, 46, 46, 46, 46, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 86, 86, 86, 86, 240, 240, 240, 240, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 251, 251, 251, 251, 186, 186, 186, 186, 59, 59, 59, 59, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 154, 154, 154, 154, 250, 250, 250, 250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 252, 252, 252, 252, 199, 199, 199, 199, 73, 73, 73, 73, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 35, 35, 35, 35, 204, 204, 204, 204, 253, 253, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 253, 253, 253, 253, 211, 211, 211, 211, 91, 91, 91, 91, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 84, 84, 84, 84, 241, 241, 241, 241, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 223, 223, 223, 223, 107, 107, 107, 107, 14, 14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 138, 138, 138, 138, 251, 251, 251, 251, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 233, 233, 233, 233, 123, 123, 123, 123, 18, 18, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 35, 35, 35, 196, 196, 196, 196, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 245, 245, 245, 245, 138, 138, 138, 138, 28, 28, 28, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 70, 70, 70, 70, 239, 239, 239, 239, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 252, 252, 252, 252, 153, 153, 153, 153, 40, 40, 40, 40, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 14, 14, 14, 127, 127, 127, 127, 253, 253, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 170, 170, 170, 170, 51, 51, 51, 51, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 27, 27, 27, 197, 197, 197, 197, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 187, 187, 187, 187, 63, 63, 63, 63, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 65, 65, 65, 65, 239, 239, 239, 239, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 199, 199, 199, 199, 73, 73, 73, 73, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 16, 16, 16, 131, 131, 131, 131, 253, 253, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255, 212, 212, 212, 212, 82, 82, 82, 82, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 30, 30, 195, 195, 195, 195, 255, 255, 255, 255, 255, 255, 255, 255, 224, 224, 224, 224, 98, 98, 98, 98, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 67, 67, 67, 67, 235, 235, 235, 235, 255, 255, 255, 255, 229, 229, 229, 229, 116, 116, 116, 116, 15, 15, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 130, 130, 130, 130, 252, 252, 252, 252, 236, 236, 236, 236, 128, 128, 128, 128, 19, 19, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 39, 39, 39, 191, 191, 191, 191, 247, 247, 247, 247, 147, 147, 147, 147, 25, 25, 25, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 82, 82, 82, 82, 228, 228, 228, 228, 175, 175, 175, 175, 33, 33, 33, 33, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 23, 23, 23, 130, 130, 130, 130, 187, 187, 187, 187, 53, 53, 53, 53, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 40, 40, 40, 112, 112, 112, 112, 74, 74, 74, 74, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 25, 25, 25, 25, 45, 45, 45, 45, 14, 14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
        width: 46,
        height: 69
      };
      var tex_wifi = {
        picData: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 22, 22, 22, 163, 163, 163, 163, 237, 237, 237, 237, 237, 237, 237, 237, 236, 236, 236, 236, 240, 240, 240, 240, 209, 209, 209, 209, 73, 73, 73, 73, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 144, 144, 144, 144, 233, 233, 233, 233, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 251, 244, 244, 244, 244, 207, 207, 207, 207, 49, 49, 49, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 88, 88, 88, 238, 238, 238, 238, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 253, 253, 253, 253, 168, 168, 168, 168, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 178, 178, 178, 178, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 228, 228, 228, 228, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 207, 207, 207, 207, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 246, 246, 246, 246, 81, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 202, 202, 202, 202, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 241, 241, 241, 241, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147, 147, 147, 147, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 217, 217, 217, 217, 26, 26, 26, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 36, 36, 36, 216, 216, 216, 216, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 250, 250, 250, 250, 113, 113, 113, 113, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 71, 71, 71, 71, 201, 201, 201, 201, 252, 252, 252, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 234, 234, 234, 234, 135, 135, 135, 135, 20, 20, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 54, 54, 54, 54, 121, 121, 121, 121, 164, 164, 164, 164, 173, 173, 173, 173, 143, 143, 143, 143, 82, 82, 82, 82, 23, 23, 23, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 21, 21, 54, 54, 54, 54, 46, 46, 46, 46, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 19, 19, 19, 19, 32, 32, 32, 32, 34, 34, 34, 34, 25, 25, 25, 25, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 29, 29, 29, 61, 61, 61, 61, 42, 42, 42, 42, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 110, 110, 110, 110, 192, 192, 192, 192, 210, 210, 210, 210, 210, 210, 210, 210, 172, 172, 172, 172, 61, 61, 61, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 133, 133, 133, 133, 200, 200, 200, 200, 212, 212, 212, 212, 208, 208, 208, 208, 158, 158, 158, 158, 37, 37, 37, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 117, 117, 117, 229, 229, 229, 229, 252, 252, 252, 252, 254, 254, 254, 254, 255, 255, 255, 255, 247, 247, 247, 247, 213, 213, 213, 213, 78, 78, 78, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 33, 33, 33, 164, 164, 164, 164, 236, 236, 236, 236, 253, 253, 253, 253, 254, 254, 254, 254, 255, 255, 255, 255, 243, 243, 243, 243, 185, 185, 185, 185, 25, 25, 25, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 30, 30, 227, 227, 227, 227, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 219, 219, 219, 219, 111, 111, 111, 111, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57, 57, 57, 57, 175, 175, 175, 175, 243, 243, 243, 243, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 248, 248, 248, 248, 128, 128, 128, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 82, 82, 82, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 229, 229, 229, 229, 163, 163, 163, 163, 68, 68, 68, 68, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 41, 41, 41, 41, 129, 129, 129, 129, 211, 211, 211, 211, 246, 246, 246, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 194, 194, 194, 194, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 86, 86, 86, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 244, 244, 244, 244, 217, 217, 217, 217, 174, 174, 174, 174, 112, 112, 112, 112, 83, 83, 83, 83, 60, 60, 60, 60, 54, 54, 54, 54, 75, 75, 75, 75, 99, 99, 99, 99, 146, 146, 146, 146, 208, 208, 208, 208, 235, 235, 235, 235, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 202, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 38, 38, 38, 243, 243, 243, 243, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 248, 248, 248, 248, 230, 230, 230, 230, 221, 221, 221, 221, 214, 214, 214, 214, 212, 212, 212, 212, 219, 219, 219, 219, 226, 226, 226, 226, 239, 239, 239, 239, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 138, 138, 138, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 135, 135, 135, 135, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 204, 204, 204, 204, 35, 35, 35, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 152, 152, 152, 152, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 205, 205, 205, 205, 64, 64, 64, 64, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 28, 28, 28, 137, 137, 137, 137, 244, 244, 244, 244, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 194, 194, 194, 194, 62, 62, 62, 62, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 23, 23, 23, 109, 109, 109, 109, 214, 214, 214, 214, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 243, 243, 243, 243, 156, 156, 156, 156, 52, 52, 52, 52, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 70, 70, 70, 137, 137, 137, 137, 159, 159, 159, 159, 136, 136, 136, 136, 63, 63, 63, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 16, 16, 16, 61, 61, 61, 61, 153, 153, 153, 153, 244, 244, 244, 244, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 253, 253, 253, 253, 191, 191, 191, 191, 97, 97, 97, 97, 29, 29, 29, 29, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 31, 31, 31, 117, 117, 117, 117, 157, 157, 157, 157, 154, 154, 154, 154, 104, 104, 104, 104, 21, 21, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 105, 105, 105, 217, 217, 217, 217, 237, 237, 237, 237, 244, 244, 244, 244, 237, 237, 237, 237, 214, 214, 214, 214, 113, 113, 113, 113, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 28, 28, 28, 28, 79, 79, 79, 79, 153, 153, 153, 153, 224, 224, 224, 224, 247, 247, 247, 247, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 252, 252, 252, 252, 240, 240, 240, 240, 186, 186, 186, 186, 106, 106, 106, 106, 41, 41, 41, 41, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 60, 60, 189, 189, 189, 189, 231, 231, 231, 231, 243, 243, 243, 243, 242, 242, 242, 242, 227, 227, 227, 227, 169, 169, 169, 169, 30, 30, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61, 61, 61, 61, 220, 220, 220, 220, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 230, 230, 230, 230, 135, 135, 135, 135, 13, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 28, 28, 28, 28, 56, 56, 56, 56, 110, 110, 110, 110, 154, 154, 154, 154, 198, 198, 198, 198, 216, 216, 216, 216, 223, 223, 223, 223, 228, 228, 228, 228, 230, 230, 230, 230, 225, 225, 225, 225, 220, 220, 220, 220, 207, 207, 207, 207, 168, 168, 168, 168, 129, 129, 129, 129, 80, 80, 80, 80, 38, 38, 38, 38, 14, 14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 75, 75, 203, 203, 203, 203, 250, 250, 250, 250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 245, 245, 245, 245, 135, 135, 135, 135, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 139, 139, 139, 139, 253, 253, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 236, 236, 236, 236, 152, 152, 152, 152, 42, 42, 42, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 16, 16, 16, 16, 29, 29, 29, 29, 43, 43, 43, 43, 63, 63, 63, 63, 75, 75, 75, 75, 82, 82, 82, 82, 84, 84, 84, 84, 77, 77, 77, 77, 69, 69, 69, 69, 51, 51, 51, 51, 33, 33, 33, 33, 21, 21, 21, 21, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 100, 100, 100, 100, 211, 211, 211, 211, 252, 252, 252, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 213, 213, 213, 213, 33, 33, 33, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 172, 172, 172, 172, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 241, 241, 241, 241, 190, 190, 190, 190, 84, 84, 84, 84, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 8, 8, 8, 8, 6, 6, 6, 6, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 41, 41, 41, 154, 154, 154, 154, 226, 226, 226, 226, 253, 253, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 243, 243, 243, 243, 53, 53, 53, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 148, 148, 148, 148, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 249, 249, 249, 249, 222, 222, 222, 222, 151, 151, 151, 151, 50, 50, 50, 50, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 26, 26, 26, 107, 107, 107, 107, 201, 201, 201, 201, 242, 242, 242, 242, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 217, 217, 217, 217, 36, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 64, 64, 64, 230, 230, 230, 230, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 241, 241, 241, 241, 211, 211, 211, 211, 140, 140, 140, 140, 68, 68, 68, 68, 20, 20, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 47, 47, 47, 47, 105, 105, 105, 105, 187, 187, 187, 187, 228, 228, 228, 228, 253, 253, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 140, 140, 140, 140, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 112, 112, 112, 112, 248, 248, 248, 248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 238, 238, 238, 238, 212, 212, 212, 212, 170, 170, 170, 170, 111, 111, 111, 111, 61, 61, 61, 61, 15, 15, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 39, 39, 39, 39, 93, 93, 93, 93, 148, 148, 148, 148, 202, 202, 202, 202, 228, 228, 228, 228, 250, 250, 250, 250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 173, 173, 173, 173, 33, 33, 33, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 18, 18, 18, 106, 106, 106, 106, 231, 231, 231, 231, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 245, 245, 245, 245, 230, 230, 230, 230, 208, 208, 208, 208, 182, 182, 182, 182, 152, 152, 152, 152, 121, 121, 121, 121, 105, 105, 105, 105, 92, 92, 92, 92, 81, 81, 81, 81, 79, 79, 79, 79, 87, 87, 87, 87, 99, 99, 99, 99, 113, 113, 113, 113, 138, 138, 138, 138, 173, 173, 173, 173, 195, 195, 195, 195, 224, 224, 224, 224, 240, 240, 240, 240, 252, 252, 252, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 159, 159, 159, 159, 38, 38, 38, 38, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15, 15, 15, 80, 80, 80, 80, 213, 213, 213, 213, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 253, 253, 253, 253, 249, 249, 249, 249, 242, 242, 242, 242, 233, 233, 233, 233, 228, 228, 228, 228, 224, 224, 224, 224, 221, 221, 221, 221, 220, 220, 220, 220, 223, 223, 223, 223, 226, 226, 226, 226, 230, 230, 230, 230, 238, 238, 238, 238, 247, 247, 247, 247, 251, 251, 251, 251, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 247, 247, 247, 247, 145, 145, 145, 145, 30, 30, 30, 30, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 75, 75, 75, 75, 86, 86, 86, 86, 48, 48, 48, 48, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 66, 66, 66, 66, 177, 177, 177, 177, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 216, 216, 216, 216, 100, 100, 100, 100, 26, 26, 26, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 76, 76, 76, 76, 89, 89, 89, 89, 49, 49, 49, 49, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 84, 84, 84, 84, 184, 184, 184, 184, 218, 218, 218, 218, 222, 222, 222, 222, 200, 200, 200, 200, 131, 131, 131, 131, 16, 16, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 36, 36, 36, 36, 122, 122, 122, 122, 227, 227, 227, 227, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 249, 249, 249, 249, 167, 167, 167, 167, 68, 68, 68, 68, 13, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 89, 89, 89, 89, 182, 182, 182, 182, 218, 218, 218, 218, 223, 223, 223, 223, 203, 203, 203, 203, 132, 132, 132, 132, 15, 15, 15, 15, 56, 56, 56, 56, 221, 221, 221, 221, 249, 249, 249, 249, 255, 255, 255, 255, 255, 255, 255, 255, 252, 252, 252, 252, 235, 235, 235, 235, 161, 161, 161, 161, 26, 26, 26, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 19, 19, 19, 70, 70, 70, 70, 171, 171, 171, 171, 245, 245, 245, 245, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 214, 214, 214, 214, 101, 101, 101, 101, 32, 32, 32, 32, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 100, 100, 100, 100, 223, 223, 223, 223, 248, 248, 248, 248, 255, 255, 255, 255, 255, 255, 255, 255, 252, 252, 252, 252, 235, 235, 235, 235, 137, 137, 137, 137, 170, 170, 170, 170, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 243, 243, 243, 243, 181, 181, 181, 181, 46, 46, 46, 46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 33, 33, 33, 33, 95, 95, 95, 95, 179, 179, 179, 179, 238, 238, 238, 238, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 246, 246, 246, 246, 210, 210, 210, 210, 132, 132, 132, 132, 51, 51, 51, 51, 13, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 13, 13, 118, 118, 118, 118, 226, 226, 226, 226, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 229, 229, 229, 229, 230, 230, 230, 230, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 248, 248, 248, 248, 192, 192, 192, 192, 79, 79, 79, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 36, 36, 36, 36, 90, 90, 90, 90, 159, 159, 159, 159, 215, 215, 215, 215, 253, 253, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 231, 231, 231, 231, 184, 184, 184, 184, 119, 119, 119, 119, 49, 49, 49, 49, 22, 22, 22, 22, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 33, 33, 33, 152, 152, 152, 152, 231, 231, 231, 231, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 238, 238, 238, 238, 234, 234, 234, 234, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 250, 250, 250, 250, 216, 216, 216, 216, 119, 119, 119, 119, 22, 22, 22, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 30, 30, 30, 30, 60, 60, 60, 60, 105, 105, 105, 105, 171, 171, 171, 171, 217, 217, 217, 217, 250, 250, 250, 250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 232, 232, 232, 232, 188, 188, 188, 188, 136, 136, 136, 136, 76, 76, 76, 76, 41, 41, 41, 41, 19, 19, 19, 19, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 75, 75, 187, 187, 187, 187, 240, 240, 240, 240, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 241, 241, 241, 241, 164, 164, 164, 164, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 232, 232, 232, 232, 178, 178, 178, 178, 58, 58, 58, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 14, 14, 14, 14, 34, 34, 34, 34, 51, 51, 51, 51, 83, 83, 83, 83, 134, 134, 134, 134, 164, 164, 164, 164, 186, 186, 186, 186, 216, 216, 216, 216, 232, 232, 232, 232, 236, 236, 236, 236, 236, 236, 236, 236, 237, 237, 237, 237, 236, 236, 236, 236, 234, 234, 234, 234, 224, 224, 224, 224, 199, 199, 199, 199, 173, 173, 173, 173, 149, 149, 149, 149, 101, 101, 101, 101, 59, 59, 59, 59, 40, 40, 40, 40, 23, 23, 23, 23, 7, 7, 7, 7, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 31, 31, 31, 133, 133, 133, 133, 219, 219, 219, 219, 249, 249, 249, 249, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 238, 238, 238, 238, 53, 53, 53, 53, 220, 220, 220, 220, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 247, 247, 247, 247, 210, 210, 210, 210, 129, 129, 129, 129, 41, 41, 41, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 8, 8, 8, 8, 22, 22, 22, 22, 31, 31, 31, 31, 38, 38, 38, 38, 47, 47, 47, 47, 66, 66, 66, 66, 80, 80, 80, 80, 83, 83, 83, 83, 84, 84, 84, 84, 81, 81, 81, 81, 74, 74, 74, 74, 53, 53, 53, 53, 41, 41, 41, 41, 34, 34, 34, 34, 27, 27, 27, 27, 13, 13, 13, 13, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 20, 20, 20, 90, 90, 90, 90, 182, 182, 182, 182, 236, 236, 236, 236, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 248, 248, 248, 248, 128, 128, 128, 128, 6, 6, 6, 6, 74, 74, 74, 74, 216, 216, 216, 216, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 235, 235, 235, 235, 194, 194, 194, 194, 123, 123, 123, 123, 41, 41, 41, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 14, 14, 14, 91, 91, 91, 91, 167, 167, 167, 167, 223, 223, 223, 223, 248, 248, 248, 248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 242, 242, 242, 242, 132, 132, 132, 132, 22, 22, 22, 22, 0, 0, 0, 0, 8, 8, 8, 8, 64, 64, 64, 64, 193, 193, 193, 193, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 251, 251, 251, 251, 233, 233, 233, 233, 198, 198, 198, 198, 133, 133, 133, 133, 56, 56, 56, 56, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 29, 29, 29, 29, 106, 106, 106, 106, 174, 174, 174, 174, 221, 221, 221, 221, 244, 244, 244, 244, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 238, 238, 238, 238, 110, 110, 110, 110, 22, 22, 22, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 42, 42, 42, 42, 165, 165, 165, 165, 250, 250, 250, 250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 252, 252, 252, 252, 236, 236, 236, 236, 213, 213, 213, 213, 160, 160, 160, 160, 102, 102, 102, 102, 41, 41, 41, 41, 16, 16, 16, 16, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 30, 30, 30, 30, 78, 78, 78, 78, 138, 138, 138, 138, 200, 200, 200, 200, 228, 228, 228, 228, 247, 247, 247, 247, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 217, 217, 217, 217, 93, 93, 93, 93, 16, 16, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 33, 33, 33, 33, 135, 135, 135, 135, 242, 242, 242, 242, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 244, 244, 244, 244, 227, 227, 227, 227, 205, 205, 205, 205, 163, 163, 163, 163, 115, 115, 115, 115, 74, 74, 74, 74, 49, 49, 49, 49, 27, 27, 27, 27, 12, 12, 12, 12, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 22, 22, 22, 22, 39, 39, 39, 39, 64, 64, 64, 64, 93, 93, 93, 93, 145, 145, 145, 145, 188, 188, 188, 188, 220, 220, 220, 220, 237, 237, 237, 237, 253, 253, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 252, 252, 252, 252, 179, 179, 179, 179, 59, 59, 59, 59, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 23, 23, 23, 90, 90, 90, 90, 198, 198, 198, 198, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 244, 244, 244, 244, 230, 230, 230, 230, 219, 219, 219, 219, 199, 199, 199, 199, 175, 175, 175, 175, 160, 160, 160, 160, 137, 137, 137, 137, 110, 110, 110, 110, 94, 94, 94, 94, 89, 89, 89, 89, 85, 85, 85, 85, 84, 84, 84, 84, 87, 87, 87, 87, 92, 92, 92, 92, 101, 101, 101, 101, 126, 126, 126, 126, 152, 152, 152, 152, 170, 170, 170, 170, 188, 188, 188, 188, 214, 214, 214, 214, 224, 224, 224, 224, 239, 239, 239, 239, 250, 250, 250, 250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 235, 235, 235, 235, 134, 134, 134, 134, 42, 42, 42, 42, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 48, 48, 48, 48, 146, 146, 146, 146, 237, 237, 237, 237, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 251, 251, 251, 251, 246, 246, 246, 246, 243, 243, 243, 243, 238, 238, 238, 238, 230, 230, 230, 230, 225, 225, 225, 225, 224, 224, 224, 224, 223, 223, 223, 223, 222, 222, 222, 222, 223, 223, 223, 223, 225, 225, 225, 225, 227, 227, 227, 227, 234, 234, 234, 234, 242, 242, 242, 242, 245, 245, 245, 245, 249, 249, 249, 249, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 191, 191, 191, 191, 73, 73, 73, 73, 22, 22, 22, 22, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 26, 26, 26, 26, 81, 81, 81, 81, 189, 189, 189, 189, 246, 246, 246, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 215, 215, 215, 215, 123, 123, 123, 123, 39, 39, 39, 39, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 38, 38, 38, 38, 108, 108, 108, 108, 196, 196, 196, 196, 251, 251, 251, 251, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 223, 223, 223, 223, 139, 139, 139, 139, 61, 61, 61, 61, 19, 19, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15, 15, 15, 45, 45, 45, 45, 113, 113, 113, 113, 189, 189, 189, 189, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 222, 222, 222, 222, 137, 137, 137, 137, 66, 66, 66, 66, 24, 24, 24, 24, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 16, 16, 16, 16, 40, 40, 40, 40, 97, 97, 97, 97, 167, 167, 167, 167, 227, 227, 227, 227, 253, 253, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 244, 244, 244, 244, 195, 195, 195, 195, 121, 121, 121, 121, 55, 55, 55, 55, 23, 23, 23, 23, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 12, 12, 12, 12, 32, 32, 32, 32, 67, 67, 67, 67, 126, 126, 126, 126, 176, 176, 176, 176, 224, 224, 224, 224, 251, 251, 251, 251, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 253, 253, 253, 253, 235, 235, 235, 235, 200, 200, 200, 200, 149, 149, 149, 149, 88, 88, 88, 88, 40, 40, 40, 40, 18, 18, 18, 18, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 20, 20, 20, 20, 35, 35, 35, 35, 72, 72, 72, 72, 112, 112, 112, 112, 151, 151, 151, 151, 186, 186, 186, 186, 228, 228, 228, 228, 251, 251, 251, 251, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 239, 239, 239, 239, 201, 201, 201, 201, 164, 164, 164, 164, 127, 127, 127, 127, 89, 89, 89, 89, 46, 46, 46, 46, 26, 26, 26, 26, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 16, 16, 16, 16, 27, 27, 27, 27, 41, 41, 41, 41, 71, 71, 71, 71, 88, 88, 88, 88, 118, 118, 118, 118, 156, 156, 156, 156, 182, 182, 182, 182, 194, 194, 194, 194, 205, 205, 205, 205, 218, 218, 218, 218, 229, 229, 229, 229, 235, 235, 235, 235, 237, 237, 237, 237, 232, 232, 232, 232, 225, 225, 225, 225, 211, 211, 211, 211, 200, 200, 200, 200, 187, 187, 187, 187, 169, 169, 169, 169, 134, 134, 134, 134, 97, 97, 97, 97, 79, 79, 79, 79, 52, 52, 52, 52, 31, 31, 31, 31, 20, 20, 20, 20, 11, 11, 11, 11, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
        width: 68,
        height: 52
      };
      var tex_lamp = {
        picData: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 39, 39, 39, 168, 168, 168, 168, 241, 241, 241, 241, 248, 248, 248, 248, 246, 246, 246, 246, 246, 246, 246, 246, 246, 246, 246, 246, 246, 246, 246, 246, 246, 246, 246, 246, 246, 246, 246, 246, 248, 248, 248, 248, 230, 230, 230, 230, 130, 130, 130, 130, 11, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 21, 21, 173, 173, 173, 173, 235, 235, 235, 235, 252, 252, 252, 252, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 253, 249, 249, 249, 249, 226, 226, 226, 226, 127, 127, 127, 127, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 104, 104, 104, 245, 245, 245, 245, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 233, 233, 233, 233, 44, 44, 44, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 164, 164, 164, 164, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 177, 177, 177, 177, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 102, 102, 102, 102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 176, 176, 176, 176, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 102, 102, 102, 102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 176, 176, 176, 176, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 102, 102, 102, 102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 177, 177, 177, 177, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 104, 104, 104, 104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 171, 171, 171, 171, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 97, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 117, 117, 117, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 249, 249, 249, 249, 52, 52, 52, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 30, 30, 194, 194, 194, 194, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 253, 253, 253, 253, 148, 148, 148, 148, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 49, 49, 49, 49, 147, 147, 147, 147, 198, 198, 198, 198, 203, 203, 203, 203, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 203, 203, 203, 203, 190, 190, 190, 190, 118, 118, 118, 118, 27, 27, 27, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 26, 26, 26, 26, 42, 42, 42, 42, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 39, 39, 39, 39, 18, 18, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 48, 48, 48, 48, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 48, 48, 48, 48, 48, 48, 48, 48, 22, 22, 22, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 83, 83, 83, 194, 194, 194, 194, 204, 204, 204, 204, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 204, 204, 204, 204, 190, 190, 190, 190, 73, 73, 73, 73, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 205, 205, 205, 205, 252, 252, 252, 252, 253, 253, 253, 253, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 253, 253, 253, 253, 251, 251, 251, 251, 189, 189, 189, 189, 19, 19, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 41, 41, 41, 250, 250, 250, 250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 242, 242, 242, 242, 33, 33, 33, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 54, 54, 54, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 253, 253, 253, 253, 40, 40, 40, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 70, 70, 70, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 51, 51, 51, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 99, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 82, 82, 82, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 138, 138, 138, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 121, 121, 121, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 184, 184, 184, 184, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 173, 173, 173, 173, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 13, 13, 229, 229, 229, 229, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 224, 224, 224, 224, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 62, 62, 62, 247, 247, 247, 247, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 246, 246, 246, 246, 57, 57, 57, 57, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 130, 130, 130, 253, 253, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 253, 253, 253, 253, 131, 131, 131, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 191, 191, 191, 191, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 192, 192, 192, 192, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 58, 58, 58, 233, 233, 233, 233, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 237, 237, 237, 237, 65, 65, 65, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 127, 127, 127, 252, 252, 252, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 253, 253, 253, 253, 136, 136, 136, 136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 196, 196, 196, 196, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 209, 209, 209, 209, 32, 32, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 80, 80, 80, 245, 245, 245, 245, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 248, 248, 248, 248, 94, 94, 94, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 175, 175, 175, 175, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 193, 193, 193, 193, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61, 61, 61, 61, 242, 242, 242, 242, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 246, 246, 246, 246, 80, 80, 80, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 166, 166, 166, 166, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 185, 185, 185, 185, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 72, 236, 236, 236, 236, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 244, 244, 244, 244, 87, 87, 87, 87, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 172, 172, 172, 172, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 183, 183, 183, 183, 16, 16, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 82, 82, 82, 82, 241, 241, 241, 241, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 243, 243, 243, 243, 86, 86, 86, 86, 0, 0, 0, 0, 18, 18, 18, 18, 180, 180, 180, 180, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 180, 180, 180, 180, 17, 17, 17, 17, 61, 61, 61, 61, 243, 243, 243, 243, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 243, 243, 243, 243, 60, 60, 60, 60, 125, 125, 125, 125, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 127, 127, 127, 127, 182, 182, 182, 182, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 184, 184, 184, 184, 220, 220, 220, 220, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 241, 241, 241, 241, 243, 243, 243, 243, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 222, 222, 222, 222, 242, 242, 242, 242, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 249, 249, 249, 249, 153, 153, 153, 153, 85, 85, 85, 85, 93, 93, 93, 93, 179, 179, 179, 179, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 242, 242, 242, 242, 246, 246, 246, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 196, 196, 196, 196, 28, 28, 28, 28, 9, 9, 9, 9, 11, 11, 11, 11, 64, 64, 64, 64, 230, 230, 230, 230, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 246, 246, 246, 246, 243, 243, 243, 243, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 146, 146, 146, 146, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 28, 28, 28, 209, 209, 209, 209, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 242, 242, 242, 242, 221, 221, 221, 221, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 106, 106, 106, 106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 35, 35, 35, 221, 221, 221, 221, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 222, 222, 222, 222, 185, 185, 185, 185, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 249, 249, 249, 249, 45, 45, 45, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 53, 53, 53, 248, 248, 248, 248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 187, 187, 187, 187, 132, 132, 132, 132, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 165, 165, 165, 165, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 103, 103, 103, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 137, 137, 137, 137, 71, 71, 71, 71, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 210, 210, 210, 210, 48, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 191, 191, 191, 191, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 78, 78, 78, 78, 27, 27, 27, 27, 208, 208, 208, 208, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 181, 181, 181, 181, 65, 65, 65, 65, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 82, 82, 82, 245, 245, 245, 245, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 218, 218, 218, 218, 33, 33, 33, 33, 4, 4, 4, 4, 127, 127, 127, 127, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 247, 247, 247, 247, 226, 226, 226, 226, 204, 204, 204, 204, 164, 164, 164, 164, 99, 99, 99, 99, 39, 39, 39, 39, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 31, 31, 31, 200, 200, 200, 200, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 144, 144, 144, 144, 5, 5, 5, 5, 0, 0, 0, 0, 43, 43, 43, 43, 217, 217, 217, 217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 244, 244, 244, 244, 120, 120, 120, 120, 48, 48, 48, 48, 42, 42, 42, 42, 31, 31, 31, 31, 12, 12, 12, 12, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 16, 16, 16, 160, 160, 160, 160, 249, 249, 249, 249, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 229, 229, 229, 229, 61, 61, 61, 61, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 123, 123, 123, 123, 252, 252, 252, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 176, 176, 176, 176, 20, 20, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 26, 26, 26, 153, 153, 153, 153, 241, 241, 241, 241, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 150, 150, 150, 150, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 22, 22, 22, 182, 182, 182, 182, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 154, 154, 154, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 74, 74, 74, 74, 181, 181, 181, 181, 241, 241, 241, 241, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 210, 210, 210, 210, 36, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 52, 52, 52, 214, 214, 214, 214, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 212, 212, 212, 212, 49, 49, 49, 49, 3, 3, 3, 3, 8, 8, 8, 8, 16, 16, 16, 16, 31, 31, 31, 31, 77, 77, 77, 77, 159, 159, 159, 159, 220, 220, 220, 220, 248, 248, 248, 248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 233, 233, 233, 233, 78, 78, 78, 78, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 73, 73, 73, 73, 221, 221, 221, 221, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 249, 249, 249, 249, 197, 197, 197, 197, 139, 139, 139, 139, 141, 141, 141, 141, 165, 165, 165, 165, 202, 202, 202, 202, 221, 221, 221, 221, 243, 243, 243, 243, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 236, 236, 236, 236, 101, 101, 101, 101, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 77, 77, 77, 77, 215, 215, 215, 215, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 251, 251, 251, 251, 238, 238, 238, 238, 238, 238, 238, 238, 244, 244, 244, 244, 253, 253, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 231, 231, 231, 231, 98, 98, 98, 98, 14, 14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 61, 61, 61, 61, 183, 183, 183, 183, 252, 252, 252, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 200, 200, 200, 200, 76, 76, 76, 76, 13, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 37, 37, 37, 37, 126, 126, 126, 126, 219, 219, 219, 219, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 223, 223, 223, 223, 139, 139, 139, 139, 44, 44, 44, 44, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 20, 20, 20, 65, 65, 65, 65, 138, 138, 138, 138, 204, 204, 204, 204, 250, 250, 250, 250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 250, 250, 250, 250, 206, 206, 206, 206, 141, 141, 141, 141, 68, 68, 68, 68, 23, 23, 23, 23, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 23, 23, 23, 23, 52, 52, 52, 52, 94, 94, 94, 94, 141, 141, 141, 141, 187, 187, 187, 187, 219, 219, 219, 219, 241, 241, 241, 241, 249, 249, 249, 249, 249, 249, 249, 249, 240, 240, 240, 240, 217, 217, 217, 217, 185, 185, 185, 185, 140, 140, 140, 140, 94, 94, 94, 94, 52, 52, 52, 52, 24, 24, 24, 24, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
        width: 36,
        height: 63
      };

      function getFrame(data) {
        var img = new ImageAsset();
        img.reset({
          _data: data.picData,
          width: data.width,
          height: data.height,
          format: Texture2D.PixelFormat.RGBA8888,
          _compressed: false
        });
        var tex = new Texture2D();
        tex.image = img;
        var sf = new SpriteFrame();
        sf.texture = tex;
        sf.packable = false;
        return sf;
      }

      var frame_splash = null;

      function getSplashFrame() {
        if (frame_splash == null) {
          frame_splash = getFrame(tex_splash);
        }

        return frame_splash;
      }

      var frame_power = null;
      var frame_wifi = null;
      var frame_lamp = null;

      function getFrameExtra(type) {
        if (type == TileType.lamp) {
          if (frame_lamp == null) {
            frame_lamp = getFrame(tex_lamp);
          }

          return frame_lamp;
        } else if (type == TileType.wifi) {
          if (frame_wifi == null) {
            frame_wifi = getFrame(tex_wifi);
          }

          return frame_wifi;
        } else if (type == TileType.power) {
          if (frame_power == null) {
            frame_power = getFrame(tex_power);
          }

          return frame_power;
        }
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tile.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './helper.ts', './node_tween_helper.ts', './shape.ts', './tex_const.ts', './audio_player.ts', './plat_util.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Enum, Node, Color, Tween, tween, UITransform, size, Sprite, log, color, Component, TileType, TileShape, _helper, NodeTweenHelper, Shape, getFrameExtra, _audioPlayer, _AudioCfg, _plat;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Node = module.Node;
      Color = module.Color;
      Tween = module.Tween;
      tween = module.tween;
      UITransform = module.UITransform;
      size = module.size;
      Sprite = module.Sprite;
      log = module.log;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      TileType = module.TileType;
      TileShape = module.TileShape;
      _helper = module._helper;
    }, function (module) {
      NodeTweenHelper = module.NodeTweenHelper;
    }, function (module) {
      Shape = module.Shape;
    }, function (module) {
      getFrameExtra = module.getFrameExtra;
    }, function (module) {
      _audioPlayer = module._audioPlayer;
      _AudioCfg = module._AudioCfg;
    }, function (module) {
      _plat = module._plat;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;

      cclegacy._RF.push({}, "d6e43aoIM1Etqxfpdh+Zk22", "tile", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executeInEditMode = _decorator.executeInEditMode;
      var Tile = exports('Tile', (_dec = ccclass("tile"), _dec2 = executeInEditMode(), _dec3 = property({
        type: Enum(TileType),
        serializable: true
      }), _dec4 = property({
        step: 1
      }), _dec5 = property({
        tooltip: "突触形状"
      }), _dec6 = property({
        tooltip: "缺口的idx,下标从1开始， 0表示没有缺口 ",
        step: 1,
        min: 0
      }), _dec7 = property({
        type: Enum(TileShape),
        serializable: true
      }), _dec8 = property({
        type: Shape
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Shape
      }), _dec11 = property({
        type: Shape
      }), _dec12 = property({
        type: Color
      }), _dec13 = property({
        type: Color
      }), _dec14 = property({
        tooltip: "是否显示调试外框"
      }), _dec15 = property({
        tooltip: "是否是点亮状态"
      }), _dec16 = property({
        tooltip: "圆心到边的距离"
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Tile, _Component);

        function Tile() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_tileType", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_value", _descriptor2, _assertThisInitialized(_this));
          /**突触形状 */


          _initializerDefineProperty(_this, "_strVal", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_gapIdx", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_tileShape", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_forceCircle", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_debugBorder", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_shapeNode", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_shapeOn", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_shapeOff", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_strokeColor", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_offColor", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_showBorder", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isOnLight", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_radius", _descriptor15, _assertThisInitialized(_this));

          _this._angle = 0;
          /**所在的行 */

          _this.row = 0;
          /**所在的列 */

          _this.col = 0;
          return _this;
        }

        var _proto = Tile.prototype;

        _proto.setIsOnWithAnim = function setIsOnWithAnim(bool) {
          var _this2 = this;

          if (this._tileType == TileType.power) {
            this.isOnLight = bool;
            return;
          }

          if (this._isOnLight == bool) {
            return;
          }

          this._isOnLight = bool;
          Tween.stopAllByTarget(this.shapeOn);
          Tween.stopAllByTarget(this.shapeOff);
          tween(this.shapeOn).to(0.1, {
            opacity: this._isOnLight ? 255 : 0
          }, {
            onUpdate: function onUpdate() {
              _this2._shapeOn.node.angle = 0;
            }
          }).start();
          tween(this.shapeOff).to(0.1, {
            opacity: !this._isOnLight ? 255 : 0
          }, {
            onUpdate: function onUpdate() {
              _this2.shapeOff.node.angle = 0;
            }
          }).start();
        };

        _proto.doDisrupt = function doDisrupt() {
          if (this.tileType == TileType.power) {
            return;
          }

          var delta = _helper.getAngleDeltaByType(this.tileShape);

          this.angle = delta * Math.floor(Math.random() * (360 / delta));
        };

        _proto.onLoad = function onLoad() {
          var trans = this.getComponent(UITransform);

          if (trans == null) {
            trans = this.addComponent(UITransform);
          }

          trans = this.shapeOff.getComponent(UITransform);

          if (trans == null) {
            this.shapeOff.addComponent(UITransform);
          }

          trans = this.shapeOn.getComponent(UITransform);

          if (trans == null) {
            this.shapeOn.addComponent(UITransform);
          }

          trans = this.debugBorder.getComponent(UITransform);

          if (trans == null) {
            this.debugBorder.addComponent(UITransform);
          }

          this._updateFrame();

          this._shapeOn.node.setSiblingIndex(1);

          this._shapeOn.opacity = this._isOnLight ? 255 : 0;
          this._shapeOff.opacity = !this._isOnLight ? 255 : 0;
          this.node.on(Node.EventType.TOUCH_START, this._onClick, this);
        };

        _proto.start = function start() {
          this._debugBorder._paint();

          this._shapeOn._paint();
        };

        _proto.offClick = function offClick() {
          this.node.off(Node.EventType.TOUCH_START, this._onClick, this);
        };

        _proto.init = function init(param) {
          this._value = param.value;
          this._tileShape = param.board.tileShape;
          this._tileType = param.tileType;
          this.angle = param.angle || 0;
          this._isOnLight = this.tileType == TileType.power;
          this._strVal = _helper.getStrValOfVlaue(this._value, this._tileShape);
          this._gapIdx = param.gapIdx || 0;
          this._forceCircle = param.forceCircle || false;

          this._updateFrame();
        };

        _proto.setValue = function setValue(value) {
          this._value = value;

          this._updateFrame();
        };

        _proto.getStrValWithAngle = function getStrValWithAngle() {
          var times = this._angle / _helper.getAngleDeltaByType(this.tileShape);

          var str = _helper.roatateStrVal(this._strVal, times < 0, Math.abs(times));

          return str;
        };

        _proto.isLamp = function isLamp() {
          return this.tileType == TileType.lamp;
        };

        _proto.isPower = function isPower() {
          return this.tileType == TileType.power;
        };

        _proto.isWifi = function isWifi() {
          return this.tileType == TileType.wifi;
        };

        _proto._updateFrame = function _updateFrame() {
          var contentSize = size(this.radius * 2, this.radius * 2);

          if (this.tileShape == TileShape.six) {
            contentSize.width *= 2 / 1.732;
          }

          var trans = this.getComponent(UITransform);

          if (trans) {
            trans.setContentSize(contentSize);
          }

          trans = this.shapeOn.getComponent(UITransform);

          if (trans) {
            trans.setContentSize(contentSize);
          }

          trans = this.shapeOff.getComponent(UITransform);

          if (trans) {
            trans.setContentSize(contentSize);
          }

          trans = this.debugBorder.getComponent(UITransform);

          if (trans) {
            trans.setContentSize(contentSize);
          }

          this._shapeOn.radius = this._radius;
          this._shapeOff.radius = this._radius;
          this._debugBorder.radius = this._radius - 0;
          this._debugBorder.strokeColor = Color.WHITE;
          this._debugBorder.lineWidth = 4.5;
          this._shapeOn.strokeColor = this._strokeColor;
          this._shapeOff.strokeColor = this._offColor;
          this._shapeOn.lineWidth = 11;
          this._shapeOff.lineWidth = 7.5;
          this._shapeOn.node.getChildByName("extraImg").getComponent(Sprite).spriteFrame = getFrameExtra(this.tileType);
          this._shapeOn.borderNum = this.tileShape;
          this._shapeOn.strVal = this.strVal;
          this._shapeOff.node.getChildByName("extraImg").getComponent(Sprite).spriteFrame = getFrameExtra(this.tileType);
          this._shapeOff.borderNum = this.tileShape;
          this._shapeOff.strVal = this.strVal;
          this._shapeOff.node.getChildByName("extraImg").getComponent(Sprite).color = this._offColor;
          this._debugBorder.borderNum = this.tileShape;
          this._shapeOn.gapIdx = this._gapIdx;
          this._shapeOff.gapIdx = this._gapIdx;
          this._shapeOn.forceCircle = this._forceCircle;
          this._shapeOff.forceCircle = this._forceCircle;
        };

        _proto._onClick = function _onClick() {
          this.doRoatate();
        };

        _proto.doRoatate = /*#__PURE__*/function () {
          var _doRoatate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this3 = this;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(this._shapeOn == null)) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  if (!(this.value == 0)) {
                    _context.next = 4;
                    break;
                  }

                  return _context.abrupt("return");

                case 4:
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    var _audioPlayer3;

                    var angle = _this3._angle - _helper.getAngleDeltaByType(_this3.tileShape);

                    var dur = 0.08;

                    var _tw = NodeTweenHelper.create(_this3._shapeNode).getTween().stop();

                    if (_this3.tileType == TileType.power) {
                      var _audioPlayer2;

                      _tw.to(dur * 0.32, {
                        angle: _this3._angle - 6
                      }).to(dur * 0.32, {
                        angle: _this3._angle
                      }).to(dur * 0.32, {
                        angle: _this3._angle + 6
                      }).to(dur * 0.32, {
                        angle: _this3._angle
                      }).call(function () {
                        resolve(angle);
                      }).start();

                      _plat.vibrate(0.06);

                      (_audioPlayer2 = _audioPlayer()) == null ? void 0 : _audioPlayer2.playEffect(_AudioCfg.nonRoatable);
                      return;
                    }

                    (_audioPlayer3 = _audioPlayer()) == null ? void 0 : _audioPlayer3.playEffect(_AudioCfg.roatates);

                    _plat.vibrate(0.01);

                    _tw.call(function () {
                      _this3._angle = angle;

                      _this3.node.emit("onClickRoateEvent", _this3, "event-start");
                    }).to(dur, {
                      angle: angle
                    }).call(function () {
                      _this3.angle = angle;

                      _this3.node.emit("onClickRoateEvent", _this3, "event-end");

                      resolve(angle);
                    }).start();
                  }));

                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function doRoatate() {
            return _doRoatate.apply(this, arguments);
          }

          return doRoatate;
        }();

        _proto.unuse = function unuse() {
          log("------保存");
        };

        _proto.reuse = function reuse() {
          log("-----宠用");
          this.clear();
        };

        _proto.clear = function clear() {
          this._value = 0;
          this.angle = 0;
          this._isOnLight = false;
          this.shapeOff.clear();
          this.shapeOn.clear();
          this._shapeOff.node.getChildByName("extraImg").getComponent(Sprite).spriteFrame = null;
          this._shapeOn.node.getChildByName("extraImg").getComponent(Sprite).spriteFrame = null;
          this.strVal = "";
          this._shapeOn.opacity = this._isOnLight ? 255 : 0;
          this._shapeOff.opacity = !this._isOnLight ? 255 : 0;
        };

        _createClass(Tile, [{
          key: "tileType",
          get: function get() {
            return this._tileType;
          },
          set: function set(val) {
            if (val == TileType.normal && this._tileType != TileType.normal) ;
            this._tileType = val;

            this._updateFrame();

            this.isOnLight = this.isOnLight;
          }
        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(val) {
            this._value = val;
            this._strVal = _helper.getStrValOfVlaue(this._value, this._tileShape);

            this._updateFrame();
          }
        }, {
          key: "strVal",
          get: function get() {
            return this._strVal;
          },
          set: function set(val) {
            while (val.length < this._tileShape) {
              val = "0" + val;
            }

            while (val.length > this._tileShape) {
              val = val.substring(0, this._tileShape);
            }

            this._strVal = val;
            this.shapeOn.strVal = val;
            this.shapeOff.strVal = val;
            this._value = parseInt(this._strVal, 2);
          }
        }, {
          key: "gapIdx",
          get: //缺口下标从1开始， 0表示没有缺口 
          function get() {
            return this._gapIdx;
          },
          set: function set(val) {
            var sideLen = 0;

            for (var i = 0; i < this._strVal.length; i++) {
              var c = this._strVal[i];

              if (c == "1") {
                sideLen++;
              }
            }

            if (sideLen <= 2) {
              val = 0;
            } else {
              if (val < 0) {
                val = 0;
              } else if (val == sideLen + 1) {
                val = 0;
              } else if (val > sideLen) {
                val = val % sideLen;
              }
            }

            this._gapIdx = val;
            this.shapeOn.gapIdx = val;
            this.shapeOff.gapIdx = val;
          }
        }, {
          key: "tileShape",
          get: function get() {
            return this._tileShape;
          },
          set: function set(val) {
            this._tileShape = val;

            this._updateFrame();
          }
        }, {
          key: "forceCircle",
          get: function get() {
            return this._forceCircle;
          },
          set: function set(val) {
            this._forceCircle = val;

            this._updateFrame();
          }
        }, {
          key: "debugBorder",
          get: function get() {
            if (this.node.getChildByName("debugBorder") != null) {
              this._debugBorder = this.node.getChildByName("debugBorder").getComponent(Shape);
            } else {
              this._debugBorder = new Node("debugBorder").addComponent(Shape);
              this._debugBorder.node.parent = this.node;
            }

            return this._debugBorder;
          },
          set: function set(val) {
            this._debugBorder = val;
          }
        }, {
          key: "shapeNode",
          get: function get() {
            if (this.node.getChildByName("shapeNode") != null) {
              this._shapeNode = this.node.getChildByName("shapeNode");
            } else {
              this._shapeNode = new Node("shapeNode");
              this._shapeNode.parent = this.node;
            }

            return this._shapeNode;
          },
          set: function set(val) {
            this._shapeNode = val;
          }
        }, {
          key: "shapeOn",
          get: function get() {
            if (this.shapeNode.getChildByName("shapeOn") != null) {
              this._shapeOn = this.shapeNode.getChildByName("shapeOn").getComponent(Shape);
            } else {
              this._shapeOn = new Node("shapeOn").addComponent(Shape);
              this._shapeOn.node.parent = this.shapeNode;
              var extraImg = new Node("extraImg").addComponent(Sprite);
              extraImg.node.parent = this._shapeOn.node;
            }

            return this._shapeOn;
          },
          set: function set(val) {
            this._shapeOn = val;
          }
        }, {
          key: "shapeOff",
          get: function get() {
            if (this.shapeNode.getChildByName("shapeOff") != null) {
              this._shapeOff = this.shapeNode.getChildByName("shapeOff").getComponent(Shape);
            } else {
              this._shapeOff = new Node("shapeOff").addComponent(Shape);
              this._shapeOff.node.parent = this.shapeNode;
              var extraImg = new Node("extraImg").addComponent(Sprite);
              extraImg.node.parent = this._shapeOff.node;
            }

            return this._shapeOff;
          },
          set: function set(val) {
            this._shapeOff = val;
          }
        }, {
          key: "strokeColor",
          get: function get() {
            return this._strokeColor;
          },
          set: function set(val) {
            this._strokeColor = val;

            if (this._shapeOn && this._shapeOn.node.active) {
              this._shapeOn.strokeColor = val;

              this._shapeOn._paint();
            }
          }
        }, {
          key: "offColor",
          get: function get() {
            return this._offColor;
          },
          set: function set(val) {
            this._offColor = val;

            if (this._shapeOff && this._shapeOff.node.active) {
              this._shapeOff.strokeColor = val;
              this._shapeOff.node.getChildByName("extraImg").getComponent(Sprite).color = this._offColor;

              this._shapeOff._paint();
            }
          }
        }, {
          key: "showBorder",
          get: function get() {
            return this._showBorder;
          },
          set: function set(val) {
            this._showBorder = val;

            if (this._debugBorder) {
              this._debugBorder.showBorder = val;
            }
          }
        }, {
          key: "isOnLight",
          get: function get() {
            if (this._tileType == TileType.power) {
              return true;
            }

            return this._isOnLight;
          },
          set: function set(val) {
            if (this._tileType == TileType.power) {
              this._isOnLight = true;
              this._shapeOn.opacity = this._isOnLight ? 255 : 0;
              this._shapeOff.opacity = !this._isOnLight ? 255 : 0;
              return;
            }

            this._isOnLight = val;

            this.shapeOn._paint();

            Tween.stopAllByTarget(this.shapeOn);
            Tween.stopAllByTarget(this.shapeOff);
            this._shapeOn.opacity = this._isOnLight ? 255 : 0;
            this._shapeOff.opacity = !this._isOnLight ? 255 : 0;
            this._shapeOn.node.angle = 0;
            this.shapeOff.node.angle = 0;
          }
        }, {
          key: "radius",
          get: function get() {
            return this._radius;
          },
          set: function set(val) {
            this._radius = val;

            this._updateFrame();
          }
        }, {
          key: "angle",
          get: function get() {
            return this._angle;
          },
          set: function set(val) {
            while (val < 0) {
              val += 360;
            }

            while (val > 360) {
              val -= 360;
            }

            this._angle = val;

            if (this._shapeNode) {
              this._shapeNode.angle = this._angle;
            }
          }
        }]);

        return Tile;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_tileType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return TileType.normal;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "tileType", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "tileType"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_value", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "value", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "value"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_strVal", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "000000";
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "strVal", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "strVal"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_gapIdx", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "gapIdx", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "gapIdx"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_tileShape", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return TileShape.six;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "tileShape", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "tileShape"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_forceCircle", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "forceCircle", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "forceCircle"), _class2.prototype), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_debugBorder", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "debugBorder", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "debugBorder"), _class2.prototype), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_shapeNode", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "shapeNode", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "shapeNode"), _class2.prototype), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_shapeOn", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "shapeOn", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "shapeOn"), _class2.prototype), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_shapeOff", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "shapeOff", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "shapeOff"), _class2.prototype), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_strokeColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return color(255, 255, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "strokeColor", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "strokeColor"), _class2.prototype), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_offColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return color(255, 255, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "offColor", [_dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "offColor"), _class2.prototype), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "_showBorder", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "showBorder", [_dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "showBorder"), _class2.prototype), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "_isOnLight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "isOnLight", [_dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "isOnLight"), _class2.prototype), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "_radius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 110;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype)), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});