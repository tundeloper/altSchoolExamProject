import { useEffect, useState } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const token = ''

const config = {
    headers: {
        Authorization: `token ${token}`,
    },
};

const RepoDescription = () => {
    const { repoName } = useParams()
    console.log(repoName)
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

    const newData = {
        name: 'new_repository_name', // New repository name
        description: 'New description', // New repository description
    };

    const updateHandler = async () => {
        const response = await axios.patch(apiUrl, newData, config)

    }
    return <div style={{ height: '100vh' }}>
        <header className='App-header'>{repoName}</header>
        <div className='App-body'>
            <table>
                <thead>
                    <tr>
                        <th>{repo.name}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Star</td>
                        <td>{repo.watchers}</td>
                    </tr>
                    <tr>
                        <td>allow forking</td>
                        <td>{repo.allow_forking && repo.allow_forking.toString()}</td>
                    </tr>
                    <tr>
                        <td>default branch</td>
                        <td>{repo.default_branch}</td>
                    </tr>
                    <tr>
                    </tr>
                </tbody>
            </table>
            <button onClick={updateHandler}>update</button>
        </div>
    </div>
}

export default RepoDescription