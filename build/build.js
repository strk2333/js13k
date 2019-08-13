(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Render = _interopRequire(require("./render"));

Render.test();

},{"./render":4}],2:[function(require,module,exports){
var t=function(t,n,i){this.l=t,this.c=n,this.n=i,this.p=null};t.prototype.r=function(){this.p?this.p.n=this.n:this.l.h=this.n,this.n&&(this.n.p=this.p)};var n=function(){this.h=null};n.prototype.add=function(n){var i=new t(this,n,this.h);return this.h&&(this.h.p=i),this.h=i,i},n.prototype.i=function(t){for(var n=this.h;n;)t(n.c),n=n.n};var i={p:{t:0}},e=function(t){this.z=t,this.o=new n,this.t=new n};e.prototype.add=function(t){t.remove(),t.l=this,t.n=(1!==t.a||0===t.frame.p.a?this.t:this.o).add(t)};var r=function(t,n){var a=new e(0),o=[a],s=new ArrayBuffer(3407820),u=new Float32Array(s),c=new Uint32Array(s),h=r.Point,f=Object.assign({antialias:!1,alpha:!1},n),l=f.alpha?1:770,p=f.scale||1;delete f.scale;var v=t.getContext("webgl",f),d=v.getExtension("ANGLE_instanced_arrays"),g=function(t,n){var i=v.createShader(n);return v.shaderSource(i,t),v.compileShader(i),i},m=v.createProgram();v.attachShader(m,g("attribute vec2 g;\nattribute vec2 a;\nattribute vec2 t;\nattribute float r;\nattribute vec2 s;\nattribute vec4 u;\nattribute vec4 c;\nattribute float z;\nuniform mat4 m;\nvarying vec2 v;\nvarying vec4 i;\nvoid main(){\nv=u.xy+g*u.zw;\ni=c.abgr;\nvec2 p=(g-a)*s;\nfloat q=cos(r);\nfloat w=sin(r);\np=vec2(p.x*q-p.y*w,p.x*w+p.y*q);\np+=a+t;\ngl_Position=m*vec4(p,z,1);}",35633)),v.attachShader(m,g("precision mediump float;\nuniform sampler2D x;\nuniform float j;\nvarying vec2 v;\nvarying vec4 i;\nvoid main(){\nvec4 c=texture2D(x,v);\ngl_FragColor=c*i;\nif(j>0.0){\nif(c.a<j)discard;\ngl_FragColor.a=1.0;};}",35632)),v.linkProgram(m);var y=function(t,n,i){v.bindBuffer(t,v.createBuffer()),v.bufferData(t,n,i||35044)},x=function(t,n,i,e,r,a,o){var s=v.getAttribLocation(m,t);v.enableVertexAttribArray(s),v.vertexAttribPointer(s,n,a||5126,!!o,i||0,r||0),e&&d.vertexAttribDivisorANGLE(s,e)};y(34963,new Uint8Array([0,1,2,2,1,3])),y(34962,new Float32Array([0,0,0,1,1,0,1,1])),x("g",2),y(34962,s,35048),x("a",2,52,1),x("s",2,52,1,8),x("r",1,52,1,16),x("t",2,52,1,20),x("u",4,52,1,28),x("c",4,52,1,44,5121,!0),x("z",1,52,1,48);var b,w,z,P,A=function(t){return v.getUniformLocation(m,t)},j=A("m"),S=A("x"),D=A("j"),E=0,F=function(){w=t.clientHeight*p|0;var n=t.width!==(b=t.clientWidth*p|0)||t.height!==w;return t.width=b,t.height=w,n},L=function(){E&&(v.blendFunc(P?1:l,P?0:771),v.depthFunc(P?513:515),v.bindTexture(3553,z.p.t),v.uniform1i(S,z.p.t),v.uniform1f(D,P?z.p.a:0),v.bufferSubData(34962,0,u.subarray(0,13*E)),d.drawElementsInstancedANGLE(4,6,5121,0,E),E=0)},_=function(t){if(t.visible){65535===E&&L();var n=t.frame,i=n.uvs;z.p.t!==n.p.t&&(z.p.t&&L(),z=n);var e=13*E;u[e++]=n.anchor.x,u[e++]=n.anchor.y,u[e++]=t.scale.x*n.size.x,u[e++]=t.scale.y*n.size.y,u[e++]=t.rotation,u[e++]=t.position.x,u[e++]=t.position.y,u[e++]=i[0],u[e++]=i[1],u[e++]=i[2],u[e++]=i[3],c[e++]=((16777215&t.tint)<<8|255*t.a&255)>>>0,u[e]=t.l.z,E++}},C={gl:v,camera:{at:h(),to:h(),angle:0},background:function(t,n,i,e){v.clearColor(t,n,i,0===e?0:e||1)},layer:function(t){var n=o.find(function(n){return n.z===t});return n||(n=new e(t),o.push(n),o.sort(function(t,n){return n.z-t.z})),n},add:function(t){a.add(t)},texture:function(t,n,i,e){var r=t.width,a=t.height,o=v.createTexture();return v.bindTexture(3553,o),v.texParameteri(3553,10240,9728|+i),v.texParameteri(3553,10241,9728|+i|+e<<8|+e<<1),v.texImage2D(3553,0,6408,6408,5121,t),e&&v.generateMipmap(3553),{size:h(r,a),anchor:h(),uvs:[0,0,1,1],p:{a:0===n?0:n||1,t:o},frame:function(t,n,i){return{size:n,anchor:i||this.anchor,uvs:[t.x/r,t.y/a,n.x/r,n.y/a],p:this.p}}}},resize:F,render:function(){F();var t=C.camera,n=t.at,e=t.to,r=t.angle,a=n.x-b*e.x,s=n.y-w*e.y,u=Math.cos(r),c=Math.sin(r),h=2/b,f=-2/w,l=[u*h,c*f,0,0,-c*h,u*f,0,0,0,0,-1e-5,0,(n.x*(1-u)+n.y*c)*h-2*a/b-1,(n.y*(1-u)-n.x*c)*f+2*s/w+1,0,1];v.useProgram(m),v.enable(3042),v.enable(2929),v.uniformMatrix4fv(j,!1,l),v.viewport(0,0,b,w),v.clear(16640),z=i,P=!0,o.forEach(function(t){return t.o.i(_)}),L(),P=!1;for(var p=o.length-1;p>=0;p--)o[p].t.i(_);L()}};return F(),C};r.Point=function(){function t(t,n){if(!(this instanceof r.Point))return new r.Point(t,n);this.set(t,n)}return t.prototype.set=function(t,n){return this.x=t||0,this.y=n||(0!==n?this.x:0),this},t}(),r.Sprite=function(){function t(n,i){if(!(this instanceof t))return new t(n,i);Object.assign(this,{frame:n,visible:!0,position:r.Point(),rotation:0,scale:r.Point(1),tint:16777215,a:1,l:null,n:null},i)}var n={alpha:{configurable:!0}};return n.alpha.get=function(){return this.a},n.alpha.set=function(t){var n=t<1&&1===this.a||1===t&&this.a<1;this.a=t,n&&this.frame.p.a>0&&this.l&&this.l.add(this)},t.prototype.remove=function(){this.n&&this.n.r(),this.l=null,this.n=null},Object.defineProperties(t.prototype,n),t}(),module.exports=r;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require("../utils");

var DEVICE_WIDTH = _utils.DEVICE_WIDTH;
var DEVICE_HEIGHT = _utils.DEVICE_HEIGHT;
var SPRITE_MAX = _utils.SPRITE_MAX;
var drawBg = function () {
  var canvas = document.createElement("canvas");
  var size = SPRITE_MAX;
  canvas.width = size;
  canvas.height = size;
  var ctx = canvas.getContext("2d");

  var gap = 10;
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#ffffff";
  ctx.rect(gap, gap, DEVICE_WIDTH - gap * 2, DEVICE_HEIGHT - gap * 2);
  ctx.fill();
  ctx.stroke();
  return canvas;
};

exports.drawBg = drawBg;
var makeDebris = function () {
  var canvas = document.createElement("canvas");
  var size = 32;
  var half = size / 2;
  canvas.width = size;
  canvas.height = size;
  var ctx = canvas.getContext("2d");

  var offset = 0;

  ctx.lineWidth = size / 16;
  ctx.fillStyle = "#cccccc";
  ctx.strokeStyle = "#111111";
  ctx.beginPath();

  // ctx.moveTo(offset + half, half);
  // ctx.moveTo(offset + half - half * 0.8, half * 0.2);
  for (var angle = 0; angle < Math.PI * 2; angle += Math.PI * 2 / 5) {
    ctx.lineTo(offset + half - Math.sin(angle) * half * 0.8, half - Math.cos(angle) * half * 0.8);
  }
  ctx.lineTo(offset + half, half);

  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  return canvas;
};

exports.makeDebris = makeDebris;
var getImage = function (img) {
  var size = arguments[1] === undefined ? 256 : arguments[1];

  var canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  return canvas;
};
exports.getImage = getImage;

},{"../utils":5}],4:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Renderer = _interopRequire(require("js13k-2d"));

