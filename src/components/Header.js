import logo from '../images/logo.png';

const Header = () => {
  return (
	<header className="header">
		<img id="logo" src={logo} alt="chef" height="230" width="521" />
	</header>
  )
}

export default Header