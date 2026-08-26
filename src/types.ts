export interface ScreenshotItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'hud' | 'engine' | 'playlists' | 'pip' | 'tv';
  description: string;
  badges: string[];
  imageUrl: string;
  highlightText: string;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  badge?: string;
  details: string[];
  gradient: string;
}

export interface ApkRelease {
  version: string;
  releaseDate: string;
  fileSize: string;
  architecture: string;
  minAndroid: string;
  sha256: string;
  downloadCount: string;
  changelog: string[];
  isLatest?: boolean;
  type: 'arm64' | 'universal' | 'android-tv';
  label: string;
}

export interface SupportTicket {
  id: string;
  name: string;
  email: string;
  deviceModel: string;
  androidVersion: string;
  category: 'playback' | 'm3u_import' | 'audio_sync' | 'license' | 'other';
  subject: string;
  message: string;
  status: 'open' | 'investigating' | 'resolved';
  createdAt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'playback' | 'lists';
}

export interface StreamChannel {
  id: string;
  name: string;
  category: string;
  resolution: string;
  fps: number;
  bitrate: string;
  audioCodec: string;
  videoCodec: string;
  thumbnail: string;
  description: string;
  duration?: string;
}
