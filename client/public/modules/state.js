export function updateWindowHistory(url, data) {
    window.history.pushState(data, '', url);
}

export function handleBrowserBackButtonClick(callback) {
    window.onpopstate = (e) => {
        if (e.state === null) {
            window.location.reload();
        } else if (e.state){
            callback(e.state);
        }
    }
}
