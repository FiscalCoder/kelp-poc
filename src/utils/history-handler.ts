const storageKey = "searchHistory"

export interface HistoryItem {
    query: string,
    type: "SUCCESS" | "FAILURE"
}

export interface HistoryData extends Array<HistoryItem> { }

const setHistory = (history: HistoryData) => {
    localStorage.setItem(storageKey, JSON.stringify(history))
}

export const getHistory = (): HistoryData => {
    return JSON.parse(localStorage.getItem(storageKey) || "[]");
}

export const addHistoryItem = (item: HistoryItem) => {
    let history: HistoryData = getHistory();
    history.push(item);
    setHistory(history)
}


export const deleteHistoryItem = (index: number) => {
    let history: HistoryData = getHistory();
    history.splice(index, 1);
    setHistory(history)
}

export const resetHistory = () => {
    localStorage.removeItem(storageKey);
}