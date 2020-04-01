import React from "react";

const TableRow = props => {
    return (
        <div className="row">
            <div className="col-sm-3">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="col-sm-2">
                {props.name}
            </div>
            <div className="col-sm-2">
                {props.phone}
            </div>
            <div className="col-sm-3">
                {props.email}
            </div>
            <div className="col-sm-2">
                {props.age}
            </div>
        </div>
    )
}

export default TableRow;

