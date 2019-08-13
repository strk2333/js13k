import Renderer from 'js13k-2d';
import { makeDebris, drawBg, getImage } from './Graphics/graphics';
import { DEVICE_WIDTH, DEVICE_HEIGHT, initConfigs, SPRITE_MAX } from './utils';

const view = document.getElementById('view');

class Render {

  constructor() {
    this.playing = true;
  }

  log() {
    console.log(DEVICE_HEIGHT);
  };

  test() {
    this.initUI();
    const { Point, Sprite } = Renderer;

    initConfigs(view);
    const scene = Renderer(view);
    scene.background(0.95, 0.95, 0.95, 1);

    // debris
    const atlas = scene.texture(makeDebris());
    const frame = atlas.frame(Point(), Point(32));
    const sprite = Sprite(frame);
    sprite.position.set(20, 20);

    // bg
    const atlas2 = scene.texture(drawBg());
    const frame2 = atlas2.frame(Point(), Point(DEVICE_WIDTH, DEVICE_HEIGHT));
    const bg = Sprite(frame2);

    const layer0 = scene.layer(0);
    const layer1 = scene.layer(1);
    layer0.add(bg);
    layer1.add(sprite);
    // img
    const tImg = new Image();
    let img, atlas3;
    tImg.onload = () => {
      atlas3 = scene.texture(getImage(tImg));
      const frame3 = atlas3.frame(Point(0), Point(32));
      img = Sprite(frame3);
      img.position.set(100, 100);
      layer1.add(img);
    }
    tImg.src = 'images/witch.png';

    let count = 0;
    let time = 0;
    const loop = () => {
      scene.resize();
      // const { width, height } = view; // or scene.gl.canvas

      // 调速 time % n === 0
      if (img && this.playing && time % 5 === 0) {
        img.frame = atlas3.frame(Point(count % 8 * 32, 32 * 2), Point(32));
        count++;
      }
      time++;
      scene.render();
      requestAnimationFrame(loop);
    };

    loop();
  }

  initUI() {
    const playBtn = document.createElement('button');
    playBtn.innerHTML = 'Pause';
    playBtn.className = 'ui';
    playBtn.onclick = () => {
      this.playing = !this.playing;
      if (this.playing) {
        playBtn.innerHTML = 'Pause';
      } else {
        playBtn.innerHTML = 'Play';
      }
    }
    document.body.appendChild(playBtn);
  }
}

export default new Render();
