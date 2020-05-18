import React, { PropTypes } from 'react'
import './error-indicator.css'
import { connect } from 'react-redux'

const ErrorIndicator = ({ errorText }) => {
  return <div style={{ color: 'red' }}>{errorText ? errorText : 'Error!'}</div>
}

ErrorIndicator.propTypes = {
  errorText: PropTypes.string
}

const mapStateToProps = state => {
  return {
    errorText: state.error.errorText
  }
}

export default connect(mapStateToProps, null)(ErrorIndicator)
