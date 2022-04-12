async function getKittens(){
    try{   
        let response = await fetch('https://www.reddit.com/r/Kitten.json', {mode: 'cors'})
        let kittens = await response.json()
        return kittens
    } catch(err){
        return err
    }
  }

  
export default getKittens