export const INCREMENT = "increment";
export const DECREMENT = "decrement";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const AsyncAction = () => async dispatch => {
    await delay(1000);
    dispatch({
        type: "increment"
    });
};
