import { msalInstance } from "@/lib/auth"


interface Props {
}

function LoginForm({ }: Props) {


  async function loginAzure() {
    msalInstance.loginPopup()
  }

  return (
    <>
      <h3>LoginForm form</h3>
      <button onClick={loginAzure}>Login with azure</button>
    </>
  )
}

export default LoginForm