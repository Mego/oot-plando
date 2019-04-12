import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';

const grid = 8;

const getListStyle = (isDraggingOver, id) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 180,
    minHeight: id === 'unassigned' ? 550 : 50
});

export default class DroppableLocation extends Component {
    render() {
        return (
            <div style={{padding: 1, minHeight: 175, position: 'relative'}}>
                <div>
                    <div style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', wordBreak: 'break-word', maxWidth: 196, minHeight: 34, display: 'flex', alignItems: 'center', justifyContent:'center'}}>{this.props.name}</div>
                </div>
                <Droppable {...this.props} placeholder='Junk'>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver, this.props.droppableId)}
                        >
                            {this.props.children}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        );
    }
}
