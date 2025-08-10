const Answer = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <div className="mb-4 mt-4 inline-block rounded-md bg-green-500 px-2 text-lg font-semibold text-white">Answer</div>
      <div className="ml-8">{children}</div>
    </div>
  );
};

export default Answer;
