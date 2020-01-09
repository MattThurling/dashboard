import React, { useState } from 'react'
import Tree from './Tree'
import Upload from './Upload'

export default props => {

  const [data, setData] = useState({})

  const parseResponse = (r) => {
    setData(r.data)
  }

  const clearUp = () => {
    setData({})
  }

  return (

      <div>
        <Upload responseHandler={parseResponse} refreshHandler={clearUp}/>
        {data.ingredients ?
          <Tree data={data} />
        : ''
        }
      </div>
    )

}