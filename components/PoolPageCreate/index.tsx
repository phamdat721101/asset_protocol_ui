"use client";

import ReactHookForm from "@/providers/ReactHookForm";
import { createVaultsSchema } from "@/react-hook-form/validations/CreateVaults";
import FormWrapper from "./FormWrapper";

type Props = {};

const PoolPageCreate = (props: Props) => {
  return (
    <ReactHookForm
      validateSchema={createVaultsSchema}
      defaultValues={{
        tokens: [
          {
            percent: 100,
          },
        ],
      }}
    >
      <FormWrapper />
    </ReactHookForm>
  );
};

export default PoolPageCreate;
