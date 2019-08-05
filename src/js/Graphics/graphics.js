import { DEVICE_WIDTH, DEVICE_HEIGHT, SPRITE_MAX } from '../utils';

export const drawBg = () => {
  const canvas = document.createElement('canvas');
  const size = SPRITE_MAX;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  const gap = 10;
  ctx.strokeStyle='#000000';
  ctx.fillStyle='#ffffff';
  ctx.rect(gap, gap, DEVICE_WIDTH - gap * 2, DEVICE_HEIGHT - gap * 2);
  ctx.fill();
  ctx.stroke();
  return canvas;
}

export const makeDebris = () => {
  const canvas = document.createElement('canvas');
  const size = 32;
  const half = size / 2;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  let offset = 0;

  ctx.lineWidth = size / 16;
  ctx.fillStyle = '#cccccc';
  ctx.strokeStyle = '#111111';
  ctx.beginPath();

  // ctx.moveTo(offset + half, half);
  // ctx.moveTo(offset + half - half * 0.8, half * 0.2);
  for (let angle = 0; angle < Math.PI * 2; angle += (Math.PI * 2) / 5) {
    ctx.lineTo(offset + half - Math.sin(angle) * half * 0.8, half - Math.cos(angle) * half * 0.8);
  }
  ctx.lineTo(offset + half, half);

  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  return canvas;
};

export const getImage = src => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
  }
  return canvas
}
