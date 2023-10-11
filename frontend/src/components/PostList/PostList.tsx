import { getAllPosts } from "../../lib/api"

const PostList = () => {

  const getStaticPaths = async () => {
    let posts = getAllPosts()
    return {
      paths: posts.map((post) => {
        return {
          params: {
            slug: post
          }
        }
      }),
      fallback: false
    }
  }

  return (
    <>

    </>
  )
}

export default PostList