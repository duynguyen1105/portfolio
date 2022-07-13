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

const AboutMe = () => {
  return (
    <div className="content-container">
      <div className="about-me">
        <h2>About me</h2>
      </div>
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
        <Fade right>
          <div className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            omnis nostrum necessitatibus quidem porro architecto eos delectus
            recusandae, vel odit impedit, doloremque quam pariatur cumque
            corporis laboriosam unde ut fugiat?
          </div>
        </Fade>
      </div>
    </div>
  )
}

export { AboutMe }
