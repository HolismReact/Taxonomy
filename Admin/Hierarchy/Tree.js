import { Tree } from '@Tree'

const HierarchyTree = ({
    title,
    ...others
}) => {

    return <Tree
        title={title || 'Hierarchies'}
        entityType='Hierarchy'
        {...others}
    />
}

export { HierarchyTree }