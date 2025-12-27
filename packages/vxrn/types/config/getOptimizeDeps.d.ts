export declare function getOptimizeDeps(mode: 'build' | 'serve'): {
    needsInterop: string[];
    depsToOptimize: string[];
    optimizeDeps: {
        include: string[];
        exclude: string[];
        needsInterop: string[];
        holdUntilCrawlEnd: false;
    };
};
//# sourceMappingURL=getOptimizeDeps.d.ts.map