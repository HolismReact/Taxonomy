import { List, Text, Image, ValueWithTitle, TitleSubtitle, BooleanProperty } from '@List'
import UpsertTag from './Upsert'

const filters = <>
    <Text
        column='Name'
        placeholder='Name'
    />
</>

const sorts = [
    {
        caption: 'ٔName A-Z',
        column: 'Name',
        direction: 'asc'
    },
    {
        caption: 'Name Z-A',
        column: 'Name',
        direction: 'desc'
    }
]

const headers = <>
    <th></th>
    <th className='text-left'>Name</th>
    <th>Is active?</th>
</>

const row = (item) => <>
    <td>
        <Image
            url={item.relatedItems.iconUrl}
            uploadUrl={`/tag/setImage?tagId=${item.id}`}
        />
    </td>
    <td>
        <TitleSubtitle
            title={
                <ValueWithTitle
                    value={item.name}
                    title={item.description}
                />}
            subtitle={item.slug}
        />
    </td>
    <td>
        <BooleanProperty
            column='show'
            value={item.show}
            actionUrl={`/tag/toggleIsActive/${item.id}`}
        />
    </td>
</>

const Tags = () => {
    return <List
        title='Tags'
        entityType='Tag'
        filters={filters}
        sorts={sorts}
        headers={headers}
        row={row}
        upsert={UpsertTag}
        hasEdit={true}
        hasDelete={true}
    />
}

export default Tags