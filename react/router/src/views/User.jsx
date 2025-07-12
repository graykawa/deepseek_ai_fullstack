import { useSearchParams } from "react-router-dom" 

function User() {
  const [params] = useSearchParams()

  return (
    <h4>用户页面 -- {params.get('id')}</h4>
  )
}

export default User