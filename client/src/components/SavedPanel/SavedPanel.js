import React from "react";
import "./SavedPanel.css"
import { PromiseProvider } from "mongoose";

const SavedPanel = props => (
<div className="row">
    <div className="col-sm-1"></div>
    <div className="col-sm-10">
        <br />
        <div className="panel panel-primary">

            <div className="panel-heading">
                <h3 className="panel-title">
                <strong>
                <i className="fa fa-table"></i> Saved Articles</strong>
                </h3>
            </div>

            <div className="panel-body" id="well-section">
                {props.children}
            </div>
        </div>
    </div>
</div>

)
export default SavedPanel;