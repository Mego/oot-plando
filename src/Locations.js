import React, { Component } from 'react';
import DroppableLocation from './DroppableLocation';
import { LOCATIONS, ITEMS, ITEM_COPIES, JUNK_POOL } from './Constants';
import { Draggable, DragDropContext } from 'react-beautiful-dnd';
import { MersenneTwister19937, pick as randomPick } from 'random-js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    textAlign: 'center',

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
});

const junkPool = {...JUNK_POOL};
const mt = MersenneTwister19937.autoSeed();

const assignJunk = () => {
    let keys = Object.keys(junkPool);
    if(!keys.length) {
        throw Error('Exhausted junk pool while assigning blank locations!');
    }
    let item = randomPick(mt, keys);
    junkPool[item] -= 1;
    if(junkPool[item] === 0) {
        delete junkPool[item];
    }
    return item;
}

export default class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unassigned: []
        };
        for(let item of ITEMS) {
            for(let i = 0, numCopies = ITEM_COPIES[item]||1; i < numCopies; ++i) {
                this.state.unassigned.push(item+(numCopies > 1 ? '-' + (i+1) : ''));
            }
        }
        for(let locationGroup of Object.values(LOCATIONS)) {
            for(let locationArea of Object.values(locationGroup)) {
              for(let location of locationArea){
                this.state[location] = [];
              }
            }
        }
    }

    reset = () => {
        let state = {
            unassigned: []
        };
        for(let item of ITEMS) {
            for(let i = 0, numCopies = ITEM_COPIES[item]||1; i < numCopies; ++i) {
                state.unassigned.push(item+(numCopies > 1 ? '-' + (i+1) : ''));
            }
        }
        for(let locationGroup of Object.values(LOCATIONS)) {
            for(let locationArea of Object.values(locationGroup)) {
              for(let location of locationArea){
                state[location] = [];
              }
            }
        }
        this.setState(state);
    }

    getList = id => this.state[id];

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { [source.droppableId]: items };

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                ...result
            });
        }
    };

    export = () => {
        try {
            let result = {};
            Object.entries(this.state).forEach(([key, value]) => {
                if(key !== 'unassigned') {
                    if(value.length) {
                        let [item] = value;
                        if(/^([a-z]|\s)+(?:\s\d+)$/i.test(item)) {
                            item = item.split('-').slice(0, -1).join(' ');
                        } else {
                            item = item.split('-').join(' ');
                        }
                        result[key.split('-').join(' ')] = item;
                    } else {
                        result[key.split('-').join(' ')] = assignJunk();
                    }
                }
            });
            let json = '"locations": ' + JSON.stringify(result);
            let html = "<code>" + json + "</code>";
            let blob = new Blob([html], {type: 'text/html'});
            let blobURL = URL.createObjectURL(blob);
            window.open(blobURL);
        } catch(e) {
            alert(e.message)
        }
    }

    render() {
        return (
            <div style={{display: 'inline-block', width: "100%"}}>
                <button style={{float: 'right'}} type='button' name='reset' onClick={this.reset}>Reset</button>
                <button style={{float: 'right'}} type='button' name='export' onClick={this.export}>Export</button>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div style={{display: 'inline-block', width: "100%"}}>
                        <div style={{display: 'inline-block', marginLeft: '20px', maxHeight: '95vh', overflowY: 'auto', float: 'left', width: '225px'}}>
                            <DroppableLocation
                                key='unassigned'
                                droppableId='unassigned'
                                name='Unassigned'>
                                {this.state.unassigned.map((item, index) => (
                                    <Draggable
                                        key={item}
                                        draggableId={item}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}>
                                                {item.split('-').join(' ')}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            </DroppableLocation>
                        </div>
                        <div style={
                            {
                                width: 'calc(100% - 300px)',
                                float: 'left',
                                marginLeft: '20px',
                            }
                        }>
                            <Tabs>
                                <TabList>
                                {Object.keys(LOCATIONS).map(locationGroup => (
                                    <Tab key={locationGroup.split(' ').join('-')}>{locationGroup}</Tab>
                                ))}
                                </TabList>
                                {
                                  Object.keys(LOCATIONS).map((locationGroup) => (
                                    <TabPanel>
                                      <h1>{locationGroup}</h1>
                                      <Tabs>
                                        <TabList>
                                          {Object.keys(LOCATIONS[locationGroup]).map((locationName) =>(
                                            <Tab key={locationName.split(' ').join('-')}>{locationName}</Tab>
                                          ))}
                                        </TabList>
                                          {Object.entries(LOCATIONS[locationGroup]).map(([locationName, locationArray]) => (
                                            <TabPanel>
                                                  <div style={{
                                                      display: 'flex',
                                                      flexWrap: 'wrap',
                                                      justifyContent: 'space-around',
                                                      maxHeight: '75vh',
                                                      overflowY: 'auto'
                                                  }}>
                                                  {locationArray.map((location) => (
                                                    <DroppableLocation
                                                      key={location}
                                                      droppableId={location}
                                                      name={location.split('-').join(' ')}
                                                      style={{flex: 1}}
                                                      isDropDisabled={this.state[location].length > 0}>

                                                      {this.state[location].map((item, index) => (
                                                          <Draggable
                                                              key={item}
                                                              draggableId={item}
                                                              index={index}>
                                                              {(provided, snapshot) => (
                                                                  <div
                                                                      ref={provided.innerRef}
                                                                      {...provided.draggableProps}
                                                                      {...provided.dragHandleProps}
                                                                      style={getItemStyle(
                                                                          snapshot.isDragging,
                                                                          provided.draggableProps.style
                                                                      )}>
                                                                      {item.split('-').join(' ')}
                                                                  </div>
                                                              )}
                                                          </Draggable>
                                                      ))}
                                                    </DroppableLocation>
                                                ))
                                              }
                                            </div>
                                            </TabPanel>
                                          ))}
                                      </Tabs>
                                    </TabPanel>
                                  )
                                )}
                            </Tabs>
                        </div>
                    </div>
                </DragDropContext>
            </div>
        );
    }
}
