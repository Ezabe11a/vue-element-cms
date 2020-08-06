
const Home=()=>import('./home/Home.vue')

const GoodAdd = ()=>import('./good/Add.vue')
const GoodList = ()=>import('./good/List.vue')


export default [
    {
        id: 1,
        text: '商品管理',
        icon: 'el-icon-s-operation',
        children: [
            { id: 11, text: '商品新增', path: '/goodadd/:id', component: GoodAdd, icon: 'el-icon-circle-plus-outline' },
            { id: 12, text: '商品列表', path: '/good/list', component: GoodList, icon: 'el-icon-s-goods' }
        ]
    },
    {
        id: 2,
        text: '概况管理',
        icon: 'el-icon-box',
        children: [
            { id: 21, text: '首页管理', path: '/home', component: Home, icon: 'el-icon-discount'}
        ]
    }
]