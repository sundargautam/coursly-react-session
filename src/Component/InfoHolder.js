import { UserInfo } from "./UserInfo";

export const InfoHolder = ({ governmentData }) => {
  return (
    <div className="info-wrapper">
      {governmentData.map((data, index) => (
        <UserInfo data={data} index={index} />
      ))}
    </div>
  );
};
