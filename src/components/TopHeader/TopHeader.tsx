import { AuthConstants } from "../../constants/AuthConstant";
import styles from "./TopHeader.module.scss";

const TopHeader = () => {
  return (
    <div className={styles.container}>
      <p>
        {AuthConstants.SUMMER_SALE_OFFER}
        <strong>
          <u>{AuthConstants.SHOP_NOW}</u>
        </strong>{" "}
      </p>
    </div>
  );
};

export default TopHeader;
