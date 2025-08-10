const Question = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <div className="mb-4 mt-4 inline-block rounded-md bg-red-700 px-2 text-lg font-semibold text-white">Question</div>
      <p className="ml-8">{children}</p>
    </div>
  );
};

export default Question;
