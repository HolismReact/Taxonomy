import { Tree, Text } from '@List'
import Upsert from './Upsert'

const filters = <>
    <Text
        column="Title"
        placeholder="Title"
    />
</>

const HierarchyTree = ({
    title,
    ...others
}) => {

    return <Tree
        title={title || 'Hierarchies'}
        entityType='Hierarchy'
        filters={filters}
        show={item => {
            return item.title
        }}
        upsert={Upsert}
        hasEdit={true}
        hasDelete={true}
        {...others}
    />
}

export { HierarchyTree }