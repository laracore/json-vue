export const graphqlError = ({commit, state, dispatch}, value) => {
  let content = value.replace(/GraphQL error: /, '')
  if (content === 'Unauthenticated') {
    dispatch('login')
  }
  switch (content) {
    case 'Unauthenticated':
      return '未经认证的'
    case 'Unauthorized':
      return '未经授权的'
    default:
      return content
  }
}
/**
 * 跳转到当前模块登录页面
 * removeItem 删除 token 防止循环跳转
 */
export const login = ({commit, state}, _package = window.config.package) => {
  localStorage.removeItem('system:token')
  window.router.push('/' + _package + '/login')
}
