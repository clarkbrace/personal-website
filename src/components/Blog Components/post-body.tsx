import ReactMarkdown from "react-markdown";
import Image from "next/image";
// import "@/app/blog/markdown-blog-style.css"; // Markdown css styles

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="prose prose-lg font-lexandDeca dark:prose-invert mx-20 my-6">
      <ReactMarkdown
        components={{
          img: (props) => {
            if (props.src && props.alt) {
              return <Image src={props.src} alt={props.alt} width={1200} height={200} />;
            }
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
