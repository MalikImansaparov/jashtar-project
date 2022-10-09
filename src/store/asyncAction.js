import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {base, searchUrl} from "../api/const";


export const asyncSearch = createAsyncThunk(

    'search/fetchMaterial',
    async (value, {rejectWithValue}) => {
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

