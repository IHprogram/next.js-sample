import Head from "next/head";
import Link from "next/link"
import { layout } from "platform";

// ↓ children、titleはPropsとして親コンポーネントから受け取った値
export default function Layout({ children, title = "HP by Nextjs" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      {/* ブラウザのタブ部分にtitleの値(ここでは「HP by Nextjs」)が表示される */}
      <Head>
        <title>{title}</title>
      </Head>

      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Home</a>
              </Link>
              <Link href="/about">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">About</a>
              </Link>
              <Link href="/contact">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Contact</a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {/* childrenの中身を表示 */}
        {children}
      </main>
    </div>
  )
}