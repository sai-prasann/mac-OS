import React from 'react'
import MacWindow from './MacWindow.jsx'
import githubdata from "../../assets/github.json"
import "./github.scss"

const GitCard = ({data = {id:1, image:"", title:"", description:"", tags:[], repolink:"", demolink:""}})=>{
    return(
        <div className="gitCard">
            <img src={data.image} alt="" />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <div className="tags">
                {data.tags.map(tag =>{
                    return(
                        <p className="tag">{tag}</p>
                    )
                })}
            </div>
            <div className="links">
                <a href={data.repolink} target="_blank" rel="noopener noreferrer">RepositoryLink</a>
                <a href={data.demolink} target="_blank" rel="noopener noreferrer">{data.demolink ? "DemoLink" : ""}</a>
            </div>
        </div>
    )
}

const GitHub = ({ windowName, setWindowState}) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
        <div className="gitProfile">
            {githubdata.map(project =>{
                return(<GitCard data={project} />)
            })}
        </div>
    </MacWindow>
  )
}

export default GitHub
