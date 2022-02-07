import { Hierarchies } from './Hierarchy/List'
import { Tags } from './Tag/List'

const TaxonomyRoutes = [
    {
        "path": "/hierarchies",
        "component": Hierarchies
    },
    {
        "path": "/tags",
        "component": Tags
    }
]

export { TaxonomyRoutes }
export { Hierarchies }
export { Tags }