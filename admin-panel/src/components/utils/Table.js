import { useState } from 'react'
import { Table as AntTable } from 'antd'

const converColumns = columns => columns.map(c => ({ ...c, dataIndex: c.key }))

const Table = ({ data, columns, rowKey, loading }) => {
  const [tableColumns] = useState(converColumns.bind({}, columns))
  console.log(tableColumns)

  return (
    <AntTable
      dataSource={data}
      columns={tableColumns}
      rowKey={rowKey}
      loading={loading}
    />
  )
}

Table.defaultProps = {
  rowKey: 'id'
}

export default Table
