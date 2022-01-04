import React from 'react';
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'

// export function withRouter( Child ) {
//     return ( props ) => {
//       const location = useLocation();
//       const navigate = useNavigate();
//       return <Child { ...props } navigate={ navigate } location={ location } />;
//     }
//   }

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    //console.log(match)
    return (
        <div 
            className={`menu-item ${size ? size : ''}`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">dfgdfg</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);