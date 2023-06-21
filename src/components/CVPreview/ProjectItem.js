import React from "react";
import styled from "styled-components";
import Subsection from "../Utils/Subsection";

const ProjectItem = ({ projectItem }) => {
	return (
		<ProjectItemWrapper>
			<Period></Period>
			<Info>
				<Subsection title={projectItem.projectName}>
					{!!projectItem.brief && (
						<ul>
							{projectItem.brief.split("\n").map((item, key) => {
								return <li key={key}>{item}</li>;
							})}
						</ul>
					)}
					{!!projectItem.stack && <div>Tech Stack: {projectItem.stack}</div>}
					<div>
						<a href={projectItem.demo}>{projectItem.demo}</a>
					</div>
				</Subsection>
			</Info>
		</ProjectItemWrapper>
	);
};

const ProjectItemWrapper = styled.div`
	display: flex;
`;

const Period = styled.div`
	width: 29%;
`;

const Info = styled.div`
	width: 70%;
`;

export default ProjectItem;
