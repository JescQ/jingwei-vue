import navMenuConfig from '@/config/navMenu'
let layoutRouter = []
navMenuConfig.forEach(menu => {
    if (menu.subMenu && menu.subMenu.length) {
        menu.subMenu.forEach(subMenu => {
            layoutRouter.push({
                path: subMenu.routerName,
                name: subMenu.routerName,
                component: () =>
                    import (`@/layout/${menu.routerName}/${subMenu.routerName}/`)
            })
        })
    }
})
export default layoutRouter