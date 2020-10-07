import { createMuiTheme } from "@material-ui/core/styles";

export const light_theme = createMuiTheme({
	palette: {
		primary: { main: "#000" },
		secondary: {
			main: "#020f17"
		},
		background: {
			default: "#f1f7fb",
			paper: "#A3DCFF"
		},
		text: {
			primary: "#000",
			secondary: "#020f17",
			disabled: "#8BBBD9"
		},
		action: {
			disabled: "#8BBBD9"
		},
		info: {
			main: "#8b94d9"
		}
	}
});

export const dark_theme = createMuiTheme({
	palette: {
		primary: { main: "#fff" },
		secondary: {
			main: "#bbe1fa"
		},
		background: {
			default: "#1b262c",
			paper: "#0f4c75"
		},
		text: {
			primary: "#fff",
			secondary: "#bbe1fa",
			disabled: "#0f4c75"
		},
		action: {
			disabled: "#0f4c75"
		},
		info: {
			main: "#0f4c75"
		}
	}
});
