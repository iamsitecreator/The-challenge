import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { itemsFetchData } from '../actions/items'

import { ItemList } from './ItemList'

class ListContainer extends Component {
  componentDidMount() {
    this.props.fetchData('http://5af1eee530f9490014ead8c4.mockapi.io/items')
  }

  render() {
    return <ItemList {...this.props} />
  }
}

ItemList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    items: state.items,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
