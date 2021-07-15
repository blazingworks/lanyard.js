import { DiscordStatus, RestProtocol } from './types';

export interface RestOptions {
    protocol?: RestProtocol,
    url?: string
}

export interface LanyardResponse {
    active_on_discord_mobile: boolean,
    active_on_discord_desktop: boolean,
    listening_to_spotify: boolean,
    spotify: Spotify | null,
    discord_user: DiscordUser,
    discord_status: DiscordStatus,
    activities: Activity[]
}

export interface Spotify {
    timestamps: Timestamps,
    song: string,
    artist: string,
    album_art_url: string,
    album: string
}

export interface DiscordUser {
    username: string,
    public_flags?: number,
    id: string,
    discriminator: string,
    avatar: string | null
}

export interface Activity {
    type: number,
    timestamps?: Timestamps,
    state: string,
    name: string,
    id: string,
    details?: string,
    created_at: number,
    assets?: Assets
    application_id: string | null
    emoji?: Emoji
}

export interface Timestamps {
    start: number,
    end?: number
}

export interface Assets {
    small_text?: string,
    small_image?: string,
    large_text?: string,
    large_image?: string,
}

export interface Emoji {
    name: string,
    id?: string,
    aniamted?: boolean
}