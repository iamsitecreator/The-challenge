import React from 'react'
import { buildList } from '../utils/buildList'
import secondList from '../secondList'

import Loader from './loader/Loader'
import ErrorIndicator from './error-indicator/ErrorIndicator'

export const ItemList = props => {
  const containerStyles = { margin: 'auto', maxWidth: '500px' }
  const boxStyles = { marginBottom: '20px', borderBottom: '1px solid grey', paddingBottom: '20px' }
  const { items, loading, error } = props
  return (
    <div style={containerStyles}>
      {loading ? <Loader /> : null}
      {error && !loading ? <ErrorIndicator /> : null}
      <ul style={boxStyles}>{items && items.map(item => <li key={item.id}>{item.label}</li>)}</ul>

      <div className='second-list'>{buildList(secondList)}</div>
    </div>
  )
}