var _GraphicsGraphics = require("./Graphics/graphics");

var makeDebris = _GraphicsGraphics.makeDebris;
var drawBg = _GraphicsGraphics.drawBg;
var getImage = _GraphicsGraphics.getImage;

var _utils = require("./utils");

var DEVICE_WIDTH = _utils.DEVICE_WIDTH;
var DEVICE_HEIGHT = _utils.DEVICE_HEIGHT;
var initConfigs = _utils.initConfigs;
var SPRITE_MAX = _utils.SPRITE_MAX;

var view = document.getElementById("view");

var Render = (function () {
  function Render() {
    _classCallCheck(this, Render);

    this.playing = true;
  }

  _createClass(Render, {
    log: {
      value: function log() {
        console.log(DEVICE_HEIGHT);
      }
    },
    test: {
      value: function test() {
        var _this = this;

        this.initUI();
        var Point = Renderer.Point;
        var Sprite = Renderer.Sprite;

        initConfigs(view);
        var scene = Renderer(view);
        scene.background(0.95, 0.95, 0.95, 1);

        // debris
        var atlas = scene.texture(makeDebris());
        var frame = atlas.frame(Point(), Point(32));
        var sprite = Sprite(frame);

        // bg
        var atlas2 = scene.texture(drawBg());
        var frame2 = atlas2.frame(Point(), Point(DEVICE_WIDTH, DEVICE_HEIGHT));
        var bg = Sprite(frame2);

        var layer0 = scene.layer(0);
        var layer1 = scene.layer(1);
        layer0.add(bg);
        layer1.add(sprite);

        // img
        var tImg = new Image();
        var img = undefined,
            atlas3 = undefined;
        tImg.onload = function () {
          atlas3 = scene.texture(getImage(tImg));
          var frame3 = atlas3.frame(Point(0), Point(32));
          img = Sprite(frame3);
          layer1.add(img);
        };
        tImg.src = "images/witch.png";

        var count = 0;
        var loop = function () {
          scene.resize();
          // const { width, height } = view; // or scene.gl.canvas
          sprite.position.set(20, 20);
          // 调速 count % 3 === 0
          if (img && _this.playing && count % 3 === 0) {
            img.frame = atlas3.frame(Point(count % 8 * 32, 32 * 2), Point(32));
            img.position.set(100, 100);
          }
          count++;
          scene.render();
          requestAnimationFrame(loop);
        };

        loop();
      }
    },
    initUI: {
      value: function initUI() {
        var _this = this;

        var playBtn = document.createElement("button");
        playBtn.innerHTML = "Pause";
        playBtn.className = "ui";
        playBtn.onclick = function () {
          _this.playing = !_this.playing;
          if (_this.playing) {
            playBtn.innerHTML = "Pause";
          } else {
            playBtn.innerHTML = "Play";
          }
        };
        document.body.appendChild(playBtn);
      }
    }
  });

  return Render;
})();

