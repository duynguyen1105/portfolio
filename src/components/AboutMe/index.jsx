import './styles.scss'
import background from '../../assets/anni.JPG'
import avatar from '../../assets/avatar.jpg'
import iconFacebook from '../../assets/icon-facebook.svg'
import iconGithub from '../../assets/icon-github.svg'
import iconLinkedin from '../../assets/icon-linkedin.svg'

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
  }
]

const AboutMe = () => {
  return (
    <div className="container">
      <div
        className="background"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="overlay" />
      <div className="info">
        <div className="avatar">
          <img src={avatar} alt="Avatar" />
        </div>
        <h1 className="name">Nguyễn Duy Nguyên</h1>
        <div className="job">Front-end Developer</div>
        <div className="social">
          {Social.map((item, index) => (
            <a href={item.url} key={index}>
              <img src={item.icon} alt="Icon" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export { AboutMe }
