import React from "react";
import Input from "../Utils/Input";
import Button from "../Utils/Button";
import TextArea from "../Utils/TextArea";

const ProjectItem = ({ id, projectItem, onChange, onDelete }) => {
	return (
		<>
			<Input
				onChange={(e) => onChange(e, id)}
				type="text"
				name="projectName"
				placeholder="Project name"
				value={projectItem.projectName}
			/>
			<TextArea
				onChange={(e) => onChange(e, id)}
				name="brief"
				placeholder="Description"
				value={projectItem.brief}
			/>
			<Input
				onChange={(e) => onChange(e, id)}
				type="text"
				name="stack"
				placeholder="Project stack"
				value={projectItem.stack}
			/>
			<Input
				onChange={(e) => onChange(e, id)}
				type="text"
				name="demo"
				placeholder="Link to demo"
				value={projectItem.demo}
			/>
			<Button text="Delete" onClick={() => onDelete(id)}></Button>
		</>
	);
};

export default ProjectItem;
