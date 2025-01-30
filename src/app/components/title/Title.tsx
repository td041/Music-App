export const Title = (props: { text: string }) => {
  const { text } = props;
  return (
    <>
      <div className="text-[24px] font-[700] text-[#efeee0] mb-[20px]">{text}</div>
    </>
  );
};
