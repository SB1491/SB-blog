interface Link {
  text: string;
  url: string;
}

interface LinkListProps {
  links: Link[];
}


const LinkList: React.FC<LinkListProps> = ({ links }) => {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </ul>
  )
}


export default LinkList