module.exports = new Render();

},{"./Graphics/graphics":3,"./utils":5,"js13k-2d":2}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEVICE_WIDTH = document.documentElement.clientWidth;
exports.DEVICE_WIDTH = DEVICE_WIDTH;
var DEVICE_HEIGHT = document.documentElement.clientHeight;
exports.DEVICE_HEIGHT = DEVICE_HEIGHT;
var SPRITE_WIDTH_MAX = Math.pow(2, Math.floor(Math.log2(DEVICE_WIDTH)));
exports.SPRITE_WIDTH_MAX = SPRITE_WIDTH_MAX;
var SPRITE_HEIGHT_MAX = Math.pow(2, Math.floor(Math.log2(DEVICE_HEIGHT)));
exports.SPRITE_HEIGHT_MAX = SPRITE_HEIGHT_MAX;
var SPRITE_MAX = DEVICE_WIDTH > DEVICE_HEIGHT ? Math.pow(2, Math.ceil(Math.log2(DEVICE_WIDTH))) : Math.pow(2, Math.ceil(Math.log2(DEVICE_HEIGHT)));exports.SPRITE_MAX = SPRITE_MAX;
// max sprite you'll need
// available sprites width/height list
var SPRITE_WIDTHS = undefined;
exports.SPRITE_WIDTHS = SPRITE_WIDTHS;
var SPRITE_HEIGHTS = undefined;

exports.SPRITE_HEIGHTS = SPRITE_HEIGHTS;
// sprite max must be 2^n;
var getCascadeList = function (max) {
  var indicator = Math.log2(max);
  var list = [];
  for (var i = 0; i <= indicator; i++) {
    list.push(Math.pow(2, i));
  }
  return list;
};

