module.exports = {
  types: [
    { value: 'feat',     name: '✨ feat:      新增功能' },
    { value: 'fix',      name: '🐛 fix:       修复 Bug' },
    { value: 'docs',     name: '📝 docs:      文档变更' },
    { value: 'style',    name: '🎨 style:     不影响代码功能的更改（例如：空格、格式化、补齐分号等）' },
    { value: 'refactor', name: '🔨 refactor:  代码重构（不包括新增功能、修复 Bug）' },
    { value: 'perf',     name: '📈 perf:      提高性能的代码更改' },
    { value: 'test',     name: '✅ test:      添加或修改测试用例' },
    { value: 'build',    name: '⛏ build:      构建流程、外部依赖变更（如升级依赖、修改 Vite 配置等）' },
    { value: 'ci',       name: '🔧 ci:        修改 CI 配置、脚本' },
    { value: 'chore',    name: '📦 chore:     对构建过程或辅助工具和库的更改（不影响源文件、测试用例）' },
    { value: 'revert',   name: '⏪ revert：   回滚 Commit' },
    { value: 'WIP',      name: '🚧 WIP:       正在进行的工作' },
    { value: 'ui',       name: '💄 ui:        修改界面 UI' },
    { value: 'release',  name: '🚀 release:   发布版本或标签' },
  ],

  scopes: [
    ['components', '组件相关'],
    ['hooks', 'hook 相关'],
    ['utils', 'utils 相关'],
    ['element-plus', '对 element-plus 的调整'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['auth', '对 auth 修改'],
    ['other', '其他修改']
  ].map(([value, desc]) => {
    return {
      value,
      name: `${value.padEnd(20)}（${desc}）`
    }
  }),

  /*
  // 设置 fix 类型的 scopes
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
 */

  allowCustomScopes: true, // 允许自定义 SCOPE
  allowEmptyScopes: true, // 允许空 SCOPE
  customScopesName: '自定义 Scope',
  emptyScopesName: '不填 Scope',

  messages: {
    type: "请选择 Commit 类型：（上下键选择，按 Enter 键确定）",
    scope: '\n请选择或输入修改范围 Scope：（上下键选择，按 Enter 键确定）',
    customScope: '请输入自定义的 Scope：', // 需设置 allowCustomScopes: true
    subject: '填写简短精炼的变更描述：（必填）\n',
    body: '填写更加详细的变更描述：（使用 "|" 换行。非必填，可按 Enter 键跳过）\n',
    breaking: '列举非兼容性重大的变更：（非必填，可按 Enter 键跳过）\n',
    footer: '列举出所有变更的 ISSUES CLOSED：（例如: #31、#34。非必填，可按 Enter 键跳过）\n',
    confirmCommit: '确认使用以上信息提交？（y/n/e）',
  },


  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  allowBreakingChanges: ['feat', 'fix'], // 设置 type 选择 feat 或 fix，询问 breaking message
  // skipQuestions: ['body', 'footer'], // 跳过问题
  skipEmptyScopes: false,

  subjectLimit: 100, // subject 长度限制
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
