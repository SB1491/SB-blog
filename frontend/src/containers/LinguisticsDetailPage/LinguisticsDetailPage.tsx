import { useParams } from "react-router-dom"
import MarkdownPage from "../../components/MarkdownPage/MarkdownPage"

const LinguisticsDetailPage = () => {
  const id = useParams().id as string

  return (
    <>
      <MarkdownPage filename="linguistics/linguistics_test1.md"/>
    </>
  )
}

export default LinguisticsDetailPage