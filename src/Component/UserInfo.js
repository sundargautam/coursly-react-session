export const UserInfo = ({data,index}) => {
  return (
    <div className="info" key={index}>
      <h2>Name:{data.name}</h2>
      <h3>Address:{data.district}</h3>
    </div>
  );
};
