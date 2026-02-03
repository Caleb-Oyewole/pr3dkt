/**
 * Legacy mock data hook - Now redirects to real API hooks
 * @deprecated Use useApi hooks instead
 */
export function useMockData() {
  return {
    data: null,
    isLoading: false,
    error: null,
  };
}

/**
 * Query builder for creating reusable API queries
 */
export class QueryBuilder {
  private key: string;
  private enabled: boolean = true;

  constructor(key: string) {
    this.key = key;
  }

  setEnabled(enabled: boolean): QueryBuilder {
    this.enabled = enabled;
    return this;
  }

  getKey(): string {
    return this.key;
  }

  isEnabled(): boolean {
    return this.enabled;
  }
}
