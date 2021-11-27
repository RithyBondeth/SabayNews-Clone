import React from 'react'
import { lifeCategoryData, mainLifeCategoryData } from '../data/category-data/lifeCategoryData'
import { DetailCategory } from '../components/DetailCategory'

export const LifeandSocietyPage = () => {
    return (
        <div>
            <DetailCategory 
                mainCategory={mainLifeCategoryData}
                subCategory={lifeCategoryData}
            />
        </div>
    )
}
