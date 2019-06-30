import React from 'react';

const Header = (props) => {
    return (
        React.createElement(`h${props.size}`, null, props.title)
    );
};
export default Header;