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
var getImage = function (src) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  var img = document.createElement("img");
  img.src = src;
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
  };
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

var _utils = require("./utils");

var DEVICE_WIDTH = _utils.DEVICE_WIDTH;
var DEVICE_HEIGHT = _utils.DEVICE_HEIGHT;
var initConfigs = _utils.initConfigs;
var SPRITE_MAX = _utils.SPRITE_MAX;

var view = document.getElementById("view");

var Render = (function () {
  function Render() {
    _classCallCheck(this, Render);
  }

  _createClass(Render, {
    log: {
      value: function log() {
        console.log(DEVICE_HEIGHT);
      }
    },
    test: {
      value: function test() {
        var Point = Renderer.Point;
        var Sprite = Renderer.Sprite;

        initConfigs(view);
        var scene = Renderer(view);
        scene.background(0.95, 0.95, 0.95, 1);

        var atlas = scene.texture(makeDebris());
        var frame = atlas.frame(Point(), Point(32));
        var sprite = Sprite(frame);
        var atlas2 = scene.texture(drawBg());
        var frame2 = atlas2.frame(Point(), Point(SPRITE_MAX));
        var bg = Sprite(frame2);
        // scene.add(sprite);
        var layer0 = scene.layer(0);
        var layer1 = scene.layer(1);
        layer0.add(bg);
        layer1.add(sprite);
        var loop = function () {
          scene.resize();
          var width = view.width;
          var height = view.height;
          // or scene.gl.canvas
          sprite.position.set(20, 20);
          scene.render();
          requestAnimationFrame(loop);
        };

        loop();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc3RyazIzMzMvRG9jdW1lbnRzL1dvcmtzcGFjZS9fUFJKVEhJU1lFQVIvanMxM2svc3JjL2pzL3NjcmlwdC5qcyIsIi9Vc2Vycy9zdHJrMjMzMy9Eb2N1bWVudHMvV29ya3NwYWNlL19QUkpUSElTWUVBUi9qczEzay9ub2RlX21vZHVsZXMvanMxM2stMmQvZGlzdC9yZW5kZXJlci5qcyIsIi9Vc2Vycy9zdHJrMjMzMy9Eb2N1bWVudHMvV29ya3NwYWNlL19QUkpUSElTWUVBUi9qczEzay9zcmMvanMvR3JhcGhpY3MvZ3JhcGhpY3MuanMiLCIvVXNlcnMvc3RyazIzMzMvRG9jdW1lbnRzL1dvcmtzcGFjZS9fUFJKVEhJU1lFQVIvanMxM2svc3JjL2pzL3JlbmRlci5qcyIsIi9Vc2Vycy9zdHJrMjMzMy9Eb2N1bWVudHMvV29ya3NwYWNlL19QUkpUSElTWUVBUi9qczEzay9zcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0lDQU8sTUFBTSwyQkFBTSxVQUFVOztBQUU3QixNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7OztBQ0ZkO0FBQ0E7Ozs7Ozs7O3FCQ0R3RCxVQUFVOztJQUF6RCxZQUFZLFVBQVosWUFBWTtJQUFFLGFBQWEsVUFBYixhQUFhO0lBQUUsVUFBVSxVQUFWLFVBQVU7QUFFekMsSUFBTSxNQUFNLEdBQUcsWUFBTTtBQUMxQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hELE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQztBQUN4QixRQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNwQixRQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNyQixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVwQyxNQUFNLEdB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QUFXLEdBQVgsV0FBVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVuZGVyIGZyb20gJy4vcmVuZGVyJztcblxuUmVuZGVyLnRlc3QoKTtcbiIsInZhciB0PWZ1bmN0aW9uKHQsbixpKXt0aGlzLmw9dCx0aGlzLmM9bix0aGlzLm49aSx0aGlzLnA9bnVsbH07dC5wcm90b3R5cGUucj1mdW5jdGlvbigpe3RoaXMucD90aGlzLnAubj10aGlzLm46dGhpcy5sLmg9dGhpcy5uLHRoaXMubiYmKHRoaXMubi5wPXRoaXMucCl9O3ZhciBuPWZ1bmN0aW9uKCl7dGhpcy5oPW51bGx9O24ucHJvdG90eXBlLmFkZD1mdW5jdGlvbihuKXt2YXIgaT1uZXcgdCh0aGlzLG4sdGhpcy5oKTtyZXR1cm4gdGhpcy5oJiYodGhpcy5oLnA9aSksdGhpcy5oPWksaX0sbi5wcm90b3R5cGUuaT1mdW5jdGlvbih0KXtmb3IodmFyIG49dGhpcy5oO247KXQobi5jKSxuPW4ubn07dmFyIGk9e3A6e3Q6MH19LGU9ZnVuY3Rpb24odCl7dGhpcy56PXQsdGhpcy5vPW5ldyBuLHRoaXMudD1uZXcgbn07ZS5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKHQpe3QucmVtb3ZlKCksdC5sPXRoaXMsdC5uPSgxIT09dC5hfHwwPT09dC5mcmFtZS5wLmE/dGhpcy50OnRoaXMubykuYWRkKHQpfTt2YXIgcj1mdW5jdGlvbih0LG4pe3ZhciBhPW5ldyBlKDApLG89W2FdLHM9bmV3IEFycmF5QnVmZmVyKDM0MDc4MjApLHU9bmV3IEZsb2F0MzJBcnJheShzKSxjPW5ldyBVaW50MzJBcnJheShzKSxoPXIuUG9pbnQsZj1PYmplY3QuYXNzaWduKHthbnRpYWxpYXM6ITEsYWxwaGE6ITF9LG4pLGw9Zi5hbHBoYT8xOjc3MCxwPWYuc2NhbGV8fDE7ZGVsZXRlIGYuc2NhbGU7dmFyIHY9dC5nZXRDb250ZXh0KFwid2ViZ2xcIixmKSxkPXYuZ2V0RXh0ZW5zaW9uKFwiQU5HTEVfaW5zdGFuY2VkX2FycmF5c1wiKSxnPWZ1bmN0aW9uKHQsbil7dmFyIGk9di5jcmVhdGVTaGFkZXIobik7cmV0dXJuIHYuc2hhZGVyU291cmNlKGksdCksdi5jb21waWxlU2hhZGVyKGkpLGl9LG09di5jcmVhdGVQcm9ncmFtKCk7di5hdHRhY2hTaGFkZXIobSxnKFwiYXR0cmlidXRlIHZlYzIgZztcXG5hdHRyaWJ1dGUgdmVjMiBhO1xcbmF0dHJpYnV0ZSB2ZWMyIHQ7XFxuYXR0cmlidXRlIGZsb2F0IHI7XFxuYXR0cmlidXRlIHZlYzIgcztcXG5hdHRyaWJ1dGUgdmVjNCB1O1xcbmF0dHJpYnV0ZSB2ZWM0IGM7XFxuYXR0cmlidXRlIGZsb2F0IHo7XFxudW5pZm9ybSBtYXQ0IG07XFxudmFyeWluZyB2ZWMyIHY7XFxudmFyeWluZyB2ZWM0IGk7XFxudm9pZCBtYWluKCl7XFxudj11Lnh5K2cqdS56dztcXG5pPWMuYWJncjtcXG52ZWMyIHA9KGctYSkqcztcXG5mbG9hdCBxPWNvcyhyKTtcXG5mbG9hdCB3PXNpbihyKTtcXG5wPXZlYzIocC54KnEtcC55KncscC54KncrcC55KnEpO1xcbnArPWErdDtcXG5nbF9Qb3NpdGlvbj1tKnZlYzQocCx6LDEpO31cIiwzNTYzMykpLHYuYXR0YWNoU2hhZGVyKG0sZyhcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xcbnVuaWZvcm0gc2FtcGxlcjJEIHg7XFxudW5pZm9ybSBmbG9hdCBqO1xcbnZhcnlpbmcgdmVjMiB2O1xcbnZhcnlpbmcgdmVjNCBpO1xcbnZvaWQgbWFpbigpe1xcbnZlYzQgYz10ZXh0dXJlMkQoeCx2KTtcXG5nbF9GcmFnQ29sb3I9YyppO1xcbmlmKGo+MC4wKXtcXG5pZihjLmE8ailkaXNjYXJkO1xcbmdsX0ZyYWdDb2xvci5hPTEuMDt9O31cIiwzNTYzMikpLHYubGlua1Byb2dyYW0obSk7dmFyIHk9ZnVuY3Rpb24odCxuLGkpe3YuYmluZEJ1ZmZlcih0LHYuY3JlYXRlQnVmZmVyKCkpLHYuYnVmZmVyRGF0YSh0LG4saXx8MzUwNDQpfSx4PWZ1bmN0aW9uKHQsbixpLGUscixhLG8pe3ZhciBzPXYuZ2V0QXR0cmliTG9jYXRpb24obSx0KTt2LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHMpLHYudmVydGV4QXR0cmliUG9pbnRlcihzLG4sYXx8NTEyNiwhIW8saXx8MCxyfHwwKSxlJiZkLnZlcnRleEF0dHJpYkRpdmlzb3JBTkdMRShzLGUpfTt5KDM0OTYzLG5ldyBVaW50OEFycmF5KFswLDEsMiwyLDEsM10pKSx5KDM0OTYyLG5ldyBGbG9hdDMyQXJyYXkoWzAsMCwwLDEsMSwwLDEsMV0pKSx4KFwiZ1wiLDIpLHkoMzQ5NjIscywzNTA0OCkseChcImFcIiwyLDUyLDEpLHgoXCJzXCIsMiw1MiwxLDgpLHgoXCJyXCIsMSw1MiwxLDE2KSx4KFwidFwiLDIsNTIsMSwyMCkseChcInVcIiw0LDUyLDEsMjgpLHgoXCJjXCIsNCw1MiwxLDQ0LDUxMjEsITApLHgoXCJ6XCIsMSw1MiwxLDQ4KTt2YXIgYix3LHosUCxBPWZ1bmN0aW9uKHQpe3JldHVybiB2LmdldFVuaWZvcm1Mb2NhdGlvbihtLHQpfSxqPUEoXCJtXCIpLFM9QShcInhcIiksRD1BKFwialwiKSxFPTAsRj1mdW5jdGlvbigpe3c9dC5jbGllbnRIZWlnaHQqcHwwO3ZhciBuPXQud2lkdGghPT0oYj10LmNsaWVudFdpZHRoKnB8MCl8fHQuaGVpZ2h0IT09dztyZXR1cm4gdC53aWR0aD1iLHQuaGVpZ2h0PXcsbn0sTD1mdW5jdGlvbigpe0UmJih2LmJsZW5kRnVuYyhQPzE6bCxQPzA6NzcxKSx2LmRlcHRoRnVuYyhQPzUxMzo1MTUpLHYuYmluZFRleHR1cmUoMzU1Myx6LnAudCksdi51bmlmb3JtMWkoUyx6LnAudCksdi51bmlmb3JtMWYoRCxQP3oucC5hOjApLHYuYnVmZmVyU3ViRGF0YSgzNDk2MiwwLHUuc3ViYXJyYXkoMCwxMypFKSksZC5kcmF3RWxlbWVudHNJbnN0YW5jZWRBTkdMRSg0LDYsNTEyMSwwLEUpLEU9MCl9LF89ZnVuY3Rpb24odCl7aWYodC52aXNpYmxlKXs2NTUzNT09PUUmJkwoKTt2YXIgbj10LmZyYW1lLGk9bi51dnM7ei5wLnQhPT1uLnAudCYmKHoucC50JiZMKCksej1uKTt2YXIgZT0xMypFO3VbZSsrXT1uLmFuY2hvci54LHVbZSsrXT1uLmFuY2hvci55LHVbZSsrXT10LnNjYWxlLngqbi5zaXplLngsdVtlKytdPXQuc2NhbGUueSpuLnNpemUueSx1W2UrK109dC5yb3RhdGlvbix1W2UrK109dC5wb3NpdGlvbi54LHVbZSsrXT10LnBvc2l0aW9uLnksdVtlKytdPWlbMF0sdVtlKytdPWlbMV0sdVtlKytdPWlbMl0sdVtlKytdPWlbM10sY1tlKytdPSgoMTY3NzcyMTUmdC50aW50KTw8OHwyNTUqdC5hJjI1NSk+Pj4wLHVbZV09dC5sLnosRSsrfX0sQz17Z2w6dixjYW1lcmE6e2F0OmgoKSx0bzpoKCksYW5nbGU6MH0sYmFja2dyb3VuZDpmdW5jdGlvbih0LG4saSxlKXt2LmNsZWFyQ29sb3IodCxuLGksMD09PWU/MDplfHwxKX0sbGF5ZXI6ZnVuY3Rpb24odCl7dmFyIG49by5maW5kKGZ1bmN0aW9uKG4pe3JldHVybiBuLno9PT10fSk7cmV0dXJuIG58fChuPW5ldyBlKHQpLG8ucHVzaChuKSxvLnNvcnQoZnVuY3Rpb24odCxuKXtyZXR1cm4gbi56LXQuen0pKSxufSxhZGQ6ZnVuY3Rpb24odCl7YS5hZGQodCl9LHRleHR1cmU6ZnVuY3Rpb24odCxuLGksZSl7dmFyIHI9dC53aWR0aCxhPXQuaGVpZ2h0LG89di5jcmVhdGVUZXh0dXJlKCk7cmV0dXJuIHYuYmluZFRleHR1cmUoMzU1MyxvKSx2LnRleFBhcmFtZXRlcmkoMzU1MywxMDI0MCw5NzI4fCtpKSx2LnRleFBhcmFtZXRlcmkoMzU1MywxMDI0MSw5NzI4fCtpfCtlPDw4fCtlPDwxKSx2LnRleEltYWdlMkQoMzU1MywwLDY0MDgsNjQwOCw1MTIxLHQpLGUmJnYuZ2VuZXJhdGVNaXBtYXAoMzU1Mykse3NpemU6aChyLGEpLGFuY2hvcjpoKCksdXZzOlswLDAsMSwxXSxwOnthOjA9PT1uPzA6bnx8MSx0Om99LGZyYW1lOmZ1bmN0aW9uKHQsbixpKXtyZXR1cm57c2l6ZTpuLGFuY2hvcjppfHx0aGlzLmFuY2hvcix1dnM6W3QueC9yLHQueS9hLG4ueC9yLG4ueS9hXSxwOnRoaXMucH19fX0scmVzaXplOkYscmVuZGVyOmZ1bmN0aW9uKCl7RigpO3ZhciB0PUMuY2FtZXJhLG49dC5hdCxlPXQudG8scj10LmFuZ2xlLGE9bi54LWIqZS54LHM9bi55LXcqZS55LHU9TWF0aC5jb3MociksYz1NYXRoLnNpbihyKSxoPTIvYixmPS0yL3csbD1bdSpoLGMqZiwwLDAsLWMqaCx1KmYsMCwwLDAsMCwtMWUtNSwwLChuLngqKDEtdSkrbi55KmMpKmgtMiphL2ItMSwobi55KigxLXUpLW4ueCpjKSpmKzIqcy93KzEsMCwxXTt2LnVzZVByb2dyYW0obSksdi5lbmFibGUoMzA0Miksdi5lbmFibGUoMjkyOSksdi51bmlmb3JtTWF0cml4NGZ2KGosITEsbCksdi52aWV3cG9ydCgwLDAsYix3KSx2LmNsZWFyKDE2NjQwKSx6PWksUD0hMCxvLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIHQuby5pKF8pfSksTCgpLFA9ITE7Zm9yKHZhciBwPW8ubGVuZ3RoLTE7cD49MDtwLS0pb1twXS50LmkoXyk7TCgpfX07cmV0dXJuIEYoKSxDfTtyLlBvaW50PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe2lmKCEodGhpcyBpbnN0YW5jZW9mIHIuUG9pbnQpKXJldHVybiBuZXcgci5Qb2ludCh0LG4pO3RoaXMuc2V0KHQsbil9cmV0dXJuIHQucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLng9dHx8MCx0aGlzLnk9bnx8KDAhPT1uP3RoaXMueDowKSx0aGlzfSx0fSgpLHIuU3ByaXRlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChuLGkpe2lmKCEodGhpcyBpbnN0YW5jZW9mIHQpKXJldHVybiBuZXcgdChuLGkpO09iamVjdC5hc3NpZ24odGhpcyx7ZnJhbWU6bix2aXNpYmxlOiEwLHBvc2l0aW9uOnIuUG9pbnQoKSxyb3RhdGlvbjowLHNjYWxlOnIuUG9pbnQoMSksdGludDoxNjc3NzIxNSxhOjEsbDpudWxsLG46bnVsbH0saSl9dmFyIG49e2FscGhhOntjb25maWd1cmFibGU6ITB9fTtyZXR1cm4gbi5hbHBoYS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hfSxuLmFscGhhLnNldD1mdW5jdGlvbih0KXt2YXIgbj10PDEmJjE9PT10aGlzLmF8fDE9PT10JiZ0aGlzLmE8MTt0aGlzLmE9dCxuJiZ0aGlzLmZyYW1lLnAuYT4wJiZ0aGlzLmwmJnRoaXMubC5hZGQodGhpcyl9LHQucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbigpe3RoaXMubiYmdGhpcy5uLnIoKSx0aGlzLmw9bnVsbCx0aGlzLm49bnVsbH0sT2JqZWN0LmRlZmluZVByb3BlcnRpZXModC5wcm90b3R5cGUsbiksdH0oKSxtb2R1bGUuZXhwb3J0cz1yO1xuIiwiaW1wb3J0IHsgREVWSUNFX1dJRFRILCBERVZJQ0VfSEVJR0hULCBTUFJJVEVfTUFYIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgZHJhd0JnID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY29uc3Qgc2l6ZSA9IFNQUklURV9NQVg7XG4gIGNhbnZhcy53aWR0aCA9IHNpemU7XG4gIGNhbnZhcy5oZWlnaHQgPSBzaXplO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICBjb25zdCBnYXAgPSAxMDtcbiAgY3R4LnN0cm9rZVN0eWxlPScjMDAwMDAwJztcbiAgY3R4LmZpbGxTdHlsZT0nI2ZmZmZmZic7XG4gIGN0eC5yZWN0KGdhcCwgZ2FwLCBERVZJQ0VfV0lEVEggLSBnYXAgKiAyLCBERVZJQ0VfSEVJR0hUIC0gZ2FwICogMik7XG4gIGN0eC5maWxsKCk7XG4gIGN0eC5zdHJva2UoKTtcbiAgcmV0dXJuIGNhbnZhcztcbn1cblxuZXhwb3J0IGNvbnN0IG1ha2VEZWJyaXMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjb25zdCBzaXplID0gMzI7XG4gIGNvbnN0IGhhbGYgPSBzaXplIC8gMjtcbiAgY2FudmFzLndpZHRoID0gc2l6ZTtcbiAgY2FudmFzLmhlaWdodCA9IHNpemU7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIGxldCBvZmZzZXQgPSAwO1xuXG4gIGN0eC5saW5lV2lkdGggPSBzaXplIC8gMTY7XG4gIGN0eC5maWxsU3R5bGUgPSAnI2NjY2NjYyc7XG4gIGN0eC5zdHJva2VTdHlsZSA9ICcjMTExMTExJztcbiAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gIC8vIGN0eC5tb3ZlVG8ob2Zmc2V0ICsgaGFsZiwgaGFsZik7XG4gIC8vIGN0eC5tb3ZlVG8ob2Zmc2V0ICsgaGFsZiAtIGhhbGYgKiAwLjgsIGhhbGYgKiAwLjIpO1xuICBmb3IgKGxldCBhbmdsZSA9IDA7IGFuZ2xlIDwgTWF0aC5QSSAqIDI7IGFuZ2xlICs9IChNYXRoLlBJICogMikgLyA1KSB7XG4gICAgY3R4LmxpbmVUbyhvZmZzZXQgKyBoYWxmIC0gTWF0aC5zaW4oYW5nbGUpICogaGFsZiAqIDAuOCwgaGFsZiAtIE1hdGguY29zKGFuZ2xlKSAqIGhhbGYgKiAwLjgpO1xuICB9XG4gIGN0eC5saW5lVG8ob2Zmc2V0ICsgaGFsZiwgaGFsZik7XG5cbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBjdHguZmlsbCgpO1xuICBjdHguc3Ryb2tlKCk7XG5cbiAgcmV0dXJuIGNhbnZhcztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRJbWFnZSA9IHNyYyA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSBzcmM7XG4gIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICB9XG4gIHJldHVybiBjYW52YXNcbn1cbiIsImltcG9ydCBSZW5kZXJlciBmcm9tICdqczEzay0yZCc7XG5pbXBvcnQgeyBtYWtlRGVicmlzLCBkcmF3QmcgfSBmcm9tICcuL0dyYXBoaWNzL2dyYXBoaWNzJztcbmltcG9ydCB7IERFVklDRV9XSURUSCwgREVWSUNFX0hFSUdIVCwgaW5pdENvbmZpZ3MsIFNQUklURV9NQVggfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgdmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3Jyk7XG5cbmNsYXNzIFJlbmRlciB7XG4gIGxvZygpIHtcbiAgICBjb25zb2xlLmxvZyhERVZJQ0VfSEVJR0hUKTtcbiAgfTtcblxuICB0ZXN0KCkge1xuICAgIGNvbnN0IHsgUG9pbnQsIFNwcml0ZSB9ID0gUmVuZGVyZXI7XG5cbiAgICBpbml0Q29uZmlncyh2aWV3KTtcbiAgICBjb25zdCBzY2VuZSA9IFJlbmRlcmVyKHZpZXcpO1xuICAgIHNjZW5lLmJhY2tncm91bmQoMC45NSwgMC45NSwgMC45NSwgMSk7XG5cbiAgICBjb25zdCBhdGxhcyA9IHNjZW5lLnRleHR1cmUobWFrZURlYnJpcygpKTtcbiAgICBjb25zdCBmcmFtZSA9IGF0bGFzLmZyYW1lKFBvaW50KCksIFBvaW50KDMyKSk7XG4gICAgY29uc3Qgc3ByaXRlID0gU3ByaXRlKGZyYW1lKTtcbiAgICBjb25zdCBhdGxhczIgPSBzY2VuZS50ZXh0dXJlKGRyYXdCZygpKTtcbiAgICBjb25zdCBmcmFtZTIgPSBhdGxhczIuZnJhbWUoUG9pbnQoKSwgUG9pbnQoU1BSSVRFX01BWCkpO1xuICAgIGNvbnN0IGJnID0gU3ByaXRlKGZyYW1lMik7XG4gICAgLy8gc2NlbmUuYWRkKHNwcml0ZSk7XG4gICAgY29uc3QgbGF5ZXIwID0gc2NlbmUubGF5ZXIoMCk7XG4gICAgY29uc3QgbGF5ZXIxID0gc2NlbmUubGF5ZXIoMSk7XG4gICAgbGF5ZXIwLmFkZChiZyk7XG4gICAgbGF5ZXIxLmFkZChzcHJpdGUpO1xuICAgIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgICBzY2VuZS5yZXNpemUoKTtcbiAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdmlldzsgLy8gb3Igc2NlbmUuZ2wuY2FudmFzXG4gICAgICBzcHJpdGUucG9zaXRpb24uc2V0KDIwLCAyMCk7XG4gICAgICBzY2VuZS5yZW5kZXIoKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICB9O1xuXG4gICAgbG9vcCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSZW5kZXIoKTtcbiIsImV4cG9ydCBjb25zdCBERVZJQ0VfV0lEVEggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG5leHBvcnQgY29uc3QgREVWSUNFX0hFSUdIVCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5leHBvcnQgY29uc3QgU1BSSVRFX1dJRFRIX01BWCA9IE1hdGgucG93KDIsIE1hdGguZmxvb3IoTWF0aC5sb2cyKERFVklDRV9XSURUSCkpKTtcbmV4cG9ydCBjb25zdCBTUFJJVEVfSEVJR0hUX01BWCA9IE1hdGgucG93KDIsIE1hdGguZmxvb3IoTWF0aC5sb2cyKERFVklDRV9IRUlHSFQpKSk7XG5leHBvcnQgY29uc3QgU1BSSVRFX01BWCA9IERFVklDRV9XSURUSCA+IERFVklDRV9IRUlHSFQgP1xuICBNYXRoLnBvdygyLCBNYXRoLmNlaWwoTWF0aC5sb2cyKERFVklDRV9XSURUSCkpKSA6XG4gIE1hdGgucG93KDIsIE1hdGguY2VpbChNYXRoLmxvZzIoREVWSUNFX0hFSUdIVCkpKTsgLy8gbWF4IHNwcml0ZSB5b3UnbGwgbmVlZFxuLy8gYXZhaWxhYmxlIHNwcml0ZXMgd2lkdGgvaGVpZ2h0IGxpc3RcbmV4cG9ydCBsZXQgU1BSSVRFX1dJRFRIUztcbmV4cG9ydCBsZXQgU1BSSVRFX0hFSUdIVFM7XG5cbi8vIHNwcml0ZSBtYXggbXVzdCBiZSAyXm47XG5jb25zdCBnZXRDYXNjYWRlTGlzdCA9IG1heCA9PiB7XG4gIGNvbnN0IGluZGljYXRvciA9IE1hdGgubG9nMihtYXgpO1xuICBjb25zdCBsaXN0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGluZGljYXRvcjsgaSsrKSB7XG4gICAgbGlzdC5wdXNoKE1hdGgucG93KDIsIGkpKTtcbiAgfVxuICByZXR1cm4gbGlzdDtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRDb25maWdzID0gY2FudmFzID0+IHtcbiAgU1BSSVRFX1dJRFRIUyA9IGdldENhc2NhZGVMaXN0KFNQUklURV9XSURUSF9NQVgpO1xuICBTUFJJVEVfSEVJR0hUUyA9IGdldENhc2NhZGVMaXN0KFNQUklURV9IRUlHSFRfTUFYKTtcbiAgY2FudmFzLndpZHRoID0gREVWSUNFX1dJRFRIO1xuICBjYW52YXMuaGVpZ2h0ID0gREVWSUNFX0hFSUdIVDtcbn1cbiJdfQ==
