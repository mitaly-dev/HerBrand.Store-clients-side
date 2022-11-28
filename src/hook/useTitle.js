import { useEffect } from "react"

const useTitle =title=>{

    useEffect(()=>{
        document.title=`${title}-HerBrand.Store`
    },[title])

}
export default useTitle