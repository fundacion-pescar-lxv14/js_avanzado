export function pull({url, key, store = localStorage}){
    fetch(url)
    .then(response => response.json())
    .then(data => write(key, data, store))
}
export function read(k,s){
    return JSON.parse(store.getItem(k)) ?? s.getItem(k)
}
export function write(k,v,s){
    return s.setItem(k, JSON.stringify(v))
}