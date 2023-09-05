import { Button, Card } from "react-bootstrap"
import styles from './ImageBlock.module.css';

export interface IProps {
  filename: string
  title: string
  urlX: string
  urlPixiv: string
}

const ImageBlock = (props: IProps) => {

  const handleOpenNewTab = (url: string) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <div className={styles.drawingItem}>
      <Card
        className={styles.imageBlock}
        style={{ width: '18rem' }}
      >
        <Card.Img
          variant="top"
          src={"/drawing/images/".concat(props.filename)}
          className={styles.image}
        />
        <Card.Body>
          <Card.Title className={styles.title}>{props.title}</Card.Title>
          <Button
            variant="outline-primary"
            className={styles.urlButton}
            onClick={() => { handleOpenNewTab(props.urlX) }}> X </Button>
          <Button
            variant="outline-info"
            className={styles.urlButton}
            onClick={() => { handleOpenNewTab(props.urlPixiv) }}>Pixiv</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ImageBlock