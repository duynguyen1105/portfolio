import { Fade } from 'react-reveal'
import RubberBand from 'react-reveal/RubberBand'
import Typical from 'react-typical'
import background from '../../assets/anni.JPG'
import avatar from '../../assets/avatar.jpg'
import iconFacebook from '../../assets/icon-facebook.svg'
import iconGithub from '../../assets/icon-github.svg'
import iconInstagram from '../../assets/icon-instagram.svg'
import iconLinkedin from '../../assets/icon-linkedin.svg'
import './styles.scss'

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
    url: 'https://www.instagram.com/duynguyen.1105/',
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
        <RubberBand>
          <h1 className="name">Nguyen Duy Nguyen</h1>
        </RubberBand>
        <Fade left>
          <div className="job">
            {/* Frontend Developer */}
            <Typical
              loop={Infinity}
              steps={[
                'Frontend Developer 💻',
                1000,
                'Football Lover ⚽️',
                1000,
                'Turtle 🐢',
                1000,
              ]}
            />
          </div>
        </Fade>
        <Fade right>
          <div className="social">
            {Social.map((item, index) => (
              <a href={item.url} key={index} className="social-icon">
                <img src={item.icon} alt="Icon" />
              </a>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  )
}

export { Home }