var initConfigs = function (canvas) {
  SPRITE_WIDTHS = exports.SPRITE_WIDTHS = getCascadeList(SPRITE_WIDTH_MAX);
  SPRITE_HEIGHTS = exports.SPRITE_HEIGHTS = getCascadeList(SPRITE_HEIGHT_MAX);
  canvas.width = DEVICE_WIDTH;
  canvas.height = DEVICE_HEIGHT;
};
exports.initConfigs = initConfigs;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc3RyazIzMzMvRG9jdW1lbnRzL1dvcmtzcGFjZS9fUFJKVEhJU1lFQVIvanMxM2svc3JjL2pzL3NjcmlwdC5qcyIsIi9Vc2Vycy9zdHJrMjMzMy9Eb2N1bWVudHMvV29ya3NwYWNlL19QUkpUSElTWUVBUi9qczEzay9ub2RlX21vZHVsZXMvanMxM2stMmQvZGlzdC9yZW5kZXJlci5qcyIsIi9Vc2Vycy9zdHJrMjMzMy9Eb2N1bWVudHMvV29ya3NwYWNlL19QUkpUSElTWUVBUi9qczEzay9zcmMvanMvR3JhcGhpY3MvZ3JhcGhpY3MuanMiLCIvVXNlcnMvc3RyazIzMzMvRG9jdW1lbnRzL1dvcmtzcGFjZS9fUFJKVEhJU1lFQVIvanMxM2svc3JjL2pzL3JlbmRlci5qcyIsIi9Vc2Vycy9zdHJrMjMzMy9Eb2N1bWVudHMvV29ya3NwYWNlL19QUkpUSElTWUVBUi9qczEzay9zcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0lDQU8sTUFBTSwyQkFBTSxVQUFVOztBQUU3QixNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7OztBQ0ZkO0FBQ0E7Ozs7Ozs7O3FCQ0R3RCxVQUFVOztJQUF6RCxZQUFZLFVBQVosWUFBWTtJQUFFLGFBQWEsVUFBYixhQUFhO0lBQUUsVUFBVSxVQUFWLFVBQVU7QUFFekMsSUFBTSxNQUFNLEdBQUcsWUFBTTtBQUMxQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hELE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQztBQUN4QixRQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNwQixRQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNyQixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVwQyxNQUFNLEdB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RCxTQUFPLElBQUksQ0FBQztDQUNiLENBQUE7O0FBRU0sSUFBTSxXQUFXLEdBQUcsVUFBQSxNQUFNLEVBQUk7QUFDbkMsZUFBYSxXQUFiLGFBQWEsR0FBRyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNqRCxnQkFBYyxXQUFkLGNBQWMsR0FBRyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNuRCxRQUFNLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztBQUM1QixRQUFNLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztDQUMvQixDQUFBO1FBTFksV0FBVyxHQUFYLFdBQVciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlbmRlciBmcm9tICcuL3JlbmRlcic7XG5cblJlbmRlci50ZXN0KCk7XG4iLCJ2YXIgdD1mdW5jdGlvbih0LG4saSl7dGhpcy5sPXQsdGhpcy5jPW4sdGhpcy5uPWksdGhpcy5wPW51bGx9O3QucHJvdG90eXBlLnI9ZnVuY3Rpb24oKXt0aGlzLnA/dGhpcy5wLm49dGhpcy5uOnRoaXMubC5oPXRoaXMubix0aGlzLm4mJih0aGlzLm4ucD10aGlzLnApfTt2YXIgbj1mdW5jdGlvbigpe3RoaXMuaD1udWxsfTtuLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24obil7dmFyIGk9bmV3IHQodGhpcyxuLHRoaXMuaCk7cmV0dXJuIHRoaXMuaCYmKHRoaXMuaC5wPWkpLHRoaXMuaD1pLGl9LG4ucHJvdG90eXBlLmk9ZnVuY3Rpb24odCl7Zm9yKHZhciBuPXRoaXMuaDtuOyl0KG4uYyksbj1uLm59O3ZhciBpPXtwOnt0OjB9fSxlPWZ1bmN0aW9uKHQpe3RoaXMuej10LHRoaXMubz1uZXcgbix0aGlzLnQ9bmV3IG59O2UucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0KXt0LnJlbW92ZSgpLHQubD10aGlzLHQubj0oMSE9PXQuYXx8MD09PXQuZnJhbWUucC5hP3RoaXMudDp0aGlzLm8pLmFkZCh0KX07dmFyIHI9ZnVuY3Rpb24odCxuKXt2YXIgYT1uZXcgZSgwKSxvPVthXSxzPW5ldyBBcnJheUJ1ZmZlcigzNDA3ODIwKSx1PW5ldyBGbG9hdDMyQXJyYXkocyksYz1uZXcgVWludDMyQXJyYXkocyksaD1yLlBvaW50LGY9T2JqZWN0LmFzc2lnbih7YW50aWFsaWFzOiExLGFscGhhOiExfSxuKSxsPWYuYWxwaGE/MTo3NzAscD1mLnNjYWxlfHwxO2RlbGV0ZSBmLnNjYWxlO3ZhciB2PXQuZ2V0Q29udGV4dChcIndlYmdsXCIsZiksZD12LmdldEV4dGVuc2lvbihcIkFOR0xFX2luc3RhbmNlZF9hcnJheXNcIiksZz1mdW5jdGlvbih0LG4pe3ZhciBpPXYuY3JlYXRlU2hhZGVyKG4pO3JldHVybiB2LnNoYWRlclNvdXJjZShpLHQpLHYuY29tcGlsZVNoYWRlcihpKSxpfSxtPXYuY3JlYXRlUHJvZ3JhbSgpO3YuYXR0YWNoU2hhZGVyKG0sZyhcImF0dHJpYnV0ZSB2ZWMyIGc7XFxuYXR0cmlidXRlIHZlYzIgYTtcXG5hdHRyaWJ1dGUgdmVjMiB0O1xcbmF0dHJpYnV0ZSBmbG9hdCByO1xcbmF0dHJpYnV0ZSB2ZWMyIHM7XFxuYXR0cmlidXRlIHZlYzQgdTtcXG5hdHRyaWJ1dGUgdmVjNCBjO1xcbmF0dHJpYnV0ZSBmbG9hdCB6O1xcbnVuaWZvcm0gbWF0NCBtO1xcbnZhcnlpbmcgdmVjMiB2O1xcbnZhcnlpbmcgdmVjNCBpO1xcbnZvaWQgbWFpbigpe1xcbnY9dS54eStnKnUuenc7XFxuaT1jLmFiZ3I7XFxudmVjMiBwPShnLWEpKnM7XFxuZmxvYXQgcT1jb3Mocik7XFxuZmxvYXQgdz1zaW4ocik7XFxucD12ZWMyKHAueCpxLXAueSp3LHAueCp3K3AueSpxKTtcXG5wKz1hK3Q7XFxuZ2xfUG9zaXRpb249bSp2ZWM0KHAseiwxKTt9XCIsMzU2MzMpKSx2LmF0dGFjaFNoYWRlcihtLGcoXCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG51bmlmb3JtIHNhbXBsZXIyRCB4O1xcbnVuaWZvcm0gZmxvYXQgajtcXG52YXJ5aW5nIHZlYzIgdjtcXG52YXJ5aW5nIHZlYzQgaTtcXG52b2lkIG1haW4oKXtcXG52ZWM0IGM9dGV4dHVyZTJEKHgsdik7XFxuZ2xfRnJhZ0NvbG9yPWMqaTtcXG5pZihqPjAuMCl7XFxuaWYoYy5hPGopZGlzY2FyZDtcXG5nbF9GcmFnQ29sb3IuYT0xLjA7fTt9XCIsMzU2MzIpKSx2LmxpbmtQcm9ncmFtKG0pO3ZhciB5PWZ1bmN0aW9uKHQsbixpKXt2LmJpbmRCdWZmZXIodCx2LmNyZWF0ZUJ1ZmZlcigpKSx2LmJ1ZmZlckRhdGEodCxuLGl8fDM1MDQ0KX0seD1mdW5jdGlvbih0LG4saSxlLHIsYSxvKXt2YXIgcz12LmdldEF0dHJpYkxvY2F0aW9uKG0sdCk7di5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShzKSx2LnZlcnRleEF0dHJpYlBvaW50ZXIocyxuLGF8fDUxMjYsISFvLGl8fDAscnx8MCksZSYmZC52ZXJ0ZXhBdHRyaWJEaXZpc29yQU5HTEUocyxlKX07eSgzNDk2MyxuZXcgVWludDhBcnJheShbMCwxLDIsMiwxLDNdKSkseSgzNDk2MixuZXcgRmxvYXQzMkFycmF5KFswLDAsMCwxLDEsMCwxLDFdKSkseChcImdcIiwyKSx5KDM0OTYyLHMsMzUwNDgpLHgoXCJhXCIsMiw1MiwxKSx4KFwic1wiLDIsNTIsMSw4KSx4KFwiclwiLDEsNTIsMSwxNikseChcInRcIiwyLDUyLDEsMjApLHgoXCJ1XCIsNCw1MiwxLDI4KSx4KFwiY1wiLDQsNTIsMSw0NCw1MTIxLCEwKSx4KFwielwiLDEsNTIsMSw0OCk7dmFyIGIsdyx6LFAsQT1mdW5jdGlvbih0KXtyZXR1cm4gdi5nZXRVbmlmb3JtTG9jYXRpb24obSx0KX0saj1BKFwibVwiKSxTPUEoXCJ4XCIpLEQ9QShcImpcIiksRT0wLEY9ZnVuY3Rpb24oKXt3PXQuY2xpZW50SGVpZ2h0KnB8MDt2YXIgbj10LndpZHRoIT09KGI9dC5jbGllbnRXaWR0aCpwfDApfHx0LmhlaWdodCE9PXc7cmV0dXJuIHQud2lkdGg9Yix0LmhlaWdodD13LG59LEw9ZnVuY3Rpb24oKXtFJiYodi5ibGVuZEZ1bmMoUD8xOmwsUD8wOjc3MSksdi5kZXB0aEZ1bmMoUD81MTM6NTE1KSx2LmJpbmRUZXh0dXJlKDM1NTMsei5wLnQpLHYudW5pZm9ybTFpKFMsei5wLnQpLHYudW5pZm9ybTFmKEQsUD96LnAuYTowKSx2LmJ1ZmZlclN1YkRhdGEoMzQ5NjIsMCx1LnN1YmFycmF5KDAsMTMqRSkpLGQuZHJhd0VsZW1lbnRzSW5zdGFuY2VkQU5HTEUoNCw2LDUxMjEsMCxFKSxFPTApfSxfPWZ1bmN0aW9uKHQpe2lmKHQudmlzaWJsZSl7NjU1MzU9PT1FJiZMKCk7dmFyIG49dC5mcmFtZSxpPW4udXZzO3oucC50IT09bi5wLnQmJih6LnAudCYmTCgpLHo9bik7dmFyIGU9MTMqRTt1W2UrK109bi5hbmNob3IueCx1W2UrK109bi5hbmNob3IueSx1W2UrK109dC5zY2FsZS54Km4uc2l6ZS54LHVbZSsrXT10LnNjYWxlLnkqbi5zaXplLnksdVtlKytdPXQucm90YXRpb24sdVtlKytdPXQucG9zaXRpb24ueCx1W2UrK109dC5wb3NpdGlvbi55LHVbZSsrXT1pWzBdLHVbZSsrXT1pWzFdLHVbZSsrXT1pWzJdLHVbZSsrXT1pWzNdLGNbZSsrXT0oKDE2Nzc3MjE1JnQudGludCk8PDh8MjU1KnQuYSYyNTUpPj4+MCx1W2VdPXQubC56LEUrK319LEM9e2dsOnYsY2FtZXJhOnthdDpoKCksdG86aCgpLGFuZ2xlOjB9LGJhY2tncm91bmQ6ZnVuY3Rpb24odCxuLGksZSl7di5jbGVhckNvbG9yKHQsbixpLDA9PT1lPzA6ZXx8MSl9LGxheWVyOmZ1bmN0aW9uKHQpe3ZhciBuPW8uZmluZChmdW5jdGlvbihuKXtyZXR1cm4gbi56PT09dH0pO3JldHVybiBufHwobj1uZXcgZSh0KSxvLnB1c2gobiksby5zb3J0KGZ1bmN0aW9uKHQsbil7cmV0dXJuIG4uei10Lnp9KSksbn0sYWRkOmZ1bmN0aW9uKHQpe2EuYWRkKHQpfSx0ZXh0dXJlOmZ1bmN0aW9uKHQsbixpLGUpe3ZhciByPXQud2lkdGgsYT10LmhlaWdodCxvPXYuY3JlYXRlVGV4dHVyZSgpO3JldHVybiB2LmJpbmRUZXh0dXJlKDM1NTMsbyksdi50ZXhQYXJhbWV0ZXJpKDM1NTMsMTAyNDAsOTcyOHwraSksdi50ZXhQYXJhbWV0ZXJpKDM1NTMsMTAyNDEsOTcyOHwraXwrZTw8OHwrZTw8MSksdi50ZXhJbWFnZTJEKDM1NTMsMCw2NDA4LDY0MDgsNTEyMSx0KSxlJiZ2LmdlbmVyYXRlTWlwbWFwKDM1NTMpLHtzaXplOmgocixhKSxhbmNob3I6aCgpLHV2czpbMCwwLDEsMV0scDp7YTowPT09bj8wOm58fDEsdDpvfSxmcmFtZTpmdW5jdGlvbih0LG4saSl7cmV0dXJue3NpemU6bixhbmNob3I6aXx8dGhpcy5hbmNob3IsdXZzOlt0Lngvcix0LnkvYSxuLngvcixuLnkvYV0scDp0aGlzLnB9fX19LHJlc2l6ZTpGLHJlbmRlcjpmdW5jdGlvbigpe0YoKTt2YXIgdD1DLmNhbWVyYSxuPXQuYXQsZT10LnRvLHI9dC5hbmdsZSxhPW4ueC1iKmUueCxzPW4ueS13KmUueSx1PU1hdGguY29zKHIpLGM9TWF0aC5zaW4ociksaD0yL2IsZj0tMi93LGw9W3UqaCxjKmYsMCwwLC1jKmgsdSpmLDAsMCwwLDAsLTFlLTUsMCwobi54KigxLXUpK24ueSpjKSpoLTIqYS9iLTEsKG4ueSooMS11KS1uLngqYykqZisyKnMvdysxLDAsMV07di51c2VQcm9ncmFtKG0pLHYuZW5hYmxlKDMwNDIpLHYuZW5hYmxlKDI5MjkpLHYudW5pZm9ybU1hdHJpeDRmdihqLCExLGwpLHYudmlld3BvcnQoMCwwLGIsdyksdi5jbGVhcigxNjY0MCksej1pLFA9ITAsby5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiB0Lm8uaShfKX0pLEwoKSxQPSExO2Zvcih2YXIgcD1vLmxlbmd0aC0xO3A+PTA7cC0tKW9bcF0udC5pKF8pO0woKX19O3JldHVybiBGKCksQ307ci5Qb2ludD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxuKXtpZighKHRoaXMgaW5zdGFuY2VvZiByLlBvaW50KSlyZXR1cm4gbmV3IHIuUG9pbnQodCxuKTt0aGlzLnNldCh0LG4pfXJldHVybiB0LnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdGhpcy54PXR8fDAsdGhpcy55PW58fCgwIT09bj90aGlzLng6MCksdGhpc30sdH0oKSxyLlNwcml0ZT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQobixpKXtpZighKHRoaXMgaW5zdGFuY2VvZiB0KSlyZXR1cm4gbmV3IHQobixpKTtPYmplY3QuYXNzaWduKHRoaXMse2ZyYW1lOm4sdmlzaWJsZTohMCxwb3NpdGlvbjpyLlBvaW50KCkscm90YXRpb246MCxzY2FsZTpyLlBvaW50KDEpLHRpbnQ6MTY3NzcyMTUsYToxLGw6bnVsbCxuOm51bGx9LGkpfXZhciBuPXthbHBoYTp7Y29uZmlndXJhYmxlOiEwfX07cmV0dXJuIG4uYWxwaGEuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYX0sbi5hbHBoYS5zZXQ9ZnVuY3Rpb24odCl7dmFyIG49dDwxJiYxPT09dGhpcy5hfHwxPT09dCYmdGhpcy5hPDE7dGhpcy5hPXQsbiYmdGhpcy5mcmFtZS5wLmE+MCYmdGhpcy5sJiZ0aGlzLmwuYWRkKHRoaXMpfSx0LnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oKXt0aGlzLm4mJnRoaXMubi5yKCksdGhpcy5sPW51bGwsdGhpcy5uPW51bGx9LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHQucHJvdG90eXBlLG4pLHR9KCksbW9kdWxlLmV4cG9ydHM9cjtcbiIsImltcG9ydCB7IERFVklDRV9XSURUSCwgREVWSUNFX0hFSUdIVCwgU1BSSVRFX01BWCB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IGRyYXdCZyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNvbnN0IHNpemUgPSBTUFJJVEVfTUFYO1xuICBjYW52YXMud2lkdGggPSBzaXplO1xuICBjYW52YXMuaGVpZ2h0ID0gc2l6ZTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgY29uc3QgZ2FwID0gMTA7XG4gIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwMDAwJztcbiAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJztcbiAgY3R4LnJlY3QoZ2FwLCBnYXAsIERFVklDRV9XSURUSCAtIGdhcCAqIDIsIERFVklDRV9IRUlHSFQgLSBnYXAgKiAyKTtcbiAgY3R4LmZpbGwoKTtcbiAgY3R4LnN0cm9rZSgpO1xuICByZXR1cm4gY2FudmFzO1xufVxuXG5leHBvcnQgY29uc3QgbWFrZURlYnJpcyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNvbnN0IHNpemUgPSAzMjtcbiAgY29uc3QgaGFsZiA9IHNpemUgLyAyO1xuICBjYW52YXMud2lkdGggPSBzaXplO1xuICBjYW52YXMuaGVpZ2h0ID0gc2l6ZTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgbGV0IG9mZnNldCA9IDA7XG5cbiAgY3R4LmxpbmVXaWR0aCA9IHNpemUgLyAxNjtcbiAgY3R4LmZpbGxTdHlsZSA9ICcjY2NjY2NjJztcbiAgY3R4LnN0cm9rZVN0eWxlID0gJyMxMTExMTEnO1xuICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgLy8gY3R4Lm1vdmVUbyhvZmZzZXQgKyBoYWxmLCBoYWxmKTtcbiAgLy8gY3R4Lm1vdmVUbyhvZmZzZXQgKyBoYWxmIC0gaGFsZiAqIDAuOCwgaGFsZiAqIDAuMik7XG4gIGZvciAobGV0IGFuZ2xlID0gMDsgYW5nbGUgPCBNYXRoLlBJICogMjsgYW5nbGUgKz0gKE1hdGguUEkgKiAyKSAvIDUpIHtcbiAgICBjdHgubGluZVRvKG9mZnNldCArIGhhbGYgLSBNYXRoLnNpbihhbmdsZSkgKiBoYWxmICogMC44LCBoYWxmIC0gTWF0aC5jb3MoYW5nbGUpICogaGFsZiAqIDAuOCk7XG4gIH1cbiAgY3R4LmxpbmVUbyhvZmZzZXQgKyBoYWxmLCBoYWxmKTtcblxuICBjdHguY2xvc2VQYXRoKCk7XG4gIGN0eC5maWxsKCk7XG4gIGN0eC5zdHJva2UoKTtcblxuICByZXR1cm4gY2FudmFzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEltYWdlID0gKGltZywgc2l6ZSA9IDI1NikgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY2FudmFzLndpZHRoID0gc2l6ZTtcbiAgY2FudmFzLmhlaWdodCA9IHNpemU7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gIHJldHVybiBjYW52YXM7XG59XG4iLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnanMxM2stMmQnO1xuaW1wb3J0IHsgbWFrZURlYnJpcywgZHJhd0JnLCBnZXRJbWFnZSB9IGZyb20gJy4vR3JhcGhpY3MvZ3JhcGhpY3MnO1xuaW1wb3J0IHsgREVWSUNFX1dJRFRILCBERVZJQ0VfSEVJR0hULCBpbml0Q29uZmlncywgU1BSSVRFX01BWCB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCB2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXcnKTtcblxuY2xhc3MgUmVuZGVyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xuICB9XG5cbiAgbG9nKCkge1xuICAgIGNvbnNvbGUubG9nKERFVklDRV9IRUlHSFQpO1xuICB9O1xuXG4gIHRlc3QoKSB7XG4gICAgdGhpcy5pbml0VUkoKTtcbiAgICBjb25zdCB7IFBvaW50LCBTcHJpdGUgfSA9IFJlbmRlcmVyO1xuXG4gICAgaW5pdENvbmZpZ3Modmlldyk7XG4gICAgY29uc3Qgc2NlbmUgPSBSZW5kZXJlcih2aWV3KTtcbiAgICBzY2VuZS5iYWNrZ3JvdW5kKDAuOTUsIDAuOTUsIDAuOTUsIDEpO1xuXG4gICAgLy8gZGVicmlzXG4gICAgY29uc3QgYXRsYXMgPSBzY2VuZS50ZXh0dXJlKG1ha2VEZWJyaXMoKSk7XG4gICAgY29uc3QgZnJhbWUgPSBhdGxhcy5mcmFtZShQb2ludCgpLCBQb2ludCgzMikpO1xuICAgIGNvbnN0IHNwcml0ZSA9IFNwcml0ZShmcmFtZSk7XG5cbiAgICAvLyBiZ1xuICAgIGNvbnN0IGF0bGFzMiA9IHNjZW5lLnRleHR1cmUoZHJhd0JnKCkpO1xuICAgIGNvbnN0IGZyYW1lMiA9IGF0bGFzMi5mcmFtZShQb2ludCgpLCBQb2ludChERVZJQ0VfV0lEVEgsIERFVklDRV9IRUlHSFQpKTtcbiAgICBjb25zdCBiZyA9IFNwcml0ZShmcmFtZTIpO1xuXG4gICAgY29uc3QgbGF5ZXIwID0gc2NlbmUubGF5ZXIoMCk7XG4gICAgY29uc3QgbGF5ZXIxID0gc2NlbmUubGF5ZXIoMSk7XG4gICAgbGF5ZXIwLmFkZChiZyk7XG4gICAgbGF5ZXIxLmFkZChzcHJpdGUpO1xuXG4gICAgLy8gaW1nXG4gICAgY29uc3QgdEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCBpbWcsIGF0bGFzMztcbiAgICB0SW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGF0bGFzMyA9IHNjZW5lLnRleHR1cmUoZ2V0SW1hZ2UodEltZykpO1xuICAgICAgY29uc3QgZnJhbWUzID0gYXRsYXMzLmZyYW1lKFBvaW50KDApLCBQb2ludCgzMikpO1xuICAgICAgaW1nID0gU3ByaXRlKGZyYW1lMyk7XG4gICAgICBsYXllcjEuYWRkKGltZyk7XG4gICAgfVxuICAgIHRJbWcuc3JjID0gJ2ltYWdlcy93aXRjaC5wbmcnO1xuXG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb25zdCBsb29wID0gKCkgPT4ge1xuICAgICAgc2NlbmUucmVzaXplKCk7XG4gICAgICAvLyBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHZpZXc7IC8vIG9yIHNjZW5lLmdsLmNhbnZhc1xuICAgICAgc3ByaXRlLnBvc2l0aW9uLnNldCgyMCwgMjApO1xuICAgICAgLy8g6LCD6YCfIGNvdW50ICUgMyA9PT0gMFxuICAgICAgaWYgKGltZyAmJiB0aGlzLnBsYXlpbmcgJiYgY291bnQgJSAzID09PSAwKSB7XG4gICAgICAgIGltZy5mcmFtZSA9IGF0bGFzMy5mcmFtZShQb2ludChjb3VudCAlIDggKiAzMiwgMzIgKiAyKSwgUG9pbnQoMzIpKTtcbiAgICAgICAgaW1nLnBvc2l0aW9uLnNldCgxMDAsIDEwMCk7XG4gICAgICB9XG4gICAgICBjb3VudCsrO1xuICAgICAgc2NlbmUucmVuZGVyKCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfTtcblxuICAgIGxvb3AoKTtcbiAgfVxuXG4gIGluaXRVSSgpIHtcbiAgICBjb25zdCBwbGF5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcGxheUJ0bi5pbm5lckhUTUwgPSAnUGF1c2UnO1xuICAgIHBsYXlCdG4uY2xhc3NOYW1lID0gJ3VpJztcbiAgICBwbGF5QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnBsYXlpbmcgPSAhdGhpcy5wbGF5aW5nO1xuICAgICAgaWYgKHRoaXMucGxheWluZykge1xuICAgICAgICBwbGF5QnRuLmlubmVySFRNTCA9ICdQYXVzZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5QnRuLmlubmVySFRNTCA9ICdQbGF5JztcbiAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5QnRuKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUmVuZGVyKCk7XG4iLCJleHBvcnQgY29uc3QgREVWSUNFX1dJRFRIID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuZXhwb3J0IGNvbnN0IERFVklDRV9IRUlHSFQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuZXhwb3J0IGNvbnN0IFNQUklURV9XSURUSF9NQVggPSBNYXRoLnBvdygyLCBNYXRoLmZsb29yKE1hdGgubG9nMihERVZJQ0VfV0lEVEgpKSk7XG5leHBvcnQgY29uc3QgU1BSSVRFX0hFSUdIVF9NQVggPSBNYXRoLnBvdygyLCBNYXRoLmZsb29yKE1hdGgubG9nMihERVZJQ0VfSEVJR0hUKSkpO1xuZXhwb3J0IGNvbnN0IFNQUklURV9NQVggPSBERVZJQ0VfV0lEVEggPiBERVZJQ0VfSEVJR0hUID9cbiAgTWF0aC5wb3coMiwgTWF0aC5jZWlsKE1hdGgubG9nMihERVZJQ0VfV0lEVEgpKSkgOlxuICBNYXRoLnBvdygyLCBNYXRoLmNlaWwoTWF0aC5sb2cyKERFVklDRV9IRUlHSFQpKSk7IC8vIG1heCBzcHJpdGUgeW91J2xsIG5lZWRcbi8vIGF2YWlsYWJsZSBzcHJpdGVzIHdpZHRoL2hlaWdodCBsaXN0XG5leHBvcnQgbGV0IFNQUklURV9XSURUSFM7XG5leHBvcnQgbGV0IFNQUklURV9IRUlHSFRTO1xuXG4vLyBzcHJpdGUgbWF4IG11c3QgYmUgMl5uO1xuY29uc3QgZ2V0Q2FzY2FkZUxpc3QgPSBtYXggPT4ge1xuICBjb25zdCBpbmRpY2F0b3IgPSBNYXRoLmxvZzIobWF4KTtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBpbmRpY2F0b3I7IGkrKykge1xuICAgIGxpc3QucHVzaChNYXRoLnBvdygyLCBpKSk7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0Q29uZmlncyA9IGNhbnZhcyA9PiB7XG4gIFNQUklURV9XSURUSFMgPSBnZXRDYXNjYWRlTGlzdChTUFJJVEVfV0lEVEhfTUFYKTtcbiAgU1BSSVRFX0hFSUdIVFMgPSBnZXRDYXNjYWRlTGlzdChTUFJJVEVfSEVJR0hUX01BWCk7XG4gIGNhbnZhcy53aWR0aCA9IERFVklDRV9XSURUSDtcbiAgY2FudmFzLmhlaWdodCA9IERFVklDRV9IRUlHSFQ7XG59XG4iXX0=
