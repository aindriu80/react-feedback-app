import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AboutIconLink = () => {
  return (
    <div>
      <div className="about-link">
        <Link to="/about">
          {/* Passing an object with pathname, query params like search and sort and a hash 'hello' */}
          {/* <Link to={{ pathname: '/about', search: '?sort=name', hash: '#hello' }}> */}
          <FaQuestion size={30} />
        </Link>
      </div>
    </div>
  )
}

export default AboutIconLink
