import React from 'react'
import { autoTalkCategoryData, mainAutoTalkCategoryData } from '../data/category-data/autoTalkCategoryData'
import { DetailCategory } from '../components/DetailCategory'
import AutoTalkPoster from '../assets/category-images/posters/autotalk-poster.jpeg'

export const AutoTalkPage = () => {
    return (
        <div>
            <DetailCategory 
                mainCategory={mainAutoTalkCategoryData}
                subCategory={autoTalkCategoryData}
                poster={true}
                posterBg={AutoTalkPoster} 
            />
        </div>
    )
}
