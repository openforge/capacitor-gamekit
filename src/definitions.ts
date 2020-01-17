declare module "@capacitor/core" {
  interface PluginRegistry {
    CapacitorGameKit: CapacitorGameKitPlugin;
  }
}

export interface CapacitorGameKitPlugin {
  auth(): Promise<any>;
  signOut(): Promise<any>;
  isSignedIn(): Promise<any>;
  submitScore(): Promise<any>;
  submitScoreNow(): Promise<any>;
  getPlayerScore(): Promise<any>;
  showAllLeaderboards(): Promise<any>;
  showLeaderboard(): Promise<any>;
  showAchievements(): Promise<any>;
  unlockAchievement(): Promise<any>;
  unlockAchievementNow(): Promise<any>;
  incrementAchievement(): Promise<any>;
  incrementAchievementNow(): Promise<any>;
  showPlayer(): Promise<any>;
}
