

interface Props {
  onSuccess: () => void
}

function LoginForm({ onSuccess }: Props) {


  async function loginNow() {

  }

  return (
    <>
      <h3>LoginForm form</h3>
      <button onClick={loginNow}>Login</button>
    </>
  )
}

export default LoginForm