import React from 'react'
import { healthyCategoryData, mainHealthyCategoryData } from '../data/category-data/healthyCategoryData'
import { DetailCategory } from '../components/DetailCategory'
import HealthyPoster from '../assets/category-images/posters/healthy-poster.jpeg'

export const HealthyLifePage = () => {
    return (
        <div>
            <DetailCategory 
                mainCategory={mainHealthyCategoryData}
                subCategory={healthyCategoryData}
                poster={true}
                posterBg={HealthyPoster}
            />
        </div>
    )
}