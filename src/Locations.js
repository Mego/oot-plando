import React, { Component } from 'react'
import DroppableLocation from './DroppableLocation'
import { Draggable, DragDropContext } from 'react-beautiful-dnd'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { setLocationItemsAction } from './store/actions'
import {
  assignItem,
  unassignItem,
  moveItem,
  exportLocations,
} from './store/helpers'
import { LOCATIONS } from './data/Constants'
import { showLocationsJSON } from './util'
import { connect } from 'react-redux'
import 'react-tabs/style/react-tabs.css'

const grid = 8

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = [...list]
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  textAlign: 'center',

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
})

class Locations extends Component {
  getList = (id) => this.props.locations[id]

  onDragEnd = (result) => {
    const { source, destination } = result

    // dropped outside the list
    if (!destination) {
      return
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      )
      this.props.onSetLocationItems(source.droppableId, items)
    } else {
      const item = this.getList(source.droppableId)
        .splice(source.index, 1)
        .pop()
      this.props.onMoveItem(
        this.props.locations,
        item,
        source.droppableId,
        destination.droppableId,
        destination.index
      )
    }
  }

  export = () => {
    const locations = exportLocations(this.props.locations)
    showLocationsJSON(locations)
  }

  render() {
    return (
      <div style={{ display: 'inline-block', width: '100%' }}>
        <button
          style={{ float: 'right' }}
          type="button"
          name="export"
          onClick={this.export}
        >
          Export
        </button>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div style={{ display: 'inline-block', width: '100%' }}>
            <div
              style={{
                display: 'inline-block',
                marginLeft: '20px',
                maxHeight: '95vh',
                overflowY: 'auto',
                float: 'left',
                width: '225px',
              }}
            >
              <DroppableLocation
                key="unassigned"
                droppableId="unassigned"
                name="Unassigned"
              >
                {this.props.locations.unassigned.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.split('-').join(' ')}
                      </div>
                    )}
                  </Draggable>
                ))}
              </DroppableLocation>
            </div>
            <div
              style={{
                width: 'calc(100% - 300px)',
                float: 'left',
                marginLeft: '20px',
              }}
            >
              <Tabs>
                <TabList>
                  {Object.keys(LOCATIONS).map((locationGroup) => (
                    <Tab key={locationGroup.split(' ').join('-')}>
                      {locationGroup}
                    </Tab>
                  ))}
                </TabList>
                {Object.keys(LOCATIONS).map((locationGroup) => (
                  <TabPanel key={locationGroup.split(' ').join('-')}>
                    <h1>{locationGroup}</h1>
                    <Tabs>
                      <TabList>
                        {Object.keys(LOCATIONS[locationGroup]).map(
                          (locationName) => (
                            <Tab key={locationName.split(' ').join('-')}>
                              {locationName}
                            </Tab>
                          )
                        )}
                      </TabList>
                      {Object.entries(LOCATIONS[locationGroup]).map(
                        ([groupName, locationArray]) => (
                          <TabPanel key={groupName.split(' ').join('-')}>
                            <div
                              style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                maxHeight: '75vh',
                                overflowY: 'auto',
                              }}
                            >
                              {locationArray.map((location) => (
                                <DroppableLocation
                                  key={location}
                                  droppableId={location}
                                  name={location.split('-').join(' ')}
                                  style={{ flex: 1 }}
                                  isDropDisabled={
                                    this.props.locations[location].length > 0
                                  }
                                >
                                  {this.props.locations[location].map(
                                    (item, index) => (
                                      <Draggable
                                        key={item}
                                        draggableId={item}
                                        index={index}
                                      >
                                        {(provided, snapshot) => (
                                          <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                              snapshot.isDragging,
                                              provided.draggableProps.style
                                            )}
                                          >
                                            {item.split('-').join(' ')}
                                          </div>
                                        )}
                                      </Draggable>
                                    )
                                  )}
                                </DroppableLocation>
                              ))}
                            </div>
                          </TabPanel>
                        )
                      )}
                    </Tabs>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </div>
        </DragDropContext>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ locations: state.locations })
const mapDispatchToProps = (dispatch) => ({
  onAssignItem: (state, item, location) =>
    assignItem(state, item, location).map((x) => dispatch(x)),
  onUnassignItem: (state, item, location) =>
    unassignItem(state, item, location).map((x) => dispatch(x)),
  onMoveItem: (state, item, oldLocation, newLocation, newIndex) =>
    moveItem(state, item, oldLocation, newLocation, newIndex).map((x) =>
      dispatch(x)
    ),
  onSetLocationItems: (location, items) =>
    dispatch(setLocationItemsAction(location, items)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Locations)
