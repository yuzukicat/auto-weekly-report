import React from 'react';
import { Table } from 'reactstrap';

function Renderlaskweek({lastweek}) {
    return (
        lastweek.map(function(lastweek) {
            return(
                <tbody key = {lastweek.id}>
                    <tr>
                        <td>{ lastweek.project }</td>
                        <td>{ lastweek.title }</td>
                        <td>{ lastweek.data }</td>
                        <td>{ lastweek.point }</td>
                    </tr>
                </tbody>
            );
        })
    );
}

function Rendernextweek({nextweek}) {
    return (
        nextweek.map(function(nextweek) {
            return(
                <tbody key = {nextweek.id}>
                    <tr>
                        <td>{ nextweek.project }</td>
                        <td>{ nextweek.title }</td>
                        <td>{ nextweek.data }</td>
                        <td>{ nextweek.point }</td>
                    </tr>
                </tbody>
            );
        })
    );
}

function Report(props) {
    return(
        <div className="row row-content">
            <div className="col-12">
                <p class="report p-0">Last week progress:</p>
            </div>
            <div className="col-12">
                <Table size="sm" bordered>
                    <thead>
                        <th>Project</th>
                        <th>Task</th>
                        <th>Data</th>
                        <th>Point</th>
                    </thead>
                    <Renderlaskweek lastweek={props.lastweek}/>
                </Table>
            </div>
            <div className="col-12">
                <p class="report p-0">Next week plan:</p>
            </div>
            <div className="col-12">
                <Table size="sm" bordered>
                    <thead>
                        <th>Project</th>
                        <th>Task</th>
                        <th>Data</th>
                        <th>Point</th>
                    </thead>
                    <Rendernextweek nextweek={props.nextweek}/>
                </Table>
            </div>
        </div>
    );
}
export default Report;    