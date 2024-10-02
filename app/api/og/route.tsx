/* eslint-disable @next/next/no-img-element */

import {ImageResponse} from 'next/og';
import {getBaseUrl} from "@/lib/utils";

const baseUrl = getBaseUrl();

// Constants for styling
const COLORS = {
	primary: '#305563',
	gradientStart: '#D3E5E8',
	gradientMiddle1: '#EAF4F6',
	gradientMiddle2: '#D9ECF0',
	gradientEnd: '#95CCD7',
};

const FONT_SIZES = {
	title: 160,
	subtitle: 40,
};

export const runtime = 'edge';

const size = {
	width: 1920,
	height: 1080,
};
export const contentType = 'image/png';

export async function GET() {
	return new ImageResponse(
		(
			<div
				style={{
					background: `url(${baseUrl}/og.png)`,
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<h1
						style={{
							fontSize: FONT_SIZES.title,
							fontWeight: 'bold',
							color: COLORS.primary,
						}}
					>
						dotbrains.dev
					</h1>
				</div>
				<p
					style={{
						fontSize: FONT_SIZES.subtitle,
						fontWeight: 'bold',
						color: COLORS.primary,
						textAlign: 'center',
						maxWidth: '80%',
					}}
				>
					Making the world better through software
				</p>
			</div>
		),
		{
			...size,
		}
	);
}
