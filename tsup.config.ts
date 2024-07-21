import { defineConfig } from 'tsup';
import { execSync } from 'child_process';
export default defineConfig({
  entry: ['./app/main.ts'],
  target: ['esnext'],
  format: ['esm', 'cjs'],
  platform: 'node',
  tsconfig: './tsconfig.json',
  clean: true,
  outDir: 'dist',
  watch: true,
  experimentalDts: {
    entry: ['./app/types.ts', './app/main.ts'],
  },
  onSuccess: async () => {
    console.log('success');
    const out = execSync('node ./dist/main.cjs', {
      shell: '/bin/jsh',
      cwd: process.cwd(),
      env: process.env,
    });

    console.log(out.toString('utf-8'));
  },
});
