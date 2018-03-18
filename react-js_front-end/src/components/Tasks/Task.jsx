import React, { Component } from 'react';
import {Tooltip,OverlayTrigger} from 'react-bootstrap';
import Checkbox from 'elements/CustomCheckbox/CustomCheckbox.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

export class Task extends Component{

    render(){
        const edit = (<Tooltip id="edit_tooltip">Edit Task</Tooltip>);
        const remove = (<Tooltip id="remove_tooltip">Remove</Tooltip>);

        return(
                <tr>
                    <td>
                        <Checkbox
                            number={this.props.index}
                            isChecked={false}
                        />
                    </td>
                    <td>{this.props.title}</td>
                    <td className="td-actions text-right">
                        <OverlayTrigger placement="top" overlay={edit}>
                            <Button
                                bsStyle="info"
                                simple
                                type="button"
                                bsSize="xs"
                            >
                                <i className="fa fa-edit"></i>
                            </Button>
                        </OverlayTrigger>

                        <OverlayTrigger placement="top" overlay={remove}>
                            <Button
                                bsStyle="danger"
                                simple
                                type="button"
                                bsSize="xs"
                                onClick={() => this.props.deleteIdea(this.props.id, this.props.index)}>
                                <i className="fa fa-times"></i>
                            </Button>
                        </OverlayTrigger>
                    </td>
                </tr>
        )
    }
}

export default Task;
