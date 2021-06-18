import CategoryList from "./Taxonomy/Category/List";
import TagList from "./Taxonomy/Tag/List";

var routes = [
    {
        path: "/categories",
        component: CategoryList
    },
    {
        path: "/tags",
        component: TagList
    }
]

export default routes;