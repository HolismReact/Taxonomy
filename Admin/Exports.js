import { Hierarchies } from './Hierarchy/List'
import { HierarchyTree } from './Hierarchy/Tree'
import Tags from './Tag/List'
import ManageTags from './Tag/Manage'
import ManageHierarchies from './Hierarchy/Manage'

const TaxonomyRoutes = [
    {
        "path": "/hierarchies",
        "component": HierarchyTree
    },
    {
        "path": "/tags",
        "component": Tags
    }
]

export { TaxonomyRoutes }
export { Hierarchies }
export { Tags }
export { ManageTags }
export { ManageHierarchies }