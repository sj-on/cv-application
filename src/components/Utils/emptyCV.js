import { v4 as uuidv4 } from "uuid";
import emptyAvatar from "../../assets/empty_avatar.png";

const exampleCV = {
	personalInfo: {
		firstName: "",
		lastName: "",
		title: "",
		photo: emptyAvatar,
		address: "",
		phoneNumber: "",
		email: "",
		description: "",
	},
	experience: [
		{
			id: uuidv4(),
			position: "",
			company: "",
			city: "",
			from: "",
			to: "",
			role: "",
		},
	],
	education: [
		{
			id: uuidv4(),
			universityName: "",
			city: "",
			degree: "",
			subject: "",
			from: "",
			to: "",
			achievements: "",
		},
	],
	project: [
		{
			id: uuidv4(),
			projectName: "",
			brief: "",
			stack: "",
			demo: "",
		},
	],
};

export default exampleCV;
