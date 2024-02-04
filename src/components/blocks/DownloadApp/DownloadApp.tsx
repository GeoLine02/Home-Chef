import AppStore from "../../../assets/AppStore.svg";
import GooglePlay from "../../../assets/GooglePlay.svg";

const DownloadApp = () => {
  return (
    <div className="flex items-center gap-8">
      <img src={AppStore} alt="AppStore" />
      <img src={GooglePlay} alt="Google Play" />
    </div>
  );
};

export default DownloadApp;
