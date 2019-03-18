const initialStore = {
    count: 0
};

export default (store = initialStore, action)=>{
    switch (action.type) {
        case "increment":
            return {
                count: store.count + 1
            };
        case "decrement":
            return {
                count: store.count - 1
            };
        default:
            return store;
    }
};
