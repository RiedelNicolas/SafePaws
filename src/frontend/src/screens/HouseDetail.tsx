import {useParams} from 'react-router-dom'

export const HouseDetail = () => {

    const {email} = useParams();

    if(!email) {
        return <div>404</div>
    }

  return (
    <div>HouseDetail from {email}</div>
  )
}
