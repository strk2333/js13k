(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Render = _interopRequire(require("./render"));

var img = document.createElement("img");
exports.img = img;
window.onload = function () {
  img.src = "../images/witch.png";
};
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
        var frame2 = atlas2.frame(Point(), Point(SPRITE_MAX));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc3RyazIzMzMvRG9jdW1lbnRzL1dvcmtzcGFjZS9fUFJKVEhJU1lFQVIvanMxM2svc3JjL2pzL3NjcmlwdC5qcyIsIi9Vc2Vycy9zdHJrMjMzMy9Eb2N1bWVudHMvV29ya3NwYWNlL19QUkpUSElTWUVBUi9qczEzay9ub2RlX21vZHVsZXMvanMxM2stMmQvZGlzdC9yZW5kZXJlci5qcyIsIi9Vc2Vycy9zdHJrMjMzMy9Eb2N1bWVudHMvV29ya3NwYWNlL19QUkpUSElTWUVBUi9qczEzay9zcmMvanMvR3JhcGhpY3MvZ3JhcGhpY3MuanMiLCIvVXNlcnMvc3RyazIzMzMvRG9jdW1lbnRzL1dvcmtzcGFjZS9fUFJKVEhJU1lFQVIvanMxM2svc3JjL2pzL3JlbmRlci5qcyIsIi9Vc2Vycy9zdHJrMjMzMy9Eb2N1bWVudHMvV29ya3NwYWNlL19QUkpUSElTWUVBUi9qczEzay9zcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztJQ0FPLE1BQU0sMkJBQU0sVUFBVTs7QUFDdEIsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUFwQyxHQUFHLEdBQUgsR0FBRztBQUNoQixNQUFNLENBQUMsTUFBTSxHQUFHLFlBQU07QUFDcEIsS0FBRyxDQUFDLEdBQUcsR0FBRyxxQkFBcUIsQ0FBQztDQUNqQyxDQUFBO0FBQ0QsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDOzs7QUNMZDtBQUNBOzs7Ozs7OztxQkNEd0QsVUFBVTs7SUFBekQsWUFBWSxVQUFaLFlBQVk7SUFBRSxhQUFhLFVBQWIsYUFBYTtJQUFFLFVBQVUsVUFBVixVQUFVO0FBRXpDLElBQU0sTUFBTSxHQUFHLFlBQU07QUFDMUIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoRCxNQUFNLElB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T0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNuQyxRQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDM0I7QUFDRCxTQUFPLElBQUksQ0FBQztDQUNiLENBQUE7O0FBRU0sSUFBTSxXQUFXLEdBQUcsVUFBQSxNQUFNLEVBQUk7QUFDbkMsZUFBYSxXQUFiLGFBQWEsR0FBRyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNqRCxnQkFBYyxXQUFkLGNBQWMsR0FBRyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNuRCxRQUFNLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztBQUM1QixRQUFNLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztDQUMvQixDQUFBO1FBTFksV0FBVyxHQUFYLFdBQVciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlbmRlciBmcm9tICcuL3JlbmRlcic7XG5leHBvcnQgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBpbWcuc3JjID0gJy4uL2ltYWdlcy93aXRjaC5wbmcnO1xufVxuUmVuZGVyLnRlc3QoKTtcbiIsInZhciB0PWZ1bmN0aW9uKHQsbixpKXt0aGlzLmw9dCx0aGlzLmM9bix0aGlzLm49aSx0aGlzLnA9bnVsbH07dC5wcm90b3R5cGUucj1mdW5jdGlvbigpe3RoaXMucD90aGlzLnAubj10aGlzLm46dGhpcy5sLmg9dGhpcy5uLHRoaXMubiYmKHRoaXMubi5wPXRoaXMucCl9O3ZhciBuPWZ1bmN0aW9uKCl7dGhpcy5oPW51bGx9O24ucHJvdG90eXBlLmFkZD1mdW5jdGlvbihuKXt2YXIgaT1uZXcgdCh0aGlzLG4sdGhpcy5oKTtyZXR1cm4gdGhpcy5oJiYodGhpcy5oLnA9aSksdGhpcy5oPWksaX0sbi5wcm90b3R5cGUuaT1mdW5jdGlvbih0KXtmb3IodmFyIG49dGhpcy5oO247KXQobi5jKSxuPW4ubn07dmFyIGk9e3A6e3Q6MH19LGU9ZnVuY3Rpb24odCl7dGhpcy56PXQsdGhpcy5vPW5ldyBuLHRoaXMudD1uZXcgbn07ZS5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKHQpe3QucmVtb3ZlKCksdC5sPXRoaXMsdC5uPSgxIT09dC5hfHwwPT09dC5mcmFtZS5wLmE/dGhpcy50OnRoaXMubykuYWRkKHQpfTt2YXIgcj1mdW5jdGlvbih0LG4pe3ZhciBhPW5ldyBlKDApLG89W2FdLHM9bmV3IEFycmF5QnVmZmVyKDM0MDc4MjApLHU9bmV3IEZsb2F0MzJBcnJheShzKSxjPW5ldyBVaW50MzJBcnJheShzKSxoPXIuUG9pbnQsZj1PYmplY3QuYXNzaWduKHthbnRpYWxpYXM6ITEsYWxwaGE6ITF9LG4pLGw9Zi5hbHBoYT8xOjc3MCxwPWYuc2NhbGV8fDE7ZGVsZXRlIGYuc2NhbGU7dmFyIHY9dC5nZXRDb250ZXh0KFwid2ViZ2xcIixmKSxkPXYuZ2V0RXh0ZW5zaW9uKFwiQU5HTEVfaW5zdGFuY2VkX2FycmF5c1wiKSxnPWZ1bmN0aW9uKHQsbil7dmFyIGk9di5jcmVhdGVTaGFkZXIobik7cmV0dXJuIHYuc2hhZGVyU291cmNlKGksdCksdi5jb21waWxlU2hhZGVyKGkpLGl9LG09di5jcmVhdGVQcm9ncmFtKCk7di5hdHRhY2hTaGFkZXIobSxnKFwiYXR0cmlidXRlIHZlYzIgZztcXG5hdHRyaWJ1dGUgdmVjMiBhO1xcbmF0dHJpYnV0ZSB2ZWMyIHQ7XFxuYXR0cmlidXRlIGZsb2F0IHI7XFxuYXR0cmlidXRlIHZlYzIgcztcXG5hdHRyaWJ1dGUgdmVjNCB1O1xcbmF0dHJpYnV0ZSB2ZWM0IGM7XFxuYXR0cmlidXRlIGZsb2F0IHo7XFxudW5pZm9ybSBtYXQ0IG07XFxudmFyeWluZyB2ZWMyIHY7XFxudmFyeWluZyB2ZWM0IGk7XFxudm9pZCBtYWluKCl7XFxudj11Lnh5K2cqdS56dztcXG5pPWMuYWJncjtcXG52ZWMyIHA9KGctYSkqcztcXG5mbG9hdCBxPWNvcyhyKTtcXG5mbG9hdCB3PXNpbihyKTtcXG5wPXZlYzIocC54KnEtcC55KncscC54KncrcC55KnEpO1xcbnArPWErdDtcXG5nbF9Qb3NpdGlvbj1tKnZlYzQocCx6LDEpO31cIiwzNTYzMykpLHYuYXR0YWNoU2hhZGVyKG0sZyhcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xcbnVuaWZvcm0gc2FtcGxlcjJEIHg7XFxudW5pZm9ybSBmbG9hdCBqO1xcbnZhcnlpbmcgdmVjMiB2O1xcbnZhcnlpbmcgdmVjNCBpO1xcbnZvaWQgbWFpbigpe1xcbnZlYzQgYz10ZXh0dXJlMkQoeCx2KTtcXG5nbF9GcmFnQ29sb3I9YyppO1xcbmlmKGo+MC4wKXtcXG5pZihjLmE8ailkaXNjYXJkO1xcbmdsX0ZyYWdDb2xvci5hPTEuMDt9O31cIiwzNTYzMikpLHYubGlua1Byb2dyYW0obSk7dmFyIHk9ZnVuY3Rpb24odCxuLGkpe3YuYmluZEJ1ZmZlcih0LHYuY3JlYXRlQnVmZmVyKCkpLHYuYnVmZmVyRGF0YSh0LG4saXx8MzUwNDQpfSx4PWZ1bmN0aW9uKHQsbixpLGUscixhLG8pe3ZhciBzPXYuZ2V0QXR0cmliTG9jYXRpb24obSx0KTt2LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHMpLHYudmVydGV4QXR0cmliUG9pbnRlcihzLG4sYXx8NTEyNiwhIW8saXx8MCxyfHwwKSxlJiZkLnZlcnRleEF0dHJpYkRpdmlzb3JBTkdMRShzLGUpfTt5KDM0OTYzLG5ldyBVaW50OEFycmF5KFswLDEsMiwyLDEsM10pKSx5KDM0OTYyLG5ldyBGbG9hdDMyQXJyYXkoWzAsMCwwLDEsMSwwLDEsMV0pKSx4KFwiZ1wiLDIpLHkoMzQ5NjIscywzNTA0OCkseChcImFcIiwyLDUyLDEpLHgoXCJzXCIsMiw1MiwxLDgpLHgoXCJyXCIsMSw1MiwxLDE2KSx4KFwidFwiLDIsNTIsMSwyMCkseChcInVcIiw0LDUyLDEsMjgpLHgoXCJjXCIsNCw1MiwxLDQ0LDUxMjEsITApLHgoXCJ6XCIsMSw1MiwxLDQ4KTt2YXIgYix3LHosUCxBPWZ1bmN0aW9uKHQpe3JldHVybiB2LmdldFVuaWZvcm1Mb2NhdGlvbihtLHQpfSxqPUEoXCJtXCIpLFM9QShcInhcIiksRD1BKFwialwiKSxFPTAsRj1mdW5jdGlvbigpe3c9dC5jbGllbnRIZWlnaHQqcHwwO3ZhciBuPXQud2lkdGghPT0oYj10LmNsaWVudFdpZHRoKnB8MCl8fHQuaGVpZ2h0IT09dztyZXR1cm4gdC53aWR0aD1iLHQuaGVpZ2h0PXcsbn0sTD1mdW5jdGlvbigpe0UmJih2LmJsZW5kRnVuYyhQPzE6bCxQPzA6NzcxKSx2LmRlcHRoRnVuYyhQPzUxMzo1MTUpLHYuYmluZFRleHR1cmUoMzU1Myx6LnAudCksdi51bmlmb3JtMWkoUyx6LnAudCksdi51bmlmb3JtMWYoRCxQP3oucC5hOjApLHYuYnVmZmVyU3ViRGF0YSgzNDk2MiwwLHUuc3ViYXJyYXkoMCwxMypFKSksZC5kcmF3RWxlbWVudHNJbnN0YW5jZWRBTkdMRSg0LDYsNTEyMSwwLEUpLEU9MCl9LF89ZnVuY3Rpb24odCl7aWYodC52aXNpYmxlKXs2NTUzNT09PUUmJkwoKTt2YXIgbj10LmZyYW1lLGk9bi51dnM7ei5wLnQhPT1uLnAudCYmKHoucC50JiZMKCksej1uKTt2YXIgZT0xMypFO3VbZSsrXT1uLmFuY2hvci54LHVbZSsrXT1uLmFuY2hvci55LHVbZSsrXT10LnNjYWxlLngqbi5zaXplLngsdVtlKytdPXQuc2NhbGUueSpuLnNpemUueSx1W2UrK109dC5yb3RhdGlvbix1W2UrK109dC5wb3NpdGlvbi54LHVbZSsrXT10LnBvc2l0aW9uLnksdVtlKytdPWlbMF0sdVtlKytdPWlbMV0sdVtlKytdPWlbMl0sdVtlKytdPWlbM10sY1tlKytdPSgoMTY3NzcyMTUmdC50aW50KTw8OHwyNTUqdC5hJjI1NSk+Pj4wLHVbZV09dC5sLnosRSsrfX0sQz17Z2w6dixjYW1lcmE6e2F0OmgoKSx0bzpoKCksYW5nbGU6MH0sYmFja2dyb3VuZDpmdW5jdGlvbih0LG4saSxlKXt2LmNsZWFyQ29sb3IodCxuLGksMD09PWU/MDplfHwxKX0sbGF5ZXI6ZnVuY3Rpb24odCl7dmFyIG49by5maW5kKGZ1bmN0aW9uKG4pe3JldHVybiBuLno9PT10fSk7cmV0dXJuIG58fChuPW5ldyBlKHQpLG8ucHVzaChuKSxvLnNvcnQoZnVuY3Rpb24odCxuKXtyZXR1cm4gbi56LXQuen0pKSxufSxhZGQ6ZnVuY3Rpb24odCl7YS5hZGQodCl9LHRleHR1cmU6ZnVuY3Rpb24odCxuLGksZSl7dmFyIHI9dC53aWR0aCxhPXQuaGVpZ2h0LG89di5jcmVhdGVUZXh0dXJlKCk7cmV0dXJuIHYuYmluZFRleHR1cmUoMzU1MyxvKSx2LnRleFBhcmFtZXRlcmkoMzU1MywxMDI0MCw5NzI4fCtpKSx2LnRleFBhcmFtZXRlcmkoMzU1MywxMDI0MSw5NzI4fCtpfCtlPDw4fCtlPDwxKSx2LnRleEltYWdlMkQoMzU1MywwLDY0MDgsNjQwOCw1MTIxLHQpLGUmJnYuZ2VuZXJhdGVNaXBtYXAoMzU1Mykse3NpemU6aChyLGEpLGFuY2hvcjpoKCksdXZzOlswLDAsMSwxXSxwOnthOjA9PT1uPzA6bnx8MSx0Om99LGZyYW1lOmZ1bmN0aW9uKHQsbixpKXtyZXR1cm57c2l6ZTpuLGFuY2hvcjppfHx0aGlzLmFuY2hvcix1dnM6W3QueC9yLHQueS9hLG4ueC9yLG4ueS9hXSxwOnRoaXMucH19fX0scmVzaXplOkYscmVuZGVyOmZ1bmN0aW9uKCl7RigpO3ZhciB0PUMuY2FtZXJhLG49dC5hdCxlPXQudG8scj10LmFuZ2xlLGE9bi54LWIqZS54LHM9bi55LXcqZS55LHU9TWF0aC5jb3MociksYz1NYXRoLnNpbihyKSxoPTIvYixmPS0yL3csbD1bdSpoLGMqZiwwLDAsLWMqaCx1KmYsMCwwLDAsMCwtMWUtNSwwLChuLngqKDEtdSkrbi55KmMpKmgtMiphL2ItMSwobi55KigxLXUpLW4ueCpjKSpmKzIqcy93KzEsMCwxXTt2LnVzZVByb2dyYW0obSksdi5lbmFibGUoMzA0Miksdi5lbmFibGUoMjkyOSksdi51bmlmb3JtTWF0cml4NGZ2KGosITEsbCksdi52aWV3cG9ydCgwLDAsYix3KSx2LmNsZWFyKDE2NjQwKSx6PWksUD0hMCxvLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIHQuby5pKF8pfSksTCgpLFA9ITE7Zm9yKHZhciBwPW8ubGVuZ3RoLTE7cD49MDtwLS0pb1twXS50LmkoXyk7TCgpfX07cmV0dXJuIEYoKSxDfTtyLlBvaW50PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe2lmKCEodGhpcyBpbnN0YW5jZW9mIHIuUG9pbnQpKXJldHVybiBuZXcgci5Qb2ludCh0LG4pO3RoaXMuc2V0KHQsbil9cmV0dXJuIHQucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLng9dHx8MCx0aGlzLnk9bnx8KDAhPT1uP3RoaXMueDowKSx0aGlzfSx0fSgpLHIuU3ByaXRlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChuLGkpe2lmKCEodGhpcyBpbnN0YW5jZW9mIHQpKXJldHVybiBuZXcgdChuLGkpO09iamVjdC5hc3NpZ24odGhpcyx7ZnJhbWU6bix2aXNpYmxlOiEwLHBvc2l0aW9uOnIuUG9pbnQoKSxyb3RhdGlvbjowLHNjYWxlOnIuUG9pbnQoMSksdGludDoxNjc3NzIxNSxhOjEsbDpudWxsLG46bnVsbH0saSl9dmFyIG49e2FscGhhOntjb25maWd1cmFibGU6ITB9fTtyZXR1cm4gbi5hbHBoYS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hfSxuLmFscGhhLnNldD1mdW5jdGlvbih0KXt2YXIgbj10PDEmJjE9PT10aGlzLmF8fDE9PT10JiZ0aGlzLmE8MTt0aGlzLmE9dCxuJiZ0aGlzLmZyYW1lLnAuYT4wJiZ0aGlzLmwmJnRoaXMubC5hZGQodGhpcyl9LHQucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbigpe3RoaXMubiYmdGhpcy5uLnIoKSx0aGlzLmw9bnVsbCx0aGlzLm49bnVsbH0sT2JqZWN0LmRlZmluZVByb3BlcnRpZXModC5wcm90b3R5cGUsbiksdH0oKSxtb2R1bGUuZXhwb3J0cz1yO1xuIiwiaW1wb3J0IHsgREVWSUNFX1dJRFRILCBERVZJQ0VfSEVJR0hULCBTUFJJVEVfTUFYIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgZHJhd0JnID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY29uc3Qgc2l6ZSA9IFNQUklURV9NQVg7XG4gIGNhbnZhcy53aWR0aCA9IHNpemU7XG4gIGNhbnZhcy5oZWlnaHQgPSBzaXplO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICBjb25zdCBnYXAgPSAxMDtcbiAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAwMDAnO1xuICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnO1xuICBjdHgucmVjdChnYXAsIGdhcCwgREVWSUNFX1dJRFRIIC0gZ2FwICogMiwgREVWSUNFX0hFSUdIVCAtIGdhcCAqIDIpO1xuICBjdHguZmlsbCgpO1xuICBjdHguc3Ryb2tlKCk7XG4gIHJldHVybiBjYW52YXM7XG59XG5cbmV4cG9ydCBjb25zdCBtYWtlRGVicmlzID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY29uc3Qgc2l6ZSA9IDMyO1xuICBjb25zdCBoYWxmID0gc2l6ZSAvIDI7XG4gIGNhbnZhcy53aWR0aCA9IHNpemU7XG4gIGNhbnZhcy5oZWlnaHQgPSBzaXplO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICBsZXQgb2Zmc2V0ID0gMDtcblxuICBjdHgubGluZVdpZHRoID0gc2l6ZSAvIDE2O1xuICBjdHguZmlsbFN0eWxlID0gJyNjY2NjY2MnO1xuICBjdHguc3Ryb2tlU3R5bGUgPSAnIzExMTExMSc7XG4gIGN0eC5iZWdpblBhdGgoKTtcblxuICAvLyBjdHgubW92ZVRvKG9mZnNldCArIGhhbGYsIGhhbGYpO1xuICAvLyBjdHgubW92ZVRvKG9mZnNldCArIGhhbGYgLSBoYWxmICogMC44LCBoYWxmICogMC4yKTtcbiAgZm9yIChsZXQgYW5nbGUgPSAwOyBhbmdsZSA8IE1hdGguUEkgKiAyOyBhbmdsZSArPSAoTWF0aC5QSSAqIDIpIC8gNSkge1xuICAgIGN0eC5saW5lVG8ob2Zmc2V0ICsgaGFsZiAtIE1hdGguc2luKGFuZ2xlKSAqIGhhbGYgKiAwLjgsIGhhbGYgLSBNYXRoLmNvcyhhbmdsZSkgKiBoYWxmICogMC44KTtcbiAgfVxuICBjdHgubGluZVRvKG9mZnNldCArIGhhbGYsIGhhbGYpO1xuXG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgY3R4LmZpbGwoKTtcbiAgY3R4LnN0cm9rZSgpO1xuXG4gIHJldHVybiBjYW52YXM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SW1hZ2UgPSAoaW1nLCBzaXplID0gMjU2KSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXMud2lkdGggPSBzaXplO1xuICBjYW52YXMuaGVpZ2h0ID0gc2l6ZTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgcmV0dXJuIGNhbnZhcztcbn1cbiIsImltcG9ydCBSZW5kZXJlciBmcm9tICdqczEzay0yZCc7XG5pbXBvcnQgeyBtYWtlRGVicmlzLCBkcmF3QmcsIGdldEltYWdlIH0gZnJvbSAnLi9HcmFwaGljcy9ncmFwaGljcyc7XG5pbXBvcnQgeyBERVZJQ0VfV0lEVEgsIERFVklDRV9IRUlHSFQsIGluaXRDb25maWdzLCBTUFJJVEVfTUFYIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IHZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldycpO1xuXG5jbGFzcyBSZW5kZXIge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gIH1cblxuICBsb2coKSB7XG4gICAgY29uc29sZS5sb2coREVWSUNFX0hFSUdIVCk7XG4gIH07XG5cbiAgdGVzdCgpIHtcbiAgICB0aGlzLmluaXRVSSgpO1xuICAgIGNvbnN0IHsgUG9pbnQsIFNwcml0ZSB9ID0gUmVuZGVyZXI7XG5cbiAgICBpbml0Q29uZmlncyh2aWV3KTtcbiAgICBjb25zdCBzY2VuZSA9IFJlbmRlcmVyKHZpZXcpO1xuICAgIHNjZW5lLmJhY2tncm91bmQoMC45NSwgMC45NSwgMC45NSwgMSk7XG5cbiAgICAvLyBkZWJyaXNcbiAgICBjb25zdCBhdGxhcyA9IHNjZW5lLnRleHR1cmUobWFrZURlYnJpcygpKTtcbiAgICBjb25zdCBmcmFtZSA9IGF0bGFzLmZyYW1lKFBvaW50KCksIFBvaW50KDMyKSk7XG4gICAgY29uc3Qgc3ByaXRlID0gU3ByaXRlKGZyYW1lKTtcblxuICAgIC8vIGJnXG4gICAgY29uc3QgYXRsYXMyID0gc2NlbmUudGV4dHVyZShkcmF3QmcoKSk7XG4gICAgY29uc3QgZnJhbWUyID0gYXRsYXMyLmZyYW1lKFBvaW50KCksIFBvaW50KFNQUklURV9NQVgpKTtcbiAgICBjb25zdCBiZyA9IFNwcml0ZShmcmFtZTIpO1xuXG4gICAgY29uc3QgbGF5ZXIwID0gc2NlbmUubGF5ZXIoMCk7XG4gICAgY29uc3QgbGF5ZXIxID0gc2NlbmUubGF5ZXIoMSk7XG4gICAgbGF5ZXIwLmFkZChiZyk7XG4gICAgbGF5ZXIxLmFkZChzcHJpdGUpO1xuXG4gICAgLy8gaW1nXG4gICAgY29uc3QgdEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCBpbWcsIGF0bGFzMztcbiAgICB0SW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGF0bGFzMyA9IHNjZW5lLnRleHR1cmUoZ2V0SW1hZ2UodEltZykpO1xuICAgICAgY29uc3QgZnJhbWUzID0gYXRsYXMzLmZyYW1lKFBvaW50KDApLCBQb2ludCgzMikpO1xuICAgICAgaW1nID0gU3ByaXRlKGZyYW1lMyk7XG4gICAgICBsYXllcjEuYWRkKGltZyk7XG4gICAgfVxuICAgIHRJbWcuc3JjID0gJ2ltYWdlcy93aXRjaC5wbmcnO1xuXG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb25zdCBsb29wID0gKCkgPT4ge1xuICAgICAgc2NlbmUucmVzaXplKCk7XG4gICAgICAvLyBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHZpZXc7IC8vIG9yIHNjZW5lLmdsLmNhbnZhc1xuICAgICAgc3ByaXRlLnBvc2l0aW9uLnNldCgyMCwgMjApO1xuICAgICAgLy8g6LCD6YCfIGNvdW50ICUgMyA9PT0gMFxuICAgICAgaWYgKGltZyAmJiB0aGlzLnBsYXlpbmcgJiYgY291bnQgJSAzID09PSAwKSB7XG4gICAgICAgIGltZy5mcmFtZSA9IGF0bGFzMy5mcmFtZShQb2ludChjb3VudCAlIDggKiAzMiwgMzIgKiAyKSwgUG9pbnQoMzIpKTtcbiAgICAgICAgaW1nLnBvc2l0aW9uLnNldCgxMDAsIDEwMCk7XG4gICAgICB9XG4gICAgICBjb3VudCsrO1xuICAgICAgc2NlbmUucmVuZGVyKCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfTtcblxuICAgIGxvb3AoKTtcbiAgfVxuXG4gIGluaXRVSSgpIHtcbiAgICBjb25zdCBwbGF5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcGxheUJ0bi5pbm5lckhUTUwgPSAnUGF1c2UnO1xuICAgIHBsYXlCdG4uY2xhc3NOYW1lID0gJ3VpJztcbiAgICBwbGF5QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnBsYXlpbmcgPSAhdGhpcy5wbGF5aW5nO1xuICAgICAgaWYgKHRoaXMucGxheWluZykge1xuICAgICAgICBwbGF5QnRuLmlubmVySFRNTCA9ICdQYXVzZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5QnRuLmlubmVySFRNTCA9ICdQbGF5JztcbiAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5QnRuKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUmVuZGVyKCk7XG4iLCJleHBvcnQgY29uc3QgREVWSUNFX1dJRFRIID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuZXhwb3J0IGNvbnN0IERFVklDRV9IRUlHSFQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuZXhwb3J0IGNvbnN0IFNQUklURV9XSURUSF9NQVggPSBNYXRoLnBvdygyLCBNYXRoLmZsb29yKE1hdGgubG9nMihERVZJQ0VfV0lEVEgpKSk7XG5leHBvcnQgY29uc3QgU1BSSVRFX0hFSUdIVF9NQVggPSBNYXRoLnBvdygyLCBNYXRoLmZsb29yKE1hdGgubG9nMihERVZJQ0VfSEVJR0hUKSkpO1xuZXhwb3J0IGNvbnN0IFNQUklURV9NQVggPSBERVZJQ0VfV0lEVEggPiBERVZJQ0VfSEVJR0hUID9cbiAgTWF0aC5wb3coMiwgTWF0aC5jZWlsKE1hdGgubG9nMihERVZJQ0VfV0lEVEgpKSkgOlxuICBNYXRoLnBvdygyLCBNYXRoLmNlaWwoTWF0aC5sb2cyKERFVklDRV9IRUlHSFQpKSk7IC8vIG1heCBzcHJpdGUgeW91J2xsIG5lZWRcbi8vIGF2YWlsYWJsZSBzcHJpdGVzIHdpZHRoL2hlaWdodCBsaXN0XG5leHBvcnQgbGV0IFNQUklURV9XSURUSFM7XG5leHBvcnQgbGV0IFNQUklURV9IRUlHSFRTO1xuXG4vLyBzcHJpdGUgbWF4IG11c3QgYmUgMl5uO1xuY29uc3QgZ2V0Q2FzY2FkZUxpc3QgPSBtYXggPT4ge1xuICBjb25zdCBpbmRpY2F0b3IgPSBNYXRoLmxvZzIobWF4KTtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBpbmRpY2F0b3I7IGkrKykge1xuICAgIGxpc3QucHVzaChNYXRoLnBvdygyLCBpKSk7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0Q29uZmlncyA9IGNhbnZhcyA9PiB7XG4gIFNQUklURV9XSURUSFMgPSBnZXRDYXNjYWRlTGlzdChTUFJJVEVfV0lEVEhfTUFYKTtcbiAgU1BSSVRFX0hFSUdIVFMgPSBnZXRDYXNjYWRlTGlzdChTUFJJVEVfSEVJR0hUX01BWCk7XG4gIGNhbnZhcy53aWR0aCA9IERFVklDRV9XSURUSDtcbiAgY2FudmFzLmhlaWdodCA9IERFVklDRV9IRUlHSFQ7XG59XG4iXX0=
