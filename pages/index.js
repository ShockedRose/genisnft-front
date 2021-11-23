import { Box, Flex } from "@chakra-ui/layout";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import RarityList from "../components/RarityList";
import RoadMap from "../components/RoadMap";

import objectives from "../components/RoadMap/dummyObjectives";
import TeamMembers from "../components/TeamMembers";
import { dummyMembers } from "../components/TeamMembers/dummyData";

export default function Home({ title }) {
	return (
		<Box w={["100%", "100%", "60%", "50%"]} pt="6rem" mx="auto">
			<Flex justify="space-between">
				<Image src="/images/Placeholder.jpg" width={200} height={200} />
				<Flex
					direction="column"
					justify="space-between"
					w="60%"
					sx={{
						"& h2": {
							flex: "1",
						},
						"& p": {
							flex: "2",
						},
					}}
				>
					<h2>{title || "Lorem Ipsum"}</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Rem illum quisquam aut tenetur. Accusantium quo quasi
						porro natus velit autem ut, voluptas quos saepe quaerat
						aperiam, minus illum, neque quia?
					</p>
				</Flex>
			</Flex>
			<RarityList />
			<RoadMap objectives={objectives} />
			<TeamMembers members={dummyMembers} />
		</Box>
	);
}
