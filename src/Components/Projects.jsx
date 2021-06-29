export default function Projects(props){
const projectsData = props.projectsData.map((project, ind) => {
    return( 
        <div>
        <h1 className="titleHeader">Projects</h1>
        <hr />
            <div key={`project-${ind}`}>
                <h3>{project.title}</h3>
                <p>{project.date}</p>
                <p>{project.desc}</p>
                <p><img class="photos" src={project.photo}/></p>
                <hr/>
            </div>
        </div>
    )
    })
    return(
        <div>
            {projectsData}
        </div>
    )
}