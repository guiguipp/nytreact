import React from "react";
import "./ResultsPanel.css"

const ResultsPanel = props => (
<div className="row">
    <div className="col-sm-1"></div>
    <div className="col-sm-10">
        <br />
        <div className="panel panel-primary">

            <div className="panel-heading">
                <h3 className="panel-title">
                <strong>
                <i className="fa fa-table"></i> Search Results</strong>
                </h3>
            </div>

            <div className="panel-body" id="well-section">
            </div>
        </div>
    </div>
</div>

);
export default ResultsPanel;