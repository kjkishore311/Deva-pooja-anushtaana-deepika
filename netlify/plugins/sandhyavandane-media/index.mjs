import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

export default {
  async onPreBuild() {
    for (const part of ['1', '2']) {
      const directory = resolve('.netlify/v1/blobs/deploy/sandhyavandane', `part-${part}`);
      await mkdir(directory, { recursive: true });
      await copyFile(resolve('assets/sandhyavandane', `aachamana-part-${part}.m4a`), resolve(directory, 'blob'));
    }
  },
};
