import { useOtpAuth } from './hooks/useOtpAuth';
import { useSsoAuth } from './hooks/useSsoAuth';

// Map of strategies hooks
const authHookMap = {
  otp: useOtpAuth,
  sso: useSsoAuth,
};

// Factory function
// passing particular hook type it can return to you that particular hook
export function createAuthHook(type) {
  return authHookMap[type];
}
