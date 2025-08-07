interface DetailsSummaryComponentProps {
  open?: boolean;
  folder: string;
  componentName: string;
  children?: React.ReactNode | undefined;
}

const DetailsSummaryComponent = ({ folder, componentName, open = false, children }: DetailsSummaryComponentProps) => {
  return (
    <details open={open}>
      <summary className="cursor-pointer">
        <span className="px-[5px] py-[1px] font-mono text-[#009905]">{componentName}</span>
        📁 <span className="px-[5px] py-[1px] font-mono text-[#009]">{folder}</span>
      </summary>
      {children}
    </details>
  );
};

export default DetailsSummaryComponent;
