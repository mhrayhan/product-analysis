import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
 
    return (
      <div>
        <Link
          style={{ boxShadow: match ? 'rgba(0, 0, 0, 0.1) 0px 1px 12px' : 'none', color: match ? 'orange' : 'black' }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

export default CustomLink;
