import { Button, Card, CardBody, CardHeader, Input, Link } from "@heroui/react";
import logo from "../../assets/logo.png";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <img className="h-52" src={logo} />
      </div>
      <Card className="w-96 mt-4 p-2">
        <CardHeader>
          <h1 className="font-bold text-2xl">Login</h1>
        </CardHeader>

        <CardBody className="flex flex-col items-center justify-center gap-5">
          <form className="flex flex-col gap-10 w-[90%]">
            <Input
              variant="underlined"
              label="Email"
              placeholder="example@email.com"
            />

            <Input
              variant="underlined"
              label="Senha"
              type="password"
              placeholder="********"
            />

            <Button color="primary">Login</Button>
          </form>

          <h2>Ainda não tem conta?</h2>
          <Link href="/register">Cadastre-se</Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
