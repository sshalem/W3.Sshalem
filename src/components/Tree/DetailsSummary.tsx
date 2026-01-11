interface DetailsSummaryProps {
  open?: boolean;
  path: string;
  componentName: string;
  children?: React.ReactNode | undefined;
}

const DetailsSummary = ({ path, componentName, open = false, children }: DetailsSummaryProps) => {
  return (
    <details open={open}>
      <summary className="cursor-pointer">
        <span className="px-[5px] py-[1px] font-mono text-[#009]">{path}</span>
        📁 <span className="px-[5px] py-[1px] font-mono text-[#009905]">{componentName}</span>
      </summary>
      {children}
    </details>
  );
};

export default DetailsSummary;
