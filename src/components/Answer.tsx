const Answer = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <div className="mb-4 text-xl font-semibold text-green-500 underline">Answer</div>
      <p className="ml-8">{children}</p>
    </div>
  );
};

export default Answer;
