import posthog from 'posthog-js';
import { isNotProduction, isProduction } from '~/stage';

export const analytics = {
  init: () => {
    if (isProduction()) {
      posthog.init('phc_YGsUSz76So1dAT0tddgaU5KJdJ1vWjoWwgKeqdGtI3K', {
        api_host: 'https://eu.i.posthog.com',
        person_profiles: 'always',
      });
    }
  },

  track: async (name: string, data?: unknown) => {
    if (isNotProduction()) {
      console.info('[analytics]', 'track', name, data ?? {});
      return;
    }

    posthog.capture(name, data || undefined);
  },
};
