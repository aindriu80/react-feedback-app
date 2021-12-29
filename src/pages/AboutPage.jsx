import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this Feedback UI Project</h1>
        <p>
          This app is created in React to leave feedback for a product or a
          service
        </p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
