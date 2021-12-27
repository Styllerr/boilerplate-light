import merge from 'webpack-merge';

import { SOURCE_DIRECTORY, BUILD_DIRECTORY } from '../constants';

import * as modules from '../modules';

export const getCommonConfig = () => {
    const { NODE_ENV } = process.env;
    const IS_DEVELOPMENT = NODE_ENV === 'development';

    return merge(
        {
            entry:  [ SOURCE_DIRECTORY ],
            output: {
                path:     BUILD_DIRECTORY,
                filename: IS_DEVELOPMENT
                    ? 'js/bundle.[hash].chunk.js'
                    : 'js/bundle.[chunkhash].bundle.js',
                chunkFilename:    'js/bundle.[chunkhash].chunk.js',
                publicPath:       '/',
                hashDigestLength: 5,
            },
            resolve: {
                extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
            },
        },
        modules.loadTypeScript(),
        modules.defineEnvVariables(),
        modules.loadFonts(),
        modules.loadAudio(),
        modules.connectHtml(),
        modules.provideGlobals(),
    );
};
