import { Card } from "react-bootstrap"

export interface IProps {
  filename: string
  title: string
  url: string
}

const ImageBlock = (props: IProps) => {
  return (
    <Card  className="shadow" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"images/".concat(props.filename)}/>
      <Card.Body>
        <Card.Title className="title">{props.title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default ImageBlock