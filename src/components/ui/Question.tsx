const Question = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <div className="mb-4 mt-4 inline-block rounded-md bg-red-700 px-2 text-lg font-semibold text-white">Question</div>
      <div className="ml-8">{children}</div>
    </div>
  );
};

export default Question;
