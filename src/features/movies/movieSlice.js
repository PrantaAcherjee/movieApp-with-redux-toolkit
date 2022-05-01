import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import movieapi from '../../common/api/movieapi'
import { apiKey } from '../../common/api/movieApiKeys'

export const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies',async(search)=>{
   
  const response=await movieapi.get(`?apikey=${apiKey}&s=${search}&type=movie`)
   
   return response.data
})

export const fetchAsyncShows=createAsyncThunk('movies/fetchAsyncShows',async(search)=>{
  
  const response=await movieapi.get(`?apikey=${apiKey}&s=${search}&type=series`)
   
   return response.data
})
export const fetchAsyncMoviesOrShowsDetails=createAsyncThunk('movies/fetchAsyncMoviesOrShowsDetails',async(id)=>{
  const response=await movieapi.get(`?apikey=${apiKey}&i=${id}&Plot=full`)  
   return response.data
})

const initialState={
 movies:[],
 shows:{},
 selectedDetails:{},
}

const movieSlice=createSlice({
  name:'movies',
  initialState,
  reducers:{
    // addMovies:(state,{payload})=>{
    //      state.movies= payload
    // }

   removeSelectedDetails:(state)=>{
    state.selectedDetails={}
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
    [fetchAsyncMoviesOrShowsDetails.fulfilled]:(state,{payload})=>{
      console.log('fetched fullfilled')
      return {...state,selectedDetails:payload}
    }
    ,
    [fetchAsyncMovies.rejected]:()=>{
      console.log('rejected')
    }
  }    
})

// export const {addMovies}=movieSlice.actions;
export const {removeSelectedDetails}=movieSlice.actions;
export const getAllMovies=(state)=>state.movies.movies;
export const getAllShows=(state)=>state.movies.shows;
export const getSelctedDetails=(state)=>state.movies.selectedDetails;
export default movieSlice.reducer;