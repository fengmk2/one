import { type ResolvedConfig } from 'vite';
import type { VXRNOptionsFilled } from './getOptionsFilled';
/**
 * This is not the config that you merge into the general Vite config.
 *
 * It is only for building native React Native bundles, while passed directly
 * to Vite's `createBuilder` function.
 *
 * Mainly used by the `getReactNativeBundle` function.
 */
export declare function getReactNativeBuildConfig(options: Pick<VXRNOptionsFilled, 'root' | 'cacheDir'> & {
    server: Pick<VXRNOptionsFilled['server'], 'url' | 'port'>;
    entries: Pick<VXRNOptionsFilled['entries'], 'native'>;
}, internal: {
    mode?: "dev" | "prod";
    assetsDest?: string;
} | undefined, platform: 'ios' | 'android'): Promise<{
    plugins: any[];
    appType: "custom";
    root: string;
    clearScreen: false;
    esbuild: false;
    customLogger: {
        info(msg: string, options: import("vite").LogOptions | undefined): void;
        warn(msg: string, options?: import("vite").LogOptions): void;
        warnOnce(msg: string, options?: import("vite").LogOptions): void;
        error(msg: string, options?: import("vite").LogErrorOptions): void;
        clearScreen(type: import("vite").LogType): void;
        hasErrorLogged(error: Error | import("@voidzero-dev/vite-plus-core/rolldown").RollupError): boolean;
        hasWarned: boolean;
    };
    optimizeDeps: {
        esbuildOptions: {
            jsx: "automatic";
        };
        include: string[];
        exclude: string[];
        needsInterop: string[];
        holdUntilCrawlEnd: false;
    };
    resolve: {
        dedupe: string[];
        alias: {
            'react-native-css-interop/jsx-dev-runtime': string;
        };
    };
    mode: string;
    define: {
        'process.env.NODE_ENV': string;
        'process.env.ONE_SERVER_URL': string;
    };
    build: {
        ssr: true;
        minify: false;
        commonjsOptions: {
            transformMixedEsModules: true;
            ignore(id: string): id is "react/jsx-runtime" | "react/jsx-dev-runtime";
        };
        rollupOptions: {
            input: string;
            treeshake: false;
            preserveEntrySignatures: "strict";
            output: {
                preserveModules: true;
                format: "cjs";
            };
            onwarn(message: import("@voidzero-dev/vite-plus-core/rolldown").RollupLog, warn: (warning: import("@voidzero-dev/vite-plus-core/rolldown").RollupLogWithString | (() => import("@voidzero-dev/vite-plus-core/rolldown").RollupLogWithString)) => void): void;
            onLog(level: import("@voidzero-dev/vite-plus-core/rolldown").LogLevel, log: import("@voidzero-dev/vite-plus-core/rolldown").RollupLog, handler: import("@voidzero-dev/vite-plus-core/rolldown").LogOrStringHandler): void;
        };
    };
}>;
/** Use by things such as the reactNativeHMRPlugin to get the config after the initial build. */
export declare function getReactNativeResolvedConfig(): ResolvedConfig | null;
//# sourceMappingURL=getReactNativeBuildConfig.d.ts.map