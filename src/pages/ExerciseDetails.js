import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { fetchData, exerciseOptions } from '../Utils/fetchData'

const ExerciseDetails = () => {
const [exerciseDetail, setExerciseDetail] = useState({})
const { id} = useParams();

useEffect(()=> {
  const fetchExercisesData= async () => {
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
    setExerciseDetail(exerciseDetailData);  }
})

  return (
<Box>
  <Detail  exerciseDetail={exerciseDetail}/>
  <ExerciseVideos />
  <SimilarExercises />
</Box>  )
}

export default ExerciseDetails