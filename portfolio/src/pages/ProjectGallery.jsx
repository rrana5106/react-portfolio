import Project from "../components/Project";
import projects from "../data/projects.json";

function ProjectGallery() {
  return (
    <div>
      This is list of my past projects
      <div>
        {/* <Project title="Project 1" description="This is my project 1" />
        <Project title="Project 2" description="This is my project 2" />
        <Project title="Project 3" description="This is my project 3" />
        <Project title="Project 4" description="This is my project 4" />
        <Project title="Project 5" description="This is my project 5" />
        <Project title="Project 6" description="This is my project 6" /> */}
        {/* same info as above but now having the data in the data folder we can use map because the info is in array */}
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              title={project.tittle}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectGallery;
