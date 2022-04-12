import getKittens from './kittenList'
let urls = []
let k = getKittens().then(data => data)
      .then(list => {
        list.data.children.forEach( (i) => { 
          const regex = /(https?:\/\/.*\.(?:png|jpg))/i
          if(regex.test(i.data.url)){
            urls.push(i.data.url)
          }
        })
      })

export default k
