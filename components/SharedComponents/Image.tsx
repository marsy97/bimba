import Image from "next/image";

export const Picture: React.FC<{ style: any; src: string; svg?: any }> = ({ style, src, svg }) => {
  return (
    <div className={style} style={{ position: "relative", width: "100%" }}>
      <Image src={src} layout="fill" width="100%" height="100%" objectFit="cover" objectPosition={"center"} />
      {svg ? svg : <></>}
    </div>
  );
};