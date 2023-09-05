import ImageBlock from "../../components/ImageBlock/ImageBlock"
import styles from './Drawing.module.css'

interface ImageType {
  title: string;
  filename: string;
  urlX: string;
  urlPixiv: string;
}

const Drawing = () => {

  const images: ImageType[] = [
    {
      title: '이치카',
      filename: 'ichika.png',
      urlX: 'https://twitter.com/seonjeok/status/1696179939173921142?s=20',
      urlPixiv: 'https://www.pixiv.net/artworks/111250053'
    },
    {
      title: '미캉',
      filename: 'mikan.png',
      urlX: 'https://twitter.com/seonjeok/status/1691102644335702016?s=20',
      urlPixiv: 'https://www.pixiv.net/artworks/110845000'
    },
    {
      title: '코코로',
      filename: 'kokoro.png',
      urlX: 'https://twitter.com/seonjeok/status/1683465780468551680?s=20',
      urlPixiv: 'https://www.pixiv.net/artworks/110207347'
    },
    {
      title: '코요리',
      filename: 'koyori.png',
      urlX: 'https://twitter.com/seonjeok/status/1670818479560343552?s=20',
      urlPixiv: 'https://www.pixiv.net/artworks/109199254'
    },
    {
      title: '토와',
      filename: 'towa.jpg',
      urlX: 'https://twitter.com/seonjeok/status/1647221820624609280?s=20',
      urlPixiv: 'https://www.pixiv.net/artworks/107206129'
    },
  ]

  return (
    <>
      <h1>Drawing</h1>
      <div className={styles.drawingContainer}>
        {images.map((image, index) => (
          <ImageBlock
            key={index}
            filename={image.filename}
            title={image.title}
            urlX={image.urlX}
            urlPixiv={image.urlPixiv} />
        ))}
      </div>
    </>
  )
}

export default Drawing