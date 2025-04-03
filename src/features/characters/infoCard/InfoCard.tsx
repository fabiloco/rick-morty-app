import { FC } from "react";

export type InfoCardProps = {
  title: string;
  content: string;
};

export const InfoCard: FC<InfoCardProps> = ({content, title}) => {
  return (
    <div className="mt-8">
      <div className="w-max">
        <h5 className="text-lg font-semibold">{title}</h5>
        <p className="text-lg text-gray-500 text-left">{content}</p>
      </div>
      <div className="bg-gray-200 w-full h-[1px] mt-4"/>
    </div>
  )
};