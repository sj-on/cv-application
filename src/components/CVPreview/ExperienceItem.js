import React from "react";
import styled from "styled-components";
import Subsection from "../Utils/Subsection";

const ExperienceItem = ({ experienceItem }) => {
	return (
		<ExperienceItemWrapper>
			<Period>
				{experienceItem.from} - {experienceItem.to}
			</Period>
			<Info>
				<Subsection title={experienceItem.position}>
					<div>
						{experienceItem.company}, {experienceItem.city}
					</div>
					{!!experienceItem.role && (
						<ul>
							{experienceItem.role.split("\n").map((item, key) => {
								return <li key={key}>{item}</li>;
							})}
						</ul>
					)}
				</Subsection>
			</Info>
		</ExperienceItemWrapper>
	);
};

const ExperienceItemWrapper = styled.div`
	display: flex;
`;

const Period = styled.div`
	width: 25%;
	font-weight: bold;
	margin-right: 2rem;
`;

const Info = styled.div`
	width: 70%;
`;

export default ExperienceItem;
