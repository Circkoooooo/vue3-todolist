import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'~': resolve(__dirname, './src'),
		},
	},
	plugins: [vue()],
	css: {
		preprocessorOptions: {
			less: {
				additionalData: `@import "${resolve(
					__dirname,
					'./src/style/defined.less'
				)}";`,
			},
		},
	},
})
