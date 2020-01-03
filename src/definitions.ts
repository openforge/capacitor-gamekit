declare module "@capacitor/core" {
  interface PluginRegistry {
    CapacitorGameKit: CapacitorGameKitPlugin;
  }
}

export interface CapacitorGameKitPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
