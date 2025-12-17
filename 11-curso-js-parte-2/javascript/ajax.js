// (()=>{
//     const xhr = new XMLHttpRequest(),
//     $xhr = document.querySelector("#xhr"),
//     $fragment = document.createDocumentFragment()

    
//     xhr.addEventListener("readystatechange", e => {
//         if(xhr.readyState !== 4)return
//         if(xhr.status >= 200 && xhr.status <= 300){
//             console.log(xhr)
//             console.log("Exito")
//             //console.log(xhr.responseText)
//             let json = JSON.parse(xhr.responseText)
//             json.forEach(el =>{
//                 const $li = document.createElement("li")
//                 $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
//                 $fragment.appendChild($li)
//             })
//             $xhr.appendChild($fragment)
//         }else{
//             console.log("Error")
//             let message = xhr.statusText || "Ocurrio un error"
//             $xhr.innerHTML = `Error ${xhr.status}: ${message}`
//         }
//         console.log("Este mensaje cargara en cualquier caso")
        
//     })

//     xhr.open("GET", "https://jsonplaceholder.typicode.com/users")

//     xhr.send()

// })();



// (()=>{
//     const $fetch = document.querySelector("#fetch"),
//     $fragment = document.createDocumentFragment()   

//     fetch("https://jsonplaceholder.typicode.com/users")
//     //.then((res) => {
//     //    console.log(res)
//     //    return res.ok?res.json(): Promise.reject(res)
//     //})
//     .then(res => (res.ok?res.json(): Promise.reject(res)))
//     .then(json => {
//         console.log(json)
//         json.forEach(el =>{
//                 const $li = document.createElement("li")
//                 $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
//                 $fragment.appendChild($li)
//             })
//             $fetch.appendChild($fragment)
//     }) 
//     .catch((err) => {
//         let message = err.statusText || "Ocurrio un error"
//         $fetch.innerHTML = `Error ${err.status}: ${message}`
//     })
//     .finally(() =>{
//         console.log("Se ejucuta independiente del fetch")
//     })
// })();



// (()=>{
//     const $fetchAsync = document.querySelector("#fetch-async"),
//     $fragment = document.createDocumentFragment()

//     async function getData(){
//         try {
//             let res = await fetch("https://jsonplaceholder.typicode.com/users"),
//                 json = await res.json();
            
//             console.log(res,json)

//             //if(!res.ok)throw new Error("Error al solicitar los datos");
//             if(!res.ok)throw { status: res.status, statusText: res.statusText}

//             json.forEach(el =>{
//                 const $li = document.createElement("li")
//                 $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
//                 $fragment.appendChild($li)
//             })
//             $fetchAsync.appendChild($fragment)
//         } catch (err) {
//             console.log(err)
//             let message = err.statusText || "Ocurrio un error"
//             $fetchAsync.innerHTML = `Error ${err.status}: ${message}`
//         }finally{
//             console.log("Se ejucuta independiente del Try catch")
//         }
//     }

//     getData()
// })()

// (()=>{
//     const $axios = document.querySelector("#axios"),
//           $fragment = document.createDocumentFragment()
    
//     axios
//     .get("https://jsonplaceholder.typicode.com/user")
//     .then(res => {
//         console.log(res)
//         res.data.forEach(el =>{
//             const $li = document.createElement("li")
//             $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
//             $fragment.appendChild($li)
//         })
//         $axios.appendChild($fragment)
//     })
//     .catch(err=>{
//         console.log(err)
//         let message = err.message || "Ocurrio un error"
//         $axios.innerHTML = `Error ${err.response.status}: ${message}`
//     })
//     .finally(()=>{console.log("Esto se ejecuta independientemente de Axios")})
// })()

(()=>{
    const $axiosAsync = document.querySelector("#axios-async"),
          $fragment = document.createDocumentFragment()

    async function getData() {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users"),
                  json = await res.data
            
            json.forEach(el =>{
                const $li = document.createElement("li")
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
                $fragment.appendChild($li)
            })
            $axiosAsync.appendChild($fragment)      
        } catch (err) {
            console.log(err.response)
            $axiosAsync.innerHTML = `Error ${err.response.status} ${err.message}`
        }finally{
            console.log("Estos se ejecuta independiente del try catch")
        }
    }

    getData()
})()