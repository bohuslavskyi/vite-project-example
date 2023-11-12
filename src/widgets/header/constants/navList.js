import {Paths} from "../../../paths.js";

const NavigationList = [
    {
        id: 1,
        title: 'Home',
        linkTo: Paths.home
    },
    {
        id: 2,
        title: 'Posts RTK',
        linkTo: Paths.postsRTKQuery
    },
    {
        id: 3,
        title: 'Posts Lazy',
        linkTo: Paths.postsLazyPagination
    },
    {
        id: 4,
        title: 'Antd Form',
        linkTo: Paths.antdForm
    },
]
export default NavigationList