import PropTypes from "prop-types";
import PMCButton from "./PMCButton";

export function Row(props) {
    return (<div className={`md:flex md:flex-row ${props.className}`}>
        {props.children}
    </div>)
}

Row.propTypes = {
    className: PropTypes.string, children: PropTypes.node
}


export function Col(props) {
    return (<div className={`flex flex-col ${props.className}`}>
        {props.children}
    </div>)
}

Col.propTypes = {
    className: PropTypes.string, children: PropTypes.node
}

export function Container(props) {
    return (<div className={`container ${props.className}`}>
        {props.children}
    </div>)
}

Container.propTypes = {
    className: PropTypes.string, children: PropTypes.node
}




