import { useRouter } from 'next/router'
import Head from 'next/head';

type Props = {
  post: {
    date: string;
    title: string;
    content: string;
  }
}

const Post = ({ post }: Props) => {
  const router = useRouter();

  return (
    <>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title} | Next.js Blog Example with</title>
            </Head>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </>
      )}
    </>
  )
}

export default Post;