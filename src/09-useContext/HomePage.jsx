import { useContext } from "react"
import { UserContext } from "./context/UserContext"

const HomePage = () => {

  const { user } = useContext( UserContext )

  return (
    <div>
        <h1>Home <small>{ user?.name }</small></h1>
        <hr />

        <pre>
          {JSON.stringify(user, null, 3)}
        </pre>
    </div>
  )
}

export default HomePage
