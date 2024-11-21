interface Project {
    title: string;
    description: string;
    link: string;
  }
  
  const projects: Project[] = [
    { title: "Project 1", description: "A modern website.", link: "#" },
    { title: "Project 2", description: "A responsive app.", link: "#" },
    { title: "Project 3", description: "An e-commerce store.", link: "#" },
  ];
  
  // Render Projects Dynamically
  const projectList = document.getElementById("project-list");
  if (projectList) {
    projects.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      projectList.appendChild(projectDiv);
    });
  }
  
  // Contact Form Handler
  const contactForm = document.getElementById("contact-form") as HTMLFormElement;
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your message!");
      contactForm.reset();
    });
  }