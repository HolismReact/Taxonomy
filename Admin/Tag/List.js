import { List, Text } from '@List'

const filters = <>
    <Text
        column='Name'
        placeholder='Name'
    />
</>

const headers = <>
    <th>Name</th>
</>

const row = (item) => <>
    <td>{item.name}</td>
</>

const Tags = () => {
    return <List
        title='Tags'
        entityType='Tag'
        filters={filters}
        headers={headers}
        row={row}
    />
}

export default Tags