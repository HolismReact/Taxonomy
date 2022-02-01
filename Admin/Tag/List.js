import { List, Text, Image } from '@List'
import UpsertTag from './Upsert'

const filters = <>
    <Text
        column='Name'
        placeholder='Name'
    />
</>

const headers = <>
    <th></th>
    <th>Name</th>
</>

const row = (item) => <>
    <td>
        <Image
            url={item.relatedItems.iconUrl}
            uploadUrl={`/blogPost/setImage?postId=${item.id}`}
        />
    </td>
    <td>{item.name}</td>
</>

const Tags = () => {
    return <List
        title='Tags'
        entityType='Tag'
        filters={filters}
        headers={headers}
        row={row}
        upsert={UpsertTag}
        hasEdit={true}
        hasDelete={true}
    />
}

export default Tags