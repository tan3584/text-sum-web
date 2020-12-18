import reactAppRewirePostcss from 'react-app-rewire-postcss';
import postcssNesting from 'postcss-nesting';

export default (config) =>
  reactAppRewirePostcss(config, {
    plugins: () => [postcssNesting(/* pluginOptions */)],
  });
