export function useHookState<T>(discriminator?: unknown, cleanupCallback?: (storage: T ) => boolean | void): T