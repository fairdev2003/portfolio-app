// place files you want to import through the `$lib` alias in this folder.

import {
	websiteStack,
	techStackItems,
	pageSections,
	projects,
	quotes,
	music_phrases
} from '$lib/static';
import { klimsonApp } from './global.svelte';
import type {
	DiscordActivity,
	DiscordActivityButton,
	DiscordAvatar,
	DiscordPresenceData,
	DiscordPresenceResponse,
	ActivityType,
	DiscordUser,
	Diary,
	RolePrivileges,
	SpotifyActivity,
	User,
	UserRoles
} from '../types/discord_status.types';
import { Compiler } from '../routes/blog/sfm/(components)/compiler/sfm.compiler';

export type {
	DiscordActivity,
	DiscordActivityButton,
	DiscordAvatar,
	DiscordPresenceData,
	DiscordPresenceResponse,
	ActivityType,
	DiscordUser,
	Diary,
	RolePrivileges,
	SpotifyActivity,
	User,
	UserRoles
};

export { Compiler };
export { websiteStack, techStackItems, pageSections, projects, quotes, music_phrases };
export { klimsonApp };
