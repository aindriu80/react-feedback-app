import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const HeaderStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }
  return (
    <Header style={HeaderStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </Header>
  )
}
Header.defaultProps = {
  text: 'Feedback UI',
  bgcolor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a9f',
}
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  bgColorColor: PropTypes.string,
}
export default Header
