import { UserInfo } from "./Component/UserInfo";
import { InfoHolder } from "./Component/InfoHolder";

const App = () => {
  const nepalGovernmentData = [
    { district: "Morang", name: "Bipan Gautam" },
    { district: "Bhaktapur", name: "Bikash Karki" },
    { district: "Synagja", name: "Binod Adhikari" },
    { district: "Jhapa", name: "Sundar Gautam" },
  ];
  return (
    <div className="main-app">
      <InfoHolder governmentData={nepalGovernmentData} />
    </div>
  );
};

export default App;
