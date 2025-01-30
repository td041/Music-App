export default function CartInfo(props: { image: string; description: string; title: string }) {
  const { image, description, title } = props;
  return (
    <>
      <div className="flex items-center">
        <div className="w-[180px] aspect-square rounded-[15px] truncate">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 ml-[20px]">
          <h1 className="font-[700] text-[35px] text-[#00adef]">{title}</h1>
          <div className="font-[400] text-[14px] text-[#efeee0] mt-[10px] ">{description}</div>
        </div>
      </div>
    </>
  );
}
