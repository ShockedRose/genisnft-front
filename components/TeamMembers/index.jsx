import React from "react";
import { Flex, Avatar, chakra } from "@chakra-ui/react";
import image from "next/image";

export default function TeamMembers({ members }) {
	return (
		<>
			{/* socials [{company: linkedin, url: urlSchema},...] */}
			<chakra.h2 fontFamily="inherit" textAlign="center" mt={5}>
				TEAM MEMBERS
			</chakra.h2>
			<Flex direction="row" justify="space-between" my={5}>
				{members.map((member, i) => (
					<Flex direction="column" key={i} w={"10%"}>
						<Avatar
							size="md"
							name="Dan Abrahmov"
							src={member.image}
							margin="auto"
						/>
						{/* <chakra.a fontFamily="inherit">{member.name}</chakra.a> */}
						<Flex justify="space-between" mt={3}>
							{member.socials.map((social, i) => (
								<Avatar key={i} src={social[0]} size="2xs" />
							))}
						</Flex>
					</Flex>
				))}
			</Flex>
		</>
	);
}
