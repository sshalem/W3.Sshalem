const IMG = ({ img_name }: { img_name: string }) => {
  console.log(img_name);

  return <img src={img_name} alt={img_name} className="my-10 ml-24 outline-double outline-offset-[14px] outline-black" />;
};

export default IMG;
