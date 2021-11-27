import React from 'react'
import { dealsCategoryData, mainlDealCategoryData } from '../data/category-data/dealsCategoryData'
import { DetailCategory } from '../components/DetailCategory'

export const DealsPage = () => {
    return (
        <div>
            <DetailCategory 
                mainCategory={mainlDealCategoryData}
                subCategory={dealsCategoryData}
            />
        </div>
    )
}