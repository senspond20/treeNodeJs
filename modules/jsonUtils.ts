
export function getPrettyJsonObject(obj : any){
    if(typeof obj === 'object'){
        return JSON.stringify(obj,null,2)
    }else{
        return obj;
    }
}
