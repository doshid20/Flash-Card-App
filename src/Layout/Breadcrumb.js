import React from "react";
import { Link } from "react-router-dom";
//style breadcrumbs
const breadcrumb = {
  backgroundColor: 'white',
  border: '1px solid rgba(0, 0, 0, 0.125)',
  borderRadius: '0.37rem'
}

/**
 * 
 * @param {component for breadcrumbs} props 
 * @returns 
 */
function Breadcrumb(props) {
  const { crumbs = [] } = props;

  /**
   * To checks if that crumb is the last one in the list
   * @param {} ci  - cumb index
   * @param {*} crumbs - array of crumbs
   * @returns 
   */
  const isLast = (ci, crumbs) => {
    return ci === crumbs.length - 1;
  };

  return (
    <nav>
      <ol className="breadcrumb" style={breadcrumb}>
        {crumbs.map((crumb, ci) => {
          return (
            <li key={ci} className="breadcrumb-item">
              {/** display name of each crumb */}
              {isLast(ci, crumbs) ? (
                <p>{crumb}</p>
              ) : (
                <Link to="/">{crumb}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
