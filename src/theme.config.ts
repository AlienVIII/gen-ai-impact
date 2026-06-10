/**
 * Centralized Theme Configuration
 * Export theme values for use in JavaScript/TypeScript files
 */
export const theme = {
	name: 'GenAI Impact',
	description: 'Warm, approachable theme for technical documentation',

	colors: {
		// Core brand
		background: '#f4ebd2',
		text: '#4a3f36',
		accent: '#c18a63',

		// Surfaces
		surface: '#fff7e8',
		surfaceMuted: '#eadfc7',
		surfaceElevated: '#fffaf0',

		// Text
		textSecondary: '#6f6257',
		textTertiary: '#8b7b6d',
		textInverse: '#fff7e8',

		// Border / divider
		border: '#dcc8ad',
		borderMuted: '#e8dbc6',
		borderAccent: '#c18a63',

		// Interactive
		link: '#8f5f3f',
		linkHover: '#6f472f',
		hover: '#ead8bd',
		active: '#dfc6a8',
		focus: '#9f6846',

		// Accent scale
		accentLight: '#ead8bd',
		accentSoft: '#d9b08c',
		accentDark: '#8f5f3f',

		// Navigation / sidebar
		sidebarBackground: '#efe2c9',
		sidebarText: '#4a3f36',
		sidebarTextMuted: '#7c6e62',
		sidebarActiveBackground: '#dcc8ad',
		sidebarActiveText: '#3b312a',

		// Cards
		cardBackground: '#fff7e8',
		cardBorder: '#dcc8ad',
		cardShadow: 'rgba(74, 63, 54, 0.08)',

		// Code
		codeBackground: '#eadfc7',
		codeText: '#3b312a',
		codeBorder: '#d6c3a6',
		inlineCodeBackground: '#ead8bd',
		inlineCodeText: '#6f472f',

		// Table
		tableHeaderBackground: '#eadfc7',
		tableRowBorder: '#dcc8ad',
		tableRowHover: '#fff7e8',

		// Status / callouts
		info: '#6f7f8f',
		infoBackground: '#e5edf0',
		success: '#6f7d55',
		successBackground: '#e8ecd8',
		warning: '#b47a3c',
		warningBackground: '#f1dfbd',
		danger: '#a85f4f',
		dangerBackground: '#f0d8d1',

		// Selection / overlay
		selection: '#dfc6a8',
		overlay: 'rgba(74, 63, 54, 0.16)',
	},

	typography: {
		fontFamily:
			'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
		headingWeight: 700,
		bodyWeight: 400,
		codeFontFamily:
			'"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
	},

	radius: {
		sm: '6px',
		md: '10px',
		lg: '16px',
		pill: '999px',
	},

	shadow: {
		sm: '0 1px 2px rgba(74, 63, 54, 0.06)',
		md: '0 8px 24px rgba(74, 63, 54, 0.08)',
	},

	logo: {
		text: 'GenAI Impact',
		layout: 'stacked',
		primaryLine: 'GenAI',
		secondaryLine: 'IMPACT',
		textColor: '#4a3f36',
		accentTextColor: '#c18a63',
		background: 'transparent',
	},

	metadata: {
		title: 'GenAI Impact',
		description: 'Warm, approachable technical documentation for GenAI learning and adoption.',
		themeColor: '#f4ebd2',
		ogBackground: '#f4ebd2',
		ogText: '#4a3f36',
		ogAccent: '#c18a63',
	},
} 

export default theme;
