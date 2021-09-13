export function setIntialNavigation() {
    const localStroage = window.localStorage;
    if (!localStroage.getItem('page')) setStorage('page', 'landing')
    
}

export function setStorage(key, value) {
    const localStroage = window.localStorage;
    localStroage.setItem(key, value)
}
export function getStorage(key){
    return  window.localStorage.getItem(key)
}