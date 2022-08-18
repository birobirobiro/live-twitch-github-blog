import axios from "axios"
import { formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { GetStaticProps } from "next"
import { Layout } from "../../components/Layout"
import { PostCard } from "../../components/PostCard"
import ReactMarkdown from "react-markdown"
import { PostContent } from "../../styles/pages/issueNumber.styles"
import remarkGfm from "remark-gfm"

const GITHUB_REPOSITORY = "birobirobiro/live-twitch-github-blog"

interface PostProps {
  post: {
    title: string;
    number: number;
    created_at: string;
    body: string;
    author: string;
    numberOfComments: number;
    url: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <Layout>

      <PostCard title={post.title} url={post.url} comments={post.numberOfComments} date={post.created_at} username={post.author} />

      <PostContent>
        <ReactMarkdown className="react-markdown" remarkPlugins={[remarkGfm]}>
          {post.body}
        </ReactMarkdown>
      </PostContent>

    </Layout>
  )
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ({
  params },
) => {
  const issueNumber = params!.issueNumber
  const { data } = await axios.get(`https://api.github.com/repos/${GITHUB_REPOSITORY}/issues/${issueNumber}`)

  const post = {
    title: data.title,
    number: data.number,
    created_at: formatDistanceToNow(new Date(data.created_at), { addSuffix: true, locale: ptBR }),
    body: data.body,
    author: data.user.login,
    numberOfComments: data.comments,
    url: data.html_url,
  }

  return {
    props: {
      post
    },
    revalidate: 60 * 60 * 3 // 3 hours
  }
}