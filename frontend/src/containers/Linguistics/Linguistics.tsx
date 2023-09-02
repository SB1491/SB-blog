import Header from "../../components/Header/Header"
import LinkList from "../../components/LinkList/LinkList"

const Linguistics = () => {

  const links = [
    { text: 'Main', url: '/main' },
    { text: 'GitHub', url: 'https://www.github.com' },
  ]

  return (
    <>
      <Header/>
      <h1>Linguistics</h1>
      <LinkList links={links}/>
    </>
  )
}

export default Linguistics