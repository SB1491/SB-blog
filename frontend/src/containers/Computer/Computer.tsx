import Header from "../../components/Header/Header"
import MarkdownPage from "../../components/MarkdownPage/MarkdownPage"

const Computer = () => {
  return (
    <div>
      <Header/>
      <h1>Computers</h1>
      <MarkdownPage filename="test1.md"/>
    </div>
  )
}

export default Computer