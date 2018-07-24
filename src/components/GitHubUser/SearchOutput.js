import React from 'react'

export default props => {
  if (props.loading) {
    return <div>Loading...</div>
  }

  if (props.error) {
    return <div>{props.error.message}</div>
  }

  return <ul className='list-group mt-3'>
    {props.info && Object.keys(props.info).map((key, i) => (
      <li className='list-group-item' key={i}><strong>{key}:</strong> {props.info[key]}</li>
    ))}
  </ul>
}
