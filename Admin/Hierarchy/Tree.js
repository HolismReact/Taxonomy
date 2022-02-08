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
        upsert={Upsert}
        {...others}
    />
}

export { HierarchyTree }