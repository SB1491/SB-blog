import { Button, Card } from "react-bootstrap"
import "./ImageBlock.module.css"

export interface IProps {
  filename: string
  title: string
  urlX: string
  urlPixiv: string
}

const ImageBlock = (props: IProps) => {

  const handleClickX = () => {
    window.location.replace(props.urlX);
  }
  const handleClickPixiv = () => {
    window.location.replace(props.urlPixiv);
  }

  return (
    <Card 
      className="shadow" 
      style={{ width: '18rem' }}
    >
      <Card.Img variant="top" src={"images/".concat(props.filename)}/>
      <Card.Body>
        <Card.Title className="title">{props.title}</Card.Title>
        <Button 
          variant="primary" 
          className="url-button"
          onClick={handleClickX}> X </Button>
        <Button 
          variant="info" 
          className="url-button"
          onClick={handleClickPixiv}>Pixiv</Button>
      </Card.Body>
    </Card>
  )
}

export default ImageBlock