System.register("chunks:///_virtual/gudeTip_chat.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,r,n,a,c,o;return{setters:[function(t){e=t.inheritsLoose,i=t.applyDecoratedDescriptor,r=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){a=t.cclegacy,c=t._decorator,o=t.Label}],execute:function(){var u,l,p,s,h;a._RF.push({},"18906ylfBtFiaUi/Gy2Z0If","gudeTip_chat",void 0);var f=c.ccclass,_=c.property;t("gudeTip_chat",(u=f("gudeTip_chat"),l=_(o),u((s=function(t){function i(){for(var e,i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return e=t.call.apply(t,[this].concat(a))||this,r(e,"text_chat",h,n(e)),e}return e(i,t),i.prototype.initGuideTip=function(t){this.node.active=!0,this.text_chat.string=t.toString()},i}(hyz.guide_tip_base),h=i(s.prototype,"text_chat",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=s))||p));a._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./gudeTip_chat.ts"],(function(){return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
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