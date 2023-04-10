import UserProfile from './components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://media-content.ccbp.in/ccbp_prod/media/profile_pic/16e15f14-ce46-4751-bbd6-06f88d3eb570.jpeg',
    name: 'Sri Hari Eade',
    role: 'Front End Developer',
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://ibhubs-media-files.s3-ap-southeast-1.amazonaws.com/team/Core-Team-New-Joinees/184-min.JPG',
    name: 'Sekhar',
    role: 'Back End Developer',
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp_prod/media/profile_pic/c950b929-4120-429d-9606-29cc9d5d7464.jpeg',
    name: 'Chandana Devi',
    role: 'Software Developer',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
