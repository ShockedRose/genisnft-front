import React from "react";
import { Flex, Box } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/react";

export default function RoadMap({ objectives }) {
	return (
		<>
			<Box mt={"2rem"}>
				<chakra.h2 textAlign="center" mb="1rem">
					ROADMAP
				</chakra.h2>
				{objectives.map((objective, i) => (
					<Flex justify="space-between" key={i}>
						<chakra.h3 flex="1">{objective.date}</chakra.h3>
						<chakra.p flex="2">{objective.description}</chakra.p>
					</Flex>
				))}
			</Box>
		</>
	);
}
