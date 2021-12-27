import merge from 'webpack-merge';

import { getCommonConfig } from './webpack.common';

import * as modules from '../modules';

export const getProdConfig = () => {
    return merge(
        getCommonConfig(),
        {
            mode:    'none',
            devtool: false,
        },
        modules.loadImagesProd(),
        modules.loadProdCss(),
        modules.cleanDirectories(),
        modules.filterLodashModules(),
        modules.filterMomentLocales(),
        modules.connectBuildProgressIndicator(),
        modules.optimizeBuild(),
        modules.connectBundleAnalyzer(),
        modules.generateServiceWorker(),
        modules.generateManifest(),
    );
};
