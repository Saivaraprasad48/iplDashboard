import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LatestMatch from '../LatestMatch/index'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import MatchCard from '../MatchCard/index'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: [], isLoad: true}

  componentDidMount() {
    this.getRenderMatchDetails()
  }

  getRenderMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        id: data.latest_match_details.id,
        competingTeam: data.latest_match_details.competing_team,
        date: data.latest_match_details.date,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        venue: data.latest_match_details.venue,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        result: data.latest_match_details.result,
        umpires: data.latest_match_details.umpires,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
      },
      recentMatches: data.recent_matches.map(each => ({
        id: each.id,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        result: each.result,
        matchStatus: each.match_status,
      })),
    }
    this.setState({teamMatchesData: updatedData, isLoad: false})
  }

  getLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  getTeamMatch = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {teamMatchesData} = this.state
    const {latestMatchDetails, recentMatches} = teamMatchesData
    return (
      <div className={`main-container ${id}`}>
        <div className="team-match-container">
          <div className="banner-container">
            <img
              src={teamMatchesData.teamBannerUrl}
              alt="team banner"
              className="img"
            />
          </div>
        </div>
        <div>
          <p className="latest-match-info"> Latest Matches </p>
        </div>
        <LatestMatch data={latestMatchDetails} />
        <ul className="item-container">
          {recentMatches.map(e => (
            <MatchCard key={e.id} data={e} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoad} = this.state

    return isLoad ? this.getLoader() : this.getTeamMatch()
  }
}

export default TeamMatches
