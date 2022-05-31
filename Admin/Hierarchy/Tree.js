import { Tree, Text } from '@List'
import Upsert from './Upsert'
import { EntitySeo } from '../../Seo/Exports'

const filters = <>
    <Text
        column="Title"
        placeholder="Title"
    />
</>

const itemActions = (item) => <>
    <EntitySeo
        entityType='Hierarchy'
        entityGuid={item.guid}
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
        itemActions={itemActions}
        upsert={Upsert}
        hasEdit={true}
        hasDelete={true}
        {...others}
    />
}

export { HierarchyTree }