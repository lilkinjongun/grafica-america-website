import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join } from 'path';

const INPUT_DIR = './attached_assets';
const OUTPUT_DIR = './client/src/assets/optimized';

async function optimizeImages() {
  try {
    await mkdir(OUTPUT_DIR, { recursive: true });
    
    // Converter PNG/JPG para WebP
    await imagemin([`${INPUT_DIR}/**/*.{jpg,png}`], {
      destination: OUTPUT_DIR,
      plugins: [
        imageminWebp({
          quality: 80,
          method: 6
        })
      ]
    });
    
    console.log('✅ Imagens otimizadas com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao otimizar imagens:', error);
  }
}

optimizeImages();

