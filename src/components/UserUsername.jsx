import PropTypes from 'prop-types';

export function UserUsername(props){
    console.log
    return (
            <>{props.name}</>        
    )
}


UserUsername.propTypes = {
    name: PropTypes.string
}