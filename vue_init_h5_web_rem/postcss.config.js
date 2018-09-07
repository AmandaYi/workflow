// 说明,这里的postcss配置, 在package.json最后追加也是可以的
module.exports = {
  plugins: {
    autoprefixer: {},
    // "postcss-px-to-viewport": {
    //   viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 
    //   // viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置 
    //   unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除） 
    //   viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw 
    //   selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名 
    //   minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值 
    //   mediaQuery: false // 允许在媒体查询中转换`px` 
    // }
    "postcss-pxtorem": {
      "rootValue": 75, // 设计稿宽度的1/10,（Number）根元素字体大小。
      "propList": ["*"],
      // （数组）可以从px更改为rem的属性。
      // 值必须完全匹配。
      // 使用通配符*启用所有属性。例：['*']
      // *在单词的开头或结尾使用。（['*position*']会匹配background-position-y）
      // 用于!与财产不匹配。例：['*', '!letter-spacing']
      // 将“not”前缀与其他前缀组合在一起。例：['*', '!font*']
      "unitPrecision": 5,// 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      "propList": ['font', 'font-size', 'line-height', 'letter-spacing'],
      "selectorBlackList": [],
      // （数组）要忽略的选择器并保留为px。
      // 如果value是string，则检查selector是否包含字符串。
      // ['body'] 会匹配 .body-class
      // 如果value是regexp，它会检查选择器是否与正则表达式匹配。
      // [/^body$/]会匹配body但不会.body
      "replace": true, //（布尔值）替换包含rems的规则，而不是添加回退。
      "mediaQuery": false, //（布尔值）允许在媒体查询中转换px。
      "minPixelValue": 1 //（数字）设置要替换的最小像素值。
    }
  }
}
