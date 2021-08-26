import Layout from '../../components/Layout'
import Post from '../../components/Post';
import { getAllPostsData } from '../../lib/posts';


const Blog = (posts) => {
  console.log("posts", posts)
  console.log("posts", posts.posts[0])
  return (
    <div>
      <Layout title="Blog">
        <ul className="m-10">
          {posts.length > 0 && posts.posts.map((post) => <Post key={post.id} post={post} />)}
        </ul>
      </Layout>
    </div>
  )
}

export default Blog;

// サーバーサイド側でビルド時に実行される。
// 返り値のpostsは、4行目のBlogコンポーネントのPropsとして渡される
export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  }
}