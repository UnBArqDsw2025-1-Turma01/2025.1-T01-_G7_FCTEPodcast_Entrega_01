import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../utils/constants";
import { addToast, Button, Spinner } from "@heroui/react";
import logo from "../../assets/logo.png";

const ValidarConta = () => {
  const { otp } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean | null>(null);
  const navigate = useNavigate();

  const validar_otp = async () => {
    setLoading(true);
    await axios
      .post(`${API_URL}/aluno/validar-otp/${otp}`)
      .then(() => {
        setSuccess(true);
        setLoading(false);
      })
      .catch((err) => {
        addToast({
          title: "Erro",
          description: err.response.data.message,
          color: "danger",
        });
        setSuccess(false);
        setLoading(false);
      });
  };

  useEffect(() => {
    validar_otp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div>
        <img src={logo} className="h-48" />
      </div>
      {loading && (
        <div className="flex flex-col justicefy-center items-center gap-5">
          <Spinner size="lg" />
          <p className="text-center text-xl font-bold">
            Validando
            <span className="inline-block animate-bounce-dot [animation-delay:0ms]">
              .
            </span>
            <span className="inline-block animate-bounce-dot [animation-delay:200ms]">
              .
            </span>
            <span className="inline-block animate-bounce-dot [animation-delay:400ms]">
              .
            </span>
          </p>
        </div>
      )}

      {!loading && success === true && (
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="text-center text-xl font-bold">
            Conta validada com sucesso!
          </p>
          <p className="text-center text-lg">
            Você já pode fazer login na sua conta.
          </p>
          <Button onPress={() => navigate("/login")} color="primary">
            Logar
          </Button>
        </div>
      )}

      {!loading && success === false && (
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="text-center text-xl font-bold">
            Ocorreu um erro ao validar sua conta. Tente novamente mais tarde.
          </p>
        </div>
      )}
    </div>
  );
};

export default ValidarConta;
