import Router from 'next/router'
import nookies from 'nookies'

export const auth = ctx => {
  const { token } = nookies.get(ctx);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/' })
    ctx.res.end()
    return
  }

  if (!token) {
    Router.push('/')
  }

  return token;
}