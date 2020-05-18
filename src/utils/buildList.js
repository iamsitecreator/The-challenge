import React from 'react'

const liStyles = { color: 'orange', listStyleType: 'none', fontFamily: 'sans-serif' }
const pStyles = { margin: '5px 0', border: '1px solid orange', padding: '10px' }

export const buildList = items => (
  <ul>
    {items.map(item => (
      <li key={item.id} style={liStyles}>
        <p style={pStyles}>{item.label}</p>
        {item.children && item.children.length > 0 ? buildList(item.children) : null}
      </li>
    ))}
  </ul>
)
