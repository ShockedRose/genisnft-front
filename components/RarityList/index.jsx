import React from "react";
import { Box, Flex } from "@chakra-ui/layout";

export default function RarityList(props) {
	return (
		<Flex
			direction="row"
			justify="space-between"
			mt="2rem"
			sx={{
				"& > *": {
					width: "28%",
				},
			}}
		>
			<Flex direction="column">
				<h3>Rarity Common</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Ipsam, id eos unde perferendis nobis aspernatur voluptas
					modi aperiam saepe?
				</p>
			</Flex>
			<Flex direction="column">
				<h3>Rarity unCommon</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Ipsam, id eos unde perferendis nobis aspernatur voluptas
					modi aperiam saepe?
				</p>
			</Flex>
			<Flex direction="column">
				<h3>Rarity Webo</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Ipsam, id eos unde perferendis nobis aspernatur voluptas
					modi aperiam saepe?
				</p>
			</Flex>
		</Flex>
	);
}
