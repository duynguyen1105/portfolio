import Fade from 'react-reveal/Fade'
import './styles.scss'

const Info = [
  {
    title: 'Full Name',
    content: 'Nguyễn Duy Nguyên',
  },
  {
    title: 'Birthday',
    content: 'May 11th, 1999',
  },
  {
    title: 'Phone',
    content: '(+84) 343 110599',
  },
  {
    title: 'Email',
    content: 'duynguyen.110599@gmail.com',
  },
  {
    title: 'Address',
    content: 'Binh Thanh, Ho Chi Minh, Vietnam',
  },
]

const aboutMe = [
  "My name is Duy Nguyen, I'm a Front End Engineer based in Ho Chi Minh City ☀️. I describe myself as a passionate developer who loves creating beautiful and performant products with delightful user experiences.",
  "I'm a big fan of football ⚽️. In my free time, I like to play football with my closest friends. I also like to watch football live on TV and my favorite team is Manchester United 🏟🔱.",
]

const AboutMe = () => {
  return (
    <div className="content-container">
      <Fade top>
        <div className="about-me">
          <h2>About me</h2>
        </div>
      </Fade>
      <div className="content">
        <div className="detail-info">
          <Fade left>
            {Info.map((item, index) => (
              <div className="info-row" key={index}>
                <p className="info-title">{item.title}</p>
                <p className="info-content">{item.content}</p>
              </div>
            ))}
          </Fade>
        </div>
        <p className="about">
          <Fade top>
            <h1 className="hi-there">Hi There</h1>
          </Fade>
          {aboutMe.map((item, index) => (
            <Fade right key={index}>
              <p>{item}</p>
            </Fade>
          ))}
        </p>
      </div>
    </div>
  )
}

export { AboutMe }
