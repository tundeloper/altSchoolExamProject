import axios from "axios";
import { useState } from "react"

function CreateRepo ({toggle}) {
    const token = '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'

    const config = {
        headers: {
          Authorization: `token ${token}`,
        },
      };
      const apiUrl = 'https://api.github.com/users/tundeloper/repos'
    
    const [repoName, setRepoName] = useState('')
    const [desc, setdesc] = useState('')
    const [isPrivate, setIsPrivate] = useState(false)


    const repoNameHandler = (event) => {
        setRepoName(event.target.value)
    }

    const repoDescHandler = (event) => {
        setdesc(event.target.value)
    }

    const createRepoHandler = async () => { 
        const data = {
            name: repoName,
            description: desc,
            private: isPrivate
        }
        try {
            const response = await axios.post(apiUrl, data, config)
            console.log(response.data, 'data')
        } catch (error) {
            console.log(error)
        }
    console.log('newRepoCreated', isPrivate)
    toggle()
    }
return <div style={{width:'70vh', zIndex: 100, background: '#84aaed9e', padding:'1rem 1rem'}}>
<div>
  <form>
  <input style={{width: '10rem', margin: '1rem'}} placeholder='Repo name' onChange={repoNameHandler} value={repoName}></input>
  <input style={{width: '10rem'}} placeholder='Description' onChange={repoDescHandler} value={desc}></input>
  <div> <span style={{fontSize: '1.5rem'}}>Private</span> <input type="checkbox" style={{width: '1rem'}} onChange={(e) => setIsPrivate(e.target.checked)} /></div>
  
  {/* <button style={{width: '20%'}} type='submit'>Submit</button> */}
  </form>
  </div>
<button style={{color: 'white', background: 'red'}} onClick={toggle}>close</button>
<button style={{color: 'white'}} onClick={createRepoHandler}>create repo</button>
</div>
}

export default CreateRepo