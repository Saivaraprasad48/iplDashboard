import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsData: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(e => ({
      id: e.id,
      name: e.name,
      teamImageUrl: e.team_image_url,
    }))
    this.setState({teamsData: updatedData, isLoading: false})
  }

  getHomePage = () => {
    const {teamsData} = this.state
    return (
      <div className="home-container">
        <div className="title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-img"
          />
          <h1 className="title-name"> IPL Dashboard </h1>
        </div>
        <ul className="team-cards-container">
          {teamsData.map(e => (
            <TeamCard details={e} key={e.id} />
          ))}
        </ul>
      </div>
    )
  }

  getLoading = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return isLoading ? this.getLoading() : this.getHomePage()
  }
}

export default Home
