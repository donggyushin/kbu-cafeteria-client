import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

interface IProps {
    logoutButtonClicked: () => void
}

const Presenter: React.FC<IProps> = ({
    logoutButtonClicked
}) => {
    return <div className="middle">
        <Link className="btn" to={'/post'}>
            <div>POST</div>
        </Link>
        <Link className="btn" to={'/view'}>
            <div>VIEW</div>
            <div>MENU</div>
        </Link>
        <div style={{
            cursor: 'pointer'
        }}
            onClick={logoutButtonClicked}
            className="btn">
            <div>LOGOUT</div>
        </div>
    </div>
}

export default Presenter