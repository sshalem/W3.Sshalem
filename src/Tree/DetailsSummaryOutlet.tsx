interface DetailsSummaryOutletProps {
  open?: boolean;
  componentName: string;
  children?: React.ReactNode | undefined;
}

const DetailsSummaryOutlet = ({ componentName, open = false, children }: DetailsSummaryOutletProps) => {
  return (
    <details open={open}>
      <summary className="cursor-pointer">
        <span className="px-[5px] py-[1px] font-mono text-[#009905]">{componentName}</span>
        ❄️
      </summary>
      {children}
    </details>
  );
};

export default DetailsSummaryOutlet;
