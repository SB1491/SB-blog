import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export interface IProps {
  filename: string
}

const MarkdownPage = (props: IProps) => {

  const [markdownContent, setMarkdownContent] = useState<string>('');

  useEffect(() => {
    // Fetch or read your Markdown file content here and set it to the state.
    // For example, you can use the Fetch API to load content from a URL.
    fetch('markdown/computer/'.concat(props.filename))
      .then((response) => response.text())
      .then((data) => {
        setMarkdownContent(data);
      })
      .catch((error) => {
        console.error('Error fetching Markdown:', error);
      });
  }, []);

  return (
    <div>
    <h1>Markdown to HTML</h1>
    <div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  </div>
  )
}

export default MarkdownPage