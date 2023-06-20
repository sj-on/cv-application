import React from "react";
import Input from "../Utils/Input";
import Button from "../Utils/Button";
import TextArea from "../Utils/TextArea";

const ExperienceItem = ({ id, experienceItem, onChange, onDelete }) => {
	return (
		<>
			<Input
				onChange={(e) => onChange(e, id)}
				type="text"
				name="position"
				placeholder="Position"
				value={experienceItem.position}
			/>
			<Input
				onChange={(e) => onChange(e, id)}
				type="text"
				name="company"
				placeholder="Company"
				value={experienceItem.company}
			/>
			<Input
				onChange={(e) => onChange(e, id)}
				type="text"
				name="city"
				placeholder="City"
				value={experienceItem.city}
			/>
			<Input
				onChange={(e) => onChange(e, id)}
				type="text"
				name="from"
				placeholder="From"
				value={experienceItem.from}
			/>
			<Input
				onChange={(e) => onChange(e, id)}
				type="text"
				name="to"
				placeholder="To"
				value={experienceItem.to}
			/>
			<TextArea
				onChange={(e) => onChange(e, id)}
				name="role"
				placeholder="Role"
				value={experienceItem.role}
			/>
			<Button text="Delete" onClick={() => onDelete(id)}></Button>
		</>
	);
};

export default ExperienceItem;
