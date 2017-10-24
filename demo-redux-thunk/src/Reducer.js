export default (state = {status: "increment_loading"}, action) => {
    switch (action.type) {
        case "increment_loading":
            return {
                status: "increment_loading"
            };
        case "increment_success":
            return {
                status: "increment_success"
            };
        case "increment_fail":
            return {
                status: "increment_fail"
            };
        default:
            return state
    }
};