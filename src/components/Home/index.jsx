import './styles.scss'
import Fade from 'react-reveal/Fade'
import background from '../../assets/anni.JPG'
import avatar from '../../assets/avatar.jpg'
import iconFacebook from '../../assets/icon-facebook.svg'
import iconGithub from '../../assets/icon-github.svg'
import iconLinkedin from '../../assets/icon-linkedin.svg'
import iconInstagram from '../../assets/icon-instagram.svg'

const Social = [
  {
    icon: iconFacebook,
    url: 'https://www.facebook.com/duynguyen.1105/',
  },
  {
    icon: iconGithub,
    url: 'https://github.com/duynguyen1105',
  },
  {
    icon: iconLinkedin,
    url: 'https://www.linkedin.com/in/duynguyen1105/',
  },
  {
    icon: iconInstagram,
    url: 'https://www.instagram.com/duynguyen1105/',
  },
]

const Home = () => {
  return (
    <div className="container">
      <div
        className="background"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="overlay" />
      <div className="info">
        <Fade bottom>
          <div className="avatar">
            <img src={avatar} alt="Avatar" />
          </div>
        </Fade>
        <h1 className="name">Nguyễn Duy Nguyên</h1>
        <div className="job">Front-end Developer</div>
        <div className="social">
          {Social.map((item, index) => (
            <a href={item.url} key={index} className='social-icon'>
              <img src={item.icon} alt="Icon" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Home }
