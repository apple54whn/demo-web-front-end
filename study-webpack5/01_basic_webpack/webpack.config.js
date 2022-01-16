const path = require('path')

// Webpack在Node环境运行，Node使用的CommonJS，要改为ES6需要配置，比较麻烦
module.exports = {
  // 入口文件名
  entry: './src/main.js',
  output: {
    // path必须是绝对路径！！！，__dirname代表当前文件（webpack.config.js）所在绝对路径
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
}
