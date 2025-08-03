interface DetailsSummaryComponentProps {
  folder: string;
  componentName: string;
  children?: React.ReactNode | undefined;
}
const DetailsSummaryComponent = ({ folder, componentName, children }: DetailsSummaryComponentProps) => {
  return (
    <details>
      <summary className="cursor-pointer">
        <span className="px-[5px] py-[1px] font-mono text-[#009905]">{componentName}</span>
        📁 <span className="px-[5px] py-[1px] font-mono text-[#009]">{folder}</span>
      </summary>
      {children}
    </details>
  );
};

export default DetailsSummaryComponent;
