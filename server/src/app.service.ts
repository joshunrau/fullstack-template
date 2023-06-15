import { Injectable } from '@nestjs/common';

import { type Greeting } from '@app/types';

@Injectable()
export class AppService {
  sayHello(name?: string): Greeting {
    return { message: `Hello ${name ?? 'World'}` };
  }
}
