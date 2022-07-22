import React from 'react';
import { Table } from 'reactstrap';

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

function Task(props) {
    return(
        <div className="row row-content">
            <div className="col-12">
            <Table size="sm" bordered>
            <thead>
                <th>Project</th>
                <th>Task</th>
                <th>Assignto</th>
                <th>Progress</th>
            </thead>
            <Rendertask tasks={props.tasks}/>
        </Table>
            </div>
        </div>
    );
}
export default Task;    