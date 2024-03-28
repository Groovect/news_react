import { formatDate } from "../../helpers/formatDate";

import "./index.scss"

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">NEWS GROOVE</h1>
            <p className="header__date">{formatDate(new Date())}</p>
        </header>
    )
}

export default Header;