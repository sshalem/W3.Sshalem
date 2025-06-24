// Define a layout of 2 columns
// left col will be the width of : 250px
// right column will be width of : auto
const GridLayout = ({ children }: React.PropsWithChildren) => {
  return <section className="mx-auto grid w-11/12 grid-cols-[250px_auto] gap-4">{children}</section>;
};

export default GridLayout;
