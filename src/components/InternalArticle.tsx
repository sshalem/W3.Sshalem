interface InternalArticleProps {
  articleTitle: string;
  children?: React.ReactNode;
}

const InternalArticle = ({ articleTitle, children }: InternalArticleProps) => {
  return (
    <article>
      <div className="my-4">
        <p className="my-4 inline-block rounded-md bg-teal-500 px-2 py-1 tracking-widest text-white">{articleTitle}</p>
        {children}
      </div>
    </article>
  );
};

export default InternalArticle;
