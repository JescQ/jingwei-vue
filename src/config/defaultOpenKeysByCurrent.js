import navMenuConfig from './navMenu'

const obj = {}

navMenuConfig.forEach(menu => {
    if (menu.subMenu && menu.subMenu.length) {
        menu.subMenu.forEach(subMenu => {
            obj[subMenu.routerName] = menu.routerName
        })
    }
})

export default obj