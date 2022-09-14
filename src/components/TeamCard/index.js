import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details
  return (
    <Link className="link-style" to={`/team-matches/${id}`}>
      <li className="team-item-container">
        <div className="data">
          <img src={teamImageUrl} alt={name} className="team-img" />
          <p className="team-card-name"> {name} </p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
