import React from 'react';
import { Table } from 'reactstrap';
import { Card, CardImg } from 'reactstrap';

function Rendertask({tasks}) {
    return (
        tasks.map(function(task) {
            return(
                <tbody key = {task.id}>
                    <tr>
                        <td>{ task.project }</td>
                        <td>{ task.title }</td>
                        <td>{ task.assignto }</td>
                        <td>{ task.progress }</td>
                    </tr>
                </tbody>
            );
        })
    );
}

function Rendercloudservices({cloudservices}) {
    return (
        cloudservices.map(function(cloudservice) {
            return(
                <div key={cloudservice.id} className="col-1 text-dark p-1">
                <Card inverse>
                    <CardImg className="img" src={cloudservice.image} alt={cloudservice.service} />
                </Card>
            </div>
            );
        })
    );
}

function Task(props) {
    return(
        <div className="row row-content">
            <div className="col-12">
                <p className="report p-1">The one who have the background of, the basic knowledge of or want to learn one or more of the following:</p>
                    <p align="left" className="report p-1">
                        <img src="https://skillicons.dev/icons?i=nodejs,aws,graphql,bootstrap,angular,ts,js,webpack,sass,css,html,git,github,linux,vscode" />
                    </p>
                    <p className="report p-1">The one who is able to read aws official documents to use their tools.</p>
                    <p className="report p-1">The one who have the following background is preffered:</p>
                    <div className="row row-card p-1">
                        <Rendercloudservices cloudservices={props.cloudservices}/>
                    </div>
                    <Table size="sm" bordered>
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Task</th>
                                <th>Assignto</th>
                                <th>Progress</th>
                            </tr>
                        </thead>
                        <Rendertask tasks={props.tasks}/>
                    </Table>
            </div>
        </div>
    );
}
export default Task;    