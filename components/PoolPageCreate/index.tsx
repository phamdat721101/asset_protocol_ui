import cn from "classnames";

import PoolSteps from "./PoolSteps";
import Step1TokenAndWeights from "./Step1TokenAndWeights";
import styles from "./styles.module.scss";
import PoolSummary from "./PoolSummary";

type Props = {};

const PoolPageCreate = (props: Props) => {
  return (
    <div className="layout-container mt-8">
      <div className="flex justify-center	">
        <div className="flex-none w-64">
          <PoolSteps />
        </div>
        <div className={cn("flex-initial w-80 mx-5", styles.center)}>
          <Step1TokenAndWeights />
        </div>
        <div className="flex-initial w-64">
          <PoolSummary />
        </div>
      </div>
    </div>
  );
};

export default PoolPageCreate;
