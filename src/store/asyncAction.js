import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {base, searchUrl} from "../api/const";
const value = localStorage.getItem("search")

export const asyncSearch = createAsyncThunk(
    'search/fetchMaterial',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios({
                method: 'post',
                url: base + searchUrl + "/search/",
                data: {
                    "body": `${value}`,
                }
            })
            console.log(response)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

