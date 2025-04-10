import { useParams, useSearchParams } from "react-router-dom";

const ValidarConta = () => {
  const { otp } = useParams();
  return <div>{otp}</div>;
};

export default ValidarConta;
