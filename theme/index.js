import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: "white",
				color: "purple.800",
			},
			// styles for the `a`
			a: {
				_hover: {
					textDecoration: "underline",
				},
			},
			h2: {
				fontSize: ["2rem"],
				fontWeight: "semibold",
				lineHeight: "110%",
				letterSpacing: "-1%",
			},
			h3: {
				fontSize: ["1.2rem"],
				fontWeight: "semibold",
				lineHeight: "110%",
				letterSpacing: "-1%",
				paddingBottom: "0.5rem",
			},
		},
	},
	colors,
});

export default theme;
