import Head from "next/head";
import Link from "next/link"
import { layout } from "platform";

export default function Layout({ children, title = "HP by Nextjs" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <p>Hello Next.js</p>
    </div>
  )
}