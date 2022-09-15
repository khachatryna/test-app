import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  coursesList: [
    {
      id: 1,
      title: "Illustration",
      lessonsCount: 25,
      tiem: "124min",
      image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      status: 1,
    },
    {
      id: 2,
      title: "Graphic design",
      lessonsCount: 30,
      tiem: "236min",
      image: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg",
      status: 1,
    },
    {
      id: 3,
      title: "Illustration",
      lessonsCount: 25,
      tiem: "124min",
      image: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
      status: 1,
    },
    {
      id: 4,
      title: "Graphic design",
      lessonsCount: 30,
      tiem: "236min",
      image: "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg",
      status: 2,
    },
    {
      id: 5,
      title: "Illustration",
      lessonsCount: 25,
      tiem: "124min",
      image: "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg",
      status: 2,
    },
    {
      id: 6,
      title: "Graphic design",
      lessonsCount: 30,
      tiem: "236min",
      image: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg",
      status: 2,
    },
    {
      id: 7,
      title: "Illustration",
      lessonsCount: 25,
      tiem: "124min",
      image: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg",
      status: 2,
    },
    {
      id: 8,
      title: "Graphic design",
      lessonsCount: 30,
      tiem: "236min",
      image: "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg",
      status: 3,
    },
    {
      id: 9,
      title: "Illustration",
      lessonsCount: 25,
      tiem: "124min",
      image: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg",
      status: 3,
    },
    {
      id: 10,
      title: "Graphic design",
      lessonsCount: 30,
      tiem: "236min",
      image: "https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png",
      status: 3,
    },
    {
      id: 11,
      title: "Illustration",
      lessonsCount: 25,
      tiem: "124min",
      image: "https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_960_720.jpg",
      status: 3,
    },
    {
      id: 12,
      title: "Graphic design",
      lessonsCount: 30,
      tiem: "236min",
      image: "https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_960_720.jpg",
      status: 3,
    }
  ],
  status: 'idle',
};


export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {}
});


export const selectCoursesList = (state) => state.courses.coursesList;

export default coursesSlice.reducer;
