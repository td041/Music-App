export const Title = (props: { text: string; className?: string }) => {
  const { text, className = "" } = props;
  return (
    <>
      <div
        className={
          "text-[24px] font-[700] text-[#efeee0] mb-[20px] " + className
        }
      >
        {text}
      </div>
    </>
  );
};
