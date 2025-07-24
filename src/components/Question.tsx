const Question = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <div className="mb-4 mt-4 text-xl font-semibold text-red-500 underline">Question</div>
      <p className="ml-8">{children}</p>
    </div>
  );
};

export default Question;
