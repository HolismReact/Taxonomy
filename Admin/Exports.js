import { Hierarchies } from './Hierarchy/List'
import { HierarchyTree } from './Hierarchy/Tree'
import { Tags } from './Tag/List'

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