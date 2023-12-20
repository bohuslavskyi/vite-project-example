export const navBuilder = (navItems) => {
    const getItem = (navArr) => {
        return navArr.map((nav) => {
            return {
                key: nav[0],
                label: nav[1],
                icon: nav[2] || undefined,
                children: nav[3] ? getItem(nav[3]) : undefined,
            }
        })
    }

    return getItem(navItems)
}
