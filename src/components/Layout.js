export function Row(props){
    return(
        <div className="flex lg:flex-row">
            {props.children}
        </div>
    )
}

export function Col(props){
    return(
        <div className="flex flex-col">
            {props.children}
        </div>
    )
}


