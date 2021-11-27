import React from 'react'
import { bacIICategoryData, mainBacIICategoryData } from '../data/category-data/bacIICategoryData'
import { DetailCategory } from '../components/DetailCategory'
import BacIIPoster from '../assets/category-images/posters/bacii-poster.jpeg'

export const BacIIPage = () => {
    return (
        <div>
            <DetailCategory 
                mainCategory={mainBacIICategoryData}
                subCategory={bacIICategoryData}
                poster={true}
                posterBg={BacIIPoster}
            />
        </div>
    )
}
