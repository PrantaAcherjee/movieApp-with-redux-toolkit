import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import movieapi from '../../common/api/movieapi'
import { apiKey } from '../../common/api/movieApiKeys'

export const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies',async()=>{
  const text='Harry'
  const response=await movieapi.get(`?apikey=${apiKey}&s=${text}&type=movie`)
   
   return response.data
})

export const fetchAsyncShows=createAsyncThunk('movies/fetchAsyncShows',async()=>{
  const showText='Friends'
  const response=await movieapi.get(`?apikey=${apiKey}&s=${showText}&type=series`)
   
   return response.data
})

const initialState={
 movies:[],
 shows:{},
}

const movieSlice=createSlice({
  name:'movies',
  initialState,
  reducers:{
    addMovies:(state,{payload})=>{
         state.movies= payload
    }
  },
  extraReducers:{
    [fetchAsyncMovies.pending]:()=>{
      console.log('pending')
    },
    [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
      console.log('fetched fullfilled')
      return {...state,movies:payload}
    },
    [fetchAsyncShows.fulfilled]:(state,{payload})=>{
      console.log('fetched fullfilled')
      return {...state,shows:payload}
    }
    ,
    [fetchAsyncMovies.rejected]:()=>{
      console.log('rejected')
    }
  }    
})

export const {addMovies}=movieSlice.actions;
export const getAllMovies=(state)=>state.movies.movies;
export const getAllShows=(state)=>state.movies.shows;
export default movieSlice.reducer;