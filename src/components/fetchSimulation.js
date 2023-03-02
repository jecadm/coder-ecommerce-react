

const fetchSimultion = (dataBase, time) =>{
    return new Promise((resolve, rejact) =>{
        setTimeout(()=>{
            resolve(dataBase);
            rejact(new Error("Exploto001"))
        }, time)
    })
}
export default fetchSimultion;
