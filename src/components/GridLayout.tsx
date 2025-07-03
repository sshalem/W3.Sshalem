// Define a layout of 2 columns
// left col will be the width of : 250px
// right column will be width of : auto
// children :
// Since I use GridLayout is a wrapper component
// I want all children comnpnent to be able to be as child for it
const GridLayout = ({ children }: React.PropsWithChildren) => {
  return <section className="m-auto grid w-[1750px] grid-cols-[250px_auto] gap-4">{children}</section>;
};

export default GridLayout;
