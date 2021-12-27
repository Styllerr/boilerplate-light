import merge from 'webpack-merge';

import { getCommonConfig } from './webpack.common';

import * as modules from '../modules';

export const getDevConfig = () => {
    return merge(
        getCommonConfig(),
        {
            mode:      'development',
            devtool:   'cheap-module-eval-source-map',
            entry:     [ 'webpack-hot-middleware/client?reload=true&quiet=true' ],
            devServer: {
                hot: true,
            },
        },
        modules.loadImagesDev(),
        modules.loadDevCss(),
        modules.connectHMR(),
        modules.connectFriendlyErrors(),
    );
};
