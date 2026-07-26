import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="not-found reveal">
      <span className="eyebrow">404</span>
      <h1>页面不存在</h1>
      <p>你可以返回首页继续查看项目、技术图谱和联系方式。</p>
      <Link className="button button--primary" to="/">
        返回首页
      </Link>
    </section>
  )
}
