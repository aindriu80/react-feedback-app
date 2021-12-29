import Card from '../components/shared/Card'
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
          <a href="/">Back to Home</a>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
