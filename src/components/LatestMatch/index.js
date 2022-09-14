import './index.css'

const LatestMatch = props => {
  const {data} = props
  const {
    competingTeam,
    date,
    competingTeamLogo,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = data
  return (
    <div className="latest-match-container">
      <div className="card-container">
        <div className="phase-one">
          <p className="team-head"> {competingTeam} </p>
          <p className="team-date"> {date} </p>
          <p className="team-venue"> {venue} </p>
          <p className="team-result"> {result} </p>
        </div>
        <div className="img-container">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-match"
          />
        </div>{' '}
        <hr className="line" />
        <div className="phase-two">
          <h1 className="head-info"> First Innings </h1>
          <p className="para-info"> {firstInnings} </p>
          <h1 className="head-info"> Second Innings </h1>
          <p className="para-info"> {secondInnings} </p>
          <h1 className="head-info"> Man Of The Match </h1>
          <p className="para-info"> {manOfTheMatch} </p>
          <h1 className="head-info"> Umpires </h1>
          <p className="para-info"> {umpires} </p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
