import './index.css'

const MatchCard = props => {
  const {data} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = data
  const s = matchStatus === 'Won'
  const style = s ? 'green' : 'red'
  return (
    <li className="item-card">
      <div>
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="team-logo"
        />
        <p className="team-name"> {competingTeam} </p>
        <p className="team-result"> {result} </p>
        <p className={`team-status ${style}`}> {matchStatus} </p>
      </div>
    </li>
  )
}
export default MatchCard
