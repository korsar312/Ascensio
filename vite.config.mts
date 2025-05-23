import {defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgLoader from "vite-plugin-svgr";
import checker from "vite-plugin-checker";
// https://vitejs.dev/config/
export default ({ mode }) => {
	process.env = Object.assign(process.env, loadEnv(mode, process.cwd()))

	return defineConfig({
		base: './',
		server: {
			open: true,
			port: 31415,
			host: '0.0.0.0',
		},
		plugins: [
			react({
				jsxImportSource: "@emotion/react",
				babel: {
					plugins: ["@emotion/babel-plugin"],
				},
			}),
			svgLoader({
				svgrOptions: {
					svgo: true,
					svgoConfig: {
						plugins: [
							{
								name: 'removeViewBox',
								active: false, // Не удаляем атрибут viewBox
							},
							{
								name: 'cleanupIDs',
								active: true, // Убираем неиспользуемые ID
							},
						],
					},
					icon: true,
					expandProps: 'start', // Пропсы добавляются в начале
				}
			}),
			tsconfigPaths(),
			checker({
				typescript: true,
			}),
		],
		build: {
			outDir: process.env.VITE_REACT_APP_TECH_VERSION ? 'buildTech' : 'build',
			assetsInlineLimit: 0,
			rollupOptions: {
				output: {
					assetFileNames: (assetInfo) => {
						let extType = assetInfo.name.split(".").at(1);
						if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
							extType = "img";
						}
						return `assets/${extType}/[name]-[hash][extname]`;
					},
					chunkFileNames: "assets/js/[name]-[hash].js",
					entryFileNames: "assets/js/[name]-[hash].js",
				},
			},
		},
	});
}

