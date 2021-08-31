import Link from "next/link"
import Layout from "../../components/Layout";
import { getAllPostsIds, getPostData } from "../../lib/posts";

export default function Post({ post }) {
  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <Layout title={post.title}>
      <p className="m-4">
        {"ID:"}
        {post.id}
      </p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.body}</p>

      <Link href="/blog">
        <a>ブログ一覧へ戻る</a>
      </Link>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPostsIds();

  return {
    paths,
    fallback: false, // 予想外のアクセスが合った時、そのユーザーには404ページを表示するための記述。
  }
}

export async function getStaticProps({ params }) {
  const { post: post } = await getPostData(params.id);
  return {
    props: {
      post,
    }
  }
}