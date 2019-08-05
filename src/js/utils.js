export const DEVICE_WIDTH = document.documentElement.clientWidth;
export const DEVICE_HEIGHT = document.documentElement.clientHeight;
export const SPRITE_WIDTH_MAX = Math.pow(2, Math.floor(Math.log2(DEVICE_WIDTH)));
export const SPRITE_HEIGHT_MAX = Math.pow(2, Math.floor(Math.log2(DEVICE_HEIGHT)));
export const SPRITE_MAX = DEVICE_WIDTH > DEVICE_HEIGHT ?
  Math.pow(2, Math.ceil(Math.log2(DEVICE_WIDTH))) :
  Math.pow(2, Math.ceil(Math.log2(DEVICE_HEIGHT))); // max sprite you'll need
// available sprites width/height list
export let SPRITE_WIDTHS;
export let SPRITE_HEIGHTS;

// sprite max must be 2^n;
const getCascadeList = max => {
  const indicator = Math.log2(max);
  const list = [];
  for (let i = 0; i <= indicator; i++) {
    list.push(Math.pow(2, i));
  }
  return list;
}

export const initConfigs = canvas => {
  SPRITE_WIDTHS = getCascadeList(SPRITE_WIDTH_MAX);
  SPRITE_HEIGHTS = getCascadeList(SPRITE_HEIGHT_MAX);
  canvas.width = DEVICE_WIDTH;
  canvas.height = DEVICE_HEIGHT;
}
