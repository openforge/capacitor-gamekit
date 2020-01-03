import { WebPlugin } from '@capacitor/core';
import { CapacitorGameKitPlugin } from './definitions';

export class CapacitorGameKitWeb extends WebPlugin implements CapacitorGameKitPlugin {
  constructor() {
    super({
      name: 'CapacitorGameKit',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const CapacitorGameKit = new CapacitorGameKitWeb();

export { CapacitorGameKit };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorGameKit);
