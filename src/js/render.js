import Renderer from 'js13k-2d';
import { makeDebris, drawBg } from './Graphics/graphics';
import { DEVICE_WIDTH, DEVICE_HEIGHT, initConfigs, SPRITE_MAX } from './utils';

const view = document.getElementById('view');

class Render {
  log() {
    console.log(DEVICE_HEIGHT);
  };

  test() {
    const { Point, Sprite } = Renderer;

    initConfigs(view);
    const scene = Renderer(view);
    scene.background(0.95, 0.95, 0.95, 1);

    const atlas = scene.texture(makeDebris());
    const frame = atlas.frame(Point(), Point(32));
    const sprite = Sprite(frame);
    const atlas2 = scene.texture(drawBg());
    const frame2 = atlas2.frame(Point(), Point(SPRITE_MAX));
    const bg = Sprite(frame2);
    // scene.add(sprite);
    const layer0 = scene.layer(0);
    const layer1 = scene.layer(1);
    layer0.add(bg);
    layer1.add(sprite);
    const loop = () => {
      scene.resize();
      const { width, height } = view; // or scene.gl.canvas
      sprite.position.set(20, 20);
      scene.render();
      requestAnimationFrame(loop);
    };

    loop();
  }
}

export default new Render();
