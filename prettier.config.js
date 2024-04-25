export default {
  useTabs: false, // 是否使用制表符进行缩进。当设置为 false 时，使用空格进行缩进。
  tabWidth: 2, // 每个缩进级别的空格数。当使用空格进行缩进时，每个缩进级别包含 2 个空格。
  printWidth: 100, // 代码的行长度，超过此长度将尝试换行。
  singleQuote: true, // 是否使用单引号或双引号。当设置为 true 时，使用单引号。
  trailingComma: 'none', // 是否在对象字面量或数组字面量的添加尾随逗号。设置为 'none' 时省略尾随逗号。
  bracketSpacing: true, // 控制是否在对象字面量或数组字面量的括号内添加空格。当设置为 true 时，在括号内添加空格。
  semi: false, // 控制是否在语句末尾添加分号。设置为 false 时省略分号。
  vueIndentScriptAndStyle: false // 控制是否缩进 Vue 单文件组件中 <script> 和 <style> 标签内的内容。设置为 true 时，根据配置的缩进设置缩进标签内的内容。
}
