import ImageBlock from "../../components/ImageBlock/ImageBlock"

const Drawing = () => {

  const images = [
    { title: '이치카', filename: 'ichika.png', urlX: 'https://twitter.com/seonjeok/status/1696179939173921142?s=20', urlPixiv: 'https://www.pixiv.net/artworks/111250053' },
  ]

  return (
    <>
      <h1>Drawing</h1>
      {images.map((image, index) => (
        <ImageBlock
          key={index}
          filename={image.filename}
          title={image.title}
          urlX={image.urlX}
          urlPixiv={image.urlPixiv} />
      ))}
    </>
  )
}

export default Drawing