import Header from "../../components/Header/Header"
import LinkList from "../../components/LinkList/LinkList"

const Linguistics = () => {

  const links = [
    { text: 'Google', url: 'https://www.google.com' },
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