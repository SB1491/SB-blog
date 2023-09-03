import Header from "../../components/Header/Header"
import ImageBlock from "../../components/ImageBlock/ImageBlock"

const Drawing = () => {

  const images = [
    { title: '이치카', filename: 'ichika.png', url: 'https://twitter.com'}
  ]

  return (
    <>
      <Header/>
      <h1>Drawing</h1>
      {images.map((image, index) => (
        <ImageBlock
          key={index} 
          filename={image.filename}
          title={image.title}
          url={image.url}/>
      ))}
    </>
  )
}

export default Drawing