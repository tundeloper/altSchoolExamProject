import { useEffect, useState } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const token = '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'

const config = {
    headers: {
        Authorization: `token ${token}`,
    },
};

const RepoDescription = () => {
    const { repoName } = useParams()
    const [repo, setRepo] = useState([])
    const apiUrl = `https://api.github.com/repos/tundeloper/${repoName}`


    useEffect(() => {
        async function fetchRepo() {
            try {
                const response = await axios.get(apiUrl, config)
                setRepo(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchRepo()
    }, [])

    console.log(repo)
    return <div style={{ height: '100vh' }}>
    <header className='App-header'>{repoName}</header>
    <div className='App-body'>
        
    </div>
    </div>
}

export default RepoDescription