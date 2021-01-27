import axios from "axios"
import { useDispatch } from "react-redux";
import { fetchSucces, fetchFailed } from "./pageSlice"

export const useFetchFromApi = () => {
    const dispatch = useDispatch()

    const fetchFromApi = async () => {
        try {
            const response = await axios.get(`https://api.github.com/users/Pfeszler/repos`);
            dispatch(fetchSucces(response.data))
        } catch (error) {
            dispatch(fetchFailed())
        };
    };
    return fetchFromApi;
};