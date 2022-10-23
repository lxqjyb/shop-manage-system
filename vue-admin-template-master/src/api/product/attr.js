import request from '@/utils/request';

// 获取一级分类数据接口 /admin/product/getCategory1 get
export const reqCategory1List=()=>{
    return request({
        url:'/admin/product/getCategory1',
        method:'get'
    })
}

// 获取二级分类数据接口  /admin/product/getCategory2/{category1Id} get
export const reqCategory2List=(category1Id)=>{
    return request({
        url:`/admin/product/getCategory2/${category1Id}`,
        method:'get'
    })
}

// 获取三级分类数据接口 /admin/product/getCategory3/{category2Id} get
export const reqCategory3List=(category2Id)=>{
    return request({
        url:`/admin/product/getCategory3/${category2Id}`,
        method:'get'
    })
}

// 获取平台属性接口  /admin/product/attrInfoList/{category1Id}/{category2Id}/{category3Id} get
export const reqAttrList=(category1Id,category2Id,category3Id)=>{
    return request({
        url:`/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`,
        method:'get'
    })
}

// 添加或者修改 属性与属性值接口  /admin/product/saveAttrInfo  post
export const reqAddOrUpdateAttr=(data)=>{
    return request({
        url:'/admin/product/saveAttrInfo',
        method:'post',
        data
    })
}

// 删除某个平台属性的接口 /admin/product/deleteAttr/{attrId} delete
export const reqDeleteAttr=(attrId)=>{
    return request({
        url:`/admin/product/deleteAttr/${attrId}`,
        method:'delete'
    })
}
