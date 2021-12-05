export function orderByTimestamp(polls, pollsIDs){
    return pollsIDs
        .sort((a,b) => polls[b].timestamp - polls[a].timestamp)
}