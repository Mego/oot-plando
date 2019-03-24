import React, { Component } from 'react';
import DroppableLocation from './DroppableLocation';
import { LOCATIONS, ITEMS, ITEM_COPIES, JUNK_POOL, REGION_COLORS } from './Constants';
import { Draggable, DragDropContext } from 'react-beautiful-dnd';
import { MersenneTwister19937, pick as randomPick } from 'random-js';


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
        for(var region in LOCATIONS) {
          for(var area in LOCATIONS[region]) {
              for(let location of LOCATIONS[region][area]) {
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
        for(var region in LOCATIONS) {
          for(var area in LOCATIONS[region]) {
              for(let location of LOCATIONS[region][area]) {
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
            <div>
                <button type='button' name='reset' onClick={this.reset}>Reset</button>
                <button style={{float: 'right'}} type='button' name='export' onClick={this.export}>Export</button>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div style={{display: 'inline-block'}}>
                        <div style={{display: 'inline-block', marginLeft: '20px', maxHeight: '95vh', overflowY: 'auto'}}>
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
                                width: '85%',
                                float: 'right',
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                maxHeight: '95vh',
                                overflowY: 'scroll'
                            }
                        }>
                            {
                              Object.keys(LOCATIONS).map(
                                (region) => (
                                  <div style={
                                    {
                                      display: 'flex',
                                      flexWrap: 'wrap',
                                      flexDirection: "column",
                                      alignItems: "center",
                                      width: '20%',
                                      backgroundColor: REGION_COLORS[region][0],
                                      color: (region === "Bosses" || region === "Lake Hylia" ? 'white' : 'black'),
                                      margin: "5px 5px 5px 5px",
                                      border: "10px solid black"
                                    }
                                  }> <h1>{region}</h1>
                                  {Object.keys(LOCATIONS[region]).map(
                                    (area) => (
                                      <div style={
                                        {
                                          width: '90%',
                                          margin: "10px",
                                          display: 'flex',
                                          justifyContent: 'center',
                                          flexDirection: "column",
                                          alignItems: "center",
                                          paddingBottom: '15px',
                                          backgroundColor: REGION_COLORS[region][1],
                                          color: 'inherit',
                                        }
                                      }>
                                      <h2 style={
                                        {
                                          textAlign: 'center',
                                        }
                                      }>{area}</h2>
                                      {Object.keys(LOCATIONS[region][area]).map(
                                        (location) => (
                                          <DroppableLocation
                                            key={LOCATIONS[region][area][location]}
                                            droppableId={LOCATIONS[region][area][location]}
                                            name={LOCATIONS[region][area][location].split('-').join(' ')}
                                            style={{}}
                                            isDropDisabled={this.state[LOCATIONS[region][area][location]].length > 0}>
                                            {this.state[LOCATIONS[region][area][location]].map((item, index) => (
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
                                        )
                                      )
                                    }</div>
                                    )
                                  )
                                }</div>
                                )
                              )
                          }
                        </div>
                    </div>
                </DragDropContext>
            </div>
        );
    }
}
